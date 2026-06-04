"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [activeRegionKey, setActiveRegionKey] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const scrollToRegion = (key: string) => {
    setActiveRegionKey(key);
    const id = `region-${key.toLowerCase().replace(/\s+/g, "-")}`;
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const t = {
    guide: { en: "Travel Guide", el: "Οδηγός Ταξιδιού" },
    comingSoon: { en: "Guide coming soon", el: "Οδηγός σύντομα" },
    destinations: { en: "destinations", el: "προορισμοί" },
    back: { en: "← Back to homepage", el: "← Πίσω στην αρχική" },
    h1: { en: "All Destinations in Greece", el: "Όλοι οι Προορισμοί στην Ελλάδα" },
    sub: {
      en: "Browse every destination by geographic region — from iconic Cycladic islands to mainland historical escapes.",
      el: "Εξερεύνησε κάθε προορισμό ανά γεωγραφική ενότητα — από τα εμβληματικά κυκλαδίτικα νησιά μέχρι ιστορικές ηπειρωτικές αποδράσεις.",
    },
  };

  const totalCount = destinations.length;

  return (
    <main className="min-h-screen bg-[#f8fbff]">

      {/* CSS keyframes for the carousel marquee */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }
        .carousel-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 pt-28 pb-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.3) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-indigo-300 text-sm font-medium hover:text-white transition-colors mb-8"
          >
            {t.back[lang]}
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-200 mb-6">
              🗺️ {lang === "en" ? "Browse by Region" : "Ανά Γεωγραφική Ενότητα"}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              {t.h1[lang]}
            </h1>
            <p className="text-lg text-indigo-200/80 leading-relaxed font-light max-w-2xl">
              {t.sub[lang]}
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-5 py-3 backdrop-blur-sm">
              <span className="text-2xl font-black text-white">{totalCount}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
                {lang === "en" ? "Destinations" : "Προορισμοί"}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-5 py-3 backdrop-blur-sm">
              <span className="text-2xl font-black text-white">{activeRegions.length}</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">
                {lang === "en" ? "Regions" : "Περιοχές"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Auto-scrolling Region Carousel ── */}
      <section className="bg-white border-b border-slate-100 py-8 overflow-hidden">
        {/* overflow-hidden on wrapper clips the infinite track */}
        <div
          className="flex"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track contains cards TWICE for seamless loop */}
          <div className={`carousel-track flex gap-4 px-4${paused ? " paused" : ""}`}>
            {[...activeRegions, ...activeRegions].map((region, i) => {
              const count = byRegion[region.key]?.length ?? 0;
              const isActive = activeRegionKey === region.key;
              return (
                <button
                  key={`${region.key}-${i}`}
                  onClick={() => scrollToRegion(region.key)}
                  className={`flex-shrink-0 flex flex-col items-start gap-2 rounded-2xl border px-5 py-4 text-left transition-all duration-300 w-52 ${
                    isActive
                      ? "border-indigo-400 bg-indigo-600 shadow-lg"
                      : "border-slate-200 bg-white hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-md"
                  }`}
                >
                  <span className="text-2xl">{region.emoji}</span>
                  <span className={`text-sm font-bold leading-snug ${isActive ? "text-white" : "text-slate-900"}`}>
                    {region.label[lang]}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${isActive ? "bg-white/20 text-indigo-100" : "bg-slate-100 text-slate-500"}`}>
                    {count} {t.destinations[lang]}
                  </span>
                </button>
              );
            })}
          </div>
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
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {activeRegions.map((region) => {
          const regionDestinations = byRegion[region.key] ?? [];
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
