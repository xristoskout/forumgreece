"use client";

import { usePathname } from 'next/navigation';
import SiteHeader from "../../../components/site-header";
import Link from 'next/link';

type Lang = "en" | "el";

export default function PrivacyPage() {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith("/el") ? "el" : "en";

  const t = {
    title: {
      en: "Privacy Policy",
      el: "Πολιτική Απορρήτου"
    },
    updated: {
      en: "Last updated: October 2026",
      el: "Τελευταία ενημέρωση: Οκτώβριος 2026"
    },
    intro: {
      en: "At GoGreeceNow, accessible from gogreecenow.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GoGreeceNow and how we use it.",
      el: "Στο GoGreeceNow, προσβάσιμο από το gogreecenow.com, μία από τις βασικές μας προτεραιότητες είναι το απόρρητο των επισκεπτών μας. Αυτό το έγγραφο Πολιτικής Απορρήτου περιέχει τύπους πληροφοριών που συλλέγονται και καταγράφονται από το GoGreeceNow και πώς τις χρησιμοποιούμε."
    },
    section1_title: {
      en: "Log Files",
      el: "Αρχεία Καταγραφής (Log Files)"
    },
    section1_text: {
      en: "GoGreeceNow follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.",
      el: "Το GoGreeceNow ακολουθεί μια τυπική διαδικασία χρήσης αρχείων καταγραφής (log files). Αυτά τα αρχεία καταγράφουν τους επισκέπτες όταν επισκέπτονται ιστότοπους. Οι πληροφορίες που συλλέγονται από τα αρχεία καταγραφής περιλαμβάνουν διευθύνσεις πρωτοκόλλου Διαδικτύου (IP), τύπο προγράμματος περιήγησης, πάροχο υπηρεσιών διαδικτύου (ISP), σφραγίδα ημερομηνίας/ώρας και πιθανόν τον αριθμό των κλικ. Δεν συνδέονται με προσωπικά αναγνωρίσιμες πληροφορίες."
    },
    section2_title: {
      en: "Cookies and Web Beacons",
      el: "Cookies και Web Beacons"
    },
    section2_text: {
      en: "Like any other website, GoGreeceNow uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
      el: "Όπως κάθε άλλος ιστότοπος, το GoGreeceNow χρησιμοποιεί «cookies». Αυτά τα cookies χρησιμοποιούνται για την αποθήκευση πληροφοριών, συμπεριλαμβανομένων των προτιμήσεων των επισκεπτών, και των σελίδων στον ιστότοπο που επισκέφτηκε ο επισκέπτης. Οι πληροφορίες χρησιμοποιούνται για τη βελτιστοποίηση της εμπειρίας των χρηστών προσαρμόζοντας το περιεχόμενο της ιστοσελίδας μας."
    },
    section3_title: {
      en: "Analytics",
      el: "Analytics (Αναλυτικά Στοιχεία)"
    },
    section3_text: {
      en: "We use third-party analytics services (like Google Analytics) to understand how visitors interact with our site. This tracking involves non-identifiable data used solely for improving our services and website layout.",
      el: "Χρησιμοποιούμε υπηρεσίες τρίτων (όπως τα Google Analytics) για να κατανοήσουμε πώς οι επισκέπτες αλληλεπιδρούν με τον ιστότοπό μας. Αυτή η παρακολούθηση περιλαμβάνει μη ταυτοποιήσιμα δεδομένα που χρησιμοποιούνται αποκλειστικά για τη βελτίωση των υπηρεσιών μας."
    },
    section4_title: {
      en: "Consent",
      el: "Συγκατάθεση"
    },
    section4_text: {
      en: "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.",
      el: "Χρησιμοποιώντας τον ιστότοπό μας, συναινείτε στην παρούσα Πολιτική Απορρήτου και αποδέχεστε τους Όρους και Προϋποθέσεις της."
    },
    contact_title: {
      en: "Contact Us",
      el: "Επικοινωνία"
    },
    contact_text: {
      en: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at contact@gogreecenow.com.",
      el: "Εάν έχετε περαιτέρω ερωτήσεις ή χρειάζεστε περισσότερες πληροφορίες σχετικά με την Πολιτική Απορρήτου μας, μη διστάσετε να επικοινωνήσετε μαζί μας στο contact@gogreecenow.com."
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md">
            {t.title[lang]}
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-400">
            {t.updated[lang]}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-600 mb-10">
            {t.intro[lang]}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">{t.section1_title[lang]}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t.section1_text[lang]}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">{t.section2_title[lang]}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t.section2_text[lang]}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">{t.section3_title[lang]}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t.section3_text[lang]}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">{t.section4_title[lang]}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t.section4_text[lang]}</p>

          <hr className="my-12 border-slate-200" />

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">{t.contact_title[lang]}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{t.contact_text[lang]}</p>
          
          <div className="mt-10">
            <Link href={lang === 'el' ? '/el' : '/en'} className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
              &larr; {lang === 'en' ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
