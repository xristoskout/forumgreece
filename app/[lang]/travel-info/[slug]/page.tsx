"use client";

import Link from "next/link";
import SiteHeader from "../../../../components/site-header";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  type Lang,
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
    if (cleanPath === "/") return `/${locale}`;
    return `/${locale}${cleanPath}`;
  }

  const t = {
    eyebrow: { en: "Travel Guide", el: "Ταξιδιωτικός Οδηγός" },
    overview: { en: "Overview", el: "Επισκόπηση" },
    highlights: { en: "Key takeaways", el: "Βασικά σημεία" },
    back: { en: "← Back to Travel Hub", el: "← Επιστροφή στις Пληροφορίες" },
    notFound: { en: "Guide not found.", el: "Ο οδηγός δεν βρέθηκε." },
  };

  if (!item) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.notFound[lang]}</h2>
          <Link href={withLang("/travel-info")} className="text-indigo-600 hover:underline">
            {t.back[lang]}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <SiteHeader />

      <section className="relative overflow-hidden min-h-[60vh] flex items-end pt-32 pb-16">
        <div
          className="absolute inset-0 z-0 transition-transform duration-[2s] scale-105"
          style={{
            backgroundImage: `url('${item.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 animate-fade-in-up">
          <div className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-100 backdrop-blur-md mb-6 relative overflow-hidden group">
            <span className="relative z-10">{t.eyebrow[lang]}</span>
          </div>
          
          <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold leading-[1.1] text-white drop-shadow-2xl tracking-tight mb-6">
            {item.title[lang]}
          </h1>

          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-slate-200 font-light drop-shadow-md">
            {item.description[lang]}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_350px] items-start">
          <div className="space-y-12">
            <article className="rounded-[2.5rem] border border-slate-200/60 bg-white/80 backdrop-blur-xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
              <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600 mb-6 relative z-10">{t.overview[lang]}</h2>
              <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-medium relative z-10">
                {item.overview[lang]}
              </p>
            </article>

            {item.sections && item.sections.map((section, idx) => (
              <div key={idx} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white font-bold text-xl shadow-lg shadow-indigo-600/30">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                    {section.title[lang]}
                  </h3>
                </div>
                <div className="pl-16">
                  <p className="text-lg leading-relaxed text-slate-600">
                    {section.content[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="sticky top-28 space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 p-8">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                {t.highlights[lang]}
              </h3>
              <ul className="space-y-4">
                {item.points[lang].map((point, idx) => (
                  <li key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-colors">
                    <span className="text-indigo-500 font-bold shrink-0">✓</span>
                    <span className="text-sm font-medium text-slate-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-indigo-900 to-indigo-700 p-8 text-white shadow-xl shadow-indigo-900/30 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
               <h3 className="text-xl font-bold mb-4 relative z-10">
                 {lang === "en" ? "Ready to plan?" : "Έτοιμος για οργάνωση;"}
               </h3>
               <p className="text-indigo-100 text-sm leading-relaxed mb-6 relative z-10">
                 {lang === "en" 
                   ? "Head back to the travel hub to explore more regions, stays and practical tips." 
                   : "Επίστρεψε στο κεντρικό hub για να δεις περισσότερες περιοχές, ξενοδοχεία και tips."}
               </p>
               <Link
                  href={withLang("/travel-info")}
                  className="block w-full rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-indigo-900 hover:bg-slate-50 transition-colors relative z-10"
                >
                  {t.back[lang]}
               </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}