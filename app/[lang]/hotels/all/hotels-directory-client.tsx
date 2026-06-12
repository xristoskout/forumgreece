"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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
    "Phocis, Central Greece": "Central Greece",
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
  };

  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {filtered.map((hotel) => (
              <Link href={`/${lang}/hotels/${hotel.slug}`} key={hotel.slug}>
                <article className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-white/50 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white/10 backdrop-blur-sm">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500"></div>

                  {hotel.badge && (
                    <div className="absolute top-8 right-8">
                      <span className="px-5 py-2 rounded-full bg-white/90 backdrop-blur-xl text-indigo-900 text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                        {hotel.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                      <span className="text-indigo-200 text-xs font-bold uppercase tracking-widest">
                        {hotel.place}
                      </span>
                    </div>

                    <h2 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:text-indigo-100 transition-colors">
                      {hotel.name}
                    </h2>

                    <p className="text-white/70 text-sm line-clamp-2 mb-8 font-light leading-relaxed">
                      {hotel.info[lang]}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {hotel.features[lang].slice(0, 3).map((feat, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-[10px] uppercase font-bold tracking-wider"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <span className="text-white text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        {t.view[lang]} <span className="ml-2">→</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
