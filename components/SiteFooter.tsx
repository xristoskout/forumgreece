import Link from "next/link";
import { Lang, withLang } from "../lib/locale";

const footerText: Record<Lang, string> = {
  en: "GoGreeceNow — destinations, travel info, hotels, tours, food and local communities.",
  el: "GoGreeceNow — προορισμοί, ταξιδιωτικές πληροφορίες, ξενοδοχεία, εκδρομές, φαγητό και τοπικές κοινότητες.",
};

const footerAbout: Record<Lang, string> = {
  en: "About",
  el: "Σχετικά",
};

const footerContact: Record<Lang, string> = {
  en: "Contact",
  el: "Επικοινωνία",
};

const footerPrivacy: Record<Lang, string> = {
  en: "Privacy",
  el: "Απόρρητο",
};

export default function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-slate-200 bg-white backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-sm text-slate-600 leading-relaxed">{footerText[lang]}</div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-3">
              {lang === "en" ? "Explore" : "Εξερεύνηση"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={withLang("/destinations", lang)} className="text-slate-600 hover:text-slate-900">Destinations</Link></li>
              <li><Link href={withLang("/travel-info", lang)} className="text-slate-600 hover:text-slate-900">Travel Info</Link></li>
              <li><Link href={withLang("/hotels", lang)} className="text-slate-600 hover:text-slate-900">Hotels</Link></li>
              <li><Link href={withLang("/tours/all", lang)} className="text-slate-600 hover:text-slate-900">Tours</Link></li>
                <li><Link href={withLang("/collections/greece-food-and-drink", lang)} className="text-slate-600 hover:text-slate-900">Eat & Drink</Link></li>
                <li><Link href={withLang("/blog", lang)} className="text-slate-600 hover:text-slate-900">Blog</Link></li>
              </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-3">
              {lang === "en" ? "Top Destinations" : "Κορυφαίοι Προορισμοί"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={withLang("/destinations/santorini", lang)} className="text-slate-600 hover:text-slate-900">Santorini</Link></li>
              <li><Link href={withLang("/destinations/mykonos", lang)} className="text-slate-600 hover:text-slate-900">Mykonos</Link></li>
              <li><Link href={withLang("/destinations/crete", lang)} className="text-slate-600 hover:text-slate-900">Crete</Link></li>
              <li><Link href={withLang("/destinations/athens", lang)} className="text-slate-600 hover:text-slate-900">Athens</Link></li>
              <li><Link href={withLang("/destinations/kefalonia", lang)} className="text-slate-600 hover:text-slate-900">Kefalonia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-700 mb-3">
              {lang === "en" ? "Company" : "Εταιρεία"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={withLang("/about", lang)} className="text-slate-600 hover:text-slate-900">{footerAbout[lang]}</Link></li>
              <li><Link href={withLang("/contact", lang)} className="text-slate-600 hover:text-slate-900">{footerContact[lang]}</Link></li>
              <li><Link href={withLang("/privacy-policy", lang)} className="text-slate-600 hover:text-slate-900">{footerPrivacy[lang]}</Link></li>
              <li><Link href="/sitemap.xml" className="text-slate-600 hover:text-slate-900">Sitemap</Link></li>
              <li><Link href={withLang("/promotion", lang)} className="text-slate-600 hover:text-slate-900">{lang === "en" ? "Promotion" : "Προβολή"}</Link></li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61573209091459"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-[#1877F2] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 pt-5 pb-6 flex flex-col items-center gap-2">
        <a
          href="https://www.focusai.gr"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-bold tracking-widest transition-all"
        >
          <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-500">
            {lang === "en" ? "Website Design 2026 by Focus AI" : "Κατασκευή Ιστοσελίδας 2026 By Focus AI"}
          </span>
          <span className="text-indigo-400 group-hover:text-purple-500 transition-transform group-hover:translate-x-1">→</span>
        </a>
        <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em]">Premium Digital Experiences</p>
      </div>
    </footer>
  );
}
