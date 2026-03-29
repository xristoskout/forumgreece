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

function getTourPageData(slug: string) {
  const landing = experienceLandings.find((item) => item.slug === slug);

  if (landing) {
    const businesses = experienceBusinesses.filter(
      (item) => item.landingSlug === slug
    );

    return {
      type: "landing" as const,
      landing,
      businesses,
    };
  }

  const tour = tours.find((item) => item.slug === slug);

  if (tour) {
    return {
      type: "tour" as const,
      tour,
    };
  }

  return null;
}

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
  const pageData = getTourPageData(slug);

  if (!pageData) {
    return {
      title: "Tour Not Found | GoGreeceNow",
      description: "The requested tour page could not be found.",
    };
  }

  if (pageData.type === "landing") {
    const image =
      pageData.businesses[0]?.image ?? "/images/default-og.jpg";

    return {
      title: `${pageData.landing.title.en} | GoGreeceNow`,
      description: pageData.landing.description.en,
      openGraph: {
        title: `${pageData.landing.title.en} | GoGreeceNow`,
        description: pageData.landing.description.en,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: pageData.landing.title.en,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${pageData.landing.title.en} | GoGreeceNow`,
        description: pageData.landing.description.en,
        images: [image],
      },
    };
  }

  return {
    title: `${pageData.tour.title.en} | ${pageData.tour.place} | GoGreeceNow`,
    description: pageData.tour.description.en,
    openGraph: {
      title: `${pageData.tour.title.en} | GoGreeceNow`,
      description: pageData.tour.description.en,
      images: [
        {
          url: pageData.tour.image,
          width: 1200,
          height: 630,
          alt: pageData.tour.title.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageData.tour.title.en} | GoGreeceNow`,
      description: pageData.tour.description.en,
      images: [pageData.tour.image],
    },
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const pageData = getTourPageData(slug);

  if (!pageData) {
    notFound();
  }

  if (pageData.type === "landing") {
    return (
      <ExperienceDetailsClient
        landing={pageData.landing}
        businesses={pageData.businesses}
      />
    );
  }

  return <TourDetailsClient tour={pageData.tour} />;
}