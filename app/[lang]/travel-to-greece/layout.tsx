import type { Metadata } from "next";

type Lang = "en" | "el";

type Props = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

const SITE_URL = "https://www.gogreecenow.com";

function isLang(value: string): value is Lang {
  return value === "en" || value === "el";
}

const seo: Record<Lang, { title: string; description: string; path: string; locale: string }> = {
  en: {
    title: "Travel to Greece: Practical Guide, Itineraries & Planning Tips | GoGreeceNow",
    description:
      "Everything you need to plan a trip to Greece: destination forums, island ideas, practical travel tips and local communities to help you explore confidently.",
    path: "/en/travel-to-greece",
    locale: "en_US",
  },
  el: {
    title: "Ταξίδι στην Ελλάδα: Πρακτικός Οδηγός, Διαδρομές & Συμβουλές | GoGreeceNow",
    description:
      "Όλα όσα χρειάζεσαι για να οργανώσεις ταξίδι στην Ελλάδα: forums προορισμών, ιδέες για νησιά, πρακτικά tips και τοπικές κοινότητες.",
    path: "/el/travel-to-greece",
    locale: "el_GR",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isLang(lang)) return {};

  const s = seo[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: s.title },
    description: s.description,
    alternates: {
      canonical: s.path,
      languages: {
        en: "/en/travel-to-greece",
        el: "/el/travel-to-greece",
        "x-default": "/en/travel-to-greece",
      },
    },
    openGraph: {
      type: "website",
      url: s.path,
      siteName: "GoGreeceNow",
      title: s.title,
      description: s.description,
      locale: s.locale,
      images: [
        {
          url: "/images/hero/greece-main.webp",
          width: 1600,
          height: 900,
          alt: "Travel to Greece — GoGreeceNow forums and communities",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: s.title,
      description: s.description,
      images: ["/images/hero/greece-main.webp"],
    },
  };
}

export default function TravelToGreeceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
