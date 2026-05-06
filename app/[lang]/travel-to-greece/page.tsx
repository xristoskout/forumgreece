"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SiteHeader from "../../../components/site-header";

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
  const pathname = usePathname();
  const router = useRouter();

  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

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

  const t = useMemo(
    () => ({
      brandLine: {
        en: "Destinations, travel guides, hotels and local experiences in Greece",
        el: "Προορισμοί, ταξιδιωτικοί οδηγοί, ξενοδοχεία και τοπικές εμπειρίες στην Ελλάδα",
      },
      navHome: {
        en: "Home",
        el: "Αρχική",
      },
      navForums: {
        en: "Travel to Greece",
        el: "Ταξίδι στην Ελλάδα",
      },
      heroEyebrow: {
        en: "Facebook Travel Forums",
        el: "Facebook Travel Forums",
      },
      heroTitle: {
        en: "Welcome to the GoGreeceNow Travel Community",
        el: "Καλώς ήρθατε στην ταξιδιωτική κοινότητα GoGreeceNow",
      },
      heroText: {
        en: "This page brings together all your Facebook travel communities for islands, cities, beaches, food ideas and destination inspiration across Greece.",
        el: "Αυτή η σελίδα συγκεντρώνει όλες τις Facebook travel κοινότητές σου για νησιά, πόλεις, παραλίες, ιδέες φαγητού και ταξιδιωτική έμπνευση σε όλη την Ελλάδα.",
      },
      heroPrimary: {
        en: "Browse forums",
        el: "Δες τα forums",
      },
      heroSecondary: {
        en: "Back to homepage",
        el: "Επιστροφή στην αρχική",
      },
      introEyebrow: {
        en: "Travel to Greece",
        el: "Ταξίδι στην Ελλάδα",
      },
      introTitle: {
        en: "A central page for all destination communities",
        el: "Μια κεντρική σελίδα για όλες τις destination κοινότητες",
      },
      introText: {
        en: "Use this page as the main directory for every Facebook forum you create for Greek islands, mainland destinations, themed travel groups and local inspiration.",
        el: "Χρησιμοποίησε αυτή τη σελίδα ως τον βασικό κατάλογο για κάθε Facebook forum που θα δημιουργείς για ελληνικά νησιά, ηπειρωτικούς προορισμούς, θεματικές travel ομάδες και τοπική έμπνευση.",
      },
      islandsEyebrow: {
        en: "Island Forums",
        el: "Forums για νησιά",
      },
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
      themedEyebrow: {
        en: "Themed Communities",
        el: "Θεματικές κοινότητες",
      },
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
      footerAbout: {
        en: "About",
        el: "Σχετικά",
      },
      footerContact: {
        en: "Contact",
        el: "Επικοινωνία",
      },
      footerPrivacy: {
        en: "Privacy",
        el: "Απόρρητο",
      },
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
      href: "https://www.facebook.com/groups/1590639762241655/",
      image: "/images/forums/santorini.webp",
    },
    {
      title: "Forum Mykonos",
      region: { en: "Cyclades", el: "Κυκλάδες" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Beach life, nightlife, stylish stays and summer experiences in Mykonos.",
        el: "Παραλίες, νυχτερινή ζωή, κομψή διαμονή και καλοκαιρινές εμπειρίες στη Μύκονο.",
      },
      href: "https://www.facebook.com/groups/942621205287215/",
      image: "/images/forums/mykonos.webp",
    },
    {
      title: "Forum Corfu",
      region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Old town walks, beaches, green scenery and family travel ideas for Corfu.",
        el: "Βόλτες στην παλιά πόλη, παραλίες, πράσινα τοπία και οικογενειακές ταξιδιωτικές ιδέες για την Κέρκυρα.",
      },
      href: "https://www.facebook.com/groups/1481830549976820/",
      image: "/images/forums/corfu.webp",
    },
    {
      title: "Forum Crete",
      region: { en: "Crete", el: "Κρήτη" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Road trips, beaches, villages, food culture and travel planning for Crete.",
        el: "Road trips, παραλίες, χωριά, γαστρονομία και ταξιδιωτικός σχεδιασμός για την Κρήτη.",
      },
      href: "https://www.facebook.com/groups/1262658085954159/",
      image: "/images/forums/crete.webp",
    },
    {
      title: "Forum Lesvos",
      region: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Villages, beaches, local food, culture and relaxing escapes in Lesvos.",
        el: "Χωριά, παραλίες, τοπικές γεύσεις, πολιτισμός και χαλαρές αποδράσεις στη Λέσβο.",
      },
      href: "https://www.facebook.com/groups/1365073765382008/",
      image: "/images/forums/lesvos.webp",
    },
    {
      title: "Forum Kefalonia",
      region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
      category: { en: "Island forum", el: "Forum νησιού" },
      description: {
        en: "Blue waters, famous beaches, villages and summer holidays in Kefalonia.",
        el: "Γαλάζια νερά, διάσημες παραλίες, χωριά και καλοκαιρινές διακοπές στην Κεφαλονιά.",
      },
      href: "https://www.facebook.com/groups/962993806185389/",
      image: "/images/forums/kefalonia.webp",
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
      href: "https://www.facebook.com/groups/2181693449313303/",
      image: "/images/forums/nafplio.webp",
    },
    {
      title: "Forum Thessaloniki",
      region: { en: "Northern Greece", el: "Βόρεια Ελλάδα" },
      category: { en: "City forum", el: "Forum πόλης" },
      description: {
        en: "Food, culture, nightlife, local tips and city experiences in Thessaloniki.",
        el: "Φαγητό, πολιτισμός, νυχτερινή ζωή, τοπικά tips και εμπειρίες πόλης στη Θεσσαλονίκη.",
      },
      href: "https://www.facebook.com/groups/969695828757541/",
      image: "/images/forums/thessaloniki.webp",
    },
    {
      title: "Forum Athens",
      region: { en: "Attica", el: "Αττική" },
      category: { en: "City forum", el: "Forum πόλης" },
      description: {
        en: "Acropolis visits, neighborhoods, restaurants, hotels and planning your Athens stay.",
        el: "Επισκέψεις στην Ακρόπολη, γειτονιές, εστιατόρια, ξενοδοχεία και οργάνωση διαμονής στην Αθήνα.",
      },
      href: "https://www.facebook.com/groups/1689801992448097/",
      image: "/images/forums/athens.webp",
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
      href: "https://www.facebook.com/groups/1622520432339302",
      image: "/images/forums/beaches.webp",
    },
    {
      title: "Greek Food Lovers",
      region: { en: "All Greece", el: "Όλη η Ελλάδα" },
      category: { en: "Food community", el: "Γαστρονομική κοινότητα" },
      description: {
        en: "Traditional taverns, seafood, desserts, wine and local food discoveries across Greece.",
        el: "Παραδοσιακές ταβέρνες, θαλασσινά, γλυκά, κρασί και τοπικές γευστικές ανακαλύψεις σε όλη την Ελλάδα.",
      },
      href: "https://www.facebook.com/groups/835007208943406/",
      image: "/images/forums/food.webp",
    },
    {
      title: "Travel Inspiration Greece",
      region: { en: "All Greece", el: "Όλη η Ελλάδα" },
      category: { en: "Travel inspiration", el: "Ταξιδιωτική έμπνευση" },
      description: {
        en: "Photos, destination ideas, weekend escapes and planning inspiration for every season.",
        el: "Φωτογραφίες, ιδέες προορισμών, weekend αποδράσεις και έμπνευση για κάθε εποχή.",
      },
      href: "https://www.facebook.com/groups/2419783748445111",
      image: "/images/forums/inspiration.webp",
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
            pill: "bg-sky-500/20 border border-sky-500/30 text-sky-300",
            card: "from-sky-900/40 via-slate-900/40 to-slate-50",
          }
        : accent === "emerald"
        ? {
            pill: "bg-emerald-500/20 border border-emerald-500/30 text-emerald-300",
            card: "from-emerald-900/40 via-slate-900/40 to-slate-50",
          }
        : {
            pill: "bg-amber-500/20 border border-amber-500/30 text-amber-300",
            card: "from-amber-900/40 via-slate-900/40 to-slate-50",
          };

    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-700 backdrop-blur-md">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight">{title}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            >
              <a href={item.href} target="_blank" rel="noreferrer" className="block">
                <div className={
                  item.image
                    ? "aspect-[4/3] w-full relative overflow-hidden"
                    : `aspect-[4/3] w-full bg-gradient-to-br transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${accentStyles.card}`
                }>
                  {item.image && (
                    <>
                      <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-slate-900/10" />
                    </>
                  )}
                </div>
              </a>

              <div className="p-8 relative z-10 bg-white/80 backdrop-blur-md flex-1 flex flex-col h-[60%]">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${accentStyles.pill} transition-colors group-hover:bg-opacity-40`}
                  >
                    {item.category[lang]}
                  </span>

                  <span className="text-xs font-medium text-slate-500">
                     📍 {item.region[lang]}
                  </span>
                </div>

                <a href={item.href} target="_blank" rel="noreferrer" className="mt-6 block">
                  <h3 className="text-2xl font-bold leading-snug group-hover:text-indigo-800 transition-colors">
                    {item.title}
                  </h3>
                </a>

                <p className="mt-4 text-sm leading-relaxed text-slate-500 flex-1">
                  {item.description[lang]}
                </p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block text-sm font-bold text-indigo-700 hover:text-indigo-800 transition-colors"
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
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      {/* Full-width Hero Section - Greeka.com vibe */}
      <section className="relative flex min-h-[60vh] xl:min-h-[70vh] items-center justify-center bg-no-repeat">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/greece-main.webp"
            alt="Greece travel forums background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/70 z-[1]" />
        <div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply z-[2]"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl drop-shadow-xl text-balance">
            {t.heroTitle[lang]}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-2xl text-white/90 drop-shadow-md">
            {t.heroText[lang]}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#islands"
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-sky-600 px-8 text-sm sm:text-lg font-bold text-white shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all hover:scale-105 hover:bg-sky-500"
            >
              {t.heroPrimary[lang]}
            </a>
            <Link
              href={withLang("/")}
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-sm sm:text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              {t.heroSecondary[lang]}
            </Link>
          </div>
        </div>
      </section>

      {/* Overlapping Intro Box */}
      <section className="relative z-20 mx-auto -mt-16 mb-8 max-w-5xl px-4 sm:px-6">
        <div className="rounded-[2.5rem] bg-white p-8 sm:p-12 shadow-2xl text-center border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-600">
            {t.introEyebrow[lang]}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.introTitle[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
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

      <footer className="border-t border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>{t.footerText[lang]}</div>

          <div className="flex gap-5">
            <Link href={withLang("/about")} className="hover:text-slate-900">
              {t.footerAbout[lang]}
            </Link>
            <Link href={withLang("/contact")} className="hover:text-slate-900">
              {t.footerContact[lang]}
            </Link>
            <Link href={withLang("/privacy")} className="hover:text-slate-900">
              {t.footerPrivacy[lang]}
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-4 pt-6 pb-8 flex justify-center">
          <a href="https://www.focusai.gr" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
            {lang === "en" ? "Website Design 2026 by Focus AI" : "Κατασκευή Ιστοσελίδας 2026 By Focus AI"}
          </a>
        </div>
      </footer>
    </main>
  );
}