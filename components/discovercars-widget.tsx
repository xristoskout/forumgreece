"use client";

import { useState, useEffect } from "react";

type DiscoverCarsWidgetProps = {
  location?: string;
  lang?: string;
  className?: string;
  height?: number;
};

const WIDGET_SCRIPT = "https://www.discovercars.com/widget.js?v1";
const AFFILIATE_URL = "https://www.discovercars.com/?a_aid=xristoskout";

export default function DiscoverCarsWidget({
  location = "greece",
  lang = "en",
  className = "",
  height = 400,
}: DiscoverCarsWidgetProps) {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const dataAttrs = [
      `data-dev-env="com"`,
      `data-location="${location}"`,
      `data-lang="${lang}"`,
      `data-currency="eur"`,
      `data-utm-source="${AFFILIATE_URL}"`,
      `data-utm-medium="widget"`,
      `data-aff-code="a_aid"`,
      `data-autocomplete="on"`,
      `data-style-submit-bg-color="#007ac2"`,
      `data-style-submit-font-color="#ffffff"`,
      `data-style-form-bg-color="#fcd34d"`,
      `data-style-form-font-color="#000000"`,
      `data-style-submit-text="${lang === "el" ? "Αναζήτηση" : "Search now"}"`,
      `data-style-title-color="#000000"`,
      `data-title-text="${lang === "el" ? "Σύγκρινε ενοικιάσεις αυτοκινήτου και εξοικονόμησε έως 70%!" : "Search and compare car rentals and save up to 70%!"}"`,
      `data-style_rounded_corners="on"`,
      `data-localization_currency_box="on"`,
      `data-layout_benefits="on"`,
      `data-layout_description="on"`,
      `data-layout_description_text="${lang === "el" ? "Έχουμε επιλέξει τις καλύτερες προσφορές από τους εταίρους μας." : "We've selected the best deals from our car rental partners."}"`,
      `data-layout_logo_style="on dark"`,
      `data-layout_powered_by="on"`,
      `data-layout_style_form_bg_color="#007ac2"`,
      `data-layout_title="on"`,
    ].join(" ");

    setTimeout(() => setSrcDoc(`<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 100%; background: transparent; }
    #dchwidget { width: 100%; }
  </style>
</head>
<body>
  <div id="dchwidget" ${dataAttrs}></div>
  <script src="${WIDGET_SCRIPT}?v=${Date.now()}"><\/script>
</body>
</html>`), 0);
  }, [location, lang]);

  return (
    <div className={className} style={{ width: "100%" }}>
      {srcDoc && (
        <iframe
          srcDoc={srcDoc}
          style={{ width: "100%", height: `${height}px`, border: "none" }}
          title={`DiscoverCars — ${location}`}
          loading="lazy"
          allow="popups popups-to-escape-sandbox"
        />
      )}
    </div>
  );
}
