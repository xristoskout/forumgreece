"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { hotels, type Lang, siteBrand, siteBrandLine } from "../../../../lib/content";

export default function HotelDetailPage() {
  const params = useParams<{ lang: string; slug: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const lang: Lang = params?.lang === "el" ? "el" : "en";
  const slug = params?.slug;

  const item = hotels.find((entry) => entry.slug === slug);

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
    navSection: { en: "Hotels", el: "Ξενοδοχεία" },
    eyebrow: { en: "Featured Stay", el: "Προτεινόμενη Διαμονή" },
    overview: { en: "Overview", el: "Επισκόπηση" },
    features: { en: "Key features", el: "Βασικά χαρακτηριστικά" },
    location: { en: "Location", el: "Τοποθεσία" },
    back: { en: "Back to homepage", el: "Επιστροφή στην αρχική" },
    notFound: {
      en: "Hotel not found.",
      el: "Το ξενοδοχείο δεν βρέθηκε.",
    },
  };

  if (!item) {
    return <div className="p-10">{t.notFound[lang]}</div>;
  }

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
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
              <div className="truncate text-lg font-bold tracking-tight text-indigo-800 transition group-hover:text-indigo-700 sm:text-2xl">
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
              className="text-sm font-medium text-slate-600 hover:text-indigo-700"
            >
              {t.navHome[lang]}
            </Link>
            <span className="text-sm font-medium text-indigo-700">
              {t.navSection[lang]}
            </span>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 p-1">
              <button
                onClick={() => switchLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  lang === "en" ? "bg-sky-600 text-slate-900" : "text-slate-500"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLanguage("el")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  lang === "el" ? "bg-sky-600 text-slate-900" : "text-slate-500"
                }`}
              >
                GR
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-800 backdrop-blur-md mb-6 relative overflow-hidden group">
            <span className="relative z-10">{t.eyebrow[lang]}</span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
              {item.name}
            </h1>
            {item.badge ? (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/20 px-4 py-1.5 text-sm font-bold tracking-widest text-amber-200">
                ✨ {item.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md px-5 py-2 text-sm font-medium text-slate-600">
            <span className="text-indigo-700">📍</span> {t.location[lang]}: {item.place}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="group relative overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-200 transition-all duration-700 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div
            className="h-[450px] bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="group rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700 mb-4">
            {t.overview[lang]}
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            The Experience
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 mb-8">
            {item.overview[lang]}
          </p>
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 backdrop-blur-md">
             <div className="flex items-start gap-4">
               <div className="text-indigo-700 text-2xl">💡</div>
               <p className="text-sm leading-relaxed text-slate-600">
                 {item.info[lang]}
               </p>
             </div>
          </div>
        </div>

        <div className="group rounded-[2.5rem] border border-slate-200 bg-indigo-50/80 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700 mb-4">
            {t.features[lang]}
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Amenities
          </h2>
          <ul className="space-y-4 text-slate-600">
            {item.features[lang].map((feature) => (
              <li key={feature} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white backdrop-blur-md px-5 py-4 transition-all hover:bg-slate-50">
                <span className="text-indigo-700">✨</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 text-center flex justify-center">
        <Link
          href={withLang("/")}
          className="group relative inline-flex overflow-hidden rounded-full border border-slate-300 bg-slate-50 px-8 py-4 text-sm font-semibold text-slate-900 shadow-xl transition-all hover:scale-105 hover:bg-indigo-600 hover:border-indigo-500 backdrop-blur-md"
        >
          <span className="relative z-10 flex items-center gap-2">
            ← {t.back[lang]}
          </span>
        </Link>
      </section>
    </main>
  );
}