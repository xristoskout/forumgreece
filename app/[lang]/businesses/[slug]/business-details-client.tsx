"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BusinessGallery from "./business-gallery";
import type { Lang } from "../../../../lib/content";
import type { ExperienceBusiness } from "../../../../lib/experiences";

type BusinessDetailsClientProps = {
  business: ExperienceBusiness;
  lang: Lang;
};

type ListCardProps = {
  title: string;
  items?: string[];
  icon?: string;
};

function ListCard({ title, items, icon = "•" }: ListCardProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 font-bold text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
          {title}
        </h2>
      </div>

      <div className="mt-8 grid gap-3">
        {items.map((item, index) => (
          <div
            key={`${title}-${item}-${index}`}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm leading-relaxed text-slate-600 transition-all duration-300"
          >
            <span className="text-indigo-700 mt-0.5">•</span>
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
  lang,
}: BusinessDetailsClientProps) {
  const pathname = usePathname();
  const router = useRouter();

  function stripLocale(path: string) {
    const stripped = path.replace(/^\/(en|el)(?=\/|$)/, "");
    return stripped || "/";
  }

  function withLang(path: string, locale: Lang = lang) {
    if (/^https?:\/\//i.test(path)) return path;

    const normalized = path.startsWith("/") ? path : `/${path}`;
    const cleanPath = stripLocale(normalized);

    if (cleanPath === "/") {
      return `/${locale}`;
    }

    return `/${locale}${cleanPath}`;
  }

  function switchLanguage(nextLang: Lang) {
    router.push(withLang(pathname, nextLang));
  }

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
    business.phone || business.email || business.youtube || business.website
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
    website: lang === "en" ? "Website" : "Ιστοσελίδα",
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
    <main className="min-h-screen bg-transparent text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={withLang(`/tours/${business.landingSlug}`)}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-md px-6 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-indigo-400 hover:text-indigo-800 shadow-md"
          >
            ← {t.backToTours}
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md p-1 shadow-md">
            <button
              type="button"
              onClick={() => switchLanguage("en")}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                lang === "en" ? "bg-indigo-600 text-slate-900" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => switchLanguage("el")}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                lang === "el" ? "bg-indigo-600 text-slate-900" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              GR
            </button>
          </div>
        </div>

        <section className="relative mt-8 overflow-hidden rounded-[3rem] text-slate-900 shadow-xl border border-slate-200 group">
          <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110">
            <Image
              src={business.image}
              alt={business.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-slate-50/20 opacity-90" />

          <div className="relative grid gap-8 px-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-800 backdrop-blur-md">
                  {business.category[lang]}
                </span>

                {business.badge && (
                  <span className="inline-flex rounded-full bg-amber-300/20 px-4 py-1.5 text-sm font-semibold text-amber-100 backdrop-blur">
                    {business.badge}
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl animate-float-playful transition-all duration-300 hover:scale-105 hover:rotate-1 hover:text-indigo-50 cursor-default">
                {business.name}
              </h1>

              <p className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                {business.place}
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 drop-shadow-md">
                {business.info[lang]}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {business.highlights[lang].map((item, index) => (
                  <span
                    key={`hero-highlight-${item}-${index}`}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-200 drop-shadow">
                {t.premiumNote}
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white/90 p-8 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-indigo-500/10">
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-700">
                {t.quickAccess}
              </p>

              <div className="mt-5 grid gap-3">
                {business.phone && (
                  <a
                    href={`tel:${business.phone}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/15"
                  >
                    {business.phone}
                  </a>
                )}

                {business.email && (
                  <a
                    href={`mailto:${business.email}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/15"
                  >
                    {business.email}
                  </a>
                )}

                {business.website && (
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/15"
                  >
                    {t.website}
                  </a>
                )}

                {business.youtube && (
                  <a
                    href={business.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/15"
                  >
                    {t.youtube}
                  </a>
                )}

                {mapLink && (
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white backdrop-blur-md px-4 py-3 text-center text-sm font-semibold text-indigo-800 transition hover:bg-sky-50"
                  >
                    {t.openMap}
                  </a>
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white/8 p-5">
                <p className="text-sm font-semibold text-cyan-100">
                  {t.perfectFor}
                </p>

                <div className="mt-4 grid gap-3">
                  {business.perfectFor[lang].map((item, index) => (
                    <div
                      key={`perfect-for-${item}-${index}`}
                      className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900/90"
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
              <section className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 font-bold text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    ≈
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                    {t.about}
                  </h2>
                </div>

                <p className="mt-8 text-lg leading-relaxed text-slate-600">
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
              <section className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 font-bold text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    ✦
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                    {t.story}
                  </h2>
                </div>

                <p className="mt-8 text-lg leading-relaxed text-slate-600">
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
              <section className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <div className="border-b border-slate-200 p-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                    {t.location}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
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
                    className="absolute inset-0 h-full w-full border-0 filter opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
                    title={`${business.name} map`}
                  />
                </div>

                {mapLink && (
                  <div className="p-8">
                    <a
                      href={mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-xl bg-indigo-600 border-none px-6 py-4 text-sm font-semibold text-slate-900 transition-all shadow-md hover:bg-indigo-500 hover:scale-105"
                    >
                      {t.openMap}
                    </a>
                  </div>
                )}
              </section>
            )}

            {videoEmbedUrl && (
              <section className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <div className="border-b border-slate-200 p-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                    {t.video}
                  </h2>
                </div>

                <div className="aspect-video w-full bg-[#f4f7fb]">
                  <iframe
                    src={videoEmbedUrl}
                    title={`${business.name} video`}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {business.youtube && (
                  <div className="p-8">
                    <a
                      href={business.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-xl border border-slate-200 bg-white backdrop-blur-md px-6 py-4 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-50"
                    >
                      {t.youtube}
                    </a>
                  </div>
                )}
              </section>
            )}

            {hasContact && (
              <section className="group rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                  {t.contact}
                </h2>

                <div className="mt-8 grid gap-4">
                  {business.phone && (
                    <a
                      href={`tel:${business.phone}`}
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {business.phone}
                    </a>
                  )}

                  {business.email && (
                    <a
                      href={`mailto:${business.email}`}
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {business.email}
                    </a>
                  )}

                  {business.website && (
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {t.website}
                    </a>
                  )}

                  {business.youtube && (
                    <a
                      href={business.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
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