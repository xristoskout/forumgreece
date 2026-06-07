"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { hotels, destinations, type Lang, siteBrand, siteBrandLine } from "../../../../lib/content";
import { experienceBusinesses } from "../../../../lib/experiences";
import BusinessGallery from "../../businesses/[slug]/business-gallery";
import SiteHeader from "../../../../components/site-header";
import Stay22Booking from "../../../../components/stay22-booking";
import { sanitizeIframeHTML } from "../../../../lib/sanitize-iframe";

const STAY22_AID = "69eb75e6ce6579d96ef11aa3";
const STAY22_CAMPAIGN = "forumgreece";

const STAY22_EMBEDS: Record<string, string> = {
  santorini: "https://stay22.com/embed/69eb77823fa26d2af687fe19",
  mykonos: "https://stay22.com/embed/69ee3a9d4e520cef98dea92a",
  crete: "https://stay22.com/embed/69ee3b284d8b00b0283f8d3f",
  kefalonia: "https://stay22.com/embed/69ee3b9db13cd4c6bacc2fbc",
  athens: "https://stay22.com/embed/69ee3bf84e520cef98dead1e",
  "nayplio-odigos-taxidiou": "https://stay22.com/embed/69ee3c9a4e520cef98deae24",
  nafplio: "https://stay22.com/embed/69ee3c9a4e520cef98deae24",
  thessaloniki: "https://stay22.com/embed/69ee3cf34e520cef98deaf0d",
  paros: "https://stay22.com/embed/69ee3d424d8b00b0283f916d",
  milos: "https://stay22.com/embed/69ee3d8c4e520cef98deb0c3",
  naxos: "https://stay22.com/embed/6a0daa205402d5457c2f9169",
  zakynthos: "https://stay22.com/embed/69ee3e1c1c09e44123fd027c",
  rhodes: "https://stay22.com/embed/69ee3ea44e520cef98deb2ec",
  halkidiki: "https://stay22.com/embed/69ee3f1a1c09e44123fd04c7",
  meteora: "https://stay22.com/embed/69ee3f7cb13cd4c6bacc38c1",
  monemvasia: "https://stay22.com/embed/69ee3fdf4e520cef98deb56d",
  chania: "https://stay22.com/embed/69ee406d1c09e44123fd07ce",
  parga: "https://stay22.com/embed/69ee40b84e520cef98deb77b",
  delphi: "https://stay22.com/embed/69ee410f4e520cef98deb892",
  corfu: "https://stay22.com/embed/69eb79623fa26d2af68804f7",
  lesvos: "https://stay22.com/embed/69eb79de3fa26d2af68806f8",
  "patmos-travel-guide": "https://stay22.com/embed/6a073e542573b5d07586c5db",
  patmos: "https://stay22.com/embed/6a073e542573b5d07586c5db",
  patras: "https://stay22.com/embed/6a08335181c53d08587afc33",
  kalamata: "https://stay22.com/embed/6a0da4baf968487cce2b1e87",
  thassos: "https://stay22.com/embed/6a17019b25eb5f0f8531770c",
  skiathos: "https://stay22.com/embed/6a1441871194c5e40cbc436e",
  lefkada: "https://stay22.com/embed/6a1ed6996b16982d6c0e457f",
  evia: "https://stay22.com/embed/6a1ed7c4105a99849371700a",
  kos: "https://stay22.com/embed/6a1ee1c66b16982d6c0e8775",
  lemnos: "https://stay22.com/embed/6a201d9f7ae5f4b0fa298dd1",
  syros: "https://stay22.com/embed/6a2030c13f80a50cb3c16e4e",
  rethymno: "https://stay22.com/embed/6a2155b533c0b6cf40a045ca",
  heraklion: "https://stay22.com/embed/6a215fb333c0b6cf40a08064",
  lasithi: "https://stay22.com/embed/6a23f6bcdf1132ff50fd7cc8",
  aegina: "https://stay22.com/embed/6a2408c4543a519eadd6cb4c",
  ikaria: "https://stay22.com/embed/6a25036b543a519eadd962d5",
  tinos: "https://stay22.com/embed/6a2508d66f8247fde477ef54",
  skopelos: "https://stay22.com/embed/6a251735df1132ff500060b2",
};

const HOTEL_NAMES: Record<string, string[]> = {
  santorini: ["Canaves Oia Suites", "Katikies", "Perivolas", "Charisma Suites", "Esperas Traditional Houses",
    "Canaves Oia", "Santorini Secret", "Andronis", "Mystique", "Grace Hotel", "Vedema", "Santo Maris"],
  mykonos: ["Kouros", "Rocabella", "Myconian", "Mikri Angela", "Mykonos Blanc"],
  crete: ["Blue Palace", "Daios Cove", "Elounda Beach", "Abaton Island"],
  athens: ["Electra Metropolis", "Electra Palace", "Grande Bretagne", "King George", "Hilton Athens"],
  paros: ["Paros Agnanti", "Aegeon", "Hotel Senia", "Marcelina"],
  milos: ["Milos Breeze", "Sundays Milos", "White Rock Milos", "Aeolus"],
  naxos: ["Naxos Palace", "Hotel Grotta", "Galini Beach", "Naxos Holidays", "Studios Kalergis", "Aeolos Beach", "Laguna Beach Village", "Anixis Studios"],
  corfu: ["Corfu Imperial", "Grecotel", "Pink Palace", "Sinarades"],
  zakynthos: ["Zante Maris", "Lesante", "Porto Zante", "Libra"],
  kefalonia: ["Avithos", "F Zeen", "Odyssey", "Ionian Sun"],
  rhodes: ["Atrium Palace", "Lindos Blu", "Sheraton Rhodes", "Mitsis"],
  halkidiki: ["Sani Resort", "Eagle Beach", "Ikos Olivia"],
  meteora: ["Doupiani House", "Meteora Central", "Alsos House"],
  monemvasia: ["Moni Emvasis", "Byzantino", "Theophano", "Likinia"],
  parga: ["Vegera", "Paradise Hotel", "Lichnos"],
  delphi: ["Amalia Delphi", "Fedriades", "Amalia Hotel"],
  thessaloniki: ["Electra Thessaloniki", "Makedonia Palace", "Hyatt Regency"],
  lesvos: ["Lesvos Beach", "Porto Lesvos"],
  "nayplio-odigos-taxidiou": ["Nafplio Palace", "Amalia Nafplio"],
  nafplio: ["Nafplio Palace", "Amalia Nafplio"],
  chania: ["Casa Delfino", "Porto Veneziano", "Elounda Chania"],
  "patmos-travel-guide": ["Patmos Aktis", "Chrissi Aktis", "Patmos Paradise", "Petra"],
  patmos: ["Patmos Aktis", "Chrissi Aktis", "Patmos Paradise", "Petra"],
  patras: ["Byzantine Hotel", "Astir Hotel Patras", "Maison Grecque Boutique Hotel", "Porto Rio Hotel & Casino", "Achaia Beach", "Poseidon Hotel Aigio", "Delfinia Hotel Akrata", "Europa Hotel Olympia", "Hotel Olympia Palace", "Neda Hotel", "Akti Hotel Nafpaktos", "Nafpaktos Residence"],
  kalamata: ["Filoxenia Hotel", "Pharae Palace Hotel", "Haikos Hotel", "Elite Hotel Kalamata", "Kastro Boutique Hotel", "Kalamitsi Hotel", "Anniska & Lino Houses", "Elies Resort", "Stoupa Beach Hotel", "Mani Gate Hotel", "The Romanos, a Luxury Collection Resort, Costa Navarino", "The Romanos", "The Westin Resort Costa Navarino", "Zoe Hotel Pylos", "Zante Maris Navarino", "Ithomi Hotel, Mavromati"],
  thassos: ["Hotel Timoleon", "Thassian Waves", "Aethria Hotel", "Mythic Coast Hotel", "Golden Beach Hotel", "Villa Cactus", "Porto Thassos Hotel", "Astris Beach Hotel", "Limenaria Beach Hotel", "Archontiko Theologos"],
  lemnos: ["Myrina Castle Hotel", "Porto Myrina Palace", "Lemnos Village Resort", "Lemnos Beach Hotel", "Afrodite Hotel", "Ilio Maris Hotel", "Lemnos Inn", "Pergamontas Village", "Varos Village Hotel"],
  skiathos: ["Bourtzi Boutique Hotel", "Alkyon Hotel", "Hotel Mato", "Skiathos Palace Hotel", "Pension Pandora", "San Stefano Hotel", "Atrium Hotel", "Esperides Beach Hotel", "Skiathos Princess Hotel", "Troulos Bay Hotel", "Mandraki Village", "Koukounaries Hotel", "Skiathos Sage Hotel", "Aegean Suites Hotel", "Paradise Hotel Skiathos", "Kanapitsa Mare Hotel"],
  rethymno: ["Fortezza", "Rimondi Boutique Hotel", "Avli Lounge Apartments", "Casa Vitae", "Creta Palace", "Acqua Marine", "Plakias Bay Hotel"],
  heraklion: ["Astoria Hotel", "GDM Megaron", "Olive Green Hotel", "Lato Boutique Hotel", "Aquila Atlantis", "Ibis Styles Heraklion", "Capsis Astoria"],
  lasithi: ["Elounda Peninsula", "Elounda Beach", "Domes of Elounda", "Daios Cove", "St. Nicolas Bay", "Minos Beach Art Hotel", "InterContinental Crete", "Royal Marmin Bay", "Sitia Beach City Resort", "NUMO Ierapetra Beach Resort", "Porto Maltese", "Cressa Ghitonia"],
  aegina: ["Marathonas Beach Hotel", "Thomas Beach Hotel", "Fistikies Apartments", "Souvala Mare", "Alkistis Apartments", "Artemis Apartments", "Papyrus Rooms", "Akrogiali", "Giannas Apartments", "Pnigma Apartments", "Aegina Hotel", "Rastoni", "Saronis", "Karthaia", "Perdiki", "Nafsika", "Pavlou", "Nisos", "Avra", "Rania", "Klonos", "Oasi", "Voula"],
  ikaria: ["Karras", "Erofili", "Fanari", "Arxontissa", "Ikaros Star", "Kavos", "Filiotis", "Mantalena", "Akti", "Cavos Bay", "Armenistis Hotel", "Tsakiris Apartments", "Nas Studios", "Thea", "Ammos"],
  tinos: ["Ageri", "Aeolis Tinos", "Favie Eva", "Antama Suites", "Pelopas", "Pyrgos Houses", "The Lemon Tree", "Marble Stories", "Mare Monte", "Niriis", "Mansion Tinos", "Villa Lithos", "Kardiani View", "Tinos Bay Hotel", "Porto Tinos", "Agios Romanos"],
  skopelos: ["Adrina Beach Hotel", "Elli Hotel", "Villea Seaview Apartments", "Panormos Village Hotel", "Panormos Bay apartments & studios", "Stafylos Suites & Boutique Hotel", "Irida Apartments", "Natura Luxury Boutique Hotel", "Hillside villas near Milia"],
};

function getStay22Url(slug: string): string {
  return STAY22_EMBEDS[slug] || "https://stay22.com/embed/69eb79de3fa26d2af68806f8";
}

function getAllezSearchUrl(hotelName: string, place: string): string {
  const addr = encodeURIComponent(place.replace(/ *—.*$/, "").trim() + ", Greece");
  const hotel = encodeURIComponent(hotelName);
  return `https://www.stay22.com/allez/roam?aid=${STAY22_AID}&campaign=${STAY22_CAMPAIGN}&hotelname=${hotel}&address=${addr}`;
}

function renderSectionContent(text: string | undefined, slug: string, place: string) {
  if (!text) return null;
  const blocks = text.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("━━━")) {
      return (
        <div key={i} className="my-6 rounded-2xl bg-amber-50 border border-amber-200 px-6 py-4 text-base font-bold tracking-wide text-amber-900 shadow-sm">
          {renderWithHotelLinks(trimmed.replace(/━/g, "").trim(), slug, place)}
        </div>
      );
    }
    if (trimmed.startsWith("💡")) {
      return (
        <div key={i} className="my-6 rounded-2xl bg-indigo-50 border border-indigo-200 px-6 py-5 shadow-sm">
          <span className="text-base font-bold text-indigo-800 block mb-1">💡 Insider tip</span>
          <span className="text-base leading-relaxed text-indigo-700">
            {renderWithHotelLinks(trimmed.replace(/^💡\s*(Insider tip:\s*)?/i, ""), slug, place)}
          </span>
        </div>
      );
    }
    if (trimmed.startsWith("⚠️")) {
      return (
        <div key={i} className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5 shadow-sm">
          <span className="text-base font-bold text-red-800 block mb-1">⚠️ Warning</span>
          <span className="text-base leading-relaxed text-red-700">
            {renderWithHotelLinks(trimmed.replace(/^⚠️\s*(Warning:\s*)?/i, ""), slug, place)}
          </span>
        </div>
      );
    }
    if (trimmed.startsWith("✦")) {
      const hotelMatch = trimmed.match(/^✦\s*(.+?)(?:\s*—\s*|\s*:\s*)(.+)/);
      if (hotelMatch) {
        return (
          <div key={i} className="my-4 rounded-xl bg-white border border-slate-200 px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-base font-bold text-slate-900 block">
              {renderWithHotelLinks(hotelMatch[1].trim(), slug, place)}
            </span>
            <span className="text-base leading-relaxed text-slate-600 mt-1 block">
              {renderWithHotelLinks(hotelMatch[2].trim(), slug, place)}
            </span>
          </div>
        );
      }
      return (
        <div key={i} className="my-4 rounded-xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
          <span className="text-base leading-relaxed text-slate-600">
            {renderWithHotelLinks(trimmed, slug, place)}
          </span>
        </div>
      );
    }
    return (
      <p key={i} className="text-lg leading-relaxed text-slate-600">
        {renderWithHotelLinks(trimmed, slug, place)}
      </p>
    );
  });
}

function renderWithHotelLinks(text: string | undefined, slug: string, place: string) {
  if (!text) return null;
  const names = HOTEL_NAMES[slug] || [];
  if (names.length === 0) return text;
  const sorted = [...names].sort((a, b) => b.length - a.length);
  const escaped = sorted.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (sorted.some(name => name.toLowerCase() === part.toLowerCase())) {
      const href = getAllezSearchUrl(part, place);
      return <a key={i} href={href} target="_blank" rel="noreferrer" className="stay22-link">{part}</a>;
    }
    return part;
  });
}

type ListCardProps = {
  title: string;
  items?: string[];
  icon?: string;
};

function ListCard({ title, items, icon = "•" }: ListCardProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 font-bold text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
          {title}
        </h2>
      </div>

      <div className="mt-8 grid gap-3">
        {items.map((item, index) => (
          <div
            key={`${title}-${item}-${index}`}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm leading-relaxed text-slate-600 transition-all duration-300"
          >
            <span className="text-indigo-700 mt-0.5">•</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function getYouTubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "") || null;
    }

    const fromQuery = parsed.searchParams.get("v");
    if (fromQuery) return fromQuery;

    const parts = parsed.pathname.split("/").filter(Boolean);
    const embedIndex = parts.findIndex(
      (part) => part === "embed" || part === "shorts"
    );

    if (embedIndex !== -1 && parts[embedIndex + 1]) {
      return parts[embedIndex + 1];
    }

    return null;
  } catch {
    return null;
  }
}

export default function HotelDetailsClient({ lang: serverLang, slug: serverSlug, item: serverItem }: { lang: string; slug: string; item: typeof hotels[number] }) {
  const params = useParams<{ lang: string; slug: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const lang: Lang = serverLang === "el" ? "el" : (params?.lang === "el" ? "el" : "en");
  const slug = serverSlug || params?.slug || "";

  const item = serverItem || hotels.find((entry) => entry.slug === slug);

  function stripLocale(path: string) {
    const stripped = path.replace(/^\/(en|el)(?=\/|$)/, "");
    return stripped || "/";
  }

  function withLang(path: string, locale: Lang = lang) {
    if (/^https?:\/\//i.test(path)) return path;

    const normalized = path.startsWith("/") ? path : `/${path}`;
    const cleanPath = stripLocale(normalized);

    if (cleanPath === "/") {
      return `/${locale}`;
    }

    return `/${locale}${cleanPath}`;
  }

  function switchLanguage(nextLang: Lang) {
    router.push(withLang(pathname, nextLang));
  }

  const t = {
    navHome: { en: "Home", el: "Αρχική" },
    navSection: { en: "Hotels", el: "Ξενοδοχεία" },
    eyebrow: { en: "Accommodation", el: "Διαμονή" },
    overview: { en: "Overview", el: "Επισκόπηση" },
    features: { en: "Key features", el: "Βασικά χαρακτηριστικά" },
    location: { en: "Location", el: "Τοποθεσία" },
    back: { en: "Back to homepage", el: "Επιστροφή στην αρχική" },
    notFound: {
      en: "Hotel not found.",
      el: "Το ξενοδοχείο δεν βρέθηκε.",
    },
    about: { en: "Description", el: "Περιγραφή" },
    services: { en: "Services", el: "Παροχές" },
    practicalInfo: { en: "Useful Notes", el: "Χρήσιμες πληροφορίες" },
    contact: { en: "Contact", el: "Επικοινωνία" },
    website: { en: "Website", el: "Ιστοσελίδα" },
    video: { en: "Video Preview", el: "Προεπισκόπηση βίντεο" },
    openMap: { en: "Open map", el: "Άνοιγμα χάρτη" },
    gallery: { en: "Gallery", el: "Φωτογραφίες" },
    quickAccess: { en: "Quick Access", el: "Γρήγορη πρόσβαση" },
    youtube: { en: "Open on YouTube", el: "Άνοιγμα στο YouTube" },
    perfectFor: { en: "Perfect for", el: "Ιδανικό για" },
    premiumNote: {
      en: "Relaxing stays, beautiful views and authentic hospitality — organized in a clear and practical way.",
      el: "Χαλαρωτική διαμονή, όμορφη θέα και αυθεντική φιλοξενία — οργανωμένα με καθαρό και πρακτικό τρόπο."
    }
  };

  if (!item) {
    return <div className="p-10">{t.notFound[lang]}</div>;
  }

  const galleryImages = item.galleryImages || [item.image];
  const hasContact = Boolean(item.phone || item.email || item.youtube || item.website);
  const videoId = item.youtube ? getYouTubeVideoId(item.youtube) : null;
  const videoEmbedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
  
  const mapSrc = item.mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(item.mapQuery)}&z=14&output=embed`
    : null;

  const mapLink = item.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}`
    : null;

  const destination = destinations.find((d) => d.slug === slug);
  const destName = item.place.split(" —")[0];

  return (
    <main className="min-h-screen bg-transparent text-slate-900 pt-20">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href={withLang("/")}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-md px-6 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-indigo-400 hover:text-indigo-800 shadow-md"
          >
            ← {t.back[lang]}
          </Link>
          {destination && (
            <Link
              href={withLang(`/destinations/${slug}`)}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-md px-6 py-2.5 text-sm font-semibold text-indigo-700 transition hover:border-indigo-400 hover:bg-indigo-100 shadow-md"
            >
              {lang === "en" ? `${destName} Destination →` : `Προορισμός ${destName} →`}
            </Link>
          )}
        </div>

        <section className="relative mt-6 overflow-hidden rounded-[2.5rem] text-slate-900 shadow-xl border border-slate-200 group">
          <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110">
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-90" />

          <div className="relative px-6 py-12 lg:py-16 lg:px-10 max-w-4xl">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-800 backdrop-blur-md">
                  {item.badge || "Featured"}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl animate-float-playful transition-all duration-300 hover:scale-105 hover:rotate-1 hover:text-indigo-50 cursor-default">
                {item.name}
              </h1>

              <p className="mt-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                {item.place}
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 drop-shadow-md">
                {item.info[lang]}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {item.features[lang].slice(0, 4).map((feat, index) => (
                  <span
                    key={`hero-highlight-${feat}-${index}`}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-200 drop-shadow">
                {t.premiumNote[lang]}
              </p>
            </div>
          </div>
        </section>

        {STAY22_EMBEDS[slug] && (
          <section className="mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-xl bg-white p-3">
             <Stay22Booking />
             <iframe 
              id="stay22-widget"
              width="100%" 
              height="428" 
               src={getStay22Url(slug)}
              frameBorder="0"
              title={`Stay22 ${slug} Hotels Map`}
              className="rounded-[2.2rem]"
            ></iframe>
          </section>
        )}

        {galleryImages.length > 1 && (
          <section className="mt-16">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {t.gallery[lang]}
              </h2>
            </div>

            <BusinessGallery
              name={item.name}
              initialImage={item.image}
              images={galleryImages}
            />
          </section>
        )}

        <div className="mt-16 grid gap-10 xl:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-8">
            <section className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 font-bold text-xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                  ≈
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                  {t.about[lang]}
                </h2>
              </div>

              <div className="stay22-desc mt-8 text-lg leading-relaxed text-slate-600 whitespace-pre-line">
                {item.description ? renderSectionContent(item.description[lang], slug, item.place) : renderSectionContent(item.overview[lang], slug, item.place)}
              </div>
            </section>
            
            {item.sections && item.sections.length > 0 && (
              <div className="space-y-10 mt-10">
                {item.sections.map((section, idx) => (
                  <section 
                    key={`hotel-section-${idx}`}
                    className="group rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                  >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                      {section.title[lang]}
                    </h2>
                    <div className="stay22-desc mt-8 text-lg leading-relaxed text-slate-600 whitespace-pre-line">
                      {renderSectionContent(section.content[lang], slug, item.place)}
                    </div>
                  </section>
                ))}
              </div>
            )}

            {item.faq && item.faq.length > 0 && (
              <section className="mt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
                  {lang === "en" ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"}
                </h2>
                <div className="space-y-4">
                  {item.faq.map((faq, idx) => (
                    <details
                      key={`faq-${idx}`}
                      className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md p-6 shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <summary className="cursor-pointer list-none text-base font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors flex items-center justify-between">
                        <span>{faq.q[lang]}</span>
                        <span className="ml-4 text-indigo-400 transition-transform duration-300 group-open:rotate-45 text-xl leading-none flex-shrink-0">+</span>
                      </summary>
                      <p className="mt-4 text-base leading-relaxed text-slate-600">
                        {faq.a[lang]}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}


            <ListCard
              title={t.services[lang]}
              items={item.services?.[lang]}
              icon="⚓"
            />

            <ListCard
              title={t.practicalInfo[lang]}
              items={item.practicalInfo?.[lang]}
              icon="i"
            />
          </div>

          <aside className="space-y-8">
            {item.featuredBusinesses && item.featuredBusinesses.length > 0 && (
              <section className="group rounded-[2.5rem] border border-indigo-200 bg-indigo-50/60 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-800">
                    {lang === "en" ? "Featured" : "Προτεινόμενο"}
                  </span>
                </div>
                {item.featuredBusinesses
                  .map((bSlug) => experienceBusinesses.find((b) => b.slug === bSlug))
                  .filter(Boolean)
                  .map((business) => (
                    <Link href={withLang(`/businesses/${business!.slug}`)} key={business!.slug} className="block group/card">
                      <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative h-40 w-full">
                          <Image
                            src={business!.image}
                            alt={business!.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 300px"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-slate-900 group-hover/card:text-indigo-700 transition-colors">
                            {business!.name}
                          </h3>
                          <p className="mt-2 text-sm text-slate-500 line-clamp-3">
                            {business!.info[lang]}
                          </p>
                          <span className="mt-3 inline-flex items-center text-xs font-semibold text-indigo-600">
                            {lang === "en" ? "View details" : "Δείτε λεπτομέρειες"} →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </section>
            )}

            <ListCard
              title={t.features[lang]}
              items={item.features[lang]}
              icon="★"
            />

            {(mapSrc || item.mapIframe) && (
              <section className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <div className="border-b border-slate-200 p-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                    {t.location[lang]}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.place}
                  </p>
                </div>

                <div className="relative h-[280px] w-full bg-slate-100">
                  {item.mapIframe ? (
                    <div 
                      className="absolute inset-0 h-full w-full border-0 filter opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500 [&>iframe]:w-full [&>iframe]:h-full"
                      dangerouslySetInnerHTML={{ __html: sanitizeIframeHTML(item.mapIframe) || '' }}
                    />
                  ) : mapSrc ? (
                    <iframe
                      src={mapSrc}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0 filter opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
                      title={`${item.name} map`}
                    />
                  ) : null}
                </div>
              </section>
            )}

            {hasContact && (
              <section className="group rounded-[2.5rem] border border-slate-200 bg-white/90 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-800 transition-colors">
                  {t.contact[lang]}
                </h2>

                <div className="mt-8 grid gap-4">
                  {item.phone && (
                    <a
                      href={`tel:${item.phone}`}
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {item.phone}
                    </a>
                  )}

                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {item.email}
                    </a>
                  )}

                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-4 text-sm font-medium text-slate-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      {t.website[lang]}
                    </a>
                  )}
                </div>
              </section>
            )}
          </aside>
        </div>
      </div>

    </main>
  );
}
