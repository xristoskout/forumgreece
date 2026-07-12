import { Redis } from "@upstash/redis";

const ADB_HOST = "aerodatabox.p.rapidapi.com";
const ADB_KEY = process.env.RAPIDAPI_KEY ?? "";
const CACHE_TTL = 300; // 5 minutes fresh cache
const STALE_TTL = 1800; // 30 minutes — serve stale on 429

let redis: Redis | null = null;
try {
  redis = Redis.fromEnv();
} catch {
  console.warn("[flights] Redis not configured — caching disabled");
}

// L1 in-memory cache (survives across requests in same server process)
const memCache = new Map<string, { ts: number; data: FlightData }>();
const MEM_TTL = 60_000; // 1 minute in-memory

export type FlightData = {
  departures: unknown[];
  arrivals: unknown[];
};

const AIRPORTS: Record<string, { iata: string; name: string }> = {
  LGAV: { iata: "ATH", name: "Athens" },
  LGTS: { iata: "SKG", name: "Thessaloniki" },
  LGIR: { iata: "HER", name: "Heraklion" },
  LGNC: { iata: "CHQ", name: "Chania" },
  LGSR: { iata: "JTR", name: "Santorini" },
  LGMK: { iata: "JMK", name: "Mykonos" },
  LGRP: { iata: "RHO", name: "Rhodes" },
  LGKR: { iata: "CFU", name: "Corfu" },
  LGKF: { iata: "EFL", name: "Kefalonia" },
  LGZA: { iata: "ZTH", name: "Zakynthos" },
  LGKO: { iata: "KGS", name: "Kos" },
  LGMT: { iata: "MJT", name: "Lesvos" },
  LGLM: { iata: "LXS", name: "Lemnos" },
  LGCH: { iata: "JKH", name: "Chios" },
  LGPA: { iata: "PAS", name: "Paros" },
  LGNX: { iata: "JNX", name: "Naxos" },
  LGKP: { iata: "AOK", name: "Karpathos" },
  LGML: { iata: "MLO", name: "Milos" },
  LGSY: { iata: "JSI", name: "Skiathos" },
  LGPV: { iata: "PVK", name: "Preveza" },
  LGAL: { iata: "KVA", name: "Kavala" },
  LGSM: { iata: "SMI", name: "Samos" },
  LGIK: { iata: "JIK", name: "Ikaria" },
  LGKL: { iata: "KLX", name: "Kalamata" },
  LGKA: { iata: "KSO", name: "Kastoria" },
  LGRX: { iata: "GPA", name: "Patras" },
};

export function getAirportInfo(icao: string) {
  return AIRPORTS[icao] ?? null;
}

export function getAllAirports() {
  return Object.entries(AIRPORTS).map(([icao, info]) => ({
    icao,
    ...info,
  }));
}

export async function fetchFlights(
  airportIcao: string
): Promise<FlightData | null> {
  const airport = AIRPORTS[airportIcao];
  if (!airport) {
    console.warn(`[flights] Unknown ICAO: ${airportIcao}`);
    return null;
  }

  const iata = airport.iata;
  const cacheKey = `flights:${iata}`;

  // 0. L1 in-memory check
  const mem = memCache.get(cacheKey);
  if (mem && Date.now() - mem.ts < MEM_TTL) return mem.data;

  // 1. Check Redis cache (fresh)
  if (redis) {
    try {
      const cached = await redis.get<FlightData>(cacheKey);
      if (cached && Object.keys(cached).length > 0) {
        const hasData =
          (cached.departures?.length ?? 0) > 0 ||
          (cached.arrivals?.length ?? 0) > 0;
        if (hasData) {
          memCache.set(cacheKey, { ts: Date.now(), data: cached });
          return cached;
        }
      }
    } catch {
      // Redis unavailable — fall through to API
    }
  }

  // 2. Fetch from AeroDataBox using IATA
  if (!ADB_KEY) {
    console.warn("[flights] RAPIDAPI_KEY not set");
    return null;
  }

  const url = `https://${ADB_HOST}/flights/airports/iata/${iata}?offsetMinutes=-120&durationMinutes=480&withLocation=false&withAircraftImage=false`;

  try {
    const res = await fetch(url, {
      headers: {
        "x-rapidapi-key": ADB_KEY,
        "x-rapidapi-host": ADB_HOST,
      },
    });

    if (res.status === 429) {
      console.warn(`[flights] Rate limited for ${iata} — trying stale cache`);
      // On 429, try stale cache with longer TTL
      if (redis) {
        try {
          const stale = await redis.get<FlightData>(cacheKey);
          if (stale) return stale;
        } catch {}
      }
      // No stale cache either — return empty but don't cache it
      return { departures: [], arrivals: [] };
    }

    if (!res.ok) {
      console.error(`[flights] AeroDataBox HTTP ${res.status} for ${iata}`);
      return null;
    }

    const data: FlightData = await res.json();

    // 3. Only cache non-empty results (don't cache empty/error responses)
    const hasFlights =
      (data.departures?.length ?? 0) > 0 ||
      (data.arrivals?.length ?? 0) > 0;

    if (hasFlights) {
      memCache.set(cacheKey, { ts: Date.now(), data });
      if (redis) {
        try {
          await redis.set(cacheKey, data, { ex: CACHE_TTL });
        } catch {}
      }
    }

    return data;
  } catch (err) {
    console.error(`[flights] Fetch failed for ${iata}:`, err);
    // Try stale cache on network error
    if (redis) {
      try {
        const stale = await redis.get<FlightData>(cacheKey);
        if (stale) return stale;
      } catch {}
    }
    return null;
  }
}
