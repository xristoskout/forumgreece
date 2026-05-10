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
