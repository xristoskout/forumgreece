"use client";

import { useState } from 'react';
import SiteHeader from "../../../components/site-header";
import Link from 'next/link';
import { useLocale } from '../../../lib/useLocale';

export default function ContactPage() {
  const { lang } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('loading');

    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      website_url: formData.get('website_url') as string, // Honeypot
      source: 'Main Contact Page'
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

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
            
          {/* Contact Form Card */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {lang === 'el' ? 'Στείλτε μας μήνυμα' : 'Send us a message'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">{lang === 'el' ? 'Όνομα' : 'Name'}</label>
                <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">{lang === 'el' ? 'Μήνυμα' : 'Message'}</label>
                <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"></textarea>
              </div>

              {/* Honeypot field (hidden from all users including screen readers) */}
              <div className="hidden" aria-hidden="true" tabIndex={-1}>
                 <input name="website_url" type="text" autoComplete="off" />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className={`w-full text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-200 ${
                  status === 'loading' ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {status === 'loading' ? (lang === 'el' ? 'Αποστολή...' : 'Sending...') : 
                 status === 'success' ? (lang === 'el' ? 'Στάλθηκε!' : 'Sent!') :
                 status === 'error' ? (lang === 'el' ? 'Σφάλμα!' : 'Error!') :
                 (lang === 'el' ? 'Αποστολή' : 'Send Message')}
              </button>
              {status === 'success' && (
                <p className="text-center text-sm text-green-600 font-semibold">
                  {lang === 'el' ? 'Το μήνυμά σας στάλθηκε!' : 'Message sent successfully!'}
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-red-600 font-semibold">
                  {lang === 'el' ? 'Σφάλμα. Δοκιμάστε ξανά.' : 'Error. Please try again.'}
                </p>
              )}
            </form>
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
