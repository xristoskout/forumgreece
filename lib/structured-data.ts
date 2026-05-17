const SITE_URL = "https://www.gogreecenow.com";

export function jsonLd(data: Record<string, unknown>, lang: string) {
  const json = JSON.stringify(data);
  return { __html: json };
}

export function breadcrumbItems(lang: string, items: { label: string; path: string }[]) {
  return items.map((item) => ({
    name: item.label,
    url: `${SITE_URL}/${lang}${item.path}`,
  }));
}

export function breadcrumbSchema(
  lang: string,
  items: { label: string; path: string }[]
) {
  const itemList = breadcrumbItems(lang, items);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemList.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function touristAttractionSchema(data: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
  };
}

export function touristDestinationSchema(data: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
  };
}

export function articleSchema(data: {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    image: data.image,
    url: data.url,
    ...(data.datePublished ? { datePublished: data.datePublished } : {}),
    ...(data.dateModified ? { dateModified: data.dateModified } : {}),
  };
}

export function localBusinessSchema(data: {
  name: string;
  description: string;
  image: string;
  url: string;
  address?: string;
  telephone?: string;
  priceRange?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    ...(data.address ? { address: { "@type": "PostalAddress", streetAddress: data.address } } : {}),
    ...(data.telephone ? { telephone: data.telephone } : {}),
    ...(data.priceRange ? { priceRange: data.priceRange } : {}),
  };
}

export function itemPageSchema(data: {
  name: string;
  description: string;
  image: string;
  url: string;
  offers?: { price: string; priceCurrency: string; availability?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "Product",
      name: data.name,
      description: data.description,
      image: data.image,
      url: data.url,
      ...(data.offers
        ? {
            offers: data.offers.map((o) => ({
              "@type": "Offer",
              price: o.price,
              priceCurrency: o.priceCurrency,
              ...(o.availability ? { availability: o.availability } : {}),
            })),
          }
        : {}),
    },
  };
}

export function collectionPageSchema(data: {
  name: string;
  description: string;
  url: string;
  numberOfItems?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: data.name,
    description: data.description,
    url: data.url,
    ...(data.numberOfItems ? { numberOfItems: data.numberOfItems } : {}),
  };
}
