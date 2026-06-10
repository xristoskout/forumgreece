"use client";

import { useEffect, useRef } from "react";

type DiscoverCarsWidgetProps = {
  location?: string;
  lang?: string;
  className?: string;
};

const WIDGET_SCRIPT = "https://www.discovercars.com/widget.js?v1";
const AFFILIATE_URL = "https://www.discovercars.com/?a_aid=xristoskout";

export default function DiscoverCarsWidget({
  location = "greece",
  lang = "en",
  className = "",
}: DiscoverCarsWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = containerRef.current.querySelector("#dchwidget");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "dchwidget";
    script.src = WIDGET_SCRIPT;
    script.async = true;
    script.setAttribute("data-dev-env", "com");
    script.setAttribute("data-location", location);
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-currency", "eur");
    script.setAttribute("data-utm-source", AFFILIATE_URL);
    script.setAttribute("data-utm-medium", "widget");
    script.setAttribute("data-aff-code", "a_aid");
    script.setAttribute("data-autocomplete", "on");
    script.setAttribute("data-style-submit-bg-color", "#007ac2");
    script.setAttribute("data-style-submit-font-color", "#ffffff");
    script.setAttribute("data-style-form-bg-color", "#fcd34d");
    script.setAttribute("data-style-form-font-color", "#000000");
    script.setAttribute("data-style-submit-text", lang === "el" ? "Αναζήτηση" : "Search now");
    script.setAttribute("data-style-title-color", "#000000");
    script.setAttribute("data-title-text", lang === "el" ? "Σύγκρινε ενοικιάσεις αυτοκινήτου και εξοικονόμησε έως 70%!" : "Search and compare car rentals and save up to 70%!");
    script.setAttribute("data-style_rounded_corners", "on");
    script.setAttribute("data-localization_currency_box", "on");
    script.setAttribute("data-layout_benefits", "on");
    script.setAttribute("data-layout_description", "on");
    script.setAttribute("data-layout_description_text", lang === "el" ? "Έχουμε επιλέξει τις καλύτερες προσφορές από τους εταίρους μας." : "We've selected the best deals from our car rental partners.");
    script.setAttribute("data-layout_logo_style", "on dark");
    script.setAttribute("data-layout_powered_by", "on");
    script.setAttribute("data-layout_style_form_bg_color", "#007ac2");
    script.setAttribute("data-layout_title", "on");

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        const el = containerRef.current.querySelector("#dchwidget");
        if (el) el.remove();
      }
    };
  }, [location, lang]);

  return (
    <div ref={containerRef} className={className} />
  );
}
