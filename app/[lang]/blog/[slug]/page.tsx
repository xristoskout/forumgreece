import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, SITE_URL, Lang, isLang } from "../../../../lib/content";
import { withLang } from "../../../../lib/locale";
import BlogDetailClient from "./blog-detail-client";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const post of blogPosts) {
    params.push({ lang: "en", slug: post.slug });
    params.push({ lang: "el", slug: post.slug });
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isLang(lang)) return {};

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const title = post.seo?.title[lang] ?? post.title[lang];
  const description = post.seo?.description[lang] ?? post.excerpt[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: withLang(`/blog/${slug}`, lang),
      languages: {
        en: withLang(`/blog/${slug}`, "en"),
        el: withLang(`/blog/${slug}`, "el"),
        "x-default": withLang(`/blog/${slug}`, "en"),
      },
    },
    openGraph: {
      type: "article",
      url: withLang(`/blog/${slug}`, lang),
      title,
      description,
      siteName: "GoGreeceNow",
      images: [{ url: post.image, width: 1600, height: 900, alt: post.title[lang] }],
      publishedTime: post.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { lang, slug } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} lang={lang} />;
}
