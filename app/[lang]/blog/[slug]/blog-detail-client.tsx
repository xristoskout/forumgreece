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

  const bodyHtml = post.body[lang]
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      if (line.startsWith("## ")) {
        return `<h2 class="mt-10 mb-4 text-2xl font-bold text-slate-900">${line.replace("## ", "")}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="mt-8 mb-3 text-xl font-bold text-slate-900">${line.replace("### ", "")}</h3>`;
      }
      if (line.startsWith("- **") && line.includes("**:")) {
        const rest = line.replace("- **", "").replace("**:", ":");
        return `<li class="ml-4 list-disc text-slate-600"><strong>${rest}</strong></li>`;
      }
      if (line.startsWith("- ")) {
        return `<li class="ml-4 list-disc text-slate-600">${line.replace("- ", "")}</li>`;
      }
      return `<p class="text-base leading-8 text-slate-600">${line}</p>`;
    })
    .join("\n");

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
      </article>
    </main>
    </>
  );
}
