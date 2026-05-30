import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { tours, SITE_URL, type Lang } from "../../../../lib/content";
import {
  experienceBusinesses,
  experienceLandings,
} from "../../../../lib/experiences";
import ExperienceDetailsClient from "./experience-details-client";
import TourDetailsClient from "./tour-details-client";
import { itemPageSchema } from "../../../../lib/structured-data";

type TourPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

const supportedLangs: Lang[] = ["en", "el"];

function isValidLang(value: string): value is Lang {
  return value === "en" || value === "el";
}

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

  return supportedLangs.flatMap((lang) =>
    slugs.map((slug) => ({
      lang,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isValidLang(lang)) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  if (slug === "seafood-by-the-harbor") {
    permanentRedirect(`/${lang}/eat-drink/seafood-by-the-harbor`);
  }

  const canonicalUrl = `${SITE_URL}/${lang}/tours/${slug}`;
  const enUrl = `${SITE_URL}/en/tours/${slug}`;
  const elUrl = `${SITE_URL}/el/tours/${slug}`;

  const pageData = getTourPageData(slug);

  if (!pageData) {
    return {
      title:
        lang === "el"
          ? "Η εκδρομή δεν βρέθηκε"
          : "Tour Not Found",
      description:
        lang === "el"
          ? "Η σελίδα εκδρομής που ζητήσατε δεν βρέθηκε."
          : "The requested tour page could not be found.",
    };
  }

  if (pageData.type === "landing") {
    const image = pageData.businesses[0]?.image ?? "/images/default-og.webp";
    const title = pageData.landing.seo?.title[lang] ?? pageData.landing.title[lang];
    const description = pageData.landing.seo?.description[lang] ?? pageData.landing.description[lang];

    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
        languages: {
          en: enUrl,
          el: elUrl,
          'x-default': enUrl,
        },
      },
      openGraph: {
        title,
        description,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: pageData.landing.title[lang],
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  }

  const title = `${pageData.tour.title[lang]} | ${pageData.tour.place}`;
  const description = pageData.tour.description[lang];

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        el: elUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: `${pageData.tour.title[lang]} | GoGreeceNow`,
      description,
      images: [
        {
          url: pageData.tour.image,
          width: 1200,
          height: 630,
          alt: pageData.tour.title[lang],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageData.tour.title[lang]} | GoGreeceNow`,
      description,
      images: [pageData.tour.image],
    },
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { lang, slug } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  if (slug === "seafood-by-the-harbor") {
    permanentRedirect(`/${lang}/eat-drink/seafood-by-the-harbor`);
  }

  const pageData = getTourPageData(slug);

  if (!pageData) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/${lang}/tours/${slug}`;

  if (pageData.type === "landing") {
    const itemPage = itemPageSchema({
      name: pageData.landing.title[lang],
      description: pageData.landing.description[lang],
      image: pageData.landing.image ?? pageData.businesses[0]?.image ?? "/images/default-og.webp",
      url: canonicalUrl,
    });

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemPage) }}
        />
        <ExperienceDetailsClient
          landing={pageData.landing}
          businesses={pageData.businesses}
          lang={lang}
        />
      </>
    );
  }

  const itemPage = itemPageSchema({
    name: pageData.tour.title[lang],
    description: pageData.tour.description[lang],
    image: pageData.tour.image,
    url: canonicalUrl,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemPage) }}
      />
      <TourDetailsClient tour={pageData.tour} lang={lang} />
    </>
  );
}