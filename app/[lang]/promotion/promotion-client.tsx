"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../../components/site-header";
import { useLocale } from "../../../lib/useLocale";

const t = {
  title: {
    en: "Reach travelers already planning their Greece trip",
    el: "Προσέγγισε ταξιδιώτες που ήδη οργανώνουν το ταξίδι τους στην Ελλάδα",
  },
  subtitle: {
    en: "Connect your hotel, restaurant or tour with thousands of visitors who are actively researching Greece — at the exact moment they decide where to stay, eat and explore.",
    el: "Σύνδεσε το ξενοδοχείο, το εστιατόριο ή την εκδρομή σου με χιλιάδες επισκέπτες που ερευνούν ενεργά για την Ελλάδα — τη στιγμή ακριβώς που αποφασίζουν πού θα μείνουν, θα φάνε και θα εξερευνήσουν.",
  },
  stat1_num: { en: "100%", el: "100%" },
  stat1_label: { en: "Targeted Greece audience", el: "Στοχευμένο κοινό Ελλάδας" },
  stat2_num: { en: "3", el: "3" },
  stat2_label: { en: "Promotion plans available", el: "Διαθέσιμα πακέτα προβολής" },
  stat3_num: { en: "Dofollow", el: "Dofollow" },
  stat3_label: { en: "SEO backlinks included", el: "SEO backlinks περιλαμβάνονται" },
  pkg_eyebrow: { en: "Promotion packages", el: "Πακέτα προβολής" },
  pkg_title: { en: "Choose the plan that fits your business", el: "Επίλεξε το πακέτο που ταιριάζει στην επιχείρησή σου" },
  vat_note: { en: "All prices exclude VAT 24% — invoiced upon registration", el: "Όλες οι τιμές δεν συμπεριλαμβάνουν ΦΠΑ 24% — τιμολόγηση κατά την εγγραφή" },
  pkg1_tier: { en: "Plan 1", el: "Πακέτο 1" },
  pkg1_name: { en: "Starter", el: "Starter" },
  pkg1_price: { en: "€99", el: "€99" },
  pkg1_period: { en: "per year, net of VAT", el: "ανά έτος, καθαρά ΦΠΑ" },
  pkg1_feat1_title: { en: "Business listing page", el: "Σελίδα καταχώρισης" },
  pkg1_feat1_desc: { en: "Your business name, photos and a Google Maps pin — a clean, indexed page on GoGreeceNow.", el: "Το όνομα, φωτογραφίες και pin Google Maps — μια καθαρή, indexed σελίδα στο GoGreeceNow." },
  pkg1_feat2_title: { en: "Direct link to your website", el: "Απευθείας σύνδεσμος" },
  pkg1_feat2_desc: { en: "A clickable link that sends visitors straight to your own website.", el: "Σύνδεσμος που οδηγεί τους επισκέπτες απευθείας στην ιστοσελίδα σου." },
  pkg1_feat3_title: { en: "Placement in destination guide", el: "Τοποθέτηση σε οδηγό προορισμού" },
  pkg1_feat3_desc: { en: "Visibility on the relevant destination page where travelers browse options.", el: "Ορατότητα στη σχετική σελίδα προορισμού όπου οι ταξιδιώτες αναζητούν επιλογές." },
  pkg2_tier: { en: "Plan 2", el: "Πακέτο 2" },
  pkg2_name: { en: "Essential", el: "Essential" },
  pkg2_badge: { en: "Most popular", el: "Δημοφιλέστερο" },
  pkg2_price: { en: "€169", el: "€169" },
  pkg2_period: { en: "per year, net of VAT", el: "ανά έτος, καθαρά ΦΠΑ" },
  pkg2_feat1_title: { en: "Everything in Starter", el: "Όλα όσα έχει το Starter" },
  pkg2_feat1_desc: { en: "Full listing page, direct link and destination placement included.", el: "Πλήρης σελίδα καταχώρισης, σύνδεσμος και τοποθέτηση σε προορισμό." },
  pkg2_feat2_title: { en: "Featured in 1–2 travel guides", el: "Προβολή σε 1–2 ταξιδιωτικούς οδηγούς" },
  pkg2_feat2_desc: { en: "Your business is mentioned inside editorial guides which rank on Google and attract high-intent readers.", el: "Η επιχείρησή σου εμφανίζεται σε editorial οδηγούς που έχουν υψηλή κατάταξη στο Google." },
  pkg2_feat3_title: { en: "Dofollow backlink", el: "Dofollow backlink" },
  pkg2_feat3_desc: { en: "A real SEO backlink from an established travel domain.", el: "Πραγματικό SEO backlink από established travel domain." },
  pkg2_feat4_title: { en: "Logo on destination page", el: "Logo στη σελίδα προορισμού" },
  pkg2_feat4_desc: { en: "Your brand mark appears visually on the relevant location page.", el: "Το brand σου εμφανίζεται οπτικά στη σχετική σελίδα προορισμού." },
  pkg3_tier: { en: "Plan 3", el: "Πακέτο 3" },
  pkg3_name: { en: "Featured", el: "Featured" },
  pkg3_price: { en: "€249", el: "€249" },
  pkg3_period: { en: "per year, net of VAT", el: "ανά έτος, καθαρά ΦΠΑ" },
  pkg3_feat1_title: { en: "Everything in Essential", el: "Όλα όσα έχει το Essential" },
  pkg3_feat1_desc: { en: "Full listing, dofollow backlink, logo and guide placement all included.", el: "Πλήρης καταχώριση, dofollow backlink, logo και τοποθέτηση σε οδηγούς." },
  pkg3_feat2_title: { en: "Top placement in category", el: "Κορυφαία τοποθέτηση" },
  pkg3_feat2_desc: { en: "Your listing appears first within its section — ahead of Starter and Essential listings.", el: "Η καταχώρισή σου εμφανίζεται πρώτη — μπροστά από Starter και Essential." },
  pkg3_feat3_title: { en: "Editorial recommendation (50 words)", el: "Σύσταση από τη σύνταξη (50 λέξεις)" },
  pkg3_feat3_desc: { en: "A short written recommendation by the GoGreeceNow editorial team next to your listing.", el: "Σύντομη σύσταση από τη συντακτική ομάδα του GoGreeceNow δίπλα στην καταχώρισή σου." },
  pkg3_feat4_title: { en: "Placement in 3+ travel guides", el: "Τοποθέτηση σε 3+ οδηγούς" },
  pkg3_feat4_desc: { en: "Maximum exposure across multiple guides — reaching travelers at every planning stage.", el: "Μέγιστη κάλυψη σε πολλαπλούς οδηγούς — προσεγγίζοντας ταξιδιώτες σε κάθε στάδιο." },
  pkg_vat_footnote: { en: "All prices are net of VAT. Greek VAT (ΦΠΑ) at 24% is added at invoicing. Annual subscription, renewable each year.", el: "Όλες οι τιμές είναι καθαρές ΦΠΑ. Το ΦΠΑ 24% προστίθεται στην τιμολόγηση. Ετήσια συνδρομή." },
  why_eyebrow: { en: "Why GoGreeceNow", el: "Γιατί GoGreeceNow" },
  why_title: { en: "What makes this different from other directories", el: "Τι το κάνει διαφορετικό από άλλους καταλόγους" },
  why_sub: { en: "Most listing platforms sell volume. We sell relevance — the right traveler, at the right moment, already reading about your destination.", el: "Οι περισσότερες πλατφόρμες πουλούν όγκο. Εμείς πουλάμε συνάφεια — τον σωστό ταξιδιώτη, τη σωστή στιγμή." },
  why1_title: { en: "Intent-led audience", el: "Κοινό με πρόθεση" },
  why1_desc: { en: "Every visitor is actively planning a Greece trip. They are not scrolling social media — they are researching where to stay and what to do. Your placement is visible at the decision-making stage.", el: "Κάθε επισκέπτης σχεδιάζει ενεργά ταξίδι στην Ελλάδα. Η τοποθέτησή σου είναι ορατή στο στάδιο λήψης αποφάσεων." },
  why2_title: { en: "Real SEO value", el: "Πραγματική αξία SEO" },
  why2_desc: { en: "Dofollow backlinks from travel content sites are among the most valuable links you can build. This is not a directory badge — it is a Google-recognised trust signal.", el: "Τα dofollow backlinks από ταξιδιωτικά sites είναι από τα πιο πολύτιμα. Δεν είναι απλό directory badge — είναι σήμα εμπιστοσύνης για το Google." },
  why3_title: { en: "Inside the content travelers read", el: "Μέσα στο περιεχόμενο που διαβάζουν" },
  why3_desc: { en: "Your business appears within editorial guides that travelers read during the planning phase — not on a generic listing page. Placement is contextual and tied to the destination they are researching.", el: "Η επιχείρησή σου εμφανίζεται σε editorial οδηγούς που διαβάζουν οι ταξιδιώτες — όχι σε γενική σελίδα καταλόγου." },
  who_eyebrow: { en: "Who we work with", el: "Με ποιους συνεργαζόμαστε" },
  who_title: { en: "Promotion for all Greece travel businesses", el: "Προβολή για όλες τις τουριστικές επιχειρήσεις" },
  who_hotels: { en: "Hotels & Villas", el: "Ξενοδοχεία & Βίλες" },
  who_hotels_sub: { en: "Boutique hotels, resort properties, holiday villas, studios", el: "Boutique ξενοδοχεία, resorts, εξοχικές βίλες, studios" },
  who_tours: { en: "Tours & Experiences", el: "Εκδρομές & Εμπειρίες" },
  who_tours_sub: { en: "Boat trips, day tours, sailing, local experiences", el: "Κρουαζιέρες, ημερήσιες εκδρομές, ιστιοπλοΐα, τοπικές εμπειρίες" },
  who_food: { en: "Restaurants & Bars", el: "Εστιατόρια & Μπαρ" },
  who_food_sub: { en: "Tavernas, seafood restaurants, wine bars, beach bars", el: "Ταβέρνες, ψαροταβέρνες, wine bars, beach bars" },
  faq_eyebrow: { en: "FAQ", el: "Συχνές Ερωτήσεις" },
  faq_title: { en: "Common questions", el: "Συχνές ερωτήσεις" },
  faq1_q: { en: "What exactly is a dofollow backlink and why does it matter?", el: "Τι είναι ακριβώς ένα dofollow backlink και γιατί έχει σημασία;" },
  faq1_a: { en: "A dofollow backlink is a hyperlink that passes SEO value from our domain to yours. Search engines like Google treat it as an endorsement — the more reputable the linking site, the more it improves your own ranking in search results. An established travel content site linking to your hotel or restaurant page is a genuine ranking signal that you cannot easily replicate through your own website alone.", el: "Ένα dofollow backlink είναι ένας υπερσύνδεσμος που μεταφέρει SEO αξία από τον δικό μας domain στον δικό σου. Οι μηχανές αναζήτησης το θεωρούν ένδειξη εμπιστοσύνης." },
  faq2_q: { en: "Can I upgrade from Starter to Essential later?", el: "Μπορώ να αναβαθμίσω από Starter σε Essential αργότερα;" },
  faq2_a: { en: "Yes. You can start with Starter and upgrade to Essential or Featured at any point. The difference in annual cost is invoiced pro-rata from the upgrade date.", el: "Ναι. Μπορείς να ξεκινήσεις με Starter και να αναβαθμίσεις σε Essential ή Featured οποιαδήποτε στιγμή." },
  faq3_q: { en: "Which travel guides will my business appear in?", el: "Σε ποιους ταξιδιωτικούς οδηγούς θα εμφανιστεί η επιχείρησή μου;" },
  faq3_a: { en: "The guides are matched to your business type and location. A hotel in Crete would typically appear in guides such as Best Hotels in Crete for Families, Family Travel in Greece or the Crete destination guide. A tour operator might appear in Getting Around Greece or relevant island guides. We agree on the specific placements before activation.", el: "Οι οδηγοί αντιστοιχίζονται με τον τύπο και την τοποθεσία της επιχείρησής σου. Ένα ξενοδοχείο στην Κρήτη θα εμφανιζόταν σε οδηγούς όπως Best Hotels in Crete for Families." },
  faq4_q: { en: "Is GoGreeceNow right for a small business?", el: "Είναι το GoGreeceNow κατάλληλο για μικρές επιχειρήσεις;" },
  faq4_a: { en: "Yes — particularly the Essential plan. The flat annual fee is designed to be accessible to small family-run hotels, tavernas and independent tour operators who cannot justify the commission structures of large OTAs. You get the same SEO and editorial visibility as larger properties, without a percentage of every booking going to a platform.", el: "Ναι — ειδικά το πακέτο Essential. Η σταθερή ετήσια χρέωση είναι σχεδιασμένη για μικρές οικογενειακές επιχειρήσεις." },
  faq5_q: { en: "How is VAT handled?", el: "Πώς χειρίζεται ο ΦΠΑ;" },
  faq5_a: { en: "All published prices are net of VAT. Greek VAT (ΦΠΑ) at 24% is applied at invoicing. Businesses registered for VAT in Greece can reclaim it through their standard VAT return. The invoice is issued annually upon subscription.", el: "Όλες οι δημοσιευμένες τιμές είναι καθαρές ΦΠΑ. Το ΦΠΑ 24% προστίθεται στην τιμολόγηση." },
  faq6_q: { en: "How long does it take to go live?", el: "Πόσο καιρό χρειάζεται για να ενεργοποιηθεί;" },
  faq6_a: { en: "Typically 5–7 working days from receipt of your business details and materials (photos, description, website URL). Featured plan editorial text is prepared within 10 working days.", el: "Συνήθως 5–7 εργάσιμες ημέρες από την παραλαβή των στοιχείων σου. Το κείμενο του Featured ολοκληρώνεται εντός 10 εργάσιμων ημερών." },
  cta_title: { en: "Ready to reach your next guests?", el: "Έτοιμος να προσεγγίσεις τους επόμενους επισκέπτες σου;" },
  cta_text: { en: "Contact us to confirm your plan and get your business listed on GoGreeceNow. Response within one working day.", el: "Επικοινώνησε μαζί μας για να επιβεβαιώσεις το πακέτο σου. Απάντηση εντός μίας εργάσιμης ημέρας." },
  cta_button: { en: "Contact us to get started", el: "Επικοινώνησε μαζί μας" },
  contact_modal_title: { en: "Send us a message", el: "Στείλτε μας μήνυμα" },
  contact_name: { en: "Business Name", el: "Όνομα Επιχείρησης" },
  contact_email: { en: "Email", el: "Email" },
  contact_message: { en: "Message", el: "Μήνυμα" },
  contact_send: { en: "Send", el: "Αποστολή" },
  contact_sending: { en: "Sending...", el: "Αποστολή..." },
  contact_sent: { en: "Sent!", el: "Στάλθηκε!" },
  contact_error: { en: "Error!", el: "Σφάλμα!" },
  contact_success_msg: { en: "Your message has been sent successfully!", el: "Το μήνυμά σας στάλθηκε επιτυχώς!" },
  contact_error_msg: { en: "An error occurred. Please try again.", el: "Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά." },
  footer_text: { en: "GoGreeceNow is a travel guide covering destinations, hotels, tours, food and practical travel information for Greece.", el: "Το GoGreeceNow είναι ένας ταξιδιωτικός οδηγός που καλύπτει προορισμούς, ξενοδοχεία, εκδρομές, φαγητό και πρακτικές πληροφορίες για την Ελλάδα." },
  footer_explore: { en: "Explore", el: "Εξερεύνηση" },
  footer_top: { en: "Top Destinations", el: "Κορυφαίοι Προορισμοί" },
  footer_company: { en: "Company", el: "Εταιρεία" },
  footer_about: { en: "About", el: "Σχετικά" },
  footer_contact: { en: "Contact", el: "Επικοινωνία" },
  footer_privacy: { en: "Privacy Policy", el: "Πολιτική Απορρήτου" },
  footer_sitemap: { en: "Sitemap", el: "Sitemap" },
  footer_credit: { en: "Website Design 2026 by Focus AI", el: "Κατασκευή Ιστοσελίδας 2026 By Focus AI" },
};

export default function PromotionClient() {
  const { lang, withLang } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      website_url: formData.get("website_url") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const faqs = [
    { q: t.faq1_q, a: t.faq1_a },
    { q: t.faq2_q, a: t.faq2_a },
    { q: t.faq3_q, a: t.faq3_a },
    { q: t.faq4_q, a: t.faq4_a },
    { q: t.faq5_q, a: t.faq5_a },
    { q: t.faq6_q, a: t.faq6_a },
  ];

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1a1a2e] py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(29,111,232,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block text-xs font-medium tracking-[0.1em] uppercase text-white/50 mb-5">
            GoGreeceNow — Business Promotion
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-white mb-5 tracking-tight">
            {t.title[lang]}
          </h1>
          <p className="text-base sm:text-lg text-white/65 max-w-[540px] mx-auto mb-8 font-light leading-relaxed">
            {t.subtitle[lang]}
          </p>
          <div className="flex justify-center gap-6 sm:gap-10 flex-wrap mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <span className="font-serif text-2xl sm:text-3xl text-white block">{t.stat1_num[lang]}</span>
              <span className="text-xs sm:text-sm text-white/45 uppercase tracking-wider">{t.stat1_label[lang]}</span>
            </div>
            <div className="text-center">
              <span className="font-serif text-2xl sm:text-3xl text-white block">{t.stat2_num[lang]}</span>
              <span className="text-xs sm:text-sm text-white/45 uppercase tracking-wider">{t.stat2_label[lang]}</span>
            </div>
            <div className="text-center">
              <span className="font-serif text-2xl sm:text-3xl text-white block">{t.stat3_num[lang]}</span>
              <span className="text-xs sm:text-sm text-white/45 uppercase tracking-wider">{t.stat3_label[lang]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-medium tracking-[0.1em] uppercase text-[#1d6fe8] mb-2">{t.pkg_eyebrow[lang]}</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a2e] tracking-tight">{t.pkg_title[lang]}</h2>
            <span className="inline-block bg-[#e8f1fd] text-[#1d6fe8] text-xs font-medium px-3 py-1.5 rounded-full mt-3">{t.vat_note[lang]}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {/* STARTER */}
            <div className="bg-white border border-[#e2e6f0] rounded-xl p-7 flex flex-col relative">
              <div className="text-xs font-medium tracking-wider uppercase text-[#8888aa] mb-2">{t.pkg1_tier[lang]}</div>
              <div className="font-serif text-2xl font-normal text-[#1a1a2e] mb-5">{t.pkg1_name[lang]}</div>
              <div className="pb-5 mb-5 border-b border-[#e2e6f0]">
                <div className="text-4xl font-medium text-[#1a1a2e] tracking-tight">{t.pkg1_price[lang]}</div>
                <div className="text-sm text-[#8888aa] mt-1">{t.pkg1_period[lang]}</div>
              </div>
              <ul className="flex flex-col gap-3 mb-6 flex-1">
                {[
                  { t: t.pkg1_feat1_title, d: t.pkg1_feat1_desc },
                  { t: t.pkg1_feat2_title, d: t.pkg1_feat2_desc },
                  { t: t.pkg1_feat3_title, d: t.pkg1_feat3_desc },
                ].map((f, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[#4a4a6a]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#e6f5ef] flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 10" className="w-2.5 h-2.5" style={{ stroke: "#0a7c55", strokeWidth: 2.5, fill: "none" }}><polyline points="1,5 4,8 11,1"/></svg>
                    </span>
                    <span><span className="font-medium text-[#1a1a2e] block text-sm">{f.t[lang]}</span><span className="text-xs text-[#8888aa] block mt-0.5">{f.d[lang]}</span></span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="block w-full text-center py-3 rounded-lg text-sm font-medium border border-[#e2e6f0] text-[#1a1a2e] hover:border-[#1d6fe8] hover:text-[#1d6fe8] transition-all">
                Get started
              </button>
            </div>

            {/* ESSENTIAL (featured) */}
            <div className="bg-white border-2 border-[#1d6fe8] rounded-xl p-7 flex flex-col relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1d6fe8] text-white text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap">
                {t.pkg2_badge[lang]}
              </div>
              <div className="text-xs font-medium tracking-wider uppercase text-[#8888aa] mb-2">{t.pkg2_tier[lang]}</div>
              <div className="font-serif text-2xl font-normal text-[#1a1a2e] mb-5">{t.pkg2_name[lang]}</div>
              <div className="pb-5 mb-5 border-b border-[#e2e6f0]">
                <div className="text-4xl font-medium text-[#1a1a2e] tracking-tight">{t.pkg2_price[lang]}</div>
                <div className="text-sm text-[#8888aa] mt-1">{t.pkg2_period[lang]}</div>
              </div>
              <ul className="flex flex-col gap-3 mb-6 flex-1">
                {[
                  { t: t.pkg2_feat1_title, d: t.pkg2_feat1_desc },
                  { t: t.pkg2_feat2_title, d: t.pkg2_feat2_desc },
                  { t: t.pkg2_feat3_title, d: t.pkg2_feat3_desc },
                  { t: t.pkg2_feat4_title, d: t.pkg2_feat4_desc },
                ].map((f, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[#4a4a6a]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#e6f5ef] flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 10" className="w-2.5 h-2.5" style={{ stroke: "#0a7c55", strokeWidth: 2.5, fill: "none" }}><polyline points="1,5 4,8 11,1"/></svg>
                    </span>
                    <span><span className="font-medium text-[#1a1a2e] block text-sm">{f.t[lang]}</span><span className="text-xs text-[#8888aa] block mt-0.5">{f.d[lang]}</span></span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="block w-full text-center py-3 rounded-lg text-sm font-medium bg-[#1d6fe8] text-white hover:bg-[#1560d0] transition-all">
                Get started
              </button>
            </div>

            {/* FEATURED */}
            <div className="bg-white border border-[#e2e6f0] rounded-xl p-7 flex flex-col relative">
              <div className="text-xs font-medium tracking-wider uppercase text-[#8888aa] mb-2">{t.pkg3_tier[lang]}</div>
              <div className="font-serif text-2xl font-normal text-[#1a1a2e] mb-5">{t.pkg3_name[lang]}</div>
              <div className="pb-5 mb-5 border-b border-[#e2e6f0]">
                <div className="text-4xl font-medium text-[#1a1a2e] tracking-tight">{t.pkg3_price[lang]}</div>
                <div className="text-sm text-[#8888aa] mt-1">{t.pkg3_period[lang]}</div>
              </div>
              <ul className="flex flex-col gap-3 mb-6 flex-1">
                {[
                  { t: t.pkg3_feat1_title, d: t.pkg3_feat1_desc },
                  { t: t.pkg3_feat2_title, d: t.pkg3_feat2_desc },
                  { t: t.pkg3_feat3_title, d: t.pkg3_feat3_desc },
                  { t: t.pkg3_feat4_title, d: t.pkg3_feat4_desc },
                ].map((f, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[#4a4a6a]">
                    <span className="w-[18px] h-[18px] rounded-full bg-[#e6f5ef] flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 10" className="w-2.5 h-2.5" style={{ stroke: "#0a7c55", strokeWidth: 2.5, fill: "none" }}><polyline points="1,5 4,8 11,1"/></svg>
                    </span>
                    <span><span className="font-medium text-[#1a1a2e] block text-sm">{f.t[lang]}</span><span className="text-xs text-[#8888aa] block mt-0.5">{f.d[lang]}</span></span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="block w-full text-center py-3 rounded-lg text-sm font-medium border border-[#e2e6f0] text-[#1a1a2e] hover:border-[#1d6fe8] hover:text-[#1d6fe8] transition-all">
                Get started
              </button>
            </div>
          </div>

          <p className="text-center mt-6 text-xs text-[#8888aa]">{t.pkg_vat_footnote[lang]}</p>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white py-16 sm:py-20 px-6">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-xs font-medium tracking-[0.1em] uppercase text-[#1d6fe8] mb-2">{t.why_eyebrow[lang]}</div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a2e] tracking-tight mb-3">{t.why_title[lang]}</h2>
          <p className="text-sm sm:text-base text-[#4a4a6a] max-w-[560px] font-light leading-relaxed">{t.why_sub[lang]}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: "🎯", title: t.why1_title, desc: t.why1_desc },
              { icon: "🔗", title: t.why2_title, desc: t.why2_desc },
              { icon: "📍", title: t.why3_title, desc: t.why3_desc },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-medium text-sm text-[#1a1a2e] mb-1.5">{item.title[lang]}</div>
                <p className="text-sm text-[#4a4a6a] font-light leading-relaxed">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-xs font-medium tracking-[0.1em] uppercase text-[#1d6fe8] mb-2">{t.who_eyebrow[lang]}</div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a2e] tracking-tight mb-3">{t.who_title[lang]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "🏨", title: t.who_hotels, sub: t.who_hotels_sub },
              { icon: "⚓", title: t.who_tours, sub: t.who_tours_sub },
              { icon: "🍷", title: t.who_food, sub: t.who_food_sub },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#e2e6f0] rounded-lg p-5 flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-medium text-sm text-[#1a1a2e]">{item.title[lang]}</div>
                  <div className="text-xs text-[#8888aa] mt-0.5">{item.sub[lang]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-2">
            <div className="text-xs font-medium tracking-[0.1em] uppercase text-[#1d6fe8]">{t.faq_eyebrow[lang]}</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1a2e] tracking-tight mt-2">{t.faq_title[lang]}</h2>
          </div>
          <div className="mt-8 flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#e2e6f0] py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center gap-4 text-left font-medium text-sm text-[#1a1a2e]"
                >
                  {faq.q[lang]}
                  <span className={`text-[#8888aa] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}>↓</span>
                </button>
                <div
                  className={`text-sm text-[#4a4a6a] font-light leading-relaxed overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-80 pt-3" : "max-h-0"
                  }`}
                >
                  {faq.a[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d6fe8] py-16 sm:py-20 px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">{t.cta_title[lang]}</h2>
        <p className="text-sm sm:text-base text-white/70 max-w-[460px] mx-auto mb-8 font-light">{t.cta_text[lang]}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-white text-[#1d6fe8] text-sm font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-all"
        >
          {t.cta_button[lang]}
        </button>
      </section>

      {/* FOOTER */}
      {/* CONTACT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{t.contact_modal_title[lang]}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-900 transition-colors text-3xl leading-none"
                >
                  &times;
                </button>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">{t.contact_name[lang]}</label>
                  <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">{t.contact_email[lang]}</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">{t.contact_message[lang]}</label>
                  <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50"></textarea>
                </div>
                <div className="hidden" aria-hidden="true" tabIndex={-1}>
                  <input name="website_url" type="text" autoComplete="off" />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full text-white font-bold py-4 rounded-xl transition-all mt-2 shadow-lg shadow-indigo-200 ${
                    status === "loading" ? "bg-indigo-400 cursor-not-allowed" : "bg-[#1d6fe8] hover:bg-[#1560d0]"
                  }`}
                >
                  {status === "loading" ? t.contact_sending[lang] : status === "success" ? t.contact_sent[lang] : status === "error" ? t.contact_error[lang] : t.contact_send[lang]}
                </button>
                {status === "success" && <p className="text-center text-sm text-green-600 mt-2 font-semibold">{t.contact_success_msg[lang]}</p>}
                {status === "error" && <p className="text-center text-sm text-red-600 mt-2 font-semibold">{t.contact_error_msg[lang]}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
