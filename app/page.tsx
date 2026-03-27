"use client";

import Link from "next/link";
import { useState } from "react";

type Lang = "en" | "el";

type CardItem = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  href?: string;
  badge?: string;
};

type FeatureTile = {
  title: string;
  description: string;
};

type TextBundle = {
  brandTagline: string;
  nav: string[];
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimary: string;
  heroSecondary: string;
  sectionLabels: {
    collections: string;
    destinations: string;
    travelInfo: string;
    hotels: string;
    eatDrink: string;
    community: string;
  };
  sectionTitles: {
    collections: string;
    destinations: string;
    travelInfo: string;
    hotels: string;
    eatDrink: string;
    community: string;
  };
  sectionDescriptions: {
    collections: string;
    destinations: string;
    travelInfo: string;
    hotels: string;
    eatDrink: string;
    community: string;
  };
  featureTiles: FeatureTile[];
  destinations: CardItem[];
  travelInfo: CardItem[];
  hotels: CardItem[];
  eatDrink: CardItem[];
  communities: CardItem[];
  footer: {
    description: string;
    links: string[];
  };
  discoverMoreLabel: string;
  openPageLabel: string;
};

const content: Record<Lang, TextBundle> = {
  en: {
    brandTagline: "Greece travel guide, destinations and communities",
    nav: ["Destinations", "Travel Info", "Hotels", "Eat & Drink", "Communities"],
    heroBadge: "Destinations • Travel Info • Hotels • Eat & Drink",
    heroTitle: "Explore Greece with a modern travel-guide style",
    heroDescription:
      "ForumGreece becomes a modern Greece travel portal with destination inspiration, practical travel tips, hotel suggestions, food guides and travel communities.",
    heroPrimary: "Explore Destinations",
    heroSecondary: "Travel to Greece",
    sectionLabels: {
      collections: "Main sections",
      destinations: "Destinations",
      travelInfo: "Travel Info",
      hotels: "Hotels",
      eatDrink: "Eat & Drink",
      community: "Travel to Greece",
    },
    sectionTitles: {
      collections: "A structure closer to a premium Greece travel portal",
      destinations: "Popular destinations in Greece",
      travelInfo: "Useful travel info before you go",
      hotels: "Suggested hotel collections",
      eatDrink: "Where to eat and drink",
      community: "Travel forums and Facebook communities",
    },
    sectionDescriptions: {
      collections:
        "The homepage is organized around the travel mindset you asked for: destination discovery, practical planning, accommodation, food and community.",
      destinations:
        "Each destination can later open into beaches, things to do, hotels, restaurants and local tips.",
      travelInfo:
        "These cards work as entry points for transport, island hopping, family travel, maps and practical planning.",
      hotels:
        "A dedicated accommodation section gives the site a stronger tourism identity and opens the door for sponsored listings.",
      eatDrink:
        "Food and nightlife content gives the portal a warmer and more lifestyle-driven feeling.",
      community:
        "This section can lead to your Facebook forums, destination groups and future community pages.",
    },
    featureTiles: [
      {
        title: "Destinations",
        description: "Islands, mainland, cities and beach escapes",
      },
      {
        title: "Travel Info",
        description: "Ferries, airports, transport and planning tips",
      },
      {
        title: "Hotels",
        description: "Accommodation suggestions and premium listings",
      },
      {
        title: "Eat & Drink",
        description: "Restaurants, tavernas, bars and local flavors",
      },
    ],
    destinations: [
      {
        title: "Santorini",
        subtitle: "Cyclades",
        description:
          "Volcanic views, iconic villages, sunset spots and romantic stays.",
        image: "/images/santorini.jpg",
      },
      {
        title: "Crete",
        subtitle: "Greek Islands",
        description:
          "Big landscapes, beaches, food culture and unforgettable road trips.",
        image: "/images/crete.jpg",
      },
      {
        title: "Corfu",
        subtitle: "Ionian Islands",
        description:
          "Elegant old town, green scenery, beaches and family-friendly escapes.",
        image: "/images/corfu.jpg",
      },
      {
        title: "Nafplio",
        subtitle: "Mainland Greece",
        description:
          "Weekend breaks, seaside walks, history and atmospheric dining.",
        image: "/images/nafplio.jpg",
      },
    ],
    travelInfo: [
      {
        title: "How to Travel Around Greece",
        description:
          "Flights, ferries, buses, car rental and island-hopping ideas.",
        image: "/images/ferries.jpg",
      },
      {
        title: "Best Time to Visit",
        description:
          "Seasonal tips for summer islands, spring escapes and autumn road trips.",
        image: "/images/seasons.jpg",
      },
      {
        title: "Family Travel Tips",
        description:
          "Ideas for parents, calmer beaches, kid-friendly stays and easy routes.",
        image: "/images/family.jpg",
      },
      {
        title: "Maps & Local Planning",
        description:
          "How to organize beaches, attractions, day trips and local experiences.",
        image: "/images/map.jpg",
      },
    ],
    hotels: [
      {
        title: "Boutique Hotels",
        description:
          "Stylish stays for couples, city breaks and romantic island holidays.",
        image: "/images/hotel-boutique.jpg",
        badge: "Featured",
      },
      {
        title: "Family Resorts",
        description:
          "Comfortable stays with pools, beach access and easy family planning.",
        image: "/images/hotel-family.jpg",
        badge: "Sponsored",
      },
      {
        title: "Seaside Villas",
        description:
          "Private space, sea views and premium summer accommodation ideas.",
        image: "/images/hotel-villa.jpg",
        badge: "Top pick",
      },
    ],
    eatDrink: [
      {
        title: "Traditional Taverns",
        description:
          "Authentic Greek food, local recipes and warm village atmosphere.",
        image: "/images/taverna.jpg",
      },
      {
        title: "Beach Bars",
        description:
          "Sunset cocktails, coastal views and summer island energy.",
        image: "/images/beach-bar.jpg",
      },
      {
        title: "Food Experiences",
        description:
          "Greek breakfast, wine tasting, seafood spots and local desserts.",
        image: "/images/food.jpg",
      },
    ],
    communities: [
      {
        title: "Travel to Greece",
        description:
          "The main page with all your Facebook destination forums and travel groups.",
        image: "/images/community-main.jpg",
        href: "/travel-to-greece",
      },
      {
        title: "Island Forums",
        description:
          "Separate groups for Santorini, Corfu, Crete, Lefkada and more.",
        image: "/images/community-islands.jpg",
        href: "/travel-to-greece",
      },
      {
        title: "City & Food Communities",
        description:
          "Groups for city breaks, restaurants, local tips and hidden gems.",
        image: "/images/community-city.jpg",
        href: "/travel-to-greece",
      },
    ],
    footer: {
      description:
        "a bilingual Greece travel portal with destinations, hotels, food guides and communities.",
      links: ["About", "Contact", "Privacy"],
    },
    discoverMoreLabel: "Discover more →",
    openPageLabel: "Open page →",
  },

  el: {
    brandTagline: "Ταξιδιωτικός οδηγός Ελλάδας, προορισμοί και κοινότητες",
    nav: ["Προορισμοί", "Travel Info", "Ξενοδοχεία", "Φαγητό & Ποτό", "Κοινότητες"],
    heroBadge: "Προορισμοί • Travel Info • Ξενοδοχεία • Φαγητό & Ποτό",
    heroTitle: "Ανακάλυψε την Ελλάδα με πιο σύγχρονη travel-guide αισθητική",
    heroDescription:
      "Το ForumGreece γίνεται ένα μοντέρνο portal για την Ελλάδα με προορισμούς, πρακτικές ταξιδιωτικές πληροφορίες, προτάσεις ξενοδοχείων, γευστικούς οδηγούς και ταξιδιωτικές κοινότητες.",
    heroPrimary: "Δες τους προορισμούς",
    heroSecondary: "Travel to Greece",
    sectionLabels: {
      collections: "Κύριες ενότητες",
      destinations: "Προορισμοί",
      travelInfo: "Travel Info",
      hotels: "Ξενοδοχεία",
      eatDrink: "Φαγητό & Ποτό",
      community: "Travel to Greece",
    },
    sectionTitles: {
      collections: "Δομή πιο κοντά σε premium ταξιδιωτικό portal για την Ελλάδα",
      destinations: "Δημοφιλείς προορισμοί στην Ελλάδα",
      travelInfo: "Χρήσιμες ταξιδιωτικές πληροφορίες πριν φύγεις",
      hotels: "Προτεινόμενες κατηγορίες διαμονής",
      eatDrink: "Πού να φας και να πιεις",
      community: "Travel forums και Facebook κοινότητες",
    },
    sectionDescriptions: {
      collections:
        "Η αρχική σελίδα οργανώνεται πλέον με λογική travel portal: ανακάλυψη προορισμών, σωστός προγραμματισμός, διαμονή, φαγητό και κοινότητα.",
      destinations:
        "Κάθε προορισμός μπορεί αργότερα να ανοίγει σε παραλίες, αξιοθέατα, ξενοδοχεία, εστιατόρια και τοπικά tips.",
      travelInfo:
        "Αυτές οι κάρτες λειτουργούν ως είσοδοι για μετακινήσεις, ακτοπλοϊκά, οικογενειακά ταξίδια, χάρτες και πρακτικό planning.",
      hotels:
        "Μια ξεχωριστή ενότητα διαμονής δίνει πιο τουριστικό χαρακτήρα και ανοίγει χώρο για premium καταχωρήσεις.",
      eatDrink:
        "Το περιεχόμενο φαγητού και εξόδου κάνει το portal πιο ζεστό, πιο lifestyle και πιο ελκυστικό.",
      community:
        "Αυτή η ενότητα μπορεί να οδηγεί στα Facebook forums, στις destination ομάδες και στις μελλοντικές community σελίδες σου.",
    },
    featureTiles: [
      {
        title: "Προορισμοί",
        description:
          "Νησιά, ηπειρωτική Ελλάδα, πόλεις και παραθαλάσσιες αποδράσεις",
      },
      {
        title: "Travel Info",
        description: "Πλοία, αεροδρόμια, μετακινήσεις και χρήσιμες συμβουλές",
      },
      {
        title: "Ξενοδοχεία",
        description: "Προτάσεις διαμονής και premium προβολές",
      },
      {
        title: "Φαγητό & Ποτό",
        description: "Εστιατόρια, ταβέρνες, bars και τοπικές γεύσεις",
      },
    ],
    destinations: [
      {
        title: "Σαντορίνη",
        subtitle: "Κυκλάδες",
        description:
          "Ηφαιστειακά τοπία, εμβληματικά χωριά, sunset σημεία και ρομαντική διαμονή.",
        image: "/images/santorini.jpg",
      },
      {
        title: "Κρήτη",
        subtitle: "Ελληνικά νησιά",
        description:
          "Μεγάλα τοπία, παραλίες, δυνατή γαστρονομία και αξέχαστες διαδρομές.",
        image: "/images/crete.jpg",
      },
      {
        title: "Κέρκυρα",
        subtitle: "Ιόνιο",
        description:
          "Αριστοκρατική παλιά πόλη, πράσινο τοπίο, παραλίες και οικογενειακές αποδράσεις.",
        image: "/images/corfu.jpg",
      },
      {
        title: "Ναύπλιο",
        subtitle: "Ηπειρωτική Ελλάδα",
        description:
          "Weekend αποδράσεις, βόλτες δίπλα στη θάλασσα, ιστορία και όμορφο φαγητό.",
        image: "/images/nafplio.jpg",
      },
    ],
    travelInfo: [
      {
        title: "Πώς να ταξιδέψεις στην Ελλάδα",
        description:
          "Αεροπλάνα, πλοία, λεωφορεία, ενοικίαση αυτοκινήτου και island hopping ιδέες.",
        image: "/images/ferries.jpg",
      },
      {
        title: "Πότε να έρθεις",
        description:
          "Συμβουλές ανά εποχή για νησιά, ανοιξιάτικες αποδράσεις και φθινοπωρινά road trips.",
        image: "/images/seasons.jpg",
      },
      {
        title: "Συμβουλές για οικογένειες",
        description:
          "Ιδέες για γονείς, πιο ήσυχες παραλίες, kid-friendly διαμονή και εύκολες διαδρομές.",
        image: "/images/family.jpg",
      },
      {
        title: "Χάρτες & οργάνωση",
        description:
          "Πώς να οργανώσεις παραλίες, αξιοθέατα, μονοήμερες εκδρομές και τοπικές εμπειρίες.",
        image: "/images/map.jpg",
      },
    ],
    hotels: [
      {
        title: "Boutique Ξενοδοχεία",
        description:
          "Καλαίσθητη διαμονή για ζευγάρια, city breaks και ρομαντικές διακοπές.",
        image: "/images/hotel-boutique.jpg",
        badge: "Featured",
      },
      {
        title: "Οικογενειακά Resorts",
        description:
          "Άνετη διαμονή με πισίνες, κοντά στη θάλασσα και πιο εύκολο family planning.",
        image: "/images/hotel-family.jpg",
        badge: "Sponsored",
      },
      {
        title: "Βίλες δίπλα στη θάλασσα",
        description:
          "Ιδιωτικότητα, θέα στο γαλάζιο και premium ιδέες για καλοκαιρινή διαμονή.",
        image: "/images/hotel-villa.jpg",
        badge: "Top pick",
      },
    ],
    eatDrink: [
      {
        title: "Παραδοσιακές ταβέρνες",
        description:
          "Αυθεντικό ελληνικό φαγητό, τοπικές συνταγές και ζεστή ατμόσφαιρα.",
        image: "/images/taverna.jpg",
      },
      {
        title: "Beach Bars",
        description:
          "Cocktails στο ηλιοβασίλεμα, θέα στη θάλασσα και καλοκαιρινή ενέργεια.",
        image: "/images/beach-bar.jpg",
      },
      {
        title: "Γευστικές εμπειρίες",
        description:
          "Ελληνικό πρωινό, wine tasting, ψαροταβέρνες και τοπικά γλυκά.",
        image: "/images/food.jpg",
      },
    ],
    communities: [
      {
        title: "Travel to Greece",
        description:
          "Η κεντρική σελίδα με όλα τα Facebook forums και τις ταξιδιωτικές ομάδες σου.",
        image: "/images/community-main.jpg",
        href: "/travel-to-greece",
      },
      {
        title: "Forums για νησιά",
        description:
          "Ξεχωριστές ομάδες για Σαντορίνη, Κέρκυρα, Κρήτη, Λευκάδα και άλλα μέρη.",
        image: "/images/community-islands.jpg",
        href: "/travel-to-greece",
      },
      {
        title: "Πόλεις & γεύσεις",
        description:
          "Ομάδες για city breaks, εστιατόρια, τοπικά tips και κρυφά σημεία.",
        image: "/images/community-city.jpg",
        href: "/travel-to-greece",
      },
    ],
    footer: {
      description:
        "δίγλωσσο portal για την Ελλάδα με προορισμούς, ξενοδοχεία, φαγητό και κοινότητες.",
      links: ["About", "Contact", "Privacy"],
    },
    discoverMoreLabel: "Δες περισσότερα →",
    openPageLabel: "Άνοιγμα σελίδας →",
  },
};

function ImageCard({
  item,
  dark = false,
  ctaLabel,
}: {
  item: CardItem;
  dark?: boolean;
  ctaLabel: string;
}) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div
        className="relative h-64 bg-slate-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div
          className={`absolute inset-0 ${
            dark ? "bg-slate-950/35" : "bg-slate-950/20"
          }`}
        />

        {item.badge ? (
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
            {item.badge}
          </div>
        ) : null}

        {item.subtitle ? (
          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
            {item.subtitle}
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {item.description}
        </p>

        {item.href ? (
          <Link
            href={item.href}
            className="mt-5 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900"
          >
            {ctaLabel}
          </Link>
        ) : (
          <a
            href="#"
            className="mt-5 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </article>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#f8fbff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div>
            <div className="text-2xl font-bold tracking-tight text-[#0d2a52]">
              ForumGreece
            </div>
            <div className="text-sm text-slate-500">{t.brandTagline}</div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-slate-700 lg:flex">
            <a href="#destinations" className="hover:text-sky-700">
              {t.nav[0]}
            </a>
            <a href="#travel-info" className="hover:text-sky-700">
              {t.nav[1]}
            </a>
            <a href="#hotels" className="hover:text-sky-700">
              {t.nav[2]}
            </a>
            <a href="#eat-drink" className="hover:text-sky-700">
              {t.nav[3]}
            </a>
            <Link href="/travel-to-greece" className="hover:text-sky-700">
              {t.nav[4]}
            </Link>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                lang === "en"
                  ? "bg-[#0d2a52] text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("el")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                lang === "el"
                  ? "bg-[#0d2a52] text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              EL
            </button>
          </div>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-slate-900 text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(8,26,48,0.82) 0%, rgba(8,26,48,0.56) 40%, rgba(8,26,48,0.28) 100%), url('/images/hero-greece.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              {t.heroBadge}
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              {t.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#destinations"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0d2a52] transition hover:-translate-y-0.5"
              >
                {t.heroPrimary}
              </a>

              <Link
                href="/travel-to-greece"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {t.heroSecondary}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.featureTiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  {tile.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            {t.sectionLabels.collections}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0d2a52]">
            {t.sectionTitles.collections}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {t.sectionDescriptions.collections}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.featureTiles.map((tile) => (
            <div
              key={tile.title}
              className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-semibold text-[#0d2a52]">
                {tile.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {tile.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="destinations" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              {t.sectionLabels.destinations}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0d2a52]">
              {t.sectionTitles.destinations}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {t.sectionDescriptions.destinations}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.destinations.map((item) => (
              <ImageCard
                key={item.title}
                item={item}
                dark
                ctaLabel={t.discoverMoreLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="travel-info" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            {t.sectionLabels.travelInfo}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0d2a52]">
            {t.sectionTitles.travelInfo}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {t.sectionDescriptions.travelInfo}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.travelInfo.map((item) => (
            <ImageCard
              key={item.title}
              item={item}
              ctaLabel={t.discoverMoreLabel}
            />
          ))}
        </div>
      </section>

      <section id="hotels" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              {t.sectionLabels.hotels}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0d2a52]">
              {t.sectionTitles.hotels}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {t.sectionDescriptions.hotels}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {t.hotels.map((item) => (
              <ImageCard
                key={item.title}
                item={item}
                ctaLabel={t.discoverMoreLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="eat-drink" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            {t.sectionLabels.eatDrink}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0d2a52]">
            {t.sectionTitles.eatDrink}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {t.sectionDescriptions.eatDrink}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.eatDrink.map((item) => (
            <ImageCard
              key={item.title}
              item={item}
              ctaLabel={t.discoverMoreLabel}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#0d2a52] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                {t.sectionLabels.community}
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                {t.sectionTitles.community}
              </h2>
              <p className="mt-4 text-base leading-8 text-white/80">
                {t.sectionDescriptions.community}
              </p>

              <Link
                href="/travel-to-greece"
                className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0d2a52] transition hover:-translate-y-0.5"
              >
                {t.heroSecondary}
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {t.communities.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 backdrop-blur"
                >
                  <div
                    className="h-48 bg-slate-300 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(4,16,32,0.15), rgba(4,16,32,0.3)), url(${item.image})`,
                    }}
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/80">
                      {item.description}
                    </p>
                    <Link
                      href={item.href || "/travel-to-greece"}
                      className="mt-5 inline-flex text-sm font-semibold text-cyan-200 hover:text-white"
                    >
                      {t.openPageLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-slate-800">ForumGreece</span> —{" "}
            {t.footer.description}
          </div>

          <div className="flex gap-5">
            {t.footer.links.map((link) => (
              <a key={link} href="#" className="hover:text-slate-800">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}