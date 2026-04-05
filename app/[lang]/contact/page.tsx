"use client";

import { usePathname } from 'next/navigation';
import SiteHeader from "../../../components/site-header";
import Link from 'next/link';

type Lang = "en" | "el";

export default function ContactPage() {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

  const t = {
    title: {
      en: "Contact Us",
      el: "Επικοινωνία"
    },
    subtitle: {
      en: "We'd love to hear from you. Please reach out with any inquiries, promotion requests, or feedback.",
      el: "Θα χαρούμε να επικοινωνήσετε μαζί μας για οποιαδήποτε ερώτηση, αίτημα προβολής ή πρόταση."
    },
    email_label: {
      en: "Email us at",
      el: "Στείλτε μας Email στο"
    },
    promotion_box_title: {
      en: "Are you a business owner in Greece?",
      el: "Έχετε επιχείρηση στην Ελλάδα;"
    },
    promotion_box_text: {
      en: "Learn more about our premium promotion services and how we can connect you with thousands of travelers.",
      el: "Μάθετε περισσότερα για τις υπηρεσίες προβολής μας και πώς μπορούμε να σας συνδέσουμε με χιλιάδες ταξιδιώτες."
    },
    promotion_box_btn: {
      en: "View Promotion Services",
      el: "Υπηρεσίες Προβολής"
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <SiteHeader />

      <section className="bg-indigo-600 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md">
            {t.title[lang]}
          </h1>
          <p className="mt-6 text-lg text-indigo-100 max-w-2xl mx-auto">
            {t.subtitle[lang]}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24 flex-1 -mt-16 w-full">
        <div className="grid gap-8 md:grid-cols-2">
            
          {/* Email Card */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 flex flex-col items-center justify-center text-center border border-slate-100 transform transition-all hover:scale-[1.02]">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner text-indigo-600">
              ✉️
            </div>
            <h2 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2">
              {t.email_label[lang]}
            </h2>
            <a href="mailto:gogreecenow.gr@gmail.com" className="text-2xl sm:text-3xl font-extrabold text-indigo-600 hover:text-indigo-800 transition-colors underline decoration-indigo-200 underline-offset-8">
              gogreecenow.gr@gmail.com
            </a>
          </div>

          {/* Business Promo Link Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] shadow-2xl p-10 flex flex-col items-center justify-center text-center border border-slate-700">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
              🚀
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.promotion_box_title[lang]}
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
               {t.promotion_box_text[lang]}
            </p>
            <Link href={lang === 'el' ? '/el/promotion' : '/en/promotion'} className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-slate-100 transition-all">
              {t.promotion_box_btn[lang]} &rarr;
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
