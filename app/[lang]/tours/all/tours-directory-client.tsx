"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { type TourItem, type Lang } from "../../../../lib/content";
import { VIATOR_WIDGET_MAPPING } from "../../../../lib/experiences";
import ViatorWidget from "../../../../components/viator-widget";

type Props = {
  lang: Lang;
  tours: TourItem[];
};

// Regions that already have a full dedicated tours page
const TOURS_PAGE_SLUGS: Record<string, string> = {
  Kefalonia: "kefalonia-tours",
  Lesvos: "lesvos-tours",
  Crete: "crete-tours",
  Athens: "athens-tours",
  Santorini: "santorini-tours",
  Mykonos: "mykonos-tours",
};

const regions = [
  {
    key: "Athens",
    label: { en: "Athens", el: "Αθήνα" },
    emoji: "🏛️",
    image: "/images/athens.webp",
    description: {
      en: "Ancient history meets urban energy. Explore the Acropolis, walking tours, and Saronic gulf boat trips.",
      el: "Η αρχαία ιστορία συναντά την αστική ενέργεια. Εξερευνήστε την Ακρόπολη και θαλάσσιες εκδρομές στον Σαρωνικό.",
    },
    highlights: { en: ["Acropolis tours", "Food walks", "Saronic cruises"], el: ["Ξεναγήσεις Ακρόπολης", "Food walks", "Κρουαζιέρες Σαρωνικού"] },
  },
  {
    key: "Santorini",
    label: { en: "Santorini", el: "Σαντορίνη" },
    emoji: "🌅",
    image: "/images/santorini.webp",
    description: {
      en: "The world's most famous caldera. Discover sunset cruises, wine tours, and volcanic excursions.",
      el: "Η διασημότερη καλντέρα του κόσμου. Ανακαλύψτε κρουαζιέρες στο ηλιοβασίλεμα και οινογνωσία.",
    },
    highlights: { en: ["Sunset cruises", "Wine tasting", "Volcano tours"], el: ["Sunset κρουαζιέρες", "Οινογνωσία", "Βουλκανικές εκδρομές"] },
  },
  {
    key: "Crete",
    label: { en: "Crete", el: "Κρήτη" },
    emoji: "🏔️",
    image: "/images/crete.webp",
    description: {
      en: "A world of its own. From the Palace of Knossos to the Samaria Gorge and exotic beaches.",
      el: "Ένας κόσμος από μόνος του. Από την Κνωσό μέχρι το Φαράγγι της Σαμαριάς και εξωτικές παραλίες.",
    },
    highlights: { en: ["Knossos Palace", "Samaria Gorge", "Balos & Gramvousa"], el: ["Ανάκτορο Κνωσού", "Φαράγγι Σαμαριάς", "Μπάλος & Γραμβούσα"] },
  },
  {
    key: "Mykonos",
    label: { en: "Mykonos", el: "Μύκονος" },
    emoji: "🍸",
    image: "/images/mykonos.webp",
    description: {
      en: "Cosmopolitan vibes and history. Visit the sacred island of Delos or enjoy luxury boat trips.",
      el: "Κοσμοπολίτικη αύρα και ιστορία. Επισκεφθείτε την ιερή Δήλο ή απολαύστε πολυτελή boat trips.",
    },
    highlights: { en: ["Delos island tours", "Boat trips", "Windmills walks"], el: ["Εκδρομές Δήλου", "Boat trips", "Μύλοι"] },
  },
  {
    key: "Corfu",
    label: { en: "Corfu", el: "Κέρκυρα" },
    emoji: "🌿",
    image: "/images/corfu.webp",
    description: {
      en: "Venetian elegance and turquoise waters. Explore the Old Town and the stunning Paxos & Antipaxos islands.",
      el: "Ενετική κομψότητα και τυρκουάζ νερά. Εξερευνήστε την Παλιά Πόλη και τους Παξούς.",
    },
    highlights: { en: ["Old Town walks", "Paxos day trips", "Beach hopping"], el: ["Βόλτες Παλιάς Πόλης", "Παξοί", "Παραλίες"] },
  },
  {
    key: "Kefalonia",
    label: { en: "Kefalonia", el: "Κεφαλονιά" },
    emoji: "⚓",
    image: "/images/kefalonia.webp",
    description: {
      en: "Ionian gems. Discover Melissani Cave, Myrtos beach, and curated boat experiences.",
      el: "Τα διαμάντια του Ιονίου. Ανακαλύψτε το Λιμνοσπήλαιο Μελισσάνης και τον Μύρτο.",
    },
    highlights: { en: ["Melissani Cave", "Myrtos Beach", "Boat trips"], el: ["Σπήλαιο Μελισσάνης", "Παραλία Μύρτου", "Boat trips"] },
  },
  {
    key: "Lesvos",
    label: { en: "Lesvos", el: "Λέσβος" },
    emoji: "🫒",
    image: "/images/lesvos.webp",
    description: {
      en: "Authentic island life. Experience olive oil tastings, traditional villages and thermal springs.",
      el: "Αυθεντική νησιωτική ζωή. Ζήστε γευσιγνωσίες ελαιολάδου, παραδοσιακά χωριά και ιαματικές πηγές.",
    },
    highlights: { en: ["Olive oil tastings", "Village life", "Thermal springs"], el: ["Γευσιγνωσία ελαιολάδου", "Χωριά", "Ιαματικές πηγές"] },
  },
  {
    key: "Thessaloniki",
    label: { en: "Thessaloniki", el: "Θεσσαλονίκη" },
    emoji: "🏰",
    image: "/images/thessaloniki.webp",
    description: {
      en: "The culinary capital. Enjoy walking food tours, history, and day trips to Meteora or Halkidiki.",
      el: "Η γαστρονομική πρωτεύουσα. Απολαύστε food tours και εκδρομές στα Μετέωρα ή τη Χαλκιδική.",
    },
    highlights: { en: ["Food tours", "Meteora day trips", "Halkidiki beaches"], el: ["Food tours", "Εκδρομές Μετεώρων", "Χαλκιδική"] },
  },
  {
    key: "Skiathos",
    label: { en: "Skiathos", el: "Σκιάθος" },
    emoji: "🌲",
    image: "/images/skiathos.webp",
    description: {
      en: "Pine-scented beaches and vibrant nightlife. Famous for Koukounaries, Lalaria, and the charming Skiathos Town.",
      el: "Πετυχημένος συνδυασμός πευκόφυτων παραλιών και έντονης νυχτερινής ζωής. Διάσημο για Κουκουναριές, Λαλάρια και τη γραφική Χώρα.",
    },
    highlights: { en: ["Koukounaries Beach", "Lalaria Beach", "Skiathos Town"], el: ["Κουκουναριές", "Λαλάρια", "Χώρα Σκιάθου"] },
  },
  {
    key: "Thassos",
    label: { en: "Thassos", el: "Θάσος" },
    emoji: "🌲",
    image: "/images/thassos.webp",
    description: {
      en: "Greece's greenest island. Marble beaches, pine forests, mountain villages and the ancient agora of Limenas.",
      el: "Το πιο πράσινο νησί της Ελλάδας. Μαρμάρινες παραλίες, πευκοδάση, ορεινά χωριά και η αρχαία αγορά του Λιμένα.",
    },
    highlights: { en: ["Marble beaches", "Giola Lagoon", "Mountain villages"], el: ["Μαρμάρινες παραλίες", "Γκιόλα", "Ορεινά χωριά"] },
  },
  {
    key: "Nafplio",
    label: { en: "Nafplio", el: "Ναύπλιο" },
    emoji: "🏛️",
    image: "/images/nafplio.webp",
    description: {
      en: "Romantic old towns and ancient ruins. Visit Mycenae, Epidaurus and the Argolic Gulf.",
      el: "Ρομαντικές παλιές πόλεις και αρχαία ερείπια. Επισκεφθείτε τις Μυκήνες και την Επίδαυρο.",
    },
    highlights: { en: ["Mycenae tours", "Epidaurus", "Argolic Gulf"], el: ["Μυκήνες", "Επίδαυρος", "Αργολικός Κόλπος"] },
  },
  {
    key: "Paros",
    label: { en: "Paros", el: "Πάρος" },
    emoji: "⛵",
    image: "/images/paros.webp",
    description: {
      en: "Traditional villages and golden beaches. Explore Naoussa harbor, Parikia, and enjoy boat trips.",
      el: "Παραδοσιακά χωριά και χρυσές παραλίες. Εξερευνήστε τη Νάουσα, την Παροικιά και απολαύστε θαλάσσιες βόλτες.",
    },
    highlights: { en: ["Naoussa Harbor", "Golden Beach", "Antiparos trips"], el: ["Λιμάνι Νάουσας", "Χρυσή Ακτή", "Εκδρομές Αντίπαρο"] },
  },
  {
    key: "Milos",
    label: { en: "Milos", el: "Μήλος" },
    emoji: "🌋",
    image: "/images/milos.webp",
    description: {
      en: "Volcanic coastline and turquoise waters. Discover Sarakiniko, Kleftiko, and rare geological formations.",
      el: "Ηφαιστειακή ακτογραμμή και τυρκουάζ νερά. Ανακαλύψτε το Σαρακίνικο, το Κλέφτικο και σπάνιους σχηματισμούς.",
    },
    highlights: { en: ["Sarakiniko", "Kleftiko Boat Tour", "Syrmata villages"], el: ["Σαρακίνικο", "Boat Tour Κλέφτικο", "Σύρματα"] },
  },
  {
    key: "Zakynthos",
    label: { en: "Zakynthos", el: "Ζάκυνθος" },
    emoji: "🐢",
    image: "/images/zakynthos.webp",
    description: {
      en: "The shipwreck island. Visit Navagio Beach, Blue Caves, and spot Caretta-Caretta turtles.",
      el: "Το νησί του Ναυαγίου. Επισκεφθείτε την παραλία Ναυάγιο, τις Γαλάζιες Σπηλιές και δείτε χελώνες Caretta-Caretta.",
    },
    highlights: { en: ["Navagio Beach", "Blue Caves", "Turtle spotting"], el: ["Ναυάγιο", "Γαλάζιες Σπηλιές", "Χελώνες"] },
  },
  {
    key: "Rhodes",
    label: { en: "Rhodes", el: "Ρόδος" },
    emoji: "🛡️",
    image: "/images/rhodes.webp",
    description: {
      en: "Medieval history and diverse beaches. Explore the Old Town, Lindos Acropolis, and hidden bays.",
      el: "Μεσαιωνική ιστορία και ποικιλόμορφες παραλίες. Εξερευνήστε την Παλιά Πόλη, τη Λίνδο και κρυφούς κόλπους.",
    },
    highlights: { en: ["Medieval City", "Lindos Acropolis", "Prasonisi surfing"], el: ["Μεσαιωνική Πόλη", "Ακρόπολη Λίνδου", "Πρασονήσι"] },
  },
  {
    key: "Halkidiki",
    label: { en: "Halkidiki", el: "Χαλκιδική" },
    emoji: "🌲",
    image: "/images/halkidiki.webp",
    description: {
      en: "Crystal waters and pine forests. Discover the three peninsulas, hidden coves and Mount Athos cruises.",
      el: "Κρυστάλλινα νερά και πευκοδάση. Ανακαλύψτε τις τρεις χερσονήσους και κάντε κρουαζιέρα στο Άγιο Όρος.",
    },
    highlights: { en: ["Sithonia beaches", "Athos cruises", "Kassandra nightlife"], el: ["Παραλίες Σιθωνίας", "Κρουαζιέρες Άθως", "Κασσάνδρα"] },
  },
  {
    key: "Meteora",
    label: { en: "Meteora", el: "Μετέωρα" },
    emoji: "⛰️",
    image: "/images/meteora.webp",
    description: {
      en: "Spiritual landscapes and giant rocks. Visit the cliff-top monasteries and enjoy sunset views.",
      el: "Πνευματικά τοπία και γιγάντιοι βράχοι. Επισκεφθείτε τα μοναστήρια στις κορυφές και απολαύστε το ηλιοβασίλεμα.",
    },
    highlights: { en: ["Monastery tours", "Sunset views", "Hiking trails"], el: ["Μοναστήρια", "Ηλιοβασίλεμα", "Πεζοπορία"] },
  },
  {
    key: "Monemvasia",
    label: { en: "Monemvasia", el: "Μονεμβασιά" },
    emoji: "🏰",
    image: "/images/monemvasia.webp",
    description: {
      en: "A medieval fortress on a sea rock. Walk the stone alleys and experience timeless romance.",
      el: "Μια μεσαιωνική καστροπολιτεία σε ένα βράχο. Περπατήστε στα πέτρινα σοκάκια και ζήστε τον ρομαντισμό.",
    },
    highlights: { en: ["Castle walk", "Upper Town", "Sea views"], el: ["Βόλτα στο Κάστρο", "Άνω Πόλη", "Θέα στη Θάλασσα"] },
  },
  {
    key: "Parga",
    label: { en: "Parga", el: "Πάργα" },
    emoji: "🏘️",
    image: "/images/parga.webp",
    description: {
      en: "Colorful hillside town and Ionian vibes. Visit the Venetian castle and enjoy boat trips to Paxos.",
      el: "Πολύχρωμη πόλη με αύρα Ιονίου. Επισκεφθείτε το ενετικό κάστρο και κάντε εκδρομές στους Παξούς.",
    },
    highlights: { en: ["Venetian Castle", "Valtos Beach", "Paxos day trips"], el: ["Ενετικό Κάστρο", "Παραλία Βάλτου", "Εκδρομή Παξοί"] },
  },
  {
    key: "Delphi",
    label: { en: "Delphi", el: "Δελφοί" },
    emoji: "🏺",
    image: "/images/delphi.webp",
    description: {
      en: "The navel of the world. Explore the sacred archaeological site, the theater, and the stunning mountain views.",
      el: "Ο ομφαλός της γης. Εξερευνήστε τον ιερό αρχαιολογικό χώρο, το θέατρο και την εντυπωσιακή θέα στο βουνό.",
    },
    highlights: { en: ["Temple of Apollo", "Ancient Theater", "Delphi Museum"], el: ["Ναός Απόλλωνα", "Αρχαίο Θέατρο", "Μουσείο Δελφών"] },
  },
];

export default function ToursDirectoryClient({ lang, tours }: Props) {
  const [activeBentoRegion, setActiveBentoRegion] = useState<string | null>(null);

  function withLang(path: string) {
    const normalised = path.startsWith("/") ? path : `/${path}`;
    return `/${lang}${normalised}`;
  }

  const featuredKeys = ["Athens", "Santorini", "Crete", "Mykonos", "Kefalonia", "Lesvos"];
  const featuredRegions = regions.filter((r) => featuredKeys.includes(r.key));
  const bentoRegions = regions.filter((r) => !featuredKeys.includes(r.key));

  return (
    <main className="min-h-screen bg-[#FDFCF9] text-slate-900 pb-32 overflow-hidden selection:bg-cyan-200">
      
      {/* ─────────────────────────────────────────────────────────
          1. PREMIUM EDITORIAL HERO
          ───────────────────────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
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
            className="object-cover object-center brightness-[0.85]"
          />
        </motion.div>
        
        {/* Multi-layered overlays for depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-[#FDFCF9]" />
        <div className="absolute inset-0 z-10 bg-radial-gradient(circle_at_center, transparent 0%, rgba(0,0,0,0.2) 100%)" />
        
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl px-6 py-2.5 text-xs font-bold uppercase tracking-[0.3em] text-white border border-white/20 shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              {lang === "en" ? "The Art of Greek Travel" : "Η Τέχνη του Ταξιδιού"}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl font-medium tracking-tight text-white md:text-8xl lg:text-9xl text-shadow-elegant"
          >
            {lang === "en" ? (
              <>Unforgettable <br/><span className="italic font-light italic text-cyan-200">Experiences</span></>
            ) : (
              <>Αξέχαστες <br/><span className="italic font-light italic text-cyan-200">Εμπειρίες</span></>
            )}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mx-auto mt-6 max-w-2xl text-lg md:text-2xl font-light leading-relaxed text-white/90 drop-shadow-md"
          >
            {lang === "en"
              ? "Discover the soul of Greece through curated journeys, private boat trips and authentic local encounters."
              : "Ανακαλύψτε την ψυχή της Ελλάδας μέσα από επιλεγμένες διαδρομές, ιδιωτικές κρουαζιέρες και αυθεντικές εμπειρίες."}
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Explore</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-white/80 to-transparent animate-scroll-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. FEATURED DESTINATIONS (EDITORIAL LAYOUT)
          ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 text-center"
        >
          <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            {lang === "en" ? "Handpicked by Locals" : "Επιλεγμένα από Ανθρώπους που ζουν στον τόπο τους"}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight mb-8">
            {lang === "en" ? "The Signature Collection" : "Η Συλλογή Signature"}
          </h2>
          <div className="w-24 h-[1px] bg-slate-300 mx-auto" />
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {featuredRegions.map((region, index) => {
            const isEven = index % 2 === 0;
            const regionTours = tours.filter(t => t.place === region.key);
            const slug = TOURS_PAGE_SLUGS[region.key];
            const displayImage = regionTours[0]?.image || region.image;

            return (
              <motion.article 
                key={region.key}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-0`}
              >
                {/* Decorative background number/text */}
                <span className={`absolute top-4 ${isEven ? "left-4" : "right-4"} text-[10vw] font-serif font-black text-slate-100/20 select-none pointer-events-none z-0`}>
                  0{index + 1}
                </span>

                {/* Image Side with depth effect */}
                <div className="w-full lg:w-7/12 relative z-10 group">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="relative aspect-[4/5] md:aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]"
                  >
                    <Image
                      src={displayImage}
                      alt={region.label[lang]}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.div>
                  
                  {/* Floating badge */}
                  <div className={`absolute bottom-6 ${isEven ? "right-6" : "left-6"} hidden md:block z-20`}>
                    <div className="glass-effect p-6 rounded-2xl premium-card-shadow border border-white/50 max-w-[200px]">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600 mb-1 block">Highlight</span>
                      <p className="font-serif text-base leading-snug text-slate-800 italic">
                        "{region.highlights[lang][0]}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full lg:w-5/12 z-20 text-left`}>
                  <div className="glass-effect p-8 md:p-12 rounded-[2rem] premium-card-shadow border border-white/80">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{region.emoji}</span>
                      <div className="h-[1px] w-8 bg-cyan-600" />
                      <span className="text-cyan-700 font-bold uppercase tracking-widest text-[10px]">
                        {region.label[lang]}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-slate-900 leading-tight">
                      {lang === "en" ? `Explore ${region.label.en}` : `Εξερευνήστε την ${region.label.el}`}
                    </h3>
                    
                    <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                      {region.description[lang]}
                    </p>
  
                    <div className="flex flex-wrap gap-2 mb-10">
                      {region.highlights[lang].map((h) => (
                        <span key={h} className="rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-500 border border-slate-100">
                          {h}
                        </span>
                      ))}
                    </div>
  
                    <Link
                      href={withLang(`/tours/${slug}`)}
                      className="group/btn inline-flex items-center gap-4 rounded-full bg-slate-900 px-8 py-4 text-white transition-all hover:bg-cyan-800 hover:gap-6 active:scale-95 shadow-xl"
                    >
                      <span className="font-bold text-sm tracking-widest uppercase">
                        {lang === "en" ? "Explore More" : "Περισσότερα"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. BENTO GRID (THE DISCOVERY COLLECTION)
          ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-8 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-slate-200/60 pt-20"
        >
          <div>
            <span className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              {lang === "en" ? "More to Discover" : "Περισσότερα για Ανακάλυψη"}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-3">
              {lang === "en" ? "Beyond the Ordinary" : "Πέρα από τα Συνηθισμένα"}
            </h2>
            <p className="text-slate-500 font-light text-lg max-w-lg mt-6">
              {lang === "en" 
                ? "Browse live bookable activities across other spectacular locations."
                : "Αναζητήστε δραστηριότητες με άμεση κράτηση σε άλλες μαγευτικές τοποθεσίες."}
            </p>
          </div>
        </motion.div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bentoRegions.map((region, index) => {
            const isActive = activeBentoRegion === region.key;
            const widgetId = VIATOR_WIDGET_MAPPING[region.key];

            return (
              <motion.div
                key={region.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200/50 bg-white shadow-sm transition-all duration-700 ${isActive ? "md:col-span-2 lg:col-span-3 shadow-2xl ring-1 ring-cyan-500/20" : "hover:shadow-xl hover:-translate-y-2 group/card"}`}
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
                      <h3 className="font-serif text-2xl font-medium tracking-wide">
                        {region.label[lang]}
                      </h3>
                    </div>
                    {!isActive && (
                      <p className="text-sm text-slate-200 font-light line-clamp-2 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0">
                        {region.description[lang]}
                      </p>
                    )}
                  </div>

                  {/* Expand/Collapse Icon */}
                  <div className="absolute top-8 right-8">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full glass-effect text-slate-900 transition-all duration-500 ${isActive ? "rotate-180 bg-cyan-500 text-white border-cyan-400" : "group-hover/card:bg-white"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Expanded Widget Area */}
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
                            <ViatorWidget
                              key={`${region.key}-widget`}
                              partnerId="P00298401"
                              widgetRef={widgetId}
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center p-8 md:p-16 bg-white rounded-3xl border border-dashed border-slate-200">
                            <motion.div
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8"
                            >
                              <span className="text-4xl">✨</span>
                            </motion.div>
                            <h4 className="text-2xl font-serif text-slate-900 mb-4">
                              {lang === "en" ? "Curating the Collection" : "Ετοιμάζουμε τη Συλλογή"}
                            </h4>
                            <p className="text-slate-500 max-w-md text-lg font-light leading-relaxed mb-8">
                              {lang === "en" 
                                ? "We are currently handpicking the most authentic experiences for this location. Our signature collection for this region is launching soon."
                                : "Αυτή τη στιγμή επιλέγουμε τις πιο αυθεντικές εμπειρίες για αυτή την τοποθεσία. Η συλλογή μας για αυτή την περιοχή θα είναι σύντομα διαθέσιμη."}
                            </p>
                            <Link 
                              href={withLang(`/destinations/${region.key.toLowerCase()}`)}
                              className="inline-flex items-center gap-2 text-cyan-600 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
                            >
                              {lang === "en" ? "Explore Destination Guide" : "Δείτε τον Οδηγό Προορισμού"}
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </Link>
                          </div>
                        )}
                        
                        <div className="mt-12 text-center">
                          <button
                            onClick={() => setActiveBentoRegion(null)}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-600 transition-colors py-2 px-6 border border-slate-200 rounded-full hover:border-cyan-200"
                          >
                            {lang === "en" ? "Close Activities" : "Κλείσιμο"}
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

      {/* ─────────────────────────────────────────────────────────
          4. CTA SECTION
          ───────────────────────────────────────────────────────── */}
      <section className="mx-auto mt-8 max-w-4xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-10 md:p-16 text-center text-white shadow-2xl"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.4)_0%,transparent_70%)]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">
              {lang === "en" ? "Join the Journey" : "Γίνετε μέρος του Ταξιδιού"}
            </span>
            <h2 className="font-serif text-3xl font-medium md:text-5xl mb-8 tracking-tight leading-tight">
              {lang === "en" 
                ? <>Seek advice from <br/><span className="italic text-cyan-200 font-light">those who live here</span></>
                : <>Ζητήστε συμβουλές από <br/><span className="italic text-cyan-200 font-light">όσους ζουν εδώ</span></>}
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base md:text-lg text-slate-400 font-light leading-relaxed">
              {lang === "en"
                ? "Our community of locals and travelers is here to help you craft the perfect Greek itinerary."
                : "Η κοινότητά μας από ντόπιους και ταξιδιώτες είναι εδώ για να σας βοηθήσει να σχεδιάσετε το τέλειο πρόγραμμα."}
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
