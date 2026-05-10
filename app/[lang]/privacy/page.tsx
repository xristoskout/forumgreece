import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/site-header";
import { SITE_URL, Lang, isLang } from "../../../lib/content";
import { withLang } from "../../../lib/locale";

const staticText = {
  title: {
    en: "Terms of Use & Privacy Policy",
    el: "Όροι Χρήσης & Πολιτική Απορρήτου",
  },
  updated: {
    en: "Last updated: April 2026",
    el: "Τελευταία ενημέρωση: Απρίλιος 2026",
  },
  users_heading: {
    en: "For Users",
    el: "Για τους Χρήστες",
  },
  businesses_heading: {
    en: "For Businesses",
    el: "Για τις Επιχειρήσεις",
  },
  back_home: {
    en: "Back to Home",
    el: "Επιστροφή στην Αρχική",
  },
};

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "en";
  const pageTitle = staticText.title[lang];
  const description =
    lang === "el"
      ? "Διαβάστε τους Όρους Χρήσης και την Πολιτική Απορρήτου του GoGreeceNow."
      : "Read the Terms of Use and Privacy Policy for GoGreeceNow.";

  const canonicalUrl = `${SITE_URL}/${lang}/privacy`;
  const enUrl = `${SITE_URL}/en/privacy`;
  const elUrl = `${SITE_URL}/el/privacy`;

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
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "en";
  const t = staticText;

  const sections_users = [
    {
      title: { en: "1 | GENERAL", el: "1 | ΓΕΝΙΚΑ" },
      text: {
        en: 'Welcome to the GoGreeceNow platform. Access to and use of the Website, products, and services available through this Website (hereinafter the "Services") are subject to the following terms and conditions (hereinafter "Terms of Use"). Using the Services implies unconditional acceptance of the Terms of Use, as they apply from time to time. The company reserves the right to change the Terms of Use at its discretion and without prior notice.\n\nAccess to GoGreeceNow is permitted on a temporary basis, and the company reserves the right to withdraw or amend the Services without notice. The company will not be liable if for any reason this Website is unavailable at any time or for any period.\n\nThe company makes every effort to ensure that the content of GoGreeceNow includes complete, accurate, clear, valid, informative, up-to-date, truthful, and non-misleading information. In no event is the company liable, committed or guaranteeing the safety and content. Users of GoGreeceNow accept the possibility of inability to control the entire content and services by the company.\n\nThe use of GoGreeceNow by any user is at their sole risk. The content does not constitute and cannot in any case be interpreted as a provision of advice, direct or indirect encouragement to users to take any action.',
        el: 'Καλώς ήρθατε στην πλατφόρμα GoGreeceNow. H πρόσβαση και η χρήση της Ιστοσελίδας, των προϊόντων και των υπηρεσιών που διατίθενται μέσω αυτής (εφεξής «Υπηρεσίες») υπόκεινται στους ακόλουθους όρους και προϋποθέσεις (εφεξής «Όροι Χρήσης»). Η χρήση των Υπηρεσιών, συνεπάγεται με την ανεπιφύλακτη αποδοχή των Όρων Χρήσης, όπως αυτοί ισχύουν κάθε φορά. Η εταιρία διατηρεί το δικαίωμα να αλλάξει τους Όρους Χρήσης ανάλογα με την κρίση της και χωρίς πρότερη ενημέρωση.\n\nΗ πρόσβαση στο GoGreeceNow επιτρέπεται κατά τη διάρκεια λειτουργίας του, όμως η εταιρία διατηρεί το δικαίωμα να διακόψει ή να αποσύρει τις Υπηρεσίες της, χωρίς προηγουμένη ενημέρωση. Η εταιρία δεν φέρει καμία ευθύνη σε περίπτωση που υπάρχει αδυναμία πρόσβασης στο σύνολο ή μέρος των προβαλλόμενων υπηρεσιών για οποιοδήποτε λόγο.\n\nΗ εταιρία καταβάλει κάθε δυνατή προσπάθεια προκειμένου να εξασφαλίσει ότι το περιεχόμενο του GoGreeceNow περιλαμβάνει πλήπρεις, ακριβείς, σαφείς, έγκυρες, κατατοπιστικές, επίκαιρες, αληθείς και μη παραπλανητικές πληροφορίες. Σε καμία περίπτωση δεν ευθύνεται, δεσμεύεται ή εγγυάται σχετικά με την ασφάλεια και το περιεχόμενο. Ως εκ τούτου, οι χρήστες του GoGreeceNow αποδέχονται την πιθανότητα αδυναμίας ελέγχου εκ μέρους της εταιρίας του συνόλου του περιεχομένου του και των υπηρεσιών του.\n\nΗ χρήση του GoGreeceNow από κάθε χρήστη γίνεται με δική του αποκλειστικά ευθύνη και το περιεχόμενό του δεν αποτελεί και δεν δύναται σε καμία περίπτωση να ερμηνευθεί ως παροχή συμβουλής, άμεσης ή έμμεσης προτροπής των χρηστών να προβούν σε οποιαδήποτε πράξη ή ενέργεια. Οι χρήστες είναι αποκλειστικά υπεύθυνοι για τον εξοπλισμό τους.',
      },
    },
    {
      title: { en: "2 | PRIVACY POLICY", el: "2 | ΠΡΟΣΤΑΣΙΑ ΠΡΟΣΩΠΙΚΩΝ ΔΕΔΟΜΕΝΩΝ" },
      text: {
        en: "The information or personal details you provide to us are processed in accordance with the Data Protection Policies. By using this website, you consent to the processing of such information and details and you declare that all information and details provided by you are true and accurate.",
        el: "Οι πληροφορίες ή τα προσωπικά στοιχεία που μας παρέχετε υπόκεινται σε επεξεργασία βάσει των Πολιτικών Προστασίας Δεδομένων. Με την χρήση της παρούσας ιστοσελίδας παρέχετε τη σύμφωνη γνώμη σας για την επεξεργασία των εν λόγω πληροφοριών και στοιχείων και δηλώνετε ότι όλες οι πληροφορίες και τα στοιχεία που μας παρέχετε είναι αληθή και ακριβή.",
      },
    },
    {
      title: { en: "3 | WEBSITE USE", el: "3 | ΧΡΗΣΗ ΙΣΤΟΣΕΛΙΔΑΣ" },
      text: {
        en: "By using GoGreeceNow and/or submitting an inquiry through it, you undertake:\n- To use the website only to inquire about our Services and make legitimate requests.\n- Not to make any false or fraudulent communication with malicious or offensive content. If we reasonably consider that such a communication has been made, we shall be entitled to inform the relevant authorities.\n- To provide us with your correct and accurate e-mail address and/or other contact details. You also agree that we may use this information to contact you if necessary.",
        el: "Με τη χρήση του GoGreeceNow ή/και την υποβολή παραγγελίας (ή ερωτημάτων) μέσω αυτής, αναλαμβάνετε:\n- Να χρησιμοποιήσετε την ιστοσελίδα μόνο για να ενημερωθείτε για τις Υπηρεσίες μας και να υποβάλετε θεμιτά ερωτήματα.\n- Να μην προβαίνετε σε ψευδή ή δόλια επικοινωνία με κακόβουλο ή προσβλητικό περιεχόμενο. Εάν θεωρήσουμε ευλόγως ότι έχει υποβληθεί τέτοια, έχουμε το δικαίωμα να ενημερώσουμε τις αρμόδιες αρχές.\n- Να μας παρέχετε με ορθότητα και ακρίβεια την διεύθυνση ηλεκτρονικού ταχυδρομείου σας (e-mail) ή/και λοιπά στοιχεία επικοινωνίας.\nΕπίσης αποδέχεστε ότι μπορούμε να χρησιμοποιήσουμε αυτές τις πληροφορίες για να επικοινωνήσουμε μαζί σας σε περίπτωση που αυτό κριθεί απαραίτητο.",
      },
    },
    {
      title: { en: "4 | INTELLECTUAL PROPERTY", el: "4 | ΔΙΚΑΙΩΜΑΤΑ ΠΝΕΥΜΑΤΙΚΗΣ ΚΑΙ ΒΙΟΜΗΧΑΝΙΚΗΣ ΙΔΙΟΚΤΗΣΙΑΣ – ΣΗΜΑΤΑ" },
      text: {
        en: "GoGreeceNow and its content (including all trademarks, patents, brand names, texts, images, graphics, designs, photographs, programs, data, software) is the intellectual and industrial property of the company.\nIt is strictly forbidden to copy, modify, distribute, resell, rent, republish, reproduce, transmit, store, print, create derivative work, or mislead the public about the actual provider of the content.\nProducts, services, brands, trademarks of third parties appearing on GoGreeceNow are their intellectual property, for which they bear the relevant responsibility.",
        el: "To GoGreeceNow και το περιεχόμενό του (στο οποίο συμπεριλαμβάνονται όλα τα εμπορικά σήματα, διακριτικά γνωρίσματα, ευρεσιτεχνίες, επωνυμίες, κείμενα, εικόνες, γραφικά, σχέδια, φωτογραφίες, κ.λπ.) αποτελεί πνευματική και βιομηχανική ιδιοκτησία της εταιρίας.\nΑπαγορεύεται ρητώς οποιασδήποτε μορφής αντιγραφή, τροποποίηση, παρέμβαση, μεταφορά, διανομή, μεταπώληση, αναδημοσίευση, αναπαραγωγή, ή παραπλάνηση του κοινού.\nΠροϊόντα, υπηρεσίες, επωνυμία ή εμπορικά σήματα τρίτων που εμφανίζονται στo GoGreeceNow, αποτελούν πνευματική και βιομηχανική ιδιοκτησία των τρίτων, οι οποίοι φέρουν και τη σχετική ευθύνη.",
      },
    },
    {
      title: { en: "5 | COMPANY LIABILITY", el: "5 | ΕΥΘΥΝΗ ΤΗΣ ΕΤΑΙΡΙΑΣ" },
      text: {
        en: "The company is not liable for any direct or indirect damage resulting from accessing GoGreeceNow and its use. The company does not bear any responsibility for damages and expenses arising from the use of GoGreeceNow or the inability to use it.\nThe services are provided 'as is'. The company does not guarantee that the content will meet user expectations. The company assumes no responsibility for any legal, civil or criminal claims related to the operation of GoGreeceNow.",
        el: 'Οποιεσδήποτε άμεσες, έμμεσες ή αποθετικές ζημιές προκύψουν από την πρόσβαση κάθε χρήστη στο GoGreeceNow ή την χρήση αυτού, δεν γεννούν ευθύνη της εταιρίας. Η εταιρία δεν φέρει ευθύνη για ζημίες και έξοδα τα οποία προκύπτουν σε σχέση με τη χρήση του GoGreeceNow ή την αδυναμία χρήσης του.\nOι υπηρεσίες παρέχονται "ως έχουν". Η εταιρία δεν εγγυάται ότι το περιεχόμενο θα ανταποκρίνεται στις απαιτήσεις των χρηστών. Η εταιρία δεν φέρει ευθύνη για αξιώσεις που σχετίζονται με το περιεχόμενο του ιστοτόπου (κριτικές και σχόλια).',
      },
    },
    {
      title: { en: "6 | APPLICABLE LAW", el: "6 | ΕΦΑΡΜΟΣΤΕΟ ΔΙΚΑΙΟ ΚΑΙ ΛΟΙΠΟΙ ΟΡΟΙ" },
      text: {
        en: "These terms and conditions are governed by Greek law. For any dispute arising from the use of GoGreeceNow, the courts of Athens are exclusively competent.",
        el: "Οι συγκεκριμένοι όροι και προϋποθέσεις διέπονται και ερμηνεύονται σύμφωνα με το ελληνικό δίκαιο. Για κάθε διαφορά που ανακύπτει από τη χρήση του GoGreeceNow, αρμοδιότητα έχουν τα δικαστήρια των Αθηνών.",
      },
    },
  ];

  const sections_businesses = [
    {
      title: { en: "1 | OBJECT", el: "1 | ΑΝΤΙΚΕΙΜΕΝΟ" },
      text: {
        en: "These Terms of Use govern the promotion and listing of businesses on the GoGreeceNow website. By submitting a registration request, the business fully accepts these terms.",
        el: "Οι παρόντες Όροι Χρήσης διέπουν την προβολή και καταχώρηση επιχειρήσεων στην ιστοσελίδα GoGreeceNow. Με την υποβολή αίτησης καταχώρησης, η εκάστοτε επιχείρηση αποδέχεται πλήρως και ανεπιφύλακτα τους παρόντες Όρους.",
      },
    },
    {
      title: { en: "2 | SUBSCRIPTION AND BUSINESS PROMOTION", el: "2 | ΕΤΗΣΙΑ ΣΥΝΔΡΟΜΗ ΚΑΙ ΠΡΟΒΟΛΗ" },
      text: {
        en: "The promotion of businesses on the Website requires the timely payment of the agreed subscription. In case of non-payment or delayed payment, the Company reserves the right to suspend or remove the listing.",
        el: "Η προβολή των διαφημιζόμενων Επιχειρήσεων στην Ιστοσελίδα, συμπεριλαμβανομένης της εμφάνισης λογοτύπων, προσφορών και λοιπού υλικού, πραγματοποιείται υπό την προϋπόθεση της έγκαιρης καταβολής της συμφωνηθείσας ετήσιας συνδρομής. Σε περίπτωση μη καταβολής, η Εταιρεία διατηρεί το δικαίωμα να αναστείλει ή αφαιρέσει την παρουσίαση της Επιχείρησης.",
      },
    },
    {
      title: { en: "3 | CONSENT TO USE INFORMATION AND MEDIA", el: "3 | ΣΥΝΑΙΝΕΣΗ ΣΤΗ ΧΡΗΣΗ ΣΤΟΙΧΕΙΩΝ & ΥΛΙΚΟΥ" },
      text: {
        en: "By submitting their details, businesses explicitly consent to the collection, storage, and publication of their information on the Website. They also consent to the use of photographic, visual, and multimedia material they provide. Businesses warrant they own the rights to the material they provide and use of it does not infringe on third-party rights.",
        el: "Με την υποβολή των στοιχείων τους για καταχώρηση, οι Επιχειρήσεις παρέχουν ρητή συναίνεση στην Εταιρεία για τη δημοσιοποίηση των στοιχείων τους (επωνυμία, στοιχεία επικοινωνίας κλπ.) και του φωτογραφικού/οπτικού υλικού που παρέχουν.\nΟι Επιχειρήσεις δηλώνουν και εγγυώνται ότι διαθέτουν όλα τα απαραίτητα δικαιώματα πνευματικής ή βιομηχανικής ιδιοκτησίας επί του υλικού και αναλαμβάνουν εξ ολοκλήρου την ευθύνη απέναντι σε τρίτους.",
      },
    },
    {
      title: { en: "4 | BUSINESS LIABILITY FOR PRODUCTS AND SERVICES", el: "4 | ΕΥΘΥΝΗ ΕΠΙΧΕΙΡΗΣΕΩΝ ΓΙΑ ΠΡΟΪΟΝΤΑ & ΥΠΗΡΕΣΙΕΣ" },
      text: {
        en: "Businesses are exclusively responsible for the organization, quality, safety, availability, and pricing of their products and services, as well as compliance with applicable legislation. The Company is not part of any transaction between users and businesses.",
        el: "Οι Επιχειρήσεις είναι αποκλειστικά υπεύθυνες για την οργάνωση και παροχή των υπηρεσιών τους, την ποιότητα, ασφάλεια, καταλληλότητα, και τιμολόγηση αυτών. Η Εταιρεία δεν αποτελεί μέρος οποιασδήποτε συναλλαγής μεταξύ των χρηστών της Ιστοσελίδας και των Επιχειρήσεων. Οποιαδήποτε αξίωση σχετική με υπηρεσία στρέφεται αποκλειστικά κατά της Επιχείρησης.",
      },
    },
    {
      title: { en: "5 | MODIFICATIONS AND RIGHT TO REMOVE LISTINGS", el: "5 | ΤΡΟΠΟΠΟΙΗΣΕΙΣ & ΔΙΚΑΙΩΜΑ ΑΦΑΙΡΕΣΗΣ" },
      text: {
        en: "Businesses must promptly inform the Company of any material changes to their products, services, or contact details. The Company may remove or suspend a listing if Terms are violated or if inaccurate info is provided.",
        el: "Οι Επιχειρήσεις υποχρεούνται να ενημερώνουν έγκαιρα και εγγράφως την Εταιρεία για κάθε τροποποίηση (π.χ. ωράριο, τιμές, στοιχεία επικοινωνίας). Η Εταιρεία δεν φέρει καμία ευθύνη για ανακρίβειες αν δεν έχει ενημερωθεί.\nΠέραν της περίπτωσης μη πληρωμής, η Εταιρεία διατηρεί το δικαίωμα να αφαιρεί καταχωρήσεις σε περίπτωση παραβίασης των Όρων, παροχής ανακριβών στοιχείων ή καταγγελιών, χωρίς υποχρέωση αποζημίωσης.",
      },
    },
  ];

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

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <div className="prose prose-slate prose-lg max-w-none">
          <h2 className="text-3xl font-extrabold text-indigo-900 mb-8 pb-4 border-b-2 border-indigo-100">
            {t.users_heading[lang]}
          </h2>

          {sections_users.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title[lang]}</h3>
              {section.text[lang].split("\n").map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <h2 className="text-3xl font-extrabold text-indigo-900 mt-16 mb-8 pb-4 border-b-2 border-indigo-100">
            {t.businesses_heading[lang]}
          </h2>

          {sections_businesses.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title[lang]}</h3>
              {section.text[lang].split("\n").map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <hr className="my-12 border-slate-200" />

          <div className="mt-10">
            <Link
              href={withLang("/", lang)}
              className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              &larr; {t.back_home[lang]}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
