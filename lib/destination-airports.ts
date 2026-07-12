export const DESTINATION_AIRPORTS: Record<
  string,
  { icao: string; iata: string; name: string }
> = {
  athens: { icao: "LGAV", iata: "ATH", name: "Athens" },
  thessaloniki: { icao: "LGTS", iata: "SKG", name: "Thessaloniki" },
  crete: { icao: "LGIR", iata: "HER", name: "Heraklion" },
  heraklion: { icao: "LGIR", iata: "HER", name: "Heraklion" },
  chania: { icao: "LGNC", iata: "CHQ", name: "Chania" },
  santorini: { icao: "LGSR", iata: "JTR", name: "Santorini" },
  mykonos: { icao: "LGMK", iata: "JMK", name: "Mykonos" },
  rhodes: { icao: "LGRP", iata: "RHO", name: "Rhodes" },
  corfu: { icao: "LGKR", iata: "CFU", name: "Corfu" },
  kefalonia: { icao: "LGKF", iata: "EFL", name: "Kefalonia" },
  zakynthos: { icao: "LGZA", iata: "ZTH", name: "Zakynthos" },
  kos: { icao: "LGKO", iata: "KGS", name: "Kos" },
  lesvos: { icao: "LGMT", iata: "MJT", name: "Lesvos" },
  lemnos: { icao: "LGLM", iata: "LXS", name: "Lemnos" },
  chios: { icao: "LGCH", iata: "JKH", name: "Chios" },
  paros: { icao: "LGPA", iata: "PAS", name: "Paros" },
  naxos: { icao: "LGNX", iata: "JNX", name: "Naxos" },
  karpathos: { icao: "LGKP", iata: "AOK", name: "Karpathos" },
  milos: { icao: "LGML", iata: "MLO", name: "Milos" },
  skiathos: { icao: "LGSY", iata: "JSI", name: "Skiathos" },
  preveza: { icao: "LGPV", iata: "PVK", name: "Preveza" },
  lefkada: { icao: "LGPV", iata: "PVK", name: "Preveza" },
  kavala: { icao: "LGAL", iata: "KVA", name: "Kavala" },
  ikaria: { icao: "LGIK", iata: "JIK", name: "Ikaria" },
  samos: { icao: "LGSM", iata: "SMI", name: "Samos" },
  kalamata: { icao: "LGKL", iata: "KLX", name: "Kalamata" },
  patras: { icao: "LGRX", iata: "GPA", name: "Patras" },
};

export function getAirportForDestination(slug: string) {
  return DESTINATION_AIRPORTS[slug] ?? null;
}

const SEO_TEXT: Record<
  string,
  { en: string; el: string }
> = {
  default: {
    en: "{name} International Airport (IATA: {iata}) serves direct flights from Athens, Thessaloniki and major European cities. Airlines like Aegean, Sky Express, Volotea and Ryanair operate daily connections, especially during the April–October tourist season. Book early for the best fares, or check real-time departures above to plan your connection.",
    el: "Το Διεθνές Αεροδρόμιο {name} (IATA: {iata}) εξυπηρετεί απ' ευθείας πτήσεις από Αθήνα, Θεσσαλονίκη και μεγάλες ευρωπαϊκές πόλεις. Αεροπορικές εταιρείες όπως Aegean, SKY express, Volotea και Ryanair εκτελούν καθημερινές συνδέσεις, ιδιαίτερα κατά την τουριστική περίοδο Απριλίου–Οκτωβρίου. Κάντε κράτηση νωρίς για καλύτερες τιμές ή ελέγξτε τις ζωντανές αναχωρήσεις παρακάτω.",
  },
};

export function getSeoText(
  slug: string,
  airport: { iata: string; name: string }
): { en: string; el: string } {
  const tpl = SEO_TEXT[slug] ?? SEO_TEXT.default;
  return {
    en: tpl.en.replace(/{name}/g, airport.name).replace(/{iata}/g, airport.iata),
    el: tpl.el.replace(/{name}/g, airport.name).replace(/{iata}/g, airport.iata),
  };
}
