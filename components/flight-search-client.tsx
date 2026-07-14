"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";

const AIRPORTS = [
  // Major European hubs
  { code: "ATH", name: "Athens", country: "Greece" },
  { code: "SKG", name: "Thessaloniki", country: "Greece" },
  { code: "HER", name: "Heraklion", country: "Greece" },
  { code: "CHQ", name: "Chania", country: "Greece" },
  { code: "JTR", name: "Santorini", country: "Greece" },
  { code: "JMK", name: "Mykonos", country: "Greece" },
  { code: "RHO", name: "Rhodes", country: "Greece" },
  { code: "CFU", name: "Corfu", country: "Greece" },
  { code: "EFL", name: "Kefalonia", country: "Greece" },
  { code: "ZTH", name: "Zakynthos", country: "Greece" },
  { code: "KGS", name: "Kos", country: "Greece" },
  { code: "MJT", name: "Lesvos", country: "Greece" },
  { code: "JKH", name: "Chios", country: "Greece" },
  { code: "PAS", name: "Paros", country: "Greece" },
  { code: "JNX", name: "Naxos", country: "Greece" },
  { code: "AOK", name: "Karpathos", country: "Greece" },
  { code: "MLO", name: "Milos", country: "Greece" },
  { code: "JSI", name: "Skiathos", country: "Greece" },
  { code: "PVK", name: "Preveza", country: "Greece" },
  { code: "KVA", name: "Kavala", country: "Greece" },
  { code: "SMI", name: "Samos", country: "Greece" },
  { code: "JIK", name: "Ikaria", country: "Greece" },
  { code: "KLX", name: "Kalamata", country: "Greece" },
  { code: "GPA", name: "Patras", country: "Greece" },
  { code: "LXS", name: "Lemnos", country: "Greece" },
  // Major European departure cities
  { code: "LHR", name: "London Heathrow", country: "UK" },
  { code: "LGW", name: "London Gatwick", country: "UK" },
  { code: "STN", name: "London Stansted", country: "UK" },
  { code: "LTN", name: "London Luton", country: "UK" },
  { code: "CDG", name: "Paris CDG", country: "France" },
  { code: "ORY", name: "Paris Orly", country: "France" },
  { code: "FRA", name: "Frankfurt", country: "Germany" },
  { code: "MUC", name: "Munich", country: "Germany" },
  { code: "BER", name: "Berlin", country: "Germany" },
  { code: "DUS", name: "Düsseldorf", country: "Germany" },
  { code: "TXL", name: "Berlin Tegel", country: "Germany" },
  { code: "AMS", name: "Amsterdam", country: "Netherlands" },
  { code: "BRU", name: "Brussels", country: "Belgium" },
  { code: "MAD", name: "Madrid", country: "Spain" },
  { code: "BCN", name: "Barcelona", country: "Spain" },
  { code: "FCO", name: "Rome Fiumicino", country: "Italy" },
  { code: "MXP", name: "Milan Malpensa", country: "Italy" },
  { code: "VIE", name: "Vienna", country: "Austria" },
  { code: "ZRH", name: "Zurich", country: "Switzerland" },
  { code: "GVA", name: "Geneva", country: "Switzerland" },
  { code: "CPH", name: "Copenhagen", country: "Denmark" },
  { code: "ARN", name: "Stockholm", country: "Sweden" },
  { code: "OSL", name: "Oslo", country: "Norway" },
  { code: "HEL", name: "Helsinki", country: "Finland" },
  { code: "WAW", name: "Warsaw", country: "Poland" },
  { code: "PRG", name: "Prague", country: "Czech Republic" },
  { code: "BUD", name: "Budapest", country: "Hungary" },
  { code: "OTP", name: "Bucharest", country: "Romania" },
  { code: "SOF", name: "Sofia", country: "Bulgaria" },
  { code: "BEG", name: "Belgrade", country: "Serbia" },
  { code: "ZAG", name: "Zagreb", country: "Croatia" },
  { code: "BCN", name: "Barcelona", country: "Spain" },
  { code: "LIS", name: "Lisbon", country: "Portugal" },
  { code: "DUB", name: "Dublin", country: "Ireland" },
  { code: "EDI", name: "Edinburgh", country: "UK" },
  { code: "MAN", name: "Manchester", country: "UK" },
  { code: "BHX", name: "Birmingham", country: "UK" },
  // Middle East hubs
  { code: "DXB", name: "Dubai", country: "UAE" },
  { code: "DOH", name: "Doha", country: "Qatar" },
  { code: "AUH", name: "Abu Dhabi", country: "UAE" },
  { code: "IST", name: "Istanbul", country: "Turkey" },
  // US gateways
  { code: "JFK", name: "New York JFK", country: "USA" },
  { code: "EWR", name: "Newark", country: "USA" },
  { code: "LAX", name: "Los Angeles", country: "USA" },
  { code: "ORD", name: "Chicago O'Hare", country: "USA" },
  { code: "BOS", name: "Boston", country: "USA" },
  { code: "MIA", name: "Miami", country: "USA" },
  { code: "SFO", name: "San Francisco", country: "USA" },
];

type FlightLeg = {
  departure_airport: { name: string; id: string; time: string };
  arrival_airport: { name: string; id: string; time: string };
  duration: number;
  airline: string;
  airline_logo: string;
  flight_number: string;
  travel_class: string;
  airplane: string;
  legroom?: string;
  extensions?: string[];
  overnight?: boolean;
  often_delayed?: boolean;
};

type FlightResult = {
  price: number;
  type: string;
  airline_logo: string;
  total_duration: number;
  flights: FlightLeg[];
  layovers: { name: string; id: string; duration: number; overnight?: boolean }[];
  carbon_emissions?: {
    this_flight: number;
    typical_for_this_route: number;
    difference_percent: number;
  };
  google_flights_url?: string;
};

type Tab = "best" | "cheapest" | "fastest";

function formatDuration(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h > 0 ? `${h}h${m > 0 ? " " + m + "m" : ""}` : `${m}m`;
}

function formatTime(timeStr: string): string {
  if (!timeStr) return "";
  const match = timeStr.match(/(\d{2}:\d{2})/);
  return match ? match[1] : timeStr;
}

function getStopsLabel(layovers: FlightResult["layovers"]): string {
  if (layovers.length === 0) return "Nonstop";
  if (layovers.length === 1) return "1 stop";
  return `${layovers.length} stops`;
}

function getStopsColor(layovers: FlightResult["layovers"]): string {
  if (layovers.length === 0) return "text-emerald-600";
  if (layovers.length === 1) return "text-amber-600";
  return "text-red-500";
}

function AirportInput({
  code,
  displayValue,
  onPick,
  placeholder,
  label,
}: {
  code: string;
  displayValue: string;
  onPick: (code: string, display: string) => void;
  placeholder: string;
  label: string;
}) {
  const [query, setQuery] = useState(displayValue);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(displayValue);
  }, [displayValue]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = useMemo(() => {
    if (query.length < 1) return [];
    const q = query.toLowerCase();
    return AIRPORTS.filter(
      (a) =>
        a.code.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.country.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  function selectAirport(a: { code: string; name: string; country: string }) {
    const display = `${a.name} (${a.code})`;
    setQuery(display);
    setOpen(false);
    setHighlight(-1);
    onPick(a.code, display);
  }

  return (
    <div ref={wrapperRef} className="relative flex-1 min-w-0">
      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
        {label}
      </label>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onPick("", "");
          setOpen(true);
          setHighlight(-1);
        }}
        onFocus={() => {
          if (query.length >= 1) setOpen(true);
        }}
        onKeyDown={(e) => {
          if (!open || filtered.length === 0) return;
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlight((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlight((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
          } else if (e.key === "Enter" && highlight >= 0) {
            e.preventDefault();
            selectAirport(filtered[highlight]);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
      />
      {open && filtered.length > 0 && (
        <div ref={listRef} className="absolute z-50 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-xl max-h-72 overflow-y-auto">
          {filtered.map((a, i) => (
            <button
              key={a.code}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                selectAirport(a);
              }}
              onMouseEnter={() => setHighlight(i)}
              className={`w-full text-left px-4 py-2.5 flex items-center gap-3 transition-colors border-b border-slate-50 last:border-0 ${
                highlight === i ? "bg-blue-50" : "hover:bg-slate-50"
              }`}
            >
              <span className="text-xs font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600 shrink-0">
                {a.code}
              </span>
              <span className="text-sm text-slate-700 truncate">{a.name}</span>
              <span className="ml-auto text-[10px] text-slate-400 shrink-0">{a.country}</span>
            </button>
          ))}
        </div>
      )}
      {open && query.length >= 1 && filtered.length === 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-xl px-4 py-3 text-sm text-slate-400">
          No airport found. Type IATA code (e.g. ATH).
        </div>
      )}
    </div>
  );
}

export default function FlightSearchClient({
  defaultArrival,
  destinationName,
}: {
  defaultArrival?: string;
  destinationName?: string;
}) {
  const defaultDisplay = defaultArrival && destinationName
    ? `${destinationName} (${defaultArrival})`
    : "";

  const [fromCode, setFromCode] = useState("");
  const [fromDisplay, setFromDisplay] = useState("");
  const [toCode, setToCode] = useState(defaultArrival || "");
  const [toDisplay, setToDisplay] = useState(defaultDisplay);
  const [outboundDate, setOutboundDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tripType, setTripType] = useState<"1" | "2">("1");
  const [passengers, setPassengers] = useState("1");
  const [travelClass, setTravelClass] = useState("1");
  const [results, setResults] = useState<FlightResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("best");
  const [searched, setSearched] = useState(false);

  const search = async () => {
    if (!fromCode || !toCode || !outboundDate) return;
    setLoading(true);
    setError(null);
    setResults([]);
    setSearched(true);

    const params = new URLSearchParams({
      from: fromCode,
      to: toCode,
      outbound_date: outboundDate,
      type: tripType,
      passengers,
      travel_class: travelClass,
      currency: "EUR",
    });
    if (returnDate && tripType === "1") params.set("return_date", returnDate);

    try {
      const res = await fetch(`/api/flight-search?${params.toString()}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Search failed");
        return;
      }
      setResults(data.results ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
    } finally {
      setLoading(false);
    }
  };

  const sorted = [...results].sort((a, b) => {
    if (activeTab === "cheapest") return (a.price ?? 99999) - (b.price ?? 99999);
    if (activeTab === "fastest") return (a.total_duration ?? 99999) - (b.total_duration ?? 99999);
    return 0;
  });

  const today = new Date().toISOString().split("T")[0];
  const canSearch = fromCode.length > 0 && toCode.length > 0 && outboundDate.length > 0;

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        {/* Trip Type */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setTripType("1")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              tripType === "1"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            Round Trip
          </button>
          <button
            type="button"
            onClick={() => setTripType("2")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              tripType === "2"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            One Way
          </button>
        </div>

        {/* From / To */}
        <div className="flex gap-3 mb-4">
          <AirportInput
            code={fromCode}
            displayValue={fromDisplay}
            onPick={(c, d) => {
              setFromCode(c);
              setFromDisplay(d);
            }}
            placeholder="City or airport"
            label="From"
          />
          <AirportInput
            code={toCode}
            displayValue={toDisplay}
            onPick={(c, d) => {
              setToCode(c);
              setToDisplay(d);
            }}
            placeholder={destinationName || "Destination"}
            label="To"
          />
        </div>

        {/* Dates */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Depart
            </label>
              <input
                type="date"
                lang="en"
                value={outboundDate}
                min={today}
                onChange={(e) => setOutboundDate(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
          </div>
          {tripType === "1" && (
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Return
              </label>
              <input
                type="date"
                lang="en"
                value={returnDate}
                min={outboundDate || today}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
          )}
        </div>

        {/* Passengers & Class */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Passengers
            </label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "passenger" : "passengers"}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Class
            </label>
            <select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              <option value="1">Economy</option>
              <option value="2">Premium Economy</option>
              <option value="3">Business</option>
              <option value="4">First</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          type="button"
          onClick={search}
          disabled={!canSearch || loading}
          className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              Search Flights
            </>
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* No results */}
      {searched && !loading && results.length === 0 && !error && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-8 text-center">
          <p className="text-slate-400 text-sm">
            No flights found. Try different dates.
          </p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-4">
          <div className="flex gap-2 mb-4">
            {(["best", "cheapest", "fastest"] as Tab[]).map((tab) => {
              const tabSorted = [...results].sort((a, b) => {
                if (tab === "cheapest") return (a.price ?? 99999) - (b.price ?? 99999);
                if (tab === "fastest") return (a.total_duration ?? 99999) - (b.total_duration ?? 99999);
                return 0;
              });
              const first = tabSorted[0];
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 rounded-xl px-3 py-2.5 text-xs font-bold transition-all ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  <span className="block capitalize">{tab}</span>
                  {first?.price != null && (
                    <span className={`block text-[10px] mt-0.5 ${activeTab === tab ? "text-blue-100" : "text-slate-400"}`}>
                      from &euro;{first.price}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="space-y-3">
            {sorted.map((flight, idx) => {
              const firstLeg = flight.flights[0];
              const lastLeg = flight.flights[flight.flights.length - 1];

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {flight.airline_logo && (
                        <Image
                          src={flight.airline_logo}
                          alt=""
                          width={24}
                          height={24}
                          className="rounded"
                          unoptimized
                        />
                      )}
                      <span className="text-xs font-medium text-slate-500">
                        {firstLeg.airline}
                        {flight.flights.length > 1 && flight.flights[flight.flights.length - 1].airline !== firstLeg.airline
                          ? ` + ${flight.flights[flight.flights.length - 1].airline}`
                          : ""}
                      </span>
                    </div>
                    <span className="text-lg font-extrabold text-slate-900">
                      &euro;{flight.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900 font-mono">
                        {formatTime(firstLeg.departure_airport.time)}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        {firstLeg.departure_airport.id}
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center px-2">
                      <p className="text-xs text-slate-400 mb-1">
                        {formatDuration(flight.total_duration)}
                      </p>
                      <div className="w-full flex items-center gap-1">
                        <div className="h-px flex-1 bg-slate-200" />
                        {flight.layovers.map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-amber-400 border-2 border-white shadow-sm -mx-1" />
                        ))}
                        <div className="h-px flex-1 bg-slate-200" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 shrink-0"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                        <div className="h-px flex-1 bg-slate-200" />
                      </div>
                      <p className={`text-[10px] font-bold mt-1 ${getStopsColor(flight.layovers)}`}>
                        {getStopsLabel(flight.layovers)}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900 font-mono">
                        {formatTime(lastLeg.arrival_airport.time)}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">
                        {lastLeg.arrival_airport.id}
                      </p>
                    </div>
                  </div>

                  {flight.layovers.length > 0 && (
                    <div className="mt-2 text-[10px] text-slate-400 text-center">
                      {flight.layovers.map((l, i) => (
                        <span key={i}>
                          {l.name} ({formatDuration(l.duration)})
                          {i < flight.layovers.length - 1 ? " \u00b7 " : ""}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3">
                    <a
                      href={flight.google_flights_url || `https://www.google.com/travel/flights?q=flights+from+${firstLeg.departure_airport.id}+to+${lastLeg.arrival_airport.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition-colors shadow-sm"
                    >
                      Book on Google Flights &rarr;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-[10px] text-slate-300 mt-4">
            Powered by Google Flights
          </p>
        </div>
      )}
    </div>
  );
}
