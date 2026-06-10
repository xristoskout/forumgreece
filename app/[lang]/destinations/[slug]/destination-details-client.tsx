"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SiteHeader from "../../../../components/site-header";
import { siteBrand, food, type Destination, type Lang } from "../../../../lib/content";
import Image from "next/image";
import { destinationSections } from "../../../../lib/destination-sections";
import { destinationDetails } from "../../../../lib/destination-details";
import DiscoverCarsWidget from "../../../../components/discovercars-widget";
import { experienceBusinesses } from "../../../../lib/experiences";

export default function DestinationDetailsClient({
  destination,
  lang,
}: {
  destination: Destination;
  lang: Lang;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const slug = destination.slug;
  const businesses = experienceBusinesses.filter(
    (b) => b.landingSlug === `${slug}-tours` || b.landingSlug === slug
  );

  const matchingFood = food.filter((f) =>
    f.place.toLowerCase().includes(destination.name.toLowerCase())
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

  const renderTextWithLinks = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [_, label, href] = match;
        return (
          <Link key={index} href={withLang(href)} className="text-indigo-300 font-semibold hover:underline underline-offset-4 decoration-indigo-300/50">
            {label}
          </Link>
        );
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
  };

  const renderTextWithLinksDark = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [_, label, href] = match;
        return (
          <Link key={index} href={withLang(href)} className="text-indigo-600 font-semibold hover:underline underline-offset-4 decoration-indigo-600/50">
            {label}
          </Link>
        );
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
  };

  const sections = destinationSections[destination.slug] ?? [];
  const details = destinationDetails[destination.slug];

  const renderBusinesses = () => {
    if (businesses.length === 0) return null;
    return (
      <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-indigo-50 to-white backdrop-blur-md p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700 mb-6">
          {lang === "en" ? "Local Businesses & Services" : "Τοπικές Επιχειρήσεις & Υπηρεσίες"}
        </p>

        <div className="space-y-6">
          {businesses.map((business) => {
            const businessHref = business.href || `/businesses/${business.slug}`;
            const isExternalUrl = /^https?:\/\//i.test(businessHref);

            return (
              <Fragment key={business.slug}>
                <div
                  className="group overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-48 w-full bg-slate-100">
                    {business.image && (
                      <Image
                        src={business.image}
                        alt={business.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 400px"
                      />
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

              </Fragment>
            );
          })}
        </div>
      </article>
    );
  };

  // 100% Dynamic, Safe Compare Widget for the Sidebar
  const renderCompareWidget = () => {
    return (
      <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-indigo-50/50 to-white p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 mb-3">
          {lang === "en" ? "Travel Tools" : "Ταξιδιωτικά Εργαλεία"}
        </p>
        <h4 className="text-xl font-extrabold mb-4 text-slate-800">Compare {destination.name}</h4>
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          {lang === "en" 
            ? `Compare ${destination.name} side-by-side with other Greek destinations to check budgets, scores, and find where to go.`
            : `Σύγκρινε τη ${destination.name} με άλλους ελληνικούς προορισμούς για να δεις budget, βαθμολογίες και να αποφασίσεις.`}
        </p>
        <Link
          href={withLang(`/travel-tools?s1=${destination.slug}`)}
          className="block w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-2xl shadow-md hover:bg-indigo-500 hover:-translate-y-0.5 transition-all"
        >
          {lang === "en" ? "Compare Side-by-Side ➔" : "Σύγκρινε τους Προορισμούς ➔"}
        </Link>
      </article>
    );
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <SiteHeader />


      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07182c]/80 via-[#07182c]/55 to-[#07182c]/25" />
        </div>
        <div className="relative z-10 mx-auto grid min-h-[560px] max-w-7xl gap-10 px-6 py-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
              {destination.region[lang]}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {destination.name}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              {renderTextWithLinks(destination.overview[lang])}
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

          <div className="flex flex-col gap-4 justify-center">
            {destination.highlights[lang].map((highlight, idx) => (
              <div
                key={highlight}
                className="animate-float group flex items-center gap-4 rounded-3xl bg-white/10 px-6 py-5 shadow-lg backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl"
                style={{ animationDelay: (idx * 0.2) + "s" }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 drop-shadow-md shadow-inner">
                  ✨
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white/95">{highlight}</h3>
              </div>
            ))}
            {destination.guideLinks && destination.guideLinks.map((guide, idx) => (
              <Link
                key={guide.href}
                href={withLang(guide.href)}
                className="animate-float group flex items-center gap-4 rounded-3xl bg-indigo-600/90 px-6 py-5 shadow-lg backdrop-blur-md border border-indigo-400/50 transition-all duration-300 hover:bg-indigo-500 hover:border-indigo-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ animationDelay: ((destination.highlights[lang].length + idx) * 0.2) + "s" }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1 drop-shadow-md shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-indigo-100 uppercase tracking-wider mb-0.5">
                    {lang === "en" ? "Travel Guide" : "Ταξιδιωτικος Οδηγος"}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white">{guide.label[lang]}</h3>
                </div>
              </Link>
            ))}
            {(() => {
              const sections = destinationSections[slug] || [];
              const hasBeaches = sections.some((s: any) =>
                (s.title?.en || "").toLowerCase().includes("beach")
                || (s.title?.el || "").toLowerCase().includes("παραλ")
              );
              const hasThings = sections.some((s: any) => {
                const en = (s.title?.en || "").toLowerCase();
                const el = (s.title?.el || "").toLowerCase();
                return en.includes("things to do") || en.includes("top attractions") || en.includes("why visit")
                    || el.includes("πράγματα να κάν") || el.includes("αξιοθέατ");
              });
              return (
                <>
                  {hasBeaches && (
                    <Link
                      href={withLang(`/guides/${slug}/best-beaches`)}
                      className="animate-float group flex items-center gap-4 rounded-3xl bg-cyan-600/90 px-6 py-5 shadow-lg backdrop-blur-md border border-cyan-400/50 transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-300 hover:-translate-y-1 hover:shadow-2xl"
                      style={{ animationDelay: ((destination.highlights[lang].length + (destination.guideLinks?.length || 0)) * 0.2) + "s" }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1 drop-shadow-md shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-cyan-100 uppercase tracking-wider mb-0.5">
                          {lang === "en" ? "Beach Guide" : "Οδηγός Παραλιών"}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-white">
                          {lang === "en" ? `Best Beaches in ${destination.name}` : `Καλύτερες Παραλίες στο ${destination.name}`}
                        </h3>
                      </div>
                    </Link>
                  )}
                  {hasThings && (
                    <Link
                      href={withLang(`/guides/${slug}/things-to-do`)}
                      className="animate-float group flex items-center gap-4 rounded-3xl bg-amber-600/90 px-6 py-5 shadow-lg backdrop-blur-md border border-amber-400/50 transition-all duration-300 hover:bg-amber-500 hover:border-amber-300 hover:-translate-y-1 hover:shadow-2xl"
                      style={{ animationDelay: ((destination.highlights[lang].length + (destination.guideLinks?.length || 0) + (hasBeaches ? 1 : 0)) * 0.2) + "s" }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1 drop-shadow-md shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-amber-100 uppercase tracking-wider mb-0.5">
                          {lang === "en" ? "Activities" : "Δραστηριότητες"}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-white">
                          {lang === "en" ? `Things to Do in ${destination.name}` : `Πράγματα να Κάνεις στο ${destination.name}`}
                        </h3>
                      </div>
                    </Link>
                  )}
                </>
              );
            })()}
            {matchingFood.map((item, idx) => {
              const baseDelay = destination.highlights[lang].length + (destination.guideLinks?.length || 0);
              return (
                <Link
                  key={item.slug}
                  href={withLang(`/eat-drink/${item.slug}`)}
                  className="animate-float group flex items-center gap-4 rounded-3xl bg-emerald-600/90 px-6 py-5 shadow-lg backdrop-blur-md border border-emerald-400/50 transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ animationDelay: (baseDelay + idx) * 0.2 + "s" }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1 drop-shadow-md shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" x2="6" y1="1" y2="4"/><line x1="10" x2="10" y1="1" y2="4"/><line x1="14" x2="14" y1="1" y2="4"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-emerald-100 uppercase tracking-wider mb-0.5">
                      {lang === "en" ? "Food & Drink" : "Φαγητό & Ποτό"}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white">{item.title[lang]}</h3>
                  </div>
                </Link>
              );
            })}
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
                {details ? renderTextWithLinksDark(details.overview[lang]) : renderTextWithLinksDark(destination.overview[lang])}
              </p>
            </article>

            {sections.map((section, idx) => {
              const isHonestAdvice = section.title.en.toLowerCase().includes("honest advice") || section.title.en.toLowerCase().includes("what to skip") || section.title.el.includes("Ειλικρινής Συμβουλή") || section.title.el.includes("Τι να Αποφύγεις");

              if (isHonestAdvice && section.text) {
                const text = section.text[lang];
                const lines = text.split('\n').filter(l => l.trim());
                const items: string[] = [];
                let insight = '';
                for (const line of lines) {
                  const trimmed = line.trim();
                  if (trimmed.startsWith('✕')) {
                    items.push(trimmed.replace(/^✕\s*\*\*[^*]+\*\*\s*—\s*/, '').trim());
                  } else if (trimmed.startsWith('💡')) {
                    insight = trimmed.replace(/^💡\s*/, '').trim();
                  }
                }

                return (
                  <Fragment key={idx}>
                    <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-red-50 to-white p-8 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                        {section.title[lang]}
                      </p>
                      <div className="mt-5 grid gap-3">
                        {items.map((item, i) => (
                          <div key={i} className="rounded-2xl border border-red-100 bg-white px-4 py-3 text-sm font-medium text-slate-600">
                            <span className="text-red-500 mr-1.5">✕</span>{item}
                          </div>
                        ))}
                      </div>
                      {insight && (
                        <div className="mt-5 rounded-2xl bg-amber-50 border border-amber-200 p-4">
                          <p className="text-xs font-medium leading-relaxed text-amber-800">
                            💡 {insight}
                          </p>
                        </div>
                      )}
                    </article>
                  </Fragment>
                );
              }

              return (
                <Fragment key={idx}>
                  <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                      {destination.name}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight">
                      {section.title[lang]}
                    </h3>

                    {section.text && (
                      <p className="mt-5 text-base leading-8 text-slate-500">
                        {section.text[lang]}
                      </p>
                    )}

                    {section.alert && (
                      <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-5 shadow-sm">
                        <p className="text-sm font-medium leading-relaxed text-amber-800">
                          💡 {section.alert[lang]}
                        </p>
                      </div>
                    )}

                    {section.items && section.items.length > 0 && (
                      <div className={`mt-8 ${
                        section.layout === "grid" ? "grid gap-4 sm:grid-cols-2" :
                        section.layout === "numbered" ? "space-y-8" :
                        section.layout === "faq" ? "space-y-6" :
                        "space-y-6"
                      }`}>
                        {section.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className={
                              section.layout === "grid"
                                ? "rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-colors hover:bg-slate-50"
                                : section.layout === "numbered"
                                ? "relative pl-14"
                                : section.layout === "faq"
                                ? "border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                                : "rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
                            }
                          >
                            {section.layout === "numbered" && (
                              <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                                {itemIdx + 1}
                              </span>
                            )}
                            
                            {item.title && (
                              <h4 className={`font-bold ${section.layout === 'faq' ? 'text-lg text-slate-900 mb-2' : 'text-slate-900 mb-2 mt-0'}`}>
                                {item.title[lang]}
                              </h4>
                            )}
                            <p className={`text-base leading-relaxed ${section.layout === 'faq' ? 'text-slate-600' : 'text-slate-500'}`}>
                              {item.text[lang]}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                </Fragment>
              );
            })}
          </div>

          <aside className="space-y-6">
            {/* 100% Dynamic Compare Widget */}
            {renderCompareWidget()}

            {renderBusinesses()}

            {(() => {
              const TOURS_SLUGS = new Set(["santorini", "mykonos", "athens", "crete", "kefalonia", "lesvos"]);
              if (TOURS_SLUGS.has(destination.slug)) {
                return (
                  <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 mb-3">
                      {lang === "en" ? "Tours & Activities" : "Εκδρομές & Δραστηριότητες"}
                    </div>
                    <h4 className="text-xl font-extrabold mb-4 text-slate-800">
                      {lang === "en" ? `Explore ${destination.name} Tours` : `Εξερεύνησε Εκδρομές σε ${destination.name}`}
                    </h4>
                    <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                      {lang === "en"
                        ? `Discover the best tours, boat trips and experiences in ${destination.name}. Book directly with local providers.`
                        : `Ανακάλυψε τις καλύτερες εκδρομές, κρουαζιέρες και εμπειρίες σε ${destination.name}. Κάνε κράτηση απευθείας.`}
                    </p>
                    <Link
                      href={withLang(`/tours/${destination.slug}-tours`)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-500 transition-colors shadow-md"
                    >
                      {lang === "en" ? "View All Tours →" : "Δες Όλες τις Εκδρομές →"}
                    </Link>
                  </article>
                );
              }
              return (
                <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 mb-3">
                    {lang === "en" ? "Tours & Activities" : "Εκδρομές & Δραστηριότητες"}
                  </div>
                  <h4 className="text-xl font-extrabold mb-4 text-slate-800">
                    {lang === "en" ? `Explore ${destination.name} Tours` : `Εξερεύνησε Εκδρομές σε ${destination.name}`}
                  </h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    {lang === "en"
                      ? `Discover the best tours, boat trips and experiences in ${destination.name}. Book directly with local providers.`
                      : `Ανακάλυψε τις καλύτερες εκδρομές, κρουαζιέρες και εμπειρίες σε ${destination.name}. Κάνε κράτηση απευθείας.`}
                  </p>
                  <Link
                    href={withLang("/tours/all")}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-500 transition-colors shadow-md"
                  >
                    {lang === "en" ? "View All Tours →" : "Δες Όλες τις Εκδρομές →"}
                  </Link>
                </article>
              );
            })()}

            <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                {lang === "el" ? "Ενοικίαση Αυτοκινήτου" : "Car Rental"}
              </p>
              <h4 className="mt-3 text-xl font-extrabold text-slate-800">
                {lang === "el"
                  ? `Ενοικίαση αυτοκινήτου στη ${destination.name}`
                  : `Rent a Car in ${destination.name}`}
              </h4>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {lang === "el"
                  ? "Σύγκρινε τις καλύτερες προσφορές ενοικίασης αυτοκινήτου και εξοικονόμησε έως 70%."
                  : "Compare the best car rental deals and save up to 70%."}
              </p>
              <DiscoverCarsWidget
                location={destination.slug === "crete" || destination.slug === "chania" || destination.slug === "heraklion" || destination.slug === "lasithi" || destination.slug === "rethymno" ? "crete" : destination.slug === "athens" ? "athens" : destination.slug === "thessaloniki" ? "thessaloniki" : destination.slug === "corfu" ? "corfu" : destination.slug === "rhodes" ? "rhodes" : destination.slug === "zakynthos" ? "zakynthos" : destination.slug === "kefalonia" ? "kefalonia" : destination.slug === "lesvos" ? "lesvos" : destination.slug === "chios" ? "chios" : destination.slug === "kos" ? "kos" : destination.slug === "naxos" ? "naxos" : destination.slug === "paros" ? "paros" : destination.slug === "mykonos" ? "mykonos" : destination.slug === "santorini" ? "santorini" : "greece"}
                lang={lang}
                className="mt-4"
              />
            </article>

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

            {details?.honestAdvice && (
              <article className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-red-50 to-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  {details.honestAdvice.title[lang]}
                </p>

                <div className="mt-5 grid gap-3">
                  {details.honestAdvice.items[lang].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-red-100 bg-white px-4 py-3 text-sm font-medium text-slate-600"
                    >
                      <span className="text-red-500 mr-1.5">✕</span>{item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-amber-50 border border-amber-200 p-4">
                  <p className="text-xs font-medium leading-relaxed text-amber-800">
                    💡 {details.honestAdvice.alert[lang]}
                  </p>
                </div>
              </article>
            )}

            <article className="rounded-[28px] border border-slate-200 bg-white backdrop-blur-md p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                {lang === "en" ? "Travel Note" : "Σημείωση Ταξιδιού"}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {destination.blurb[lang]}
              </p>

              <div className="mt-8 space-y-3">
                <Link
                href={withLang("/destinations")}
                  className="block rounded-2xl bg-indigo-600 border-none px-5 py-3 text-center font-semibold text-white transition hover:bg-indigo-500"
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

    </main>
  );
}
