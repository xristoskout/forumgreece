import type { Metadata } from 'next';
import { destinations } from '../../../lib/destinations-data';
import { SITE_URL } from '../../../lib/content';
import SiteHeader from '../../../components/site-header';
import DestinationsClient from './destinations-client';
import { Lang, isLang } from '../../../lib/locale';
import { breadcrumbSchema } from '../../../lib/structured-data';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'el' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  const t = {
    title: {
      en: 'All Destinations in Greece — Browse by Region | GoGreeceNow',
      el: 'Όλοι οι Προορισμοί στην Ελλάδα — Ανά Περιοχή | GoGreeceNow',
    },
    description: {
      en: 'Explore all Greek destinations organized by region: Cyclades, Ionian Islands, Crete, Peloponnese, Northern Greece and more.',
      el: 'Εξερευνήστε όλους τους ελληνικούς προορισμούς ανά περιοχή: Κυκλάδες, Ιόνια Νησιά, Κρήτη, Πελοπόννησος, Βόρεια Ελλάδα και άλλα.',
    },
  };

  return {
    title: t.title[lang],
    description: t.description[lang],
  };
}

// Geographic regions in display order
const regionOrder = [
  {
    key: 'Cyclades',
    label: { en: 'Cyclades', el: 'Κυκλάδες' },
    emoji: '🌊',
    description: {
      en: 'The iconic island group with whitewashed villages, caldera views and crystal Aegean waters.',
      el: 'Το εμβληματικό νησιωτικό σύμπλεγμα με ασπρισμένα χωριά, θέα στην καλντέρα και κρυστάλλινα νερά.',
    },
  },
  {
    key: 'Ionian Islands',
    label: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    emoji: '🌿',
    description: {
      en: 'Lush green islands with Venetian heritage, turquoise waters and relaxed holiday atmosphere.',
      el: 'Καταπράσινα νησιά με ενετική κληρονομιά, τυρκουάζ νερά και χαλαρή διακοπεύτικη ατμόσφαιρα.',
    },
  },
  {
    key: 'Crete',
    label: { en: 'Crete', el: 'Κρήτη' },
    emoji: '🏔️',
    description: {
      en: "Greece's largest island — a world of its own with gorges, beaches, food and history.",
      el: 'Το μεγαλύτερο νησί της Ελλάδας — ένας κόσμος από μόνο του με φαράγγια, παραλίες, γαστρονομία και ιστορία.',
    },
  },
  {
    key: 'Dodecanese',
    label: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    emoji: '🏰',
    description: {
      en: 'Knights castles, medieval towns and warm Aegean waters close to the Turkish coast.',
      el: 'Κάστρα Ιπποτών, μεσαιωνικές πόλεις και ζεστά αιγαιοπελαγίτικα νερά κοντά στις τουρκικές ακτές.',
    },
  },
  {
    key: 'North Aegean',
    label: { en: 'North Aegean', el: 'Βόρειο Αιγαίο' },
    emoji: '🫒',
    description: {
      en: 'Authentic, less-traveled islands with strong local identity, food culture and wild nature.',
      el: 'Αυθεντικά, λιγότερο τουριστικά νησιά με ισχυρή τοπική ταυτότητα, γαστρονομία και άγρια φύση.',
    },
  },
  {
    key: 'Peloponnese',
    label: { en: 'Peloponnese', el: 'Πελοπόννησος' },
    emoji: '🏛️',
    description: {
      en: 'Ancient ruins, medieval fortresses, romantic old towns and unspoiled coastline.',
      el: 'Αρχαίες ακροπόλεις, μεσαιωνικά κάστρα, ρομαντικές παλιές πόλεις και ανέγγιχτες ακτές.',
    },
  },
  {
    key: 'Attica',
    label: { en: 'Attica', el: 'Αττική' },
    emoji: '🏙️',
    description: {
      en: 'Athens and the Attica coast — ancient wonders, urban culture and Riviera escapes.',
      el: 'Αθήνα και αττική ακτή — αρχαία θαύματα, αστική κουλτούρα και αποδράσεις στη Ριβιέρα.',
    },
  },
  {
    key: 'Northern Greece',
    label: { en: 'Northern Greece', el: 'Βόρεια Ελλάδα' },
    emoji: '🌲',
    description: {
      en: 'Cosmopolitan Thessaloniki, crystal peninsulas of Halkidiki and Mount Olympus country.',
      el: 'Κοσμοπολίτικη Θεσσαλονίκη, κρυστάλλινες χερσόνησοι Χαλκιδικής και η χώρα του Ολύμπου.',
    },
  },
  {
    key: 'Thessaly',
    label: { en: 'Thessaly', el: 'Θεσσαλία' },
    emoji: '🪨',
    description: {
      en: 'Otherworldly Meteora rock formations and monasteries — a UNESCO World Heritage site.',
      el: 'Οι υπερκόσμιοι βράχοι των Μετεώρων και τα μοναστήρια τους — μνημείο UNESCO.',
    },
  },
  {
    key: 'Epirus',
    label: { en: 'Epirus', el: 'Ήπειρος' },
    emoji: '🏡',
    description: {
      en: 'Wild mountains, river gorges and charming Ionian coast towns like Parga.',
      el: 'Άγρια βουνά, ποτάμια φαράγγια και γραφικές ιόνιες πόλεις σαν την Πάργα.',
    },
  },
  {
    key: 'Mainland escapes',
    label: { en: 'Mainland Escapes', el: 'Ηπειρωτική Ελλάδα' },
    emoji: '🗿',
    description: {
      en: 'Ancient oracle sites, mountain villages and historic routes off the main tourist trail.',
      el: 'Αρχαία μαντεία, ορεινά χωριά και ιστορικές διαδρομές μακριά από τα τουριστικά μονοπάτια.',
    },
  },
];

export default async function DestinationsListingPage({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = isLang(rawLang) ? rawLang : 'en';

  // Group destinations by region key (English name)
  const byRegionMap = new Map<string, typeof destinations>();
  for (const dest of destinations) {
    const key = dest.region.en;
    if (!byRegionMap.has(key)) byRegionMap.set(key, []);
    byRegionMap.get(key)!.push(dest);
  }

  // Convert Map to plain object for client component
  const byRegion: Record<string, typeof destinations> = {};
  for (const [key, val] of byRegionMap.entries()) {
    byRegion[key] = val;
  }

  const activeRegions = regionOrder.filter((r) => byRegionMap.has(r.key));

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Destinations" : "Προορισμοί", path: "/destinations" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SiteHeader />
      <DestinationsClient
        lang={lang}
        destinations={destinations}
        regionOrder={regionOrder}
        byRegion={byRegion}
        activeRegions={activeRegions}
      />
    </>
  );
}
