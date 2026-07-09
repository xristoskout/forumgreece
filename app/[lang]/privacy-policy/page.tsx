import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/site-header";
import { SITE_URL, isLang } from "../../../lib/content";
import { withLang } from "../../../lib/locale";
import { breadcrumbSchema } from "../../../lib/structured-data";

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

  const canonicalUrl = `${SITE_URL}/${lang}/privacy-policy`;
  const enUrl = `${SITE_URL}/en/privacy-policy`;
  const elUrl = `${SITE_URL}/el/privacy-policy`;

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
      title: { en: "2 | INDICATIVE PRICING AND TRAVEL ESTIMATES", el: "2 | ΕΝΔΕΙΚΤΙΚΕΣ ΤΙΜΕΣ ΚΑΙ ΕΚΤΙΜΗΣΕΙΣ ΤΑΞΙΔΙΟΥ" },
      text: {
        en: "The Travel Decision Tool and any budget estimates, price ranges or cost comparisons published on GoGreeceNow.com are provided for general informational and planning purposes only. All figures are approximate averages derived from publicly available data, editorial research and third-party sources, and are updated periodically but not in real time.\n\nGoGreeceNow makes no representation or warranty, express or implied, as to the accuracy, completeness or currentness of any price information. Actual travel costs depend on numerous factors outside GoGreeceNow's control, including but not limited to: seasonal pricing, last-minute availability, currency fluctuations, individual spending behaviour, promotional offers and third-party pricing decisions.\n\nGoGreeceNow shall not be liable for any loss, expense or disappointment arising from reliance on any indicative price or budget estimate displayed on this website. Users assume full responsibility for verifying all costs independently prior to making any booking or financial commitment.",
        el: "Το Εργαλείο Σύγκρισης Ταξιδιού και οποιεσδήποτε εκτιμήσεις προϋπολογισμού, εύρη τιμών ή συγκρίσεις κόστους που δημοσιεύονται στο GoGreeceNow.com παρέχονται μόνο για γενική ενημέρωση και σκοπούς προγραμματισμού. Όλα τα νούμερα είναι κατά προσέγγιση μέσοι όροι που προέρχονται από δημόσια διαθέσιμα δεδομένα, συντακτική έρευνα και πηγές τρίτων, και ενημερώνονται περιοδικά αλλά όχι σε πραγματικό χρόνο.\n\nΤο GoGreeceNow δεν παρέχει καμία δήλωση ή εγγύηση, ρητή ή σιωπηρή, ως προς την ακρίβεια, πληρότητα ή επικαιρότητα οποιασδήποτε πληροφορίας τιμών. Το πραγματικό κόστος ταξιδιού εξαρτάται από πολλούς παράγοντες εκτός του ελέγχου του GoGreeceNow, συμπεριλαμβανομένων ενδεικτικά: εποχικής τιμολόγησης, διαθεσιμότητας τελευταίας στιγμής, διακυμάνσεων συναλλάγματος, ατομικής συμπεριφοράς δαπανών, προσφορών και αποφάσεων τιμολόγησης τρίτων.\n\nΤο GoGreeceNow δεν φέρει ευθύνη για οποιαδήποτε απώλεια, έξοδο ή απογοήτευση που προκύπτει από την εξάρτηση από οποιαδήποτε ενδεικτική τιμή ή εκτίμηση προϋπολογισμού που εμφανίζεται σε αυτόν τον ιστότοπο. Οι χρήστες αναλαμβάνουν την πλήρη ευθύνη για την επαλήθευση όλων των εξόδων ανεξάρτητα πριν προβούν σε οποιαδήποτε κράτηση ή οικονομική δέσμευση.",
      },
    },
    {
      title: { en: "3 | PRIVACY POLICY", el: "3 | ΠΡΟΣΤΑΣΙΑ ΠΡΟΣΩΠΙΚΩΝ ΔΕΔΟΜΕΝΩΝ" },
      text: {
        en: "The information or personal details you provide to us are processed in accordance with the Data Protection Policies. By using this website, you consent to the processing of such information and details and you declare that all information and details provided by you are true and accurate.",
        el: "Οι πληροφορίες ή τα προσωπικά στοιχεία που μας παρέχετε υπόκεινται σε επεξεργασία βάσει των Πολιτικών Προστασίας Δεδομένων. Με την χρήση της παρούσας ιστοσελίδας παρέχετε τη σύμφωνη γνώμη σας για την επεξεργασία των εν λόγω πληροφοριών και στοιχείων και δηλώνετε ότι όλες οι πληροφορίες και τα στοιχεία που μας παρέχετε είναι αληθή και ακριβή.",
      },
    },
    {
      title: { en: "4 | WEBSITE USE", el: "4 | ΧΡΗΣΗ ΙΣΤΟΣΕΛΙΔΑΣ" },
      text: {
        en: "By using GoGreeceNow and/or submitting an inquiry through it, you undertake:\n- To use the website only to inquire about our Services and make legitimate requests.\n- Not to make any false or fraudulent communication with malicious or offensive content. If we reasonably consider that such a communication has been made, we shall be entitled to inform the relevant authorities.\n- To provide us with your correct and accurate e-mail address and/or other contact details. You also agree that we may use this information to contact you if necessary.",
        el: "Με τη χρήση του GoGreeceNow ή/και την υποβολή παραγγελίας (ή ερωτημάτων) μέσω αυτής, αναλαμβάνετε:\n- Να χρησιμοποιήσετε την ιστοσελίδα μόνο για να ενημερωθείτε για τις Υπηρεσίες μας και να υποβάλετε θεμιτά ερωτήματα.\n- Να μην προβαίνετε σε ψευδή ή δόλια επικοινωνία με κακόβουλο ή προσβλητικό περιεχόμενο. Εάν θεωρήσουμε ευλόγως ότι έχει υποβληθεί τέτοια, έχουμε το δικαίωμα να ενημερώσουμε τις αρμόδιες αρχές.\n- Να μας παρέχετε με ορθότητα και ακρίβεια την διεύθυνση ηλεκτρονικού ταχυδρομείου σας (e-mail) ή/και λοιπά στοιχεία επικοινωνίας.\nΕπίσης αποδέχεστε ότι μπορούμε να χρησιμοποιήσουμε αυτές τις πληροφορίες για να επικοινωνήσουμε μαζί σας σε περίπτωση που αυτό κριθεί απαραίτητο.",
      },
    },
    {
      title: { en: "5 | INTELLECTUAL PROPERTY", el: "5 | ΔΙΚΑΙΩΜΑΤΑ ΠΝΕΥΜΑΤΙΚΗΣ ΚΑΙ ΒΙΟΜΗΧΑΝΙΚΗΣ ΙΔΙΟΚΤΗΣΙΑΣ – ΣΗΜΑΤΑ" },
      text: {
        en: "GoGreeceNow and its content (including all trademarks, patents, brand names, texts, images, graphics, designs, photographs, programs, data, software) is the intellectual and industrial property of the company.\nIt is strictly forbidden to copy, modify, distribute, resell, rent, republish, reproduce, transmit, store, print, create derivative work, or mislead the public about the actual provider of the content.\nProducts, services, brands, trademarks of third parties appearing on GoGreeceNow are their intellectual property, for which they bear the relevant responsibility.",
        el: "To GoGreeceNow και το περιεχόμενό του (στο οποίο συμπεριλαμβάνονται όλα τα εμπορικά σήματα, διακριτικά γνωρίσματα, ευρεσιτεχνίες, επωνυμίες, κείμενα, εικόνες, γραφικά, σχέδια, φωτογραφίες, κ.λπ.) αποτελεί πνευματική και βιομηχανική ιδιοκτησία της εταιρίας.\nΑπαγορεύεται ρητώς οποιασδήποτε μορφής αντιγραφή, τροποποίηση, παρέμβαση, μεταφορά, διανομή, μεταπώληση, αναδημοσίευση, αναπαραγωγή, ή παραπλάνηση του κοινού.\nΠροϊόντα, υπηρεσίες, επωνυμία ή εμπορικά σήματα τρίτων που εμφανίζονται στo GoGreeceNow, αποτελούν πνευματική και βιομηχανική ιδιοκτησία των τρίτων, οι οποίοι φέρουν και τη σχετική ευθύνη.",
      },
    },
    {
      title: { en: "6 | COMPANY LIABILITY", el: "6 | ΕΥΘΥΝΗ ΤΗΣ ΕΤΑΙΡΙΑΣ" },
      text: {
        en: "The company is not liable for any direct or indirect damage resulting from accessing GoGreeceNow and its use. The company does not bear any responsibility for damages and expenses arising from the use of GoGreeceNow or the inability to use it.\nThe services are provided 'as is'. The company does not guarantee that the content will meet user expectations. The company assumes no responsibility for any legal, civil or criminal claims related to the operation of GoGreeceNow.",
        el: 'Οποιεσδήποτε άμεσες, έμμεσες ή αποθετικές ζημιές προκύψουν από την πρόσβαση κάθε χρήστη στο GoGreeceNow ή την χρήση αυτού, δεν γεννούν ευθύνη της εταιρίας. Η εταιρία δεν φέρει ευθύνη για ζημίες και έξοδα τα οποία προκύπτουν σε σχέση με τη χρήση του GoGreeceNow ή την αδυναμία χρήσης του.\nOι υπηρεσίες παρέχονται "ως έχουν". Η εταιρία δεν εγγυάται ότι το περιεχόμενο θα ανταποκρίνεται στις απαιτήσεις των χρηστών. Η εταιρία δεν φέρει ευθύνη για αξιώσεις που σχετίζονται με το περιεχόμενο του ιστοτόπου (κριτικές και σχόλια).',
      },
    },
    {
      title: { en: "7 | APPLICABLE LAW", el: "7 | ΕΦΑΡΜΟΣΤΕΟ ΔΙΚΑΙΟ ΚΑΙ ΛΟΙΠΟΙ ΟΡΟΙ" },
      text: {
        en: "These terms and conditions are governed by Greek law. For any dispute arising from the use of GoGreeceNow, the courts of Mytiline are exclusively competent.",
        el: "Οι συγκεκριμένοι όροι και προϋποθέσεις διέπονται και ερμηνεύονται σύμφωνα με το ελληνικό δίκαιο. Για κάθε διαφορά που ανακύπτει από τη χρήση του GoGreeceNow, αρμοδιότητα έχουν τα δικαστήρια της Μυτιλήνης.",
      },
    },
    {
      title: { en: "8 | COOKIE POLICY", el: "8 | ΠΟΛΙΤΙΚΗ COOKIES" },
      text: {
        en: "GoGreeceNow uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. No cookies are stored on your device without your explicit prior consent. When you first visit our website, a cookie banner appears asking you to accept or decline non-essential cookies. You may withdraw or change your consent at any time by clearing your browser cookies. Essential cookies required for the basic functioning of the website may be set without requiring your consent, but we do not use any tracking or advertising cookies unless you actively accept them. For more information about how we handle your personal data, please refer to Section 2 (Privacy Policy) above.",
        el: "Το GoGreeceNow χρησιμοποιεί cookies και παρόμοιες τεχνολογίες παρακολούθησης για τη βελτίωση της εμπειρίας περιήγησής σας, την ανάλυση της επισκεψιμότητας του ιστότοπου και την κατανόηση της προέλευσης των επισκεπτών μας. Κανένα cookie δεν αποθηκεύεται στη συσκευή σας χωρίς τη ρητή συγκατάθεσή σας. Κατά την πρώτη επίσκεψή σας στον ιστότοπό μας, εμφανίζεται ένα banner cookies που σας ζητά να αποδεχθείτε ή να απορρίψετε τα μη απαραίτητα cookies. Μπορείτε να ανακαλέσετε ή να αλλάξετε τη συγκατάθεσή σας ανά πάσα στιγμή διαγράφοντας τα cookies του προγράμματος περιήγησής σας. Απαραίτητα cookies που απαιτούνται για τη βασική λειτουργία του ιστότοπου ενδέχεται να εγκατασταθούν χωρίς τη συγκατάθεσή σας, ωστόσο δεν χρησιμοποιούμε cookies παρακολούθησης ή διαφήμισης εκτός εάν τα αποδεχθείτε ενεργά.",
      },
    },
    {
      title: { en: "9 | AFFILIATE LINKS", el: "9 | ΣΥΝΔΕΣΜΟΙ ΣΥΝΕΡΓΑΤΩΝ (AFFILIATE)" },
      text: {
        en: "Some links on GoGreeceNow are affiliate links. If you click on one of these links and make a booking or purchase, we may earn a small commission — at no extra cost to you. These commissions help us maintain and improve the site, keeping our content free for all readers.\n\nWe only recommend services, tours, hotels, and products that we have personally vetted and would genuinely use ourselves for a trip to Greece. Our editorial content is independent, and affiliate relationships never influence what we write or recommend.\n\nGoGreeceNow is a participant in the Viator Partner Network (affiliate program), among other travel affiliate programmes. We always disclose affiliate links clearly and in good faith. If you have any questions about our affiliate relationships, please contact us at any time.",
        el: "Ορισμένοι σύνδεσμοι στο GoGreeceNow είναι σύνδεσμοι συνεργατών (affiliate). Εάν κάνετε κλικ σε έναν από αυτούς τους συνδέσμους και προβείτε σε κράτηση ή αγορά, ενδέχεται να λάβουμε μια μικρή προμήθεια — χωρίς καμία επιπλέον χρέωση για εσάς. Αυτές οι προμήθειες μάς βοηθούν να συντηρούμε και να βελτιώνουμε τον ιστότοπο, διατηρώντας το περιεχόμενό μας δωρεάν για όλους τους αναγνώστες.\n\nΠροτείνουμε μόνο υπηρεσίες, εκδρομές, ξενοδοχεία και προϊόντα που έχουμε προσωπικά ελέγξει και που θα χρησιμοποιούσαμε οι ίδιοι για ένα ταξίδι στην Ελλάδα. Το συντακτικό μας περιεχόμενο είναι ανεξάρτητο και οι συνεργασίες affiliate δεν επηρεάζουν ποτέ όσα γράφουμε ή προτείνουμε.\n\nΤο GoGreeceNow συμμετέχει στο Viator Partner Network (πρόγραμμα συνεργατών), μεταξύ άλλων ταξιδιωτικών προγραμμάτων affiliate. Πάντα αποκαλύπτουμε τους affiliate συνδέσμους με σαφήνεια και καλή πίστη. Εάν έχετε οποιεσδήποτε ερωτήσεις σχετικά με τις συνεργασίες μας, επικοινωνήστε μαζί μας ανά πάσα στιγμή.",
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

  const breadcrumb = breadcrumbSchema(lang, [
    { label: lang === "en" ? "Home" : "Αρχική", path: "" },
    { label: lang === "en" ? "Privacy Policy" : "Πολιτική Απορρήτου", path: "/privacy-policy" },
  ]);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

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
    </>
  );
}
