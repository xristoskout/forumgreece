import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { travelInfoGuides, SITE_URL, type Lang } from '../../../../lib/content';
import TravelInfoGuideClient from './travel-info-guide-client';
import { breadcrumbSchema, articleSchema } from '../../../../lib/structured-data';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  return travelInfoGuides.flatMap((guide) => [
    { lang: 'en', slug: guide.slug },
    { lang: 'el', slug: guide.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = (rawLang === 'el' ? 'el' : 'en') as Lang;
  const item = travelInfoGuides.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: 'Travel Guide Not Found' };
  }

  const canonicalUrl = `${SITE_URL}/${lang}/travel-info/${slug}`;
  const enUrl = `${SITE_URL}/en/travel-info/${slug}`;
  const elUrl = `${SITE_URL}/el/travel-info/${slug}`;

  return {
    title: { absolute: item.title[lang] + ' | GoGreeceNow' },
    description: item.description[lang],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: item.title[lang],
      description: item.description[lang],
      type: 'article',
      images: [{ url: item.image, width: 1200, height: 630, alt: item.title[lang] }],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title[lang],
      description: item.description[lang],
      images: [item.image],
    },
  };
}

export default async function TravelInfoGuidePage({ params }: Props) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === "el" ? "el" : "en") as Lang;
  const slug = resolvedParams.slug;

  const item = travelInfoGuides.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/${lang}/travel-info/${slug}`;

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Travel Info" : "Ταξιδιωτικές Πληροφορίες", path: "/travel-info" },
    { label: item.title[lang], path: `/travel-info/${slug}` },
  ]);

  const article = articleSchema({
    headline: item.title[lang],
    description: item.description[lang],
    image: item.image,
    url: canonicalUrl,
  });

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
      <TravelInfoGuideClient lang={lang} slug={slug} item={item} />
    </>
  );
}
