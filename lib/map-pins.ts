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
    x: 40.1, y: 83.8,
    href: "/destinations/santorini",
    label: { en: "Santorini", el: "Σαντορίνη" },
    tagline: { en: "Iconic caldera views", el: "Εμβληματική θέα Καλντέρας" },
  },
  {
    id: "mykonos",
    x: 27.4, y: 23.7,
    href: "/destinations/mykonos",
    label: { en: "Mykonos", el: "Μύκονος" },
    tagline: { en: "Cosmopolitan island life", el: "Κοσμοπολίτικη νησιωτική ζωή" },
  },
  {
    id: "paros",
    x: 25.5, y: 24.1,
    href: "/destinations/paros",
    label: { en: "Paros", el: "Πάρος" },
    tagline: { en: "Beaches & traditional charm", el: "Παραλίες & παραδοσιακή γοητεία" },
  },
  {
    id: "milos",
    x: 25.4, y: 28.1,
    href: "/destinations/milos",
    label: { en: "Milos", el: "Μήλος" },
    tagline: { en: "Unique coastline & caves", el: "Μοναδικές ακτές & σπηλιές" },
  },
  {
    id: "crete",
    x: 22.8, y: 45.6,
    href: "/destinations/crete",
    label: { en: "Crete", el: "Κρήτη" },
    tagline: { en: "A world of its own", el: "Ένας ολόκληρος κόσμος" },
  },
  {
    id: "chania",
    x: 24.0, y: 41.7,
    href: "/destinations/chania",
    label: { en: "Chania", el: "Χανιά" },
    tagline: { en: "Venetian harbor & old town", el: "Ενετικό λιμάνι & παλιά πόλη" },
  },
  {
    id: "rhodes",
    x: 50.9, y: 35.6,
    href: "/destinations/rhodes",
    label: { en: "Rhodes", el: "Ρόδος" },
    tagline: { en: "Medieval old town & beaches", el: "Μεσαιωνική πόλη & παραλίες" },
  },
  {
    id: "patmos",
    x: 38.3, y: 21.0,
    href: "/destinations/patmos",
    label: { en: "Patmos", el: "Πάτμος" },
    tagline: { en: "Sacred island & quiet bays", el: "Ιερό νησί & ήσυχοι όρμοι" },
  },
  {
    id: "corfu",
    x: 6.0, y: 24.8,
    href: "/destinations/corfu",
    label: { en: "Corfu", el: "Κέρκυρα" },
    tagline: { en: "Lush green & elegant", el: "Καταπράσινο & κομψό" },
  },
  {
    id: "kefalonia",
    x: 12.3, y: 15.7,
    href: "/destinations/kefalonia",
    label: { en: "Kefalonia", el: "Κεφαλονιά" },
    tagline: { en: "Dramatic scenery & beaches", el: "Εντυπωσιακά τοπία & παραλίες" },
  },
  {
    id: "zakynthos",
    x: 14.6, y: 24.8,
    href: "/destinations/zakynthos",
    label: { en: "Zakynthos", el: "Ζάκυνθος" },
    tagline: { en: "Iconic shipwreck beach", el: "Εμβληματικό Ναυάγιο" },
  },
  {
    id: "lesvos",
    x: 77.7, y: 31.9,
    href: "/destinations/lesvos",
    label: { en: "Lesvos", el: "Λέσβος" },
    tagline: { en: "Food & tradition", el: "Γαστρονομία & παράδοση" },
  },
  {
    id: "athens",
    x: 33.8, y: 25.0,
    href: "/destinations/athens",
    label: { en: "Athens", el: "Αθήνα" },
    tagline: { en: "Ancient & modern capital", el: "Αρχαία & σύγχρονη πρωτεύουσα" },
  },
  {
    id: "thessaloniki",
    x: 27.5, y: 16.2,
    href: "/destinations/thessaloniki",
    label: { en: "Thessaloniki", el: "Θεσσαλονίκη" },
    tagline: { en: "Food & culture hub", el: "Κέντρο γαστρονομίας & πολιτισμού" },
  },
  {
    id: "halkidiki",
    x: 22.3, y: 23.9,
    href: "/destinations/halkidiki",
    label: { en: "Halkidiki", el: "Χαλκιδική" },
    tagline: { en: "Turquoise waters & pine", el: "Γαλαζοπράσινα νερά & πεύκα" },
  },
  {
    id: "nafplio",
    x: 25.3, y: 25.7,
    href: "/destinations/nafplio",
    label: { en: "Nafplio", el: "Ναύπλιο" },
    tagline: { en: "Romantic seaside town", el: "Ρομαντική παραθαλάσσια πόλη" },
  },
  {
    id: "monemvasia",
    x: 25.9, y: 31.1,
    href: "/destinations/monemvasia",
    label: { en: "Monemvasia", el: "Μονεμβασία" },
    tagline: { en: "Medieval fortress town", el: "Μεσαιωνική καστροπολιτεία" },
  },
  {
    id: "parga",
    x: 11.8, y: 27.8,
    href: "/destinations/parga",
    label: { en: "Parga", el: "Πάργα" },
    tagline: { en: "Colorful coastal gem", el: "Πολύχρωμο παραθαλάσσιο στολίδι" },
  },
  {
    id: "meteora",
    x: 25.1, y: 27.5,
    href: "/destinations/meteora",
    label: { en: "Meteora", el: "Μετέωρα" },
    tagline: { en: "Monasteries in the sky", el: "Μοναστήρια στον ουρανό" },
  },
  {
    id: "delphi",
    x: 26.9, y: 27.1,
    href: "/destinations/delphi",
    label: { en: "Delphi", el: "Δελφοί" },
    tagline: { en: "Center of the ancient world", el: "Κέντρο του αρχαίου κόσμου" },
  },
  {
    id: "patras",
    x: 23.5, y: 26.4,
    href: "/destinations/patras",
    label: { en: "Patras", el: "Πάτρα" },
    tagline: { en: "Gateway to the Ionian", el: "Πύλη προς το Ιόνιο" },
  },
];
