"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
  siteBrand,
  siteBrandLine,
  type Lang,
} from "../../../../lib/content";
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
  const pathname = usePathname();
  const router = useRouter();

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

  const heroImage =
    businesses[0]?.image ?? "/images/tours/kefalonia-tours.jpg";

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <section className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-0 py-3 sm:gap-6 sm:px-6 sm:py-5">
          <Link
            href={withLang("/")}
            className="group flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <Image
              src="/images/logo/gogreecenow-logo.png"
              alt="GoGreeceNow logo"
              width={56}
              height={56}
              className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14"
              priority
            />
            <div className="min-w-0">
              <div className="truncate text-lg font-bold tracking-tight text-indigo-800 transition group-hover:text-indigo-700 sm:text-2xl">
                {siteBrand}
              </div>
              <div className="hidden text-sm text-slate-500 sm:block">
                {siteBrandLine[lang]}
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => switchLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "en"
                  ? "bg-sky-600 text-slate-900"
                  : "text-slate-500"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => switchLanguage("el")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "el"
                  ? "bg-sky-600 text-slate-900"
                  : "text-slate-500"
              }`}
            >
              GR
            </button>
          </div>
        </div>
      </section>

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

        <div className="relative mx-auto grid min-h-[520px] max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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
            {landing.highlights[lang].map((highlight) => (
              <article
                key={highlight}
                className="rounded-3xl bg-white/16 p-6 shadow-lg backdrop-blur-md"
              >
                <div className="text-3xl">⚓</div>
                <h3 className="mt-4 text-xl font-semibold">{highlight}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  {t.highlightReason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

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

              <p className="mt-5 text-base leading-8 text-slate-500">
                {landing.overview[lang]}
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {t.featuredBusinesses}
              </p>

              {businesses.length === 0 ? (
                <p className="mt-6 text-base leading-8 text-slate-500">
                  {t.emptyBusinesses}
                </p>
              ) : (
                <div className="mt-6 space-y-8">
                  {businesses.map((business) => {
                    const businessHref =
                      business.href || `/businesses/${business.slug}`;

                    return (
                      <article
                        key={business.slug}
                        className="overflow-hidden rounded-[28px] border border-slate-200 bg-white hover:bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
                          <div className="relative min-h-[280px] h-[260px] w-full bg-slate-100 sm:h-[320px] lg:h-full">
                            <Image
                              src={business.image}
                              alt={business.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                          </div>

                          <div className="flex flex-col justify-between p-6 md:p-8">
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <div>
                                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
                                    {business.category[lang]}
                                  </div>

                                  <h3 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                                    {business.name}
                                  </h3>

                                  <p className="mt-3 text-sm font-medium text-slate-500">
                                    {business.place}
                                  </p>
                                </div>

                                {business.badge && (
                                  <span className="inline-flex rounded-full bg-indigo-100 text-indigo-800 px-3 py-1 text-sm font-semibold text-indigo-700">
                                    {business.badge}
                                  </span>
                                )}
                              </div>

                              <p className="mt-6 text-base leading-8 text-slate-500">
                                {business.info[lang]}
                              </p>
                            </div>

                            <div className="mt-8">
                              {isExternalUrl(businessHref) ? (
                                <a
                                  href={businessHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 border-none px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-500"
                                >
                                  {business.name}
                                </a>
                              ) : (
                                <Link
                                  href={withLang(businessHref)}
                                  className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 border-none px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-indigo-500"
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
              )}
            </article>
          </div>

          <aside className="space-y-6">
            <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cyan-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {t.pageHighlights}
              </p>

              <div className="mt-5 grid gap-3">
                {landing.highlights[lang].map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-cyan-100 bg-white backdrop-blur-md px-4 py-3 text-sm font-medium text-slate-600"
                  >
                    ⚓ {highlight}
                  </div>
                ))}
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
                  className="block rounded-2xl bg-indigo-600 border-none px-5 py-3 text-center font-semibold text-slate-900 transition hover:bg-indigo-500"
                >
                  {t.exploreMoreTours}
                </Link>

                <Link
                  href={withLang("/")}
                  className="block rounded-2xl border border-slate-200 px-5 py-3 text-center font-semibold text-slate-600 transition hover:bg-white hover:bg-slate-50"
                >
                  {t.backToHomepage}
                </Link>
              </div>
            </article>
          </aside>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>{t.footerText}</div>

          <div className="flex gap-5">
            <Link href={withLang("/")} className="hover:text-slate-900">
              {t.home}
            </Link>

            <Link href={withLang("/#tours")} className="hover:text-slate-900">
              {t.tours}
            </Link>

            <Link
              href={withLang("/travel-to-greece")}
              className="hover:text-slate-900"
            >
              {t.travelToGreece}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}