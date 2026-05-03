"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SiteHeader from "../../../../components/site-header";

import { type FoodCard, type Lang, siteBrand, siteBrandLine } from "../../../../lib/content";
import { type ExperienceBusiness } from "../../../../lib/experiences";

type EatDrinkClientProps = {
  item: FoodCard;
  lang: Lang;
  businesses: ExperienceBusiness[];
};

export default function EatDrinkClient({ item, lang, businesses }: EatDrinkClientProps) {
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

  const t = {
    navHome: {
      en: "Home",
      el: "Αρχική",
    },
    navSection: {
      en: "Eat & Drink",
      el: "Φαγητό & Ποτό",
    },
    eyebrow: {
      en: "Food & Drink Guide",
      el: "Οδηγός Φαγητού & Ποτού",
    },
    overview: {
      en: "Overview",
      el: "Επισκόπηση",
    },
    specialties: {
      en: "What stands out",
      el: "Τι ξεχωρίζει",
    },
    place: {
      en: "Place",
      el: "Περιοχή",
    },
    back: {
      en: "Back to homepage",
      el: "Επιστροφή στην αρχική",
    },
    localBusinesses: {
      en: "Featured Local Producers & Businesses",
      el: "Προτεινόμενοι Τοπικοί Παραγωγοί & Επιχειρήσεις",
    },
  };

  const renderText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-slate-900 font-bold">{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-900 pt-20">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-800 backdrop-blur-md mb-6 relative overflow-hidden group">
            <span className="relative z-10">{t.eyebrow[lang]}</span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
              {item.title[lang]}
            </h1>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md px-5 py-2 text-sm font-medium text-slate-600">
            <span className="text-indigo-700">📍</span> {t.place[lang]}: {item.place}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="group relative overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-200 transition-all duration-700 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="relative h-[450px] transition-all duration-700 group-hover:scale-110 group-hover:brightness-110">
            <Image
              src={item.image}
              alt={item.title[lang]}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="group rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] flex flex-col justify-center h-fit">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700 mb-4">
            {t.overview[lang]}
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            The Experience
          </h2>
          <div className="text-lg leading-relaxed text-slate-600 mb-8 whitespace-pre-line">
            {renderText(item.overview[lang])}
          </div>

          {item.sections && item.sections.map((section, idx) => (
            <div key={idx} className="mt-8 pt-8 border-t border-slate-100">
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-900">
                {section.title[lang]}
              </h3>
              <div className="text-lg leading-relaxed text-slate-600 whitespace-pre-line">
                {renderText(section.text[lang])}
              </div>
            </div>
          ))}

          <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 backdrop-blur-md">
             <div className="flex items-start gap-4">
               <div className="text-indigo-700 text-2xl">💡</div>
               <p className="text-sm leading-relaxed text-slate-600">
                 {item.info[lang]}
               </p>
             </div>
          </div>
        </div>

        <div className="space-y-8 h-fit lg:sticky lg:top-24">
          {/* Featured Businesses Section */}
          {businesses.length > 0 && (
            <div className="rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md p-8 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-700 mb-6">
                {t.localBusinesses[lang]}
              </p>
              
              <div className="space-y-6">
                {businesses.map((business) => (
                  <Link
                    key={business.slug}
                    href={withLang(business.href || `/businesses/${business.slug}`)}
                    className="group block overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={business.image}
                        alt={business.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-indigo-700 shadow-sm">
                          {business.category[lang]}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {business.name}
                      </h3>
                      <p className="mt-2 text-xs text-slate-500 line-clamp-2 font-light leading-relaxed">
                        {business.info[lang]}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="group rounded-[2.5rem] border border-slate-200 bg-indigo-50/80 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700 mb-4">
              {t.specialties[lang]}
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Highlights
            </h2>
            <ul className="space-y-4 text-slate-600">
              {item.specialties[lang].map((specialty) => (
                <li key={specialty} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white backdrop-blur-md px-5 py-4 transition-all hover:bg-slate-50">
                  <span className="text-indigo-700">✨</span> {specialty}
                </li>
              ))}
            </ul>
          </div>
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
      <footer className="border-t border-slate-200 bg-white backdrop-blur-md mt-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
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
        <div className="border-t border-slate-100 mt-2 pt-5 pb-6 flex flex-col items-center gap-2">
          <a 
            href="https://www.focusai.gr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 text-sm font-bold tracking-widest transition-all"
          >
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-500">
              {lang === "en" ? "Website Design 2026 by Focus AI" : "Κατασκευή Ιστοσελίδας 2026 By Focus AI"}
            </span>
            <span className="text-indigo-400 group-hover:text-purple-500 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em]">Premium Digital Experiences</p>
        </div>
      </footer>
    </main>
  );
}
