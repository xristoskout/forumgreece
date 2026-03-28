import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours } from "../../../lib/content";
import TourDetailsClient from "./tour-details-client";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    return {
      title: "Tour Not Found | GoGreeceNow",
      description: "The requested tour page could not be found.",
    };
  }

  return {
    title: `${tour.title.en} | ${tour.place} | GoGreeceNow`,
    description: tour.description.en,
    openGraph: {
      title: `${tour.title.en} | GoGreeceNow`,
      description: tour.description.en,
      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
          alt: tour.title.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.title.en} | GoGreeceNow`,
      description: tour.description.en,
      images: [tour.image],
    },
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return <TourDetailsClient tour={tour} />;
}