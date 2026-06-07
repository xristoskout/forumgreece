"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import SiteFooter from "../../components/SiteFooter";
import { Lang } from "../../lib/locale";
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
      value: `${destinations.length}+`,
      label: { en: "destinations", el: "προορισμοί" },
    },
    {
      value: `${travelInfoGuides.length}+`,
      label: { en: "travel guides", el: "travel οδηγοί" },
    },
    {
      value: `${hotels.length}+`,
      label: { en: "featured stays", el: "προτεινόμενα stays" },
    },
    {
      value: `${tours.length + food.length}+`,
      label: { en: "experiences & flavors", el: "εμπειρίες & γεύσεις" },
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
      eyebrow: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
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

  const destinationCardMeta = [
    {
      eyebrow: {
        en: "Featured Destination",
        el: "Προτεινόμενος Προορισμός",
      },
      summary: {
        en: "A strong starting point for travelers looking for scenery, atmosphere and practical destination planning.",
        el: "Μια δυνατή αφετηρία για ταξιδιώτες που ψάχνουν τοπίο, ατμόσφαιρα και πρακτική οργάνωση προορισμού.",
      },
      tags: {
        en: ["Travel Guide", "Highlights", "Local Tips"],
        el: ["Travel Guide", "Highlights", "Τοπικά Tips"],
      },
    },
    {
      eyebrow: { en: "Popular Pick", el: "Δημοφιλής Επιλογή" },
      summary: {
        en: "A guide designed to help visitors quickly understand what makes this place worth the trip.",
        el: "Ένας οδηγός που βοηθά τον επισκέπτη να καταλάβει γρήγορα τι κάνει αυτό το μέρος να αξίζει το ταξίδι.",
      },
      tags: {
        en: ["Best Spots", "What to See", "Ideas"],
        el: ["Best Spots", "Τι να Δεις", "Ιδέες"],
      },
    },
    {
      eyebrow: { en: "Travel Inspiration", el: "Ταξιδιωτική Έμπνευση" },
      summary: {
        en: "Useful for travelers who want a clean overview before they dive into details.",
        el: "Χρήσιμο για ταξιδιώτες που θέλουν μια καθαρή εικόνα πριν μπουν στις λεπτομέρειες.",
      },
      tags: {
        en: ["Overview", "Planning", "Guide"],
        el: ["Overview", "Planning", "Guide"],
      },
    },
    {
      eyebrow: { en: "Editorial Guide", el: "Editorial Οδηγός" },
      summary: {
        en: "A curated destination entry with useful structure and fast scanning.",
        el: "Μια curated παρουσίαση προορισμού με χρήσιμη δομή και γρήγορο scanning.",
      },
      tags: {
        en: ["Curated", "Easy Read", "Essentials"],
        el: ["Curated", "Easy Read", "Essentials"],
      },
    },
  ];

  return (
    <main 
      className="min-h-screen bg-[#f8fbff] text-slate-900 mesh-gradient"
    >
      <SiteHeader />

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
                <div key={`${fact.value}-${fact.label.en}`} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur-lg px-5 py-5 transition hover:bg-slate-50 hover:border-slate-300">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{fact.value}</div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-indigo-800">{fact.label[lang]}</div>
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
                    className="group border border-slate-200 bg-white hover:bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white backdrop-blur-md hover:shadow-lg"
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
                    className="group border border-slate-200 bg-white hover:bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white backdrop-blur-md hover:shadow-lg"
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
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-900 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.03] hover:z-30 hover:shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.filter(d => d.featured).slice(0, 6).map((item, index) => {
            const meta = destinationCardMeta[index % destinationCardMeta.length];
            return (
              <article
                key={item.slug}
                className="group relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.05] hover:z-30 hover:shadow-[0_15px_50px_rgba(0,0,0,0.1)] min-h-[450px]"
              >
                <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110">
                <Image src={item.image} alt={item.name || "Featured destination"} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-75" />

                <div className="relative p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-800 backdrop-blur-md">
                      {meta.eyebrow[lang]}
                    </span>
                    <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900/90 backdrop-blur-md">
                      {item.region[lang]}
                    </span>
                  </div>

                  <h3 className="mb-2 text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                    {item.name}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-white/95 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.blurb[lang]}
                  </p>

                  <Link
                    href={withLang(`/destinations/${item.slug}`)}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md transition-all hover:bg-indigo-600 hover:border-transparent hover:text-slate-900"
                    aria-label={lang === "en" ? `Explore ${item.name}` : `Οδηγός για ${item.name}`}
                  >
                    {lang === "en" ? `Explore ${item.name} →` : `Εξερεύνηση →`}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Level 2 CTA — All Destinations by Region */}
        <div className="mt-14 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
          <div className="relative flex-1 text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200 mb-2">
              {lang === "en" ? "Full Directory — Browse by Region" : "Πλήρης Κατάλογος — Ανά Περιοχή"}
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
              {lang === "en" ? "Explore all Greek destinations" : "Εξερεύνησε όλους τους ελληνικούς προορισμούς"}
            </h3>
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
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="relative z-10 max-w-xl text-left">
                 <span className="inline-flex rounded-full bg-indigo-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-100 backdrop-blur-md mb-4 border border-white/10">
                   {lang === "en" ? "Visual Planning" : "Οπτική Οργάνωση"}
                 </span>
                 <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                   {lang === "en" ? "Not sure where to start? See the island map" : "Δεν ξέρεις από πού να ξεκινήσεις; Δες τον χάρτη"}
                 </h3>
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
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {lang === "en" ? "Discover more places to stay across Greece" : "Ανακάλυψε περισσότερα καταλύματα σε όλη την Ελλάδα"}
              </h3>
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

          {/* Level 2 CTA — All Tours Directory */}
          <div className="mt-14 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-cyan-600 via-cyan-700 to-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)' }} />
            <div className="relative flex-1 text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 mb-2">
                {lang === "en" ? "Full Directory — Explore Greece" : "Πλήρης Κατάλογος — Εξερεύνησε την Ελλάδα"}
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                {lang === "en" ? "Discover more tours across Greece" : "Εξερεύνησε περισσότερες εκδρομές σε όλη την Ελλάδα"}
              </h3>
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
            {food.map((item) => (
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
        </div>
      </section>



      <section className="bg-slate-950 py-12 text-center border-t border-slate-800/50">
        <div className="mx-auto max-w-2xl px-6 relative z-10">
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-2">
            {lang === "en" ? "Promote your business today" : "Προβολή επιχείρησης"}
          </h2>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            {lang === "en" ? "Reach thousands of travelers planning their trip to Greece. Get personalized exposure for your hotel, restaurant or travel service." : "Προσέγγισε χιλιάδες ταξιδιώτες που οργανώνουν το ταξίδι τους στην Ελλάδα. Απόκτησε προσωποποιημένη προβολή για την επιχείρησή σου."}
          </p>
          <Link
            href={withLang("/promotion")}
            className="inline-flex items-center justify-center rounded-full bg-indigo-600/20 border border-indigo-500/30 px-6 py-2.5 text-xs font-bold text-indigo-300 transition-all hover:bg-indigo-600 hover:text-white"
          >
            {lang === "en" ? "View promotion services →" : "Υπηρεσίες προβολής →"}
          </Link>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}