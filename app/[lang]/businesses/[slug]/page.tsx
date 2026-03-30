import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experienceBusinesses } from "../../../../lib/experiences";
import BusinessDetailsClient from "./business-details-client";

const supportedLangs = ["en", "el"] as const;
type Lang = (typeof supportedLangs)[number];

type BusinessPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

function isValidLang(value: string): value is Lang {
  return supportedLangs.includes(value as Lang);
}

export async function generateStaticParams() {
  return supportedLangs.flatMap((lang) =>
    experienceBusinesses.map((business) => ({
      lang,
      slug: business.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: BusinessPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isValidLang(lang)) {
    return {
      title: "Page Not Found | GoGreeceNow",
      description: "The requested page could not be found.",
    };
  }

  const business = experienceBusinesses.find((item) => item.slug === slug);

  if (!business) {
    return {
      title:
        lang === "el"
          ? "Η επιχείρηση δεν βρέθηκε | GoGreeceNow"
          : "Business Not Found | GoGreeceNow",
      description:
        lang === "el"
          ? "Η σελίδα της επιχείρησης που ζητήσατε δεν βρέθηκε."
          : "The requested business page could not be found.",
    };
  }

  const description =
    business.description?.[lang] ??
    business.info?.[lang] ??
    business.description?.en ??
    business.info.en;

  return {
    title: `${business.name} | GoGreeceNow`,
    description,
    openGraph: {
      title: `${business.name} | GoGreeceNow`,
      description,
      images: [
        {
          url: business.image,
          width: 1200,
          height: 630,
          alt: business.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${business.name} | GoGreeceNow`,
      description,
      images: [business.image],
    },
  };
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { lang, slug } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  const business = experienceBusinesses.find((item) => item.slug === slug);

  if (!business) {
    notFound();
  }

  return <BusinessDetailsClient business={business} lang={lang} />;
}