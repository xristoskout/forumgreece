import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours } from "../../../lib/content";
import {
  experienceBusinesses,
  experienceLandings,
} from "../../../lib/experiences";
import ExperienceDetailsClient from "./experience-details-client";
import TourDetailsClient from "./tour-details-client";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = Array.from(
    new Set([
      ...tours.map((tour) => tour.slug),
      ...experienceLandings.map((landing) => landing.slug),
    ])
  );

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;

  const landing = experienceLandings.find((item) => item.slug === slug);
  const landingBusinesses = experienceBusinesses.filter(
    (item) => item.landingSlug === slug
  );

  if (landing) {
    const image = landingBusinesses[0]?.image ?? "/images/tours/kefalonia-tours.jpg";

    return {
      title: `${landing.title.en} | GoGreeceNow`,
      description: landing.description.en,
      openGraph: {
        title: `${landing.title.en} | GoGreeceNow`,
        description: landing.description.en,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: landing.title.en,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${landing.title.en} | GoGreeceNow`,
        description: landing.description.en,
        images: [image],
      },
    };
  }

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

  const landing = experienceLandings.find((item) => item.slug === slug);

  if (landing) {
    const businesses = experienceBusinesses.filter(
      (item) => item.landingSlug === slug
    );

    return (
      <ExperienceDetailsClient
        landing={landing}
        businesses={businesses}
      />
    );
  }

  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return <TourDetailsClient tour={tour} />;
}