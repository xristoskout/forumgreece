import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { destinations, SITE_URL } from '../../../../lib/content';
import DestinationDetailsClient from './destination-details-client';
import { Lang, isLang } from '../../../../lib/locale';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (isLang(resolvedParams.lang) ? resolvedParams.lang : "en");
  const destination = destinations.find((d) => d.slug === resolvedParams.slug);

  if (!destination) {
    return { title: 'Not Found' };
  }

  const pageTitle = destination.seo?.title[lang] || destination.name;
  const description = destination.seo?.description[lang] || destination.overview[lang];

  const canonicalUrl = `${SITE_URL}/${lang}/destinations/${destination.slug}`;
  const enUrl = `${SITE_URL}/en/destinations/${destination.slug}`;
  const elUrl = `${SITE_URL}/el/destinations/${destination.slug}`;


  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description: description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        el: elUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: pageTitle,
      description: description,
      images: [
        {
          url: destination.image,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
      images: [destination.image],
    },
  };
}

export default async function DestinationDetailsPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = (isLang(resolvedParams.lang) ? resolvedParams.lang : "en");
  const destination = destinations.find((d) => d.slug === resolvedParams.slug);

  if (!destination) {
    notFound();
  }

  return <DestinationDetailsClient destination={destination} lang={lang} />;
}
