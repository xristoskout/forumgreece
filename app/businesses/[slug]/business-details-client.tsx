"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import BusinessGallery from "./business-gallery";
import type { Lang } from "../../../lib/content";
import type { ExperienceBusiness } from "../../../lib/experiences";

type BusinessDetailsClientProps = {
  business: ExperienceBusiness;
};

type ListCardProps = {
  title: string;
  items?: string[];
  icon?: string;
};

function ListCard({ title, items, icon = "•" }: ListCardProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-100 font-bold text-sky-700">
          {icon}
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
      </div>

      <div className="mt-6 grid gap-3">
        {items.map((item, index) => (
          <div
            key={`${title}-${item}-${index}`}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "") || null;
    }

    const fromQuery = parsed.searchParams.get("v");
    if (fromQuery) return fromQuery;

    const parts = parsed.pathname.split("/").filter(Boolean);
    const embedIndex = parts.findIndex(
      (part) => part === "embed" || part === "shorts"
    );

    if (embedIndex !== -1 && parts[embedIndex + 1]) {
      return parts[embedIndex + 1];
    }

    return null;
  } catch {
    return null;
  }
}

export default function BusinessDetailsClient({
  business,
}: BusinessDetailsClientProps) {
  const [lang, setLang] = useState<Lang>("en");

  const galleryImages = useMemo(() => {
    if (business.galleryCount && business.galleryCount > 0) {
      return Array.from(
        { length: business.galleryCount },
        (_, index) => `/images/businesses/${business.slug}/${index + 1}.jpg`
      );
    }

    return [business.image];
  }, [business.galleryCount, business.image, business.slug]);

  const hasContact = Boolean(
    business.phone || business.email || business.youtube
  );

  const videoId = business.youtube ? getYouTubeVideoId(business.youtube) : null;
  const videoEmbedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}`
    : null;

  const mapSrc = business.mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(
        business.mapQuery
      )}&z=14&output=embed`
    : null;

  const mapLink = business.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        business.mapQuery
      )}`
    : null;

  const t = {
    about: lang === "en" ? "Description" : "Περιγραφή",
    services: lang === "en" ? "Services" : "Υπηρεσίες",
    routes: lang === "en" ? "Routes" : "Διαδρομές",
    highlights: lang === "en" ? "Highlights" : "Σημεία που ξεχωρίζουν",
    perfectFor: lang === "en" ? "Perfect for" : "Ιδανικό για",
    story: lang === "en" ? "Story & Identity" : "Ιστορία & ταυτότητα",
    practicalInfo:
      lang === "en" ? "Useful Notes & Rules" : "Κανόνες & χρήσιμα",
    contact: lang === "en" ? "Contact" : "Επικοινωνία",
    video: lang === "en" ? "Video Preview" : "Προεπισκόπηση βίντεο",
    location: lang === "en" ? "Location" : "Τοποθεσία",
    openMap: lang === "en" ? "Open map" : "Άνοιγμα χάρτη",
    backToTours: lang === "en" ? "Back to tours" : "Επιστροφή στις εκδρομές",
    gallery: lang === "en" ? "Gallery" : "Φωτογραφίες",
    quickAccess: lang === "en" ? "Quick Access" : "Γρήγορη πρόσβαση",
    youtube: lang === "en" ? "Open on YouTube" : "Άνοιγμα στο YouTube",
    premiumNote:
      lang === "en"
        ? "Boat days, private cruising and hidden beaches — organized in a clean and practical way."
        : "Boat days, ιδιωτικές κρουαζιέρες και κρυφές παραλίες — οργανωμένα με καθαρό και πρακτικό τρόπο.",
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#eef7ff_100%)] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={`/tours/${business.landingSlug}`}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-800"
          >
            {t.backToTours}
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "en" ? "bg-sky-600 text-white" : "text-slate-600"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLang("el")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "el" ? "bg-sky-600 text-white" : "text-slate-600"
              }`}
            >
              GR
            </button>
          </div>
        </div>

        <section className="relative mt-6 overflow-hidden rounded-[36px] bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-800 text-white shadow-[0_20px_70px_rgba(2,132,199,0.22)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />

          <div className="relative grid gap-8 px-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-white/12 px-4 py-1.5 text-sm font-semibold backdrop-blur">
                  {business.category[lang]}
                </span>

                {business.badge && (
                  <span className="inline-flex rounded-full bg-amber-300/20 px-4 py-1.5 text-sm font-semibold text-amber-100 backdrop-blur">
                    {business.badge}
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
                {business.name}
              </h1>

              <p className="mt-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur">
                {business.place}
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/90">
                {business.info[lang]}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {business.highlights[lang].map((item, index) => (
                  <span
                    key={`hero-highlight-${item}-${index}`}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/80">
                {t.premiumNote}
              </p>
            </div>

            <div className="rounded-[30px] border border-white/12 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                {t.quickAccess}
              </p>

              <div className="mt-5 grid gap-3">
                {business.phone && (
                  <a
                    href={`tel:${business.phone}`}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    {business.phone}
                  </a>
                )}

                {business.email && (
                  <a
                    href={`mailto:${business.email}`}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    {business.email}
                  </a>
                )}

                {business.youtube && (
                  <a
                    href={business.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    {t.youtube}
                  </a>
                )}

                {mapLink && (
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-sky-900 transition hover:bg-sky-50"
                  >
                    {t.openMap}
                  </a>
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/8 p-5">
                <p className="text-sm font-semibold text-cyan-100">
                  {t.perfectFor}
                </p>

                <div className="mt-4 grid gap-3">
                  {business.perfectFor[lang].map((item, index) => (
                    <div
                      key={`perfect-for-${item}-${index}`}
                      className="rounded-2xl bg-white/10 px-4 py-3 text-sm leading-6 text-white/90"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {t.gallery}
            </h2>
          </div>

          <BusinessGallery
            name={business.name}
            initialImage={business.image}
            images={galleryImages}
          />
        </section>

        <section className="mt-10 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-6">
            {business.description?.[lang] && (
              <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-100 font-bold text-sky-700">
                    ≈
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {t.about}
                  </h2>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-700">
                  {business.description[lang]}
                </p>
              </section>
            )}

            <ListCard
              title={t.services}
              items={business.services?.[lang]}
              icon="⚓"
            />

            {business.story?.[lang] && (
              <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-100 font-bold text-sky-700">
                    ✦
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {t.story}
                  </h2>
                </div>

                <p className="mt-6 text-base leading-8 text-slate-700">
                  {business.story[lang]}
                </p>
              </section>
            )}

            <ListCard
              title={t.practicalInfo}
              items={business.practicalInfo?.[lang]}
              icon="i"
            />
          </div>

          <aside className="space-y-6">
            <ListCard title={t.routes} items={business.routes?.[lang]} icon="⌘" />

            <ListCard
              title={t.highlights}
              items={business.highlights[lang]}
              icon="★"
            />

            {mapSrc && (
              <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <div className="border-b border-slate-200 px-8 py-6">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {t.location}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {business.place}
                  </p>
                </div>

                <div className="relative h-[280px] w-full bg-slate-100">
                  <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                    title={`${business.name} map`}
                  />
                </div>

                {mapLink && (
                  <div className="px-8 py-6">
                    <a
                      href={mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-2xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                    >
                      {t.openMap}
                    </a>
                  </div>
                )}
              </section>
            )}

            {videoEmbedUrl && (
              <section className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <div className="border-b border-slate-200 px-8 py-6">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    {t.video}
                  </h2>
                </div>

                <div className="aspect-video w-full bg-slate-100">
                  <iframe
                    src={videoEmbedUrl}
                    title={`${business.name} video`}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {business.youtube && (
                  <div className="px-8 py-6">
                    <a
                      href={business.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                    >
                      {t.youtube}
                    </a>
                  </div>
                )}
              </section>
            )}

            {hasContact && (
              <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {t.contact}
                </h2>

                <div className="mt-6 grid gap-3">
                  {business.phone && (
                    <a
                      href={`tel:${business.phone}`}
                      className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      {business.phone}
                    </a>
                  )}

                  {business.email && (
                    <a
                      href={`mailto:${business.email}`}
                      className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      {business.email}
                    </a>
                  )}

                  {business.youtube && (
                    <a
                      href={business.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      {t.youtube}
                    </a>
                  )}
                </div>
              </section>
            )}
          </aside>
        </section>
      </section>
    </main>
  );
}