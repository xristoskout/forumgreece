"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Lang, Destination } from "../../../lib/content";

type RegionMeta = {
  key: string;
  label: { en: string; el: string };
  emoji: string;
  description: { en: string; el: string };
};

type Props = {
  lang: Lang;
  destinations: Destination[];
  regionOrder: RegionMeta[];
  byRegion: Record<string, Destination[]>;
  activeRegions: RegionMeta[];
};

export default function DestinationsClient({
  lang,
  destinations,
  byRegion,
  activeRegions,
}: Props) {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredByRegion = useMemo(() => {
    const result: Record<string, Destination[]> = {};
    for (const region of activeRegions) {
      const regionDests = byRegion[region.key] ?? [];
      const filtered = regionDests.filter((dest) => {
        if (search) {
          const q = search.toLowerCase();
          if (
            !dest.name.toLowerCase().includes(q) &&
            !dest.blurb[lang].toLowerCase().includes(q) &&
            !dest.highlights[lang].some((h) => h.toLowerCase().includes(q))
          )
            return false;
        }
        if (selectedRegion && region.key !== selectedRegion) return false;
        return true;
      });
      if (filtered.length > 0) result[region.key] = filtered;
    }
    return result;
  }, [byRegion, activeRegions, search, selectedRegion, lang]);

  const filteredRegions = useMemo(
    () => activeRegions.filter((r) => filteredByRegion[r.key]),
    [activeRegions, filteredByRegion]
  );

  const t = {
    guide: { en: "Travel Guide", el: "Οδηγός Ταξιδιού" },
    comingSoon: { en: "Guide coming soon", el: "Οδηγός σύντομα" },
    destinations: { en: "destinations", el: "προορισμοί" },
    h1: { en: "All Destinations in Greece", el: "Όλοι οι Προορισμοί στην Ελλάδα" },
    sub: {
      en: "Browse every destination by geographic region — from iconic Cycladic islands to mainland historical escapes.",
      el: "Εξερεύνησε κάθε προορισμό ανά γεωγραφική ενότητα — από τα εμβληματικά κυκλαδίτικα νησιά μέχρι ιστορικές ηπειρωτικές αποδράσεις.",
    },
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

  const totalCount = destinations.length;

  return (
    <main className="min-h-screen bg-[#f8fbff]">

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-[500px] h-[70vh] w-full flex items-center justify-center overflow-hidden pt-24">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/destinations-cover.webp"
            alt="All Destinations in Greece"
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
            🗺️ {lang === "en" ? "Browse by Region" : "Ανά Γεωγραφική Ενότητα"}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight [text-shadow:0_4px_12px_rgba(0,0,0,0.15)]"
          >
            {t.h1[lang]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            {t.sub[lang]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-6 justify-center"
          >
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
              <span className="text-2xl font-black text-white">{totalCount}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {lang === "en" ? "Destinations" : "Προορισμοί"}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3">
              <span className="text-2xl font-black text-white">{activeRegions.length}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {lang === "en" ? "Regions" : "Περιοχές"}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Search + Region pills ── */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-xl mx-auto px-6 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder[lang]}
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3 px-6">
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
          {activeRegions.map((region) => (
            <button
              key={region.key}
              onClick={() =>
                setSelectedRegion(region.key === selectedRegion ? null : region.key)
              }
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                selectedRegion === region.key
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
              }`}
            >
              {region.label[lang]}
            </button>
          ))}
        </div>
      </section>

      {/* ── Intro text ── */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {lang === "el"
              ? "Η Ελλάδα έχει πάνω από 200 κατοικημένα νησιά και μια ηπειρωτική ενδοχώρα γεμάτη αρχαίες πόλεις, βουνά και γραφικές ακτές. Από τις Κυκλάδες και τα Ιόνια μέχρι την Κρήτη, την Πελοπόννησο και τη Βόρεια Ελλάδα — κάθε περιοχή έχει τον δικό της χαρακτήρα. Περίγραψε παρακάτω για να βρεις τον προορισμό που σου ταιριάζει."
              : "Greece has over 200 inhabited islands and a mainland filled with ancient cities, mountains and scenic coasts. From the Cyclades and the Ionian islands to Crete, the Peloponnese and Northern Greece — each region has its own character. Browse below to find the destination that matches your travel style."}
          </p>
        </div>
      </section>

      {/* ── Regions ── */}
      {filteredRegions.length === 0 ? (
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-slate-500 text-lg">{t.noResults[lang]}</p>
        </div>
      ) : (
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {filteredRegions.map((region) => {
          const regionDestinations = filteredByRegion[region.key] ?? [];
          return (
            <section
              key={region.key}
              id={`region-${region.key.toLowerCase().replace(/\s+/g, "-")}`}
              className="scroll-mt-24"
            >
              {/* Region header */}
              <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{region.emoji}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {region.label[lang]}
                  </h2>
                  <p className="text-slate-500 max-w-2xl leading-relaxed">
                    {region.description[lang]}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="rounded-full bg-indigo-50 border border-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700">
                    {regionDestinations.length} {t.destinations[lang]}
                  </span>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-indigo-200 via-indigo-100 to-transparent mb-10" />

              {/* Destination cards */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {regionDestinations.map((dest) => {
                  const hasFullGuide = !!dest.seo;
                  return (
                    <article key={dest.slug} className="group flex flex-col h-full">
                      <Link
                        href={hasFullGuide ? `/${lang}/destinations/${dest.slug}` : "#"}
                        className={`flex flex-col h-full rounded-2xl overflow-hidden border bg-white shadow-sm transition-all duration-500 ${
                          hasFullGuide
                            ? "border-slate-200 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200 cursor-pointer"
                            : "border-slate-100 opacity-75 cursor-default pointer-events-none"
                        }`}
                        tabIndex={hasFullGuide ? undefined : -1}
                      >
                        <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                          <Image
                            src={dest.image}
                            alt={dest.name}
                            fill
                            className={`object-cover transition-transform duration-700 ${hasFullGuide ? "group-hover:scale-110" : ""}`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                            {dest.region[lang]}
                          </span>
                          {dest.featured && (
                            <span className="absolute top-3 right-3 rounded-full bg-indigo-600 px-2 py-1 text-[10px] font-bold uppercase text-white">
                              ★ Featured
                            </span>
                          )}
                          {!hasFullGuide && (
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white/80">
                                {t.comingSoon[lang]}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col flex-1 p-5">
                          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                            {dest.name}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                            {dest.blurb[lang]}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {dest.highlights[lang].slice(0, 2).map((h) => (
                              <span key={h} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                                {h}
                              </span>
                            ))}
                          </div>
                          {hasFullGuide ? (
                            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all mt-auto">
                              {t.guide[lang]} <span className="transition-transform group-hover:translate-x-1">→</span>
                            </span>
                          ) : (
                            <span className="text-xs text-slate-400 font-medium mt-auto">{t.comingSoon[lang]}</span>
                          )}
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      )}

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-indigo-950 to-slate-900 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-4xl mb-4">✈️</div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            {lang === "en" ? "Not sure where to start?" : "Δεν ξέρεις από πού να ξεκινήσεις;"}
          </h2>
          <p className="text-indigo-200/80 text-base leading-relaxed mb-8">
            {lang === "en"
              ? "Read our practical travel guides to choose the right destination, best time to visit and how to get there."
              : "Διάβασε τους πρακτικούς ταξιδιωτικούς οδηγούς μας για να επιλέξεις τον σωστό προορισμό, την καλύτερη εποχή και πώς θα φτάσεις."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/${lang}/travel-info`}
              className="rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-indigo-900 transition-all hover:bg-indigo-50 shadow-lg"
            >
              {lang === "en" ? "Browse Travel Info →" : "Ταξιδιωτικές Πληροφορίες →"}
            </Link>
            <Link
              href={`/${lang}`}
              className="rounded-2xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              {lang === "en" ? "← Back to Homepage" : "← Πίσω στην Αρχική"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
