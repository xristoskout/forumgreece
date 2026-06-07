"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { type TourItem, type Lang } from "../../../../lib/content";
import { tourExperiences } from "../../../../lib/tour-experiences";
import { VIATOR_WIDGET_MAPPING } from "../../../../lib/experiences";
import ViatorWidget from "../../../../components/viator-widget";
import TourCard from "../../../../components/tour-card";

type Props = {
  lang: Lang;
  tours: TourItem[];
};

const regions = [
  { key: "Athens", label: { en: "Athens", el: "Αθήνα" }, emoji: "🏛️", image: "/images/athens.webp", description: { en: "Ancient history meets urban energy.", el: "Η αρχαία ιστορία συναντά την αστική ενέργεια." }, highlights: { en: ["Acropolis tours", "Food walks", "Saronic cruises"], el: ["Ξεναγήσεις Ακρόπολης", "Food walks", "Κρουαζιέρες Σαρωνικού"] } },
  { key: "Santorini", label: { en: "Santorini", el: "Σαντορίνη" }, emoji: "🌅", image: "/images/santorini.webp", description: { en: "Sunset cruises, wine tours, volcanic excursions.", el: "Sunset κρουαζιέρες, οινογνωσία, βουλκανικές εκδρομές." }, highlights: { en: ["Sunset cruises", "Wine tasting", "Volcano tours"], el: ["Sunset κρουαζιέρες", "Οινογνωσία", "Βουλκανικές εκδρομές"] } },
  { key: "Crete", label: { en: "Crete", el: "Κρήτη" }, emoji: "🏔️", image: "/images/crete.webp", description: { en: "From Knossos to Samaria Gorge.", el: "Από την Κνωσό μέχρι το Φαράγγι της Σαμαριάς." }, highlights: { en: ["Knossos Palace", "Samaria Gorge", "Balos & Gramvousa"], el: ["Ανάκτορο Κνωσού", "Φαράγγι Σαμαριάς", "Μπάλος & Γραμβούσα"] } },
  { key: "Mykonos", label: { en: "Mykonos", el: "Μύκονος" }, emoji: "🍸", image: "/images/mykonos.webp", description: { en: "Delos island, luxury boat trips.", el: "Εκδρομές Δήλου, πολυτελή boat trips." }, highlights: { en: ["Delos island tours", "Boat trips", "Windmills walks"], el: ["Εκδρομές Δήλου", "Boat trips", "Μύλοι"] } },
  { key: "Corfu", label: { en: "Corfu", el: "Κέρκυρα" }, emoji: "🌿", image: "/images/corfu.webp", description: { en: "Venetian elegance and Paxos day trips.", el: "Ενετική κομψότητα και εκδρομές στους Παξούς." }, highlights: { en: ["Old Town walks", "Paxos day trips", "Beach hopping"], el: ["Βόλτες Παλιάς Πόλης", "Παξοί", "Παραλίες"] } },
  { key: "Kefalonia", label: { en: "Kefalonia", el: "Κεφαλονιά" }, emoji: "⚓", image: "/images/kefalonia.webp", description: { en: "Melissani Cave, Myrtos beach.", el: "Λιμνοσπήλαιο Μελισσάνης, Μύρτος." }, highlights: { en: ["Melissani Cave", "Myrtos Beach", "Boat trips"], el: ["Σπήλαιο Μελισσάνης", "Παραλία Μύρτου", "Boat trips"] } },
  { key: "Lesvos", label: { en: "Lesvos", el: "Λέσβος" }, emoji: "🫒", image: "/images/lesvos.webp", description: { en: "Olive oil tastings, thermal springs.", el: "Γευσιγνωσία ελαιολάδου, ιαματικές πηγές." }, highlights: { en: ["Olive oil tastings", "Village life", "Thermal springs"], el: ["Γευσιγνωσία ελαιολάδου", "Χωριά", "Ιαματικές πηγές"] } },
  { key: "Thessaloniki", label: { en: "Thessaloniki", el: "Θεσσαλονίκη" }, emoji: "🏰", image: "/images/thessaloniki.webp", description: { en: "Food tours and Meteora day trips.", el: "Food tours και εκδρομές στα Μετέωρα." }, highlights: { en: ["Food tours", "Meteora day trips", "Halkidiki beaches"], el: ["Food tours", "Εκδρομές Μετεώρων", "Χαλκιδική"] } },
  { key: "Skiathos", label: { en: "Skiathos", el: "Σκιάθος" }, emoji: "🌲", image: "/images/skiathos.webp", description: { en: "Koukounaries, Lalaria, Skiathos Town.", el: "Κουκουναριές, Λαλάρια, Χώρα." }, highlights: { en: ["Koukounaries Beach", "Lalaria Beach", "Skiathos Town"], el: ["Κουκουναριές", "Λαλάρια", "Χώρα Σκιάθου"] } },
  { key: "Thassos", label: { en: "Thassos", el: "Θάσος" }, emoji: "🌲", image: "/images/thassos.webp", description: { en: "Marble beaches, mountain villages.", el: "Μαρμάρινες παραλίες, ορεινά χωριά." }, highlights: { en: ["Marble beaches", "Giola Lagoon", "Mountain villages"], el: ["Μαρμάρινες παραλίες", "Γκιόλα", "Ορεινά χωριά"] } },
  { key: "Nafplio", label: { en: "Nafplio", el: "Ναύπλιο" }, emoji: "🏛️", image: "/images/nafplio.webp", description: { en: "Mycenae, Epidaurus, Argolic Gulf.", el: "Μυκήνες, Επίδαυρος, Αργολικός." }, highlights: { en: ["Mycenae tours", "Epidaurus", "Argolic Gulf"], el: ["Μυκήνες", "Επίδαυρος", "Αργολικός Κόλπος"] } },
  { key: "Paros", label: { en: "Paros", el: "Πάρος" }, emoji: "⛵", image: "/images/paros.webp", description: { en: "Naoussa, golden beaches, boat trips.", el: "Νάουσα, Χρυσή Ακτή, θαλάσσιες βόλτες." }, highlights: { en: ["Naoussa Harbor", "Golden Beach", "Antiparos trips"], el: ["Λιμάνι Νάουσας", "Χρυσή Ακτή", "Εκδρομές Αντίπαρο"] } },
  { key: "Milos", label: { en: "Milos", el: "Μήλος" }, emoji: "🌋", image: "/images/milos.webp", description: { en: "Sarakiniko, Kleftiko boat tours.", el: "Σαρακίνικο, Boat Tour Κλέφτικο." }, highlights: { en: ["Sarakiniko", "Kleftiko Boat Tour", "Syrmata villages"], el: ["Σαρακίνικο", "Boat Tour Κλέφτικο", "Σύρματα"] } },
  { key: "Zakynthos", label: { en: "Zakynthos", el: "Ζάκυνθος" }, emoji: "🐢", image: "/images/zakynthos.webp", description: { en: "Navagio Beach, Blue Caves, turtles.", el: "Ναυάγιο, Γαλάζιες Σπηλιές, χελώνες." }, highlights: { en: ["Navagio Beach", "Blue Caves", "Turtle spotting"], el: ["Ναυάγιο", "Γαλάζιες Σπηλιές", "Χελώνες"] } },
  { key: "Rhodes", label: { en: "Rhodes", el: "Ρόδος" }, emoji: "🛡️", image: "/images/rhodes.webp", description: { en: "Medieval City, Lindos, Prasonisi.", el: "Μεσαιωνική Πόλη, Λίνδος, Πρασονήσι." }, highlights: { en: ["Medieval City", "Lindos Acropolis", "Prasonisi surfing"], el: ["Παλιά Πόλη Ρόδου", "Ακρόπολη Λίνδου", "Πρασονήσι"] } },
  { key: "Halkidiki", label: { en: "Halkidiki", el: "Χαλκιδική" }, emoji: "🌲", image: "/images/halkidiki.webp", description: { en: "Sithonia beaches, Mount Athos cruises.", el: "Παραλίες Σιθωνίας, κρουαζιέρες Αγίου Όρους." }, highlights: { en: ["Sithonia beaches", "Athos cruises", "Kassandra nightlife"], el: ["Παραλίες Σιθωνίας", "Κρουαζιέρες Άθως", "Κασσάνδρα"] } },
  { key: "Meteora", label: { en: "Meteora", el: "Μετέωρα" }, emoji: "⛰️", image: "/images/meteora.webp", description: { en: "Cliff monasteries, sunset views, hiking.", el: "Μοναστήρια, ηλιοβασίλεμα, πεζοπορία." }, highlights: { en: ["Monastery tours", "Sunset views", "Hiking trails"], el: ["Μοναστήρια", "Ηλιοβασίλεμα", "Πεζοπορία"] } },
  { key: "Monemvasia", label: { en: "Monemvasia", el: "Μονεμβασιά" }, emoji: "🏰", image: "/images/monemvasia.webp", description: { en: "A medieval sea fortress.", el: "Μεσαιωνική καστροπολιτεία." }, highlights: { en: ["Castle walk", "Upper Town", "Sea views"], el: ["Βόλτα στο Κάστρο", "Άνω Πόλη", "Θέα στη Θάλασσα"] } },
  { key: "Parga", label: { en: "Parga", el: "Πάργα" }, emoji: "🏘️", image: "/images/parga.webp", description: { en: "Venetian castle, Paxos day trips.", el: "Ενετικό κάστρο, εκδρομές Παξοί." }, highlights: { en: ["Venetian Castle", "Valtos Beach", "Paxos day trips"], el: ["Ενετικό Κάστρο", "Παραλία Βάλτου", "Εκδρομή Παξοί"] } },
  { key: "Delphi", label: { en: "Delphi", el: "Δελφοί" }, emoji: "🏺", image: "/images/delphi.webp", description: { en: "Temple of Apollo, mountain views.", el: "Ναός Απόλλωνα, θέα στο βουνό." }, highlights: { en: ["Temple of Apollo", "Ancient Theater", "Delphi Museum"], el: ["Ναός Απόλλωνα", "Αρχαίο Θέατρο", "Μουσείο Δελφών"] } },
];

export default function ToursDirectoryClient({ lang, tours }: Props) {
  const [activeBentoRegion, setActiveBentoRegion] = useState<string | null>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedGroupSize, setSelectedGroupSize] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  function withLang(path: string) {
    const normalised = path.startsWith("/") ? path : `/${path}`;
    return `/${lang}${normalised}`;
  }

  const featuredTours = useMemo(() => tourExperiences.filter(t => t.featured), []);

  const typesList = useMemo(() => Array.from(new Set(tourExperiences.map(t => t.type))), []);
  const regionsList = useMemo(() => Array.from(new Set(tourExperiences.map(t => t.region))), []);

  const filteredTours = useMemo(() => {
    let result = [...tourExperiences];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(t =>
        t.title[lang].toLowerCase().includes(q) ||
        t.shortDescription[lang].toLowerCase().includes(q) ||
        t.destination.toLowerCase().includes(q)
      );
    }
    if (selectedType !== "all") result = result.filter(t => t.type === selectedType);
    if (selectedRegion !== "all") result = result.filter(t => t.region === selectedRegion);
    if (selectedPriceRange === "under-60") result = result.filter(t => t.priceFrom < 60);
    else if (selectedPriceRange === "60-100") result = result.filter(t => t.priceFrom >= 60 && t.priceFrom <= 100);
    else if (selectedPriceRange === "over-100") result = result.filter(t => t.priceFrom > 100);
    if (selectedDuration === "short") result = result.filter(t => t.durationHours < 4);
    else if (selectedDuration === "medium") result = result.filter(t => t.durationHours >= 4 && t.durationHours <= 6);
    else if (selectedDuration === "long") result = result.filter(t => t.durationHours > 6);
    if (selectedGroupSize === "private") result = result.filter(t => t.groupSize.toLowerCase().includes("private"));
    else if (selectedGroupSize === "group") result = result.filter(t => !t.groupSize.toLowerCase().includes("private"));

    if (sortBy === "popularity") result.sort((a, b) => b.reviewCount - a.reviewCount);
    else if (sortBy === "price-low") result.sort((a, b) => a.priceFrom - b.priceFrom);
    else if (sortBy === "price-high") result.sort((a, b) => b.priceFrom - a.priceFrom);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [searchQuery, selectedType, selectedRegion, selectedPriceRange, selectedDuration, selectedGroupSize, sortBy, lang]);

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const paginatedTours = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTours.slice(start, start + itemsPerPage);
  }, [filteredTours, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("tours-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#FDFCF9] text-slate-900 pb-32 overflow-hidden selection:bg-cyan-200">
      
      {/* ════════ HERO ════════ */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero/greece-main.webp"
            alt="Tours in Greece"
            fill
            priority
            className="object-cover object-center brightness-[0.75]"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-[#FDFCF9]" />
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl px-6 py-2.5 text-xs font-bold uppercase tracking-[0.3em] text-white border border-white/20 shadow-2xl mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            {lang === "en" ? "The Art of Greek Travel" : "Η Τέχνη του Ταξιδιού"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight [text-shadow:0_4px_12px_rgba(0,0,0,0.15)]"
          >
            {lang === "en" ? "Unforgettable Experiences" : "Αξέχαστες Εμπειρίες"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            {lang === "en"
              ? "Discover curated catamaran cruises, food tours, archaeological walks and authentic local encounters across Greece."
              : "Ανακαλύψτε κρουαζιέρες, γαστρονομικές περιηγήσεις και αυθεντικές τοπικές εμπειρίες."}
          </motion.p>
        </div>
      </section>

      {/* ════════ SIGNATURE COLLECTION — Featured Tours ════════ */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-cyan-600 block mb-3">
            {lang === "en" ? "Handpicked by Locals" : "Επιλεγμένο από Ντόπιους"}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-slate-950">
            {lang === "en" ? "The Signature Collection" : "Η Συλλογή Signature"}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map(tour => (
            <TourCard key={tour.slug} tour={tour} lang={lang} />
          ))}
        </div>
      </section>

      {/* ════════ ALL TOURS GRID WITH FILTERS ════════ */}
      <section id="tours-list" className="mx-auto max-w-7xl px-6 mt-24 scroll-mt-24 border-t border-slate-200/60 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h3 className="font-serif text-2xl md:text-4xl font-medium tracking-tight text-slate-950 mb-2">
              {lang === "en" ? "All Bookable Experiences" : "Όλες οι Διαθέσιμες Εμπειρίες"}
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-light">
              {lang === "en"
                ? `Showing ${filteredTours.length} experiences across Greece`
                : `Εμφάνιση ${filteredTours.length} εμπειριών στην Ελλάδα`}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
              {lang === "en" ? "Sort:" : "Ταξινόμηση:"}
            </label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-white border border-slate-200 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="popularity">{lang === "en" ? "Most Popular" : "Δημοφιλή"}</option>
              <option value="price-low">{lang === "en" ? "Price: Low → High" : "Τιμή: Χαμηλή → Υψηλή"}</option>
              <option value="price-high">{lang === "en" ? "Price: High → Low" : "Τιμή: Υψηλή → Χαμηλή"}</option>
              <option value="rating">{lang === "en" ? "Highest Rated" : "Καλύτερη Βαθμολογία"}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* FILTERS SIDEBAR */}
          <aside className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md h-fit space-y-6 sticky top-24">
            <div>
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center justify-between">
                <span>{lang === "en" ? "Filters" : "Φίλτρα"}</span>
                {(searchQuery || selectedType !== "all" || selectedRegion !== "all" || selectedPriceRange !== "all" || selectedDuration !== "all" || selectedGroupSize !== "all") && (
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedType("all"); setSelectedRegion("all"); setSelectedPriceRange("all"); setSelectedDuration("all"); setSelectedGroupSize("all"); }}
                    className="text-xs font-bold text-cyan-600 hover:text-cyan-700"
                  >
                    {lang === "en" ? "Clear" : "Καθαρισμός"}
                  </button>
                )}
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder={lang === "en" ? "Search experiences..." : "Αναζήτηση..."}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-2xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                />
                <span className="absolute left-3.5 top-3.5 text-slate-400 text-sm">🔍</span>
              </div>
            </div>

            {/* Type */}
            <div className="border-t border-slate-100 pt-6">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{lang === "en" ? "Type" : "Τύπος"}</h5>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {[{ key: "all", en: "All Types", el: "Όλοι" } as const, ...[...typesList].map(t => {
                  const enLabels: Record<string, string> = { boat: "Boat", food: "Gastronomy", history: "History", adventure: "Adventure", "day-trip": "Day Trip", cultural: "Cultural", nature: "Nature", wellness: "Wellness" };
                  const elLabels: Record<string, string> = { boat: "Θαλάσσια", food: "Γαστρονομία", history: "Ιστορία", adventure: "Περιπέτεια", "day-trip": "Ημερήσια", cultural: "Πολιτισμός", nature: "Φύση", wellness: "Ευεξία" };
                  return { key: t, en: enLabels[t] || t, el: elLabels[t] || t };
                })].map(opt => (
                  <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="type" checked={selectedType === opt.key} onChange={() => { setSelectedType(opt.key); setCurrentPage(1); }} className="h-4 w-4 text-cyan-600 border-slate-300 focus:ring-cyan-500" />
                    <span className={`text-sm ${selectedType === opt.key ? "text-slate-900 font-bold" : "text-slate-600"}`}>{opt[lang as keyof typeof opt] as string}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Region */}
            <div className="border-t border-slate-100 pt-6">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{lang === "en" ? "Region" : "Περιοχή"}</h5>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {[{ key: "all", label: lang === "en" ? "All Greece" : "Όλη η Ελλάδα" }, ...regionsList.map(r => ({ key: r, label: r }))].map(opt => (
                  <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="region" checked={selectedRegion === opt.key} onChange={() => { setSelectedRegion(opt.key); setCurrentPage(1); }} className="h-4 w-4 text-cyan-600 border-slate-300 focus:ring-cyan-500" />
                    <span className={`text-sm ${selectedRegion === opt.key ? "text-slate-900 font-bold" : "text-slate-600"}`}>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-slate-100 pt-6">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{lang === "en" ? "Price" : "Τιμή"}</h5>
              <div className="space-y-2">
                {[{ key: "all", en: "Any Price", el: "Όλες" }, { key: "under-60", en: "Under €60", el: "Έως €60" }, { key: "60-100", en: "€60 – €100", el: "€60 – €100" }, { key: "over-100", en: "Over €100", el: "Πάνω από €100" }].map(opt => (
                  <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" checked={selectedPriceRange === opt.key} onChange={() => { setSelectedPriceRange(opt.key); setCurrentPage(1); }} className="h-4 w-4 text-cyan-600 border-slate-300 focus:ring-cyan-500" />
                    <span className={`text-sm ${selectedPriceRange === opt.key ? "text-slate-900 font-bold" : "text-slate-600"}`}>{opt[lang as keyof typeof opt] as string}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="border-t border-slate-100 pt-6">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{lang === "en" ? "Duration" : "Διάρκεια"}</h5>
              <div className="space-y-2">
                {[{ key: "all", en: "Any", el: "Όλες" }, { key: "short", en: "Short (< 4h)", el: "Μικρή (< 4ω)" }, { key: "medium", en: "Medium (4-6h)", el: "Μεσαία (4-6ω)" }, { key: "long", en: "Long (> 6h)", el: "Μεγάλη (> 6ω)" }].map(opt => (
                  <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="duration" checked={selectedDuration === opt.key} onChange={() => { setSelectedDuration(opt.key); setCurrentPage(1); }} className="h-4 w-4 text-cyan-600 border-slate-300 focus:ring-cyan-500" />
                    <span className={`text-sm ${selectedDuration === opt.key ? "text-slate-900 font-bold" : "text-slate-600"}`}>{opt[lang as keyof typeof opt] as string}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Group */}
            <div className="border-t border-slate-100 pt-6">
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{lang === "en" ? "Group" : "Γκρουπ"}</h5>
              <div className="space-y-2">
                {[{ key: "all", en: "All Groups", el: "Όλα" }, { key: "private", en: "Private", el: "Ιδιωτικά" }, { key: "group", en: "Shared", el: "Κοινά" }].map(opt => (
                  <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="groupsize" checked={selectedGroupSize === opt.key} onChange={() => { setSelectedGroupSize(opt.key); setCurrentPage(1); }} className="h-4 w-4 text-cyan-600 border-slate-300 focus:ring-cyan-500" />
                    <span className={`text-sm ${selectedGroupSize === opt.key ? "text-slate-900 font-bold" : "text-slate-600"}`}>{opt[lang as keyof typeof opt] as string}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* TOURS GRID */}
          <div className="space-y-12">
            {paginatedTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paginatedTours.map(tour => (
                  <TourCard key={tour.slug} tour={tour} lang={lang} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                <span className="text-5xl block mb-6">🏝️</span>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === "en" ? "No experiences found" : "Δεν βρέθηκαν εμπειρίες"}
                </h4>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  {lang === "en"
                    ? "Try adjusting your search or filters."
                    : "Δοκιμάστε να αλλάξετε τα φίλτρα σας."}
                </p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 pt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-45 disabled:pointer-events-none"
                >
                  ←
                </button>
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx + 1}
                    onClick={() => handlePageChange(idx + 1)}
                    className={`h-11 w-11 rounded-full font-bold text-sm transition ${
                      currentPage === idx + 1
                        ? "bg-cyan-600 text-white border border-cyan-500 shadow-md shadow-cyan-100"
                        : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-45 disabled:pointer-events-none"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ════════ BROWSE ALL VIATOR TOURS BY REGION ════════ */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center mb-14">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-cyan-600 block mb-3">
            {lang === "en" ? "Thousands More Experiences" : "Χιλιάδες Ακόμα Εμπειρίες"}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-slate-950 mb-4">
            {lang === "en" ? "Browse Live Bookable Tours by Region" : "Περιήγηση ανά Περιοχή"}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            {lang === "en"
              ? "Explore thousands of tours, activities and experiences live from our Viator partner database."
              : "Εξερευνήστε χιλιάδες εκδρομές ζωντανά από τη βάση δεδομένων του συνεργάτη μας Viator."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {regions.map(region => {
            const isActive = activeBentoRegion === region.key;
            const widgetId = VIATOR_WIDGET_MAPPING[region.key];

            return (
              <motion.div
                key={region.key}
                layout="position"
                className={`group/card relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl transition-all duration-500 ${
                  isActive ? "md:col-span-2 lg:col-span-3 border-cyan-300 shadow-2xl shadow-cyan-50" : "hover:-translate-y-2 hover:shadow-2xl"
                }`}
              >
                <div
                  className={`relative cursor-pointer overflow-hidden ${isActive ? "h-48 md:h-80" : "h-80"}`}
                  onClick={() => setActiveBentoRegion(isActive ? null : region.key)}
                >
                  <Image
                    src={region.image}
                    alt={region.label[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{region.emoji}</span>
                      <h3 className="font-serif text-2xl font-medium tracking-wide">{region.label[lang]}</h3>
                    </div>
                    {!isActive && (
                      <p className="text-sm text-slate-200 font-light line-clamp-2 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0">
                        {region.description[lang]}
                      </p>
                    )}
                  </div>
                  <div className="absolute top-8 right-8">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full glass-effect text-slate-900 transition-all duration-500 ${isActive ? "rotate-180 bg-cyan-500 text-white border-cyan-400" : "group-hover/card:bg-white"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden bg-[#fafafa] border-t border-slate-100"
                    >
                      <div className="p-8 md:p-12">
                        <div className="mb-10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-[2px] bg-cyan-600" />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                              {lang === "en" ? "Available Experiences" : "Διαθέσιμες Εμπειρίες"}
                            </span>
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                            Viator Partner
                          </span>
                        </div>
                        {widgetId ? (
                          <div className="w-full bg-white rounded-3xl p-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100">
                            <ViatorWidget key={`${region.key}-widget`} partnerId="P00298401" widgetRef={widgetId} />
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center p-8 md:p-16 bg-white rounded-3xl border border-dashed border-slate-200">
                            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8">
                              <span className="text-4xl">✨</span>
                            </div>
                            <h4 className="text-2xl font-serif text-slate-900 mb-4">
                              {lang === "en" ? "Curating the Collection" : "Ετοιμάζουμε τη Συλλογή"}
                            </h4>
                            <p className="text-slate-500 max-w-md text-lg font-light leading-relaxed mb-8">
                              {lang === "en"
                                ? "We are currently handpicking the most authentic experiences for this location. Coming soon."
                                : "Αυτή τη στιγμή επιλέγουμε τις καλύτερες εμπειρίες. Σύντομα διαθέσιμο."}
                            </p>
                            <Link
                              href={withLang(`/destinations/${region.key.toLowerCase()}`)}
                              className="inline-flex items-center gap-2 text-cyan-600 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                            >
                              {lang === "en" ? "Explore Guide →" : "Δείτε τον Οδηγό →"}
                            </Link>
                          </div>
                        )}
                        <div className="mt-12 text-center">
                          <button
                            onClick={() => setActiveBentoRegion(null)}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors py-2 px-6 border border-slate-200 rounded-full hover:border-cyan-200"
                          >
                            {lang === "en" ? "Close" : "Κλείσιμο"}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="mx-auto mt-28 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-10 md:p-16 text-center text-white shadow-2xl"
        >
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.4)_0%,transparent_70%)]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">
              {lang === "en" ? "Join the Journey" : "Γίνετε μέρος του Ταξιδιού"}
            </span>
            <h2 className="font-serif text-3xl font-medium md:text-5xl mb-8 tracking-tight leading-tight">
              {lang === "en"
                ? <>Seek advice from <br /><span className="italic text-cyan-200 font-light">those who live here</span></>
                : <>Ζητήστε συμβουλές από <br /><span className="italic text-cyan-200 font-light">όσους ζουν εδώ</span></>}
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base md:text-lg text-slate-400 font-light leading-relaxed">
              {lang === "en"
                ? "Our community of locals and travelers is here to help you craft the perfect Greek itinerary."
                : "Η κοινότητά μας από ντόπιους και ταξιδιώτες είναι εδώ για να σας βοηθήσει."}
            </p>
            <Link
              href={withLang("/travel-to-greece")}
              className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-slate-900 transition-all hover:bg-cyan-50 hover:gap-6 active:scale-95 shadow-2xl group"
            >
              <span className="font-bold text-sm uppercase tracking-widest">
                {lang === "en" ? "Enter the Community" : "Μπείτε στην Κοινότητα"}
              </span>
              <div className="bg-slate-900 rounded-full p-2 text-white group-hover:bg-cyan-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
