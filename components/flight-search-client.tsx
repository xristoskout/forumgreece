"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

type SuggestionAirport = {
  id: string;
  name: string;
  city: string;
  distance: string;
};

type Suggestion = {
  name: string;
  type: string;
  description: string;
  id: string;
  airports: SuggestionAirport[];
};

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

const TRAVEL_CLASSES = [
  { value: "1", label: "Economy" },
  { value: "2", label: "Premium Economy" },
  { value: "3", label: "Business" },
  { value: "4", label: "First" },
];

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
  value,
  displayValue,
  onChange,
  onAirportSelect,
  placeholder,
  label,
}: {
  value: string;
  displayValue: string;
  onChange: (val: string) => void;
  onAirportSelect: (airportCode: string, displayName: string) => void;
  placeholder: string;
  label: string;
}) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchResults = useCallback((q: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (q.length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/flight-autocomplete?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setSuggestions(data.suggestions ?? []);
        setOpen(true);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 350);
  }, []);

  return (
    <div ref={wrapperRef} className="relative flex-1 min-w-0">
      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
        {label}
      </label>
      <input
        type="text"
        value={displayValue}
        onChange={(e) => {
          onChange(e.target.value);
          onAirportSelect("", "");
          fetchResults(e.target.value);
        }}
        onFocus={() => {
          if (suggestions.length > 0) setOpen(true);
        }}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
      />
      {loading && (
        <div className="absolute right-3 top-[26px]">
          <span className="w-4 h-4 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin block" />
        </div>
      )}
      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-xl max-h-72 overflow-y-auto">
          {suggestions.map((s, sIdx) => {
            const primaryAirport = s.airports?.[0];
            return (
              <div key={sIdx}>
                {/* City header */}
                <button
                  type="button"
                  onClick={() => {
                    if (primaryAirport) {
                      onAirportSelect(primaryAirport.id, `${s.name} (${primaryAirport.id})`);
                    } else {
                      onAirportSelect(s.id, s.name);
                    }
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      {s.type === "airport" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-800 truncate">{s.name}</p>
                      {s.description && (
                        <p className="text-[11px] text-slate-400 truncate">{s.description}</p>
                      )}
                    </div>
                    {primaryAirport && (
                      <span className="ml-auto text-xs font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-500 shrink-0">
                        {primaryAirport.id}
                      </span>
                    )}
                  </div>
                </button>

                {/* Sub-airports for city */}
                {s.airports && s.airports.length > 1 && s.airports.map((airport) => (
                  <button
                    key={airport.id}
                    type="button"
                    onClick={() => {
                      onAirportSelect(airport.id, `${airport.name} (${airport.id})`);
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 pl-14 hover:bg-blue-50 transition-colors border-b border-slate-50 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                        {airport.id}
                      </span>
                      <span className="text-xs text-slate-500 truncate">{airport.name}</span>
                      {airport.distance && (
                        <span className="ml-auto text-[10px] text-slate-300 shrink-0">{airport.distance}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function FlightSearchClient({
  defaultArrival,
  destinationName,
  lang,
}: {
  defaultArrival?: string;
  destinationName?: string;
  lang?: string;
}) {
  const [fromCode, setFromCode] = useState("");
  const [fromDisplay, setFromDisplay] = useState("");
  const [toCode, setToCode] = useState(defaultArrival || "");
  const [toDisplay, setToDisplay] = useState(defaultArrival ? `${destinationName || ""} (${defaultArrival})` : "");
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
      {/* Search Form */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        {/* Trip Type Toggle */}
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
            {lang === "el" ? "Επιστροφή" : "Round Trip"}
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
            {lang === "el" ? "Μονό" : "One Way"}
          </button>
        </div>

        {/* From / To */}
        <div className="flex gap-3 mb-4">
          <AirportInput
            value={fromCode}
            displayValue={fromDisplay}
            onChange={(val) => {
              setFromDisplay(val);
              setFromCode("");
            }}
            onAirportSelect={(code, name) => {
              setFromCode(code);
              if (name) setFromDisplay(name);
            }}
            placeholder={lang === "el" ? "Πόλη αναχώρησης" : "City or airport"}
            label={lang === "el" ? "Από" : "From"}
          />
          <AirportInput
            value={toCode}
            displayValue={toDisplay}
            onChange={(val) => {
              setToDisplay(val);
              setToCode("");
            }}
            onAirportSelect={(code, name) => {
              setToCode(code);
              if (name) setToDisplay(name);
            }}
            placeholder={destinationName || (lang === "el" ? "Προορισμός" : "Destination")}
            label={lang === "el" ? "Προς" : "To"}
          />
        </div>

        {/* Dates */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              {lang === "el" ? "Αναχώρηση" : "Depart"}
            </label>
            <input
              type="date"
              value={outboundDate}
              min={today}
              onChange={(e) => setOutboundDate(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>
          {tripType === "1" && (
            <div className="flex-1 min-w-0">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                {lang === "el" ? "Επιστροφή" : "Return"}
              </label>
              <input
                type="date"
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
              {lang === "el" ? "Επιβάτες" : "Passengers"}
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
              {lang === "el" ? "Κλάση" : "Class"}
            </label>
            <select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              {TRAVEL_CLASSES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
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
              {lang === "el" ? "Αναζήτηση..." : "Searching..."}
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              {lang === "el" ? "Ψάξε Πτήσεις" : "Search Flights"}
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
            {lang === "el"
              ? "Δεν βρέθηκαν πτήσεις. Δοκιμάστε διαφορετικές ημερομηνίες."
              : "No flights found. Try different dates."}
          </p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-4">
          {/* Tabs */}
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

          {/* Flight Cards */}
          <div className="space-y-3">
            {sorted.map((flight, idx) => {
              const firstLeg = flight.flights[0];
              const lastLeg = flight.flights[flight.flights.length - 1];

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Header: Price + Airline */}
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
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-slate-900">
                        &euro;{flight.price}
                      </span>
                    </div>
                  </div>

                  {/* Route: Time -> Time | Duration | Stops */}
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
                          <div key={i} className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-amber-400 border-2 border-white shadow-sm -mx-1" />
                          </div>
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

                  {/* Layover Details */}
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

                  {/* Book Button */}
                  <div className="mt-3">
                    <a
                      href={flight.google_flights_url || `https://www.google.com/travel/flights?q=flights+from+${firstLeg.departure_airport.id}+to+${lastLeg.arrival_airport.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition-colors shadow-sm"
                    >
                      {lang === "el" ? "Βιβλίωση στο Google Flights" : "Book on Google Flights"} &rarr;
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
