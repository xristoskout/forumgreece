"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { hotels, type Lang, siteBrand, siteBrandLine } from "../../../../lib/content";
import { experienceBusinesses } from "../../../../lib/experiences";
import BusinessGallery from "../../businesses/[slug]/business-gallery";
import BusinessCard from "../../../../components/BusinessCard";
import SiteHeader from "../../../../components/site-header";

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

export default function HotelDetailsClient() {
  const params = useParams<{ lang: string; slug: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const lang: Lang = params?.lang === "el" ? "el" : "en";
  const slug = params?.slug;

  const item = hotels.find((entry) => entry.slug === slug);

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

  const t = {
    navHome: { en: "Home", el: "Αρχική" },
    navSection: { en: "Hotels", el: "Ξενοδοχεία" },
    eyebrow: { en: "Accommodation", el: "Διαμονή" },
    overview: { en: "Overview", el: "Επισκόπηση" },
    features: { en: "Key features", el: "Βασικά χαρακτηριστικά" },
    location: { en: "Location", el: "Τοποθεσία" },
    back: { en: "Back to homepage", el: "Επιστροφή στην αρχική" },
    notFound: {
      en: "Hotel not found.",
      el: "Το ξενοδοχείο δεν βρέθηκε.",
    },
    about: { en: "Description", el: "Περιγραφή" },
    services: { en: "Services", el: "Παροχές" },
    practicalInfo: { en: "Useful Notes", el: "Χρήσιμες πληροφορίες" },
    contact: { en: "Contact", el: "Επικοινωνία" },
    website: { en: "Website", el: "Ιστοσελίδα" },
    video: { en: "Video Preview", el: "Προεπισκόπηση βίντεο" },
    openMap: { en: "Open map", el: "Άνοιγμα χάρτη" },
    gallery: { en: "Gallery", el: "Φωτογραφίες" },
    quickAccess: { en: "Quick Access", el: "Γρήγορη πρόσβαση" },
    youtube: { en: "Open on YouTube", el: "Άνοιγμα στο YouTube" },
    perfectFor: { en: "Perfect for", el: "Ιδανικό για" },
    premiumNote: {
      en: "Relaxing stays, beautiful views and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτική διαμονή, όμορφη θέα και αυθεντική φιλοξενία — οργανωμένα με καθαρό και πρακτικό τρόπο."
    }
  };

  if (!item) {
    return <div className="p-10">{t.notFound[lang]}</div>;
  }

  const galleryImages = item.galleryImages || [item.image];
  const hasContact = Boolean(item.phone || item.email || item.youtube || item.website);
  const videoId = item.youtube ? getYouTubeVideoId(item.youtube) : null;
  const videoEmbedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
  
  const mapSrc = item.mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(item.mapQuery)}&z=14&output=embed`
    : null;

  const mapLink = item.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`
    : null;

  return (
    <main className="min-h-screen bg-transparent text-slate-900 pt-20">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={withLang("/")}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-md px-6 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-indigo-400 hover:text-indigo-800 shadow-md"
          >
            ← {t.back[lang]}
          </Link>
        </div>

        <section className="relative mt-6 overflow-hidden rounded-[2.5rem] text-slate-900 shadow-xl border border-slate-200 group">
          <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110">
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-90" />

          <div className="relative px-6 py-12 lg:py-16 lg:px-10 max-w-4xl">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-800 backdrop-blur-md">
                  {item.badge || "Featured"}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl animate-float-playful transition-all duration-300 hover:scale-105 hover:rotate-1 hover:text-indigo-50 cursor-default">
                {item.name}
              </h1>

              <p className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                {item.place}
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 drop-shadow-md">
                {item.info[lang]}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {item.features[lang].slice(0, 4).map((feat, index) => (
                  <span
                    key={`hero-highlight-${feat}-${index}`}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-200 drop-shadow">
                {t.premiumNote[lang]}
              </p>
            </div>
          </div>
        </section>

        {(slug === "santorini" || slug === "corfu" || slug === "lesvos") && (
          <section className="mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl bg-white p-3">
             <iframe 
              id={`stay22-widget-top-${slug}`}
              width="100%" 
              height="600" 
              src={
                slug === "santorini" ? "https://stay22.com/embed/69eb77823fa26d2af687fe19" :
                slug === "corfu" ? "https://stay22.com/embed/69eb79623fa26d2af68804f7" :
                "https://stay22.com/embed/69eb79de3fa26d2af68806f8"
              }
              frameBorder="0"
              title={`Stay22 ${slug} Hotels Map`}
              className="rounded-[2.2rem]"
            ></iframe>
          </section>
        )}

        {galleryImages.length > 1 && (
          <section className="mt-16">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {t.gallery[lang]}
              </h2>
            </div>

            <BusinessGallery
              name={item.name}
              initialImage={item.image}
              images={galleryImages}
            />
          </section>
        )}

        <div className="mt-16 grid gap-10 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-8">
            <section className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 font-bold text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                  ≈
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                  {t.about[lang]}
                </h2>
              </div>

              <p className="mt-8 text-lg leading-relaxed text-slate-600 whitespace-pre-line">
                {item.description ? item.description[lang] : item.overview[lang]}
              </p>
            </section>
            
            {item.sections && item.sections.length > 0 && (
              <div className="space-y-10 mt-10">
                {item.sections.map((section, idx) => (
                  <section 
                    key={`hotel-section-${idx}`}
                    className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                  >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                      {section.title[lang]}
                    </h2>
                    <div className="mt-8 text-lg leading-relaxed text-slate-600 whitespace-pre-line">
                      {section.content[lang]}
                    </div>
                  </section>
                ))}
              </div>
            )}


            <ListCard
              title={t.services[lang]}
              items={item.services?.[lang]}
              icon="⚓"
            />

            <ListCard
              title={t.practicalInfo[lang]}
              items={item.practicalInfo?.[lang]}
              icon="i"
            />
          </div>

          <aside className="space-y-8">
            <ListCard
              title={t.features[lang]}
              items={item.features[lang]}
              icon="★"
            />

            {(mapSrc || item.mapIframe) && (
              <section className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <div className="border-b border-slate-200 p-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                    {t.location[lang]}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.place}
                  </p>
                </div>

                <div className="relative h-[280px] w-full bg-slate-100">
                  {item.mapIframe ? (
                    <div 
                      className="absolute inset-0 h-full w-full border-0 filter opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500 [&>iframe]:w-full [&>iframe]:h-full"
                      dangerouslySetInnerHTML={{ __html: item.mapIframe }}
                    />
                  ) : mapSrc ? (
                    <iframe
                      src={mapSrc}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0 filter opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
                      title={`${item.name} map`}
                    />
                  ) : null}
                </div>
              </section>
            )}

            {hasContact && (
              <section className="group rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                  {t.contact[lang]}
                </h2>

                <div className="mt-8 grid gap-4">
                  {item.phone && (
                    <a
                      href={`tel:${item.phone}`}
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {item.phone}
                    </a>
                  )}

                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {item.email}
                    </a>
                  )}

                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {t.website[lang]}
                    </a>
                  )}
                </div>
              </section>
            )}
          </aside>
        </div>

        {item.featuredBusinesses && item.featuredBusinesses.length > 0 && (
          <section className="mt-20 border-t border-slate-200 pt-16">
            <div className="mb-10 text-center flex flex-col items-center">
              <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-800">
                {lang === "en" ? "Featured Suggestions" : "Προτεινόμενες Επιλογές"}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                {lang === "en" ? "Top Businesses & Local Stays" : "Κορυφαίες Επιχειρήσεις & Διαμονή"}
              </h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {item.featuredBusinesses
                .map((bSlug) => experienceBusinesses.find((b) => b.slug === bSlug))
                .filter(Boolean)
                .map((business) => (
                  <Link href={withLang(`/businesses/${business!.slug}`)} key={business!.slug} className="block h-full transition-transform hover:-translate-y-1">
                    <BusinessCard
                      name={business!.name}
                      category={business!.category[lang]}
                      imageUrl={business!.image}
                      description={business!.info[lang]}
                    />
                  </Link>
                ))}
            </div>
          </section>
        )}
      </div>

      <footer className="border-t border-slate-200 bg-white backdrop-blur-md mt-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            {lang === "en"
              ? `${siteBrand} — destinations, travel inspiration and local experiences across Greece.`
              : `${siteBrand} — προορισμοί, ταξιδιωτική έμπνευση και τοπικές εμπειρίες σε όλη την Ελλάδα.`}
          </div>

          <div className="flex gap-5">
            <Link href={withLang("/")} className="hover:text-slate-900">
              {lang === "en" ? "Home" : "Αρχική"}
            </Link>

            <Link
              href={withLang("/#hotels")}
              className="hover:text-slate-900"
            >
              {lang === "en" ? "Hotels" : "Ξενοδοχεία"}
            </Link>

            <Link
              href={withLang("/travel-to-greece")}
              className="hover:text-slate-900"
            >
              {lang === "en" ? "Travel to Greece" : "Ταξίδι στην Ελλάδα"}
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-2 pt-5 pb-6 flex flex-col items-center gap-2">
          <a 
            href="https://www.focusai.gr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 text-sm font-bold tracking-widest transition-all"
          >
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-500">
              {lang === "en" ? "Website Design 2026 by Focus AI" : "Κατασκευή Ιστοσελίδας 2026 By Focus AI"}
            </span>
            <span className="text-indigo-400 group-hover:text-purple-500 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em]">Premium Digital Experiences</p>
        </div>
      </footer>
    </main>
  );
}
