"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../components/site-header";
import { usePathname, useRouter } from "next/navigation";
import {
  type Lang,
  siteBrand,
  siteBrandLine,
  travelInfoGuides,
} from "../../../lib/content";

export default function TravelInfoHubPage() {
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

  const t = {
    navHome: { en: "Home", el: "Αρχική" },
    navSection: { en: "Travel Info", el: "Ταξιδιωτικές Πληροφορίες" },

    heroEyebrow: { en: "Travel Planning Hub", el: "Travel Planning Hub" },
    heroTitle: {
      en: "Plan your Greece trip before you go",
      el: "Οργάνωσε το ταξίδι σου στην Ελλάδα πριν φύγεις",
    },
    heroText: {
      en: "Use this section as your practical Greece hub for transport, timing, movement and the basics that make a trip smoother.",
      el: "Χρησιμοποίησε αυτή τη σελίδα σαν το πρακτικό σου Greece hub για μεταφορά, σωστό timing, μετακινήσεις και όλα τα βασικά που κάνουν ένα ταξίδι πιο ομαλό.",
    },

    quick1: { en: "How to get there", el: "Πώς θα πας" },
    quick2: { en: "Best time to visit", el: "Πότε να ταξιδέψεις" },
    quick3: { en: "Getting around", el: "Μετακίνηση" },
    quick4: { en: "Useful basics", el: "Χρήσιμα βασικά" },

    topicsEyebrow: { en: "Start with the essentials", el: "Ξεκίνα από τα βασικά" },
    topicsTitle: {
      en: "The practical side of Greece, in one place",
      el: "Η πρακτική πλευρά της Ελλάδας, σε ένα μέρος",
    },
    topicsText: {
      en: "This page should work like a planning hub, helping users answer the questions that come before booking, arriving and moving around.",
      el: "Αυτή η σελίδα πρέπει να λειτουργεί σαν planning hub, βοηθώντας τον χρήστη να απαντήσει στα ερωτήματα που έρχονται πριν την κράτηση, πριν την άφιξη και πριν τις μετακινήσεις.",
    },

    guidesEyebrow: { en: "Guides", el: "Οδηγοί" },
    guidesTitle: {
      en: "Travel info guides",
      el: "Οδηγοί ταξιδιωτικών πληροφοριών",
    },
    guidesText: {
      en: "Browse your practical travel content as standalone guide pages.",
      el: "Περιηγήσου στο πρακτικό travel content μέσα από ξεχωριστές guide pages.",
    },

    faqEyebrow: { en: "FAQ", el: "Συχνές Ερωτήσεις" },
    faqTitle: {
      en: "Questions travelers usually ask first",
      el: "Ερωτήσεις που κάνουν πρώτα οι ταξιδιώτες",
    },

    readGuide: { en: "Read guide →", el: "Δες τον οδηγό →" },
    backHome: { en: "Back to homepage", el: "Επιστροφή στην αρχική" },
  };

  const planningTopics = [
    {
      icon: "✈️",
      title: { en: "Arrival & transport", el: "Άφιξη & μεταφορά" },
      text: {
        en: "Flights, ferries, ports, airports and the smartest ways to reach Greece or specific islands.",
        el: "Πτήσεις, πλοία, λιμάνια, αεροδρόμια και οι πιο σωστοί τρόποι να φτάσεις στην Ελλάδα ή σε συγκεκριμένα νησιά.",
      },
    },
    {
      icon: "🗓️",
      title: { en: "Timing & seasons", el: "Timing & εποχές" },
      text: {
        en: "Choose when to travel based on weather, seasonality, crowds and the kind of trip you want.",
        el: "Διάλεξε πότε να ταξιδέψεις με βάση τον καιρό, την εποχικότητα, τον κόσμο και το είδος ταξιδιού που θέλεις.",
      },
    },
    {
      icon: "🚗",
      title: { en: "Moving around Greece", el: "Μετακίνηση στην Ελλάδα" },
      text: {
        en: "Understand local transport, car rental, road travel and island-to-island movement.",
        el: "Κατανόησε τις τοπικές μετακινήσεις, την ενοικίαση αυτοκινήτου, τα οδικά ταξίδια και τη μετακίνηση από νησί σε νησί.",
      },
    },
    {
      icon: "💳",
      title: { en: "Useful travel basics", el: "Χρήσιμα ταξιδιωτικά βασικά" },
      text: {
        en: "Money, planning habits, useful expectations and the basics that make the trip easier.",
        el: "Χρήματα, συνήθειες planning, χρήσιμες προσδοκίες και τα βασικά που κάνουν το ταξίδι πιο εύκολο.",
      },
    },
  ];

  const faqItems = [
    {
      q: {
        en: "When is the best time to visit Greece?",
        el: "Ποια είναι η καλύτερη περίοδος για να ταξιδέψεις στην Ελλάδα;",
      },
      a: {
        en: "It depends on the experience you want. Summer works best for beaches and island life, while spring and early autumn are often better for milder weather and easier travel.",
        el: "Εξαρτάται από την εμπειρία που θέλεις. Το καλοκαίρι ταιριάζει περισσότερο για παραλίες και νησιωτική ζωή, ενώ η άνοιξη και οι αρχές του φθινοπώρου είναι συχνά καλύτερες για πιο ήπιο καιρό και πιο άνετο ταξίδι.",
      },
    },
    {
      q: {
        en: "Do I need ferries for island trips?",
        el: "Χρειάζομαι πλοία για island trips;",
      },
      a: {
        en: "Often yes, but not always. Some islands also have airports, so the best route depends on the destination, season and your available time.",
        el: "Συχνά ναι, αλλά όχι πάντα. Κάποια νησιά έχουν και αεροδρόμιο, οπότε η καλύτερη διαδρομή εξαρτάται από τον προορισμό, την εποχή και τον χρόνο που έχεις.",
      },
    },
    {
      q: {
        en: "Is renting a car worth it in Greece?",
        el: "Αξίζει να νοικιάσω αυτοκίνητο στην Ελλάδα;",
      },
      a: {
        en: "In many destinations, yes. It becomes especially useful on islands, in villages and in places where public transport is limited.",
        el: "Σε πολλούς προορισμούς, ναι. Είναι ιδιαίτερα χρήσιμο σε νησιά, χωριά και μέρη όπου τα μέσα μεταφοράς είναι περιορισμένα.",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-greece.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-white/82" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl border border-slate-200 bg-white/85 p-7 shadow-sm md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              {t.heroEyebrow[lang]}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              {t.heroTitle[lang]}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {t.heroText[lang]}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="text-lg font-bold text-slate-900">01</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.quick1[lang]}
                </div>
              </div>

              <div className="border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="text-lg font-bold text-slate-900">02</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.quick2[lang]}
                </div>
              </div>

              <div className="border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="text-lg font-bold text-slate-900">03</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.quick3[lang]}
                </div>
              </div>

              <div className="border border-slate-200 bg-slate-50 px-4 py-4">
                <div className="text-lg font-bold text-slate-900">04</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.quick4[lang]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              {t.topicsEyebrow[lang]}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {t.topicsTitle[lang]}
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-6 text-slate-600">
            {t.topicsText[lang]}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {planningTopics.map((topic) => (
            <article
              key={topic.title.en}
              className="border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">{topic.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {topic.title[lang]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {topic.text[lang]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {t.guidesEyebrow[lang]}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                {t.guidesTitle[lang]}
              </h2>
            </div>

            <p className="max-w-3xl text-sm leading-6 text-slate-600">
              {t.guidesText[lang]}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {travelInfoGuides.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                <div className="p-6">
                  <div className="inline-flex border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-800">
                    {lang === "en" ? "Travel Guide" : "Travel Guide"}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                    {item.title[lang]}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description[lang]}
                  </p>

                  <Link
                    href={withLang(`/travel-info/${item.slug}`)}
                    className="mt-6 inline-flex bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {t.readGuide[lang]}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            {t.faqEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {t.faqTitle[lang]}
          </h2>
        </div>

        <div className="grid gap-4">
          {faqItems.map((item) => (
            <article
              key={item.q.en}
              className="border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.q[lang]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.a[lang]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href={withLang("/")}
          className="inline-flex border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          {t.backHome[lang]}
        </Link>
      </section>
    </main>
  );
}