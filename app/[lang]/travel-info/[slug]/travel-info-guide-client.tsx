"use client";

import { Fragment } from "react";
import Link from "next/link";
import SiteHeader from "../../../../components/site-header";
import { experienceBusinesses } from "../../../../lib/experiences";
import { useLocale } from "../../../../lib/useLocale";
import Image from "next/image";
import type { Lang } from "../../../../lib/content";
import DiscoverCarsWidget from "../../../../components/discovercars-widget";

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
  tips?: Record<"en" | "el", string[]>;
  faq?: {
    q: Record<"en" | "el", string>;
    a: Record<"en" | "el", string>;
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
    const regex = /(\*\*([^*]+)\*\*)|\[([^\]]+)\]\(([^)]+)\)|https?:\/\/[^\s]+/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(text.slice(lastIndex, match.index));
      }

      if (match[1]) {
        elements.push(
          <strong key={match.index} className="font-bold text-slate-900">{match[2]}</strong>
        );
      } else if (match[3] && match[4]) {
        const url = match[4];
        if (url.startsWith("/")) {
          elements.push(
            <Link key={match.index} href={withLang(url)} className="underline text-indigo-600 hover:text-indigo-800 font-medium">
              {match[3]}
            </Link>
          );
        } else {
          elements.push(
            <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="underline text-indigo-600 hover:text-indigo-800">
              {match[3]}
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

  const isTableBlock = (text: string) => {
    const lines = text.trim().split("\n").filter(Boolean);
    return lines.length >= 2 && lines.every((l) => l.trimStart().startsWith("|"));
  };

  const parseTable = (text: string) => {
    const lines = text.trim().split("\n").filter((l) => l.trim());
    let headerRow: string[] = [];
    let rows: string[][] = [];
    let startIdx = 0;

    if (lines.length >= 2 && /^\|[-| :]+\|?$/.test(lines[1].trim())) {
      headerRow = lines[0].split("|").map((c) => c.trim()).filter(Boolean);
      startIdx = 2;
    } else {
      headerRow = lines[0].split("|").map((c) => c.trim()).filter(Boolean);
      startIdx = 1;
    }

    for (let i = startIdx; i < lines.length; i++) {
      const cells = lines[i].split("|").map((c) => c.trim()).filter(Boolean);
      if (cells.length > 0) rows.push(cells);
    }
    return { headers: headerRow, rows };
  };

  const renderTable = (text: string, key: string | number) => {
    const { headers, rows } = parseTable(text);
    if (rows.length === 0) return null;
    const colCount = Math.max(headers.length, ...rows.map((r) => r.length));
    return (
      <div key={key} className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mb-4">
        <table className="w-full text-sm">
          {headers.length > 0 && (
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/80">
                {headers.map((h, i) => (
                  <th key={i} className="p-3 text-left text-xs font-bold uppercase tracking-widest text-slate-600">
                    {h}
                  </th>
                ))}
                {headers.length < colCount && Array.from({ length: colCount - headers.length }).map((_, i) => (
                  <th key={`empty-${i}`} className="p-3" />
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                {Array.from({ length: colCount }).map((_, ci) => (
                  <td key={ci} className="p-3 text-slate-700">
                    {renderTextWithLinks(row[ci] || "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderContent = (text: string) => {
    const blocks = text.split("\n\n");
    return blocks.map((block, bi) => {
      if (isTableBlock(block)) {
        return renderTable(block, bi);
      }
      return (
        <p key={bi} className="text-lg leading-relaxed text-slate-600 mb-4 last:mb-0">
          {renderTextWithLinks(block)}
        </p>
      );
    });
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
    <>
      <SiteHeader />
      <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 pb-20">

      {slug === "yoga-wellness-retreats-crete" && (
        <section className="relative z-20 -mb-6 mx-auto max-w-7xl px-6 pt-6">
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-lg shadow-indigo-200/50">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-700 mb-2">
              {lang === "en" ? "This guide has moved" : "Αυτός ο οδηγός έχει μεταφερθεί"}
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-3">
              {lang === "en"
                ? "The content from this page is now part of our dedicated destination guides. Find yoga and wellness retreat information on:"
                : "Το περιεχόμενο αυτής της σελίδας είναι πλέον μέρος των αφιερωμένων οδηγών προορισμού. Βρείτε πληροφορίες για yoga και wellness retreats σε:"}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={withLang("/destinations/chania")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                {lang === "en" ? "Chania destination guide →" : "Οδηγός για Χανιά →"}
              </Link>
              <Link
                href={withLang("/destinations/crete")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                {lang === "en" ? "Crete destination guide →" : "Οδηγός για Κρήτη →"}
              </Link>
              <Link
                href={withLang("/tours/crete-tours")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                {lang === "en" ? "Crete tours guide →" : "Ξεναγήσεις Κρήτης →"}
              </Link>
            </div>
          </div>
        </section>
      )}
      {slug === "rhodes-old-town-guide-medieval-city-street-of-knights-grand-master-palace" && (
        <section className="relative z-20 -mb-6 mx-auto max-w-7xl px-6 pt-6">
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-lg shadow-indigo-200/50">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-700 mb-2">
              {lang === "en" ? "This guide has moved" : "Αυτός ο οδηγός έχει μεταφερθεί"}
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-3">
              {lang === "en"
                ? "The content from this page is now part of our dedicated destination guides. Find Rhodes Old Town information on:"
                : "Το περιεχόμενο αυτής της σελίδας είναι πλέον μέρος των αφιερωμένων οδηγών προορισμού. Βρείτε πληροφορίες για τη Μεσαιωνική Πόλη της Ρόδου σε:"}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={withLang("/destinations/rhodes")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                {lang === "en" ? "Rhodes destination guide →" : "Οδηγός για Ρόδο →"}
              </Link>
              <Link
                href={withLang("/tours/rhodes-tours")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                {lang === "en" ? "Rhodes tours guide →" : "Ξεναγήσεις Ρόδου →"}
              </Link>
            </div>
          </div>
        </section>
      )}
      <section className="relative overflow-hidden min-h-[60vh] flex items-end pt-32 pb-16">
        <div className="absolute inset-0 z-0 transition-transform duration-[2s] scale-105">
          <Image
            src={item.image}
            alt={item.title[lang]}
            fill
            sizes="100vw"
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
                  {renderContent(section.content[lang])}
                </div>
              </div>
            ))}

            {item.tips && (
              <div className="rounded-[2.5rem] border border-amber-200/60 bg-gradient-to-br from-amber-50 to-white p-8 md:p-12 shadow-xl shadow-amber-200/50">
                <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700 mb-6 flex items-center gap-2">
                  <span className="text-lg">💡</span>
                  {lang === "en" ? "Tips & Practical Advice" : "Συμβουλές & Πρακτικές Οδηγίες"}
                </h3>
                <ul className="space-y-4">
                  {item.tips[lang].map((tip, idx) => (
                    <li key={idx} className="flex gap-4 p-4 rounded-xl bg-white/80 border border-amber-100">
                      <span className="text-amber-500 font-bold shrink-0">✦</span>
                      <span className="text-base text-slate-700 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.faq && (
              <div className="rounded-[2.5rem] border border-slate-200/60 bg-white/80 p-8 md:p-12 shadow-xl shadow-slate-200/50">
                <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600 mb-8">
                  {lang === "en" ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}
                </h3>
                <div className="space-y-6">
                  {item.faq.map((faqItem, idx) => (
                    <div key={idx} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{faqItem.q[lang]}</h4>
                      <p className="text-base leading-relaxed text-slate-600">{faqItem.a[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="sticky top-28 space-y-6">
            {renderBusinesses()}

            <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                {lang === "el" ? "Ενοικίαση Αυτοκινήτου" : "Car Rental"}
              </p>
              <h4 className="mt-3 text-xl font-extrabold text-slate-800">
                {lang === "el" ? "Ενοικίαση αυτοκινήτου στην Ελλάδα" : "Rent a Car in Greece"}
              </h4>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {lang === "el"
                  ? "Σύγκρινε τις καλύτερες προσφορές ενοικίασης αυτοκινήτου και εξοικονόμησε έως 70%."
                  : "Compare the best car rental deals and save up to 70%."}
              </p>
              <DiscoverCarsWidget
                key={slug}
                location="greece"
                lang={lang}
                className="mt-4"
              />
            </article>

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
    </>
  );
}