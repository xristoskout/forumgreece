"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SiteHeader from "../../../../components/site-header";

import {
  siteBrand,
  siteBrandLine,
  type Lang,
  type TourItem,
} from "../../../../lib/content";

type TourDetailsClientProps = {
  tour: TourItem;
  lang: Lang;
};

export default function TourDetailsClient({
  tour,
  lang,
}: TourDetailsClientProps) {
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

  return (
    <main className="min-h-screen bg-transparent text-slate-900 pt-20">
      <SiteHeader />

      <section
        className="relative overflow-hidden text-slate-900"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,24,44,0.82) 0%, rgba(7,24,44,0.55) 45%, rgba(7,24,44,0.25) 100%), url('${tour.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid min-h-[560px] max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              {lang === "en" ? "Greece Tours" : "Εκδρομές στην Ελλάδα"}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {tour.title[lang]}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-900/90">
              {tour.description[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLang("/#tours")}
                className="rounded-full bg-white backdrop-blur-md px-6 py-3 font-semibold text-indigo-800 shadow-sm transition hover:-translate-y-0.5"
              >
                {lang === "en" ? "Back to tours" : "Επιστροφή στις εκδρομές"}
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
            {tour.highlights[lang].map((highlight) => (
              <article
                key={highlight}
                className="rounded-3xl bg-white/16 p-6 shadow-lg backdrop-blur-md"
              >
                <div className="text-3xl">🗺️</div>
                <h3 className="mt-4 text-xl font-semibold">{highlight}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-900/90">
                  {lang === "en"
                    ? "A standout stop or travel moment connected to this tour experience."
                    : "Ένα από τα πιο δυνατά σημεία ή ταξιδιωτικές στιγμές αυτής της εκδρομής."}
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
                {lang === "en" ? "Tour Overview" : "Περιγραφή Εκδρομής"}
              </p>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
                {tour.title[lang]}
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {tour.overview[lang]}
              </p>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                  {lang === "en"
                    ? "What This Page Includes"
                    : "Τι Περιλαμβάνει Αυτή η Σελίδα"}
                </p>

                <div className="mt-6 grid gap-3">
                  {tour.included[lang].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-3 text-sm font-medium text-indigo-200 transition-colors group-hover:bg-indigo-100"
                    >
                      <span className="text-indigo-700 mr-2">✓</span> {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="group rounded-[2rem] border border-slate-200 bg-indigo-50/80 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                  {lang === "en" ? "Perfect For" : "Ιδανικό Για"}
                </p>

                <div className="mt-6 grid gap-3">
                  {tour.perfectFor[lang].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white backdrop-blur-md px-4 py-3 text-sm font-medium text-slate-600 transition-colors group-hover:bg-slate-50"
                    >
                      ✨ {item}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {tour.sections.map((section) => (
              <article
                key={section.title.en}
                className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 shadow-inner">
                    📍
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                    {tour.place}
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
            <article className="sticky top-32 group rounded-[2rem] border border-slate-200 bg-indigo-50/80 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
                {lang === "en"
                  ? "Destination Highlights"
                  : "Σημεία που Ξεχωρίζουν"}
              </p>

              <div className="mt-6 grid gap-3">
                {tour.highlights[lang].map((highlight) => (
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
                {tour.info[lang]}
              </p>

              <div className="mt-8 space-y-4">
                <Link
                  href={withLang("/#tours")}
                  className="block rounded-xl bg-indigo-600 border-none px-5 py-4 text-center font-semibold text-white shadow-lg transition-all hover:bg-indigo-500 hover:scale-105 hover:shadow-indigo-500/25"
                >
                  {lang === "en"
                    ? "Explore more tours →"
                    : "Δες περισσότερες εκδρομές →"}
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
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            {lang === "en"
              ? `${siteBrand} — tours, destinations and travel inspiration across Greece.`
              : `${siteBrand} — εκδρομές, προορισμοί και ταξιδιωτική έμπνευση σε όλη την Ελλάδα.`}
          </div>

          <div className="flex gap-5">
            <Link href={withLang("/")} className="hover:text-slate-900">
              {lang === "en" ? "Home" : "Αρχική"}
            </Link>

            <Link href={withLang("/#tours")} className="hover:text-slate-900">
              {lang === "en" ? "Tours" : "Εκδρομές"}
            </Link>

            <Link
              href={withLang("/travel-to-greece")}
              className="hover:text-slate-900"
            >
              {lang === "en" ? "Travel to Greece" : "Ταξίδι στην Ελλάδα"}
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-4 pt-6 pb-8 flex justify-center">
          <a href="https://www.focusai.gr" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
            {lang === "en" ? "Website Design 2026 by Focus AI" : "Κατασκευή Ιστοσελίδας 2026 By Focus AI"}
          </a>
        </div>
      </footer>
    </main>
  );
}