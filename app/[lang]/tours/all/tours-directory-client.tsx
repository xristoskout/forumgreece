"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type TourItem, type Lang } from "../../../../lib/content";
import { VIATOR_WIDGET_MAPPING } from "../../../../lib/experiences";
import ViatorWidget from "../../../../components/viator-widget";

type Props = {
  lang: Lang;
  tours: TourItem[];
};

const regions = [
  { key: "Athens", label: { en: "Athens", el: "Αθήνα" }, emoji: "🏛️", image: "/images/athens.webp", count: 150, description: { en: "Ancient history meets urban energy.", el: "Η αρχαία ιστορία συναντά την αστική ενέργεια." }, highlights: { en: ["Acropolis tours", "Food walks", "Saronic cruises"], el: ["Ξεναγήσεις Ακρόπολης", "Food walks", "Κρουαζιέρες Σαρωνικού"] } },
  { key: "Corfu", label: { en: "Corfu", el: "Κέρκυρα" }, emoji: "🌿", image: "/images/corfu.webp", count: 100, description: { en: "Venetian elegance and Paxos day trips.", el: "Ενετική κομψότητα και εκδρομές στους Παξούς." }, highlights: { en: ["Old Town walks", "Paxos day trips", "Beach hopping"], el: ["Βόλτες Παλιάς Πόλης", "Παξοί", "Παραλίες"] } },
  { key: "Crete", label: { en: "Crete", el: "Κρήτη" }, emoji: "🏔️", image: "/images/crete.webp", count: 180, description: { en: "From Knossos to Samaria Gorge.", el: "Από την Κνωσό μέχρι το Φαράγγι της Σαμαριάς." }, highlights: { en: ["Knossos Palace", "Samaria Gorge", "Balos & Gramvousa"], el: ["Ανάκτορο Κνωσού", "Φαράγγι Σαμαριάς", "Μπάλος & Γραμβούσα"] } },
  { key: "Delphi", label: { en: "Delphi", el: "Δελφοί" }, emoji: "🏺", image: "/images/delphi.webp", count: 40, description: { en: "Temple of Apollo, mountain views.", el: "Ναός Απόλλωνα, θέα στο βουνό." }, highlights: { en: ["Temple of Apollo", "Ancient Theater", "Delphi Museum"], el: ["Ναός Απόλλωνα", "Αρχαίο Θέατρο", "Μουσείο Δελφών"] } },
  { key: "Halkidiki", label: { en: "Halkidiki", el: "Χαλκιδική" }, emoji: "🌲", image: "/images/halkidiki.webp", count: 60, description: { en: "Sithonia beaches, Mount Athos cruises.", el: "Παραλίες Σιθωνίας, κρουαζιέρες Αγίου Όρους." }, highlights: { en: ["Sithonia beaches", "Athos cruises", "Kassandra nightlife"], el: ["Παραλίες Σιθωνίας", "Κρουαζιέρες Άθως", "Κασσάνδρα"] } },
  { key: "Kefalonia", label: { en: "Kefalonia", el: "Κεφαλονιά" }, emoji: "⚓", image: "/images/kefalonia.webp", count: 80, description: { en: "Melissani Cave, Myrtos beach.", el: "Λιμνοσπήλαιο Μελισσάνης, Μύρτος." }, highlights: { en: ["Melissani Cave", "Myrtos Beach", "Boat trips"], el: ["Σπήλαιο Μελισσάνης", "Παραλία Μύρτου", "Boat trips"] } },
  { key: "Lefkada", label: { en: "Lefkada", el: "Λευκάδα" }, emoji: "🏖️", image: "/images/lefkada.webp", count: 50, description: { en: "Porto Katsiki, Egremni, Ionian island hopping.", el: "Πόρτο Κατσίκη, Εγκρεμνί, island hopping Ιονίου." }, highlights: { en: ["Porto Katsiki", "Egremni Beach", "Sailing tours"], el: ["Πόρτο Κατσίκη", "Παραλία Εγκρεμνί", "Ιστιοπλοΐα"] } },
  { key: "Lesvos", label: { en: "Lesvos", el: "Λέσβος" }, emoji: "🫒", image: "/images/lesvos.webp", count: 40, description: { en: "Olive oil tastings, thermal springs.", el: "Γευσιγνωσία ελαιολάδου, ιαματικές πηγές." }, highlights: { en: ["Olive oil tastings", "Village life", "Thermal springs"], el: ["Γευσιγνωσία ελαιολάδου", "Χωριά", "Ιαματικές πηγές"] } },
  { key: "Meteora", label: { en: "Meteora", el: "Μετέωρα" }, emoji: "⛰️", image: "/images/meteora.webp", count: 45, description: { en: "Cliff monasteries, sunset views, hiking.", el: "Μοναστήρια, ηλιοβασίλεμα, πεζοπορία." }, highlights: { en: ["Monastery tours", "Sunset views", "Hiking trails"], el: ["Μοναστήρια", "Ηλιοβασίλεμα", "Πεζοπορία"] } },
  { key: "Milos", label: { en: "Milos", el: "Μήλος" }, emoji: "🌋", image: "/images/milos.webp", count: 65, description: { en: "Sarakiniko, Kleftiko boat tours.", el: "Σαρακίνικο, Boat Tour Κλέφτικο." }, highlights: { en: ["Sarakiniko", "Kleftiko Boat Tour", "Syrmata villages"], el: ["Σαρακίνικο", "Boat Tour Κλέφτικο", "Σύρματα"] } },
  { key: "Monemvasia", label: { en: "Monemvasia", el: "Μονεμβασιά" }, emoji: "🏰", image: "/images/monemvasia.webp", count: 25, description: { en: "A medieval sea fortress.", el: "Μεσαιωνική καστροπολιτεία." }, highlights: { en: ["Castle walk", "Upper Town", "Sea views"], el: ["Βόλτα στο Κάστρο", "Άνω Πόλη", "Θέα στη Θάλασσα"] } },
  { key: "Mykonos", label: { en: "Mykonos", el: "Μύκονος" }, emoji: "🍸", image: "/images/mykonos.webp", count: 120, description: { en: "Delos island, luxury boat trips.", el: "Εκδρομές Δήλου, πολυτελή boat trips." }, highlights: { en: ["Delos island tours", "Boat trips", "Windmills walks"], el: ["Εκδρομές Δήλου", "Boat trips", "Μύλοι"] } },
  { key: "Nafplio", label: { en: "Nafplio", el: "Ναύπλιο" }, emoji: "🏛️", image: "/images/nafplio.webp", count: 60, description: { en: "Mycenae, Epidaurus, Argolic Gulf.", el: "Μυκήνες, Επίδαυρος, Αργολικός." }, highlights: { en: ["Mycenae tours", "Epidaurus", "Argolic Gulf"], el: ["Μυκήνες", "Επίδαυρος", "Αργολικός Κόλπος"] } },
  { key: "Paros", label: { en: "Paros", el: "Πάρος" }, emoji: "⛵", image: "/images/paros.webp", count: 70, description: { en: "Naoussa, golden beaches, boat trips.", el: "Νάουσα, Χρυσή Ακτή, θαλάσσιες βόλτες." }, highlights: { en: ["Naoussa Harbor", "Golden Beach", "Antiparos trips"], el: ["Λιμάνι Νάουσας", "Χρυσή Ακτή", "Εκδρομές Αντίπαρο"] } },
  { key: "Parga", label: { en: "Parga", el: "Πάργα" }, emoji: "🏘️", image: "/images/parga.webp", count: 30, description: { en: "Venetian castle, Paxos day trips.", el: "Ενετικό κάστρο, εκδρομές Παξοί." }, highlights: { en: ["Venetian Castle", "Valtos Beach", "Paxos day trips"], el: ["Ενετικό Κάστρο", "Παραλία Βάλτου", "Εκδρομή Παξοί"] } },
  { key: "Rhodes", label: { en: "Rhodes", el: "Ρόδος" }, emoji: "🛡️", image: "/images/rhodes.webp", count: 130, description: { en: "Medieval City, Lindos, Prasonisi.", el: "Μεσαιωνική Πόλη, Λίνδος, Πρασονήσι." }, highlights: { en: ["Medieval City", "Lindos Acropolis", "Prasonisi surfing"], el: ["Παλιά Πόλη Ρόδου", "Ακρόπολη Λίνδου", "Πρασονήσι"] } },
  { key: "Santorini", label: { en: "Santorini", el: "Σαντορίνη" }, emoji: "🌅", image: "/images/santorini.webp", count: 200, description: { en: "Sunset cruises, wine tours, volcanic excursions.", el: "Sunset κρουαζιέρες, οινογνωσία, βουλκανικές εκδρομές." }, highlights: { en: ["Sunset cruises", "Wine tasting", "Volcano tours"], el: ["Sunset κρουαζιέρες", "Οινογνωσία", "Βουλκανικές εκδρομές"] } },
  { key: "Skiathos", label: { en: "Skiathos", el: "Σκιάθος" }, emoji: "🌲", image: "/images/skiathos.webp", count: 50, description: { en: "Koukounaries, Lalaria, Skiathos Town.", el: "Κουκουναριές, Λαλάρια, Χώρα." }, highlights: { en: ["Koukounaries Beach", "Lalaria Beach", "Skiathos Town"], el: ["Κουκουναριές", "Λαλάρια", "Χώρα Σκιάθου"] } },
  { key: "Skopelos", label: { en: "Skopelos", el: "Σκόπελος" }, emoji: "🌲", image: "/images/skopelos.webp", count: 35, description: { en: "Green island, Mamma Mia! filming location.", el: "Πράσινο νησί, γνωστό από το Mamma Mia!" }, highlights: { en: ["Skopelos Town", "Stafilos Beach", "Church of Panagia"], el: ["Χώρα Σκοπέλου", "Παραλία Στάφυλος", "Παναγία η Παγανιώτισσα"] } },
  { key: "Syros", label: { en: "Syros", el: "Σύρος" }, emoji: "🎭", image: "/images/syros.webp", count: 30, description: { en: "Hermoupolis neoclassical capital, Aristides domes.", el: "Ερμούπολη νεοκλασική πρωτεύουσα, θόλοι Αριστείδη." }, highlights: { en: ["Hermoupolis Town", "Ano Syros", "Finikas Bay"], el: ["Ερμούπολη", "Άνω Σύρος", "Κόλπος Φοίνικα"] } },
  { key: "Thassos", label: { en: "Thassos", el: "Θάσος" }, emoji: "🌲", image: "/images/thassos.webp", count: 35, description: { en: "Marble beaches, mountain villages.", el: "Μαρμάρινες παραλίες, ορεινά χωριά." }, highlights: { en: ["Marble beaches", "Giola Lagoon", "Mountain villages"], el: ["Μαρμάρινες παραλίες", "Γκιόλα", "Ορεινά χωριά"] } },
  { key: "Thessaloniki", label: { en: "Thessaloniki", el: "Θεσσαλονίκη" }, emoji: "🏰", image: "/images/thessaloniki.webp", count: 80, description: { en: "Food tours and Meteora day trips.", el: "Food tours και εκδρομές στα Μετέωρα." }, highlights: { en: ["Food tours", "Meteora day trips", "Halkidiki beaches"], el: ["Food tours", "Εκδρομές Μετεώρων", "Χαλκιδική"] } },
  { key: "Zakynthos", label: { en: "Zakynthos", el: "Ζάκυνθος" }, emoji: "🐢", image: "/images/zakynthos.webp", count: 90, description: { en: "Navagio Beach, Blue Caves, turtles.", el: "Ναυάγιο, Γαλάζιες Σπηλιές, χελώνες." }, highlights: { en: ["Navagio Beach", "Blue Caves", "Turtle spotting"], el: ["Ναυάγιο", "Γαλάζιες Σπηλιές", "Χελώνες"] } },
];

export default function ToursDirectoryClient({ lang, tours }: Props) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  function withLang(path: string) {
    const normalised = path.startsWith("/") ? path : `/${path}`;
    return `/${lang}${normalised}`;
  }

  return (
    <main className="min-h-screen bg-[#FDFCF9] text-slate-900 pb-32 overflow-hidden selection:bg-cyan-200">
      
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[500px] h-[70vh] w-full flex items-center justify-center overflow-hidden pt-24">
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
            sizes="100vw"
            priority
            className="object-cover object-center brightness-[0.75]"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent via-50% to-transparent to-95%" />
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl py-12">
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
              ? "Discover thousands of tours, activities and authentic local experiences across all regions of Greece."
              : "Ανακαλύψτε χιλιάδες εκδρομές, δραστηριότητες και αυθεντικές τοπικές εμπειρίες σε όλη την Ελλάδα."}
          </motion.p>
        </div>
      </section>

      {/* ════════ ALL TOURS: VIATOR REGION SELECTOR ════════ */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <div className="text-center mb-10">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-cyan-600 block mb-3">
            {lang === "en" ? "Thousands of Experiences" : "Χιλιάδες Εμπειρίες"}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-slate-950 mb-3">
            {lang === "en" ? "Browse Live Bookable Tours by Region" : "Περιήγηση ανά Περιοχή"}
          </h2>
        </div>

        {/* All Region Pill Buttons — flat, compact */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {regions.map(region => {
            const isActive = selectedRegion === region.key;
            const hasWidget = !!VIATOR_WIDGET_MAPPING[region.key];
            return (
              <button
                key={region.key}
                onClick={() => {
                  setSelectedRegion(isActive ? null : region.key);
                  if (!isActive) setTimeout(() => widgetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
                }}
                className={`group relative px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-200 scale-105"
                    : hasWidget
                      ? "bg-white text-slate-700 border border-slate-200 shadow-sm hover:border-cyan-300 hover:shadow-md"
                      : "bg-slate-50 text-slate-400 border border-dashed border-slate-200 cursor-default"
                }`}
              >
                <span className="mr-1.5">{region.emoji}</span>
                {region.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Selected Region Widget */}
        {selectedRegion && (
          <motion.div
            ref={widgetRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-8"
          >
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-cyan-50 flex items-center justify-center text-xl">
                      {regions.find(r => r.key === selectedRegion)?.emoji}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-slate-900">
                        {regions.find(r => r.key === selectedRegion)?.label[lang]}
                      </h3>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600">
                        {lang === "en" ? "Available Experiences" : "Διαθέσιμες Εμπειρίες"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedRegion(null)}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors py-2 px-5 border border-slate-200 rounded-full hover:border-cyan-200"
                  >
                    {lang === "en" ? "Close" : "Κλείσιμο"}
                  </button>
                </div>

                {VIATOR_WIDGET_MAPPING[selectedRegion] ? (
                  <div className="w-full bg-[#fafafa] rounded-3xl p-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100">
                    <ViatorWidget key={selectedRegion} partnerId="P00298401" widgetRef={VIATOR_WIDGET_MAPPING[selectedRegion]} />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-12 bg-[#fafafa] rounded-3xl border border-dashed border-slate-200">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6">
                      <span className="text-4xl">✨</span>
                    </div>
                    <h4 className="text-xl font-serif text-slate-900 mb-3">
                      {lang === "en" ? "Curating the Collection" : "Ετοιμάζουμε τη Συλλογή"}
                    </h4>
                    <p className="text-slate-500 max-w-md font-light leading-relaxed mb-6">
                      {lang === "en"
                        ? "We are currently handpicking the most authentic experiences for this location. Coming soon."
                        : "Αυτή τη στιγμή επιλέγουμε τις καλύτερες εμπειρίες. Σύντομα διαθέσιμο."}
                    </p>
                    <Link
                      href={withLang(`/destinations/${selectedRegion.toLowerCase()}`)}
                      className="inline-flex items-center gap-2 text-cyan-600 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                    >
                      {lang === "en" ? "Explore Guide →" : "Δείτε τον Οδηγό →"}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Region Image Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {regions.map(region => {
            const isActive = selectedRegion === region.key;
            const hasWidget = !!VIATOR_WIDGET_MAPPING[region.key];
            return (
              <button
                key={region.key}
                onClick={() => setSelectedRegion(isActive ? null : region.key)}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 text-left ${
                  isActive
                    ? "border-cyan-400 ring-2 ring-cyan-200 shadow-lg shadow-cyan-100 scale-[1.02]"
                    : "border-slate-200 hover:border-cyan-300 hover:shadow-md hover:-translate-y-0.5"
                } ${hasWidget ? "bg-white" : "bg-slate-50 opacity-70"}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={region.image}
                    alt={region.label[lang]}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <span className="text-lg">{region.emoji}</span>
                    <span className="text-sm font-bold text-white drop-shadow-lg">{region.label[lang]}</span>
                  </div>
                  {isActive && (
                    <div className="absolute top-3 right-3 bg-cyan-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                      {lang === "en" ? "Selected" : "Επιλεγμένο"}
                    </div>
                  )}
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {hasWidget
                      ? `${region.count}+ ${lang === "en" ? "Tours" : "Εκδρομές"}`
                      : (lang === "en" ? "Coming Soon" : "Σύντομα")}
                  </span>
                  <span className={`text-lg transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}>↓</span>
                </div>
              </button>
            );
          })}
        </div>

        {!selectedRegion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-50 border border-slate-200 px-6 py-3 text-sm text-slate-500">
              <span>👆</span>
              <span>
                {lang === "en" ? "Select a region to explore tours" : "Επιλέξτε περιοχή για να δείτε εκδρομές"}
              </span>
            </div>
          </motion.div>
        )}
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
