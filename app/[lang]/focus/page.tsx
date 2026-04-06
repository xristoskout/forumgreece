"use client";

import { usePathname } from 'next/navigation';
import SiteHeader from "../../../components/site-header";

type Lang = "en" | "el";

export default function FocusPage() {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

  const t = {
    title: {
      en: "Digital Excellence by Focus",
      el: "Ψηφιακή Αριστεία από την Focus"
    },
    subtitle: {
      en: "We focus on building your digital presence. From stunning modern websites to targeted digital marketing and AI assistance.",
      el: "Εστιάζουμε στο να χτίσουμε την ψηφιακή σας παρουσία. Από εντυπωσιακές μοντέρνες ιστοσελίδες έως στοχευμένο ψηφιακό marketing και AI assistance."
    },
    services_title: {
      en: "Our Services",
      el: "Οι Υπηρεσίες Μας"
    },
    s1_title: {
      en: "Website Creation",
      el: "Κατασκευή Ιστοσελίδας"
    },
    s1_text: {
      en: "Modern, extremely fast, and highly aesthetic web applications designed to convert your visitors into customers.",
      el: "Μοντέρνες, εξαιρετικά γρήγορες και υψηλής αισθητικής web εφαρμογές σχεδιασμένες για να μετατρέπουν τους επισκέπτες σας σε πελάτες."
    },
    s2_title: {
      en: "Digital Marketing",
      el: "Ψηφιακό Marketing"
    },
    s2_text: {
      en: "Data-driven advertising campaigns, precise targeting, and brand building to maximize your ROI.",
      el: "Διαφημιστικές καμπάνιες βασισμένες σε δεδομένα, ακριβής στόχευση και brand building για τη μεγιστοποίηση του ROI."
    },
    s3_title: {
      en: "AI Assistance",
      el: "AI Assistance"
    },
    s3_text: {
      en: "Integration of Artificial Intelligence technologies to automate and optimize your business processes.",
      el: "Ενσωμάτωση τεχνολογιών Τεχνητής Νοημοσύνης για την αυτοματοποίηση και βελτιστοποίηση των επιχειρηματικών σας διαδικασιών."
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SiteHeader />

      <section className="relative overflow-hidden py-24 sm:py-32 flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-300 backdrop-blur-md mb-6">
            ✨ {lang === "en" ? "Powered by Focus" : "Υλοποιηση απο Focus"}
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-2xl">
            {t.title[lang]}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300 drop-shadow-lg leading-relaxed font-light">
            {t.subtitle[lang]}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.services_title[lang]}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-indigo-600"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="group rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-100">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              💻
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">{t.s1_title[lang]}</h3>
            <p className="leading-relaxed text-slate-600">
              {t.s1_text[lang]}
            </p>
          </div>

          <div className="group rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-100">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              📈
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">{t.s2_title[lang]}</h3>
            <p className="leading-relaxed text-slate-600">
              {t.s2_text[lang]}
            </p>
          </div>

          <div className="group rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-100">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              🤖
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">{t.s3_title[lang]}</h3>
            <p className="leading-relaxed text-slate-600">
              {t.s3_text[lang]}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 py-20 border-t border-slate-200 mt-10 rounded-t-[3rem]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            {lang === "en" ? "Let's work together" : "Ας συνεργαστούμε"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-slate-600 mb-8">
            {lang === "en" ? "Ready to transform your digital presence? Reach out to us today." : "Είστε έτοιμοι να μεταμορφώσετε την ψηφιακή σας παρουσία; Επικοινωνήστε μαζί μας σήμερα."}
          </p>
          <a
            href="mailto:gogreecenow.gr@gmail.com"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-500/25"
          >
            <span className="text-xl">✉️</span> gogreecenow.gr@gmail.com
          </a>
        </div>
      </section>
      
      <footer className="border-t border-slate-200 bg-white backdrop-blur-md">
        <div className="mx-auto text-center px-6 py-8 text-sm text-slate-500">
          <p>
            {lang === "en" ? "© 2026 Focus. All rights reserved." : "© 2026 Focus. Με επιφύλαξη παντός δικαιώματος."}
          </p>
        </div>
      </footer>
    </main>
  );
}
