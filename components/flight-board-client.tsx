"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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
  LGCH: { iata: "JKH", name: "Chios" },
  LGPA: { iata: "PAS", name: "Paros" },
  LGNX: { iata: "JNX", name: "Naxos" },
  LGKP: { iata: "AOK", name: "Karpathos" },
  LGML: { iata: "MLO", name: "Milos" },
  LGSY: { iata: "JSI", name: "Skiathos" },
  LGPV: { iata: "PVK", name: "Preveza" },
  LGAL: { iata: "KVA", name: "Kavala" },
  LGLM: { iata: "LXS", name: "Lemnos" },
  LGSM: { iata: "SMI", name: "Samos" },
  LGIK: { iata: "JIK", name: "Ikaria" },
  LGKL: { iata: "KLX", name: "Kalamata" },
  LGKA: { iata: "KSO", name: "Kastoria" },
  LGRX: { iata: "GPA", name: "Patras" },
};

const AIRLINE_NAMES: Record<string, string> = {
  A3: "Aegean",
  OA: "Olympic Air",
  GQ: "SKY express",
  VY: "Volotea",
  FR: "Ryanair",
  LH: "Lufthansa",
  BA: "British Airways",
  AF: "Air France",
  U2: "easyJet",
  TK: "Turkish Airlines",
  DL: "Delta",
  AZ: "ITA Airways",
  SK: "SAS",
  EW: "Eurowings",
  W4: "Wizz Air",
  AC: "Air Canada",
  UA: "United",
  AA: "American",
  IB: "Iberia",
  EK: "Emirates",
  QR: "Qatar Airways",
  LX: "Swiss",
  KL: "KLM",
  TP: "TAP Portugal",
  LO: "LOT Polish",
  JU: "Air Serbia",
  CY: "Cyprus Airways",
  ME: "Middle East Airlines",
  RJ: "Royal Jordanian",
  SV: "Saudia",
  MS: "EgyptAir",
  ET: "Ethiopian",
  NH: "ANA",
  CA: "Air China",
  LS: "Jet2",
  DY: "Norwegian",
  TO: "Transavia",
  HV: "Transavia NL",
  BT: "airBaltic",
  V7: "Vueling",
  W6: "Wizz Air",
  BZ: "Blue Bird Airways",
  EY: "Etihad",
  HO: "China Eastern",
  LY: "El Al",
  SQ: "Singapore Airlines",
  EC: "Air Europa",
  G9: "Air Arabia",
  TG: "Thai Airways",
  GF: "Gulf Air",
  VN: "Vietnam Airlines",
};

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

type FlightBoardProps = {
  defaultAirport?: string;
  compact?: boolean;
};

function fmtTime(timeObj: unknown): string {
  if (!timeObj) return "—";
  if (typeof timeObj === "object" && timeObj !== null) {
    const obj = timeObj as Record<string, unknown>;
    if (typeof obj.local === "string") return fmtTimeStr(obj.local);
    return "—";
  }
  if (typeof timeObj === "string") return fmtTimeStr(timeObj);
  return "—";
}

function fmtTimeStr(s: string): string {
  if (!s) return "—";
  const m = s.match(/(\d{2}:\d{2})/);
  return m ? m[1] : "—";
}

function statusClass(s: string): string {
  const l = s.toLowerCase();
  if (l.includes("active") || l.includes("en route") || l.includes("airborne"))
    return "text-purple-600";
  if (l.includes("landed") || l.includes("arrived")) return "text-blue-500";
  if (l.includes("delayed")) return "text-red-500";
  if (l.includes("cancel")) return "text-red-500 line-through";
  if (l.includes("board")) return "text-amber-500";
  if (l.includes("departed")) return "text-green-600";
  return "text-slate-400";
}

function statusDot(s: string): string {
  const l = s.toLowerCase();
  if (l.includes("active") || l.includes("en route") || l.includes("airborne"))
    return "bg-purple-500";
  if (l.includes("landed") || l.includes("arrived")) return "bg-blue-500";
  if (l.includes("delayed")) return "bg-red-500";
  if (l.includes("cancel")) return "bg-red-500";
  if (l.includes("board")) return "bg-amber-500 animate-pulse";
  if (l.includes("departed")) return "bg-green-500";
  return "bg-slate-300";
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

export default function FlightBoardClient({
  defaultAirport = "LGAV",
  compact = false,
}: FlightBoardProps) {
  const [airport, setAirport] = useState(defaultAirport);
  const [tab, setTab] = useState<"departures" | "arrivals">("departures");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`/api/flights?airport=${airport}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const raw: Flight[] = tab === "departures" ? (data.departures ?? []) : (data.arrivals ?? []);
      setFlights(deduplicate(raw));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
      const now = new Date();
      setLastUpdate(
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      );
    }
  }, [airport, tab]);

  useEffect(() => {
    setLoading(true);
    setFlights([]);
    fetchData();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(fetchData, 30_000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [fetchData]);

  const ap = AIRPORTS[airport] ?? { iata: "—", name: "" };

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <select
          value={airport}
          onChange={(e) => setAirport(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        >
          {Object.entries(AIRPORTS).map(([icao, info]) => (
            <option key={icao} value={icao}>
              {info.name} ({info.iata})
            </option>
          ))}
        </select>

        <div className="flex rounded-lg overflow-hidden border border-slate-300">
          <button
            onClick={() => setTab("departures")}
            className={`px-4 py-2 text-xs font-semibold transition-colors ${
              tab === "departures"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-500 hover:text-slate-700"
            }`}
          >
            Departures
          </button>
          <button
            onClick={() => setTab("arrivals")}
            className={`px-4 py-2 text-xs font-semibold transition-colors ${
              tab === "arrivals"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-500 hover:text-slate-700"
            }`}
          >
            Arrivals
          </button>
        </div>

        <div className="flex items-center gap-2 ml-auto text-xs text-slate-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>{lastUpdate || "—"}</span>
        </div>
      </div>

      {/* Board */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[10px] uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 bg-slate-50">
          <div className="col-span-1" />
          <div className="col-span-2">Flight</div>
          <div className={compact ? "col-span-3" : "col-span-2"}>Airline</div>
          <div className="col-span-3">{tab === "departures" ? "Destination" : "Origin"}</div>
          <div className="col-span-1">Time</div>
          <div className="col-span-1">Gate</div>
          <div className="col-span-1">T</div>
          {!compact && <div className="col-span-1 hidden lg:block">Aircraft</div>}
        </div>

        {/* Rows */}
        <div className="max-h-[500px] overflow-y-auto divide-y divide-slate-50">
          {loading && (
            <div className="flex items-center justify-center py-12 text-slate-400 text-sm">
              <span className="w-4 h-4 border-2 border-slate-300 border-t-blue-500 rounded-full animate-spin mr-2" />
              Loading flights…
            </div>
          )}

          {error && (
            <div className="text-center py-12 text-red-400 text-sm">{error}</div>
          )}

          {!loading && !error && flights.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No flights found
            </div>
          )}

          {!loading &&
            flights.map((f, i) => {
              const carrier = f.airline?.iata || "";
              const name = f.airline?.name || AIRLINE_NAMES[carrier] || carrier;
              const dest = f.movement?.airport;
              const time = fmtTime(f.movement?.scheduledTime?.local);
              const status = f.status || "Scheduled";
              const gate = f.movement?.gate || "—";
              const terminal = f.movement?.terminal || "—";
              const aircraft = f.aircraft?.model || "";

              return (
                <div
                  key={`${f.number}-${i}`}
                  className="grid grid-cols-12 gap-2 items-center px-4 py-2.5 text-sm hover:bg-blue-50/50 transition-colors"
                >
                  <div className="col-span-1">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${statusDot(status)}`}
                      title={status}
                    />
                  </div>
                  <div className="col-span-2 font-mono font-bold text-slate-800 text-xs">
                    {f.number}
                  </div>
                  <div
                    className={`flex items-center gap-2 ${compact ? "col-span-3" : "col-span-2"}`}
                  >
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 rounded font-mono text-slate-500">
                      {carrier}
                    </span>
                    {!compact && (
                      <span className="text-xs text-slate-500 truncate hidden lg:inline">
                        {name}
                      </span>
                    )}
                  </div>
                  <div className="col-span-3 text-xs">
                    <span className="text-slate-700">{dest?.name || "—"}</span>
                    <span className="text-slate-400 ml-1">({dest?.iata || ""})</span>
                  </div>
                  <div className="col-span-1 font-mono text-sm font-semibold text-slate-800">
                    {time}
                  </div>
                  <div className="col-span-1 font-mono text-xs text-slate-500">{gate}</div>
                  <div className="col-span-1 font-mono text-xs text-slate-500">{terminal}</div>
                  {!compact && (
                    <div className="col-span-1 text-[11px] text-slate-400 truncate hidden lg:block">
                      {aircraft}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-2 px-2 text-[10px] text-slate-400">
        <span>Source: AeroDataBox via RapidAPI</span>
        <span>
          {flights.length} flight{flights.length !== 1 ? "s" : ""}
        </span>
        <span>Auto-refresh: 30s</span>
      </div>
    </div>
  );
}
