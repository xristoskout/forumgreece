import { Metadata } from "next";
import { notFound } from "next/navigation";
import { food, type Lang } from "../../../../lib/content";
import { experienceBusinesses } from "../../../../lib/experiences";
import EatDrinkClient from "./eat-drink-client";

type Params = Promise<{ lang: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang: Lang = resolvedParams.lang === "el" ? "el" : "en";
  const slug = resolvedParams.slug;

  const item = food.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: "Not Found" };
  }

  const title = item.metaTitle?.[lang] || item.title[lang];
  const description = item.metaDescription?.[lang] || item.info[lang];
  const keywords = item.keywords?.[lang] || [];

  return {
    title,
    description,
    keywords,
    openGraph: {
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

  const item = food.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedBusinesses = experienceBusinesses.filter(b => b.landingSlug === slug);

  return <EatDrinkClient item={item} lang={lang} businesses={relatedBusinesses} />;
}