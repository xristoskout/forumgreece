"use client";

import { useState } from "react";
import Link from "next/link";
import {
  siteBrand,
  siteBrandLine,
  type Destination,
  type Lang,
} from "../../../lib/content";
import { destinationSections } from "../../../lib/destination-sections";

export default function DestinationDetailsClient({
  destination,
}: {
  destination: Destination;
}) {
  const [lang, setLang] = useState<Lang>("en");
  const sections = destinationSections[destination.slug] ?? [];

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <section className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div>
              <div className="text-2xl font-bold tracking-tight text-sky-900 transition group-hover:text-sky-700">
                {siteBrand}
              </div>
              <div className="text-sm text-slate-500">
                {siteBrandLine[lang]}
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "en" ? "bg-sky-600 text-white" : "text-slate-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("el")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "el" ? "bg-sky-600 text-white" : "text-slate-600"
              }`}
            >
              GR
            </button>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,24,44,0.82) 0%, rgba(7,24,44,0.55) 45%, rgba(7,24,44,0.25) 100%), url('${destination.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid min-h-[560px] max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              {destination.region[lang]}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {destination.name}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              {destination.overview[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#destinations"
                className="rounded-full bg-white px-6 py-3 font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5"
              >
                {lang === "en" ? "Back to destinations" : "Επιστροφή στους προορισμούς"}
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {lang === "en" ? "Home page" : "Αρχική"}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {destination.highlights[lang].map((highlight) => (
              <article
                key={highlight}
                className="rounded-3xl bg-white/16 p-6 shadow-lg backdrop-blur-md"
              >
                <div className="text-3xl">📍</div>
                <h3 className="mt-4 text-xl font-semibold">{highlight}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  {lang === "en"
                    ? "A key reason this destination stands out for travelers."
                    : "Ένας από τους βασικούς λόγους που αυτός ο προορισμός ξεχωρίζει."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en" ? "Destination Overview" : "Περιγραφή Προορισμού"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                {destination.name}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {destination.overview[lang]}
              </p>
            </article>

            {sections.map((section) => (
              <article
                key={section.title.en}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {destination.name}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  {section.title[lang]}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {section.text[lang]}
                </p>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cyan-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en" ? "Highlights" : "Σημεία που Ξεχωρίζουν"}
              </p>

              <div className="mt-5 grid gap-3">
                {destination.highlights[lang].map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    ✨ {highlight}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en" ? "Travel Note" : "Travel Note"}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {destination.blurb[lang]}
              </p>

              <div className="mt-8 space-y-3">
                <Link
                  href="/#destinations"
                  className="block rounded-2xl bg-sky-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-sky-800"
                >
                  {lang === "en" ? "Explore more destinations" : "Δες περισσότερους προορισμούς"}
                </Link>

                <Link
                  href="/"
                  className="block rounded-2xl border border-slate-200 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  {lang === "en" ? "Back to homepage" : "Επιστροφή στην αρχική"}
                </Link>
              </div>
            </article>
          </aside>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            {lang === "en"
              ? `${siteBrand} — destinations, travel inspiration and local experiences across Greece.`
              : `${siteBrand} — προορισμοί, ταξιδιωτική έμπνευση και τοπικές εμπειρίες σε όλη την Ελλάδα.`}
          </div>

          <div className="flex gap-5">
            <Link href="/" className="hover:text-slate-800">
              {lang === "en" ? "Home" : "Αρχική"}
            </Link>
            <Link href="/#destinations" className="hover:text-slate-800">
              {lang === "en" ? "Destinations" : "Προορισμοί"}
            </Link>
            <Link href="/travel-to-greece" className="hover:text-slate-800">
              {lang === "en" ? "Travel to Greece" : "Travel to Greece"}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}