"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import { Lang, withLang } from "../../lib/locale";
import { categories } from "../../lib/site-config";
import { destinations } from "../../lib/destinations-data";
import { food } from "../../lib/food-data";
import { hotels } from "../../lib/hotels-data";
import { travelInfoGuides } from "../../lib/travel-info-data";
import { tours } from "../../lib/tours-data";
import type { HomeContent } from "../../lib/home-translations";

type HomePageClientProps = {
  lang: Lang;
  copy: HomeContent;
};

export default function HomePageClient({
  lang,
  copy,
}: HomePageClientProps) {
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

  function isExternalUrl(url: string) {
    return /^https?:\/\//i.test(url);
  }

  const quickFacts = [
    {
      value: "50+",
      label: { en: "stays", el: "διαμονές" },
    },
    {
      value: "50+",
      label: { en: "destinations", el: "προορισμοί" },
    },
    {
      value: lang === "en" ? "Free" : "Δωρεάν",
      label: { en: "planning", el: "σχεδιασμός" },
    },
    {
      value: lang === "en" ? "Trusted" : "Αξιόπιστο",
      label: { en: "by travelers", el: "από ταξιδιώτες" },
    },
  ];

  const heroJumpLinks = [
    {
      label: { en: "Destination guides", el: "Οδηγοί προορισμών" },
      href: withLang("/destinations"),
      kind: "route" as const,
    },
    {
      label: { en: "Greece Islands Map", el: "Χάρτης Νησιών" },
      href: withLang("/travel-info/greece-islands-map-guide"),
      kind: "route" as const,
    },
    {
      label: { en: "How to get to Greece", el: "Πώς να έρθεις στην Ελλάδα" },
      href: withLang("/travel-info/how-to-get-to-greece"),
      kind: "route" as const,
    },
    {
      label: { en: "Hotels in Greece", el: "Ξενοδοχεία στην Ελλάδα" },
      href: withLang("/hotels"),
      kind: "route" as const,
    },
    {
      label: { en: "Tours in Greece", el: "Εκδρομές στην Ελλάδα" },
      href: withLang("/tours/all"),
      kind: "route" as const,
    },
    {
      label: {
        en: "Greek food guides",
        el: "Οδηγοί ελληνικής γαστρονομίας",
      },
      href: "#food",
      kind: "anchor" as const,
    },
  ];

  const startCards = [
    {
      icon: "🏝️",
      title: { en: "Choose a destination", el: "Διάλεξε προορισμό" },
      description: {
        en: "Start with islands, cities and holiday spots across Greece.",
        el: "Ξεκίνα με νησιά, πόλεις και ταξιδιωτικούς προορισμούς σε όλη την Ελλάδα.",
      },
      href: withLang("/destinations"),
      kind: "route" as const,
      cta: {
        en: "Browse destination guides →",
        el: "Δες οδηγούς προορισμών →",
      },
    },
    {
      icon: "🧭",
      title: { en: "Solve the practical stuff", el: "Λύσε τα πρακτικά" },
      description: {
        en: "Find useful guidance for planning, transport and timing.",
        el: "Βρες χρήσιμες πληροφορίες για οργάνωση, μετακίνηση και σωστό timing.",
      },
      href: withLang("/travel-info"),
      kind: "route" as const,
      cta: {
        en: "Read Greece travel info →",
        el: "Δες ταξιδιωτικές πληροφορίες →",
      },
    },
    {
      icon: "🏨",
      title: { en: "Browse stays", el: "Δες διαμονή" },
      description: {
        en: "Move from inspiration to actual stay options and hotel pages.",
        el: "Πέρασε από την έμπνευση σε πραγματικές επιλογές διαμονής και σελίδες ξενοδοχείων.",
      },
      href: withLang("/hotels"),
      kind: "route" as const,
      cta: {
        en: "Browse Greece stays →",
        el: "Δες επιλογές διαμονής →",
      },
    },
    {
      icon: "⚓",
      title: {
        en: "Add tours and local flavor",
        el: "Πρόσθεσε εκδρομές και γεύσεις",
      },
      description: {
        en: "Complete the trip with experiences, tours and food ideas.",
        el: "Ολοκλήρωσε το ταξίδι με εμπειρίες, εκδρομές και τοπικές γεύσεις.",
      },
      href: withLang("/tours/all"),
      kind: "route" as const,
      cta: {
        en: "Explore tours and food guides →",
        el: "Δες εκδρομές και food guides →",
      },
    },
  ];

  const featuredCollections = [
    {
      title: { en: "Island Escapes", el: "Νησιωτικές Αποδράσεις" },
      description: {
        en: "Browse all destination guides — islands, cities and coastal escapes across Greece. Find the perfect place for your trip.",
        el: "Δες όλους τους ταξιδιωτικούς οδηγούς — νησιά, πόλεις και παραθαλάσσιες αποδράσεις σε όλη την Ελλάδα. Βρες τον ιδανικό προορισμό σου.",
      },
      href: withLang("/destinations"),
      image: destinations[0]?.image || "/images/hero-greece.webp",
      eyebrow: {
        en: "Featured Collection",
        el: "Προτεινόμενη Συλλογή",
      },
      tags: {
        en: ["Destinations", "Greek Islands", "Travel Guides"],
        el: ["Προορισμοί", "Ελληνικά Νησιά", "Ταξιδιωτικοί Οδηγοί"],
      },
      cta: {
        en: "Browse all destination guides →",
        el: "Δες όλους τους οδηγούς προορισμών →",
      },
    },
    {
      title: {
        en: "Plan Before You Go",
        el: "Οργάνωσε πριν ταξιδέψεις",
      },
      description: {
        en: "Find practical travel information about transport, timing, booking and moving around Greece.",
        el: "Βρες πρακτικές ταξιδιωτικές πληροφορίες για μετακίνηση, εποχές, κρατήσεις και οργάνωση ταξιδιού στην Ελλάδα.",
      },
      href: withLang("/collections/greece-travel-planning"),
      image: "/images/before-trip.webp",
      eyebrow: { en: "Practical Greece", el: "Χρήσιμη Ελλάδα" },
      tags: {
        en: ["Transport", "Travel Tips", "Planning"],
        el: ["Μετακίνηση", "Travel Tips", "Οργάνωση"],
      },
      cta: {
        en: "Read Greece travel planning hub →",
        el: "Δες το hub οργάνωσης ταξιδιού →",
      },
    },
    {
      title: {
        en: "Sea, Tours & Experiences",
        el: "Θάλασσα, Εκδρομές & Εμπειρίες",
      },
      description: {
        en: "Explore day trips, boat tours and experience-led ideas across the Greek islands and mainland.",
        el: "Ανακάλυψε ημερήσιες εκδρομές, boat tours και εμπειρίες στα ελληνικά νησιά και στην ηπειρωτική Ελλάδα.",
      },
      href: withLang("/tours/all"),
      image: tours[0]?.image || "/images/hero-greece.webp",
      eyebrow: { en: "Curated Ideas", el: "Επιλεγμένες Ιδέες" },
      tags: {
        en: ["Boat Tours", "Experiences", "Day Trips"],
        el: ["Boat Tours", "Εμπειρίες", "Ημερήσιες Εκδρομές"],
      },
      cta: {
        en: "Explore Greece tours hub →",
        el: "Δες το hub εκδρομών στην Ελλάδα →",
      },
    },
    {
      title: {
        en: "Taste Local Greece",
        el: "Γεύσεις της Τοπικής Ελλάδας",
      },
      description: {
        en: "Discover regional dishes, local drinks and destination-based food ideas from across Greece.",
        el: "Ανακάλυψε τοπικά πιάτα, ποτά και food ideas από διαφορετικούς προορισμούς σε όλη την Ελλάδα.",
      },
      href: withLang("/collections/greece-food-and-drink"),
      image: food[0]?.image || "/images/hero-greece.webp",
      eyebrow: { en: "Food & Wine", el: "Φαγητό & Κρασί" },
      tags: {
        en: ["Local Food", "Wine", "Greek Cuisine"],
        el: ["Τοπική Κουζίνα", "Κρασί", "Ελληνική Γαστρονομία"],
      },
      cta: {
        en: "Explore Greek food guides →",
        el: "Δες οδηγούς ελληνικής γαστρονομίας →",
      },
    },
  ];

  return (
    <>
      <SiteHeader />
      <main 
        className="min-h-screen bg-[#f8fbff] text-slate-900 mesh-gradient"
      >

      <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-greece.webp"
            alt="GoGreeceNow Hero"
            fill
            priority
            fetchPriority="high"
            quality={90}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:pb-32 grid lg:items-end">
          <div className="mt-10 md:mt-0">
            <div className="inline-flex rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-700 backdrop-blur-md shadow-sm mb-6 relative overflow-hidden group">
               <span className="relative z-10">{copy.heroBadge}</span>
            </div>

            <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold leading-[1.1] text-white drop-shadow-xl tracking-tight mb-6">
              {copy.heroTitle}
            </h1>

            <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-white/95 font-light drop-shadow-lg mb-10">
              {copy.heroText}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href={withLang("/destinations")}
                className="group relative overflow-hidden rounded-2xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {copy.heroPrimary} <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>

              <Link
                href={withLang("/travel-info")}
                className="group rounded-2xl border border-slate-300 bg-white backdrop-blur-md px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:border-white/30"
              >
                {copy.heroSecondary}
              </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickFacts.map((fact) => (
                <div key={`${fact.value}-${fact.label.en}`} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur-lg px-4 py-3 transition hover:bg-slate-50 hover:border-slate-300">
                  <div className="text-lg md:text-xl font-bold text-slate-900 mb-0.5">{fact.value}</div>
                  <div className="text-[9px] font-semibold tracking-widest uppercase text-indigo-800">{fact.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 lg:translate-y-16">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl"></div>
            <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 mb-4">
                {copy.heroPanelEyebrow}
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                {copy.heroPanelTitle}
              </h2>
              
              <div className="space-y-3">
                <div className="grid grid-cols-4 gap-2">
                  {categories.filter(c => !c.featured).map((item) => (
                    <Link
                      key={item.title.en}
                      href={item.href ? withLang(item.href) : "#"}
                      className="group rounded-xl border border-slate-200 bg-white p-2.5 transition-all hover:border-indigo-200 hover:shadow-sm hover:-translate-y-0.5"
                    >
                      <div className="text-base mb-0.5 text-center">{item.emoji}</div>
                      <h3 className="text-[11px] font-bold text-slate-700 text-center leading-tight group-hover:text-indigo-700 transition-colors">
                        {item.title[lang]}
                      </h3>
                    </Link>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {categories.filter(c => c.featured).map((item) => (
                    <Link
                      key={item.title.en}
                      href={item.href ? withLang(item.href) : "#"}
                      className={`group rounded-2xl border-2 p-4 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-center min-h-[100px] ${
                        item.title.en === "Compare"
                          ? "border-indigo-400 bg-indigo-600 text-white shadow-lg shadow-indigo-300 hover:shadow-indigo-400/40 hover:border-indigo-300"
                          : "border-amber-400 bg-amber-500 text-white shadow-lg shadow-amber-300 hover:shadow-amber-400/40 hover:border-amber-300"
                      }`}
                    >
                      <div className="text-3xl mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] brightness-110">
                        {item.emoji}
                      </div>
                      <h3 className="font-bold text-white mb-0.5">
                        {item.title[lang]}
                      </h3>
                      <p className="text-xs leading-relaxed opacity-90">
                        {item.description[lang]}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center border border-slate-200 bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-sm">
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              {lang === "en"
                ? "GoGreeceNow is your comprehensive Greece travel planner — from the sun-drenched Greek islands to historic mainland cities. Whether you are dreaming of Santorini sunsets, island hopping in the Cyclades, or exploring ancient Athens, our destination guides, hotel recommendations, tours, and food guides help you plan every detail of your trip with confidence."
                : "Το GoGreeceNow είναι ο πλήρης οδηγός σου για την Ελλάδα — από τα ηλιόλουστα ελληνικά νησιά μέχρι τις ιστορικές πόλεις της ηπειρωτικής χώρας. Είτε ονειρεύεσαι ηλιοβασιλέματα στη Σαντορίνη, island hopping στις Κυκλάδες, είτε εξερεύνηση της αρχαίας Αθήνας, οι οδηγοί προορισμών, οι προτάσεις διαμονής, οι εκδρομές και οι γαστρονομικοί οδηγοί μας σε βοηθούν να οργανώσεις κάθε λεπτομέρεια του ταξιδιού σου."}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="border border-slate-200 bg-white backdrop-blur-md p-6 shadow-xl shadow-black/50 md:p-8">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  {copy.startPlanningEyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  {copy.startPlanningTitle}
                </h2>
              </div>

              <p className="max-w-3xl text-sm leading-6 text-slate-500">
                {copy.startPlanningText}
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {startCards.map((item) =>
                item.kind === "route" ? (
                  <Link
                    key={item.title.en}
                    href={item.href}
                    className="group border border-slate-200 bg-white hover:bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 backdrop-blur-md hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-indigo-100 text-indigo-800 text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">
                      {item.title[lang]}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description[lang]}
                    </p>
                    <span className="mt-5 inline-block text-sm font-semibold text-indigo-700 transition group-hover:text-indigo-200">
                      {item.cta[lang]}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={item.title.en}
                    href={item.href}
                    className="group border border-slate-200 bg-white hover:bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 backdrop-blur-md hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-indigo-100 text-indigo-800 text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">
                      {item.title[lang]}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description[lang]}
                    </p>
                    <span className="mt-5 inline-block text-sm font-semibold text-indigo-700 transition group-hover:text-indigo-200">
                      {item.cta[lang]}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {copy.featuredCollectionsEyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {copy.featuredCollectionsTitle}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            {copy.featuredCollectionsText}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featuredCollections.map((item) => (
            <Link
              key={item.title.en}
              href={item.href}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.03] hover:z-30 hover:shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110">
                <Image src={item.image} alt={item.title[lang]} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="absolute inset-0 bg-slate-900/40 transition-all duration-700 group-hover:bg-slate-900/60" />

              <div className="relative p-7 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700] drop-shadow-md">
                  {item.eyebrow[lang]}
                </p>
                <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-[#FFD700] drop-shadow-lg md:text-3xl">
                  {item.title[lang]}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 font-medium drop-shadow-md">
                  {item.description[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#FFD700]/40 bg-black/40 px-3 py-1 text-xs font-bold text-[#FFD700] backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-block bg-white/90 backdrop-blur-md px-4 py-2 text-sm font-semibold text-slate-900 transition group-hover:bg-white">
                  {item.cta[lang]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="destinations"
        className="scroll-mt-28 mx-auto max-w-7xl px-6 py-16"
      >
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {copy.destinationEyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {copy.destinationTitle}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            {copy.destinationText}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.filter(d => d.featured).slice(0, 6).map((item) => (
            <article key={item.slug} className="group flex flex-col h-full">
              <Link
                href={withLang(`/destinations/${item.slug}`)}
                className="flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {item.region[lang]}
                  </span>
                  {item.featured && (
                    <span className="absolute top-3 right-3 rounded-full bg-indigo-600 px-2 py-1 text-[10px] font-bold uppercase text-white">
                      ★ Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {item.blurb[lang]}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.highlights[lang].slice(0, 2).map((h) => (
                      <span key={h} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all mt-auto">
                    {lang === "en" ? "Travel Guide" : "Οδηγός Ταξιδιού"} <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Level 2 CTA — All Destinations by Region */}
        <div className="mt-14 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
          <div className="relative flex-1 text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200 mb-2">
              {lang === "en" ? "Full Directory — Browse by Region" : "Πλήρης Κατάλογος — Ανά Περιοχή"}
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
              {lang === "en" ? "Explore all Greek destinations" : "Εξερεύνησε όλους τους ελληνικούς προορισμούς"}
            </p>
            <p className="text-indigo-200/80 text-sm leading-relaxed max-w-xl">
              {lang === "en"
                ? "Browse the complete destination directory organised by region — Cyclades, Ionian Islands, Crete, Peloponnese, Northern Greece, Meteora and more."
                : "Εξερεύνησε τον πλήρη κατάλογο ανά γεωγραφική ενότητα — Κυκλάδες, Ιόνια Νησιά, Κρήτη, Πελοπόννησος, Βόρεια Ελλάδα, Μετέωρα και άλλα."}
            </p>
          </div>
          <div className="relative shrink-0">
            <Link
              href={withLang("/destinations")}
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-bold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:scale-105"
            >
              🗺️ {lang === "en" ? "All Destinations (By Region)" : "Όλοι οι Προορισμοί (Ανά Περιοχή)"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* AI Trip Planner — Spectacular Promo */}
        <div className="mt-14 relative overflow-hidden rounded-[2rem] p-[2px] bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-amber-300 shadow-2xl shadow-indigo-500/20">
          <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-slate-950">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(251,191,36,0.1) 0%, transparent 40%)' }} />
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23999\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
              <div className="shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 border border-indigo-400/20 shadow-lg shadow-indigo-500/20">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a4 4 0 014 4c0 2-2 4-4 4s-4-2-4-4 2-4 4-4z" />
                  <path d="M12 14c-4 0-8 1.5-8 4v2h16v-2c0-2.5-4-4-8-4z" />
                  <path d="M20 8l2 2-2 2" />
                  <path d="M4 12l-2 2 2 2" />
                  <path d="M12 20v2" />
                  <path d="M18 3l-2 2 2 2" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 border border-indigo-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    {lang === "en" ? "AI-POWERED" : "ΤΕΧΝΗΤΗ ΝΟΗΜΟΣΥΝΗ"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 border border-amber-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-300">
                    ✨ {lang === "en" ? "NEW" : "ΝΕΟ"}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
                  {lang === "en" ? "Plan Your Entire Trip with AI" : "Σχεδίασε Όλο σου το Ταξίδι με Τεχνητή Νοημοσύνη"}
                </h3>
                <p className="text-sm text-indigo-200/70 leading-relaxed max-w-2xl mb-4">
                  {lang === "en"
                    ? "Tell our AI assistant your preferences — budget, style, dates, interests — and get a fully personalised itinerary in seconds. It scours our database of 50+ destinations across Greece, with hundreds of handpicked hotels, restaurants, and hidden gems to build your perfect trip. No more tabs, no more research."
                    : "Πες στον βοηθό τεχνητής νοημοσύνης τις προτιμήσεις σου — budget, στυλ, ημερομηνίες, ενδιαφέροντα — και λάβε ένα πλήρως εξατομικευμένο πρόγραμμα σε δευτερόλεπτα. Ερευνά τη βάση με 50+ προορισμούς σε όλη την Ελλάδα, με εκατοντάδες χειροποίκτες προτάσεις για ξενοδοχεία, εστιατόρια και κρυμμένα διαμάντια για να χτίσει το τέλειο ταξίδι σου. Τέλος στις ατελείωτες καρτέλες."}
                </p>
                <div className="flex flex-wrap items-center gap-5 text-xs text-indigo-300/60 mb-5">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    {lang === "en" ? "30-second setup" : "Ρύθμιση σε 30 δευτερόλεπτα"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {lang === "en" ? "Smart recommendations" : "Έξυπνες προτάσεις"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {lang === "en" ? "Real-time availability" : "Διαθεσιμότητα σε πραγματικό χρόνο"}
                  </span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Link
                    href={withLang("/trip-planner", lang)}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 px-7 py-3 text-sm font-bold text-white shadow-[0_4px_25px_rgba(139,92,246,0.4)] transition-all hover:shadow-[0_4px_40px_rgba(139,92,246,0.6)] hover:-translate-y-0.5"
                  >
                    {lang === "en" ? "Try the AI Trip Planner" : "Δοκίμασε τον AI Σχεδιαστή"}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  <span className="text-[11px] text-indigo-400/50 italic">
                    {lang === "en" ? "It's completely free" : "Είναι εντελώς δωρεάν"}
                  </span>
                </div>
              </div>
              <div className="hidden lg:flex shrink-0 flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">✦</div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">2,000+</p>
                  <p className="text-[10px] text-indigo-300/60 uppercase tracking-wider">{lang === "en" ? "Curated guides" : "Οδηγοί προορισμών"}</p>
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="travel-info" className="scroll-mt-28 bg-white backdrop-blur-md py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="border border-slate-200 bg-white hover:bg-slate-50 p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {copy.travelHubEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {copy.travelHubTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                {copy.travelHubText}
              </p>

              <Link
                href={withLang("/travel-info")}
                className="mt-6 inline-flex bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                {copy.travelHubCta}
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href={withLang("/travel-info/how-to-get-to-greece")}
                className="group border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl">✈️</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {copy.travelMini1Title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {copy.travelMini1Text}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-indigo-700">
                  {lang === "en"
                    ? "Read how to get to Greece →"
                    : "Δες πώς να έρθεις στην Ελλάδα →"}
                </span>
              </Link>

              <Link
                href={withLang("/travel-info/best-time-to-visit-greece")}
                className="group border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl">🗓️</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {copy.travelMini2Title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {copy.travelMini2Text}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-indigo-700">
                  {lang === "en"
                    ? "Read the best time to visit Greece guide →"
                    : "Δες τον οδηγό για το πότε να ταξιδέψεις →"}
                </span>
              </Link>

              <Link
                href={withLang("/travel-info/getting-around-greece")}
                className="group border border-slate-200 bg-white backdrop-blur-md p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl">🧭</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {copy.travelMini3Title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {copy.travelMini3Text}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-indigo-700">
                  {lang === "en"
                    ? "Read the getting around Greece guide →"
                    : "Δες τον οδηγό μετακينةση στην Ελλάδα →"}
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <article className="relative overflow-hidden rounded-[2rem] bg-indigo-950 p-7 text-white shadow-xl lg:p-10 border border-white/10 group">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-950 via-indigo-950/45 to-transparent transition-opacity duration-700 group-hover:via-indigo-950/60" />
              <div className="absolute inset-0 z-0 opacity-40">
                <Image 
                  src="/images/greece-islands-map-guide.webp" 
                  alt="Greece Island Map Guide" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="relative z-10 max-w-xl text-left">
                 <span className="inline-flex rounded-full bg-indigo-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-100 backdrop-blur-md mb-4 border border-white/10">
                   {lang === "en" ? "Visual Planning" : "Οπτική Οργάνωση"}
                 </span>
                 <p className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                    {lang === "en" ? "Not sure where to start? See the island map" : "Δεν ξέρεις από πού να ξεκινήσεις; Δες τον χάρτη"}
                 </p>
                 <p className="text-sm md:text-base text-indigo-100/90 mb-6 leading-relaxed font-light">
                   {lang === "en" 
                     ? "Understand the island clusters, regions and ferry flow at a glance before you dive into destination guides." 
                     : "Κατανόησε τα νησιωτικά συμπλέγματα, τις περιοχές και τη ροή των πλοίων με μια ματιά πριν ξεκινήσεις να διαβάζεις οδηγούς."}
                 </p>
                 <Link 
                   href={withLang("/travel-info/greece-islands-map-guide")} 
                   className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-950 hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-0.5"
                 >
                   {lang === "en" ? "Explore the Island Map Guide →" : "Δες τον Οδηγό Χάρτη →"}
                 </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="hotels"
        className="scroll-mt-28 bg-gradient-to-b from-amber-50/70 to-white py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex rounded-md bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                🏨 {copy.hotelsEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {copy.hotelsTitle}
              </h2>
              <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-amber-500 to-orange-400" />
              <p className="mt-4 max-w-3xl rounded-xl border border-amber-100 bg-white backdrop-blur-md px-5 py-4 text-sm leading-6 text-slate-500 shadow-sm">
                {copy.hotelsText}
              </p>
            </div>

          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {hotels.filter(h => ["santorini", "mykonos", "athens"].includes(h.slug)).map((item) => (
              <article
                key={item.slug}
                className="flex flex-col h-full overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-white via-amber-50/70 to-orange-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1606]/35 via-transparent to-transparent" />

                  {item.badge ? (
                    <span className="absolute left-4 top-4 rounded-md bg-amber-500 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                      {item.badge}
                    </span>
                  ) : null}

                  <span className="absolute right-4 top-4 rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-amber-800 backdrop-blur">
                    {lang === "en" ? "Stay" : "Διαμονή"}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-amber-100 text-2xl">
                      🏨
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                        {lang === "en"
                          ? "Featured stay"
                          : "Προτεινόμενη διαμονή"}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="rounded-md bg-white backdrop-blur-md px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                      {item.place}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.info[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.features[lang].slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md border border-amber-100 bg-white backdrop-blur-md px-3 py-1 text-xs font-medium text-amber-900"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/hotels/${item.slug}`)}
                    className="mt-auto inline-flex rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-600"
                    aria-label={
                      lang === "en"
                        ? `Read where to stay in ${item.place}`
                        : `Δες πού να μείνεις στο ${item.place}`
                    }
                  >
                    {lang === "en"
                      ? `Where to stay in ${item.place} →`
                      : `Πού να μείνεις στο ${item.place} →`}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Level 2 CTA — All Hotels Directory */}
          <div className="mt-14 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-700 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
            <div className="relative flex-1 text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-100 mb-2">
                {lang === "en" ? "Full Directory — Where to Stay" : "Πλήρης Κατάλογος — Διαμονή"}
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {lang === "en" ? "Discover more places to stay across Greece" : "Ανακάλυψε περισσότερα καταλύματα σε όλη την Ελλάδα"}
              </p>
              <p className="text-amber-100/80 text-sm leading-relaxed max-w-xl">
                {lang === "en"
                  ? "Explore our comprehensive directory of hotels, resorts and places to stay organized by destination — Cyclades, Ionian Islands, Crete and more."
                  : "Εξερεύνησε τον πλήρη κατάλογο με ξενοδοχεία, resorts και καταλύματα ανά προορισμό — Κυκλάδες, Ιόνια Νησιά, Κρήτη και άλλα."}
              </p>
            </div>
            <div className="relative shrink-0">
              <Link
                href={withLang("/hotels")}
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-bold text-amber-700 shadow-lg transition-all hover:bg-amber-50 hover:scale-105"
              >
                🏨 {lang === "en" ? "All Places to Stay (By Destination)" : "Όλα τα Καταλύματα (Ανά Προορισμό)"}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tours"
        className="scroll-mt-28 bg-gradient-to-b from-sky-50 to-cyan-50/60 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex rounded-md bg-cyan-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
                ⚓ {copy.toursEyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {copy.toursTitle}
              </h2>
              <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-cyan-500 to-sky-500" />
            </div>

            <p className="max-w-3xl rounded-xl border border-cyan-100 bg-white backdrop-blur-md px-5 py-4 text-sm leading-6 text-slate-500 shadow-sm">
              {copy.toursText}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tours.filter(item => ["athens-tours", "santorini-tours", "mykonos-tours"].includes(item.slug)).map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-xl border border-cyan-200 bg-gradient-to-br from-white via-cyan-50/80 to-sky-100/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative">
                  <div className="relative h-52">
                    <Image src={item.image} alt={item.title[lang]} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#164e63]/35 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-md bg-cyan-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-sm">
                      {lang === "en" ? "Tours & Experiences" : "Εκδρομές & Εμπειρίες"}
                    </span>
                    <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-cyan-800 backdrop-blur">{item.place}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-100 text-2xl">⚓</div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">{lang === "en" ? "Local experiences" : "Τοπικές εμπειρίες"}</p>
                      <h3 className="mt-1 text-2xl font-semibold leading-snug">{item.title[lang]}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-500">{item.info[lang]}</p>
                  <ul className="mt-5 flex flex-wrap gap-2 list-none p-0">
                    {item.highlights[lang].slice(0, 3).map((h, i) => (
                      <li key={`${h}-${i}`} className="rounded-md border border-cyan-100 bg-white backdrop-blur-md px-3 py-1 text-xs font-medium text-cyan-900">{h}</li>
                    ))}
                  </ul>
                  <Link href={withLang(`/tours/${item.slug}`)} className="mt-6 inline-flex rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-600" aria-label={lang === "en" ? `Read the ${item.place} tour guide` : `Δες τον οδηγό εκδρομών για ${item.place}`}>
                    {lang === "en" ? `${item.place} tour guide →` : `Οδηγός εκδρομών ${item.place} →`}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Level 2 CTA — All Tours Directory */}
          <div className="mt-14 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-cyan-600 via-cyan-700 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
            <div className="relative flex-1 text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 mb-2">
                {lang === "en" ? "Full Directory — Explore Greece" : "Πλήρης Κατάλογος — Εξερεύνησε την Ελλάδα"}
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {lang === "en" ? "Discover more tours across Greece" : "Εξερεύνησε περισσότερες εκδρομές σε όλη την Ελλάδα"}
              </p>
              <p className="text-cyan-200/80 text-sm leading-relaxed max-w-xl">
                {lang === "en"
                  ? "Explore our comprehensive directory of tours, boat trips and local experiences organised by region — Athens, Santorini, Mykonos, Corfu, Crete and more."
                  : "Εξερεύνησε τον πλήρη κατάλογο με εκδρομές, θαλάσσιες εμπειρίες και τοπικές δραστηριότητες ανά περιοχή — Αθήνα, Σαντορίνη, Μύκονος, Κέρκυρα, Κρήτη και άλλα."}
              </p>
            </div>
            <div className="relative shrink-0">
              <Link
                href={withLang("/tours/all")}
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-bold text-cyan-700 shadow-lg transition-all hover:bg-cyan-50 hover:scale-105"
              >
                🗺️ {lang === "en" ? "Explore more tours across Greece" : "Εξερεύνηση περισσότερων εκδρομών"}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="food"
        className="scroll-mt-28 bg-gradient-to-b from-orange-50/50 to-amber-50/40 py-16"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <span className="inline-flex rounded-md bg-orange-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-orange-800">
              🍷 {copy.foodEyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {copy.foodTitle}
            </h2>
            <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-orange-500 to-amber-400" />
            <p className="mt-4 max-w-3xl rounded-xl border border-orange-100 bg-white/85 px-5 py-4 text-sm leading-6 text-slate-500 shadow-sm">
              {copy.foodText}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {food.filter(item => ["greek-street-food", "athens", "sunset-cocktails-dinner"].includes(item.slug)).map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-xl border border-orange-200 bg-gradient-to-br from-white via-orange-50/80 to-amber-100/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div className="relative h-52">
                    <Image src={item.image} alt={item.title[lang]} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a2207]/35 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-md bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-sm">
                      {lang === "en" ? "Food & Drink" : "Φαγητό & Ποτό"}
                    </span>
                    <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-orange-800 backdrop-blur">
                      {item.place}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-100 text-2xl">
                      🍷
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
                        {lang === "en" ? "Local flavors" : "Τοπικές γεύσεις"}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold leading-snug">
                        {item.title[lang]}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.info[lang]}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2 list-none p-0">
                    {item.specialties[lang].slice(0, 3).map((specialty, index) => (
                      <li
                        key={`${specialty}-${index}`}
                        className="rounded-md border border-orange-100 bg-white backdrop-blur-md px-3 py-1 text-xs font-medium text-orange-900"
                      >
                        {specialty}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={withLang(`/eat-drink/${item.slug}`)}
                    className="mt-6 inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-orange-600"
                    aria-label={
                      lang === "en"
                        ? `Read the ${item.place} food guide`
                        : `Δες τον γαστρονομικό οδηγό για ${item.place}`
                    }
                  >
                    {lang === "en"
                      ? `${item.place} food guide →`
                      : `Γαστρονομικός οδηγός για ${item.place} →`}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-600 via-amber-700 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
            <div className="relative flex-1 text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200 mb-2">
                {lang === "en" ? "Full Directory — Eat & Drink" : "Πλήρης Κατάλογος — Φαγητό & Ποτό"}
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {lang === "en" ? "Explore all food & drink guides" : "Εξερεύνησε όλους τους γαστρονομικούς οδηγούς"}
              </p>
              <p className="text-amber-200/80 text-sm leading-relaxed max-w-xl">
                {lang === "en"
                  ? "From Athens street food to Santorini sunset cocktails, regional wines to seafood by the harbor — discover every food and drink guide across Greece in one place."
                  : "Από το street food της Αθήνας μέχρι τα κοκτέιλ ηλιοβασιλέματος στη Σαντορίνη — ανακάλυψε όλους τους γαστρονομικούς οδηγούς σε ένα μέρος."}
              </p>
            </div>
            <div className="relative shrink-0">
              <Link
                href={withLang("/collections/greece-food-and-drink")}
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-bold text-orange-700 shadow-lg transition-all hover:bg-orange-50 hover:scale-105"
              >
                🍷 {lang === "en" ? "Browse all food & drink guides" : "Δες όλους τους γαστρονομικούς οδηγούς"}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>



      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-16 text-center border-t border-indigo-800/30">
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(99,102,241,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(236,72,153,0.2) 0%, transparent 50%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-40" />
        <div className="mx-auto max-w-2xl px-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-400/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-indigo-300 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            {lang === "en" ? "GoGreeceNow Business" : "GoGreeceNow Επιχειρήσεις"}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-3">
            {lang === "en" ? "Put Your Business in Front of Travelers" : "Βάλε την Επιχείρησή σου Μπροστά σε Ταξιδιώτες"}
          </h2>
          <p className="text-sm text-indigo-200/70 mb-8 leading-relaxed max-w-lg mx-auto">
            {lang === "en"
              ? "Thousands of travelers search GoGreeceNow every month to plan their trip. Get featured in destination guides, recommended hotels, and curated experiences — and turn searches into bookings."
              : "Χιλιάδες ταξιδιώτες αναζητούν κάθε μήνα στο GoGreeceNow για να οργανώσουν το ταξίδι τους. Απέκτησε προβολή σε οδηγούς προορισμών, προτεινόμενα ξενοδοχεία και εμπειρίες — και κάνε τις αναζητήσεις κρατήσεις."}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href={withLang("/promotion")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-7 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)] transition-all hover:shadow-[0_4px_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5"
            >
              {lang === "en" ? "Explore promotion plans" : "Δες τα πακέτα προβολής"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href={withLang("/contact")}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-indigo-200 transition-all hover:bg-white/10 hover:text-white"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              {lang === "en" ? "Contact us" : "Επικοινωνία"}
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}