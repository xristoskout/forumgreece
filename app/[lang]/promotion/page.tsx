"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SiteHeader from "../../../components/site-header";

type Lang = "en" | "el";

export default function PromotionPage() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      website_url: formData.get('website_url') as string, // Honeypot
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };
  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";
  const t = {
    title: {
      en: "Personalized Business Promotion",
      el: "Προσωποποιημένη Προβολή Επιχειρήσεων"
    },
    subtitle: {
      en: "Connect with thousands of travelers planning their trip to Greece. Elevate your brand with targeted promotion tailored to your exact needs.",
      el: "Συνδέσου με χιλιάδες ταξιδιώτες που οργανώνουν το ταξίδι τους στην Ελλάδα. Αναβάθμισε το brand σου με στοχευμένη προβολή προσαρμοσμένη στις δικές σου ανάγκες."
    },
    services_eyebrow: {
      en: "Our Services",
      el: "Οι Υπηρεσίες Μας"
    },
    services_title: {
      en: "Why promote your business with us?",
      el: "Γιατί να προβάλεις την επιχείρησή σου σε εμάς;"
    },
    service1_title: {
      en: "Targeted Audience",
      el: "Στοχευμένο Κοινό"
    },
    service1_desc: {
      en: "Reach travelers who are actively looking for hotels, restaurants, and tours in Greece right when they are making decisions.",
      el: "Προσέγγισε ταξιδιώτες που αναζητούν ενεργά ξενοδοχεία, εστιατόρια και εκδρομές στην Ελλάδα τη στιγμή που παίρνουν αποφάσεις."
    },
    service2_title: {
      en: "Premium Placement",
      el: "Premium Τοποθέτηση"
    },
    service2_desc: {
      en: "Get featured across our top destination guides, travel hubs, and interactive tools for maximum visibility.",
      el: "Εμφανίσου στους κορυφαίους οδηγούς προορισμών, τα travel hubs και τα διαδραστικά εργαλεία μας για μέγιστη κάλυψη."
    },
    service3_title: {
      en: "Direct Bookings & SEO",
      el: "Απευθείας Κρατήσεις & SEO"
    },
    service3_desc: {
      en: "Redirect visitors straight to your website without commissions. Build strong domain authority and backlink opportunities.",
      el: "Η κίνηση πηγαίνει κατευθείαν στη σελίδα σου χωρίς προμήθειες. Χτίζεις δυνατό SEO και αποκτάς πολύτιμα backlinks."
    },
    audience_eyebrow: {
      en: "Who We Work With",
      el: "Με Ποιους Συνεργαζόμαστε"
    },
    audience_title: {
      en: "Promotion for all travel professionals",
      el: "Προβολή για επαγγελματίες του τουρισμού"
    },
    audience_hotels: {
      en: "Hotels & Villas",
      el: "Ξενοδοχεία & Βίλες"
    },
    audience_tours: {
      en: "Tours & Experiences",
      el: "Εκδρομές & Εμπειρίες"
    },
    audience_food: {
      en: "Restaurants & Bars",
      el: "Εστιατόρια & Μπαρ"
    },
    cta_title: {
      en: "Ready to grow your business?",
      el: "Έτοιμοι να αναπτύξετε την επιχείρησή σας;"
    },
    cta_text: {
      en: "Contact us today for a custom promotion plan.",
      el: "Επικοινωνήστε μαζί μας σήμερα για να οργανώσουμε ένα πλάνο προβολής."
    },
    cta_button: {
      en: "Contact us",
      el: "Επικοινωνία"
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-32 sm:py-40">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
           {/* If user has hero images, we use a placeholder or known image, fallback to gradients */}
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900"></div>
           <Image src="/images/hero/greece-main.webp" alt="Greece background for business promotion" fill className="object-cover opacity-50" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6 backdrop-blur-md">
            GoGreeceNow Business
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-xl">
            {t.title[lang]}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-200 drop-shadow-md leading-relaxed font-light">
            {t.subtitle[lang]}
          </p>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">{t.services_eyebrow[lang]}</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t.services_title[lang]}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <dt className="text-xl font-bold leading-7 text-slate-900 flex flex-col items-center gap-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-4xl text-indigo-600 shadow-inner">🎯</div>
                  {t.service1_title[lang]}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 font-medium">
                  <p className="flex-auto">{t.service1_desc[lang]}</p>
                </dd>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <dt className="text-xl font-bold leading-7 text-slate-900 flex flex-col items-center gap-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-4xl text-indigo-600 shadow-inner">⭐</div>
                  {t.service2_title[lang]}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 font-medium">
                  <p className="flex-auto">{t.service2_desc[lang]}</p>
                </dd>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <dt className="text-xl font-bold leading-7 text-slate-900 flex flex-col items-center gap-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-4xl text-indigo-600 shadow-inner">🚀</div>
                  {t.service3_title[lang]}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 font-medium">
                  <p className="flex-auto">{t.service3_desc[lang]}</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Categories we serve */}
      <section className="bg-slate-50 py-24 sm:py-32 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-2">{t.audience_eyebrow[lang]}</h2>
            <p className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-12">
              {t.audience_title[lang]}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <span className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-lg font-semibold text-slate-700">🏨 {t.audience_hotels[lang]}</span>
               <span className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-lg font-semibold text-slate-700">⚓ {t.audience_tours[lang]}</span>
               <span className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-lg font-semibold text-slate-700">🍷 {t.audience_food[lang]}</span>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-indigo-700">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t.cta_title[lang]}
            </h2>
            <p className="mt-3 text-lg font-light text-indigo-100 max-w-xl">
               {t.cta_text[lang]}
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-white px-10 py-5 text-lg font-bold text-indigo-600 shadow-2xl hover:bg-slate-50 hover:scale-105 transition-all"
            >
              {t.cta_button[lang]}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
           <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative">
              <div className="p-8">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {lang === 'el' ? 'Στείλτε μας το μήνυμά σας' : 'Send us a message'}
                    </h3>
                    <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors text-3xl leading-none">&times;</button>
                 </div>
                 <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">{lang === 'el' ? 'Όνομα Επιχείρησης' : 'Business Name'}</label>
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
                      className={`w-full text-white font-bold py-4 rounded-xl transition-all mt-2 shadow-lg shadow-indigo-200 ${
                        status === 'loading' ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                    >
                      {status === 'loading' ? (lang === 'el' ? 'Αποστολή...' : 'Sending...') : 
                       status === 'success' ? (lang === 'el' ? 'Στάλθηκε!' : 'Sent!') :
                       status === 'error' ? (lang === 'el' ? 'Σφάλμα!' : 'Error!') :
                       (lang === 'el' ? 'Αποστολή' : 'Send')}
                    </button>
                    {status === 'success' && (
                      <p className="text-center text-sm text-green-600 mt-2 font-semibold">
                        {lang === 'el' ? 'Το μήνυμά σας στάλθηκε επιτυχώς!' : 'Your message has been sent successfully!'}
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="text-center text-sm text-red-600 mt-2 font-semibold">
                        {lang === 'el' ? 'Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά.' : 'An error occurred. Please try again.'}
                      </p>
                    )}
                 </form>
              </div>
           </div>
        </div>
      )}
    </main>
  );
}
