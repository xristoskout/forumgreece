"use client";

import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../../components/site-header";
import type { BlogPost } from "../../../../lib/types";
import type { Lang } from "../../../../lib/locale";

type Props = {
  post: BlogPost;
  lang: Lang;
};

function stripLocale(path: string) {
  return path.replace(/^\/(en|el)(?=\/|$)/, "") || "/";
}

function mkWithLang(locale: Lang) {
  return (path: string) => {
    if (/^https?:\/\//i.test(path)) return path;
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `/${locale}${stripLocale(normalized)}`;
  };
}

export default function BlogDetailClient({ post, lang }: Props) {
  const withLang = mkWithLang(lang);

  function formatDate(dateStr: string) {
    if (lang === "el") {
      const d = new Date(dateStr);
      return d.toLocaleDateString("el-GR", { year: "numeric", month: "long", day: "numeric" });
    }
    return dateStr;
  }

  const lines = post.body[lang].split("\n").map(l => l.trim());
  const bodyHtml = (() => {
    let inTable = false;
    let tableRows: string[] = [];
    const out: string[] = [];

    function flushTable() {
      if (tableRows.length === 0) return;
      out.push('<div class="overflow-x-auto my-8"><table class="w-full text-sm border-collapse">');
      const header = tableRows[0];
      if (header) {
        const cells = header.split("|").filter(Boolean).map(c => c.trim());
        out.push("<thead><tr>" + cells.map(c => `<th class="border border-slate-200 bg-slate-50 px-4 py-3 text-left font-bold text-slate-900">${c}</th>`).join("") + "</tr></thead>");
      }
      out.push("<tbody>");
      for (let i = 1; i < tableRows.length; i++) {
        const cells = tableRows[i].split("|").filter(Boolean).map(c => c.trim());
        out.push("<tr>" + cells.map(c => `<td class="border border-slate-200 px-4 py-3 text-slate-600">${c}</td>`).join("") + "</tr>");
      }
      out.push("</tbody></table></div>");
      tableRows = [];
    }

    for (const line of lines) {
      if (!line) {
        if (inTable) { flushTable(); inTable = false; }
        continue;
      }
      if (line.startsWith("|")) {
        if (line.includes("---")) continue;
        inTable = true;
        tableRows.push(line);
        continue;
      }
      if (inTable) { flushTable(); inTable = false; }

      if (line === "---") {
        out.push('<hr class="my-10 border-slate-200" />');
      } else if (line.startsWith("## ")) {
        out.push(`<h2 class="mt-10 mb-4 text-2xl font-bold text-slate-900">${line.replace("## ", "")}</h2>`);
      } else if (line.startsWith("### ")) {
        out.push(`<h3 class="mt-8 mb-3 text-xl font-bold text-slate-900">${line.replace("### ", "")}</h3>`);
      } else {
        const calloutMatch = line.match(/^\*\*(.+?):\*\*\s*(.*)/);
        if (calloutMatch && !line.endsWith("**")) {
          const [, label, body] = calloutMatch;
          const configs: Record<string, { bg: string; border: string; icon: string; labelCls: string; bodyCls: string }> = {
            "Honest Note":          { bg: "bg-amber-50",   border: "border-amber-200",  icon: "\uD83D\uDCDD", labelCls: "text-amber-800",  bodyCls: "text-amber-700/80" },
            "Secret Note":          { bg: "bg-violet-50",  border: "border-violet-200", icon: "\uD83E\uDD2B", labelCls: "text-violet-800", bodyCls: "text-violet-700/80" },
            "Honest Skip":          { bg: "bg-rose-50",    border: "border-rose-200",   icon: "\u23ED\uFE0F",  labelCls: "text-rose-800",   bodyCls: "text-rose-700/80" },
            "\u0395\u03B9\u03BB\u03B9\u03BA\u03C1\u03B9\u03BD\u03AE\u03C2 \u03A3\u03B7\u03BC\u03B5\u03AF\u03C9\u03C3\u03B7": { bg: "bg-amber-50", border: "border-amber-200", icon: "\uD83D\uDCDD", labelCls: "text-amber-800", bodyCls: "text-amber-700/80" },
          };
          const cfg = configs[label];
          if (cfg) {
            const linkedBody = body.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_: string, t: string, u: string) => `<a href="${withLang(u)}" class="underline hover:text-current transition-colors font-medium">${t}</a>`);
            out.push(`<div class="${cfg.bg} border ${cfg.border} rounded-xl p-5 my-6"><p class="text-base leading-8 ${cfg.bodyCls}"><span class="mr-1.5">${cfg.icon}</span><strong class="${cfg.labelCls}">${label}:</strong> ${linkedBody}</p></div>`);
          } else {
            out.push(`<p class="text-base leading-8 text-slate-600">${line}</p>`);
          }
        } else if (line.startsWith("**") && line.endsWith("**")) {
          out.push(`<p class="text-base font-bold leading-8 text-slate-900">${line.replace(/^\*\*|\*\*$/g, "")}</p>`);
        } else if (line.startsWith("- **") && line.includes("**:")) {
          const m = line.match(/^-\s+\*\*(.+?)\*\*\s+([\s\S]*)/);
          if (m) {
            const [, label, body] = m;
            const linkedBody = body.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_: string, t: string, u: string) => `<a href="${withLang(u)}" class="underline hover:text-current transition-colors font-medium">${t}</a>`);
            out.push(`<div class="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 my-3"><span class="mt-0.5 shrink-0 h-2 w-2 rounded-full bg-indigo-500"></span><p class="text-sm leading-7 text-slate-700"><strong class="text-slate-900">${label}:</strong> ${linkedBody}</p></div>`);
          } else {
            out.push(`<li class="ml-4 list-disc text-slate-600">${line.replace("- ", "")}</li>`);
          }
        } else if (line.startsWith("- ")) {
          out.push(`<li class="ml-4 list-disc text-slate-600">${line.replace("- ", "")}</li>`);
        } else {
          const withLinks = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => `<a href="${withLang(url)}" class="text-indigo-600 underline hover:text-indigo-800 transition-colors font-medium">${text}</a>`);
          out.push(`<p class="text-base leading-8 text-slate-600">${withLinks}</p>`);
        }
      }
    }
    if (inTable) flushTable();
    return out.join("\n");
  })();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-transparent text-slate-900">

      <article className="mx-auto max-w-4xl px-6 pt-28 pb-16">
        <div className="mb-8">
          <Link
            href={withLang("/blog")}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            ← {lang === "en" ? "Back to blog" : "Επιστροφή στο blog"}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="rounded-md bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
            {post.category[lang]}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {formatDate(post.publishedDate)} — {post.author}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {post.title[lang]}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-500">
          {post.excerpt[lang]}
        </p>

        <div className="relative mt-10 h-[400px] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title[lang]}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div
          className="mt-12 prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
          <Link
            href={withLang("/blog")}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            ← {lang === "en" ? "All articles" : "Όλα τα άρθρα"}
          </Link>
          <Link
            href={withLang("/destinations")}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            {lang === "en" ? "Explore destinations" : "Δες προορισμούς"} →
          </Link>
        </div>

        {(post.relatedDestinations && post.relatedDestinations.length > 0) ||
        (post.relatedHotels && post.relatedHotels.length > 0) ||
        (post.relatedTours && post.relatedTours.length > 0) ? (
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {lang === "en" ? "Explore Related Content" : "Σχετικό Περιεχόμενο"}
            </h2>
            <p className="text-sm text-slate-500 mb-8">
              {lang === "en" ? "Continue planning your trip with these guides and listings." : "Συνέχισε τον σχεδιασμό του ταξιδιού σου με αυτούς τους οδηγούς."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {post.relatedDestinations && post.relatedDestinations.length > 0 && (
                <div className="bg-gradient-to-b from-indigo-50/50 to-white rounded-2xl p-5 border border-indigo-100/50">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-700 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {lang === "en" ? "Destinations" : "Προορισμοί"}
                  </h3>
                  <div className="space-y-2">
                    {post.relatedDestinations.map((d) => (
                      <Link
                        key={d.slug}
                        href={withLang(`/destinations/${d.slug}`)}
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-300 hover:bg-indigo-50"
                      >
                        <span className="group-hover:text-indigo-700 transition-colors">{d.label[lang]}</span>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {post.relatedHotels && post.relatedHotels.length > 0 && (
                <div className="bg-gradient-to-b from-amber-50/50 to-white rounded-2xl p-5 border border-amber-100/50">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-amber-700 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    {lang === "en" ? "Hotels" : "Ξενοδοχεία"}
                  </h3>
                  <div className="space-y-2">
                    {post.relatedHotels.map((h) => (
                      <Link
                        key={h.slug}
                        href={withLang(`/hotels/${h.slug}`)}
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-amber-300 hover:bg-amber-50"
                      >
                        <span className="group-hover:text-amber-700 transition-colors">{h.label[lang]}</span>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {post.relatedTours && post.relatedTours.length > 0 && (
                <div className="bg-gradient-to-b from-emerald-50/50 to-white rounded-2xl p-5 border border-emerald-100/50">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                    {lang === "en" ? "Tours" : "Εκδρομές"}
                  </h3>
                  <div className="space-y-2">
                    {post.relatedTours.map((t) => (
                      <Link
                        key={t.slug}
                        href={withLang(`/tours/${t.slug}`)}
                        className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-300 hover:bg-emerald-50"
                      >
                        <span className="group-hover:text-emerald-700 transition-colors">{t.label[lang]}</span>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </article>
    </main>
    </>
  );
}
