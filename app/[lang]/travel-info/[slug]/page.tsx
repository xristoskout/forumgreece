import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { travelInfoGuides, type Lang } from '../../../../lib/content';
import TravelInfoGuideClient from './travel-info-guide-client';

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
    return { title: 'Travel Guide Not Found | GoGreeceNow' };
  }

  return {
    title: { absolute: item.title[lang] + ' | GoGreeceNow' },
    description: item.description[lang],
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

  return <TravelInfoGuideClient lang={lang} slug={slug} item={item} />;
}
