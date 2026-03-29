import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experienceBusinesses } from "../../../lib/experiences";
import BusinessDetailsClient from "./business-details-client";

type BusinessPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return experienceBusinesses.map((business) => ({
    slug: business.slug,
  }));
}

export async function generateMetadata({
  params,
}: BusinessPageProps): Promise<Metadata> {
  const { slug } = await params;

  const business = experienceBusinesses.find((item) => item.slug === slug);

  if (!business) {
    return {
      title: "Business Not Found | GoGreeceNow",
      description: "The requested business page could not be found.",
    };
  }

  const description = business.description?.en ?? business.info.en;

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
  const { slug } = await params;

  const business = experienceBusinesses.find((item) => item.slug === slug);

  if (!business) {
    notFound();
  }

  return <BusinessDetailsClient business={business} />;
}