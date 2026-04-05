"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import SiteHeader from "../../../../components/site-header";

import {
  siteBrand,
  siteBrandLine,
  destinations,
  type Lang,
} from "../../../../lib/content";
import Image from "next/image";
import { destinationSections } from "../../../../lib/destination-sections";
import { destinationDetails } from "../../../../lib/destination-details";
import { experienceBusinesses } from "../../../../lib/experiences";

export default function DestinationDetailsPage() {
  const params = useParams<{ lang: string; slug: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const lang: Lang = params?.lang === "el" ? "el" : "en";
  const slug = params?.slug;

  const destination = destinations.find((item) => item.slug === slug);
  const businesses = experienceBusinesses.filter(
    (b) => b.landingSlug === `${slug}-tours` || b.landingSlug === slug
  );

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

  if (!destination) {
    return (
      <div className="p-10">
        {lang === "en"
          ? "Destination not found."
          : "Ο προορισμός δεν βρέθηκε."}
      </div>
    );
  }

  const sections = destinationSections[destination.slug] ?? [];
  const details = destinationDetails[destination.slug];

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader />

      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,24,44,0.82) 0%, rgba(7,24,44,0.55) 45%, rgba(7,24,44,0.25) 100%), url('${destination.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid min-h-[560px] max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              {destination.region[lang]}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {destination.name}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              {details ? details.overview[lang] : destination.overview[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLang("/#destinations")}
                className="rounded-full bg-white backdrop-blur-md px-6 py-3 font-semibold text-indigo-800 shadow-sm transition hover:-translate-y-0.5"
              >
                {lang === "en"
                  ? "Back to destinations"
                  : "Επιστροφή στους προορισμούς"}
              </Link>

              <Link
                href={withLang("/")}
                className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-slate-50 hover:text-slate-900"
              >
                {lang === "en" ? "Home page" : "Αρχική"}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {destination.highlights[lang].map((highlight) => (
              <article
                key={highlight}
                className="rounded-3xl bg-white/16 p-6 shadow-lg backdrop-blur-md"
              >
                <div className="text-3xl">📍</div>
                <h3 className="mt-4 text-xl font-semibold">{highlight}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  {lang === "en"
                    ? "A key reason this destination stands out for travelers."
                    : "Ένας από τους βασικούς λόγους που αυτός ο προορισμός ξεχωρίζει."}
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
                {lang === "en"
                  ? "Destination Overview"
                  : "Περιγραφή Προορισμού"}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                {destination.name}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-500">
                {details ? details.overview[lang] : destination.overview[lang]}
              </p>
            </article>

            {sections.map((section) => (
              <article
                key={section.title.en}
                className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  {destination.name}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  {section.title[lang]}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  {section.text[lang]}
                </p>
              </article>
            ))}

            {businesses.length > 0 && (
              <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                  {lang === "en" ? "Featured Businesses" : "Προτεινόμενες Επιχειρήσεις"}
                </p>

                <div className="mt-8 space-y-8">
                  {businesses.map((business) => {
                    const businessHref = business.href || `/businesses/${business.slug}`;
                    const isExternalUrl = /^https?:\/\//i.test(businessHref);

                    return (
                      <div
                        key={business.slug}
                        className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50/50 shadow-sm transition hover:shadow-md"
                      >
                        <div className="grid gap-0 sm:grid-cols-[220px_1fr] md:grid-cols-[260px_1fr]">
                          <div className="relative h-56 w-full bg-slate-100 sm:h-full">
                            {business.image && (
                              <Image
                                src={business.image}
                                alt={business.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 260px"
                              />
                            )}
                          </div>

                          <div className="flex flex-col justify-between p-6 md:p-8">
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                                <div className="text-sm font-extrabold uppercase tracking-widest text-indigo-600">
                                  {business.category[lang]}
                                </div>
                                {business.badge && (
                                  <span className="inline-flex rounded-full bg-indigo-100 text-indigo-800 px-3 py-1 text-xs font-bold ring-1 ring-inset ring-indigo-200">
                                    {business.badge}
                                  </span>
                                )}
                              </div>

                              <h4 className="text-2xl font-black tracking-tight text-slate-900 mb-2">
                                {business.name}
                              </h4>
                              
                              <p className="text-base font-medium text-slate-600 mb-5 flex items-center gap-2">
                                📍 {business.place}
                              </p>

                              <p className="text-base text-slate-600 leading-relaxed">
                                {business.info[lang]}
                              </p>
                            </div>

                            <div className="mt-8">
                              {isExternalUrl ? (
                                <a
                                  href={businessHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-500 hover:shadow-lg"
                                >
                                  {business.ctaLabel?.[lang] || (lang === "en" ? "Visit Website" : "Επισκεφθείτε την ιστοσελίδα")}
                                </a>
                              ) : (
                                <Link
                                  href={withLang(businessHref)}
                                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-500 hover:shadow-lg"
                                >
                                  {business.ctaLabel?.[lang] || (lang === "en" ? "View Details" : "Δείτε Λεπτομέρειες")}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            )}
          </div>

          <aside className="space-y-6">
            {details && (
              <>
                <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cyan-50 p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                    {lang === "en"
                      ? "What This Page Includes"
                      : "Τι Περιλαμβάνει Αυτή Η Σελίδα"}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {details.pageIncludes[lang].map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-cyan-100 bg-white backdrop-blur-md px-4 py-3 text-sm font-medium text-slate-600"
                      >
                        ✓ {point}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                    {lang === "en" ? "Perfect For" : "Ιδανικό Για"}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {details.perfectFor[lang].map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600"
                      >
                        ✨ {point}
                      </div>
                    ))}
                  </div>
                </article>
              </>
            )}

            <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cyan-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {lang === "en" ? "Highlights" : "Σημεία που Ξεχωρίζουν"}
              </p>

              <div className="mt-5 grid gap-3">
                {destination.highlights[lang].map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-cyan-100 bg-white backdrop-blur-md px-4 py-3 text-sm font-medium text-slate-600"
                  >
                    ✨ {highlight}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {lang === "en" ? "Travel Note" : "Σημείωση Ταξιδιού"}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {destination.blurb[lang]}
              </p>

              <div className="mt-8 space-y-3">
                <Link
                  href={withLang("/#destinations")}
                  className="block rounded-2xl bg-indigo-600 border-none px-5 py-3 text-center font-semibold text-slate-900 transition hover:bg-indigo-500"
                >
                  {lang === "en"
                    ? "Explore more destinations"
                    : "Δες περισσότερους προορισμούς"}
                </Link>

                <Link
                  href={withLang("/")}
                  className="block rounded-2xl border border-slate-200 px-5 py-3 text-center font-semibold text-slate-600 transition hover:bg-white hover:bg-slate-50"
                >
                  {lang === "en"
                    ? "Back to homepage"
                    : "Επιστροφή στην αρχική"}
                </Link>
              </div>
            </article>
          </aside>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            {lang === "en"
              ? `${siteBrand} — destinations, travel inspiration and local experiences across Greece.`
              : `${siteBrand} — προορισμοί, ταξιδιωτική έμπνευση και τοπικές εμπειρίες σε όλη την Ελλάδα.`}
          </div>

          <div className="flex gap-5">
            <Link href={withLang("/")} className="hover:text-slate-900">
              {lang === "en" ? "Home" : "Αρχική"}
            </Link>

            <Link
              href={withLang("/#destinations")}
              className="hover:text-slate-900"
            >
              {lang === "en" ? "Destinations" : "Προορισμοί"}
            </Link>

            <Link
              href={withLang("/travel-to-greece")}
              className="hover:text-slate-900"
            >
              {lang === "en" ? "Travel to Greece" : "Ταξίδι στην Ελλάδα"}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}