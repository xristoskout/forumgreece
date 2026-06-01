import type { Metadata } from "next";
import { Lang, isLang } from "../../../lib/locale";
import { SITE_URL } from "../../../lib/content";
import PromotionClient from "./promotion-client";

const staticText = {
  title: {
    en: "Promote Your Business in Greece | Reach Travelers Planning Their Trip",
    el: "Προώθησε την Επιχείρησή σου στην Ελλάδα | Προσέγγισε Ταξιδιώτες",
  },
  subtitle: {
    en: "Connect with thousands of travelers planning their trip to Greece. List your hotel, restaurant or tour and get featured across our destination guides with a dofollow backlink.",
    el: "Συνδέσου με χιλιάδες ταξιδιώτες που οργανώνουν το ταξίδι τους στην Ελλάδα. Πρόβαλε το ξενοδοχείο, το εστιατόριο ή την εκδρομή σου με dofollow backlink.",
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
          alt: "Greece background for business promotion",
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

export default function PromotionPage() {
  return <PromotionClient />;
}
