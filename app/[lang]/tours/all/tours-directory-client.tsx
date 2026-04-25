"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type TourItem, type Lang } from "../../../../lib/content";
import { VIATOR_WIDGET_MAPPING } from "../../../../lib/experiences";
import ViatorWidget from "../../../../components/viator-widget";

type Props = {
  lang: Lang;
  tours: TourItem[];
};

const regions = [
  {
    key: "Athens",
    label: { en: "Athens & Attica", el: "Αθήνα & Αττική" },
    emoji: "🏛️",
    description: {
      en: "Ancient history meets urban energy. Explore the Acropolis, walking tours, and Saronic gulf boat trips.",
      el: "Η αρχαία ιστορία συναντά την αστική ενέργεια. Εξερευνήστε την Ακρόπολη και θαλάσσιες εκδρομές στον Σαρωνικό."
    }
  },
  {
    key: "Santorini",
    label: { en: "Santorini", el: "Σαντορίνη" },
    emoji: "🌅",
    description: {
      en: "The world's most famous caldera. Discover sunset cruises, wine tours, and volcanic excursions.",
      el: "Η διασημότερη καλντέρα του κόσμου. Ανακαλύψτε κρουαζιέρες στο ηλιοβασίλεμα και οινογνωσία."
    }
  },
  {
    key: "Crete",
    label: { en: "Crete", el: "Κρήτη" },
    emoji: "🏔️",
    description: {
      en: "A world of its own. From the Palace of Knossos to the Samaria Gorge and exotic beaches.",
      el: "Ένας κόσμος από μόνος του. Από την Κνωσό μέχρι το Φαράγγι της Σαμαριάς και εξωτικές παραλίες."
    }
  },
  {
    key: "Mykonos",
    label: { en: "Mykonos", el: "Μύκονος" },
    emoji: "🍸",
    description: {
      en: "Cosmopolitan vibes and history. Visit the sacred island of Delos or enjoy luxury boat trips.",
      el: "Κοσμοπολίτικη αύρα και ιστορία. Επισκεφθείτε την ιερή Δήλο ή απολαύστε πολυτελή boat trips."
    }
  },
  {
    key: "Corfu",
    label: { en: "Corfu", el: "Κέρκυρα" },
    emoji: "🌿",
    description: {
      en: "Venetian elegance and turquoise waters. Explore the Old Town and the stunning Paxos & Antipaxos islands.",
      el: "Ενετική κομψότητα και τυρκουάζ νερά. Εξερευνήστε την Παλιά Πόλη και τους Παξούς."
    }
  },
  {
    key: "Kefalonia",
    label: { en: "Kefalonia", el: "Κεφαλονιά" },
    emoji: "⚓",
    description: {
      en: "Ionian gems. Discover Melissani Cave, Myrtos beach, and curated boat experiences.",
      el: "Τα διαμάντια του Ιονίου. Ανακαλύψτε το Λιμνοσπήλαιο Μελισσάνης και τον Μύρτο."
    }
  },
  {
    key: "Lesvos",
    label: { en: "Lesvos", el: "Λέσβος" },
    emoji: "🫒",
    description: {
      en: "Authentic island life. Experience olive oil tastings, traditional villages and thermal springs.",
      el: "Αυθεντική νησιωτική ζωή. Ζήστε γευσιγνωσίες ελαιολάδου, παραδοσιακά χωριά και ιαματικές πηγές."
    }
  },
  {
    key: "Thessaloniki",
    label: { en: "Thessaloniki", el: "Θεσσαλονίκη" },
    emoji: "🏰",
    description: {
      en: "The culinary capital. Enjoy walking food tours, history, and day trips to Meteora or Halkidiki.",
      el: "Η γαστρονομική πρωτεύουσα. Απολαύστε food tours και εκδρομές στα Μετέωρα ή τη Χαλκιδική."
    }
  },
  {
    key: "Nafplio",
    label: { en: "Nafplio & Peloponnese", el: "Ναύπλιο & Πελοπόννησος" },
    emoji: "🏛️",
    description: {
      en: "Romantic old towns and ancient ruins. Visit Mycenae, Epidaurus and the Argolic Gulf.",
      el: "Ρομαντικές παλιές πόλεις και αρχαία ερείπια. Επισκεφθείτε τις Μυκήνες και την Επίδαυρο."
    }
  }
];

export default function ToursDirectoryClient({ lang, tours }: Props) {
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>({});

  function withLang(path: string) {
    return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
  }

  const toggleRegion = (key: string) => {
    setExpandedRegions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/hero/greece-main.webp"
          alt="Tours in Greece"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-50" />
        
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 text-center md:text-left">
          <span className="mb-4 inline-flex self-center md:self-start rounded-full bg-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md border border-cyan-400/30">
            {lang === "en" ? "Greece Tours & Experiences" : "Εκδρομές & Εμπειρίες στην Ελλάδα"}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            {lang === "en" ? "Explore Greece by Region" : "Εξερευνήστε την Ελλάδα ανά Περιοχή"}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-100 md:mx-0 md:text-xl font-light leading-relaxed">
            {lang === "en" 
              ? "Discover curated local guides and popular bookable activities across the most iconic Greek destinations." 
              : "Ανακαλύψτε επιλεγμένους τοπικούς οδηγούς και δημοφιλείς δραστηριότητες στους πιο εμβληματικούς ελληνικούς προορισμούς."}
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <div className="mx-auto mt-12 max-w-7xl px-6">
        <div className="space-y-24">
          {regions.map((region) => {
            const regionTours = tours.filter(t => t.place === region.key);
            const widgetId = VIATOR_WIDGET_MAPPING[region.key];
            const isExpanded = expandedRegions[region.key];

            return (
              <section key={region.key} id={region.key.toLowerCase()} className="scroll-mt-32 group">
                {/* Region Header */}
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8 transition-colors group-hover:border-cyan-200">
                  <div className="max-w-2xl">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm border border-slate-100 transition-transform group-hover:rotate-6 group-hover:scale-110">
                        {region.emoji}
                      </span>
                      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                        {region.label[lang]}
                      </h2>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      {region.description[lang]}
                    </p>
                  </div>
                  
                  {regionTours.length > 0 && (
                    <div className="shrink-0">
                      <span className="rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-800 border border-cyan-200">
                         {regionTours.length} {lang === "en" ? "Curated Guide" : "Επιλεγμένος Οδηγός"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-12">
                  {/* Curated Content Grid */}
                  {regionTours.length > 0 && (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {regionTours.map((tour) => (
                        <article 
                          key={tour.slug}
                          className="group/card flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                          <div className="relative h-64 w-full overflow-hidden">
                            <Image
                              src={tour.image}
                              alt={tour.title[lang]}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity group-hover/card:opacity-100" />
                            <div className="absolute top-4 left-4">
                              <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-700 shadow-sm backdrop-blur-sm">
                                {lang === "en" ? "Curated Guide" : "Επιλεγμένος Οδηγός"}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex flex-1 flex-col p-8">
                            <div className="mb-3 text-[10px] font-extrabold uppercase tracking-widest text-cyan-600">
                              {tour.place} {lang === "en" ? "Experiences" : "Εμπειρίες"}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover/card:text-cyan-700 transition-colors">
                              {tour.title[lang]}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 font-light text-sm">
                              {tour.info[lang]}
                            </p>
                            
                            <div className="mt-auto pt-6 border-t border-slate-50">
                              <Link 
                                href={withLang(`/tours/${tour.slug}`)}
                                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-cyan-700 hover:shadow-lg active:scale-95"
                              >
                                {lang === "en" ? "View Full Guide →" : "Πλήρης Οδηγός →"}
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}

                  {/* Viator Widget Section */}
                  <div className="rounded-[3rem] bg-white border border-slate-200 p-8 md:p-12 shadow-sm relative">
                    <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">
                          {lang === "en" ? "Bookable Activities & Boat Trips" : "Κρατήσεις & Θαλάσσιες Εμπειρίες"}
                        </h4>
                        <p className="text-slate-500 font-light text-sm">
                          {lang === "en" 
                            ? `Popular tours and verified experiences in ${region.label.en} via our partner Viator.` 
                            : `Δημοφιλείς εκδρομές και δοκιμασμένες εμπειρίες στην ${region.label.el} μέσω της Viator.`}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 grayscale opacity-40">
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Powered by</span>
                         <div className="text-xs font-black text-slate-900 tracking-tighter">VIATOR</div>
                      </div>
                    </div>
                    
                    {/* Expandable Container */}
                    <div 
                      className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
                        isExpanded ? "max-h-[5000px]" : "max-h-[560px]"
                      }`}
                    >
                      <div className="w-full min-h-[400px]">
                        {widgetId ? (
                          <ViatorWidget key={widgetId} partnerId="P00298401" widgetRef={widgetId} />
                        ) : (
                          <div className="flex h-64 flex-col items-center justify-center text-center opacity-40 grayscale">
                            <div className="text-5xl mb-4">⛵</div>
                            <p className="text-sm font-bold uppercase tracking-widest">
                              {lang === "en" ? "Updating activities..." : "Ενημέρωση δραστηριοτήτων..."}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Fade Overlay */}
                      {!isExpanded && (
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
                      )}
                    </div>

                    {/* Expand Button */}
                    <div className="mt-8 flex justify-center">
                      <button
                        onClick={() => toggleRegion(region.key)}
                        className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-cyan-700 hover:scale-105 active:scale-95 shadow-xl"
                      >
                        <span>{isExpanded 
                          ? (lang === "en" ? "Show Less" : "Εμφάνιση Λιγότερων") 
                          : (lang === "en" ? "Show All Activities" : "Δείτε όλες τις δραστηριότητες")}
                        </span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <section className="mx-auto mt-32 max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 p-12 text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6,182,212,0.4) 0%, transparent 50%)' }} />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold md:text-5xl mb-6 tracking-tight">
              {lang === "en" ? "Can't find what you're looking for?" : "Δεν βρήκατε αυτό που ψάχνετε;"}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 font-light leading-relaxed">
              {lang === "en" 
                ? "Our community of locals and travelers is here to help. Join the conversation and get personalized recommendations for your trip." 
                : "Η κοινότητά μας είναι εδώ για να σας βοηθήσει. Μπείτε στη συζήτηση και πάρτε προσωποποιημένες προτάσεις."}
            </p>
            <Link 
              href={withLang("/travel-to-greece")}
              className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20"
            >
              💬 {lang === "en" ? "Join the Community" : "Μπείτε στην Κοινότητα"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

