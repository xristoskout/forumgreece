import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactDOM from "react-dom";
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
    item.seo?.description?.[lang] ??
    item.description?.[lang] ??
    item.info?.[lang] ??
    item.overview?.[lang] ??
    item.info.en;

  const hotelTitle =
    item.seo?.title?.[lang] ??
    (lang === "el"
      ? `Πού να Μείνεις στη ${item.place}: Ξενοδοχεία & Επιλογές Διαμονής | GoGreeceNow`
      : `Where to Stay in ${item.place}: Best Areas & Hotel Ideas | GoGreeceNow`);

  const isComingSoon = item.description?.[lang]?.includes("coming soon") ?? false;

  const faqJsonLd = item.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: item.faq.map((faq) => ({
          "@type": "Question",
          name: faq.q[lang],
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a[lang],
          },
        })),
      }
    : null;

  return {
    title: { absolute: hotelTitle },
    description,
    robots: isComingSoon ? { index: false, follow: true } : undefined,
    openGraph: {
      title: hotelTitle,
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
      title: hotelTitle,
      description,
      images: [item.image],
    },
    other: faqJsonLd
      ? { "script:ld+json": JSON.stringify(faqJsonLd) }
      : undefined,
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

  // Preload the hotel hero LCP image
  ReactDOM.preload(item.image, { as: "image", fetchPriority: "high" });

  return <HotelDetailsClient lang={lang} slug={slug} item={item} />;
}