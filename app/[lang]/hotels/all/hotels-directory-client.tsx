"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Lang, type HotelCard } from "../../../../lib/content";

const regionLabels: Record<string, { en: string; el: string }> = {
  Cyclades: { en: "Cyclades", el: "Κυκλάδες" },
  Dodecanese: { en: "Dodecanese", el: "Δωδεκάνησα" },
  "Ionian Islands": { en: "Ionian Islands", el: "Ιόνια Νησιά" },
  Attica: { en: "Attica & Argo-Saronic", el: "Αττική & Αργοσαρωνικός" },
  Crete: { en: "Crete", el: "Κρήτη" },
  "Central Macedonia": { en: "Central Macedonia", el: "Κεντρική Μακεδονία" },
   Peloponnese: { en: "Peloponnese", el: "Πελοπόννησος" },
   "Central Greece": { en: "Central Greece", el: "Στερεά Ελλάδα" },
   "Mainland Greece": { en: "Mainland Greece", el: "Ηπειρωτική Ελλάδα" },
  "North Aegean": { en: "North Aegean", el: "Βόρειο Αιγαίο" },
  Sporades: { en: "Sporades", el: "Σποράδες" },
  Epirus: { en: "Epirus", el: "Ήπειρος" },
  Thessaly: { en: "Thessaly", el: "Θεσσαλία" },
};

function getRegion(place: string): string {
  const parts = place.split("—");
  const raw = parts.length > 1 ? parts[parts.length - 1].trim() : place.trim();
  const regionMap: Record<string, string> = {
    "Southern Aegean": "Crete",
    "Western Crete": "Crete",
    "Central Crete": "Crete",
    "Laconia, Peloponnese": "Peloponnese",
    "Phocis, Central Greece": "Mainland Greece",
    "Central Greece": "Mainland Greece",
    "Epirus, Northwestern Greece": "Epirus",
    "Western Greece & Peloponnese": "Peloponnese",
    "Saronic Islands": "Attica",
    "Saronic Gulf, Attica": "Attica",
  };
  return regionMap[raw] || raw;
}

export default function HotelsDirectoryClient({
  lang,
  hotels,
}: {
  lang: Lang;
  hotels: HotelCard[];
}) {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = useMemo(() => {
    const set = new Set<string>();
    hotels.forEach((h) => set.add(getRegion(h.place)));
    return Array.from(set).sort();
  }, [hotels]);

  const filtered = useMemo(() => {
    return hotels.filter((h) => {
      if (search) {
        const q = search.toLowerCase();
        const match =
          h.name.toLowerCase().includes(q) ||
          h.place.toLowerCase().includes(q) ||
          h.info[lang].toLowerCase().includes(q) ||
          h.features[lang].some((f) => f.toLowerCase().includes(q));
        if (!match) return false;
      }
      if (selectedRegion && getRegion(h.place) !== selectedRegion) return false;
      return true;
    });
  }, [hotels, search, selectedRegion, lang]);

  const t = {
    view: { en: "View Guide", el: "Προβολή Οδηγού" },
    searchPlaceholder: {
      en: "Search destinations...",
      el: "Αναζήτηση προορισμών...",
    },
    noResults: {
      en: "No destinations found matching your search.",
      el: "Δεν βρέθηκαν προορισμοί.",
    },
    all: { en: "All", el: "Όλα" },
    tag: { en: "Where to Stay", el: "Διαμονή" },
    heroH1: { en: "Where to Stay in Greece", el: "Πού να Μείνετε στην Ελλάδα" },
    heroSub: {
      en: "Browse hotel and accommodation guides by destination.",
      el: "Δείτε οδηγούς ξενοδοχείων και καταλυμάτων ανά προορισμό.",
    },
    heroIntro: {
      en: "Choosing the right area matters more than choosing the right hotel — a caldera view in Santorini, a beach base in Naxos or a historic quarter in Athens each create a completely different trip. Our guides break down every destination area by area, with honest advice on views, prices, crowds and who each base suits best.",
      el: "",
    },
  };

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[640px] h-[80vh] w-full flex items-center justify-center overflow-hidden pt-24">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hotels-cover.webp"
            alt="Hotels & Stays in Greece"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center brightness-[0.75]"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/10 via-40% to-black/30 to-100%" />
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl py-16">
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
            {t.tag[lang]}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight [text-shadow:0_4px_12px_rgba(0,0,0,0.15)]"
          >
            {t.heroH1[lang]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            {t.heroSub[lang]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white/70 text-base max-w-3xl leading-relaxed mt-6"
          >
            {t.heroIntro[lang]}
          </motion.p>
        </div>
      </section>

    <section className="pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder[lang]}
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedRegion(null)}
            className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
              selectedRegion === null
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
            }`}
          >
            {t.all[lang]}
          </button>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() =>
                setSelectedRegion(region === selectedRegion ? null : region)
              }
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                selectedRegion === region
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
              }`}
            >
              {regionLabels[region]?.[lang] || region}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 text-lg py-20">
            {t.noResults[lang]}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filtered.map((hotel) => (
              <Link href={`/${lang}/hotels/${hotel.slug}`} key={hotel.slug}>
                <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 min-h-[280px]">
                  <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex-1 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full border border-indigo-200 bg-indigo-100 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-indigo-800 backdrop-blur-md">
                        {t.tag[lang]}
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white/80 backdrop-blur-md">
                        {hotel.place.split("—")[0].trim()}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold tracking-tight text-white drop-shadow-md">
                      {hotel.name}
                    </h3>

                    <p className="mb-3 text-xs leading-relaxed text-white/90 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden group-hover:block">
                      {hotel.info[lang]}
                    </p>

                    <span className="inline-flex w-full items-center justify-center rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 backdrop-blur-md transition-all hover:bg-indigo-600 hover:text-white">
                      {t.view[lang]} <span className="ml-1.5">→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
