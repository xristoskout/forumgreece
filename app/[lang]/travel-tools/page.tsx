import { promises as fs } from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import SiteHeader from '../../../components/site-header';
import DecisionEngineClient from '../../../components/decision-engine-client';

type Props = { params: Promise<{ lang: string }> };

const SITE_URL = "https://www.gogreecenow.com";

async function getAllDestinations() {
  const dataDir = path.join(process.cwd(), 'data', 'destinations');
  const files = await fs.readdir(dataDir);
  const data = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(dataDir, file), 'utf8');
      return JSON.parse(content);
    })
  );
  return data;
}

const travelToolsSeo = {
  en: {
    title: "Compare Greek Islands & Destinations Side-by-Side",
    description:
      "Use our free travel decision tool to compare Greek destinations by budget, beaches, vibe and crowds. Find the right Greek island for your trip.",
    path: "/en/travel-tools",
    locale: "en_US",
  },
  el: {
    title: "Σύγκρινε Ελληνικά Νησιά & Προορισμούς Side-by-Side",
    description:
      "Χρησιμοποίησε το δωρεάν εργαλείο μας για να συγκρίνεις ελληνικούς προορισμούς ανά budget, παραλίες, vibe και κόσμο. Βρες το σωστό ελληνικό νησί για το ταξίδι σου.",
    path: "/el/travel-tools",
    locale: "el_GR",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const seo = travelToolsSeo[lang as keyof typeof travelToolsSeo] || travelToolsSeo.en;

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.path,
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
          alt: "Compare Greek destinations - GoGreeceNow Travel Tools",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/images/hero-greece.webp"],
    },
    keywords: [
      "Greece travel comparison",
      "Greek islands compare",
      "destination comparison tool",
      "Greece budget calculator",
      "compare Santorini Athens",
      "Greece vacation planner",
      "Greek islands tool",
      "travel decision tool",
    ],
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "el" }];
}

function TravelToolsStructuredData({ lang }: { lang: string }) {
  const pageUrl = `${SITE_URL}/${lang}/travel-tools`;
  const seo = travelToolsSeo[lang as keyof typeof travelToolsSeo] || travelToolsSeo.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: seo.title,
        description: seo.description,
        inLanguage: lang === "el" ? "el-GR" : "en-US",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
      },
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}/#webapplication`,
        name: lang === "el" ? "Εργαλείο Σύγκρισης Προορισμών" : "Destination Comparison Tool",
        description: seo.description,
        url: pageUrl,
        applicationCategory: "TravelApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        featureList: [
          "Side-by-side destination comparison",
          "Real-time budget calculator",
          "Multi-currency support (EUR, USD, GBP, CNY)",
          "Seasonal pricing analysis",
          "Accommodation cost estimates",
          "Food & transport budgeting",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: lang === "el" ? "Αρχική" : "Home",
            item: `${SITE_URL}/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: lang === "el" ? "Εργαλεία Ταξιδιού" : "Travel Tools",
            item: pageUrl,
          },
        ],
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

export default async function TravelToolsPage({ params }: Props) {
  const { lang } = await params;
  const destinations = await getAllDestinations();
  const seo = travelToolsSeo[lang as keyof typeof travelToolsSeo] || travelToolsSeo.en;

  return (
    <>
      <TravelToolsStructuredData lang={lang} />
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Το κεντρικό μενού (Header) του site */}
        <SiteHeader />
        
        {/* Premium Grecian Sky Blue Hero Section (More Intense Aegean Blue) */}
        <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-700 text-white pt-40 pb-32 px-6 text-center shadow-lg relative overflow-hidden">
          {/* Subtle decorative circles for depth */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-200/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
              {lang === "el" ? "Εργαλείο Σύγκρισης Προορισμών" : "Travel Decision Tool"}
            </h1>
            <p className="text-lg md:text-xl font-medium text-sky-50 leading-relaxed max-w-2xl mx-auto opacity-95">
              {lang === "el"
                ? "Συγκρίνετε ελληνικούς προορισμούς δίπλα-δίπλα, αναλύστε πραγματικά budgets και ανακαλύψτε πού να πάτε στη συνέχεια."
                : "Compare Greek destinations side-by-side, analyze real-world budgets, and discover where to head next."}
            </p>
          </div>
        </div>

        {/* Intro text before the tool */}
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-4 text-center">
          <p className="text-slate-600 leading-relaxed">
            {lang === "el"
              ? "Η επιλογή του σωστού ελληνικού προορισμού μπορεί να είναι δύσκολη. Χρησιμοποίησε αυτό το εργαλείο σύγκρισης για να δεις διαφορές σε budget, καιρό, ατμόσφαιρα και αξιοθέατα ανάμεσα σε δύο ελληνικά νησιά ή πόλεις. Διάλεξε δύο προορισμούς από κάτω και δες ποιος ταιριάζει καλύτερα στο ταξίδι σου."
              : "Choosing between Greek destinations can feel overwhelming. Use this comparison tool to see side-by-side differences in budget, weather, vibe and highlights between any two Greek islands or cities. Pick two destinations below and find which one fits your trip better."}
          </p>
        </div>

        {/* Main Tool Content Container - Slightly overlapping the hero block */}
        <main className="container mx-auto px-6 pb-12 -mt-12 relative z-10">
          <DecisionEngineClient destinations={destinations} lang={lang as "en" | "el"} />
        </main>

        {/* Outro text after the tool */}
        <div className="max-w-3xl mx-auto px-6 pb-8">
          <p className="text-slate-500 text-sm leading-relaxed">
            {lang === "el"
              ? "Δημοφιλείς συγκρίσεις περιλαμβάνουν Σαντορίνη εναντίον Μυκόνου για πολυτελή ταξίδια, Κρήτη εναντίον Ρόδου για οικογένειες, και Κεφαλονιά εναντίον Ζακύνθου για λάτρεις της φύσης. Μπορείς επίσης να συγκρίνεις Αθήνα με Θεσσαλονίκη για city breaks ή να εξερευνήσεις διαφορές ανάμεσα σε Κυκλάδες και Ιόνια για island hopping."
              : "Popular comparisons include Santorini vs Mykonos for luxury travelers, Crete vs Rhodes for families, and Kefalonia vs Zakynthos for nature lovers. You can also compare Athens with Thessaloniki for city breaks, or explore differences between the Cyclades and Ionian islands for island hopping."}
          </p>
        </div>

        {/* Footer Disclaimer */}
        <footer className="max-w-4xl mx-auto px-6 pb-16">
          <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-8 space-y-3">
            <p>
              {lang === "el"
                ? "Αποποίηση Ευθύνης Τιμών: Όλες οι εκτιμήσεις προϋπολογισμού που παρέχονται από το Εργαλείο Σύγκρισης του GoGreeceNow είναι ενδεικτικές και βασίζονται σε γενικούς μέσους όρους από δημόσια διαθέσιμες πηγές. Δεν αποτελούν δεσμευτική προσφορά ή εγγύηση οποιουδήποτε είδους. Οι τιμές για διαμονή, πτήσεις, φαγητό και μεταφορές ποικίλλουν σημαντικά ανάλογα με τη σεζόν, τη διαθεσιμότητα, τις προσωπικές συνήθειες δαπανών και τρίτους παρόχους. Το GoGreeceNow δεν φέρει καμία ευθύνη για οποιαδήποτε διαφορά μεταξύ των εκτιμήσεων που εμφανίζονται και των πραγματικών εξόδων. Οι χρήστες ενθαρρύνονται να επαληθεύουν όλες τις τιμές ανεξάρτητα πριν λάβουν οποιεσδήποτε ταξιδιωτικές ή οικονομικές αποφάσεις."
                : "Price Disclaimer: All budget estimates provided by the GoGreeceNow Travel Decision Tool are indicative only and are based on general averages from publicly available sources. They do not constitute a binding quote, offer or guarantee of any kind. Prices for accommodation, flights, food and transport vary widely based on season, availability, personal spending habits and third-party providers. GoGreeceNow accepts no responsibility for any difference between the estimates shown and actual costs incurred. Users are strongly encouraged to verify all prices independently before making any travel or financial decisions."}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
