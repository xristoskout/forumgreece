import type { Metadata } from 'next';
import { destinations, type Lang } from '../../../../lib/content';
import DestinationDetailsClient from './destination-details-client';

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === "el" ? "el" : "en") as Lang;
  const destination = destinations.find((d) => d.slug === resolvedParams.slug);

  if (!destination) {
    return { title: 'Not Found' };
  }

  return {
    title: destination.seo?.title[lang] || destination.name,
    description: destination.seo?.description[lang] || destination.overview[lang],
  };
}

export default async function DestinationDetailsPage({ params }: Props) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === "el" ? "el" : "en") as Lang;
  const destination = destinations.find((d) => d.slug === resolvedParams.slug);

  if (!destination) {
    return (
      <div className="p-10">
        {lang === "en"
          ? "Destination not found."
          : "Ο προορισμός δεν βρέθηκε."}
      </div>
    );
  }

  return <DestinationDetailsClient destination={destination} lang={lang} />;
}