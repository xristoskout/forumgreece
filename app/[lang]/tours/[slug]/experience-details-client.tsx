"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../../components/site-header";
import ViatorWidget from "../../../../components/viator-widget";

import { type Lang } from "../../../../lib/locale";
import {
  type ExperienceBusiness,
  type ExperienceLanding,
} from "../../../../lib/experiences";

type ExperienceDetailsClientProps = {
  landing: ExperienceLanding;
  businesses: ExperienceBusiness[];
  lang: Lang;
};

export default function ExperienceDetailsClient({
  landing,
  businesses,
  lang,
}: ExperienceDetailsClientProps) {
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

  const t = {
    localExperiences:
      lang === "en" ? "Local Experiences" : "Τοπικές Εμπειρίες",
    backToTours: lang === "en" ? "Back to tours" : "Επιστροφή στις εκδρομές",
    homePage: lang === "en" ? "Home page" : "Αρχική",
    pageOverview: lang === "en" ? "Page Overview" : "Περιγραφή Σελίδας",
    featuredBusinesses:
      lang === "en" ? "Featured Businesses" : "Προτεινόμενες Επιχειρήσεις",
    pageHighlights:
      lang === "en" ? "Page Highlights" : "Σημεία που Ξεχωρίζουν",
    travelNote: lang === "en" ? "Travel Note" : "Σημείωση",
    travelNoteText:
      lang === "en"
        ? "This page presents selected local businesses and experiences. Open each business page to see the full details, services, routes, gallery and contact information."
        : "Αυτή η σελίδα παρουσιάζει επιλεγμένες τοπικές επιχειρήσεις και εμπειρίες. Άνοιξε τη σελίδα κάθε επιχείρησης για να δεις όλες τις λεπτομέρειες, τις υπηρεσίες, τις διαδρομές, τη gallery και τα στοιχεία επικοινωνίας.",
    exploreMoreTours:
      lang === "en" ? "Explore more tours" : "Δες περισσότερες εκδρομές",
    backToHomepage:
      lang === "en" ? "Back to homepage" : "Επιστροφή στην αρχική",
    emptyBusinesses:
      lang === "en"
        ? "More businesses will be added here soon."
        : "Σύντομα θα προστεθούν περισσότερες επιχειρήσεις εδώ.",
    highlightReason:
      lang === "en"
        ? "A practical reason to explore this experiences page."
        : "Ένας πρακτικός λόγος για να εξερευνήσεις αυτή τη σελίδα εμπειριών.",
    footerText:
      lang === "en"
        ? `${siteBrand} — local experiences, destinations and travel inspiration across Greece.`
        : `${siteBrand} — τοπικές εμπειρίες, προορισμοί και ταξιδιωτική έμπνευση σε όλη την Ελλάδα.`,
    home: lang === "en" ? "Home" : "Αρχική",
    tours: lang === "en" ? "Tours" : "Εκδρομές",
    travelToGreece:
      lang === "en" ? "Travel to Greece" : "Ταξίδι στην Ελλάδα",
  };

  const sortedBusinesses = [...businesses].sort((a, b) => {
    const priority = (slug: string) => {
      if (slug === "kefalonia-day-trips") return 0;
      if (slug === "rolling-into-the-blue") return 1;
      return 2;
    };
    return priority(a.slug) - priority(b.slug);
  });

  const heroImage =
    landing.image ?? businesses[0]?.image ?? "/images/tours/kefalonia-tours.webp";

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-transparent text-slate-900 pt-20">

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={landing.title[lang]}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-[#03a9f4]/8" />
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,169,244,0.08),rgba(129,212,250,0.03),rgba(2,136,209,0.04))]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_35%)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-7xl gap-10 px-6 py-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              {t.localExperiences}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              {landing.title[lang]}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/95">
              {landing.description[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLang("/#tours")}
                className="rounded-full bg-white backdrop-blur-md px-6 py-3 font-semibold text-indigo-800 shadow-sm transition hover:-translate-y-0.5"
              >
                {t.backToTours}
              </Link>

              <Link
                href={withLang("/")}
                className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {t.homePage}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {landing.highlights[lang].map((highlight, index) => {
              const emojis = ["📍", "🌟", "⚓", "✨"];
              const emoji = emojis[index % emojis.length];
              const reason = landing.highlightReasons ? landing.highlightReasons[lang][index] : t.highlightReason;
              
              return (
                <article
                  key={highlight}
                  className="rounded-3xl bg-white/16 p-6 shadow-lg backdrop-blur-md"
                >
                  <div className="text-3xl">{emoji}</div>
                  <h3 className="mt-4 text-xl font-semibold">{highlight}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/90">
                    {reason}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {landing.slug === "crete-tours" && (
        <section className="relative z-10 -mb-6 mx-auto max-w-7xl px-6 pt-6">
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-lg shadow-emerald-200/50">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700 mb-2">
              {lang === "en" ? "Also explore" : "Εξερευνήστε επίσης"}
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-3">
              {lang === "en"
                ? "Looking for relaxation? Check out our guide to the best yoga and wellness retreats in Crete."
                : "Ψάχνετε για χαλάρωση; Δείτε τον οδηγό μας για τα καλύτερα yoga και wellness retreats στην Κρήτη."}
            </p>
            <Link
              href={withLang("/travel-info/yoga-wellness-retreats-crete")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              {lang === "en" ? "Yoga & wellness retreats guide →" : "Οδηγός yoga & wellness retreats →"}
            </Link>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {t.pageOverview}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                {landing.title[lang]}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-500 whitespace-pre-wrap">
                {landing.overview[lang]}
              </p>
            </article>

            {landing.slug === "lesvos-tours" && (
              <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700">
                      {lang === "en" ? "Is Lesvos good for family vacations?" : "Είναι η Λέσβος κατάλληλη για οικογενειακές διακοπές;"}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {lang === "en" 
                        ? "Absolutely. Lesvos is a very safe and hospitable island with many sandy beaches and educational activities like the Petrified Forest Museum. It’s perfect for families looking for a relaxed and authentic environment."
                        : "Απολύτως. Η Λέσβος είναι ένα πολύ ασφαλές και φιλόξενο νησί με πολλές αμμώδεις παραλίες και εκπαιδευτικές δραστηριότητες, όπως το Μουσείο Απολιθωμένου Δάσους. Είναι ιδανική για οικογένειες που αναζητούν ένα ήρεμο και αυθεντικό περιβάλλον."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700">
                      {lang === "en" ? "What are the best food experiences in Lesvos?" : "Ποιες είναι οι καλύτερες γαστρονομικές εμπειρίες στη Λέσβο;"}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {lang === "en"
                        ? "Don't miss an olive oil tasting at a local mill, a visit to an Ouzo distillery in Plomari, and tasting the famous Kalloni sardines. The local cheese (Ladotyri) and honey are also exceptional."
                        : "Μην χάσετε μια γευσιγνωσία ελαιολάδου σε ένα τοπικό ελαιοτριβείο, μια επίσκεψη σε ποτοποιία ούζου στο Πλωμάρι και τη δοκιμή της διάσημης σαρδέλας Καλλονής. Το τοπικό τυρί (λαδοτύρι) και το μέλι είναι επίσης εξαιρετικά."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700">
                      {lang === "en" ? "When is the best time to visit Lesvos for activities?" : "Πότε είναι η καλύτερη εποχή να επισκεφτώ τη Λέσβο για δραστηριότητες;"}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {lang === "en"
                        ? "Late spring (May-June) and early autumn (September) are ideal. The weather is perfect for hiking and birdwatching, and the island is blooming with life without the high summer heat."
                        : "Η αργά την άνοιξη (Μάιος-Ιούνιος) και οι αρχές του φθινοπώρου (Σεπτέμβριος) είναι ιδανικές περίοδοι. Ο καιρός είναι τέλειος για πεζοπορία και παρατήρηση πουλιών, και το νησί σφύζει από ζωή χωρίς την έντονη ζέστη του καλοκαιριού."}
                    </p>
                  </div>
                </div>
              </article>
            )}

            {landing.slug === "crete-tours" && (
              <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700">
                      {lang === "en" ? "Are tours in Crete worth booking in advance?" : "Αξίζει να κλείσω εκδρομές στην Κρήτη εκ των προτέρων;"}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {lang === "en" 
                        ? "Absolutely. Crete is a top destination, and high-demand tours—such as boat trips to Balos Lagoon or guided visits to the Palace of Knossos—frequently sell out weeks in advance during summer. Early booking also helps you secure better rates and guaranteed availability."
                        : "Απολύτως. Η Κρήτη είναι κορυφαίος προορισμός και οι εκδρομές με μεγάλη ζήτηση — όπως τα boat trips στον Μπάλο ή οι ξεναγήσεις στην Κνωσό — εξαντλούνται συχνά εβδομάδες πριν κατά τη διάρκεια του καλοκαιριού. Η έγκαιρη κράτηση σας εξασφαλίζει τη διαθεσιμότητα και συχνά καλύτερες τιμές."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700">
                      {lang === "en" ? "Which part of Crete is best for boat trips?" : "Ποιο μέρος της Κρήτης είναι το καλύτερο για βόλτες με σκάφος;"}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {lang === "en"
                        ? "It depends on what you are looking for. Kissamos (Chania) is the gateway to Balos and Gramvousa. Elounda and Agios Nikolaos are famous for Spinalonga island cruises. For a more rugged experience, the south coast (Sfakia/Loutro) offers stunning secluded coves accessible only by boat."
                        : "Εξαρτάται από το τι αναζητάτε. Ο Κίσσαμος (Χανιά) είναι η πύλη για τον Μπάλο και τη Γραμβούσα. Η Ελούντα και ο Άγιος Νικόλαος φημίζονται για τις κρουαζιέρες στη Σπιναλόγκα. Για μια πιο άγρια εμπειρία, η νότια ακτή (Σφακιά/Λουτρό) προσφέρει εντυπωσιακούς απομονωμένους κόλπους προσβάσιμους μόνο με σκάφος."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-700">
                      {lang === "en" ? "What are the best family-friendly tours in Crete?" : "Ποιες είναι οι καλύτερες εκδρομές για οικογένειες στην Κρήτη;"}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {lang === "en"
                        ? "Families love the Cretaquarium near Heraklion and the interactive experience at Labyrinth Park. Traditional Cretan farm visits, where kids can see local animals and learn about olive oil, are also very popular. Easy boat trips with swimming stops in shallow waters are another excellent choice."
                        : "Οι οικογένειες λατρεύουν το Cretaquarium κοντά στο Ηράκλειο και το Labyrinth Park. Οι επισκέψεις σε παραδοσιακές κρητικές φάρμες, όπου τα παιδιά βλέπουν ζώα και μαθαίνουν για το λάδι, είναι επίσης πολύ δημοφιλείς. Οι εύκολες βόλτες με σκάφος και στάσεις για κολύμπι σε ρηχά νερά είναι άλλη μια εξαιρετική επιλογή."}
                    </p>
                  </div>
                </div>
              </article>
            )}

            {landing.whatToBook && (
              <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  {landing.whatToBook.title[lang]}
                </p>
                <div className="mt-6 space-y-6">
                  {landing.whatToBook.sections.map((sec, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold text-slate-900">{sec.title[lang]}</h3>
                      <p className="mt-2 text-base leading-7 text-slate-500">{sec.content[lang]}</p>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {landing.planningTips && (
              <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  {landing.planningTips.title[lang]}
                </p>
                <ul className="mt-6 space-y-4">
                  {landing.planningTips.tips[lang].map((tip, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-indigo-500 mt-1">✔</span>
                      <span className="text-base leading-7 text-slate-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {landing.faq && (
              <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  {landing.faq.title[lang]}
                </p>
                <div className="mt-6 space-y-6">
                  {landing.faq.questions.map((q, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-bold text-slate-900">{q.question[lang]}</h3>
                      <p className="mt-2 text-base leading-7 text-slate-500">{q.answer[lang]}</p>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {landing.internalCta && (
              <article className="rounded-[28px] border border-indigo-100 bg-indigo-50 backdrop-blur-md p-8 shadow-sm">
                <h3 className="text-xl font-bold text-indigo-900">
                  {landing.internalCta.title[lang]}
                </h3>
                <p className="mt-3 text-base leading-7 text-indigo-700/80">
                  {landing.internalCta.text[lang]}
                </p>
                <div className="mt-6">
                  <Link
                    href={withLang(landing.internalCta.linkHref)}
                    className="inline-flex rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-md"
                  >
                    {landing.internalCta.linkLabel[lang]}
                  </Link>
                </div>
              </article>
            )}
          </div>

          <aside className="space-y-6">
            {sortedBusinesses.length > 0 && (
              <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  {lang === "en" ? "Our Recommended Local Experiences" : "Οι Προτεινόμενες Τοπικές μας Εμπειρίες"}
                </p>
                
                {landing.recommendedIntro && (
                  <p className="mt-3 text-base leading-8 text-slate-500">
                    {landing.recommendedIntro[lang]}
                  </p>
                )}

                <div className="mt-6 space-y-8">
                  {sortedBusinesses.map((business) => {
                    const businessHref =
                      business.href || `/businesses/${business.slug}`;

                    return (
                      <article
                        key={business.slug}
                        className="overflow-hidden rounded-[28px] border border-slate-200 bg-white hover:bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div>
                          <div className="relative aspect-[4/3] w-full bg-slate-100">
                            {(business.slug === "rolling-into-the-blue" || business.slug === "kefalonia-day-trips") && (
                              <div className="absolute top-3 left-3 z-10">
                                <svg className="w-8 h-8 drop-shadow-lg" viewBox="0 0 24 24" fill="#ef4444"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                              </div>
                            )}
                            <Image
                              src={business.image}
                              alt={business.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                          </div>

                          <div className="p-5">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                              <div>
                                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                                  {business.category[lang]}
                                </div>
                                <h3 className="mt-1 text-lg font-bold text-slate-900">
                                  {business.name}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-slate-500">
                                  {business.place}
                                </p>
                              </div>
                              {business.badge && (
                                <span className="inline-flex rounded-full bg-indigo-100 text-indigo-800 px-2.5 py-0.5 text-[11px] font-semibold">
                                  {business.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-3 text-sm leading-6 text-slate-500 line-clamp-3">
                              {business.info[lang]}
                            </p>
                            <div className="mt-4">
                              {isExternalUrl(businessHref) ? (
                                <a
                                  href={businessHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 border-none px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-500"
                                >
                                  {business.name}
                                </a>
                              ) : (
                                <Link
                                  href={withLang(businessHref)}
                                  className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 border-none px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-500"
                                >
                                  {business.name}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </article>
            )}

            {(() => {
              const TOUR_WIDGETS: Record<string, { label: { en: string; el: string }; ref: string }> = {
                "kefalonia-tours": {
                  label: { en: "More Tours & Activities in Kefalonia", el: "Περισσότερες Εκδρομές & Δραστηριότητες στην Κεφαλονιά" },
                  ref: "W-adaa2afb-d347-48c6-abe3-9d16f6a91959",
                },
                "lesvos-tours": {
                  label: { en: "More Tours & Activities in Lesvos", el: "Περισσότερες Εκδρομές & Δραστηριότητες στη Λέσβο" },
                  ref: "W-b4298df4-e2de-499e-a767-1be0bd3e9b83",
                },
                "crete-tours": {
                  label: { en: "More Tours & Activities in Crete", el: "Περισσότερες Εκδρομές & Δραστηριότητες στην Κρήτη" },
                  ref: "W-beb6dd42-10a7-4524-8626-6fda84f9e5df",
                },
                "athens-tours": {
                  label: { en: "More Tours & Activities in Athens", el: "Περισσότερες Εκδρομές & Δραστηριότητες στην Αθήνα" },
                  ref: "W-611433de-c2b3-4d2e-9074-eaa7eff90944",
                },
                "santorini-tours": {
                  label: { en: "More Tours & Activities in Santorini", el: "Περισσότερες Εκδρομές & Δραστηριότητες στη Σαντορίνη" },
                  ref: "W-e577bd63-e025-4586-8f55-bdb32bf254bc",
                },
                "mykonos-tours": {
                  label: { en: "More Tours & Activities in Mykonos", el: "Περισσότερες Εκδρομές & Δραστηριότητες στη Μύκονο" },
                  ref: "W-db1da184-a2f1-4058-b7f1-a9e15ccf9fa6",
                },
                "rhodes-tours": {
                  label: { en: "More Tours & Activities in Rhodes", el: "Περισσότερες Εκδρομές & Δραστηριότητες στη Ρόδο" },
                  ref: "W-36ecb7f4-99f5-4715-af3f-343be8bb540a",
                },
              };
              const entry = TOUR_WIDGETS[landing.slug];
              if (!entry) return null;
              return (
                <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm p-4 lg:p-6 w-full">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700 mb-4">
                    {entry.label[lang]}
                  </p>
                  
                  {landing.moreToursIntro && (
                    <p className="mb-6 text-sm leading-6 text-slate-500">
                      {landing.moreToursIntro[lang]}
                    </p>
                  )}
                  
                  <ViatorWidget key={entry.ref} partnerId="P00298401" widgetRef={entry.ref} />
                </article>
              );
            })()}

            <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cyan-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {t.pageHighlights}
              </p>

              <div className="mt-5 grid gap-3">
                {landing.highlights[lang].map((highlight, index) => {
                  const emojis = ["📍", "🌟", "⚓", "✨"];
                  const emoji = emojis[index % emojis.length];

                  return (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-cyan-100 bg-white backdrop-blur-md px-4 py-3 text-sm font-medium text-slate-600 flex items-center gap-2"
                    >
                      <span className="text-lg">{emoji}</span>
                      <span>{highlight}</span>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {t.travelNote}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {t.travelNoteText}
              </p>

              <div className="mt-8 space-y-3">
                <Link
                  href={withLang("/#tours")}
                  className="block rounded-2xl bg-indigo-600 border-none px-5 py-3 text-center font-semibold text-white transition hover:bg-indigo-500"
                >
                  {t.exploreMoreTours}
                </Link>

                <Link
                  href={withLang("/")}
                  className="block rounded-2xl border border-slate-200 px-5 py-3 text-center font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  {t.backToHomepage}
                </Link>
              </div>
            </article>
          </aside>
        </div>
      </section>

    </main>
    </>
  );
}