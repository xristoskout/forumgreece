import type { Metadata } from "next";
import { SITE_URL } from "../../../../lib/content";
import GreeceIslandsMapGuideClient from "./map-guide-client";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "el" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = raw === "el" ? "el" : "en";

  const title = lang === "el"
    ? "Χάρτης & Οδηγός Ελληνικών Νησιών | GoGreeceNow"
    : "Greece Islands Map Guide | GoGreeceNow";

  const description = lang === "el"
    ? "Ο απόλυτος οπτικός οδηγός για τα ελληνικά νησιωτικά συμπλέγματα. Κατανόησε τον χάρτη και διάλεξε τη σωστή περιοχή."
    : "The ultimate visual guide to Greek island groups. Understand the map and choose the right region for your trip.";

  const canonicalUrl = `${SITE_URL}/${lang}/travel-info/greece-islands-map-guide`;
  const enUrl = `${SITE_URL}/en/travel-info/greece-islands-map-guide`;

  return {
    title: { absolute: title },
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
      type: "article",
      images: [{ url: "/images/greece-islands-map-guide.webp", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/greece-islands-map-guide.webp"],
    },
  };
}

export default function Page() {
  return <GreeceIslandsMapGuideClient />;
}
