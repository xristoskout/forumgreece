"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SiteHeader from "../../../components/site-header";
import { useLocale } from "../../../lib/useLocale";

const t = {
  /* ===== HERO ===== */
  hero_badge: { en: "The Greece Travel Platform for International Visitors", el: "Η ταξιδιωτική πλατφόρμα για διεθνείς επισκέπτες" },
  hero_title: { en: "Put Your Business in Front of Thousands of Travelers Planning Their Trip to Greece", el: "Βάλε την επιχείρησή σου μπροστά σε χιλιάδες ταξιδιώτες που σχεδιάζουν ταξίδι στην Ελλάδα" },
  hero_subtitle: { en: "GoGreeceNow connects international visitors with hotels, tours, restaurants and local experiences across Greece — through trusted destination guides read by travelers from all around the world.", el: "Το GoGreeceNow συνδέει διεθνείς επισκέπτες με ξενοδοχεία, εκδρομές, εστιατόρια και τοπικές εμπειρίες σε όλη την Ελλάδα, μέσα από έμπιστους ταξιδιωτικούς οδηγούς που διαβάζονται από ταξιδιώτες από όλο τον κόσμο." },
  hero_btn_plans: { en: "View Plans & Pricing", el: "Δες Πακέτα & Τιμές" },
  hero_btn_call: { en: "Book a Free Call", el: "Κλείσε Δωρεάν Κλήση" },
  hero_guarantee1: { en: "No commission per booking", el: "Καμία προμήθεια ανά κράτηση" },
  hero_guarantee2: { en: "Flat annual fee", el: "Σταθερή ετήσια χρέωση" },
  hero_guarantee4: { en: "Live in 48 hours", el: "Online σε 48 ώρες" },

  /* ===== TRUST ===== */
  trust_text: {
    en: "GoGreeceNow is a growing English-language travel portal for Greece, with content targeting international travelers in the trip planning phase.",
    el: "Το GoGreeceNow είναι ένα αναπτυσσόμενο αγγλόφωνο travel portal για την Ελλάδα, με περιεχόμενο που στοχεύει ταξιδιώτες από το εξωτερικό στη φάση σχεδιασμού του ταξιδιού τους.",
  },

  /* ===== PAIN POINTS ===== */
  pain_label: { en: "Sound Familiar?", el: "Σας θυμίζει κάτι;" },
  pain_title: { en: "The Problems Every Tourism Business Faces", el: "Τα προβλήματα που αντιμετωπίζει κάθε τουριστική επιχείρηση" },
  pain_subtitle: { en: "You have an amazing product. But international travelers can't find you.", el: "Έχετε ένα υπέροχο προϊόν. Αλλά οι διεθνείς ταξιδιώτες δεν σας βρίσκουν." },
  pain1_title: { en: "You pay huge OTA commissions", el: "Πληρώνετε τεράστιες προμήθειες" },
  pain1_desc: { en: "Booking.com and similar platforms take 15–25% of every reservation — money that should stay in your pocket.", el: "Το Booking.com και παρόμοιες πλατφόρμες παίρνουν 15-25% από κάθε κράτηση." },
  pain2_title: { en: "International travelers can't find you", el: "Οι διεθνείς ταξιδιώτες δεν σας βρίσκουν" },
  pain2_desc: { en: "When English-speaking tourists Google your destination, your business doesn't appear.", el: "Όταν τουρίστες ψάχνουν τον προορισμό σας στο Google, η επιχείρησή σας δεν εμφανίζεται." },
  pain3_title: { en: "Your website doesn't rank on Google", el: "Το website σας δεν εμφανίζεται στο Google" },
  pain3_desc: { en: "Without SEO-optimized content, you're invisible to the millions searching for Greece travel info.", el: "Χωρίς SEO-optimized περιεχόμενο, είστε αόρατοι σε εκατομμύρια αναζητήσεις." },
  pain4_title: { en: "You rely only on repeat visitors", el: "Βασίζεστε μόνο σε επαναλαμβανόμενους πελάτες" },
  pain4_desc: { en: "Word-of-mouth is great, but it limits growth. You need a steady stream of new customers.", el: "Τα λόγια είναι ωραία, αλλά περιορίζουν την ανάπτυξη. Χρειάζεστε νέους πελάτες." },
  pain5_title: { en: "No time for digital marketing", el: "Δεν έχετε χρόνο για digital marketing" },
  pain5_desc: { en: "Running a tourism business is already a full-time job. You don't have hours to spend on social media or SEO.", el: "Το τρέξιμο μιας τουριστικής επιχείρησης είναι ήδη full-time δουλειά." },
  pain6_title: { en: "Language barrier with foreign guests", el: "Γλωσσικό εμπόδιο με ξένους επισκέπτες" },
  pain6_desc: { en: "Your website might only be in Greek or English, but travelers search and book in their own language. You can't promote your business in the language your customer actually understands.", el: "Το website σας μπορεί να είναι μόνο στα Ελληνικά ή Αγγλικά, αλλά οι ταξιδιώτες ψάχνουν και κλείνουν στη γλώσσα τους. Δεν μπορείτε να προβληθείτε στη γλώσσα που κατανοεί πραγματικά ο πελάτης σας." },
  pain_bottom: { en: "There's a better way.", el: "Υπάρχει καλύτερος τρόπος." },

  /* ===== BENEFITS ===== */
  benefits_label: { en: "What You Get", el: "Τι κερδίζετε" },
  benefits_title: { en: "Everything Your Business Needs to Reach International Travelers", el: "Όλα όσα χρειάζεται η επιχείρησή σας για να προσεγγίσει διεθνείς ταξιδιώτες" },
  benefits_subtitle: { en: "One listing. Multiple channels. Thousands of travelers.", el: "Μία καταχώριση. Πολλαπλά κανάλια. Χιλιάδες ταξιδιώτες." },
  b1_title: { en: "Dedicated Business Page", el: "Αποκλειστική σελίδα επιχείρησης" },
  b1_desc: { en: "Your own page on GoGreeceNow with full business profile, photos, description, location map and contact details — built for you by our team.", el: "Η δική σας σελίδα στο GoGreeceNow με πλήρες προφίλ, φωτογραφίες, περιγραφή, χάρτη και στοιχεία επικοινωνίας." },
  b2_title: { en: "Photo Gallery & Description", el: "Photo Gallery & Περιγραφή" },
  b2_desc: { en: "Professional photo gallery with custom SEO-optimized description that showcases your business to international visitors at its best.", el: "Επαγγελματική photo gallery με SEO-optimized περιγραφή." },
  b3_title: { en: "Direct Link to YOUR Website", el: "Απευθείας σύνδεσμος στο δικό σας site" },
  b3_desc: { en: "Drive traffic directly to your own booking page. No middleman, no commission — 100% of bookings go to you.", el: "Οδηγήστε επισκέπτες απευθείας στη σελίδα κράτησής σας. Κανένας μεσάζοντας, 0% προμήθεια." },
  b4_title: { en: "Placement in Destination Guides", el: "Τοποθέτηση σε ταξιδιωτικούς οδηγούς" },
  b4_desc: { en: "Appear inside our popular Paros, Santorini, Crete, Mykonos and other destination guides — right where travelers make decisions.", el: "Εμφανιστείτε στους δημοφιλείς οδηγούς προορισμών μας — εκεί που οι ταξιδιώτες παίρνουν αποφάσεις." },
  b5_title: { en: "Social Media Promotion", el: "Προβολή στα social media" },
  b5_desc: { en: "Your business gets shared across our Facebook communities and Instagram to followers planning their Greece trip.", el: "Η επιχείρησή σας προβάλλεται στα Facebook και Instagram σε ακολούθους." },
  b6_title: { en: "Featured in \"Best Of\" Guides", el: "Προβολή σε οδηγούς \"Best Of\"" },
  b6_desc: { en: "Get highlighted in our curated \"best hotels\", \"best restaurants\" and \"top experiences\" roundup articles read by serious travelers.", el: "Προβληθείτε στα άρθρα μας με τα καλύτερα ξενοδοχεία, εστιατόρια και εμπειρίες." },
  b7_title: { en: "SEO-Optimized Content", el: "SEO-Optimized περιεχόμενο" },
  b7_desc: { en: "Every listing is built with Google rankings in mind. Your business gets found when travelers search for your destination in English.", el: "Κάθε καταχώριση είναι βελτιστοποιημένη για το Google. Οι ταξιδιώτες σας βρίσκουν όταν ψάχνουν στα Αγγλικά." },
  b8_title: { en: "AI Chatbot That Speaks Every Language", el: "AI Chatbot που Μιλάει Όλες τις Γλώσσες" },
  b8_desc: { en: "Our built-in AI chatbot engages visitors in any language — English, German, French, Spanish, Chinese, Arabic and more — and recommends your business directly to travelers from around the world.", el: "Το ενσωματωμένο AI chatbot μας συνομιλεί με επισκέπτες σε κάθε γλώσσα — Αγγλικά, Γερμανικά, Γαλλικά, Ισπανικά, Κινέζικα, Αραβικά και άλλες — και προτείνει την επιχείρησή σας σε ταξιδιώτες από όλο τον κόσμο." },
  b9_title: { en: "Trip Planner Tool", el: "Trip Planner Tool" },
  b9_desc: { en: "Partner businesses are promoted through our Trip Planner tool — travelers build their itinerary and discover your services naturally as they plan each day of their Greece trip.", el: "Οι συνεργαζόμενες επιχειρήσεις προβάλλονται μέσω του Trip Planner μας — οι ταξιδιώτες χτίζουν το δρομολόγιό τους και ανακαλύπτουν τις υπηρεσίες σας φυσικά καθώς σχεδιάζουν κάθε μέρα του ταξιδιού τους." },

  /* ===== LIVE EXAMPLE ===== */
  live_label: { en: "See It In Action", el: "Δείτε το στη πράξη" },
  live_title: { en: "Here's What a Listing Looks Like", el: "Δείτε πώς φαίνεται μία καταχώριση" },
  live_subtitle: { en: "Real listings, real businesses, real results.", el: "Πραγματικές καταχωρίσεις, πραγματικές επιχειρήσεις, πραγματικά αποτελέσματα." },
  live_header: { en: "Live Example — Business Listing Page on GoGreeceNow", el: "Παράδειγμα — Σελίδα επιχείρησης στο GoGreeceNow" },
  live_mockup_text: { en: "Your business page will include:", el: "Η σελίδα σας θα περιλαμβάνει:" },
  live_mockup_items: { en: "Photo Gallery | Full Description | Map | Contact | Website Link | Category Badge", el: "Photo Gallery | Πλήρης Περιγραφή | Χάρτης | Επικοινωνία | Website Link | Κατηγορία" },
  live_btn_hotels: { en: "See Live Hotel Listings", el: "Δείτε live ξενοδοχεία" },
  live_btn_guides: { en: "See Destination Guides", el: "Δείτε οδηγούς προορισμών" },
  live_btn_tours: { en: "See Tour Listings", el: "Δείτε εκδρομές" },

  /* ===== PRICING ===== */
  pricing_label: { en: "Transparent Pricing", el: "Διαφανείς τιμές" },
  pricing_title: { en: "Choose the Right Plan for Your Business", el: "Επιλέξτε το κατάλληλο πακέτο για την επιχείρησή σας" },
  pricing_subtitle: { en: "No hidden fees. No commission. No surprises. Just flat annual visibility.", el: "Χωρίς κρυφές χρεώσεις. Χωρίς προμήθεια. Χωρίς εκπλήξεις." },
  basic_name: { en: "Basic", el: "Basic" },
  basic_period: { en: "Perfect to get started", el: "Ιδανικό για ξεκίνημα" },
  basic_price: { en: "€99/yr", el: "€99/yr" },
  premium_name: { en: "Essential", el: "Essential" },
  premium_badge: { en: "Most Popular", el: "Δημοφιλέστερο" },
  premium_period: { en: "Best value for most businesses", el: "Καλύτερη σχέση ποιότητας-τιμής" },
  premium_price: { en: "€169/yr", el: "€169/yr" },
  featured_name: { en: "Featured", el: "Featured" },
  featured_period: { en: "Maximum exposure & visibility", el: "Μέγιστη προβολή & ορατότητα" },
  featured_price: { en: "€249/yr", el: "€249/yr" },

  /* ===== COMPARISON TABLE ===== */
  comp_label: { en: "Why GoGreeceNow?", el: "Γιατί GoGreeceNow;" },
  comp_title: { en: "GoGreeceNow vs. Traditional Platforms", el: "GoGreeceNow vs. Παραδοσιακές πλατφόρμες" },
  comp_subtitle: { en: "We don't replace Booking.com — we complement it with direct, commission-free visibility.", el: "Δεν αντικαθιστούμε το Booking.com — το συμπληρώνουμε με απευθείας ορατότητα χωρίς προμήθεια." },
  comp_feature: { en: "Feature", el: "Χαρακτηριστικό" },
  comp_ggn: { en: "GoGreeceNow", el: "GoGreeceNow" },
  comp_booking: { en: "Booking.com", el: "Booking.com" },
  comp_tripadvisor: { en: "TripAdvisor", el: "TripAdvisor" },
  comp_row1: { en: "Commission per booking", el: "Προμήθεια ανά κράτηση" },
  comp_row1_ggn: { en: "0%", el: "0%" },
  comp_row1_bc: { en: "15–25%", el: "15–25%" },
  comp_row1_ta: { en: "12–15%", el: "12–15%" },
  comp_row2: { en: "Dedicated business page", el: "Αποκλειστική σελίδα" },
  comp_row3: { en: "Direct link to YOUR website", el: "Απευθείας link στο site σας" },
  comp_row4: { en: "Featured in travel guides", el: "Προβολή σε ταξιδιωτικούς οδηγούς" },
  comp_row5: { en: "SEO benefit (backlink)", el: "SEO όφελος (backlink)" },
  comp_row6: { en: "Social media promotion", el: "Προβολή στα social media" },
  comp_row7: { en: "Flat annual pricing", el: "Σταθερή ετήσια χρέωση" },
  comp_row8: { en: "Editorial content coverage", el: "Editorial περιεχόμενο" },
  comp_yes: { en: "Yes", el: "Ναι" },
  comp_no: { en: "No", el: "Όχι" },
  comp_limited: { en: "Limited", el: "Περιορισμένο" },
  comp_varies: { en: "Varies", el: "Διάφορο" },
  comp_bottom: { en: "Keep your OTA presence AND add GoGreeceNow for commission-free direct bookings.", el: "Διατηρήστε την παρουσία σας στα OTAs ΚΑΙ προσθέστε GoGreeceNow για απευθείας κρατήσεις." },

  /* ===== HOW IT WORKS ===== */
  how_label: { en: "Simple Process", el: "Απλή διαδικασία" },
  how_title: { en: "Get Listed in 3 Simple Steps", el: "Κάντε εγγραφή σε 3 απλά βήματα" },
  how_subtitle: { en: "From signup to live listing in less than 48 hours.", el: "Από την εγγραφή στην online καταχώριση σε λιγότερο από 48 ώρες." },
  how1_title: { en: "Tell Us About Your Business", el: "Πείτε μας για την επιχείρησή σας" },
  how1_desc: { en: "Fill out our simple form with your business details, photos, description and website link. That's all we need to get started.", el: "Συμπληρώστε τη φόρμα με τα στοιχεία, φωτογραφίες, περιγραφή και link. Μόνο αυτό χρειαζόμαστε." },
  how1_time: { en: "Takes just 5 minutes", el: "Διαρκεί μόνο 5 λεπτά" },
  how2_title: { en: "We Build Your Listing", el: "Δημιουργούμε την καταχώρισή σας" },
  how2_desc: { en: "Our team creates your dedicated business page with SEO-optimized content, photo gallery and strategic placement in relevant destination guides.", el: "Η ομάδα μας δημιουργεί τη σελίδα σας με SEO περιεχόμενο, photo gallery και στρατηγική τοποθέτηση." },
  how2_time: { en: "Ready within 48 hours", el: "Έτοιμο σε 48 ώρες" },
  how3_title: { en: "Go Live & Grow", el: "Online & ανάπτυξη" },
  how3_desc: { en: "Your listing goes live on our platform, inside destination guides and across our social media. International travelers start finding you immediately.", el: "Η καταχώρισή σας γίνεται live και οι διεθνείς ταξιδιώτες αρχίζουν να σας βρίσκουν." },
  how3_time: { en: "Results from day one", el: "Αποτελέσματα από την πρώτη μέρα" },
  how_cta: { en: "Start Now — It's Easy", el: "Ξεκινήστε τώρα — Είναι εύκολο" },

  /* ===== WHO IS THIS FOR ===== */
  who_label: { en: "Perfect For", el: "Ιδανικό για" },
  who_title: { en: "Is GoGreeceNow Right for Your Business?", el: "Είναι το GoGreeceNow κατάλληλο για εσάς;" },
  who_subtitle: { en: "If you're in the tourism industry in Greece, the answer is yes.", el: "Αν είστε στον τουριστικό κλάδο στην Ελλάδα, η απάντηση είναι ναι." },
  who1_title: { en: "Hotels & Boutique Stays", el: "Ξενοδοχεία & Boutique καταλύματα" },
  who1_desc: { en: "Reach travelers before they book on OTAs. Get direct reservations and keep 100% of the revenue.", el: "Προσεγγίστε ταξιδιώτες πριν κλείσουν σε OTAs." },
  who2_title: { en: "Restaurants & Tavernas", el: "Εστιατόρια & Ταβέρνες" },
  who2_desc: { en: "Attract food-loving visitors searching for authentic Greek cuisine in your destination.", el: "Προσελκύστε λάτρεις του φαγητού που ψάχνουν αυθεντική ελληνική κουζίνα." },
  who3_title: { en: "Tour Operators & Boat Trips", el: "Tour Operators & Boat Trips" },
  who3_desc: { en: "Get discovered by travelers in the planning stage who are actively looking for activities.", el: "Γίνετε ανακαλύψιμοι από ταξιδιώτες που ψάχνουν για δραστηριότητες." },
  who4_title: { en: "Rent-a-Car, Taxi & Tourist Transport", el: "Ενοικιάσεις, Ταξί & Τουριστικά Οχήματα" },
  who4_desc: { en: "Connect with visitors who need to get around the islands — every traveler needs transportation.", el: "Συνδεθείτε με επισκέπτες που χρειάζονται ταξί, τουριστικά οχήματα ή μεταφορά." },
  who5_title: { en: "Wineries & Local Experiences", el: "Οινοποιεία & Τοπικές εμπειρίες" },
  who5_desc: { en: "Tap into the booming gastro-tourism and agritourism trend with travelers seeking authentic experiences.", el: "Αξιοποιήστε την τάση του γαστροτουρισμού." },
  who6_title: { en: "Diving, Yoga, Weddings & Activities", el: "Καταδύσεις, Yoga & Διοργάνωση Γάμων" },
  who6_desc: { en: "From water sports to wellness retreats — if you offer experiences, you belong on GoGreeceNow.", el: "Από θαλάσσια σπορ έως wellness retreats και διοργάνωση γάμων." },

  /* ===== FAQ ===== */
  faq_label: { en: "FAQ", el: "Συχνές Ερωτήσεις" },
  faq_title: { en: "Frequently Asked Questions", el: "Συχνές ερωτήσεις" },
  faq_subtitle: { en: "Everything you need to know before getting listed.", el: "Όλα όσα πρέπει να γνωρίζετε πριν την εγγραφή." },
  faq1_q: { en: "How much does a listing cost?", el: "Πόσο κοστίζει μια καταχώριση;" },
  faq1_a: { en: "Our plans start from €99/year for the Basic listing, €169/year for Premium (most popular), and €249/year for Featured. All plans are billed annually with no hidden fees.", el: "Τα πακέτα μας ξεκινούν από €99/έτος για Basic, €169/έτος για Premium και €249/έτος για Featured. Όλα χρεώνονται ετησίως χωρίς κρυφές χρεώσεις." },
  faq2_q: { en: "Do you charge commission per booking?", el: "Χρεώνετε προμήθεια ανά κράτηση;" },
  faq2_a: { en: "Never. We charge a flat annual fee and that's it. You keep 100% of every booking that comes through your listing. Unlike Booking.com or Airbnb, we don't take a percentage of your revenue — ever.", el: "Ποτέ. Χρεώνουμε σταθερή ετήσια χρέωση και τέλος. Κρατάτε 100% από κάθε κράτηση." },
  faq3_q: { en: "How is GoGreeceNow different from Booking.com or TripAdvisor?", el: "Σε τι διαφέρει το GoGreeceNow από Booking.com ή TripAdvisor;" },
  faq3_a: { en: "We're not a booking platform — we're a travel guide. We send travelers directly to YOUR website for bookings. No middleman, no commissions, no competition with other properties on your page. We're meant to complement your OTA presence, not replace it.", el: "Δεν είμαστε booking platform — είμαστε ταξιδιωτικός οδηγός. Στέλνουμε ταξιδιώτες απευθείας στο δικό σας website." },
  faq4_q: { en: "How long does it take to go live?", el: "Πόσος χρόνος χρειάζεται για να γίνει live;" },
  faq4_a: { en: "Typically within 48 hours after you submit your business details and photos. In some cases it can be faster. We'll notify you by email as soon as your listing is live so you can review it.", el: "Συνήθως εντός 48 ωρών από την υποβολή των στοιχείων σας. Σε κάποιες περιπτώσεις μπορεί να είναι πιο γρήγορο." },
  faq5_q: { en: "Can I update my listing after it goes live?", el: "Μπορώ να ενημερώσω την καταχώρισή μου μετά τη δημοσίευση;" },
  faq5_a: { en: "Yes! You can request updates at any time — new photos, updated descriptions, new contact details, seasonal offers. Just send us an email and we'll update it within 48 hours. Premium and Featured plans get priority update processing.", el: "Ναι! Μπορείτε να ζητήσετε ενημερώσεις οποτεδήποτε — νέες φωτογραφίες, περιγραφές, στοιχεία επικοινωνίας." },
  faq6_q: { en: "What kind of businesses can list on GoGreeceNow?", el: "Τι είδους επιχειρήσεις μπορούν να γραφτούν;" },
  faq6_a: { en: "Any tourism-related business in Greece: hotels, boutique stays, villas, apartments, restaurants, tavernas, tour operators, boat trips, rent-a-car companies, diving schools, wineries, cooking classes, yoga retreats, local shops and more. If you serve tourists in Greece, you belong on GoGreeceNow.", el: "Οποιαδήποτε τουριστική επιχείρηση στην Ελλάδα: ξενοδοχεία, εστιατόρια, tour operators, boat trips, ενοικιάσεις, σχολές καταδύσεων, οινοποιεία και άλλα." },
  faq8_q: { en: "In which languages is my listing visible?", el: "Σε ποιες γλώσσες είναι ορατή η καταχώρισή μου;" },
  faq8_a: { en: "The website is currently in English, but our AI chatbot speaks multiple languages and can recommend your business to visitors in their own language — expanding your reach beyond English-speaking travelers.", el: "Η ιστοσελίδα είναι στα Αγγλικά, αλλά το AI chatbot μας μιλάει όλες τις γλώσσες και μπορεί να προτείνει την επιχείρησή σας σε επισκέπτες στη γλώσσα τους — επεκτείνοντας την εμβέλειά σας πέρα από τους αγγλόφωνους ταξιδιώτες." },
  faq9_q: { en: "Do you offer discounts for multiple properties?", el: "Προσφέρετε εκπτώσεις για πολλαπλές ιδιοκτησίες;" },
  faq9_a: { en: "Yes! If you have 3 or more properties or businesses, contact us for a custom multi-property package with significant discounts. We also offer special rates for hotel groups and tourism associations.", el: "Ναι! Αν έχετε 3 ή περισσότερες ιδιοκτησίες, επικοινωνήστε για εξατομικευμένο πακέτο με σημαντικές εκπτώσεις." },
  /* ===== FINAL CTA ===== */
  cta_label: { en: "Ready to Grow?", el: "Έτοιμοι για ανάπτυξη;" },
  cta_title: { en: "Start Reaching Thousands of International Travelers Today", el: "Ξεκινήστε να προσεγγίζετε χιλιάδες διεθνείς ταξιδιώτες σήμερα" },
  cta_text: { en: "Join the growing community of Greek tourism businesses that use GoGreeceNow to connect with visitors from around the world — without paying commission.", el: "Γίνετε μέλος της κοινότητας επιχειρήσεων που χρησιμοποιούν το GoGreeceNow για να συνδεθούν με επισκέπτες από όλο τον κόσμο." },
  cta_btn1: { en: "Get Listed Now", el: "Κάντε εγγραφή τώρα" },
  cta_btn2: { en: "View All Plans", el: "Δείτε όλα τα πακέτα" },
  cta_g1: { en: "No commission ever", el: "Καμία προμήθεια" },
  cta_g3: { en: "Live in 48 hours", el: "Online σε 48 ώρες" },

  /* ===== CONTACT FORM ===== */
  form_label: { en: "Get Started", el: "Ξεκινήστε" },
  form_title: { en: "Tell Us About Your Business", el: "Πείτε μας για την επιχείρησή σας" },
  form_subtitle: { en: "Fill in the form below and we'll get back to you within 24 hours.", el: "Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε εντός 24 ωρών." },
  form_business: { en: "Business Name *", el: "Επωνυμία *" },
  form_name: { en: "Your Name *", el: "Το όνομά σας *" },
  form_email: { en: "Email Address *", el: "Διεύθυνση Email *" },
  form_phone: { en: "Phone (optional)", el: "Τηλέφωνο (προαιρετικό)" },
  form_type: { en: "Business Type *", el: "Τύπος επιχείρησης *" },
  form_location: { en: "Location / Island *", el: "Τοποθεσία / Νησί *" },
  form_website: { en: "Website (if any)", el: "Website (αν υπάρχει)" },
  form_plan: { en: "Preferred Plan", el: "Επιθυμητό πακέτο" },
  form_message: { en: "Tell Us About Your Business", el: "Πείτε μας για την επιχείρησή σας" },
  form_placeholder_business: { en: "e.g. Iren Rooms", el: "π.χ. Iren Rooms" },
  form_placeholder_name: { en: "e.g. Maria Konstantinou", el: "π.χ. Μαρία Κωνσταντίνου" },
  form_placeholder_email: { en: "your@email.com", el: "your@email.com" },
  form_placeholder_phone: { en: "+30 69X XXX XXXX", el: "+30 69X XXX XXXX" },
  form_placeholder_location: { en: "e.g. Paros, Cyclades", el: "π.χ. Πάρος, Κυκλάδες" },
  form_placeholder_website: { en: "https://www.yourbusiness.com", el: "https://www.yourbusiness.com" },
  form_placeholder_message: { en: "Briefly describe your business, what makes it special and what kind of travelers you'd like to attract...", el: "Περιγράψτε συνοπτικά την επιχείρησή σας..." },
  form_select_type: { en: "Select your type...", el: "Επιλέξτε τύπο..." },
  form_type_hotel: { en: "Hotel / Boutique Stay", el: "Ξενοδοχείο" },
  form_type_restaurant: { en: "Restaurant / Taverna", el: "Εστιατόριο / Ταβέρνα" },
  form_type_tour: { en: "Tour Operator", el: "Tour Operator" },
  form_type_boat: { en: "Boat Trip / Sailing", el: "Boat Trip" },
  form_type_car: { en: "Rent-a-Car / Transport", el: "Ενοικιάσεις" },
  form_type_wine: { en: "Winery / Local Experience", el: "Οινοποιείο" },
  form_type_diving: { en: "Diving / Water Sports", el: "Καταδύσεις" },
  form_type_spa: { en: "Spa / Wellness", el: "Spa" },
  form_type_shop: { en: "Local Shop", el: "Τοπικό κατάστημα" },
  form_type_other: { en: "Other", el: "Άλλο" },
  form_plan_unsure: { en: "Not sure yet", el: "Δεν είμαι σίγουρος" },
  form_plan_basic: { en: "Basic — €99/year", el: "Basic — €99/έτος" },
  form_plan_premium: { en: "Essential — €169/year", el: "Essential — €169/έτος" },
  form_plan_featured: { en: "Featured — €249/year", el: "Featured — €249/έτος" },
  form_plan_multi: { en: "Multi-property (custom)", el: "Πολλαπλές ιδιοκτησίες" },
  form_submit: { en: "Send My Inquiry — Get a Response in 24h", el: "Στείλτε — Απάντηση σε 24 ώρες" },
  form_note: { en: "We respect your privacy. Your information is never shared with third parties. No spam, ever.", el: "Σεβόμαστε την ιδιωτικότητά σας. Τα στοιχεία σας δεν κοινοποιούνται." },
  form_success: { en: "Message Sent! We'll contact you within 24 hours.", el: "Το μήνυμα στάλθηκε! Θα επικοινωνήσουμε εντός 24 ωρών." },
  form_error: { en: "An error occurred. Please try again.", el: "Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά." },
  form_sending: { en: "Sending...", el: "Αποστολή..." },
};

const painPoints = [
  { icon: "💸", title: "pain1_title", desc: "pain1_desc" },
  { icon: "🔍", title: "pain2_title", desc: "pain2_desc" },
  { icon: "📉", title: "pain3_title", desc: "pain3_desc" },
  { icon: "🔄", title: "pain4_title", desc: "pain4_desc" },
  { icon: "⏰", title: "pain5_title", desc: "pain5_desc" },
  { icon: "🤖", title: "pain6_title", desc: "pain6_desc" },
];

const benefits = [
  { icon: "📍", title: "b1_title", desc: "b1_desc" },
  { icon: "📸", title: "b2_title", desc: "b2_desc" },
  { icon: "🔗", title: "b3_title", desc: "b3_desc" },
  { icon: "🗺️", title: "b4_title", desc: "b4_desc" },
  { icon: "📱", title: "b5_title", desc: "b5_desc" },
  { icon: "⭐", title: "b6_title", desc: "b6_desc" },
  { icon: "📊", title: "b7_title", desc: "b7_desc" },
  { icon: "🌍", title: "b8_title", desc: "b8_desc" },
  { icon: "📧", title: "b9_title", desc: "b9_desc" },
];

const howSteps = [
  { num: "1", icon: "📋", title: "how1_title", desc: "how1_desc", time: "how1_time" },
  { num: "2", icon: "🎨", title: "how2_title", desc: "how2_desc", time: "how2_time" },
  { num: "3", icon: "🚀", title: "how3_title", desc: "how3_desc", time: "how3_time" },
];

const whoItems = [
  { icon: "🏨", title: "who1_title", desc: "who1_desc" },
  { icon: "🍽️", title: "who2_title", desc: "who2_desc" },
  { icon: "🚤", title: "who3_title", desc: "who3_desc" },
  { icon: "🚗", title: "who4_title", desc: "who4_desc" },
  { icon: "🍷", title: "who5_title", desc: "who5_desc" },
  { icon: "🤿", title: "who6_title", desc: "who6_desc" },
];

const faqs = [
  { q: "faq1_q", a: "faq1_a" },
  { q: "faq2_q", a: "faq2_a" },
  { q: "faq3_q", a: "faq3_a" },
  { q: "faq4_q", a: "faq4_a" },
  { q: "faq5_q", a: "faq5_a" },
  { q: "faq6_q", a: "faq6_a" },
  { q: "faq8_q", a: "faq8_a" },
  { q: "faq9_q", a: "faq9_a" },
];

const go = (key: string, l: string) => (t as any)[key]?.[l] ?? key;

export default function PromotionClient() {
  const { lang } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const data = {
      business_name: formData.get("business_name") as string,
      contact_name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      business_type: formData.get("business_type") as string,
      location: formData.get("location") as string,
      website: formData.get("website") as string,
      preferred_plan: formData.get("preferred_plan") as string,
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
        setTimeout(() => { setIsModalOpen(false); setStatus("idle"); }, 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const businessTypes = [
    { v: "", l: "form_select_type" },
    { v: "hotel", l: "form_type_hotel" },
    { v: "restaurant", l: "form_type_restaurant" },
    { v: "tour", l: "form_type_tour" },
    { v: "boat", l: "form_type_boat" },
    { v: "car", l: "form_type_car" },
    { v: "wine", l: "form_type_wine" },
    { v: "diving", l: "form_type_diving" },
    { v: "spa", l: "form_type_spa" },
    { v: "shop", l: "form_type_shop" },
    { v: "other", l: "form_type_other" },
  ];

  const planOptions = [
    { v: "", l: "form_plan_unsure" },
    { v: "basic", l: "form_plan_basic" },
    { v: "premium", l: "form_plan_premium" },
    { v: "featured", l: "form_plan_featured" },
    { v: "multi", l: "form_plan_multi" },
  ];

  const stickyCta = (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] z-[1000] border-t-2 border-[#1a6fc4] md:hidden">
      <button
        onClick={() => setIsModalOpen(true)}
        className="block w-full bg-[#f97316] text-white text-center py-3.5 rounded-lg font-bold text-base"
      >
        🚀 {lang === "el" ? "Κάντε εγγραφή" : "Get Listed"}
      </button>
    </div>
  );

  return (
    <>
      <SiteHeader />
      {stickyCta}

      <main className="min-h-screen bg-white font-['Inter',sans-serif] text-[#1a1a2e]">

        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2d5e] via-[#1a6fc4] to-[#0891b2] text-white pt-28 pb-20 sm:pt-32 sm:pb-24 text-center">
          <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80')] bg-cover bg-center pointer-events-none" />
          <div className="relative z-10 max-w-[860px] mx-auto px-6">
            <span className="inline-block bg-white/15 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur">
              {t.hero_badge[lang]}
            </span>
            <h1 className="text-[clamp(28px,5vw,52px)] font-black leading-[1.15] mb-5 tracking-[-0.02em]">
              {t.hero_title[lang].split("Greece").length > 1 ? (
                <>{t.hero_title[lang].split("Greece")[0]}<span className="text-[#fbbf24]">Greece</span>{t.hero_title[lang].split("Greece")[1]}</>
              ) : t.hero_title[lang]}
            </h1>
            <p className="text-[clamp(16px,2.5vw,20px)] opacity-92 max-w-[680px] mx-auto mb-9 leading-relaxed">{t.hero_subtitle[lang]}</p>
            <div className="flex gap-4 justify-center flex-wrap mb-9">
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl text-[17px] inline-flex items-center gap-2 transition-all shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="4 8 12 3 20 8"/><polyline points="4 16 12 21 20 16"/></svg>
                {t.hero_btn_plans[lang]}
              </button>

            </div>
            <div className="flex gap-6 justify-center flex-wrap text-sm opacity-90">
              {[
                t.hero_guarantee1[lang],
                t.hero_guarantee2[lang],
                t.hero_guarantee4[lang],
              ].map((g, i) => (
                <span key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#86efac]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {g}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRUST STATEMENT ===== */}
        <section className="bg-white py-14 px-6 border-b border-[#e2e8f0] text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.18] select-none">
            <svg viewBox="0 0 240 120" className="w-[320px] h-[160px] max-w-full">
              {/* Globe background */}
              <circle cx="120" cy="60" r="50" fill="rgba(26,111,196,0.04)" />
              {/* Globe outline */}
              <circle cx="120" cy="60" r="50" fill="none" stroke="#1a6fc4" strokeWidth="0.8" />
              {/* Meridians */}
              <ellipse cx="120" cy="60" rx="50" ry="18" fill="none" stroke="#1a6fc4" strokeWidth="0.4" />
              <ellipse cx="120" cy="60" rx="18" ry="50" fill="none" stroke="#1a6fc4" strokeWidth="0.4" />
              <line x1="120" y1="10" x2="120" y2="110" stroke="#1a6fc4" strokeWidth="0.3" />
              <line x1="70" y1="60" x2="170" y2="60" stroke="#1a6fc4" strokeWidth="0.3" />
              {/* Dots */}
              {[
                { cx: 72, cy: 30, delay: 0 },   // North America
                { cx: 85, cy: 80, delay: 0.4 }, // South America
                { cx: 108, cy: 24, delay: 0.8 }, // Europe
                { cx: 132, cy: 38, delay: 1.2 }, // Middle East
                { cx: 148, cy: 32, delay: 1.6 }, // Asia
                { cx: 170, cy: 82, delay: 2.0 }, // Australia
                { cx: 124, cy: 74, delay: 2.4 }, // Africa
              ].map((dot, i) => (
                <motion.circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={2}
                  fill="#1a6fc4"
                  initial={{ opacity: 0.3, r: 2.5 }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    r: [2.5, 5, 2.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: dot.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </svg>
          </div>
          <div className="relative z-10 max-w-[720px] mx-auto">
            <p className="text-[17px] text-[#475569] leading-relaxed">
              {t.trust_text[lang]}
            </p>
          </div>
        </section>

        {/* ===== PAIN POINTS ===== */}
        <section className="py-20 px-6 bg-[#f1f5f9]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.pain_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.pain_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.pain_subtitle[lang]}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {painPoints.map((p, i) => (
                <div key={i} className="bg-white border border-[#fee2e2] border-l-4 border-l-[#ef4444] rounded-xl p-6 flex items-start gap-4">
                  <span className="text-[22px] shrink-0">{p.icon}</span>
                  <div>
                    <strong className="block font-bold mb-1 text-[15px]">{go(p.title, lang)}</strong>
                    <span className="text-[14px] text-[#64748b]">{go(p.desc, lang)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 text-[22px] font-extrabold text-[#1a6fc4]">
              {t.pain_bottom[lang]} 👇
            </div>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.benefits_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.benefits_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.benefits_subtitle[lang]}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white border border-[#e2e8f0] rounded-[20px] p-7 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] hover:border-[#1a6fc4] transition-all">
                  <div className="w-14 h-14 bg-[#e8f1fc] rounded-xl flex items-center justify-center text-[26px] mb-4">{b.icon}</div>
                  <h3 className="text-[17px] font-bold mb-2">{go(b.title, lang)}</h3>
                  <p className="text-[14px] text-[#64748b] leading-relaxed">{go(b.desc, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LIVE EXAMPLE ===== */}
        <section className="py-20 px-6 bg-[#f1f5f9]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.live_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.live_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.live_subtitle[lang]}</p>
            </div>
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] border border-[#e2e8f0]">
              <div className="bg-gradient-to-r from-[#1a6fc4] to-[#0d4f9e] text-white px-7 py-5 flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <span className="font-bold text-[16px]">{t.live_header[lang]}</span>
              </div>
              <div className="p-8">
                <a href={`/${lang}/businesses/rolling-into-the-blue`} target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-br from-white to-[#f8fafc] rounded-xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all group">
                  <div className="relative h-48 bg-gradient-to-r from-[#1a6fc4] to-[#0d4f9e] flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                      <p className="text-sm font-semibold opacity-90">Rolling Into The Blue</p>
                      <p className="text-xs opacity-70 mt-0.5">{lang === "el" ? "Πατήστε για προβολή" : "Click to view live listing"}</p>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      {lang === "el" ? "Ζωντανό" : "Live"}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#e8f1fc] text-[#1a6fc4] text-[11px] font-bold px-2.5 py-0.5 rounded-full">Boat Tours</span>
                      <span className="bg-[#fef3c7] text-[#b45309] text-[11px] font-bold px-2.5 py-0.5 rounded-full">Kefalonia</span>
                    </div>
                    <p className="text-[13px] text-[#64748b] line-clamp-2">
                      {lang === "el" ? "Ιδιωτικές κρουαζιέρες & ενοικιάσεις σκαφών στη Ζόλα, Κεφαλονιά." : "Private cruises & no-license boat rentals in Zola, Kefalonia."}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-[12px] text-[#94a3b8]">
                      <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> Zola, Kefalonia</span>
                      <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {lang === "el" ? "Ανοιχτό τώρα" : "Open now"}</span>
                    </div>
                  </div>
                </a>
                <div className="flex gap-4 mt-5 flex-wrap">
                  <a href={`/${lang}/businesses/rolling-into-the-blue`} target="_blank" rel="noopener noreferrer" className="bg-[#1a6fc4] text-white font-semibold text-[14px] inline-flex items-center gap-1.5 px-5 py-2.5 border-2 border-[#1a6fc4] rounded-lg hover:bg-[#0d4f9e] transition-all shadow-sm">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    {lang === "el" ? "Δείτε το παράδειγμα" : "View This Listing"}
                  </a>
                  <a href="https://www.gogreecenow.com/en/hotels" target="_blank" rel="noopener noreferrer" className="text-[#1a6fc4] font-semibold text-[14px] inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#1a6fc4] rounded-lg hover:bg-[#1a6fc4] hover:text-white transition-all">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    {t.live_btn_hotels[lang]}
                  </a>
                  <a href="https://www.gogreecenow.com/en/destinations" target="_blank" rel="noopener noreferrer" className="text-[#1a6fc4] font-semibold text-[14px] inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#1a6fc4] rounded-lg hover:bg-[#1a6fc4] hover:text-white transition-all">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    {t.live_btn_guides[lang]}
                  </a>
                  <a href="https://www.gogreecenow.com/en/tours" target="_blank" rel="noopener noreferrer" className="text-[#1a6fc4] font-semibold text-[14px] inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#1a6fc4] rounded-lg hover:bg-[#1a6fc4] hover:text-white transition-all">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    {t.live_btn_tours[lang]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section className="py-20 px-6 bg-white" id="pricing">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.pricing_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.pricing_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.pricing_subtitle[lang]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Basic */}
              <div className="bg-white border-2 border-[#e2e8f0] rounded-[20px] p-8 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all">
                <div className="text-[13px] font-bold uppercase tracking-[1px] text-[#64748b] mb-2">{t.basic_name[lang]}</div>
                <div className="text-[48px] font-black text-[#1a1a2e] leading-none mb-1">{t.basic_price[lang]}</div>
                <div className="text-[13px] text-[#64748b] mb-6">{t.basic_period[lang]}</div>
                <div className="h-px bg-[#e2e8f0] my-5" />
                <ul className="mb-7 space-y-2">
                  {[
                    t.comp_yes[lang] + " Dedicated business page",
                    t.comp_yes[lang] + " Up to 5 photos",
                    t.comp_yes[lang] + " Business description (300 words)",
                    t.comp_yes[lang] + " Map pin & contact info",
                    t.comp_yes[lang] + " Direct link to your website",
                    t.comp_yes[lang] + " 1 category listing",
                    t.comp_yes[lang] + " Mobile-friendly display",
                    t.comp_no[lang] + " Featured in destination guides",
                    t.comp_no[lang] + " Social media promotion",
                  ].map((f, j) => (
                    <li key={j} className={`flex items-start gap-2.5 text-[14px] ${f.startsWith(t.comp_no[lang]) ? "text-[#94a3b8]" : "text-[#1a1a2e]"}`}>
                      <span className={`shrink-0 mt-0.5 ${f.startsWith(t.comp_no[lang]) ? "text-[#cbd5e1]" : "text-[#10b981]"}`}>
                        {f.startsWith(t.comp_no[lang]) ? "✗" : "✓"}
                      </span>
                      {f.substring(f.startsWith(t.comp_no[lang]) ? t.comp_no[lang].length : t.comp_yes[lang].length)}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="block w-full text-center py-3.5 rounded-xl font-bold text-[15px] border-2 border-[#1a6fc4] text-[#1a6fc4] hover:bg-[#1a6fc4] hover:text-white transition-all">
                  {lang === "el" ? "Ξεκινήστε" : "Get Started"} →
                </button>
              </div>

              {/* Premium (Most Popular) */}
              <div className="bg-white border-2 border-[#1a6fc4] rounded-[20px] p-8 shadow-[0_0_0_4px_rgba(26,111,196,0.1)] scale-[1.03] relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f97316] text-white text-[12px] font-bold uppercase px-5 py-1.5 rounded-full whitespace-nowrap tracking-[0.5px]">
                  ⭐ {t.premium_badge[lang]}
                </div>
                <div className="text-[13px] font-bold uppercase tracking-[1px] text-[#64748b] mb-2">{t.premium_name[lang]}</div>
                <div className="text-[48px] font-black text-[#1a1a2e] leading-none mb-1">{t.premium_price[lang]}</div>
                <div className="text-[13px] text-[#64748b] mb-6">{t.premium_period[lang]}</div>
                <div className="h-px bg-[#e2e8f0] my-5" />
                <ul className="mb-7 space-y-2">
                  {[
                    t.comp_yes[lang] + " Everything in Basic, PLUS:",
                    t.comp_yes[lang] + " Up to 15 photos",
                    t.comp_yes[lang] + " Extended description (600 words)",
                    t.comp_yes[lang] + " Featured in destination guide",
                    t.comp_yes[lang] + " 3 category listings",
                    t.comp_yes[lang] + " Social media shoutout (1x)",
                    t.comp_yes[lang] + " \"Recommended\" badge on listing",
                    t.comp_yes[lang] + " Priority placement in category",
                  ].map((f, j) => (
                    <li key={j} className={`flex items-start gap-2.5 text-[14px] ${f.startsWith(t.comp_no[lang]) ? "text-[#94a3b8]" : "text-[#1a1a2e]"}`}>
                      <span className={`shrink-0 mt-0.5 ${f.startsWith(t.comp_no[lang]) ? "text-[#cbd5e1]" : "text-[#10b981]"}`}>
                        {f.startsWith(t.comp_no[lang]) ? "✗" : "✓"}
                      </span>
                      {f.substring(f.startsWith(t.comp_no[lang]) ? t.comp_no[lang].length : t.comp_yes[lang].length)}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="block w-full text-center py-3.5 rounded-xl font-bold text-[15px] bg-[#1a6fc4] text-white hover:bg-[#1558a0] transition-all shadow-[0_4px_15px_rgba(26,111,196,0.3)]">
                  {lang === "el" ? "Ξεκινήστε" : "Get Started"} →
                </button>
              </div>

              {/* Featured */}
              <div className="bg-white border-2 border-[#e2e8f0] rounded-[20px] p-8 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all">
                <div className="text-[13px] font-bold uppercase tracking-[1px] text-[#64748b] mb-2">{t.featured_name[lang]}</div>
                <div className="text-[48px] font-black text-[#1a1a2e] leading-none mb-1">{t.featured_price[lang]}</div>
                <div className="text-[13px] text-[#64748b] mb-6">{t.featured_period[lang]}</div>
                <div className="h-px bg-[#e2e8f0] my-5" />
                <ul className="mb-7 space-y-2">
                  {[
                    t.comp_yes[lang] + " Everything in Premium, PLUS:",
                    t.comp_yes[lang] + " Up to 45 photos",
                    t.comp_yes[lang] + " Mention in a blog article",
                    t.comp_yes[lang] + " Dedicated social media post",
                    t.comp_yes[lang] + " Top position in category",
                    t.comp_yes[lang] + " Unlimited categories",
                    t.comp_yes[lang] + " Priority support & updates",
                  ].map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[14px] text-[#1a1a2e]">
                      <span className="shrink-0 mt-0.5 text-[#10b981]">✓</span>
                      {f.substring(f.startsWith(t.comp_no[lang]) ? t.comp_no[lang].length : t.comp_yes[lang].length)}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="block w-full text-center py-3.5 rounded-xl font-bold text-[15px] bg-gradient-to-r from-[#1a6fc4] to-[#0d4f9e] text-white hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(26,111,196,0.3)]">
                  {lang === "el" ? "Αποκτήστε μέγιστη προβολή" : "Get Maximum Exposure"} →
                </button>
              </div>
            </div>
            <p className="text-center text-[13px] text-[#94a3b8] mt-8">
              {lang === "el"
                ? "Οι παραπάνω τιμές δεν συμπεριλαμβάνουν ΦΠΑ 24%."
                : "Prices do not include 24% VAT."}
            </p>
          </div>
        </section>

        {/* ===== COMPARISON TABLE ===== */}
        <section className="py-20 px-6 bg-[#f1f5f9]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.comp_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.comp_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.comp_subtitle[lang]}</p>
            </div>
            <div className="overflow-x-auto rounded-[20px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <table className="w-full border-collapse bg-white min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1a6fc4] to-[#0d4f9e] text-white">
                    <th className="text-left py-5 px-5 text-[15px] font-bold">{t.comp_feature[lang]}</th>
                    <th className="text-center py-5 px-5 text-[15px] font-bold bg-white/15">{t.comp_ggn[lang]}</th>
                    <th className="text-center py-5 px-5 text-[15px] font-bold">{t.comp_booking[lang]}</th>
                    <th className="text-center py-5 px-5 text-[15px] font-bold">{t.comp_tripadvisor[lang]}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "comp_row1", ggn: "comp_row1_ggn", bc: "comp_row1_bc", ta: "comp_row1_ta" },
                    { f: "comp_row2", ggn: "comp_yes", bc: "comp_limited", ta: "comp_limited" },
                    { f: "comp_row3", ggn: "comp_yes", bc: "comp_no", ta: "comp_no" },
                    { f: "comp_row4", ggn: "comp_yes", bc: "comp_no", ta: "comp_no" },
                    { f: "comp_row5", ggn: "comp_yes", bc: "comp_no", ta: "comp_no" },
                    { f: "comp_row6", ggn: "comp_yes", bc: "comp_no", ta: "comp_no" },
                    { f: "comp_row7", ggn: "comp_yes", bc: "comp_no", ta: "comp_varies" },
                    { f: "comp_row8", ggn: "comp_yes", bc: "comp_no", ta: "comp_no" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#e2e8f0] hover:bg-[#f1f5f9] transition-colors">
                      <td className="py-4 px-5 text-[14px] font-semibold text-[#1a1a2e]">{go(row.f, lang)}</td>
                      <td className="text-center py-4 px-5 text-[14px] font-bold text-[#1a6fc4] bg-[rgba(26,111,196,0.05)]">{go(row.ggn, lang)}</td>
                      <td className="text-center py-4 px-5 text-[14px]">{go(row.bc, lang)}</td>
                      <td className="text-center py-4 px-5 text-[14px]">{go(row.ta, lang)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-6 text-[15px] text-[#64748b] italic">
              <strong className="text-[#1a6fc4]">{t.comp_bottom[lang]}</strong>
            </p>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.how_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.how_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.how_subtitle[lang]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howSteps.map((step, i) => (
                <div key={i} className="text-center bg-white rounded-[20px] p-9 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1a6fc4] to-[#0d4f9e] text-white rounded-full flex items-center justify-center text-[28px] font-black mx-auto mb-5">
                    {step.num}
                  </div>
                  <div className="text-[40px] mb-4">{step.icon}</div>
                  <h3 className="text-[19px] font-extrabold mb-3">{go(step.title, lang)}</h3>
                  <p className="text-[14px] text-[#64748b] mb-3">{go(step.desc, lang)}</p>
                  <span className="inline-flex items-center gap-1.5 bg-[#e8f1fc] text-[#1a6fc4] px-3.5 py-1.5 rounded-full text-[12px] font-bold">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {go(step.time, lang)}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl text-[17px] transition-all shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="4 8 12 3 20 8"/><polyline points="4 16 12 21 20 16"/></svg>
                {t.how_cta[lang]}
              </button>
            </div>
          </div>
        </section>



        {/* ===== WHO IS THIS FOR ===== */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.who_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.who_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.who_subtitle[lang]}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whoItems.map((item, i) => (
                <div key={i} className="bg-white border border-[#e2e8f0] rounded-[20px] p-6 flex items-start gap-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:translate-x-1 hover:border-[#1a6fc4] transition-all">
                  <div className="text-[32px] shrink-0 w-14 h-14 bg-[#e8f1fc] rounded-xl flex items-center justify-center">{item.icon}</div>
                  <div>
                    <h3 className="text-[16px] font-bold mb-1.5">{go(item.title, lang)}</h3>
                    <p className="text-[13px] text-[#64748b]">{go(item.desc, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 px-6 bg-[#f1f5f9]">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.faq_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.faq_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.faq_subtitle[lang]}</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`bg-white rounded-xl border border-[#e2e8f0] overflow-hidden ${openFaq === i ? "" : ""}`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full bg-none border-none px-6 py-5 text-left text-[15px] font-bold text-[#1a1a2e] cursor-pointer flex justify-between items-center gap-4 hover:bg-[#f1f5f9] transition-colors"
                  >
                    {go(faq.q, lang)}
                    <span className={`w-7 h-7 bg-[#e8f1fc] rounded-full flex items-center justify-center shrink-0 text-[#1a6fc4] text-[14px] transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96" : "max-h-0"}`}>
                    <div className="px-6 pb-5 text-[14px] text-[#64748b] leading-relaxed">
                      {go(faq.a, lang)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#0d2d5e] to-[#1a6fc4] text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)", top: "-50%", left: "-50%", width: "200%", height: "200%" }} />
          <div className="relative z-10 max-w-[680px] mx-auto">
            <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-5">{t.cta_label[lang]}</span>
            <h2 className="text-[clamp(26px,4vw,42px)] font-black text-white mb-4">{t.cta_title[lang]}</h2>
            <p className="text-[18px] text-white/90 mb-9">{t.cta_text[lang]}</p>
            <div className="flex gap-4 justify-center flex-wrap mb-7">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl text-[17px] inline-flex items-center gap-2 transition-all shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="4 8 12 3 20 8"/><polyline points="4 16 12 21 20 16"/></svg>
                {t.cta_btn1[lang]}
              </button>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/12 hover:bg-white/20 text-white border-2 border-white/40 font-semibold px-7 py-3.5 rounded-xl text-[17px] inline-flex items-center gap-2 transition-all backdrop-blur"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                {t.cta_btn2[lang]}
              </button>
            </div>
            <div className="flex gap-5 justify-center flex-wrap text-[13px] opacity-85">
              {[
                t.cta_g1[lang],
                t.cta_g3[lang],
              ].map((g, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#86efac]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {g}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT FORM ===== */}
        <section className="py-20 px-6 bg-[#f1f5f9]" id="contact-form">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#e8f1fc] text-[#1a6fc4] px-4 py-1.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] mb-4">{t.form_label[lang]}</span>
              <h2 className="text-[clamp(24px,4vw,38px)] font-extrabold leading-[1.2] mb-4 tracking-[-0.02em]">{t.form_title[lang]}</h2>
              <p className="text-[18px] text-[#64748b] max-w-[620px] mx-auto">{t.form_subtitle[lang]}</p>
            </div>
            <div className="bg-white rounded-[20px] p-8 sm:p-12 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] border border-[#e2e8f0]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-group">
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_business[lang]}</label>
                    <input required name="business_name" type="text" placeholder={t.form_placeholder_business[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                  <div className="form-group">
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_name[lang]}</label>
                    <input required name="name" type="text" placeholder={t.form_placeholder_name[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-group">
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_email[lang]}</label>
                    <input required name="email" type="email" placeholder={t.form_placeholder_email[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                  <div className="form-group">
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_phone[lang]}</label>
                    <input name="phone" type="tel" placeholder={t.form_placeholder_phone[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-group">
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_type[lang]}</label>
                    <select required name="business_type" className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)] bg-white">
                      {businessTypes.map((opt, j) => (
                        <option key={j} value={opt.v}>{go(opt.l, lang)}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_location[lang]}</label>
                    <input required name="location" type="text" placeholder={t.form_placeholder_location[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-group">
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_website[lang]}</label>
                    <input name="website" type="url" placeholder={t.form_placeholder_website[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                  <div className="form-group">
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_plan[lang]}</label>
                    <select name="preferred_plan" className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)] bg-white">
                      {planOptions.map((opt, j) => (
                        <option key={j} value={opt.v}>{go(opt.l, lang)}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_message[lang]}</label>
                  <textarea name="message" rows={4} placeholder={t.form_placeholder_message[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)] resize-y min-h-[120px]"></textarea>
                </div>
                <div className="hidden" aria-hidden="true" tabIndex={-1}>
                  <input name="website_url" type="text" autoComplete="off" />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full text-white font-bold py-4 rounded-xl text-[17px] flex items-center justify-center gap-2.5 transition-all ${
                    status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-[#f97316] hover:bg-[#ea6c0a] hover:-translate-y-0.5"
                  }`}
                >
                  {status === "loading" ? (
                    <>{t.form_sending[lang]}</>
                  ) : status === "success" ? (
                    <><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> {t.form_success[lang]}</>
                  ) : (
                    <><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg> {t.form_submit[lang]}</>
                  )}
                </button>
                {status === "error" && <p className="text-center text-sm text-red-600 font-semibold">{t.form_error[lang]}</p>}
                <p className="text-center text-[13px] text-[#64748b] mt-4">
                  <svg className="w-3.5 h-3.5 inline text-[#10b981] mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  {t.form_note[lang]}
                </p>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* CONTACT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a1628]/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#1a1a2e]">{t.form_title[lang]}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-[#1a1a2e] transition-colors text-3xl leading-none"
                >
                  &times;
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_business[lang]}</label>
                    <input required name="business_name" type="text" placeholder={t.form_placeholder_business[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_name[lang]}</label>
                    <input required name="name" type="text" placeholder={t.form_placeholder_name[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_email[lang]}</label>
                    <input required name="email" type="email" placeholder={t.form_placeholder_email[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_phone[lang]}</label>
                    <input name="phone" type="tel" placeholder={t.form_placeholder_phone[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_type[lang]}</label>
                    <select required name="business_type" className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)] bg-white">
                      {businessTypes.map((opt, j) => (
                        <option key={j} value={opt.v}>{go(opt.l, lang)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_location[lang]}</label>
                    <input required name="location" type="text" placeholder={t.form_placeholder_location[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_website[lang]}</label>
                    <input name="website" type="url" placeholder={t.form_placeholder_website[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)]" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_plan[lang]}</label>
                    <select name="preferred_plan" className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)] bg-white">
                      {planOptions.map((opt, j) => (
                        <option key={j} value={opt.v}>{go(opt.l, lang)}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.3px] mb-1.5">{t.form_message[lang]}</label>
                  <textarea name="message" rows={3} placeholder={t.form_placeholder_message[lang]} className="w-full border-2 border-[#e2e8f0] rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#1a6fc4] focus:shadow-[0_0_0_3px_rgba(26,111,196,0.1)] resize-y min-h-[100px]"></textarea>
                </div>
                <div className="hidden" aria-hidden="true" tabIndex={-1}>
                  <input name="website_url" type="text" autoComplete="off" />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full text-white font-bold py-4 rounded-xl text-[17px] flex items-center justify-center gap-2.5 transition-all ${
                    status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-[#f97316] hover:bg-[#ea6c0a] hover:-translate-y-0.5"
                  }`}
                >
                  {status === "loading" ? (
                    <>{t.form_sending[lang]}</>
                  ) : status === "success" ? (
                    <><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> {t.form_success[lang]}</>
                  ) : (
                    <><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg> {t.form_submit[lang]}</>
                  )}
                </button>
                {status === "error" && <p className="text-center text-sm text-red-600 font-semibold">{t.form_error[lang]}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
