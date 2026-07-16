import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from "../../../components/site-header";
import { isLang } from "../../../lib/locale";
import { SITE_URL } from "../../../lib/content";
import { breadcrumbSchema } from "../../../lib/structured-data";

const staticText = {
  title: {
    en: "About GoGreeceNow",
    el: "Σχετικά με το GoGreeceNow"
  },
  subtitle: {
    en: "Your ultimate hub for exploring Greece. We connect travelers with authentic local experiences, pristine destinations, and a thriving community.",
    el: "Ο απόλυτος κόμβος για την εξερεύνηση της Ελλάδας. Συνδέουμε τους ταξιδιώτες με αυθεντικές τοπικές εμπειρίες, υπέροχους προορισμούς και μια ζωντανή κοινότητα."
  },
  mission_title: {
    en: "Our Mission",
    el: "Η Αποστολή Μας"
  },
  mission_text: {
    en: "At GoGreeceNow, we believe that traveling to Greece is more than just a summer holiday; it's a feeling, an experience, and a lifelong memory. Our mission is to make organizing a trip to Greece effortlessly simple and deeply inspiring. By aggregating travel guides, hotel recommendations, food spots, and an interactive community of travelers, we offer a comprehensive ecosystem for everyone—from first-time visitors to seasoned island-hoppers. We want to showcase not only the famous highlights but also the hidden gems of our beautiful country.",
    el: "Στο GoGreeceNow, πιστεύουμε ότι το ταξίδι στην Ελλάδα είναι κάτι παραπάνω από καλοκαιρινές διακοπές· είναι συναίσθημα, εμπειρία και μια ανάμνηση ζωής. Η αποστολή μας είναι να κάνουμε την οργάνωση ενός ταξιδιού στην Ελλάδα απόλυτα απλή και γεμάτη έμπνευση. Συγκεντρώνοντας ταξιδιωτικούς οδηγούς, προτάσεις ξενοδοχείων, γαστρονομικές επιλογές και μια ισχυρή κοινότητα, προσφέρουμε ένα ολοκληρωμένο οικοσύστημα. Θέλουμε να αναδείξουμε όχι μόνο τα διάσημα μέρη, αλλά και τα κρυμμένα «διαμάντια» της όμορφης χώρας μας."
  },
  what_we_do_title: {
    en: "What We Do",
    el: "Τι Κάνουμε"
  },
  card1_title: {
    en: "Destination Guides",
    el: "Οδηγοί Προορισμών"
  },
  card1_text: {
    en: "Curated insights covering pristine islands, historic mainland cities, and everything in between.",
    el: "Προσεγμένοι οδηγοί που καλύπτουν όμορφα νησιά, ιστορικές πόλεις και ό,τι υπάρχει ενδιάμεσα."
  },
  card2_title: {
    en: "Local Communities",
    el: "Τοπικές Κοινότητες"
  },
  card2_text: {
    en: "Direct access to Facebook travel forums where locals and travelers exchange real-time tips.",
    el: "Άμεση πρόσβαση σε Facebook forums, όπου ντόπιοι και ταξιδιώτες ανταλλάσσουν tips σε πραγματικό χρόνο."
  },
  card3_title: {
    en: "Business Promotion",
    el: "Προβολή Επιχειρήσεων"
  },
  card3_text: {
    en: "Helping top-tier local hotels, tours, and restaurants reach a highly targeted travel audience.",
    el: "Βοηθάμε κορυφαία τοπικά ξενοδοχεία, εκδρομές και εστιατόρια να προσεγγίσουν ένα στοχευμένο κοινό ταξιδιωτών."
  }
};

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "en";
  const pageTitle = staticText.title[lang];
  const description = staticText.subtitle[lang];

  const canonicalUrl = `${SITE_URL}/${lang}/about`;
  const enUrl = `${SITE_URL}/en/about`;
  const elUrl = `${SITE_URL}/el/about`;

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
          url: `${SITE_URL}/images/hero-greece.webp`,
          width: 1600,
          height: 900,
          alt: "About GoGreeceNow",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [`${SITE_URL}/images/hero-greece.webp`],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "en";
  const t = staticText;

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "About" : "Σχετικά", path: "/about" },
  ]);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="relative overflow-hidden bg-slate-900 py-32 sm:py-40">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
            <Image src="/images/hero/greece-main.webp" alt="About GoGreeceNow - Greece Travel Guide" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-xl">
            {t.title[lang]}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-200 drop-shadow-md">
            {t.subtitle[lang]}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              {t.mission_title[lang]}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 rounded mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.mission_text[lang]}
            </p>
          </div>
          <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center bg-indigo-50">
             <Image src="/images/logo/gogreecenow-logo-v2.webp" alt="GoGreeceNow Logo" width={200} height={200} className="object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50/50 border-y border-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
              {lang === "el" ? "Η Ιστορία Μας" : "Our Story"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mt-3">
              {lang === "el" ? "Γιατί δημιουργήσαμε το GoGreeceNow" : "Why we built GoGreeceNow"}
            </h2>
          </div>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              {lang === "el"
                ? "Το GoGreeceNow γεννήθηκε από μια απλή διαπίστωση: η Ελλάδα είναι ένας από τους ομορφότερους ταξιδιωτικούς προορισμούς στον κόσμο, αλλά η οργάνωση ενός ταξιδιού εδώ μπορεί να είναι απογοητευτικά περίπλοκη. Οι πληροφορίες είναι διάσπαρτες, οι οδηγοί συχνά ξεπερασμένοι, και η εύρεση αυθεντικών τοπικών εμπειριών απαιτεί ώρες έρευνας."
                : "GoGreeceNow was born from a simple observation: Greece is one of the most beautiful travel destinations in the world, but planning a trip here can be frustratingly complex. Information is scattered, guides are often outdated, and finding authentic local experiences requires hours of research."}
            </p>
            <p>
              {lang === "el"
                ? "Θέλαμε να δημιουργήσουμε έναν κεντρικό κόμβο όπου οι ταξιδιώτες μπορούν να βρουν τα πάντα — από οδηγούς προορισμών και προτάσεις διαμονής μέχρι τοπικές εμπειρίες και γαστρονομικές περιηγήσεις — όλα σε ένα μέρος, γραμμένα με αυθεντικότητα και προσοχή στη λεπτομέρεια."
                : "We wanted to create a central hub where travelers can find everything — from destination guides and accommodation recommendations to local experiences and food tours — all in one place, written with authenticity and attention to detail."}
            </p>
            <p>
              {lang === "el"
                ? "Αυτό που μας κάνει διαφορετικούς είναι η βαθιά γνώση της Ελλάδας σε κάθε της μορφή. Δεν είμαστε μια γενική ταξιδιωτική πλατφόρμα — είμαστε ένα εξειδικευμένο ελληνικό travel portal που συνδυάζει την τεχνολογία με την αγάπη για τον τόπο."
                : "What makes us different is our deep knowledge of Greece in all its forms. We are not a generic travel platform — we are a specialized Greek travel portal that combines technology with a genuine love for the country."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-16">
            {t.what_we_do_title[lang]}
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-6">🗺️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.card1_title[lang]}</h3>
              <p className="text-slate-600">{t.card1_text[lang]}</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-6">💬</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.card2_title[lang]}</h3>
              <p className="text-slate-600">{t.card2_text[lang]}</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t.card3_title[lang]}</h3>
              <p className="text-slate-600">{t.card3_text[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 mb-6 transition-colors hover:bg-indigo-100">
            {lang === "en" ? "Digital Partner" : "Ψηφιακος Συνεργατης"}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            {lang === "en" ? "Technical Implementation by" : "Τεχνική Υλοποίηση από την"} <span className="text-indigo-600 font-extrabold block sm:inline">Focus AI</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 mb-8">
            {lang === "en" 
              ? "Discover how Focus AI can transform your business with state-of-the-art web development, digital marketing, and AI solutions."
              : "Ανακαλύψτε πώς η Focus AI μπορεί να μεταμορφώσει την επιχείρησή σας με σύγχρονη κατασκευή ιστοσελίδων, ψηφιακό marketing και λύσεις AI."}
          </p>
          <a
            href="https://www.focusai.gr" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-500/25"
          >
            {lang === "en" ? "Learn More About Focus AI →" : "Μάθετε Περισσότερα για την Focus AI →"}
          </a>
        </div>
      </section>

    </main>
    </>
  );
}
