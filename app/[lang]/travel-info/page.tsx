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
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 border-b border-slate-200">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-greece.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/55 via-black/35 to-black/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20 text-center flex flex-col items-center">
          <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-800 backdrop-blur-md mb-6 relative overflow-hidden group">
            <span className="relative z-10">{t.heroEyebrow[lang]}</span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-xl">
            {t.heroTitle[lang]}
          </h1>

          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-white/95 font-light mb-12">
            {t.heroText[lang]}
          </p>

          <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
            {[
               { id: "01", label: t.quick1[lang] },
               { id: "02", label: t.quick2[lang] },
               { id: "03", label: t.quick3[lang] },
               { id: "04", label: t.quick4[lang] }
            ].map((q) => (
              <div key={q.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur-lg px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20">
                <div className="text-3xl font-black text-slate-900/50 mb-2 group-hover:text-slate-900 transition-colors">{q.id}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-indigo-800">
                  {q.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-7xl px-6 py-20 -mt-20">
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            {t.topicsEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            {t.topicsTitle[lang]}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-500 leading-relaxed md:mx-0">
            {t.topicsText[lang]}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {planningTopics.map((topic) => (
            <article
              key={topic.title.en}
              className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 drop-shadow-xl">{topic.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-indigo-800 transition-colors">
                {topic.title[lang]}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {topic.text[lang]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-slate-200 bg-white/80 backdrop-blur-md py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                {t.guidesEyebrow[lang]}
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                {t.guidesTitle[lang]}
              </h2>
            </div>
            <p className="max-w-xl text-slate-500 leading-relaxed">
              {t.guidesText[lang]}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {travelInfoGuides.map((item) => (
              <article
                key={item.slug}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] min-h-[400px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex-1 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-800 backdrop-blur-md">
                      {lang === "en" ? "Travel Guide" : "Travel Guide"}
                    </span>
                  </div>

                  <h3 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 drop-shadow-md">
                    {item.title[lang]}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-slate-600 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden group-hover:block">
                    {item.description[lang]}
                  </p>

                  <Link
                    href={withLang(`/travel-info/${item.slug}`)}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 backdrop-blur-md transition-all hover:bg-indigo-600 hover:text-slate-900"
                  >
                    {t.readGuide[lang]}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            {t.faqEyebrow[lang]}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            {t.faqTitle[lang]}
          </h2>
        </div>

        <div className="grid gap-6">
          {faqItems.map((item) => (
            <article
              key={item.q.en}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur-md p-8 shadow-lg transition-colors hover:bg-slate-50"
            >
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-800 transition-colors">
                {item.q[lang]}
              </h3>
              <p className="mt-4 text-slate-500 leading-relaxed">
                {item.a[lang]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 flex justify-center pb-24">
        <Link
          href={withLang("/")}
          className="group relative inline-flex overflow-hidden rounded-full border border-slate-300 bg-slate-50 px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition-all hover:scale-105 hover:bg-indigo-600 hover:border-indigo-500 backdrop-blur-md"
        >
          <span className="relative z-10 flex items-center gap-2">
            ← {t.backHome[lang]}
          </span>
        </Link>
      </section>
    </main>
  );
}