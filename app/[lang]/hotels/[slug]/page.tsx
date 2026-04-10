import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hotels } from "../../../../lib/content";
import HotelDetailsClient from "./hotel-details-client";

const supportedLangs = ["en", "el"] as const;
type Lang = (typeof supportedLangs)[number];

type HotelPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

function isValidLang(value: string): value is Lang {
  return supportedLangs.includes(value as Lang);
}

export async function generateStaticParams() {
  return supportedLangs.flatMap((lang) =>
    hotels.map((hotel) => ({
      lang,
      slug: hotel.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: HotelPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isValidLang(lang)) {
    return {
      title: "Page Not Found | GoGreeceNow",
    };
  }

  const item = hotels.find((hotel) => hotel.slug === slug);

  if (!item) {
    return {
      title: "Hotel Not Found | GoGreeceNow",
    };
  }

  const description =
    item.description?.[lang] ??
    item.info?.[lang] ??
    item.overview?.[lang] ??
    item.info.en;

  return {
    title: `${item.name} | GoGreeceNow`,
    description,
    openGraph: {
      title: `${item.name} | GoGreeceNow`,
      description,
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: item.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.name} | GoGreeceNow`,
      description,
      images: [item.image],
    },
  };
}

export default async function HotelPage({ params }: HotelPageProps) {
  const { lang, slug } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  const item = hotels.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return <HotelDetailsClient />;
}