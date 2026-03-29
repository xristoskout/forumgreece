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
import { destinationDetails } from "../../../lib/destination-details";
import { destinationSections } from "../../../lib/destination-sections";
import {
  experienceBusinesses,
  experienceLandings,
} from "../../../lib/experiences";

export default function DestinationGuidePage() {
  const [lang, setLang] = useState<Lang>("en");
  const params = useParams<{ slug: string }>();
  const item = destinations.find((entry) => entry.slug === params.slug);
  const details = params?.slug ? destinationDetails[params.slug] : undefined;
  const sections = params?.slug ? destinationSections[params.slug] ?? [] : [];
  const experienceLandingByDestination: Record<string, string> = {
  kefalonia: "kefalonia-tours",
  lesvos: "lesvos-tours",
  crete: "crete-tours",
};

const experienceHref =
  item && experienceLandingByDestination[item.slug]
    ? `/tours/${experienceLandingByDestination[item.slug]}`
    : null;
  const experienceLanding =
  item && experienceLandingByDestination[item.slug]
    ? experienceLandings.find(
        (entry) => entry.slug === experienceLandingByDestination[item.slug]
      )
    : undefined;

const previewBusinesses =
  item && experienceLandingByDestination[item.slug]
    ? experienceBusinesses.filter(
        (entry) => entry.landingSlug === experienceLandingByDestination[item.slug]
      ).slice(0, 2)
    : [];  

  const t = {
    navHome: { en: "Home", el: "Αρχική" },
    navSection: { en: "Destinations", el: "Προορισμοί" },
    eyebrow: { en: "Destination Guide", el: "Οδηγός Προορισμού" },
    overview: { en: "Overview", el: "Επισκόπηση" },
    highlights: { en: "Highlights", el: "Σημεία ενδιαφέροντος" },
    includes: { en: "What This Page Includes", el: "Τι Περιλαμβάνει Αυτή η Σελίδα" },
    perfectFor: { en: "Perfect For", el: "Ιδανικό Για" },
    back: { en: "Back to homepage", el: "Επιστροφή στην αρχική" },
    notFound: { en: "Destination not found.", el: "Ο προορισμός δεν βρέθηκε." },
    localExperiences: { en: "Local Experiences", el: "Τοπικές Εμπειρίες" },
    localExperiencesText: {
      en: "See selected businesses, local experiences and practical ideas for this destination.",
      el: "Δες επιλεγμένες επιχειρήσεις, τοπικές εμπειρίες και πρακτικές ιδέες για αυτόν τον προορισμό.",
    },
    localExperiencesCta: {
      en: "View local businesses & experiences",
      el: "Δες τοπικές επιχειρήσεις & εμπειρίες",
    },
  };

  if (!item) {
    return <div className="p-10">{t.notFound[lang]}</div>;
  }

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <section className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-0 py-3 sm:gap-6 sm:px-6 sm:py-5">
          <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo/gogreecenow-logo.png"
              alt="GoGreeceNow logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
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
            {details ? details.overview[lang] : item.overview[lang]}
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

      {details && (
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-4 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">{t.includes[lang]}</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {details.pageIncludes[lang].map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                  ✓ {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">{t.perfectFor[lang]}</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {details.perfectFor[lang].map((point) => (
                <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                  ✨ {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {sections.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <article
                key={section.title.en}
                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {item.name}
                </p>
                <h2 className="mt-3 text-2xl font-bold">{section.title[lang]}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {section.text[lang]}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
      {experienceHref && (
  <section className="mx-auto max-w-7xl px-6 py-4">
    <div className="rounded-[32px] border border-sky-100 bg-gradient-to-r from-sky-50 to-cyan-50 p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
        {t.localExperiences[lang]}
      </p>
      {experienceLanding && (
  <div className="mt-6 grid gap-3 sm:grid-cols-2">
    {experienceLanding.highlights[lang].map((point) => (
      <div
        key={point}
        className="rounded-2xl border border-white bg-white/80 px-4 py-3 text-sm font-medium text-slate-700"
      >
        ✨ {point}
      </div>
    ))}
  </div>
)}

{previewBusinesses.length > 0 && (
  <div className="mt-6 grid gap-4">
    {previewBusinesses.map((business) => (
      <div
        key={business.slug}
        className="rounded-[24px] border border-white bg-white p-5 shadow-sm"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              {business.category[lang]}
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {business.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{business.place}</p>
          </div>

          {business.badge && (
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
              {business.badge}
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {business.info[lang]}
        </p>
      </div>
    ))}
  </div>
)}

      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
        {lang === "en"
          ? `What to do in ${item.name}`
          : "Τι μπορείς να κάνεις σε αυτόν τον προορισμό"}
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
        {t.localExperiencesText[lang]}
      </p>

      <div className="mt-6">
        <Link
          href={experienceHref}
          className="inline-flex rounded-2xl bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
        >
          {t.localExperiencesCta[lang]}
        </Link>
      </div>
    </div>
  </section>
)}
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