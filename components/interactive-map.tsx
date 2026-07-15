"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { Lang } from "../lib/content";
import { MAP_PINS } from "../lib/map-pins";

type Props = {
  lang: Lang;
  withLang: (path: string) => string;
  onRegionClick?: (svgId: string) => void;
};

const REGION_COLORS: Record<string, string> = {
  GRL: "#3b82f6",
  GRF: "#22c55e",
  GRK: "#a855f7",
  GRM: "#ef4444",
  GRJ: "#ec4899",
  GRA1: "#f59e0b",
  GRB: "#14b8a6",
  GRD: "#06b6d4",
  GRE: "#f43f5e",
  GRH: "#8b5cf6",
  GRG: "#f97316",
  GRC: "#6366f1",
  GRA: "#10b981",
  GR69: "#64748b",
};

const REGION_HOVER: Record<string, string> = {
  GRL: "#2563eb",
  GRF: "#16a34a",
  GRK: "#9333ea",
  GRM: "#dc2626",
  GRJ: "#db2777",
  GRA1: "#d97706",
  GRB: "#0d9488",
  GRD: "#0891b2",
  GRE: "#e11d48",
  GRH: "#7c3aed",
  GRG: "#ea580c",
  GRC: "#4f46e5",
  GRA: "#059669",
  GR69: "#475569",
};

const DEFAULT_FILL = "#d1d5db";
const DEFAULT_HOVER = "#b4b9c0";
const STROKE_COLOR = "#ffffff";
const STROKE_WIDTH = "0.5";

type RegionPopup = {
  id: string;
  title: { en: string; el: string };
  tagline: { en: string; el: string };
  bestFor: { en: string; el: string };
  topIslands: { en: string; el: string };
  href: string;
};

const POPUP_DATA: Record<string, RegionPopup> = {
  GRL: {
    id: "GRL",
    title: { en: "South Aegean", el: "Νότιο Αιγαίο" },
    tagline: { en: "Best for iconic island-hopping", el: "Καλύτερο για εμβληματικό island hopping" },
    bestFor: { en: "First-time visitors, couples, summer atmosphere", el: "Πρώτο ταξίδι, ζευγάρια, καλοκαιρινή ατμόσφαιρα" },
    topIslands: { en: "Santorini, Mykonos, Rhodes, Naxos, Paros, Kos", el: "Σαντορίνη, Μύκονος, Ρόδος, Νάξος, Πάρος, Κως" },
    href: "/travel-info/greece-islands-map-guide#south-aegean",
  },
  GRF: {
    id: "GRF",
    title: { en: "Ionian Islands", el: "Ιόνια Νησιά" },
    tagline: { en: "Best for greenery and beaches", el: "Καλύτερο για πράσινο και παραλίες" },
    bestFor: { en: "Families, beach holidays, relaxed island trips", el: "Οικογένειες, παραθαλάσσιες διακοπές, χαλαρό trip" },
    topIslands: { en: "Corfu, Kefalonia, Zakynthos, Lefkada", el: "Κέρκυρα, Κεφαλονιά, Ζάκυνθος, Λευκάδα" },
    href: "/travel-info/greece-islands-map-guide#ionian",
  },
  GRK: {
    id: "GRK",
    title: { en: "North Aegean", el: "Βόρειο Αιγαίο" },
    tagline: { en: "Best for authentic, slower travel", el: "Καλύτερο για αυθεντικό και πιο αργό ταξίδι" },
    bestFor: { en: "Authentic trips, local food, return visitors", el: "Αυθεντικά ταξίδια, τοπική γαστρονομία" },
    topIslands: { en: "Lesvos, Ikaria, Chios, Samos", el: "Λέσβος, Ικαρία, Χίος, Σάμος" },
    href: "/travel-info/greece-islands-map-guide#north-aegean",
  },
  GRM: {
    id: "GRM",
    title: { en: "Crete", el: "Κρήτη" },
    tagline: { en: "Best for everything in one destination", el: "Καλύτερο για τα πάντα σε έναν προορισμό" },
    bestFor: { en: "Longer holidays, families, food lovers", el: "Μεγαλύτερες διακοπές, οικογένειες" },
    topIslands: { en: "Chania, Heraklion, Rethymno, Elounda", el: "Χανιά, Ηράκλειο, Ρέθυμνο, Ελούντα" },
    href: "/travel-info/greece-islands-map-guide#crete",
  },
  GRJ: {
    id: "GRJ",
    title: { en: "Peloponnese", el: "Πελοπόννησος" },
    tagline: { en: "Best for history and road trips", el: "Καλύτερο για ιστορία και road trips" },
    bestFor: { en: "History lovers, archaeology, food and wine", el: "Ιστορία, αρχαιολογία, φαγητό και κρασί" },
    topIslands: { en: "Nafplio, Monemvasia, Kalamata, Mani", el: "Ναύπλιο, Μονεμβασία, Καλαμάτα, Μάνη" },
    href: "/travel-info/greece-islands-map-guide#peloponnese",
  },
  GRA1: {
    id: "GRA1",
    title: { en: "Attica & Argo-Saronic", el: "Αττική & Αργοσαρωνικός" },
    tagline: { en: "Best for short breaks from Athens", el: "Καλύτερο για σύντομες αποδράσεις από Αθήνα" },
    bestFor: { en: "Athens add-ons, short island trips, couples", el: "Συνδυασμός με Αθήνα, σύντομο trip" },
    topIslands: { en: "Hydra, Spetses, Aegina, Poros", el: "Ύδρα, Σπέτσες, Αίγινα, Πόρος" },
    href: "/travel-info/greece-islands-map-guide#argo-saronic",
  },
  GRB: {
    id: "GRB",
    title: { en: "Central Macedonia", el: "Κεντρική Μακεδονία" },
    tagline: { en: "Best for history & city culture", el: "Καλύτερο για ιστορία & πολιτιστική ζωή" },
    bestFor: { en: "City breaks, Byzantine history, food", el: "City breaks, Βυζαντινή ιστορία, φαγητό" },
    topIslands: { en: "Thessaloniki, Halkidiki, Mount Athos", el: "Θεσσαλονίκη, Χαλκιδική, Άγιον Όρος" },
    href: "/travel-info/greece-islands-map-guide#central-macedonia",
  },
  GRD: {
    id: "GRD",
    title: { en: "Epirus", el: "Ήπειρος" },
    tagline: { en: "Best for mountain villages & Ionian coast", el: "Καλύτερο για ορεινά χωριά & Ιόνια ακτή" },
    bestFor: { en: "Mountain escapes, stone bridges, rafting", el: "Ορεινές αποδράσεις, πέτρινες γέφυρες, ράφτινγκ" },
    topIslands: { en: "Parga, Zagori, Ioannina, Metsovo", el: "Πάργα, Ζαγόρι, Ιωάννινα, Μέτσοβο" },
    href: "/travel-info/greece-islands-map-guide#epirus",
  },
  GRE: {
    id: "GRE",
    title: { en: "Thessaly", el: "Θεσσαλία" },
    tagline: { en: "Best for Meteora & diverse landscapes", el: "Καλύτερο για Μετέωρα & ποικίλα τοπία" },
    bestFor: { en: "Meteora, Mount Pelion, hiking, skiing", el: "Μετέωρα, Πήλιο, πεζοπορία, σκι" },
    topIslands: { en: "Meteora, Mount Pelion, Skiathos, Skopelos", el: "Μετέωρα, Πήλιο, Σκιάθος, Σκόπελος" },
    href: "/travel-info/greece-islands-map-guide#sporades",
  },
  GRH: {
    id: "GRH",
    title: { en: "Central Greece", el: "Στερεά Ελλάδα" },
    tagline: { en: "Best for Delphi & ancient sites", el: "Καλύτερο για Δελφούς & αρχαίους τόπους" },
    bestFor: { en: "Archaeology, mountain monasteries, road trips", el: "Αρχαιολογία, ορεινά μοναστήρια, road trips" },
    topIslands: { en: "Delphi, Arachova, Evia, Nafpaktos", el: "Δελφοί, Αράχοβα, Εύβοια, Ναύπακτος" },
    href: "/travel-info/greece-islands-map-guide#central-greece",
  },
  GRG: {
    id: "GRG",
    title: { en: "Western Greece", el: "Δυτική Ελλάδα" },
    tagline: { en: "Best for Patras & Peloponnese west coast", el: "Καλύτερο για Πάτρα & δυτική ακτή Πελοποννήσου" },
    bestFor: { en: "Carnival, ancient Olympia, wine", el: "Καρναβάλι, αρχαία Ολυμπία, κρασί" },
    topIslands: { en: "Patras, Ancient Olympia, Kalavryta", el: "Πάτρα, Αρχαία Ολυμπία, Καλάβρυτα" },
    href: "/travel-info/greece-islands-map-guide#western-greece",
  },
  GRC: {
    id: "GRC",
    title: { en: "Western Macedonia", el: "Δυτική Μακεδονία" },
    tagline: { en: "Best for lakes & mountain scenery", el: "Καλύτερο για λίμνες & ορεινά τοπία" },
    bestFor: { en: "Lake Prespes, Vermio, winter sports", el: "Λίμνη Πρεσπών, Βέρμιο, χειμερινά σπορ" },
    topIslands: { en: "Kastoria, Florina, Prespes, Edessa", el: "Καστοριά, Φλώρινα, Πρέσπες, Έδεσσα" },
    href: "/travel-info/greece-islands-map-guide#western-macedonia",
  },
  GRA: {
    id: "GRA",
    title: { en: "Eastern Macedonia & Thrace", el: "Ανατολική Μακεδονία & Θράκη" },
    tagline: { en: "Best for pristine nature & border culture", el: "Καλύτερο για άγρια φύση & συνοριακό πολιτισμό" },
    bestFor: { en: "Off-the-beaten-path, birdwatching, hot springs", el: "Μακριά από τα δρομολόγια, birdwatching, ιαματικές" },
    topIslands: { en: "Kavala, Alexandroupoli, Dadia Forest", el: "Καβάλα, Αλεξανδρούπολη, Δάσος Δαδίας" },
    href: "/travel-info/greece-islands-map-guide#eastern-macedonia",
  },
  GR69: {
    id: "GR69",
    title: { en: "Mount Athos", el: "Άγιον Όρος" },
    tagline: { en: "Orthodox monastic republic", el: "Ορθόδοξη μοναστική πολιτεία" },
    bestFor: { en: "Pilgrimage, hiking, monastic heritage", el: "Προσκύνημα, πεζοπορία, μοναστική κληρονομιά" },
    topIslands: { en: "20 monasteries, Karyes, Ouranoupoli boat", el: "20 μοναστήρια, Καρυές, βάρκα από Ουρανούπολη" },
    href: "/travel-info/greece-islands-map-guide#mount-athos",
  },
};

const MAINLAND_IDS = new Set(["GRC", "GRD", "GRB", "GRA", "GR69", "GRE", "GRH", "GRG"]);

const MAINLAND_INFO: Record<string, { en: string; el: string }> = {
  GRC: { en: "Western Macedonia", el: "Δυτική Μακεδονία" },
  GRD: { en: "Epirus", el: "Ήπειρος" },
  GRB: { en: "Central Macedonia", el: "Κεντρική Μακεδονία" },
  GRA: { en: "Eastern Macedonia & Thrace", el: "Ανατολική Μακεδονία & Θράκη" },
  GR69: { en: "Mount Athos", el: "Άγιον Όρος" },
  GRE: { en: "Thessaly", el: "Θεσσαλία" },
  GRH: { en: "Central Greece", el: "Στερεά Ελλάδα" },
  GRG: { en: "Western Greece", el: "Δυτική Ελλάδα" },
};

export default function InteractiveMap({ lang, withLang, onRegionClick }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [activePin, setActivePin] = useState<string | null>(null);
  const [popupPos, setPopupPos] = useState<{ x: number; y: number } | null>(null);
  const [debug, setDebug] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);
  const activeRef = useRef<string | null>(null);
  const activePinRef = useRef<string | null>(null);
  const onRegionClickRef = useRef(onRegionClick);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    activePinRef.current = activePin;
  }, [activePin]);

  useEffect(() => {
    onRegionClickRef.current = onRegionClick;
  }, [onRegionClick]);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    fetch("/gr.svg")
      .then((r) => r.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const svg = doc.querySelector("svg");
        if (!svg || !svgContainerRef.current) return;

        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.removeAttribute("viewbox");
        svg.setAttribute("viewBox", "0 0 1000 1000");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.style.width = "100%";
        svg.style.height = "100%";

        svgContainerRef.current.innerHTML = "";
        svgContainerRef.current.appendChild(document.importNode(svg, true));

        const paths = svgContainerRef.current.querySelectorAll<SVGPathElement>("#features path");
        paths.forEach((path) => {
          const id = path.getAttribute("id");
          if (!id) return;

          const fill = REGION_COLORS[id] || DEFAULT_FILL;
          path.setAttribute("fill", fill);
          path.setAttribute("stroke", STROKE_COLOR);
          path.setAttribute("stroke-width", STROKE_WIDTH);
          path.setAttribute("data-original-fill", fill);
          path.style.cursor = "pointer";
          path.style.transition = "fill 0.15s, stroke-width 0.15s";

          path.addEventListener("mouseenter", () => {
            path.setAttribute("fill", REGION_HOVER[id] || DEFAULT_HOVER);
            path.setAttribute("stroke-width", "1.5");
            setHovered(id);
          });

          path.addEventListener("mousemove", (e: MouseEvent) => {
            const container = containerRef.current;
            if (!container) return;
            const rect = container.getBoundingClientRect();
            setHoverPos({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          });

          path.addEventListener("mouseleave", () => {
            const currentFill = path.getAttribute("data-original-fill") || fill;
            path.setAttribute("fill", currentFill);
            path.setAttribute("stroke-width", STROKE_WIDTH);
            setHovered(null);
          });

          path.addEventListener("click", (e) => {
            e.stopPropagation();
            setActivePin(null);
            setActive(null);
            if (onRegionClickRef.current) {
              onRegionClickRef.current(id);
            } else {
              const svgEl = svgContainerRef.current?.querySelector("svg");
              if (!svgEl || !containerRef.current) return;
              const svgRect = svgEl.getBoundingClientRect();
              const containerRect = containerRef.current.getBoundingClientRect();
              const relX = svgRect.left - containerRect.left + svgRect.width / 2;
              const relY = svgRect.top - containerRect.top + svgRect.height / 2;
              setPopupPos({ x: relX, y: relY });
              setActive(activeRef.current === id ? null : id);
            }
          });
        });
      });
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActive(null);
        setActivePin(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActive(null);
        setActivePin(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const activePopup = active ? POPUP_DATA[active] : null;
  const isMainland = active ? MAINLAND_IDS.has(active) : false;
  const mainlandName = active && isMainland ? MAINLAND_INFO[active] : null;
  const showRegionPopup = activePopup || (isMainland && mainlandName);

  const currentPin = activePin ? MAP_PINS.find((p) => p.id === activePin) : null;

  return (
    <div ref={containerRef} className="relative w-full select-none aspect-square">
      <div
        ref={svgContainerRef}
        className="w-full h-full rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden bg-white"
      />

      {debug && MAP_PINS.map((pin) => (
        <span
          key={`debug-${pin.id}`}
          className="absolute z-10 pointer-events-none text-[8px] font-mono font-bold text-red-600 bg-yellow-300/80 rounded px-0.5 leading-none"
          style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, 4px)" }}
        >
          {pin.id}
        </span>
      ))}

      {hovered && (
        <div
          className="absolute z-10 pointer-events-none px-2.5 py-1 rounded-lg bg-slate-900/85 text-white text-xs font-semibold backdrop-blur-sm shadow-lg whitespace-nowrap"
          style={{
            left: `${hoverPos.x}%`,
            top: `${hoverPos.y}%`,
            transform: "translate(-50%, calc(-100% - 12px))",
          }}
        >
          {POPUP_DATA[hovered]?.title[lang] ?? MAINLAND_INFO[hovered]?.[lang] ?? hovered}
        </div>
      )}

      <button
        type="button"
        onClick={() => setDebug((d) => !d)}
        className="absolute top-3 right-3 z-30 text-xs font-mono px-2 py-1 rounded bg-slate-800/80 text-white/70 hover:text-white transition"
      >
        {debug ? "Hide IDs" : "Debug"}
      </button>

      {MAP_PINS.map((pin) => (
        <button
          key={pin.id}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setActive(null);
            setActivePin(activePinRef.current === pin.id ? null : pin.id);
          }}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          aria-label={pin.label[lang]}
        >
          <span className="block w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-600 border-2 border-white shadow-lg transition-all duration-200 group-hover:scale-150 group-hover:bg-indigo-500 group-hover:shadow-indigo-400/50" />
        </button>
      ))}

      {currentPin && (
        <div
          ref={tooltipRef}
          className="absolute z-20 w-56 rounded-xl border border-slate-200 bg-white shadow-2xl p-4 pointer-events-auto"
          style={{
            left: `${currentPin.x}%`,
            top: `${currentPin.y}%`,
            transform:
              currentPin.y < 30
                ? "translate(-50%, 20px)"
                : currentPin.x > 75
                  ? "translate(-100%, -50%)"
                  : "translate(-50%, -120%)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-0.5">
            {lang === "en" ? "Destination" : "Προορισμός"}
          </p>
          <p className="text-base font-bold text-slate-900 mb-1">
            {currentPin.label[lang]}
          </p>
          <p className="text-xs text-slate-500 mb-3 leading-snug">
            {currentPin.tagline[lang]}
          </p>
          <Link
            href={withLang(currentPin.href)}
            className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-500"
            onClick={() => setActivePin(null)}
          >
            {lang === "en" ? "View guide \u2192" : "\u03A6\u03B5\u03B3 \u03BF\u03B4\u03B7\u03B3\u03CC \u03B5\u03BD\u03AC"}
          </Link>
        </div>
      )}

      {showRegionPopup && (
        <div
          ref={tooltipRef}
          className="absolute z-30 w-72 md:w-80 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md shadow-2xl p-5 pointer-events-auto"
          style={{
            left: `${popupPos?.x ?? 50}%`,
            top: `${popupPos?.y ?? 50}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: active ? (REGION_COLORS[active] || DEFAULT_FILL) : DEFAULT_FILL }}
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              className="text-slate-400 hover:text-slate-600 text-lg leading-none"
            >
              &times;
            </button>
          </div>

          {activePopup ? (
            <>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {activePopup.title[lang]}
              </h3>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: REGION_COLORS[activePopup.id] || "#6b7280" }}
              >
                {activePopup.tagline[lang]}
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-800">
                    {lang === "en" ? "Best for: " : "\u039A\u03B1\u03C4\u03AC\u03BB\u03BB\u03B7\u03BB\u03BF \u03B3\u03B9\u03B1: "}
                  </span>
                  {activePopup.bestFor[lang]}
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    {lang === "en" ? "Top spots: " : "\u039A\u03BF\u03C1\u03C5\u03C6\u03B1\u03AF\u03BF\u03B9: "}
                  </span>
                  {activePopup.topIslands[lang]}
                </p>
              </div>
              <Link
                href={withLang(activePopup.href)}
                className="mt-4 inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: REGION_COLORS[activePopup.id] || "#6b7280" }}
                onClick={() => setActive(null)}
              >
                {lang === "en" ? "Read more" : "\u03A0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B1"} &rarr;
              </Link>
            </>
          ) : mainlandName ? (
            <>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {mainlandName[lang]}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === "en" ? "Mainland region of Greece" : "\u0397\u03C0\u03B5\u03B9\u03C1\u03C9\u03C4\u03B9\u03BA\u03AE \u03C0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE \u03C4\u03B7\u03C2 \u0395\u03BB\u03BB\u03AC\u03B4\u03B1\u03C2"}
              </p>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}
