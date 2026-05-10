import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experienceBusinesses, SITE_URL } from "../../../../lib/experiences";
import BusinessDetailsClient from "./business-details-client";
import { Lang, isLang, supportedLangs } from "../../../../lib/useLocale";

type BusinessPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

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
  const { lang: rawLang, slug } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  if (!isLang(lang)) {
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

  const pageTitle = `${business.name} | GoGreeceNow`;

  return {
    title: { absolute: pageTitle },
    description,
    openGraph: {
      title: pageTitle,
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
      title: pageTitle,
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
