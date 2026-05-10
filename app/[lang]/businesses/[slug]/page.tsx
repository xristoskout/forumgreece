import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experienceBusinesses } from "../../../../lib/experiences";
import { SITE_URL } from "../../../../lib/content"; // SITE_URL should come from lib/content.ts
import BusinessDetailsClient from "./business-details-client";
import { Lang, isLang, supportedLangs } from "../../../../lib/locale";

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
    metadataBase: new URL(SITE_URL),
    title: { absolute: pageTitle },
    description,
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${lang}/businesses/${slug}`,
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
    alternates: {
      canonical: `${SITE_URL}/${lang}/businesses/${slug}`,
      languages: {
        en: `${SITE_URL}/en/businesses/${slug}`,
        el: `${SITE_URL}/el/businesses/${slug}`,
        'x-default': `${SITE_URL}/en/businesses/${slug}`,
      },
    },
  };
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  const business = experienceBusinesses.find((item) => item.slug === slug);

  if (!business) {
    notFound();
  }

  return <BusinessDetailsClient business={business} lang={lang} />;
}
