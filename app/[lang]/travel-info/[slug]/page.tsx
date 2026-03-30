"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  type Lang,
  siteBrand,
  siteBrandLine,
  travelInfoGuides,
} from "../../../../lib/content";

export default function TravelInfoGuidePage() {
  const params = useParams<{ lang: string; slug: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const lang: Lang = params?.lang === "el" ? "el" : "en";
  const slug = params?.slug;

  const item = travelInfoGuides.find((entry) => entry.slug === slug);

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
    eyebrow: { en: "Travel Guide", el: "Ταξιδιωτικός Οδηγός" },
    overview: { en: "Overview", el: "Επισκόπηση" },
    highlights: { en: "Useful points", el: "Χρήσιμα σημεία" },
    back: { en: "Back to homepage", el: "Επιστροφή στην αρχική" },
    notFound: { en: "Guide not found.", el: "Ο οδηγός δεν βρέθηκε." },
  };

  if (!item) {
    return <div className="p-10">{t.notFound[lang]}</div>;
  }

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-900">
      <section className="border-b border-slate-200 bg-white/95 backdrop-blur">
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
              <div className="truncate text-lg font-bold tracking-tight text-sky-900 transition group-hover:text-sky-700 sm:text-2xl">
                {siteBrand}
              </div>
              <div className="hidden text-sm text-slate-500 sm:block">
                {siteBrandLine[lang]}
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href={withLang("/")}
              className="text-sm font-medium text-slate-700 hover:text-sky-700"
            >
              {t.navHome[lang]}
            </Link>
            <span className="text-sm font-medium text-sky-700">
              {t.navSection[lang]}
            </span>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
              <button
                onClick={() => switchLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  lang === "en" ? "bg-sky-600 text-white" : "text-slate-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLanguage("el")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  lang === "el" ? "bg-sky-600 text-white" : "text-slate-600"
                }`}
              >
                GR
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          {t.eyebrow[lang]}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          {item.title[lang]}
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="overflow-hidden rounded-[32px] shadow-xl">
          <div
            className="h-[380px] bg-cover bg-center"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">{t.overview[lang]}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {item.overview[lang]}
          </p>
          <p className="mt-6 text-sm leading-7 text-slate-500">
            {item.description[lang]}
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">{t.highlights[lang]}</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            {item.points[lang].map((point) => (
              <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href={withLang("/")}
          className="inline-flex rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          {t.back[lang]}
        </Link>
      </section>
    </main>
  );
}