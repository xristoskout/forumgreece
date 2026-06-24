import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { food, SITE_URL, type Lang } from "../../../../lib/content";
import { experienceBusinesses } from "../../../../lib/experiences";
import EatDrinkClient from "./eat-drink-client";
import { articleSchema, breadcrumbSchema } from "../../../../lib/structured-data";

type Params = Promise<{ lang: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang: Lang = resolvedParams.lang === "el" ? "el" : "en";
  const slug = resolvedParams.slug;

  const item = food.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: "Not Found" };
  }

  const canonicalUrl = `${SITE_URL}/${lang}/eat-drink/${slug}`;
  const enUrl = `${SITE_URL}/en/eat-drink/${slug}`;

  const title = item.metaTitle?.[lang] || item.title[lang];
  const description = item.metaDescription?.[lang] || item.info[lang];

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      images: [item.image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [item.image],
    },
  };
}

export function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];
  for (const lang of ["en", "el"]) {
    for (const item of food) {
      paths.push({ lang, slug: item.slug });
    }
  }
  return paths;
}

export default async function EatDrinkPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const lang: Lang = resolvedParams.lang === "el" ? "el" : "en";
  const slug = resolvedParams.slug;

  let item = food.find((entry) => entry.slug === slug);

  if (!item) {
    const byPlace = food.filter(entry => entry.place?.toLowerCase() === slug);
    if (byPlace.length > 0) {
      permanentRedirect(`/${lang}/eat-drink/${byPlace[0].slug}`);
    }
    notFound();
  }

  const relatedBusinesses = experienceBusinesses.filter(b => b.landingSlug === slug);

  const canonicalUrl = `${SITE_URL}/${lang}/eat-drink/${slug}`;

  const article = articleSchema({
    headline: item.title[lang],
    description: item.metaDescription?.[lang] || item.info[lang],
    image: item.image,
    url: canonicalUrl,
  });

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Food & Wine" : "Φαγητό & Κρασί", path: "/eat-drink" },
    { label: item.title[lang], path: `/eat-drink/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <EatDrinkClient item={item} lang={lang} businesses={relatedBusinesses} />
    </>
  );
}