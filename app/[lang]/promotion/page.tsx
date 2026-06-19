import type { Metadata } from "next";
import { Lang, isLang, supportedLangs } from "../../../lib/locale";
import { SITE_URL } from "../../../lib/content";
import PromotionClient from "./promotion-client";

const staticText = {
  title: {
    en: "GoGreeceNow Business Promotion | Reach Travelers Planning Their Greece Trip",
    el: "GoGreeceNow Πρόγραμμα Προβολής | Προώθησε την Επιχείρησή σου στην Ελλάδα",
  },
  subtitle: {
    en: "Get featured in Greece's most comprehensive travel guides and reach thousands of travelers planning their trip.",
    el: "Απέκτησε προβολή στους πιο ολοκληρωμένους ταξιδιωτικούς οδηγούς για την Ελλάδα.",
  },
};

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "en";
  const pageTitle = staticText.title[lang];
  const description = staticText.subtitle[lang];

  const canonicalUrl = `${SITE_URL}/${lang}/promotion`;
  const enUrl = `${SITE_URL}/en/promotion`;
  const elUrl = `${SITE_URL}/el/promotion`;

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        el: elUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/hero/greece-main.webp`,
          width: 1600,
          height: 900,
          alt: "Greece travel business promotion",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [`${SITE_URL}/images/hero/greece-main.webp`],
    },
  };
}

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export default function PromotionPage() {
  return <PromotionClient />;
}
