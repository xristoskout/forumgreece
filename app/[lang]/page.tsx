"use client";

import Link from "next/link";
import Image from "next/image";
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
      en: "Travel portal • Destinations • Hotels • Tours • Food • Communities",
      el: "Travel portal • Προορισμοί • Ξενοδοχεία • Εκδρομές • Φαγητό • Κοινότητες",
    },
    heroTitle: {
      en: "Plan your trip to Greece with destinations, travel tips and authentic local ideas",
      el: "Οργάνωσε το ταξίδι σου στην Ελλάδα με προορισμούς, travel tips και αυθεντικές τοπικές προτάσεις",
    },
    heroText: {
      en: "GoGreeceNow is becoming a complete Greece travel portal with destination guides, travel information, hotels, tours, beaches, restaurants and Facebook travel communities.",
      el: "Το GoGreeceNow εξελίσσεται σε ένα πλήρες travel portal για την Ελλάδα με οδηγούς προορισμών, ταξιδιωτικές πληροφορίες, ξενοδοχεία, εκδρομές, παραλίες, εστιατόρια και Facebook travel communities.",
    },
    heroPrimary: { en: "Explore destinations", el: "Δες προορισμούς" },
    heroSecondary: { en: "Travel to Greece", el: "Ταξίδι στην Ελλάδα" },

    destinationEyebrow: {
      en: "Top Destinations",
      el: "Δημοφιλείς Προορισμοί",
    },
    destinationTitle: {
      en: "Discover the best places in Greece",
      el: "Ανακάλυψε τα καλύτερα μέρη της Ελλάδας",
    },
    destinationText: {
      en: "Explore island and city guides across Greece, including new pages for Kefalonia, Lesvos and Athens.",
      el: "Ανακάλυψε οδηγούς για νησιά και πόλεις της Ελλάδας, μαζί με νέες σελίδες για Κεφαλονιά, Λέσβο και Αθήνα.",
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

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <section className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-0 py-3 sm:gap-6 sm:px-6 sm:py-5">
          <Link href={withLang("/")} className="group flex min-w-0 items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo/gogreecenow-logo.png"
              alt="GoGreeceNow logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              priority
            />
            <div className="min-w-0">
              <div className="truncate text-lg font-bold tracking-tight text-sky-900 transition group-hover:text-sky-700 sm:text-2xl">
                {siteBrand}
              </div>
              <div className="hidden text-sm text-slate-500 sm:block">
                {siteBrandLine[lang]}
              </div>
            </div>
          </Link>

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
            <a href="#tours" className="hover:text-sky-700">
              {t.navTours[lang]}
            </a>
            <a href="#food" className="hover:text-sky-700">
              {t.navEatDrink[lang]}
            </a>
            <Link href={withLang("/travel-to-greece")} className="hover:text-sky-700">
              {t.navForums[lang]}
            </Link>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
            <button
              onClick={() => switchLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "en" ? "bg-sky-600 text-white" : "text-slate-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("el")}
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
          backgroundColor: "#03a9f4",
          backgroundImage:
            "linear-gradient(90deg, rgba(3,169,244,0.08) 0%, rgba(3,169,244,0.04) 45%, rgba(129,212,250,0.02) 100%), url('/images/hero-greece.jpg')",
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
                href={withLang("/travel-to-greece")}
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
                className="rounded-3xl bg-white/16 p-6 shadow-lg backdrop-blur-md"
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
              key={item.slug}
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
                <Link
                  href={withLang(`/destinations/${item.slug}`)}
                  className="mt-5 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950"
                >
                  {t.viewGuide[lang]}
                </Link>
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
            {travelInfoGuides.map((item) => (
              <article
                key={item.slug}
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
                  <Link
                    href={withLang(`/travel-info/${item.slug}`)}
                    className="mt-6 inline-block text-sm font-semibold text-sky-800 hover:text-sky-950"
                  >
                    {t.readMore[lang]}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hotels" className="bg-gradient-to-b from-amber-50/70 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                🏨 {t.hotelsEyebrow[lang]}
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {t.hotelsTitle[lang]}
              </h2>

              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-400" />

              <p className="mt-4 max-w-3xl rounded-3xl border border-amber-100 bg-white/80 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
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
                key={item.slug}
                className="overflow-hidden rounded-[30px] border border-amber-200 bg-gradient-to-br from-white via-amber-50/70 to-orange-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="relative h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1606]/35 via-transparent to-transparent" />

                  {item.badge ? (
                    <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      {item.badge}
                    </span>
                  ) : null}

                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-800 backdrop-blur">
                    {lang === "en" ? "Stay" : "Διαμονή"}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                      🏨
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                        {lang === "en" ? "Featured stay" : "Προτεινόμενη διαμονή"}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">{item.name}</h3>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
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
                        className="rounded-full border border-amber-100 bg-white px-3 py-1 text-xs font-medium text-amber-900"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/hotels/${item.slug}`)}
                    className="mt-6 inline-flex rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                  >
                    {t.viewHotels[lang]}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="bg-gradient-to-b from-sky-50 to-cyan-50/60 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
                ⚓ {t.toursEyebrow[lang]}
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {t.toursTitle[lang]}
              </h2>

              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />
            </div>

            <p className="max-w-3xl rounded-3xl border border-cyan-100 bg-white/80 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
              {t.toursText[lang]}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tours.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-[30px] border border-cyan-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
                      {lang === "en" ? "Experiences" : "Εμπειρίες"}
                    </span>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-cyan-800 backdrop-blur">
                      {item.place}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-2xl">
                      ⚓
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                        {lang === "en" ? "Local tours & activities" : "Τοπικές εκδρομές & δραστηριότητες"}
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
                        className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-900"
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/tours/${item.slug}`)}
                    className="mt-6 inline-flex rounded-2xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800"
                  >
                    {t.viewTour[lang]}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="food" className="bg-gradient-to-b from-orange-50/50 to-amber-50/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-orange-800">
              🍷 {t.foodEyebrow[lang]}
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {t.foodTitle[lang]}
            </h2>

            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />

            <p className="mt-4 max-w-3xl rounded-3xl border border-orange-100 bg-white/85 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm">
              {t.foodText[lang]}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {food.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-[30px] border border-orange-200 bg-gradient-to-br from-white via-orange-50/80 to-amber-100/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div
                    className="h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a2207]/35 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
                      {lang === "en" ? "Food & Drink" : "Φαγητό & Ποτό"}
                    </span>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-800 backdrop-blur">
                      {item.place}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
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
                        className="rounded-full border border-orange-100 bg-white px-3 py-1 text-xs font-medium text-orange-900"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLang(`/eat-drink/${item.slug}`)}
                    className="mt-6 inline-flex rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
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