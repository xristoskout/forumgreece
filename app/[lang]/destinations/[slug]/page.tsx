import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { destinations, SITE_URL } from '../../../../lib/content';
import DestinationDetailsClient from './destination-details-client';
import { Lang, isLang } from '../../../../lib/locale';
import { breadcrumbSchema, touristAttractionSchema } from '../../../../lib/structured-data';

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

  const canonicalUrl = `${SITE_URL}/${lang}/destinations/${destination.slug}`;

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Destinations" : "Προορισμοί", path: "/destinations" },
    { label: destination.name, path: `/destinations/${destination.slug}` },
  ]);

  const tourist = touristAttractionSchema({
    name: destination.name,
    description: destination.overview[lang],
    image: destination.image,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourist) }}
      />
      <DestinationDetailsClient destination={destination} lang={lang} />
    </>
  );
}
