import type { Metadata } from "next";
import { notFound, redirect, permanentRedirect } from "next/navigation";
import { hotels, SITE_URL } from "../../../../lib/content";
import HotelDetailsClient from "./hotel-details-client";
import { Lang, isLang, supportedLangs } from "../../../../lib/locale";
import { breadcrumbSchema } from "../../../../lib/structured-data";

type HotelPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
  return supportedLangs.flatMap((lang) =>
    hotels.map((hotel) => ({
      lang,
      slug: hotel.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: HotelPageProps): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  if (slug === "nayplio-odigos-taxidiou") {
    permanentRedirect(`/${lang}/hotels/nafplio`);
  }

  const item = hotels.find((hotel) => hotel.slug === slug);

  if (!item) {
    return {
      title: "Hotel Not Found | GoGreeceNow",
    };
  }

  const description =
    item.seo?.description?.[lang] ??
    item.description?.[lang] ??
    item.info?.[lang] ??
    item.overview?.[lang] ??
    item.info.en;

  const hotelTitle =
    item.seo?.title?.[lang] ??
    (lang === "el"
      ? `Πού να Μείνεις στη ${item.place}: Ξενοδοχεία & Επιλογές Διαμονής | GoGreeceNow`
      : `Where to Stay in ${item.place}: Best Areas & Hotel Ideas | GoGreeceNow`);

  const isComingSoon = item.description?.[lang]?.includes("coming soon") ?? false;

  const canonicalUrl = `${SITE_URL}/${lang}/hotels/${slug}`;
  const enUrl = `${SITE_URL}/en/hotels/${slug}`;
  const elUrl = `${SITE_URL}/el/hotels/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: hotelTitle },
    description,
    robots: isComingSoon ? { index: false, follow: true } : undefined,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        el: elUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: hotelTitle,
      description,
      images: [
        {
          url: item.image,
          width: 1200,
          height: 630,
          alt: item.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: hotelTitle,
      description,
      images: [item.image],
    },
  };
}

export default async function HotelPage({ params }: HotelPageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  if (slug === "nayplio-odigos-taxidiou") {
    permanentRedirect(`/${lang}/hotels/nafplio`);
  }

  const item = hotels.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const faqJsonLd = item.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: item.faq.map((faq) => ({
          "@type": "Question",
          name: faq.q[lang],
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a[lang],
          },
        })),
      }
    : null;

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Hotels" : "Ξενοδοχεία", path: "/hotels" },
    { label: item.name, path: `/hotels/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <HotelDetailsClient lang={lang} slug={slug} item={item} />
    </>
  );
}
