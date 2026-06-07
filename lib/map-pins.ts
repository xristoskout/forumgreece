export type Pin = {
  id: string;
  x: number;
  y: number;
  href: string;
  label: { en: string; el: string };
  tagline: { en: string; el: string };
};

/*
  ── HOW TO ADD A NEW DESTINATION PIN ──
  1. Open the map image: https://www.gogreecenow.com/images/greece-islands-map-guide.webp
  2. In browser console (F12), paste:
       document.addEventListener('click', e => {
         const x = Math.round(e.offsetX / e.target.clientWidth * e.target.naturalWidth);
         const y = Math.round(e.offsetY / e.target.clientHeight * e.target.naturalHeight);
         console.log(x, y);
        })
  3. Click on the destination spot on the map
  4. Add a new entry below with:
       x: Math.round(clickX / 1024 * 1000) / 10,
       y: Math.round(clickY / 1024 * 1000) / 10,
     href: "/destinations/<slug>",
*/

export const MAP_PINS: Pin[] = [
  {
    id: "santorini",
    x: 62.8, y: 68.3,
    href: "/destinations/santorini",
    label: { en: "Santorini", el: "Σαντορίνη" },
    tagline: { en: "Iconic caldera views", el: "Εμβληματική θέα Καλντέρας" },
  },
  {
    id: "mykonos",
    x: 62.1, y: 56.2,
    href: "/destinations/mykonos",
    label: { en: "Mykonos", el: "Μύκονος" },
    tagline: { en: "Cosmopolitan island life", el: "Κοσμοπολίτικη νησιωτική ζωή" },
  },
  {
    id: "paros",
    x: 60.3, y: 60.9,
    href: "/destinations/paros",
    label: { en: "Paros", el: "Πάρος" },
    tagline: { en: "Beaches & traditional charm", el: "Παραλίες & παραδοσιακή γοητεία" },
  },
  {
    id: "naxos",
    x: 63, y: 60.7,
    href: "/destinations/naxos",
    label: { en: "Naxos", el: "Νάξος" },
    tagline: { en: "Beaches & mountain villages", el: "Παραλίες & ορεινά χωριά" },
  },
  {
    id: "milos",
    x: 53.1, y: 65.1,
    href: "/destinations/milos",
    label: { en: "Milos", el: "Μήλος" },
    tagline: { en: "Unique coastline & caves", el: "Μοναδικές ακτές & σπηλιές" },
  },
  {
    id: "crete",
    x: 58.3, y: 82.3,
    href: "/destinations/crete",
    label: { en: "Crete", el: "Κρήτη" },
    tagline: { en: "A world of its own", el: "Ένας ολόκληρος κόσμος" },
  },
  {
    id: "chania",
    x: 49.3, y: 78.6,
    href: "/destinations/chania",
    label: { en: "Chania", el: "Χανιά" },
    tagline: { en: "Venetian harbor & old town", el: "Ενετικό λιμάνι & παλιά πόλη" },
  },
  {
    id: "rhodes",
    x: 86.2, y: 70.3,
    href: "/destinations/rhodes",
    label: { en: "Rhodes", el: "Ρόδος" },
    tagline: { en: "Medieval old town & beaches", el: "Μεσαιωνική πόλη & παραλίες" },
  },
  {
    id: "patmos",
    x: 72.8, y: 57.9,
    href: "/destinations/patmos",
    label: { en: "Patmos", el: "Πάτμος" },
    tagline: { en: "Sacred island & quiet bays", el: "Ιερό νησί & ήσυχοι όρμοι" },
  },
  {
    id: "corfu",
    x: 11.8, y: 30.7,
    href: "/destinations/corfu",
    label: { en: "Corfu", el: "Κέρκυρα" },
    tagline: { en: "Lush green & elegant", el: "Καταπράσινο & κομψό" },
  },
  {
    id: "kefalonia",
    x: 18.4, y: 46.9,
    href: "/destinations/kefalonia",
    label: { en: "Kefalonia", el: "Κεφαλονιά" },
    tagline: { en: "Dramatic scenery & beaches", el: "Εντυπωσιακά τοπία & παραλίες" },
  },
  {
    id: "zakynthos",
    x: 20.1, y: 52.6,
    href: "/destinations/zakynthos",
    label: { en: "Zakynthos", el: "Ζάκυνθος" },
    tagline: { en: "Iconic shipwreck beach", el: "Εμβληματικό Ναυάγιο" },
  },
  {
    id: "lesvos",
    x: 70.6, y: 36.9,
    href: "/destinations/lesvos",
    label: { en: "Lesvos", el: "Λέσβος" },
    tagline: { en: "Food & tradition", el: "Γαστρονομία & παράδοση" },
  },
  {
    id: "aegina",
    x: 44.7, y: 53.2,
    href: "/destinations/aegina",
    label: { en: "Aegina", el: "Αίγινα" },
    tagline: { en: "Temple of Aphaia & pistachios", el: "Ναός Αφαίας & φιστίκια" },
  },
  {
    id: "athens",
    x: 46.7, y: 50.5,
    href: "/destinations/athens",
    label: { en: "Athens", el: "Αθήνα" },
    tagline: { en: "Ancient & modern capital", el: "Αρχαία & σύγχρονη πρωτεύουσα" },
  },
  {
    id: "thessaloniki",
    x: 40.4, y: 19.7,
    href: "/destinations/thessaloniki",
    label: { en: "Thessaloniki", el: "Θεσσαλονίκη" },
    tagline: { en: "Food & culture hub", el: "Κέντρο γαστρονομίας & πολιτισμού" },
  },
  {
    id: "halkidiki",
    x: 44.5, y: 27.2,
    href: "/destinations/halkidiki",
    label: { en: "Halkidiki", el: "Χαλκιδική" },
    tagline: { en: "Turquoise waters & pine", el: "Γαλαζοπράσινα νερά & πεύκα" },
  },
  {
    id: "nafplio",
    x: 38.4, y: 54.7,
    href: "/destinations/nafplio",
    label: { en: "Nafplio", el: "Ναύπλιο" },
    tagline: { en: "Romantic seaside town", el: "Ρομαντική παραθαλάσσια πόλη" },
  },
  {
    id: "monemvasia",
    x: 40.3, y: 67.0,
    href: "/destinations/monemvasia",
    label: { en: "Monemvasia", el: "Μονεμβασία" },
    tagline: { en: "Medieval fortress town", el: "Μεσαιωνική καστροπολιτεία" },
  },
  {
    id: "parga",
    x: 17.0, y: 34.9,
    href: "/destinations/parga",
    label: { en: "Parga", el: "Πάργα" },
    tagline: { en: "Colorful coastal gem", el: "Πολύχρωμο παραθαλάσσιο στολίδι" },
  },
  {
    id: "meteora",
    x: 29.4, y: 30.2,
    href: "/destinations/meteora",
    label: { en: "Meteora", el: "Μετέωρα" },
    tagline: { en: "Monasteries in the sky", el: "Μοναστήρια στον ουρανό" },
  },
  {
    id: "delphi",
    x: 35.3, y: 44.4,
    href: "/destinations/delphi",
    label: { en: "Delphi", el: "Δελφοί" },
    tagline: { en: "Center of the ancient world", el: "Κέντρο του αρχαίου κόσμου" },
  },
  {
    id: "patras",
    x: 29.3, y: 47.9,
    href: "/destinations/patras",
    label: { en: "Patras", el: "Πάτρα" },
    tagline: { en: "Gateway to the Ionian", el: "Πύλη προς το Ιόνιο" },
  },
  {
    id: "kalamata",
    x: 31.6, y: 61.1,
    href: "/destinations/kalamata",
    label: { en: "Kalamata", el: "Καλαμάτα" },
    tagline: { en: "Peloponnese coastal city", el: "Παραθαλάσσια πόλη Πελοποννήσου" },
  },
  {
    id: "skiathos",
    x: 45.0, y: 37.5,
    href: "/destinations/skiathos",
    label: { en: "Skiathos", el: "Σκιάθος" },
    tagline: { en: "Pine forests & turquoise waters", el: "Πεύκα & τιρκουάζ νερά" },
  },
  {
    id: "skopelos",
    x: 46.7, y: 37.2,
    href: "/destinations/skopelos",
    label: { en: "Skopelos", el: "Σκόπελος" },
    tagline: { en: "The greenest island", el: "Το πιο πράσινο νησί" },
  },
  {
    id: "thassos",
    x: 55.1, y: 19.2,
    href: "/destinations/thassos",
    label: { en: "Thassos", el: "Θάσος" },
    tagline: { en: "Greece's greenest island", el: "Το πιο πράσινο νησί της Ελλάδας" },
  },
  {
    id: "lemnos",
    x: 59.9, y: 27.7,
    href: "/destinations/lemnos",
    label: { en: "Lemnos", el: "Λήμνος" },
    tagline: { en: "Aegean island escape", el: "Αιγαιοπελαγίτικη απόδραση" },
  },
  {
    id: "ikaria",
    x: 68.7, y: 54.8,
    href: "/destinations/ikaria",
    label: { en: "Ikaria", el: "Ικαρία" },
    tagline: { en: "The Blue Zone island", el: "Το νησί της μακροζωίας" },
  },
  {
    id: "evia",
    x: 48.07, y: 44.05,
    href: "/destinations/evia",
    label: { en: "Evia", el: "Εύβοια" },
    tagline: { en: "Wild nature & thermal springs", el: "Άγρια φύση & ιαματικές πηγές" },
  },
  {
    id: "lefkada",
    x: 19.1, y: 41.7,
    href: "/destinations/lefkada",
    label: { en: "Lefkada", el: "Λευκάδα" },
    tagline: { en: "Turquoise beaches & drive access", el: "Τιρκουάζ παραλίες & οδική πρόσβαση" },
  },
  {
    id: "kos",
    x: 77.5, y: 63.5,
    href: "/destinations/kos",
    label: { en: "Kos", el: "Κως" },
    tagline: { en: "History, beaches & cycling", el: "Ιστορία, παραλίες & ποδήλατο" },
  },
  {
    id: "rethymno",
    x: 53.6, y: 80.3,
    href: "/destinations/rethymno",
    label: { en: "Rethymno", el: "Ρέθυμνο" },
    tagline: { en: "Venetian old town & Fortezza", el: "Ενετική πόλη & Φορτέτζα" },
  },
  {
    id: "heraklion",
    x: 59.8, y: 80.7,
    href: "/destinations/heraklion",
    label: { en: "Heraklion", el: "Ηράκλειο" },
    tagline: { en: "Knossos, market & Venetian harbour", el: "Κνωσός, αγορά & ενετικό λιμάνι" },
  },
  {
    id: "lasithi",
    x: 64.8, y: 82.4,
    href: "/destinations/lasithi",
    label: { en: "Lasithi", el: "Λασίθι" },
    tagline: { en: "Spinalonga & eastern Crete", el: "Σπιναλόγκα & ανατολική Κρήτη" },
  },
  {
    id: "syros",
    x: 57.8, y: 56.4,
    href: "/destinations/syros",
    label: { en: "Syros", el: "Σύρος" },
    tagline: { en: "Capital of the Cyclades", el: "Πρωτεύουσα των Κυκλάδων" },
  },
  {
    id: "tinos",
    x: 59.8, y: 54.5,
    href: "/destinations/tinos",
    label: { en: "Tinos", el: "Τήνος" },
    tagline: { en: "Sacred island & marble capital", el: "Ιερό νησί & πρωτεύουσα μαρμάρου" },
  },
];
