import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import HomePageClient from "./home-page-client";
import { client } from "../../lib/sanity/client";
import { HOME_PAGE_QUERY } from "../../lib/sanity/queries";
import { SITE_URL } from "../../lib/content";
import { Lang, isLang } from "../../lib/useLocale";

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
    title: "GoGreeceNow | Greece Travel Guides, Destinations & Trip Planning",
    description:
      "Plan your trip to Greece with destination guides, island ideas, hotels, tours and practical travel info in one easy hub.",
    path: "/en",
    locale: "en_US",
  },
  el: {
    title: "GoGreeceNow | Οδηγοί Ελλάδας, Προορισμοί & Οργάνωση Ταξιδιού",
    description:
      "Οργάνωσε το ταξίδι σου στην Ελλάδα με οδηγούς προορισμών, ιδέες για νησιά, διαμονή, εκδρομές και χρήσιμες πληροφορίες.",
    path: "/el",
    locale: "el_GR",
  },
};

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
        logo: `${SITE_URL}/images/logo.webp`,
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
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  if (!isLang(lang)) {
    return {};
  }

  const seo = homeSeo[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: seo.title },
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
          url: "/images/hero-greece.webp",
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
      images: ["/images/hero-greece.webp"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

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
