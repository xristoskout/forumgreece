"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Lang,
  destinations,
  siteBrand,
  siteBrandLine,
} from "../../../lib/content";

export default function DestinationGuidePage() {
  const [lang, setLang] = useState<Lang>("en");
  const params = useParams<{ slug: string }>();
  const item = destinations.find((entry) => entry.slug === params.slug);

  const t = {
    navHome: { en: "Home", el: "Αρχική" },
    navSection: { en: "Destinations", el: "Προορισμοί" },
    eyebrow: { en: "Destination Guide", el: "Οδηγός Προορισμού" },
    overview: { en: "Overview", el: "Επισκόπηση" },
    highlights: { en: "Highlights", el: "Σημεία ενδιαφέροντος" },
    back: { en: "Back to homepage", el: "Επιστροφή στην αρχική" },
    notFound: { en: "Destination not found.", el: "Ο προορισμός δεν βρέθηκε." },
  };

  if (!item) {
    return <div className="p-10">{t.notFound[lang]}</div>;
  }

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <section className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <Image
              src="/images/logo/gogreecenow-logo.png"
              alt="GoGreeceNow logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
            <div>
              <div className="text-2xl font-bold tracking-tight text-sky-900 transition group-hover:text-sky-700">
                {siteBrand}
              </div>
              <div className="text-sm text-slate-500">{siteBrandLine[lang]}</div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-sky-700">
              {t.navHome[lang]}
            </Link>
            <span className="text-sm font-medium text-sky-700">{t.navSection[lang]}</span>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  lang === "en" ? "bg-sky-600 text-white" : "text-slate-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("el")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  lang === "el" ? "bg-sky-600 text-white" : "text-slate-600"
                }`}
              >
                GR
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          {t.eyebrow[lang]}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          {item.name}
        </h1>
        <p className="mt-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
          {item.region[lang]}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="overflow-hidden rounded-[32px] shadow-xl">
          <div
            className="h-[380px] bg-cover bg-center"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">{t.overview[lang]}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {item.overview[lang]}
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">{t.highlights[lang]}</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            {item.highlights[lang].map((point) => (
              <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/"
          className="inline-flex rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          {t.back[lang]}
        </Link>
      </section>
    </main>
  );
}