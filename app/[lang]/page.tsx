"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import { usePathname, useRouter } from "next/navigation";
import {
  Lang,
  categories,
  communities,
  destinations,
  food,
  hotels,
  siteBrand,
  siteBrandLine,
  travelInfoGuides,
  tours,
} from "../../lib/content";

export default function HomePage() {
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

  function isExternalUrl(url: string) {
    return /^https?:\/\//i.test(url);
  }

  const t = {
    navDestinations: { en: "Destinations", el: "Προορισμοί" },
    navTravelInfo: { en: "Travel Info", el: "Ταξιδιωτικές Πληροφορίες" },
    navHotels: { en: "Hotels", el: "Ξενοδοχεία" },
    navTours: { en: "Tours", el: "Εκδρομές" },
    navEatDrink: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
    navForums: { en: "Travel to Greece", el: "Ταξίδι στην Ελλάδα" },

    heroBadge: {
      en: "Greece Travel Portal",
      el: "Travel Portal για την Ελλάδα",
    },
    heroTitle: {
      en: "Plan a better trip to Greece",
      el: "Οργάνωσε καλύτερα το ταξίδι σου στην Ελλάδα",
    },
    heroText: {
      en: "Discover destinations, practical travel info, stays, tours and local food ideas in one clean Greece travel hub.",
      el: "Ανακάλυψε προορισμούς, χρήσιμες ταξιδιωτικές πληροφορίες, διαμονή, εκδρομές και τοπικές γεύσεις μέσα από ένα οργανωμένο Greece travel hub.",
    },
    heroPrimary: { en: "Explore destinations", el: "Δες προορισμούς" },
    heroSecondary: { en: "Plan your trip", el: "Οργάνωσε το ταξίδι σου" },

    heroPanelEyebrow: {
      en: "Everything in one place",
      el: "Όλα σε ένα μέρος",
    },
    heroPanelTitle: {
      en: "Start with the part of the trip you need most",
      el: "Ξεκίνα από το κομμάτι του ταξιδιού που χρειάζεσαι περισσότερο",
    },

    startPlanningEyebrow: {
      en: "Start Planning",
      el: "Ξεκίνα να Οργανώνεις",
    },
    startPlanningTitle: {
      en: "Jump into the right part of the portal",
      el: "Μπες κατευθείαν στο σωστό κομμάτι του portal",
    },
    startPlanningText: {
      en: "Use the homepage like a travel hub: browse destinations, solve the practical questions first, then move to stays, tours and local flavors.",
      el: "Χρησιμοποίησε την αρχική σαν travel hub: δες προορισμούς, λύσε πρώτα τα πρακτικά και μετά προχώρα σε διαμονή, εκδρομές και τοπικές γεύσεις.",
    },

    destinationEyebrow: {
      en: "Top Destinations",
      el: "Δημοφιλείς Προορισμοί",
    },
    destinationTitle: {
  en: "Explore Greece through destination guides",
  el: "Ανακάλυψε την Ελλάδα μέσα από destination guides",
},
destinationText: {
  en: "Browse curated destination pages designed to help travelers move from inspiration to practical planning.",
  el: "Περιηγήσου σε curated σελίδες προορισμών που βοηθούν τον ταξιδιώτη να περάσει από την έμπνευση στο πρακτικό planning.",
},

travelHubEyebrow: {
  en: "Travel Planning",
  el: "Travel Planning",
},
travelHubTitle: {
  en: "Plan before you go",
  el: "Οργάνωσε πριν ταξιδέψεις",
},
travelHubText: {
  en: "Use the travel info hub to answer the practical questions before booking, arriving or moving around Greece.",
  el: "Χρησιμοποίησε το travel info hub για να λύσεις τα πρακτικά ερωτήματα πριν κλείσεις, πριν φτάσεις ή όσο μετακινείσαι στην Ελλάδα.",
},
travelHubCta: {
  en: "View all travel info →",
  el: "Δες όλες τις ταξιδιωτικές πληροφορίες →",
},
travelMini1Title: {
  en: "How to get there",
  el: "Πώς θα πας",
},
travelMini1Text: {
  en: "Flights, ferries and the best ways to reach Greece or specific destinations.",
  el: "Πτήσεις, πλοία και οι καλύτεροι τρόποι για να φτάσεις στην Ελλάδα ή σε συγκεκριμένους προορισμούς.",
},
travelMini2Title: {
  en: "Best time to visit",
  el: "Πότε να ταξιδέψεις",
},
travelMini2Text: {
  en: "Choose the right season based on weather, crowds and travel style.",
  el: "Διάλεξε τη σωστή εποχή ανάλογα με καιρό, κόσμο και travel style.",
},
travelMini3Title: {
  en: "Getting around Greece",
  el: "Μετακίνηση στην Ελλάδα",
},
travelMini3Text: {
  en: "Useful planning for islands, roads, local transport and day-to-day movement.",
  el: "Χρήσιμο planning για νησιά, δρόμους, τοπικές μετακινήσεις και καθημερινή οργάνωση.",
},

    travelInfoEyebrow: { en: "Travel Info", el: "Ταξιδιωτικές Πληροφορίες" },
    travelInfoTitle: {
      en: "Everything useful before you go",
      el: "Όλα όσα χρειάζεσαι πριν ταξιδέψεις",
    },
    travelInfoText: {
      en: "Useful planning content about how to get there, when to go and how to move around.",
      el: "Χρήσιμο περιεχόμενο για το πώς θα έρθεις, πότε να ταξιδέψεις και πώς να μετακινηθείς.",
    },

    hotelsEyebrow: { en: "Hotels", el: "Ξενοδοχεία" },
    hotelsTitle: {
      en: "Featured stays in Greece",
      el: "Προτεινόμενα καταλύματα στην Ελλάδα",
    },
    hotelsText: {
      en: "Each hotel card now opens to its own dedicated subpage with the same site style.",
      el: "Κάθε hotel card πλέον ανοίγει στη δική του ξεχωριστή υποσελίδα με το ίδιο ύφος του site.",
    },

    toursEyebrow: { en: "Tours", el: "Εκδρομές" },
    toursTitle: {
      en: "Discover the best Greece tours",
      el: "Ανακάλυψε τις καλύτερες εκδρομές στην Ελλάδα",
    },
    toursText: {
      en: "Explore curated tour ideas in Kefalonia, Lesvos and Crete with local experiences, island highlights and easy travel inspiration.",
      el: "Ανακάλυψε επιλεγμένες προτάσεις για εκδρομές στην Κεφαλονιά, τη Λέσβο και την Κρήτη, με τοπικές εμπειρίες, κορυφαία σημεία και έμπνευση για το ταξίδι σου.",
    },

    foodEyebrow: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
    foodTitle: {
      en: "Taste Greece through local food and drinks",
      el: "Γνώρισε την Ελλάδα μέσα από το τοπικό φαγητό και ποτό",
    },
    foodText: {
      en: "Food and drink suggestions now lead to separate pages with more travel-style presentation.",
      el: "Οι προτάσεις για φαγητό και ποτό οδηγούν πλέον σε ξεχωριστές σελίδες με πιο travel-style παρουσίαση.",
    },

    communitiesEyebrow: { en: "Travel to Greece", el: "Ταξίδι στην Ελλάδα" },
    communitiesTitle: {
      en: "Facebook travel forums and communities",
      el: "Facebook travel forums και κοινότητες",
    },
    communitiesText: {
      en: "A dedicated hub for all the Facebook travel forums you will create for islands, cities and holiday regions across Greece.",
      el: "Ένα ξεχωριστό hub για όλα τα Facebook travel forums που θα δημιουργήσεις για νησιά, πόλεις και τουριστικές περιοχές της Ελλάδας.",
    },

    footerText: {
      en: "GoGreeceNow — destinations, travel info, hotels, tours, food and local communities.",
      el: "GoGreeceNow — προορισμοί, ταξιδιωτικές πληροφορίες, ξενοδοχεία, εκδρομές, φαγητό και τοπικές κοινότητες.",
    },

    ctaAd: {
      en: "Advertise your business",
      el: "Διαφήμισε την επιχείρησή σου",
    },
    readMore: { en: "Read more →", el: "Περισσότερα →" },
    openForum: { en: "Open forum →", el: "Άνοιγμα forum →" },
    viewGuide: { en: "View guide →", el: "Δες τον οδηγό →" },
    viewHotels: { en: "View hotel →", el: "Δες το ξενοδοχείο →" },
    viewTour: { en: "View tour →", el: "Δες την εκδρομή →" },
    discoverFood: { en: "Discover more →", el: "Ανακάλυψε περισσότερα →" },
    footerAbout: { en: "About", el: "Σχετικά" },
    footerContact: { en: "Contact", el: "Επικοινωνία" },
    footerPrivacy: { en: "Privacy", el: "Απόρρητο" },
  };

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
  { label: { en: "Destinations", el: "Προορισμοί" }, href: "#destinations", external: false },
  { label: { en: "Travel Info", el: "Travel Info" }, href: withLang("/travel-info"), external: true },
  { label: { en: "Hotels", el: "Ξενοδοχεία" }, href: "#hotels", external: false },
  { label: { en: "Tours", el: "Εκδρομές" }, href: "#tours", external: false },
  { label: { en: "Food", el: "Φαγητό" }, href: "#food", external: false },
];

  const startCards = [
    {
      icon: "🏝️",
      title: {
        en: "Choose a destination",
        el: "Διάλεξε προορισμό",
      },
      description: {
        en: "Start with islands, cities and holiday spots across Greece.",
        el: "Ξεκίνα με νησιά, πόλεις και ταξιδιωτικούς προορισμούς σε όλη την Ελλάδα.",
      },
      href: "#destinations",
    },
    {
      icon: "🧭",
      title: {
        en: "Solve the practical stuff",
        el: "Λύσε τα πρακτικά",
      },
      description: {
        en: "Find useful guidance for planning, transport and timing.",
        el: "Βρες χρήσιμες πληροφορίες για οργάνωση, μετακίνηση και σωστό timing.",
      },
      href: withLang("/travel-info"),
    },
    {
      icon: "🏨",
      title: {
        en: "Browse stays",
        el: "Δες διαμονή",
      },
      description: {
        en: "Move from inspiration to actual stay options and subpages.",
        el: "Πέρασε από την έμπνευση σε πραγματικές επιλογές διαμονής και υποσελίδες.",
      },
      href: "#hotels",
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
      href: "#tours",
    },
  ];

  const featuredCollections = [
  {
    title: {
      en: "Island Escapes",
      el: "Νησιωτικές Αποδράσεις",
    },
    description: {
      en: "Browse island inspiration, coastal scenery and easy summer planning ideas.",
      el: "Ανακάλυψε νησιωκή έμπνευση, παραθαλάσσια τοπία και ιδέες για καλοκαιρινό planning.",
    },
    href: "#destinations",
    image: destinations[0]?.image || "/images/hero-greece.jpg",
    eyebrow: {
      en: "Featured Collection",
      el: "Προτεινόμενη Συλλογή",
    },
    tags: {
      en: ["Islands", "Beaches", "Summer"],
      el: ["Νησιά", "Παραλίες", "Καλοκαίρι"],
    },
  },
  {
    title: {
      en: "Plan Before You Go",
      el: "Οργάνωσε πριν ταξιδέψεις",
    },
    description: {
      en: "Find the useful travel info first, so the rest of the trip becomes easier.",
      el: "Βρες πρώτα τις βασικές ταξιδιωτικές πληροφορίες για να γίνει όλο το ταξίδι πιο εύκολο.",
    },
    href: "#travel-info",
    image: travelInfoGuides[0]?.image || "/images/hero-greece.jpg",
    eyebrow: {
      en: "Practical Greece",
      el: "Χρήσιμη Ελλάδα",
    },
    tags: {
      en: ["Transport", "Timing", "Travel Tips"],
      el: ["Μετακίνηση", "Timing", "Travel Tips"],
    },
  },
  {
    title: {
      en: "Sea, Tours & Experiences",
      el: "Θάλασσα, Εκδρομές & Εμπειρίες",
    },
    description: {
      en: "Move from sightseeing into memorable activities, routes and day trips.",
      el: "Πέρασε από την απλή περιήγηση σε δραστηριότητες, διαδρομές και ημερήσιες εκδρομές.",
    },
    href: "#tours",
    image: tours[0]?.image || "/images/hero-greece.jpg",
    eyebrow: {
      en: "Curated Ideas",
      el: "Επιλεγμένες Ιδέες",
    },
    tags: {
      en: ["Boat Trips", "Experiences", "Highlights"],
      el: ["Boat Trips", "Εμπειρίες", "Highlights"],
    },
  },
  {
    title: {
      en: "Taste Local Greece",
      el: "Γεύσεις της Τοπικής Ελλάδας",
    },
    description: {
      en: "Discover local flavors, regional food ideas and travel inspiration through cuisine.",
      el: "Ανακάλυψε τοπικές γεύσεις, regional food ideas και travel έμπνευση μέσα από την κουζίνα.",
    },
    href: "#food",
    image: food[0]?.image || "/images/hero-greece.jpg",
    eyebrow: {
      en: "Eat & Drink",
      el: "Φαγητό & Ποτό",
    },
    tags: {
      en: ["Local Food", "Wine", "Traditions"],
      el: ["Τοπική Κουζίνα", "Κρασί", "Παράδοση"],
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
      en: "A strong starting point for travelers looking for scenery, atmosphere and a complete guide.",
      el: "Μια δυνατή αφετηρία για ταξιδιώτες που ψάχνουν τοπίο, ατμόσφαιρα και έναν ολοκληρωμένο οδηγό.",
    },
    tags: {
      en: ["Travel Guide", "Highlights", "Local Tips"],
      el: ["Travel Guide", "Highlights", "Τοπικά Tips"],
    },
  },
  {
    eyebrow: {
      en: "Popular Pick",
      el: "Δημοφιλής Επιλογή",
    },
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
    eyebrow: {
      en: "Travel Inspiration",
      el: "Ταξιδιωτική Έμπνευση",
    },
    summary: {
      en: "Built for travelers who want a cleaner overview before diving into details.",
      el: "Φτιαγμένο για ταξιδιώτες που θέλουν μια καθαρή εικόνα πριν μπουν στις λεπτομέρειες.",
    },
    tags: {
      en: ["Overview", "Planning", "Guide"],
      el: ["Overview", "Planning", "Guide"],
    },
  },
  {
    eyebrow: {
      en: "Editorial Guide",
      el: "Editorial Οδηγός",
    },
    summary: {
      en: "A more curated destination entry with useful structure and fast scanning.",
      el: "Μια πιο curated είσοδος σε προορισμό με χρήσιμη δομή και γρήγορο scanning.",
    },
    tags: {
      en: ["Curated", "Easy Read", "Essentials"],
      el: ["Curated", "Easy Read", "Essentials"],
    },
  },
];

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/images/hero-greece.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.96,
    }}
  />
  <div className="absolute inset-0 bg-sky-900/8" />

  <div className="relative mx-auto grid min-h-[700px] max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
    <div className="border border-white/60 bg-white/72 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.10)] backdrop-blur-sm md:p-8">
      <span className="inline-flex border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
        {t.heroBadge[lang]}
      </span>

      <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
        {t.heroTitle[lang]}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
        {t.heroText[lang]}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {quickFacts.map((fact) => (
          <div
            key={`${fact.value}-${fact.label.en}`}
            className="border border-slate-200 bg-white/78 px-4 py-4"
          >
            <div className="text-2xl font-bold leading-none text-slate-900">
              {fact.value}
            </div>
            <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {fact.label[lang]}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#destinations"
          className="bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
        >
          {t.heroPrimary[lang]}
        </a>

        <Link
  href={withLang("/travel-info")}
  className="border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
>
  {t.heroSecondary[lang]}
</Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {heroJumpLinks.map((item) =>
  item.external ? (
    <Link
      key={item.href}
      href={item.href}
      className="border border-slate-300 bg-white/88 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
    >
      {item.label[lang]}
    </Link>
  ) : (
    <a
      key={item.href}
      href={item.href}
      className="border border-slate-300 bg-white/88 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
    >
      {item.label[lang]}
    </a>
  )
)}
      </div>
    </div>

    <div className="border border-white/60 bg-white/72 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.10)] backdrop-blur-sm md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
        {t.heroPanelEyebrow[lang]}
      </p>

      <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
        {t.heroPanelTitle[lang]}
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {categories.map((item) => (
          <article
            key={item.title.en}
            className="border border-slate-200 bg-white/82 p-5"
          >
            <div className="text-3xl">{item.emoji}</div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {item.title[lang]}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description[lang]}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm leading-7 text-slate-700">
          {lang === "en"
            ? "A better homepage should feel like the central gateway of your Greece travel portal, not just a simple landing page."
            : "Μια καλύτερη αρχική πρέπει να λειτουργεί σαν η κεντρική πύλη του Greece travel portal σου και όχι σαν μια απλή landing page."}
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="relative z-10 -mt-10 pb-8">
  <div className="mx-auto max-w-7xl px-6">
    <div className="border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] md:p-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            {t.startPlanningEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {t.startPlanningTitle[lang]}
          </h2>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-600">
          {t.startPlanningText[lang]}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {startCards.map((item) => (
          <a
            key={item.title.en}
            href={item.href}
            className="group border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center bg-sky-100 text-2xl">
              {item.icon}
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              {item.title[lang]}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.description[lang]}
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-sky-800 transition group-hover:text-sky-950">
              {lang === "en" ? "Go there →" : "Πήγαινε εκεί →"}
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="mx-auto max-w-7xl px-6 py-12">
  <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
        {lang === "en" ? "Featured Greece Collections" : "Επιλεγμένες Συλλογές Ελλάδας"}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        {lang === "en"
          ? "Explore Greece through stronger travel themes"
          : "Ανακάλυψε την Ελλάδα μέσα από πιο δυνατές ταξιδιωτικές θεματικές"}
      </h2>
    </div>

    <p className="max-w-3xl text-sm leading-6 text-slate-600">
      {lang === "en"
        ? "This section makes the homepage feel more magnetic and more curated, giving people an easier path into the portal."
        : "Αυτό το section κάνει την αρχική πιο μαγνητική και πιο curated, δίνοντας στον επισκέπτη πιο εύκολη είσοδο στο portal."}
    </p>
  </div>

  <div className="grid gap-5 lg:grid-cols-2">
    {featuredCollections.map((item) => (
      <a
        key={item.title.en}
        href={item.href}
        className="group relative overflow-hidden border border-slate-200 bg-slate-900 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url('${item.image}')` }}
        />
        <div className="absolute inset-0 bg-slate-950/38" />

        <div className="relative p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            {item.eyebrow[lang]}
          </p>

          <h3 className="mt-3 max-w-xl text-2xl font-bold leading-tight md:text-3xl">
            {item.title[lang]}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/88">
            {item.description[lang]}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags[lang].map((tag) => (
              <span
                key={tag}
                className="border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="mt-6 inline-block bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition group-hover:bg-slate-100">
            {lang === "en" ? "Explore collection →" : "Δες τη συλλογή →"}
          </span>
        </div>
      </a>
    ))}
  </div>
</section>

      <section
  id="destinations"
  className="scroll-mt-28 mx-auto max-w-7xl px-6 py-16"
>
  <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
        {t.destinationEyebrow[lang]}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {t.destinationTitle[lang]}
      </h2>
    </div>

    <p className="max-w-3xl text-sm leading-6 text-slate-600">
      {t.destinationText[lang]}
    </p>
  </div>

  <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
    {destinations[0] ? (
      <article className="group relative overflow-hidden border border-slate-200 bg-slate-900 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
          style={{ backgroundImage: `url('${destinations[0].image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.72))]" />

        <div className="relative flex min-h-[520px] flex-col justify-end p-7 md:p-9">
          <div className="max-w-2xl">
            <span className="inline-flex border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
              {destinationCardMeta[0].eyebrow[lang]}
            </span>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-bold tracking-tight md:text-5xl">
                {destinations[0].name}
              </h3>

              <span className="border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                {destinations[0].region[lang]}
              </span>
            </div>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/90 md:text-lg">
              {destinations[0].blurb[lang]}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
              {destinationCardMeta[0].summary[lang]}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {destinationCardMeta[0].tags[lang].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={withLang(`/destinations/${destinations[0].slug}`)}
              className="mt-7 inline-flex bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {t.viewGuide[lang]}
            </Link>
          </div>
        </div>
      </article>
    ) : null}

    <div className="grid gap-6">
      {destinations.slice(1).map((item, index) => {
        const meta = destinationCardMeta[(index + 1) % destinationCardMeta.length];

        return (
          <article
            key={item.slug}
            className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid md:grid-cols-[220px_1fr]">
              <div
                className="min-h-[220px] bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              <div className="p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-800">
                    {meta.eyebrow[lang]}
                  </span>

                  <span className="border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {item.region[lang]}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.blurb[lang]}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {meta.summary[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {meta.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={withLang(`/destinations/${item.slug}`)}
                  className="mt-6 inline-flex bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {t.viewGuide[lang]}
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>

      <section
  id="travel-info"
  className="scroll-mt-28 bg-white py-14"
>
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="border border-slate-200 bg-slate-50 p-7 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          {t.travelHubEyebrow[lang]}
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {t.travelHubTitle[lang]}
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          {t.travelHubText[lang]}
        </p>

        <Link
          href={withLang("/travel-info")}
          className="mt-6 inline-flex bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {t.travelHubCta[lang]}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-3xl">✈️</div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            {t.travelMini1Title[lang]}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {t.travelMini1Text[lang]}
          </p>
        </article>

        <article className="border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-3xl">🗓️</div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            {t.travelMini2Title[lang]}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {t.travelMini2Text[lang]}
          </p>
        </article>

        <article className="border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-3xl">🧭</div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            {t.travelMini3Title[lang]}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {t.travelMini3Text[lang]}
          </p>
        </article>
      </div>
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
                🏨 {t.hotelsEyebrow[lang]}
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {t.hotelsTitle[lang]}
              </h2>

              <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-amber-500 to-orange-400" />

              <p className="mt-4 max-w-3xl rounded-xl border border-amber-100 bg-white/80 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
                {t.hotelsText[lang]}
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-sm lg:max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Sponsored
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {lang === "en"
                  ? "Promote your hotel or travel business"
                  : "Πρόβαλε το ξενοδοχείο ή το travel business σου"}
              </h3>
              <button className="mt-4 rounded-md bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600">
                {t.ctaAd[lang]}
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {hotels.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-br from-white via-amber-50/70 to-orange-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="relative h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1606]/35 via-transparent to-transparent" />

                  {item.badge ? (
                    <span className="absolute left-4 top-4 rounded-md bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      {item.badge}
                    </span>
                  ) : null}

                  <span className="absolute right-4 top-4 rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-amber-800 backdrop-blur">
                    {lang === "en" ? "Stay" : "Διαμονή"}
                  </span>
                </div>

                <div className="p-6">
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
                      <h3 className="mt-1 text-xl font-semibold">{item.name}</h3>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                      {item.place}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.info[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.features[lang].slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md border border-amber-100 bg-white px-3 py-1 text-xs font-medium text-amber-900"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/hotels/${item.slug}`)}
                    className="mt-6 inline-flex rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                  >
                    {t.viewHotels[lang]}
                  </Link>
                </div>
              </article>
            ))}
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
                ⚓ {t.toursEyebrow[lang]}
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {t.toursTitle[lang]}
              </h2>

              <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-cyan-500 to-sky-500" />
            </div>

            <p className="max-w-3xl rounded-xl border border-cyan-100 bg-white/80 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
              {t.toursText[lang]}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tours.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-xl border border-cyan-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-md bg-cyan-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
                      {lang === "en" ? "Experiences" : "Εμπειρίες"}
                    </span>
                    <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-cyan-800 backdrop-blur">
                      {item.place}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-2xl">
                      ⚓
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                        {lang === "en"
                          ? "Local tours & activities"
                          : "Τοπικές εκδρομές & δραστηριότητες"}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold leading-snug">
                        {item.title[lang]}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.info[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights[lang].slice(0, 3).map((point) => (
                      <span
                        key={point}
                        className="rounded-md border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-900"
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/tours/${item.slug}`)}
                    className="mt-6 inline-flex rounded-md bg-cyan-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800"
                  >
                    {t.viewTour[lang]}
                  </Link>
                </div>
              </article>
            ))}
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
              🍷 {t.foodEyebrow[lang]}
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {t.foodTitle[lang]}
            </h2>

            <div className="mt-4 h-1 w-24 rounded-md bg-gradient-to-r from-orange-500 to-amber-400" />

            <p className="mt-4 max-w-3xl rounded-xl border border-orange-100 bg-white/85 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
              {t.foodText[lang]}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {food.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-xl border border-orange-200 bg-gradient-to-br from-white via-orange-50/80 to-amber-100/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a2207]/35 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-md bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
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

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.info[lang]}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.specialties[lang].slice(0, 3).map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-md border border-orange-100 bg-white px-3 py-1 text-xs font-medium text-orange-900"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/eat-drink/${item.slug}`)}
                    className="mt-6 inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    {t.discoverFood[lang]}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-hidden rounded-xl bg-gradient-to-r from-sky-800 via-cyan-700 to-emerald-500 p-8 text-white shadow-xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            {t.communitiesEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {t.communitiesTitle[lang]}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
            {t.communitiesText[lang]}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {communities.map((item) => (
              <article
                key={item.title.en}
                className="rounded-xl bg-white/12 p-6 backdrop-blur-md"
              >
                <div className="text-3xl">🌴</div>
                <h3 className="mt-4 text-xl font-semibold">
                  {item.title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/90">
                  {item.description[lang]}
                </p>

                {isExternalUrl(item.href) ? (
                  <a
                    href={item.href}
                    className="mt-5 inline-block text-sm font-semibold text-white hover:text-cyan-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.openForum[lang]}
                  </a>
                ) : (
                  <Link
                    href={withLang(item.href)}
                    className="mt-5 inline-block text-sm font-semibold text-white hover:text-cyan-100"
                  >
                    {t.openForum[lang]}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

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