import type { Metadata } from "next";
import { redirect } from "next/navigation";

const SITE_URL = "https://www.gogreecenow.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GoGreeceNow | Greece Travel Guides & Trip Planning",
  description:
    "Complete Greece travel guide — discover the best Greek islands, plan your itinerary, find hotels, tours and practical travel tips for every destination.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    type: "website",
    url: "/en",
    siteName: "GoGreeceNow",
    title: "GoGreeceNow | Greece Travel Guides & Trip Planning",
    description:
      "Complete Greece travel guide — discover the best Greek islands, plan your itinerary, find hotels, tours and practical travel tips for every destination.",
    locale: "en_US",
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
    title: "GoGreeceNow | Greece Travel Guides & Trip Planning",
    description:
      "Complete Greece travel guide — discover the best Greek islands, plan your itinerary, find hotels, tours and practical travel tips for every destination.",
    images: ["/images/hero-greece.webp"],
  },
};

export default async function RootPage() {
  // Always redirect to English version
  redirect("/en");
}
