import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePageClient from "./home-page-client";
import { client } from "../../lib/sanity/client";
import { HOME_PAGE_QUERY } from "../../lib/sanity/queries";

type Lang = "en" | "el";

type Props = {
  params: Promise<{ lang: string }>;
};

type HomePageContent = {
  heroBadge?: string;
  heroTitle?: string;
  heroText?: string;
  heroPrimary?: string;
  heroSecondary?: string;

  heroPanelEyebrow?: string;
  heroPanelTitle?: string;
  heroPanelText?: string;

  startPlanningEyebrow?: string;
  startPlanningTitle?: string;
  startPlanningText?: string;

  featuredCollectionsEyebrow?: string;
  featuredCollectionsTitle?: string;
  featuredCollectionsText?: string;

  destinationEyebrow?: string;
  destinationTitle?: string;
  destinationText?: string;

  travelHubEyebrow?: string;
  travelHubTitle?: string;
  travelHubText?: string;
  travelHubCta?: string;

  hotelsEyebrow?: string;
  hotelsTitle?: string;
  hotelsText?: string;
  hotelsPromoTitle?: string;

  toursEyebrow?: string;
  toursTitle?: string;
  toursText?: string;

  foodEyebrow?: string;
  foodTitle?: string;
  foodText?: string;

  communitiesEyebrow?: string;
  communitiesTitle?: string;
  communitiesText?: string;

  footerText?: string;
  ctaAd?: string;
  footerAbout?: string;
  footerContact?: string;
  footerPrivacy?: string;
};

const SITE_URL = "https://gogreecenow.com";

const homeSeo: Record<
  Lang,
  {
    title: string;
    description: string;
    path: string;
    locale: string;
  }
> = {
  en: {
    title: "Greece Travel Guides, Destinations & Trip Planning | GoGreeceNow",
    description:
      "Plan your trip to Greece with destination guides, island ideas, hotels, tours and practical travel info in one easy hub.",
    path: "/en",
    locale: "en_US",
  },
  el: {
    title: "Οδηγοί Ελλάδας, Προορισμοί & Οργάνωση Ταξιδιού | GoGreeceNow",
    description:
      "Οργάνωσε το ταξίδι σου στην Ελλάδα με οδηγούς προορισμών, ιδέες για νησιά, διαμονή, εκδρομές και χρήσιμες πληροφορίες.",
    path: "/el",
    locale: "el_GR",
  },
};

function isLang(value: string): value is Lang {
  return value === "en" || value === "el";
}

function HomeStructuredData({ lang }: { lang: Lang }) {
  const pageUrl = `${SITE_URL}/${lang}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "GoGreeceNow",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "GoGreeceNow",
        url: SITE_URL,
        inLanguage: lang === "el" ? "el-GR" : "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/${lang}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: homeSeo[lang].title,
        description: homeSeo[lang].description,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: lang === "el" ? "el-GR" : "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const revalidate = 60;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "el" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isLang(lang)) {
    return {};
  }

  const seo = homeSeo[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.path,
      languages: {
        en: "/en",
        el: "/el",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      url: seo.path,
      siteName: "GoGreeceNow",
      title: seo.title,
      description: seo.description,
      locale: seo.locale,
      images: [
        {
          url: "/images/hero-greece.jpg",
          width: 1600,
          height: 900,
          alt: "GoGreeceNow Greece travel portal",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/images/hero-greece.jpg"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const content = await client.fetch<HomePageContent | null>(HOME_PAGE_QUERY, {
    lang,
  });

  return (
    <>
      <HomeStructuredData lang={lang} />
      <HomePageClient lang={lang} content={content} />
    </>
  );
}