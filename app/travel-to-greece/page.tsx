"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Lang = "en" | "el";

type Localized = {
  en: string;
  el: string;
};

type ForumCard = {
  title: string;
  region: Localized;
  description: Localized;
  category: Localized;
  href: string;
  image?: string;
};

export default function TravelToGreecePage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = useMemo(
    () => ({
      brandLine: {
        en: "Destinations, travel guides, hotels and local experiences in Greece",
        el: "Προορισμοί, ταξιδιωτικοί οδηγοί, ξενοδοχεία και τοπικές εμπειρίες στην Ελλάδα",
      },
      navHome: { en: "Home", el: "Αρχική" },
      navForums: { en: "Travel to Greece", el: "Travel to Greece" },
      heroEyebrow: {
        en: "Facebook Travel Forums",
        el: "Facebook Travel Forums",
      },
      heroTitle: {
        en: "Discover all your Greece travel forums in one elegant hub",
        el: "Ανακάλυψε όλα τα travel forums σου για την Ελλάδα σε ένα κομψό κεντρικό hub",
      },
      heroText: {
        en: "This page brings together all your Facebook travel communities for islands, cities, beaches, food ideas and destination inspiration across Greece.",
        el: "Αυτή η σελίδα συγκεντρώνει όλες τις Facebook travel κοινότητές σου για νησιά, πόλεις, παραλίες, ιδέες φαγητού και ταξιδιωτική έμπνευση σε όλη την Ελλάδα.",
      },
      heroPrimary: { en: "Browse forums", el: "Δες τα forums" },
      heroSecondary: { en: "Back to homepage", el: "Επιστροφή στην αρχική" },
      introEyebrow: { en: "Travel to Greece", el: "Travel to Greece" },
      introTitle: {
        en: "A central page for all destination communities",
        el: "Μια κεντρική σελίδα για όλες τις destination κοινότητες",
      },
      introText: {
        en: "Use this page as the main directory for every Facebook forum you create for Greek islands, mainland destinations, themed travel groups and local inspiration.",
        el: "Χρησιμοποίησε αυτή τη σελίδα ως τον βασικό κατάλογο για κάθε Facebook forum που θα δημιουργείς για ελληνικά νησιά, ηπειρωτικούς προορισμούς, θεματικές travel ομάδες και τοπική έμπνευση.",
      },
      islandsEyebrow: { en: "Island Forums", el: "Forums για νησιά" },
      islandsTitle: {
        en: "Popular island communities",
        el: "Δημοφιλείς νησιωτικές κοινότητες",
      },
      mainlandEyebrow: {
        en: "Mainland Forums",
        el: "Forums για ηπειρωτική Ελλάδα",
      },
      mainlandTitle: {
        en: "Cities and mainland destinations",
        el: "Πόλεις και προορισμοί ηπειρωτικής Ελλάδας",
      },
      themedEyebrow: { en: "Themed Communities", el: "Θεματικές κοινότητες" },
      themedTitle: {
        en: "Food, beaches and travel inspiration",
        el: "Φαγητό, παραλίες και ταξιδιωτική έμπνευση",
      },
      ctaOpen: {
        en: "Open Facebook forum →",
        el: "Άνοιγμα Facebook forum →",
      },
      footerText: {
        en: "GoGreeceNow — travel forums, destinations and local communities.",
        el: "GoGreeceNow — travel forums, προορισμοί και τοπικές κοινότητες.",
      },
      footerAbout: { en: "About", el: "Σχετικά" },
      footerContact: { en: "Contact", el: "Επικοινωνία" },
      footerPrivacy: { en: "Privacy", el: "Απόρρητο" },
    }),
    []
  );

  const islandForums: ForumCard[] = [
    {
      title: "Forum Santorini",
      region: { en: "Cyclades", el: "Κυκλάδες" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Tips about caldera views, villages, hotels, beaches and romantic holidays in Santorini.",
        el: "Tips για θέα στην καλντέρα, χωριά, ξενοδοχεία, παραλίες και ρομαντικές διακοπές στη Σαντορίνη.",
      },
      href: "https://facebook.com",
      image: "/images/forums/santorini.jpg",
    },
    {
      title: "Forum Mykonos",
      region: { en: "Cyclades", el: "Κυκλάδες" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Beach life, nightlife, stylish stays and summer experiences in Mykonos.",
        el: "Παραλίες, νυχτερινή ζωή, κομψή διαμονή και καλοκαιρινές εμπειρίες στη Μύκονο.",
      },
      href: "https://facebook.com",
      image: "/images/forums/mykonos.jpg",
    },
    {
      title: "Forum Corfu",
      region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Old town walks, beaches, green scenery and family travel ideas for Corfu.",
        el: "Βόλτες στην παλιά πόλη, παραλίες, πράσινα τοπία και οικογενειακές ταξιδιωτικές ιδέες για την Κέρκυρα.",
      },
      href: "https://facebook.com",
      image: "/images/forums/corfu.jpg",
    },
    {
      title: "Forum Crete",
      region: { en: "Crete", el: "Κρήτη" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Road trips, beaches, villages, food culture and travel planning for Crete.",
        el: "Road trips, παραλίες, χωριά, γαστρονομία και ταξιδιωτικός σχεδιασμός για την Κρήτη.",
      },
      href: "https://facebook.com",
      image: "/images/forums/crete.jpg",
    },
    {
      title: "Forum Lesvos",
      region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Villages, beaches, local food, culture and relaxing escapes in Lesvos.",
        el: "Χωριά, παραλίες, τοπικές γεύσεις, πολιτισμός και χαλαρές αποδράσεις στη Λέσβο.",
      },
      href: "https://facebook.com",
      image: "/images/forums/lesvos.jpg",
    },
    {
      title: "Forum Kefalonia",
      region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Blue waters, famous beaches, villages and summer holidays in Kefalonia.",
        el: "Γαλάζια νερά, διάσημες παραλίες, χωριά και καλοκαιρινές διακοπές στην Κεφαλονιά.",
      },
      href: "https://facebook.com",
      image: "/images/forums/kefalonia.jpg",
    },
  ];

  const mainlandForums: ForumCard[] = [
    {
      title: "Forum Nafplio",
      region: { en: "Peloponnese", el: "Πελοπόννησος" },
      category: { en: "City break forum", el: "Forum πόλης" },
      description: {
        en: "Ideas for romantic escapes, dining, old town walks and short trips around Nafplio.",
        el: "Ιδέες για ρομαντικές αποδράσεις, φαγητό, βόλτες στην παλιά πόλη και σύντομα ταξίδια γύρω από το Ναύπλιο.",
      },
      href: "https://facebook.com",
      image: "/images/forums/nafplio.jpg",
    },
    {
      title: "Forum Thessaloniki",
      region: { en: "Northern Greece", el: "Βόρεια Ελλάδα" },
      category: { en: "City forum", el: "Forum πόλης" },
      description: {
        en: "Food, culture, nightlife, local tips and city experiences in Thessaloniki.",
        el: "Φαγητό, πολιτισμός, νυχτερινή ζωή, τοπικά tips και εμπειρίες πόλης στη Θεσσαλονίκη.",
      },
      href: "https://facebook.com",
      image: "/images/forums/thessaloniki.jpg",
    },
    {
      title: "Forum Athens",
      region: { en: "Attica", el: "Αττική" },
      category: { en: "City forum", el: "Forum πόλης" },
      description: {
        en: "Acropolis visits, neighborhoods, restaurants, hotels and planning your Athens stay.",
        el: "Επισκέψεις στην Ακρόπολη, γειτονιές, εστιατόρια, ξενοδοχεία και οργάνωση διαμονής στην Αθήνα.",
      },
      href: "https://facebook.com",
      image: "/images/forums/athens.jpg",
    },
  ];

  const themedForums: ForumCard[] = [
    {
      title: "Greek Beaches Forum",
      region: { en: "All Greece", el: "Όλη η Ελλάδα" },
      category: { en: "Beach community", el: "Κοινότητα παραλιών" },
      description: {
        en: "Beautiful beaches, hidden coves, family-friendly spots and summer swim ideas.",
        el: "Όμορφες παραλίες, κρυφοί κολπίσκοι, family-friendly επιλογές και ιδέες για καλοκαιρινές βουτιές.",
      },
      href: "https://facebook.com",
      image: "/images/forums/beaches.jpg",
    },
    {
      title: "Greek Food Lovers",
      region: { en: "All Greece", el: "Όλη η Ελλάδα" },
      category: { en: "Food community", el: "Γαστρονομική κοινότητα" },
      description: {
        en: "Traditional taverns, seafood, desserts, wine and local food discoveries across Greece.",
        el: "Παραδοσιακές ταβέρνες, θαλασσινά, γλυκά, κρασί και τοπικές γευστικές ανακαλύψεις σε όλη την Ελλάδα.",
      },
      href: "https://facebook.com",
      image: "/images/forums/food.jpg",
    },
    {
      title: "Travel Inspiration Greece",
      region: { en: "All Greece", el: "Όλη η Ελλάδα" },
      category: { en: "Travel inspiration", el: "Ταξιδιωτική έμπνευση" },
      description: {
        en: "Photos, destination ideas, weekend escapes and planning inspiration for every season.",
        el: "Φωτογραφίες, ιδέες προορισμών, weekend αποδράσεις και έμπνευση για κάθε εποχή.",
      },
      href: "https://facebook.com",
      image: "/images/forums/inspiration.jpg",
    },
  ];

  const ForumSection = ({
    eyebrow,
    title,
    items,
    accent,
  }: {
    eyebrow: string;
    title: string;
    items: ForumCard[];
    accent: "sky" | "emerald" | "amber";
  }) => {
    const accentStyles =
      accent === "sky"
        ? {
            pill: "bg-sky-100 text-sky-800",
            card: "from-sky-300 via-cyan-200 to-blue-100",
          }
        : accent === "emerald"
        ? {
            pill: "bg-emerald-100 text-emerald-800",
            card: "from-emerald-300 via-teal-200 to-cyan-100",
          }
        : {
            pill: "bg-amber-100 text-amber-800",
            card: "from-amber-300 via-orange-200 to-yellow-100",
          };

    return (
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={
                  item.image
                    ? "h-44 bg-cover bg-center"
                    : `h-44 bg-gradient-to-br ${accentStyles.card}`
                }
                style={
                  item.image
                    ? {
                        backgroundImage: `linear-gradient(to top, rgba(15,23,42,0.28), rgba(15,23,42,0.06)), url('${item.image}')`,
                      }
                    : undefined
                }
              />
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${accentStyles.pill}`}
                  >
                    {item.category[lang]}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {item.region[lang]}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description[lang]}
                </p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950"
                >
                  {t.ctaOpen[lang]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] text-slate-900">
      <section className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <Image
              src="/images/logo/gogreecenow-logo.png"
              alt="GoGreeceNow logo"
              width={52}
              height={52}
              className="h-12 w-12 object-contain"
              priority
            />
            <div>
              <div className="text-2xl font-bold tracking-tight text-sky-900 transition group-hover:text-sky-700">
                GoGreeceNow
              </div>
              <div className="text-sm text-slate-500">{t.brandLine[lang]}</div>
            </div>
          </Link>

          <nav className="hidden gap-6 text-sm font-medium text-slate-700 lg:flex">
            <Link href="/" className="hover:text-sky-700">
              {t.navHome[lang]}
            </Link>
            <span className="text-sky-700">{t.navForums[lang]}</span>
          </nav>

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

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              {t.heroEyebrow[lang]}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              {t.heroTitle[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {t.heroText[lang]}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#islands"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-sky-600 px-6 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                {t.heroPrimary[lang]}
              </a>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                {t.heroSecondary[lang]}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2 overflow-hidden rounded-[32px] shadow-xl">
              <div
                className="h-[280px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(15,23,42,0.28), rgba(15,23,42,0.02)), url('/images/hero/greece-main.jpg')",
                }}
              />
            </div>
            <div className="overflow-hidden rounded-[28px] shadow-lg">
              <div
                className="h-[180px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(15,23,42,0.2), rgba(15,23,42,0.04)), url('/images/hero/greece-small-1.jpg')",
                }}
              />
            </div>
            <div className="overflow-hidden rounded-[28px] shadow-lg">
              <div
                className="h-[180px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(15,23,42,0.2), rgba(15,23,42,0.04)), url('/images/hero/greece-small-2.jpg')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            {t.introEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {t.introTitle[lang]}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            {t.introText[lang]}
          </p>
        </div>
      </section>

      <div id="islands">
        <ForumSection
          eyebrow={t.islandsEyebrow[lang]}
          title={t.islandsTitle[lang]}
          items={islandForums}
          accent="sky"
        />
      </div>

      <ForumSection
        eyebrow={t.mainlandEyebrow[lang]}
        title={t.mainlandTitle[lang]}
        items={mainlandForums}
        accent="emerald"
      />

      <ForumSection
        eyebrow={t.themedEyebrow[lang]}
        title={t.themedTitle[lang]}
        items={themedForums}
        accent="amber"
      />

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>{t.footerText[lang]}</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-800">
              {t.footerAbout[lang]}
            </a>
            <a href="#" className="hover:text-slate-800">
              {t.footerContact[lang]}
            </a>
            <a href="#" className="hover:text-slate-800">
              {t.footerPrivacy[lang]}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}