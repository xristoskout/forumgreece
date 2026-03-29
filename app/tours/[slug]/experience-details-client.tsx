"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  siteBrand,
  siteBrandLine,
  type Lang,
} from "../../../lib/content";
import {
  type ExperienceBusiness,
  type ExperienceLanding,
} from "../../../lib/experiences";

export default function ExperienceDetailsClient({
  landing,
  businesses,
}: {
  landing: ExperienceLanding;
  businesses: ExperienceBusiness[];
}) {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <section className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-0 py-3 sm:gap-6 sm:px-6 sm:py-5">
          <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
  <Image
    src="/images/logo/gogreecenow-logo.png"
    alt="GoGreeceNow logo"
    width={56}
    height={56}
    className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14"
    priority
  />
  <div className="min-w-0">
    <div className="truncate text-lg font-bold tracking-tight text-sky-900 transition group-hover:text-sky-700 sm:text-2xl">
      {siteBrand}
    </div>
    <div className="hidden text-sm text-slate-500 sm:block">
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

      <section className="relative overflow-hidden bg-sky-950 text-white">
        <div className="mx-auto grid min-h-[520px] max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              {lang === "en" ? "Local Experiences" : "Τοπικές Εμπειρίες"}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {landing.title[lang]}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              {landing.description[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#tours"
                className="rounded-full bg-white px-6 py-3 font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5"
              >
                {lang === "en" ? "Back to tours" : "Επιστροφή στις εκδρομές"}
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
            {landing.highlights[lang].map((highlight) => (
              <article
                key={highlight}
                className="rounded-3xl bg-white/16 p-6 shadow-lg backdrop-blur-md"
              >
                <div className="text-3xl">⚓</div>
                <h3 className="mt-4 text-xl font-semibold">{highlight}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  {lang === "en"
                    ? "A practical reason to explore this experiences page."
                    : "Ένας πρακτικός λόγος για να εξερευνήσεις αυτή τη σελίδα εμπειριών."}
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
                {lang === "en" ? "Page Overview" : "Περιγραφή Σελίδας"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                {landing.title[lang]}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {landing.overview[lang]}
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en" ? "Featured Businesses" : "Featured Επιχειρήσεις"}
              </p>

              <div className="mt-6 space-y-6">
                {businesses.map((business) => (
                  <article
                    key={business.slug}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                          {business.category[lang]}
                        </div>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                          {business.name}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-slate-500">
                          {business.place}
                        </p>
                      </div>

                      {business.badge && (
                        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
                          {business.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-5 text-base leading-8 text-slate-600">
                      {business.info[lang]}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {business.highlights[lang].map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white bg-white px-4 py-3 text-sm font-medium text-slate-700"
                        >
                          ✓ {point}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={business.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-2xl bg-sky-700 px-5 py-3 font-semibold text-white transition hover:bg-sky-800"
                      >
                        {business.ctaLabel[lang]}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cyan-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en" ? "Page Highlights" : "Σημεία που Ξεχωρίζουν"}
              </p>

              <div className="mt-5 grid gap-3">
                {landing.highlights[lang].map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    ⚓ {highlight}
                  </div>
                ))}
              </div>
            </article>

            {businesses.map((business) => (
              <article
                key={`${business.slug}-aside`}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {lang === "en" ? "Perfect For" : "Ιδανικό Για"}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  {business.name}
                </h3>

                <div className="mt-5 grid gap-3">
                  {business.perfectFor[lang].map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      ✨ {point}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  {business.overview[lang]}
                </p>
              </article>
            ))}

            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en" ? "Travel Note" : "Travel Note"}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {lang === "en"
                  ? "This page is focused on local businesses and real visitor-facing experiences in Kefalonia."
                  : "Αυτή η σελίδα εστιάζει σε τοπικές επιχειρήσεις και πραγματικές εμπειρίες για επισκέπτες στην Κεφαλονιά."}
              </p>

              <div className="mt-8 space-y-3">
                <Link
                  href="/#tours"
                  className="block rounded-2xl bg-sky-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-sky-800"
                >
                  {lang === "en" ? "Explore more tours" : "Δες περισσότερες εκδρομές"}
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
              ? `${siteBrand} — local experiences, destinations and travel inspiration across Greece.`
              : `${siteBrand} — τοπικές εμπειρίες, προορισμοί και ταξιδιωτική έμπνευση σε όλη την Ελλάδα.`}
          </div>

          <div className="flex gap-5">
            <Link href="/" className="hover:text-slate-800">
              {lang === "en" ? "Home" : "Αρχική"}
            </Link>
            <Link href="/#tours" className="hover:text-slate-800">
              {lang === "en" ? "Tours" : "Εκδρομές"}
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