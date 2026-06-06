"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function pathLabel(path: string): string {
  const segments = path.replace(/^\/(en|el)\//, '').split('/');
  const slug = segments[segments.length - 1];
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function isValidUrl(s: string): boolean {
  return /^\/(en|el)\//.test(s) || /^https?:\/\//.test(s);
}

type LinkSegment =
  | { type: 'text'; text: string }
  | { type: 'mdlink'; label: string; url: string }
  | { type: 'path'; path: string };

function parseLinkSegments(text: string): LinkSegment[] {
  const segments: LinkSegment[] = [];
  const re = /(\[([^\]]+)\]\(([^)]+)\))|(\/[a-z]{2}\/[^\s,;.]+)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      segments.push({ type: 'text', text: text.slice(last, m.index) });
    }
    if (m[1]) {
      const url = m[3].replace(/[)\]>,;."]+$/g, '').trim();
      segments.push({ type: 'mdlink', label: m[2], url });
    } else if (m[4]) {
      segments.push({ type: 'path', path: m[4].replace(/[)\]>,;."]+$/g, '') });
    }
    last = re.lastIndex;
  }
  if (last < text.length) {
    segments.push({ type: 'text', text: text.slice(last) });
  }
  return segments;
}

const linkBtnClass = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold hover:bg-indigo-200 transition-all mt-1 mx-0.5';

function linkify(text: string, lang: string): React.ReactNode {
  const segments = parseLinkSegments(text);
  const children: React.ReactNode[] = [];
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    if (seg.type === 'text') {
      children.push(<span key={i}>{seg.text}</span>);
    } else if (seg.type === 'mdlink') {
      if (isValidUrl(seg.url)) {
        children.push(
          <a key={i} href={seg.url} target="_blank" rel="noopener noreferrer" className={linkBtnClass}>
            {seg.label}
          </a>
        );
      } else {
        children.push(<span key={i}>{seg.label}</span>);
      }
    } else if (seg.type === 'path') {
      children.push(
        <a key={i} href={seg.path} target="_blank" rel="noopener noreferrer" className={linkBtnClass}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          {pathLabel(seg.path)}
        </a>
      );
    }
  }
  return children.length === 1 ? children[0] : <>{children}</>;
}

const MONTHS = [
  "january","february","march","april","may","june",
  "july","august","september","october","november","december"
];

const MONTH_LABELS: Record<string, { en: string; el: string }> = {
  january: { en: "January", el: "Ιανουάριος" },
  february: { en: "February", el: "Φεβρουάριος" },
  march: { en: "March", el: "Μάρτιος" },
  april: { en: "April", el: "Απρίλιος" },
  may: { en: "May", el: "Μάιος" },
  june: { en: "June", el: "Ιούνιος" },
  july: { en: "July", el: "Ιούλιος" },
  august: { en: "August", el: "Αύγουστος" },
  september: { en: "September", el: "Σεπτέμβριος" },
  october: { en: "October", el: "Οκτώβριος" },
  november: { en: "November", el: "Νοέμβριος" },
  december: { en: "December", el: "Δεκέμβριος" },
};

const REGIONS: Record<string, { en: string; el: string }> = {
  "Cyclades": { en: "Cyclades", el: "Κυκλάδες" },
  "Crete": { en: "Crete", el: "Κρήτη" },
  "Ionian Islands": { en: "Ionian Islands", el: "Ιόνια Νησιά" },
  "North Aegean": { en: "North Aegean", el: "Βόρειο Αιγαίο" },
  "Dodecanese": { en: "Dodecanese", el: "Δωδεκάνησα" },
  "Attica": { en: "Attica", el: "Αττική" },
  "Northern Greece": { en: "Northern Greece", el: "Βόρεια Ελλάδα" },
  "Peloponnese": { en: "Peloponnese", el: "Πελοπόννησος" },
  "Thessaly": { en: "Thessaly", el: "Θεσσαλία" },
  "Epirus": { en: "Epirus", el: "Ήπειρος" },
  "Sporades": { en: "Sporades", el: "Σποράδες" },
  "Central Greece": { en: "Central Greece", el: "Στερεά Ελλάδα" },
};

const INTEREST_OPTIONS = [
  { key: "beaches", icon: "🏖️", label: { en: "Beaches", el: "Παραλίες" } },
  { key: "history", icon: "🏛️", label: { en: "History & Culture", el: "Ιστορία & Πολιτισμός" } },
  { key: "food", icon: "🍷", label: { en: "Food & Wine", el: "Φαγητό & Κρασί" } },
  { key: "nightlife", icon: "🌙", label: { en: "Nightlife", el: "Νυχτερινή Ζωή" } },
  { key: "nature", icon: "🏔️", label: { en: "Nature & Hiking", el: "Φύση & Πεζοπορία" } },
  { key: "couples", icon: "💑", label: { en: "Romantic / Couples", el: "Ρομαντικά" } },
  { key: "family", icon: "👨‍👩‍👧‍👦", label: { en: "Family Friendly", el: "Οικογένεια" } },
  { key: "luxury", icon: "💎", label: { en: "Luxury", el: "Πολυτέλεια" } },
];

const SITE_URL = "https://www.gogreecenow.com";

type Destination = {
  slug: string;
  name: string;
  region: { en: string; el: string };
};

type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  activities: { time: string; activity: string; link?: string }[];
  mealSuggestions: string[];
  accommodation: string;
};

type BusinessItem = {
  slug: string;
  name: string;
  place: string;
  category: string;
};

type Itinerary = {
  title: string;
  summary: string;
  days: ItineraryDay[];
  budgetEstimate: { total: string; breakdown: string; currency: string };
  tips: string[];
  businesses?: BusinessItem[];
};

function emojiForTime(time: string): string {
  const t = time.toLowerCase();
  if (t.includes("morning")) return "🌅";
  if (t.includes("afternoon")) return "☀️";
  if (t.includes("evening")) return "🌇";
  if (t.includes("night") || t.includes("dinner")) return "🌙";
  return "⏰";
}

export default function TripPlannerClient({
  destinations,
  lang,
}: {
  destinations: Destination[];
  lang: "en" | "el";
}) {
  const [selected, setSelected] = useState<string[]>(["santorini", "athens"]);
  const [days, setDays] = useState(7);
  const [budget, setBudget] = useState<"budget" | "mid" | "luxury">("mid");
  const [style, setStyle] = useState<"relaxed" | "balanced" | "packed">("balanced");
  const [month, setMonth] = useState(MONTHS[new Date().getMonth()]);
  const [interests, setInterests] = useState<string[]>(["beaches", "history", "food"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [destSearch, setDestSearch] = useState("");
  const [shareOpen, setShareOpen] = useState(false);

  const grouped = useMemo(() => {
    const map: Record<string, Destination[]> = {};
    for (const d of destinations) {
      const regKey = d.region?.en || "Other";
      if (!map[regKey]) map[regKey] = [];
      map[regKey].push(d);
    }
    return map;
  }, [destinations]);

  const filteredGroups = useMemo(() => {
    if (!destSearch) return grouped;
    const q = destSearch.toLowerCase();
    const result: Record<string, Destination[]> = {};
    for (const [region, dests] of Object.entries(grouped)) {
      const filtered = dests.filter(d => d.name.toLowerCase().includes(q));
      if (filtered.length > 0) result[region] = filtered;
    }
    return result;
  }, [grouped, destSearch]);

  function toggleDest(slug: string) {
    setSelected(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  }

  function toggleInterest(key: string) {
    setInterests(prev =>
      prev.includes(key) ? prev.filter(i => i !== key) : [...prev, key]
    );
  }

  async function generate() {
    if (selected.length === 0) {
      setError(lang === "el" ? "Επίλεξε τουλάχιστον έναν προορισμό" : "Select at least one destination");
      return;
    }
    setLoading(true);
    setError("");
    setItinerary(null);

    try {
      const res = await fetch("/api/trip-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ destinations: selected, days, budget, style, month, interests, lang }),
      });
      if (!res.ok) {
        let errMsg = "Generation failed";
        try { const err = await res.json(); errMsg = err.error || errMsg; } catch {}
        throw new Error(errMsg);
      }
      let data: any;
      try { data = await res.json(); } catch { throw new Error("Invalid response from server"); }
      setItinerary(data);
    } catch (e: any) {
      setError(e.message || (lang === "el" ? "Αποτυχία δημιουργίας" : "Generation failed"));
    } finally {
      setLoading(false);
    }
  }

  const t = {
    title: { en: "AI Trip Planner", el: "AI Σχεδιαστής Ταξιδιού" },
    subtitle: { en: "Build your perfect Greece itinerary in seconds", el: "Φτιάξε το τέλειο πρόγραμμα για Ελλάδα σε δευτερόλεπτα" },
    destinations: { en: "Destinations", el: "Προορισμοί" },
    search: { en: "Search destinations...", el: "Αναζήτηση προορισμών..." },
    days: { en: "Days", el: "Ημέρες" },
    budget: { en: "Budget", el: "Προϋπολογισμός" },
    budgetLow: { en: "Budget", el: "Οικονομικά" },
    budgetMid: { en: "Mid-range", el: "Μεσαία" },
    budgetLux: { en: "Luxury", el: "Πολυτέλεια" },
    style: { en: "Travel Style", el: "Στυλ Ταξιδιού" },
    styleRelaxed: { en: "Relaxed", el: "Χαλαρά" },
    styleBalanced: { en: "Balanced", el: "Ισορροπημένα" },
    stylePacked: { en: "Packed", el: "Γεμάτα" },
    month: { en: "Month", el: "Μήνας" },
    interests: { en: "Interests", el: "Ενδιαφέροντα" },
    generate: { en: "Generate My Itinerary", el: "Δημιουργία Προγράμματος" },
    generating: { en: "Crafting your perfect itinerary...", el: "Δημιουργία προγράμματος..." },
    tryAgain: { en: "Try Again", el: "Δοκίμασε ξανά" },
    day: { en: "Day", el: "Ημέρα" },
    budgetTitle: { en: "Budget Estimate", el: "Εκτίμηση Κόστους" },
    tips: { en: "Pro Tips", el: "Χρήσιμες Συμβουλές" },
    share: { en: "Share This Itinerary", el: "Κοινοποίηση Προγράμματος" },
    selectHint: { en: "Select at least one destination above", el: "Επίλεξε τουλάχιστον έναν προορισμό παραπάνω" },
    newPlan: { en: "Create New Plan", el: "Νέο Πρόγραμμα" },
    meals: { en: "Food Suggestions", el: "Προτάσεις για Φαγητό" },
    accommodation: { en: "Accommodation", el: "Διαμονή" },
  };

  function buildShareText(it: Itinerary): string {
    return `${it.title}\n\n${it.summary}\n\n${it.days.map(d =>
      `Day ${d.day}: ${d.title}`
    ).join('\n')}\n\n${it.budgetEstimate.total}\n\nPlanned with GoGreeceNow AI Trip Planner 🏝️`;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-sky-800 text-white pt-40 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-1.5 text-sm font-semibold backdrop-blur-sm border border-white/20"
          >
            🤖 {t.title[lang]}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
          >
            {t.subtitle[lang]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-indigo-100 max-w-2xl mx-auto"
          >
            {lang === "el"
              ? "Διάλεξε προορισμούς, προτιμήσεις και προϋπολογισμό — το AI σου φτιάχνει ένα εξατομικευμένο πρόγραμμα μέρα-μέρα"
              : "Pick your destinations, preferences and budget — AI generates a personalized day-by-day itinerary instantly"}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-12 relative z-20 pb-16">
        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 p-6 sm:p-10 space-y-8"
        >
          {/* Destinations */}
          <div>
            <label className="text-sm font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2 mb-4">
              <span>📍</span> {t.destinations[lang]}
              <span className="text-xs font-normal text-slate-400 normal-case">
                ({selected.length} {lang === "el" ? "επιλεγμένοι" : "selected"})
              </span>
            </label>
            <input
              type="text"
              value={destSearch}
              onChange={e => setDestSearch(e.target.value)}
              placeholder={t.search[lang]}
              className="w-full mb-4 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
            <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex flex-wrap gap-2">
                {(destSearch
                  ? Object.values(filteredGroups).flat()
                  : destinations
                ).map(d => (
                  <button
                    key={d.slug}
                    onClick={() => toggleDest(d.slug)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${
                      selected.includes(d.slug)
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                        : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
                    }`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
              {destSearch && Object.values(filteredGroups).flat().length === 0 && (
                <p className="text-sm text-slate-400 text-center py-4">
                  {lang === "el" ? "Δεν βρέθηκαν προορισμοί" : "No destinations found"}
                </p>
              )}
            </div>
          </div>

          {/* Grid: Days, Budget, Style, Month */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <label className="text-sm font-bold text-slate-600 uppercase tracking-wider block mb-2">
                📅 {t.days[lang]}
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={1}
                  max={21}
                  value={days}
                  onChange={e => setDays(Number(e.target.value))}
                  className="flex-1 accent-indigo-600"
                />
                <span className="text-2xl font-bold text-indigo-700 min-w-[3rem] text-center">{days}</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-600 uppercase tracking-wider block mb-2">
                💰 {t.budget[lang]}
              </label>
              <div className="flex gap-1">
                {(["budget", "mid", "luxury"] as const).map(b => (
                  <button
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      budget === b
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                        : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300"
                    }`}
                  >
                    {b === "budget" ? t.budgetLow[lang] : b === "mid" ? t.budgetMid[lang] : t.budgetLux[lang]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-600 uppercase tracking-wider block mb-2">
                🏃 {t.style[lang]}
              </label>
              <div className="flex gap-1">
                {(["relaxed", "balanced", "packed"] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      style === s
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                        : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300"
                    }`}
                  >
                    {s === "relaxed" ? t.styleRelaxed[lang] : s === "balanced" ? t.styleBalanced[lang] : t.stylePacked[lang]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-600 uppercase tracking-wider block mb-2">
                🗓️ {t.month[lang]}
              </label>
              <select
                value={month}
                onChange={e => setMonth(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {MONTHS.map(m => (
                  <option key={m} value={m}>{MONTH_LABELS[m][lang]}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="text-sm font-bold text-slate-600 uppercase tracking-wider block mb-3">
              🎯 {t.interests[lang]}
            </label>
            <div className="flex flex-wrap gap-2">
              {INTEREST_OPTIONS.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => toggleInterest(opt.key)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${
                    interests.includes(opt.key)
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300"
                  }`}
                >
                  <span>{opt.icon}</span>
                  <span>{opt.label[lang]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-center gap-2"
            >
              <span>⚠️</span> {error}
            </motion.div>
          )}

          {/* Generate Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={generate}
            disabled={loading || selected.length === 0}
            className={`w-full py-4 rounded-2xl text-lg font-bold transition-all shadow-xl ${
              loading || selected.length === 0
                ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 hover:shadow-indigo-200/50 active:scale-[0.99]"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t.generating[lang]}
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                ✨ {t.generate[lang]}
              </span>
            )}
          </motion.button>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {itinerary && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-10 space-y-8"
            >
              {/* Itinerary Header */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{itinerary.title}</h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">{itinerary.summary}</p>

                {/* Budget */}
                <div className="mt-8 p-5 rounded-2xl bg-indigo-50 border border-indigo-100">
                  <p className="text-sm font-bold text-indigo-700 uppercase tracking-wider">{t.budgetTitle[lang]}</p>
                  <p className="mt-2 text-3xl font-extrabold text-indigo-900">{itinerary.budgetEstimate.total}</p>
                  <p className="mt-1 text-sm text-indigo-600">{itinerary.budgetEstimate.breakdown}</p>
                </div>
              </div>

              {/* Days */}
              <div className="space-y-6">
                {itinerary.days.map((day, idx) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-indigo-200 text-sm font-semibold">{t.day[lang]} {day.day}</p>
                          <h3 className="text-2xl font-bold mt-1">{day.title}</h3>
                        </div>
                        <div className="text-4xl opacity-60">{idx + 1}</div>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <p className="text-slate-600 leading-relaxed mb-6">{day.description}</p>

                      {/* Activities */}
                      <div className="space-y-4">
                        {day.activities.map((act, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="text-2xl shrink-0 pt-0.5">{emojiForTime(act.time)}</div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{act.time}</p>
                              <p className="mt-1 text-slate-700 leading-relaxed">
                                {linkify(act.activity, lang)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Meals */}
                      {day.mealSuggestions.length > 0 && (
                        <div className="mt-6">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">🍽️ {t.meals[lang]}</p>
                          <ul className="space-y-2">
                            {day.mealSuggestions.map((meal, i) => (
                              <li key={i} className="text-sm text-slate-600 pl-4 border-l-2 border-teal-300">
                                {linkify(meal, lang)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Accommodation */}
                      {day.accommodation && (
                        <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-100">
                          <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">🏨 {t.accommodation[lang]}</p>
                          <p className="mt-1 text-sm text-amber-900">{linkify(day.accommodation, lang)}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tips */}
              {itinerary.tips.length > 0 && (
                <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <span>💡</span> {t.tips[lang]}
                  </p>
                  <ul className="space-y-3">
                    {itinerary.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <span className="text-indigo-500 font-bold shrink-0">•</span>
                        <span>{linkify(tip, lang)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Partner Businesses */}
              {itinerary.businesses && itinerary.businesses.length > 0 && (
                <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <span>🤝</span> {lang === "el" ? "Συνεργάτες στην Περιοχή" : "Local Partners"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {itinerary.businesses.map(biz => (
                      <a
                        key={biz.slug}
                        href={`/${lang}/businesses/${biz.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
                      >
                        <p className="font-semibold text-slate-900">{biz.name}</p>
                        <p className="text-xs text-slate-500 mt-1">{biz.category}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Share & New Plan */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShareOpen(true)}
                  className="px-8 py-3.5 rounded-2xl bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                >
                  📤 {t.share[lang]}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setItinerary(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="px-8 py-3.5 rounded-2xl bg-white text-slate-700 font-bold border border-slate-300 shadow-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  ✏️ {t.newPlan[lang]}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {shareOpen && itinerary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShareOpen(false)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-4"
            >
              <h3 className="text-lg font-bold text-slate-900 text-center">
                {lang === "el" ? "Κοινοποίηση" : "Share Itinerary"}
              </h3>

              <div className="grid grid-cols-4 gap-3">
                {(() => {
                  const text = encodeURIComponent(buildShareText(itinerary));
                  const url = window.location.href;
                  const encodedUrl = encodeURIComponent(url);
                  return [
                    { label: "Copy", icon: "📋", action: () => { navigator.clipboard.writeText(decodeURIComponent(text)); setShareOpen(false); } },
                    { label: "WhatsApp", icon: "💬", href: `https://wa.me/?text=${text}` },
                    { label: "Facebook", icon: "📘", href: `https://www.facebook.com/sharer/sharer.php?quote=${text}&u=${encodedUrl}` },
                    { label: "Viber", icon: "🔮", href: `viber://forward?text=${text}` },
                    { label: "Email", icon: "✉️", href: `mailto:?subject=${encodeURIComponent(itinerary.title)}&body=${text}` },
                    { label: "Twitter", icon: "🐦", href: `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}` },
                    { label: "SMS", icon: "📱", href: `sms:?body=${text}` },
                    { label: "Messenger", icon: "💙", href: `fb-messenger://share?link=${encodedUrl}` },
                  ].map((opt, i) => (
                    opt.href ? (
                      <a
                        key={i}
                        href={opt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setTimeout(() => setShareOpen(false), 300)}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-all"
                      >
                        <span className="text-2xl">{opt.icon}</span>
                        <span className="text-[10px] font-semibold text-slate-600">{opt.label}</span>
                      </a>
                    ) : (
                      <button
                        key={i}
                        onClick={opt.action}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-all"
                      >
                        <span className="text-2xl">{opt.icon}</span>
                        <span className="text-[10px] font-semibold text-slate-600">{opt.label}</span>
                      </button>
                    )
                  ));
                })()}
              </div>

              <button
                onClick={() => setShareOpen(false)}
                className="w-full py-3 rounded-2xl bg-slate-100 text-slate-600 font-semibold hover:bg-slate-200 transition-all text-sm"
              >
                {lang === "el" ? "Ακύρωση" : "Cancel"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
      `}</style>
    </div>
  );
}
