"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  siteBrand,
  siteBrandLine,
  type Destination,
  type Lang,
} from "../../../../lib/content";
import { destinationSections } from "../../../../lib/destination-sections";
import { destinationDetails } from "../../../../lib/destination-details";

type DestinationDetailsClientProps = {
  destination: Destination;
  lang: Lang;
};

export default function DestinationDetailsClient({
  destination,
  lang,
}: DestinationDetailsClientProps) {
  const pathname = usePathname();
  const router = useRouter();

  const sections = destinationSections[destination.slug] ?? [];
  const details = destinationDetails[destination.slug];

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

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <section className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <Link
            href={withLang("/")}
            className="group flex shrink-0 items-center gap-3"
          >
            <div>
              <div className="text-2xl font-bold tracking-tight text-indigo-800 transition group-hover:text-indigo-700">
                {siteBrand}
              </div>
              <div className="text-sm text-slate-500">
                {siteBrandLine[lang]}
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 p-1">
            <button
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

      <section
        className="relative overflow-hidden text-slate-900"
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

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-900/90">
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
                className="rounded-full border border-white/40 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
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
                <p className="mt-2 text-sm leading-6 text-slate-900/90">
                  {lang === "en"
                    ? "A key reason this destination stands out for travelers."
                    : "Ένας από τους βασικούς λόγους που αυτός ο προορισμός ξεχωρίζει."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <article className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                {lang === "en"
                  ? "Destination Overview"
                  : "Περιγραφή Προορισμού"}
              </p>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
                {destination.name}
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {details ? details.overview[lang] : destination.overview[lang]}
              </p>
            </article>

            {sections.map((section) => (
              <article
                key={section.title.en}
                className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-inner">
                     📍
                   </div>
                   <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                     {destination.name}
                   </p>
                </div>

                <h3 className="text-3xl font-bold tracking-tight">
                  {section.title[lang]}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {section.text[lang]}
                </p>
              </article>
            ))}
          </div>

          <aside className="space-y-8">
            {details && (
              <>
                <article className="group rounded-[2rem] border border-slate-200 bg-indigo-50/80 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                    {lang === "en"
                      ? "What This Page Includes"
                      : "Τι Περιλαμβάνει Αυτή Η Σελίδα"}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {details.pageIncludes[lang].map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-3 text-sm font-medium text-indigo-200 transition-colors group-hover:bg-indigo-100"
                      >
                        <span className="text-indigo-700 mr-2">✓</span> {point}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                    {lang === "en" ? "Perfect For" : "Ιδανικό Για"}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {details.perfectFor[lang].map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-slate-200 bg-white backdrop-blur-md px-4 py-3 text-sm font-medium text-slate-600 transition-colors group-hover:bg-slate-50"
                      >
                        ✨ {point}
                      </div>
                    ))}
                  </div>
                </article>
              </>
            )}

            <article className="sticky top-32 group rounded-[2rem] border border-slate-200 bg-indigo-50/80 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                {lang === "en" ? "Highlights" : "Σημεία που Ξεχωρίζουν"}
              </p>

              <div className="mt-6 grid gap-3">
                {destination.highlights[lang].map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-2xl border border-indigo-500/20 bg-white backdrop-blur-md px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50"
                  >
                    <div className="text-indigo-700">📍</div> {highlight}
                  </div>
                ))}
              </div>
            </article>

            <article className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                {lang === "en" ? "Travel Note" : "Σημείωση Ταξιδιού"}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {destination.blurb[lang]}
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  href={withLang("/#destinations")}
                  className="block rounded-xl bg-indigo-600 border-none px-5 py-4 text-center font-semibold text-slate-900 shadow-lg transition-all hover:bg-indigo-500 hover:scale-105 hover:shadow-indigo-500/25"
                >
                  {lang === "en"
                    ? "Explore more destinations →"
                    : "Δες περισσότερους προορισμούς →"}
                </Link>

                <Link
                  href={withLang("/")}
                  className="block rounded-xl border border-slate-200 px-5 py-4 text-center font-semibold text-slate-600 transition-all hover:bg-slate-50"
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