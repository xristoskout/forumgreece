"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <section className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-0 py-3 sm:gap-6 sm:px-6 sm:py-5">
          <Link
            href={withLang("/")}
            className="group flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <>
              <Image
                src="/images/logo/gogreecenow-logo.png"
                alt="GoGreeceNow logo"
                width={56}
                height={56}
                className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14"
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
            </>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
            <button
              onClick={() => switchLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "en"
                  ? "bg-sky-600 text-white"
                  : "text-slate-600"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => switchLanguage("el")}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                lang === "el"
                  ? "bg-sky-600 text-white"
                  : "text-slate-600"
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

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              {tour.description[lang]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={withLang("/#tours")}
                className="rounded-full bg-white px-6 py-3 font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5"
              >
                {lang === "en" ? "Back to tours" : "Επιστροφή στις εκδρομές"}
              </Link>

              <Link
                href={withLang("/")}
                className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
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
                <p className="mt-2 text-sm leading-6 text-white/90">
                  {lang === "en"
                    ? "A standout stop or travel moment connected to this tour experience."
                    : "Ένα από τα πιο δυνατά σημεία ή ταξιδιωτικές στιγμές αυτής της εκδρομής."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en" ? "Tour Overview" : "Περιγραφή Εκδρομής"}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                {tour.title[lang]}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {tour.overview[lang]}
              </p>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {lang === "en"
                    ? "What This Page Includes"
                    : "Τι Περιλαμβάνει Αυτή η Σελίδα"}
                </p>

                <div className="mt-5 grid gap-3">
                  {tour.included[lang].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {lang === "en" ? "Perfect For" : "Ιδανικό Για"}
                </p>

                <div className="mt-5 grid gap-3">
                  {tour.perfectFor[lang].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
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
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {tour.place}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight">
                  {section.title[lang]}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  {section.text[lang]}
                </p>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-cyan-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en"
                  ? "Destination Highlights"
                  : "Σημεία που Ξεχωρίζουν"}
              </p>

              <div className="mt-5 grid gap-3">
                {tour.highlights[lang].map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-cyan-100 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    📍 {highlight}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {lang === "en" ? "Travel Note" : "Σημείωση Ταξιδιού"}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {tour.info[lang]}
              </p>

              <div className="mt-8 space-y-3">
                <Link
                  href={withLang("/#tours")}
                  className="block rounded-2xl bg-sky-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-sky-800"
                >
                  {lang === "en"
                    ? "Explore more tours"
                    : "Δες περισσότερες εκδρομές"}
                </Link>

                <Link
                  href={withLang("/")}
                  className="block rounded-2xl border border-slate-200 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
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

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            {lang === "en"
              ? `${siteBrand} — tours, destinations and travel inspiration across Greece.`
              : `${siteBrand} — εκδρομές, προορισμοί και ταξιδιωτική έμπνευση σε όλη την Ελλάδα.`}
          </div>

          <div className="flex gap-5">
            <Link href={withLang("/")} className="hover:text-slate-800">
              {lang === "en" ? "Home" : "Αρχική"}
            </Link>

            <Link href={withLang("/#tours")} className="hover:text-slate-800">
              {lang === "en" ? "Tours" : "Εκδρομές"}
            </Link>

            <Link
              href={withLang("/travel-to-greece")}
              className="hover:text-slate-800"
            >
              {lang === "en" ? "Travel to Greece" : "Ταξίδι στην Ελλάδα"}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}