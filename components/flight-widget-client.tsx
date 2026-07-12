"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type Flight = {
  number?: string;
  status?: string;
  airline?: { iata?: string; name?: string };
  movement?: {
    airport?: { iata?: string; icao?: string; name?: string };
    scheduledTime?: { local?: string };
    revisedTime?: { local?: string };
    gate?: string;
    terminal?: string;
  };
  aircraft?: { model?: string };
};

type FlightWidgetProps = {
  airportIcao: string;
  airportName: string;
  lang: "en" | "el";
};

const IATA_MAP: Record<string, string> = {
  LGAV: "ATH", LGTS: "SKG", LGIR: "HER", LGNC: "CHQ",
  LGSR: "JTR", LGMK: "JMK", LGRP: "RHO", LGKR: "CFU",
  LGKF: "EFL", LGZA: "ZTH", LGKO: "KGS", LGMT: "MJT",
  LGCH: "JKH", LGPA: "PAS", LGNX: "JNX", LGKP: "AOK",
  LGML: "MLO", LGSY: "JSI", LGPV: "PVK", LGAL: "KVA", LGLM: "LXS", LGSM: "SMI",   LGIK: "JIK", LGKL: "KLX", LGKA: "KSO", LGRX: "GPA",
};

const AIRLINE_NAMES: Record<string, string> = {
  A3: "Aegean", OA: "Olympic Air", GQ: "SKY express", VY: "Volotea",
  FR: "Ryanair", LH: "Lufthansa", BA: "British Airways", AF: "Air France",
  U2: "easyJet", TK: "Turkish Airlines", DL: "Delta", AZ: "ITA Airways",
  SK: "SAS", EW: "Eurowings", W4: "Wizz Air", AC: "Air Canada",
  UA: "United", AA: "American", IB: "Iberia", EK: "Emirates",
  QR: "Qatar Airways", LX: "Swiss", KL: "KLM", TP: "TAP Portugal",
  LO: "LOT Polish", JU: "Air Serbia", CY: "Cyprus Airways",
  ME: "Middle East Airlines", RJ: "Royal Jordanian", SV: "Saudia",
  MS: "EgyptAir", ET: "Ethiopian", NH: "ANA", CA: "Air China",
  LS: "Jet2", DY: "Norwegian", TO: "Transavia", HV: "Transavia NL",
  BT: "airBaltic", V7: "Vueling", W6: "Wizz Air", BZ: "Blue Bird Airways",
  EY: "Etihad", LY: "El Al", SQ: "Singapore Airlines", EC: "Air Europa",
  G9: "Air Arabia", TG: "Thai Airways", GF: "Gulf Air", VN: "Vietnam Airlines",
};

const AIRLINE_COLORS: Record<string, string> = {
  A3: "#0054a6", OA: "#0054a6", GQ: "#ff6b00", VY: "#00b7e7",
  FR: "#073590", LH: "#05164d", BA: "#2e5c99", AF: "#002157",
  U2: "#ff6600", TK: "#c8102e", DL: "#003366", AZ: "#003876",
  SK: "#000080", EW: "#ffcc00", W4: "#c8102e", AC: "#f01428",
  UA: "#002244", AA: "#0078d2", IB: "#d10019", EK: "#d71921",
  QR: "#5c0632", LX: "#e2001a", KL: "#00a1de", TP: "#006600",
  LS: "#d70037", BZ: "#0066cc", EY: "#bd8b13",
};

function fmtTime(timeObj: unknown): string {
  if (!timeObj) return "—";
  if (typeof timeObj === "object" && timeObj !== null) {
    const obj = timeObj as Record<string, unknown>;
    if (typeof obj.local === "string") {
      const m = obj.local.match(/(\d{2}:\d{2})/);
      return m ? m[1] : "—";
    }
  }
  if (typeof timeObj === "string") {
    const m = timeObj.match(/(\d{2}:\d{2})/);
    return m ? m[1] : "—";
  }
  return "—";
}

function statusInfo(s: string): { color: string; bg: string; label: string; dot: string } {
  const l = (s || "").toLowerCase();
  if (l.includes("active") || l.includes("en route") || l.includes("airborne"))
    return { color: "text-purple-600", bg: "bg-purple-50", label: "En Route", dot: "bg-purple-500" };
  if (l.includes("landed") || l.includes("arrived"))
    return { color: "text-blue-600", bg: "bg-blue-50", label: "Landed", dot: "bg-blue-500" };
  if (l.includes("delayed"))
    return { color: "text-red-600", bg: "bg-red-50", label: "Delayed", dot: "bg-red-500 animate-pulse" };
  if (l.includes("cancel"))
    return { color: "text-red-600", bg: "bg-red-50", label: "Cancelled", dot: "bg-red-500" };
  if (l.includes("board"))
    return { color: "text-amber-600", bg: "bg-amber-50", label: "Boarding", dot: "bg-amber-500 animate-pulse" };
  if (l.includes("departed"))
    return { color: "text-emerald-600", bg: "bg-emerald-50", label: "Departed", dot: "bg-emerald-500" };
  if (l.includes("gate closed"))
    return { color: "text-slate-500", bg: "bg-slate-50", label: "Gate Closed", dot: "bg-slate-400" };
  return { color: "text-slate-400", bg: "bg-slate-50", label: "Scheduled", dot: "bg-slate-300" };
}

function deduplicate(flights: Flight[]): Flight[] {
  const seen = new Set<string>();
  return flights.filter((f) => {
    const sched = f.movement?.scheduledTime?.local?.match(/(\d{2}:\d{2})/)?.[1] ?? "";
    const dest = f.movement?.airport?.iata || f.movement?.airport?.icao || "";
    const gate = (f.movement?.gate || "").trim();
    const key = gate ? `${sched}|${gate}` : `${sched}|${dest}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortByTime(flights: Flight[]): Flight[] {
  return [...flights].sort((a, b) => {
    const ta = fmtTime(a.movement?.scheduledTime?.local);
    const tb = fmtTime(b.movement?.scheduledTime?.local);
    return (ta === "—" ? "ZZ" : ta).localeCompare(tb === "—" ? "ZZ" : tb);
  });
}

function timeToMinutes(timeStr: string): number {
  if (!timeStr || timeStr === "—") return -1;
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

function centerOnNow(flights: Flight[], count: number): Flight[] {
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();

  const withMin = flights.map((f) => ({
    flight: f,
    min: timeToMinutes(fmtTime(f.movement?.scheduledTime?.local)),
  }));

  const sorted = withMin.sort((a, b) => a.min - b.min);
  const idx = sorted.findIndex((s) => s.min >= nowMin);
  const start = Math.max(0, (idx === -1 ? sorted.length : idx) - 2);
  return sorted.slice(start, start + count).map((s) => s.flight);
}

export default function FlightWidgetClient({
  airportIcao,
  airportName,
  lang,
}: FlightWidgetProps) {
  const [tab, setTab] = useState<"departures" | "arrivals">("departures");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const iata = IATA_MAP[airportIcao] || "???";

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`/api/flights?airport=${airportIcao}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const raw: Flight[] =
        tab === "departures" ? (data.departures ?? []) : (data.arrivals ?? []);
      const deduped = sortByTime(deduplicate(raw));
      setFlights(centerOnNow(deduped, 15));
    } catch {
      setFlights([]);
    } finally {
      setLoading(false);
      const t = new Date();
      setNow(`${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`);
    }
  }, [airportIcao, tab]);

  useEffect(() => {
    setLoading(true);
    fetchData();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(fetchData, 300_000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [fetchData]);

  return (
    <article className="rounded-[28px] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-0 shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 px-5 py-4 text-white">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full backdrop-blur">
              {lang === "el" ? "ΖωΝΤΑΝΈΣ" : "LIVE"}
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          {now && <span className="text-[10px] font-mono opacity-70">{now}</span>}
        </div>
        <h4 className="text-xl font-extrabold tracking-tight">
          {airportName}
          <span className="ml-2 text-sm font-bold opacity-60">({iata})</span>
        </h4>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-sky-100">
        <button
          onClick={() => setTab("departures")}
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
            tab === "departures"
              ? "text-sky-700 border-b-2 border-sky-600 bg-sky-50/50"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          {lang === "el" ? "Αναχωρήσεις" : "Departures"}
        </button>
        <button
          onClick={() => setTab("arrivals")}
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
            tab === "arrivals"
              ? "text-sky-700 border-b-2 border-sky-600 bg-sky-50/50"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          {lang === "el" ? "Αφίξεις" : "Arrivals"}
        </button>
      </div>

      {/* Flights */}
      <div className="px-3 py-2">
        {loading && (
          <div className="flex items-center justify-center py-8 text-slate-400 text-xs">
            <span className="w-4 h-4 border-2 border-sky-200 border-t-sky-500 rounded-full animate-spin mr-2" />
            {lang === "el" ? "Φόρτωση…" : "Loading…"}
          </div>
        )}

        {!loading && flights.length === 0 && (
          <p className="text-center py-8 text-slate-400 text-xs">
            {lang === "el" ? "Δεν βρέθηκαν πτήσεις" : "No flights found"}
          </p>
        )}

        {!loading && flights.map((f, i) => {
          const dest = f.movement?.airport;
          const time = fmtTime(f.movement?.scheduledTime?.local);
          const status = f.status || "Scheduled";
          const gate = f.movement?.gate || "";
          const carrier = f.airline?.iata || "";
          const airlineName = f.airline?.name || AIRLINE_NAMES[carrier] || carrier;
          const si = statusInfo(status);
          const brandColor = AIRLINE_COLORS[carrier] || "#64748b";

          return (
            <div
              key={`${f.number}-${i}`}
              className={`flex items-center gap-2 px-2 py-2 rounded-xl mb-1 transition-colors hover:bg-sky-50/80`}
            >
              {/* Time */}
              <span className="font-mono text-sm font-bold text-slate-800 w-11 shrink-0 text-center">
                {time}
              </span>

              {/* Airline logo */}
              {carrier ? (
                <img
                  src={`https://pics.avs.io/80/40/${carrier}.png`}
                  alt={airlineName}
                  title={airlineName}
                  className="w-14 h-7 object-contain shrink-0 rounded bg-white border border-slate-100 shadow-sm"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const fallback = el.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                className="w-14 h-7 rounded bg-slate-200 items-center justify-center text-[9px] font-bold text-slate-500 shrink-0 hidden"
                title={airlineName}
              >
                {carrier || "—"}
              </div>

              {/* Flight number */}
              <span className="font-mono text-xs font-bold text-slate-700 shrink-0">
                {f.number}
              </span>

              {/* Destination / Origin */}
              <span className="text-sm font-extrabold text-sky-700 truncate flex-1 min-w-0">
                {dest?.name || "—"}
              </span>

              {/* Status badge */}
              <div className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full ${si.bg} shrink-0`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${si.dot}`} />
                <span className={`text-[10px] font-semibold ${si.color}`}>{si.label}</span>
              </div>

              {/* Gate */}
              {gate && (
                <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                  {gate}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {!loading && flights.length > 0 && (
        <div className="px-4 py-2 border-t border-sky-100 text-center">
          <p className="text-[10px] text-slate-400">
            {lang === "el" ? "Ενημέρωση κάθε 5 λεπτά" : "Updates every 5 min"} ·{" "}
            <a
              href="https://www.flightradar24.com/data/airports/greece"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 font-semibold hover:underline"
            >
              {lang === "el" ? "Όλες οι πτήσεις" : "All flights"} →
            </a>
          </p>
        </div>
      )}
    </article>
  );
}
