"use client";

import { Fragment } from "react";
import Link from "next/link";
import SiteHeader from "../../../../components/site-header";
import { experienceBusinesses } from "../../../../lib/experiences";
import { useLocale } from "../../../../lib/useLocale";
import Image from "next/image";
import type { Lang } from "../../../../lib/content";

type TravelInfoGuideData = {
  slug: string;
  image: string;
  title: Record<"en" | "el", string>;
  description: Record<"en" | "el", string>;
  overview: Record<"en" | "el", string>;
  points: Record<"en" | "el", string[]>;
  sections?: {
    title: Record<"en" | "el", string>;
    content: Record<"en" | "el", string>;
  }[];
};

type TravelInfoGuideClientProps = {
  lang: Lang;
  slug: string;
  item: TravelInfoGuideData;
};

export default function TravelInfoGuideClient({ lang, slug, item }: TravelInfoGuideClientProps) {
  const { withLang } = useLocale();

  const businesses = experienceBusinesses.filter(
    (b) => b.landingSlug === slug || b.travelInfoSlug === slug
  );

  const t = {
    eyebrow: { en: "Travel Guide", el: "Ταξιδιωτικός Οδηγός" },
    overview: { en: "Overview", el: "Επισκόπηση" },
    highlights: { en: "Key takeaways", el: "Βασικά σημεία" },
    back: { en: "← Back to Travel Hub", el: "← Επιστροφή στις Пληροφορίες" },
  };

  const renderTextWithLinks = (text: string) => {
    const elements: React.ReactNode[] = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)|https?:\/\/[^\s]+/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(text.slice(lastIndex, match.index));
      }

      if (match[1] && match[2]) {
        const url = match[2];
        if (url.startsWith("/")) {
          elements.push(
            <Link key={match.index} href={withLang(url)} className="underline text-indigo-600 hover:text-indigo-800 font-medium">
              {match[1]}
            </Link>
          );
        } else {
          elements.push(
            <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="underline text-indigo-600 hover:text-indigo-800">
              {match[1]}
            </a>
          );
        }
      } else {
        elements.push(
          <a key={match.index} href={match[0]} target="_blank" rel="noopener noreferrer" className="underline text-indigo-600 hover:text-indigo-800">{match[0]}</a>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements.length > 0 ? elements : text;
  };

  const renderBusinesses = () => {
    if (businesses.length === 0) return null;
    return (
      <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-indigo-50 to-white shadow-xl shadow-slate-200/50 p-8">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          {lang === "en" ? "Related Services & Businesses" : "Σχετικές Υπηρεσίες & Επιχειρήσεις"}
        </h3>

        <div className="space-y-6">
          {businesses.map((business) => {
            const businessHref = business.href || `/businesses/${business.slug}`;
            const isExternalUrl = /^https?:\/\//i.test(businessHref);

            return (
              <div
                key={business.slug}
                className="group overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  {business.image ? (
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-200/50 flex flex-col items-center justify-center text-slate-400">
                      <span className="text-3xl mb-1">🚌</span>
                      <span className="text-xs uppercase font-semibold">No Image</span>
                    </div>
                  )}
                  {business.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-indigo-800 shadow-sm backdrop-blur-sm">
                        {business.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 mb-1">
                    {business.category[lang]}
                  </div>

                  <h4 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
                    {business.name}
                  </h4>

                  <p className="text-sm text-slate-500 line-clamp-3 mb-4">
                    {business.info[lang]}
                  </p>

                  <div className="mt-4">
                    {isExternalUrl ? (
                      <a
                        href={businessHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 transition-colors hover:bg-indigo-500 shadow-sm"
                      >
                        {business.ctaLabel?.[lang] || (lang === "en" ? "Visit Website" : "Επισκεφθείτε την ιστοσελίδα")}
                      </a>
                    ) : (
                      <Link
                        href={withLang(businessHref)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 transition-colors hover:bg-indigo-500 shadow-sm"
                      >
                        {business.ctaLabel?.[lang] || (lang === "en" ? "View Details" : "Δείτε Λεπτομέρειες")}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <SiteHeader />

      <section className="relative overflow-hidden min-h-[60vh] flex items-end pt-32 pb-16">
        <div className="absolute inset-0 z-0 transition-transform duration-[2s] scale-105">
          <Image
            src={item.image}
            alt={item.title[lang]}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
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
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 relative z-10">
                {renderTextWithLinks(item.overview[lang])}
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
                    {renderTextWithLinks(section.content[lang])}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="sticky top-28 space-y-6">
            {renderBusinesses()}

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