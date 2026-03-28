"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Lang = "en" | "el";

type Localized = {
  en: string;
  el: string;
};

type Category = {
  title: Localized;
  description: Localized;
  emoji: string;
};

type Destination = {
  name: string;
  region: Localized;
  blurb: Localized;
  image: string;
};

type GuideCard = {
  title: Localized;
  description: Localized;
  image: string;
};

type HotelCard = {
  name: string;
  place: string;
  info: Localized;
  image: string;
  badge?: string;
};

type FoodCard = {
  title: Localized;
  place: string;
  info: Localized;
  image: string;
};

type CommunityCard = {
  title: Localized;
  description: Localized;
  href: string;
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = useMemo(
    () => ({
      brandLine: {
        en: "Greece travel guide, destinations and local experiences",
        el: "Ταξιδιωτικός οδηγός Ελλάδας, προορισμοί και τοπικές εμπειρίες",
      },
      navDestinations: { en: "Destinations", el: "Προορισμοί" },
      navTravelInfo: { en: "Travel Info", el: "Travel Info" },
      navHotels: { en: "Hotels", el: "Ξενοδοχεία" },
      navEatDrink: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
      navForums: { en: "Travel to Greece", el: "Travel to Greece" },

      heroBadge: {
        en: "Travel portal • Destinations • Hotels • Food • Communities",
        el: "Travel portal • Προορισμοί • Ξενοδοχεία • Φαγητό • Κοινότητες",
      },
      heroTitle: {
        en: "Plan your trip to Greece with destinations, travel tips and authentic local ideas",
        el: "Οργάνωσε το ταξίδι σου στην Ελλάδα με προορισμούς, travel tips και αυθεντικές τοπικές προτάσεις",
      },
      heroText: {
        en: "GoGreeceNow is becoming a complete Greece travel portal with destination guides, travel information, hotels, beaches, restaurants and Facebook travel communities.",
        el: "Το GoGreeceNow εξελίσσεται σε ένα πλήρες travel portal για την Ελλάδα με οδηγούς προορισμών, ταξιδιωτικές πληροφορίες, ξενοδοχεία, παραλίες, εστιατόρια και Facebook travel communities.",
      },
      heroPrimary: { en: "Explore destinations", el: "Δες προορισμούς" },
      heroSecondary: { en: "Travel to Greece", el: "Travel to Greece" },

      destinationEyebrow: {
        en: "Top Destinations",
        el: "Δημοφιλείς Προορισμοί",
      },
      destinationTitle: {
        en: "Discover the best places in Greece",
        el: "Ανακάλυψε τα καλύτερα μέρη της Ελλάδας",
      },
      destinationText: {
        en: "Inspired by top Greece travel portals, the homepage now focuses on clear destination discovery, practical travel information and bookable-style sections.",
        el: "Με έμπνευση από κορυφαία travel portals για την Ελλάδα, η αρχική δίνει έμφαση στην εύκολη ανακάλυψη προορισμών, στις πρακτικές πληροφορίες και στις ενότητες τύπου booking guide.",
      },

      travelInfoEyebrow: { en: "Travel Info", el: "Travel Info" },
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
        en: "A stronger accommodation section gives the homepage a more travel-oriented and premium feel.",
        el: "Μια πιο δυνατή ενότητα διαμονής δίνει στην αρχική πιο τουριστικό και premium χαρακτήρα.",
      },

      foodEyebrow: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
      foodTitle: {
        en: "Taste Greece through local food and drinks",
        el: "Γνώρισε την Ελλάδα μέσα από το τοπικό φαγητό και ποτό",
      },
      foodText: {
        en: "From tavernas and seafood to sunset cocktails and local specialties.",
        el: "Από ταβέρνες και θαλασσινά μέχρι cocktails στο ηλιοβασίλεμα και τοπικές γεύσεις.",
      },

      communitiesEyebrow: { en: "Travel to Greece", el: "Travel to Greece" },
      communitiesTitle: {
        en: "Facebook travel forums and communities",
        el: "Facebook travel forums και κοινότητες",
      },
      communitiesText: {
        en: "A dedicated hub for all the Facebook travel forums you will create for islands, cities and holiday regions across Greece.",
        el: "Ένα ξεχωριστό hub για όλα τα Facebook travel forums που θα δημιουργήσετε για νησιά, πόλεις και τουριστικές περιοχές της Ελλάδας.",
      },

      footerText: {
        en: "GoGreeceNow — destinations, travel info, hotels, food and local communities.",
        el: "GoGreeceNow — προορισμοί, travel info, ξενοδοχεία, φαγητό και τοπικές κοινότητες.",
      },

      ctaAd: {
        en: "Advertise your business",
        el: "Διαφήμισε την επιχείρησή σου",
      },
      readMore: { en: "Read more →", el: "Περισσότερα →" },
      openForum: { en: "Open forum →", el: "Άνοιγμα forum →" },
      viewGuide: { en: "View guide →", el: "Δες τον οδηγό →" },
      viewHotels: { en: "View hotels →", el: "Δες ξενοδοχεία →" },
      discoverFood: { en: "Discover more →", el: "Ανακάλυψε περισσότερα →" },
    }),
    []
  );

  const categories: Category[] = [
    {
      title: { en: "Destinations", el: "Προορισμοί" },
      description: {
        en: "Travel guides for islands, mainland escapes, famous beaches and beautiful Greek towns.",
        el: "Ταξιδιωτικοί οδηγοί για νησιά, ηπειρωτικές αποδράσεις, διάσημες παραλίες και όμορφες ελληνικές πόλεις.",
      },
      emoji: "🏝️",
    },
    {
      title: { en: "Travel Info", el: "Travel Info" },
      description: {
        en: "Useful tips about ferries, airports, best time to visit, transport and practical planning.",
        el: "Χρήσιμες πληροφορίες για πλοία, αεροδρόμια, καλύτερη εποχή, μετακινήσεις και πρακτικό προγραμματισμό.",
      },
      emoji: "🧭",
    },
    {
      title: { en: "Hotels", el: "Ξενοδοχεία" },
      description: {
        en: "Curated stays, boutique hotels, family resorts and beautiful places to stay across Greece.",
        el: "Επιλεγμένα καταλύματα, boutique ξενοδοχεία, family resorts και όμορφα μέρη για διαμονή σε όλη την Ελλάδα.",
      },
      emoji: "🏨",
    },
    {
      title: { en: "Eat & Drink", el: "Φαγητό & Ποτό" },
      description: {
        en: "Restaurants, tavernas, bars and local flavors that help visitors experience Greece authentically.",
        el: "Εστιατόρια, ταβέρνες, bars και τοπικές γεύσεις που βοηθούν τον επισκέπτη να ζήσει αυθεντικά την Ελλάδα.",
      },
      emoji: "🍷",
    },
  ];

  const destinations: Destination[] = [
    {
      name: "Santorini",
      region: { en: "Cyclades", el: "Κυκλάδες" },
      blurb: {
        en: "Sunset views, caldera stays, beaches and romantic holidays.",
        el: "Ηλιοβασιλέματα, διαμονή στην καλντέρα, παραλίες και ρομαντικές αποδράσεις.",
      },
      image: "/images/santorini.jpg",
    },
    {
      name: "Mykonos",
      region: { en: "Cyclades", el: "Κυκλάδες" },
      blurb: {
        en: "Cosmopolitan vibes, beaches, nightlife and stylish hotels.",
        el: "Κοσμοπολίτικη ατμόσφαιρα, παραλίες, νυχτερινή ζωή και κομψά ξενοδοχεία.",
      },
      image: "/images/mykonos.jpg",
    },
    {
      name: "Crete",
      region: { en: "Crete", el: "Κρήτη" },
      blurb: {
        en: "Big landscapes, cuisine, history, road trips and family holidays.",
        el: "Μεγάλα τοπία, κουζίνα, ιστορία, road trips και οικογενειακές διακοπές.",
      },
      image: "/images/crete.jpg",
    },
    {
      name: "Corfu",
      region: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
      blurb: {
        en: "Green scenery, elegant town life, beaches and island charm.",
        el: "Πράσινα τοπία, αρχοντική πόλη, παραλίες και νησιώτικη γοητεία.",
      },
      image: "/images/corfu.jpg",
    },
    {
      name: "Nafplio",
      region: { en: "Peloponnese", el: "Πελοπόννησος" },
      blurb: {
        en: "Romantic old town, seaside walks and easy weekend escapes.",
        el: "Ρομανική παλιά πόλη, βόλτες δίπλα στη θάλασσα και εύκολες αποδράσεις.",
      },
      image: "/images/nafplio.jpg",
    },
    {
      name: "Thessaloniki",
      region: { en: "Northern Greece", el: "Βόρεια Ελλάδα" },
      blurb: {
        en: "Food, culture, nightlife and urban travel experiences.",
        el: "Φαγητό, πολιτισμός, νυχτερινή ζωή και αστικές ταξιδιωτικές εμπειρίες.",
      },
      image: "/images/thessaloniki.jpg",
    },
  ];

  const travelInfo: GuideCard[] = [
    {
      title: { en: "How to get to Greece", el: "Πώς να έρθεις στην Ελλάδα" },
      description: {
        en: "Flights, ferries, island hopping ideas and airport tips for first-time visitors.",
        el: "Πτήσεις, πλοία, ιδέες για island hopping και συμβουλές αεροδρομίων για νέους επισκέπτες.",
      },
      image: "/images/travel-arrival.jpg",
    },
    {
      title: { en: "Best time to visit", el: "Καλύτερη εποχή για ταξίδι" },
      description: {
        en: "When to visit Greece for beaches, sightseeing, food, sailing and quieter holidays.",
        el: "Πότε να επισκεφθείς την Ελλάδα για παραλίες, sightseeing, φαγητό, sailing και πιο ήσυχες διακοπές.",
      },
      image: "/images/travel-season.jpg",
    },
    {
      title: { en: "Getting around", el: "Μετακινήσεις στην Ελλάδα" },
      description: {
        en: "Cars, buses, ferries and local transport to move easily between regions and islands.",
        el: "Αυτοκίνητα, λεωφορεία, πλοία και τοπικές μετακινήσεις για εύκολη πρόσβαση σε περιοχές και νησιά.",
      },
      image: "/images/travel-transport.jpg",
    },
  ];

  const hotels: HotelCard[] = [
    {
      name: "Caldera Blue Suites",
      place: "Santorini",
      info: {
        en: "Elegant cave-style suites with sea views and a luxury island feeling.",
        el: "Κομψές cave-style σουίτες με θέα στη θάλασσα και luxury νησιώτικη αίσθηση.",
      },
      image: "/images/hotel-santorini.jpg",
      badge: "Featured",
    },
    {
      name: "Ionian Garden Resort",
      place: "Corfu",
      info: {
        en: "A relaxed family-friendly stay close to beaches, restaurants and green scenery.",
        el: "Χαλαρή οικογενειακή διαμονή κοντά σε παραλίες, εστιατόρια και πράσινα τοπία.",
      },
      image: "/images/hotel-corfu.jpg",
      badge: "Sponsored",
    },
    {
      name: "Old Town Boutique House",
      place: "Nafplio",
      info: {
        en: "Boutique accommodation for romantic city breaks and stylish weekends.",
        el: "Boutique διαμονή για ρομαντικά city breaks και κομψά Σαββατοκύριακα.",
      },
      image: "/images/hotel-nafplio.jpg",
      badge: "Top pick",
    },
  ];

  const food: FoodCard[] = [
    {
      title: { en: "Seafood by the harbor", el: "Θαλασσινά δίπλα στο λιμάνι" },
      place: "Nafplio",
      info: {
        en: "Fresh fish, local meze and a classic seaside Greek dining experience.",
        el: "Φρέσκο ψάρι, τοπικοί μεζέδες και μια κλασική παραθαλάσσια ελληνική εμπειρία φαγητού.",
      },
      image: "/images/food-nafplio.jpg",
    },
    {
      title: {
        en: "Sunset cocktails & dinner",
        el: "Cocktails και δείπνο στο ηλιοβασίλεμα",
      },
      place: "Santorini",
      info: {
        en: "A more premium side of Greece with views, drinks and memorable evenings.",
        el: "Μια πιο premium πλευρά της Ελλάδας με θέα, ποτά και αξέχαστα βράδια.",
      },
      image: "/images/food-santorini.jpg",
    },
    {
      title: {
        en: "Traditional tavern flavors",
        el: "Γεύσεις παραδοσιακής ταβέρνας",
      },
      place: "Crete",
      info: {
        en: "Simple authentic food, local ingredients and warm Greek hospitality.",
        el: "Απλό αυθεντικό φαγητό, τοπικά προϊόντα και ζεστή ελληνική φιλοξενία.",
      },
      image: "/images/food-crete.jpg",
    },
  ];

  const communities: CommunityCard[] = [
    {
      title: { en: "Forum Greece", el: "Forum Greece" },
      description: {
        en: "The central Facebook community for Greece travel ideas, questions and recommendations.",
        el: "Η κεντρική Facebook κοινότητα για ταξιδιωτικές ιδέες, ερωτήσεις και προτάσεις για την Ελλάδα.",
      },
      href: "/travel-to-greece",
    },
    {
      title: { en: "Forum Santorini", el: "Forum Santorini" },
      description: {
        en: "A dedicated travel forum for Santorini holidays, tips, hotels and beaches.",
        el: "Ένα ξεχωριστό travel forum για διακοπές στη Σαντορίνη, tips, ξενοδοχεία και παραλίες.",
      },
      href: "/travel-to-greece",
    },
    {
      title: { en: "Forum Corfu", el: "Forum Corfu" },
      description: {
        en: "A place for Corfu travel discussions, local ideas and useful visitor recommendations.",
        el: "Ένας χώρος για ταξιδιωτικές συζητήσεις για την Κέρκυρα, τοπικές ιδέες και χρήσιμες προτάσεις.",
      },
      href: "/travel-to-greece",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <section className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <div>
            <div className="text-2xl font-bold tracking-tight text-sky-900">
              GoGreeceNow
            </div>
            <div className="text-sm text-slate-500">{t.brandLine[lang]}</div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-slate-700 lg:flex">
            <a href="#destinations" className="hover:text-sky-700">
              {t.navDestinations[lang]}
            </a>
            <a href="#travel-info" className="hover:text-sky-700">
              {t.navTravelInfo[lang]}
            </a>
            <a href="#hotels" className="hover:text-sky-700">
              {t.navHotels[lang]}
            </a>
            <a href="#food" className="hover:text-sky-700">
              {t.navEatDrink[lang]}
            </a>
            <Link href="/travel-to-greece" className="hover:text-sky-700">
              {t.navForums[lang]}
            </Link>
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

      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7,24,44,0.82) 0%, rgba(7,24,44,0.55) 45%, rgba(7,24,44,0.25) 100%), url('/images/hero-greece.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid min-h-[640px] max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              {t.heroBadge[lang]}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {t.heroTitle[lang]}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              {t.heroText[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#destinations"
                className="rounded-full bg-white px-6 py-3 font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5"
              >
                {t.heroPrimary[lang]}
              </a>
              <Link
                href="/travel-to-greece"
                className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {t.heroSecondary[lang]}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((item) => (
              <article
                key={item.title.en}
                className="rounded-3xl bg-white/16 p-6 backdrop-blur-md shadow-lg"
              >
                <div className="text-3xl">{item.emoji}</div>
                <h3 className="mt-4 text-xl font-semibold">
                  {item.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  {item.description[lang]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              {t.destinationEyebrow[lang]}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {t.destinationTitle[lang]}
            </h2>
          </div>
          <p className="max-w-3xl text-sm leading-6 text-slate-600">
            {t.destinationText[lang]}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                    {item.region[lang]}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.blurb[lang]}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950"
                >
                  {t.viewGuide[lang]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="travel-info" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              {t.travelInfoEyebrow[lang]}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {t.travelInfoTitle[lang]}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {t.travelInfoText[lang]}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {travelInfo.map((item) => (
              <article
                key={item.title.en}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-sm transition hover:shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="p-6">
                  <div className="text-3xl">🧳</div>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.description[lang]}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950"
                  >
                    {t.readMore[lang]}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hotels" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              {t.hotelsEyebrow[lang]}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {t.hotelsTitle[lang]}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {t.hotelsText[lang]}
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-sm lg:max-w-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Sponsored
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {lang === "en"
                ? "Promote your hotel or travel business"
                : "Πρόβαλε το ξενοδοχείο ή το travel business σου"}
            </h3>
            <button className="mt-4 rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600">
              {t.ctaAd[lang]}
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {hotels.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div
                className="relative h-52 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                {item.badge ? (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {item.badge}
                  </span>
                ) : null}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {item.place}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.info[lang]}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950"
                >
                  {t.viewHotels[lang]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="food" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              {t.foodEyebrow[lang]}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {t.foodTitle[lang]}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {t.foodText[lang]}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {food.map((item) => (
              <article
                key={item.title.en}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-amber-50 shadow-sm transition hover:shadow-lg"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-3xl">🍴</div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                      {item.place}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.info[lang]}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950"
                  >
                    {t.discoverFood[lang]}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-800 via-cyan-700 to-emerald-500 p-8 text-white shadow-xl md:p-10">
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
                className="rounded-3xl bg-white/12 p-6 backdrop-blur-md"
              >
                <div className="text-3xl">🌴</div>
                <h3 className="mt-4 text-xl font-semibold">
                  {item.title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/90">
                  {item.description[lang]}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-block text-sm font-semibold text-white hover:text-cyan-100"
                >
                  {t.openForum[lang]}
                </Link>
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
              About
            </a>
            <a href="#" className="hover:text-slate-800">
              Contact
            </a>
            <a href="#" className="hover:text-slate-800">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}