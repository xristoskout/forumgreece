"use client";

import { usePathname } from 'next/navigation';
import SiteHeader from "../../../components/site-header";
import Image from 'next/image';
import Link from 'next/link';
type Lang = "en" | "el";

export default function AboutPage() {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

  const t = {
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

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden bg-slate-900 py-32 sm:py-40">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
           <Image src="/images/hero/greece-main.webp" alt="About Greece" fill className="object-cover" />
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
             <Image src="/images/logo/gogreecenow-logo.webp" alt="GoGreeceNow Logo" width={200} height={200} className="object-contain" />
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
  );
}
