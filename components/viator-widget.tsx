"use client";

type ViatorWidgetProps = {
  partnerId: string;
  widgetRef: string;
  className?: string;
  height?: number;
};

const VIATOR_SCRIPT_SRC = "https://www.viator.com/orion/partner/widget.js";

/**
 * ViatorWidget — iframe srcDoc approach
 *
 * WHY iframe and not a <script> tag injection:
 *
 * The Viator widget script internally listens for `DOMContentLoaded` to scan
 * the page for `[data-vi-*]` placeholder elements.  In a Next.js SPA, that
 * event only fires once — on the very first hard load.  Every subsequent
 * client-side navigation never re-fires it, so any `<script>` tag we inject
 * dynamically will execute but immediately bail out because DOMContentLoaded
 * has already passed and there is no init-on-existing-DOM code path.
 *
 * The iframe srcDoc approach gives the Viator script a **fresh document** every
 * time this component mounts.  The browser fires DOMContentLoaded for that
 * mini-document, the script finds the placeholder, and injects the booking
 * widget reliably — on first load, on SPA navigation, every single time.
 *
 * USAGE RULE: Only mount this component when you actually want to show the
 * widget (e.g. after the user clicks "Show All Activities").  Mounting it
 * hidden/collapsed is wasteful — use conditional rendering instead.
 */
export default function ViatorWidget({
  partnerId,
  widgetRef,
  className = "",
  height = 720,
}: ViatorWidgetProps) {
  // Self-contained HTML that the iframe will render.
  // The script tag sits right after its placeholder, exactly as Viator intends.
  const srcDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 100%; background: transparent; }
    iframe { border: none; max-width: 100%; }
  </style>
</head>
<body>
  <div data-vi-partner-id="${partnerId}" data-vi-widget-ref="${widgetRef}"></div>
  <script src="${VIATOR_SCRIPT_SRC}"><\/script>
</body>
</html>`;

  return (
    <div
      className={className}
      style={{ width: "100%", minHeight: `${height}px` }}
    >
      <iframe
        srcDoc={srcDoc}
        style={{ width: "100%", height: `${height}px`, border: "none" }}
        title={`Viator activities — ${widgetRef}`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
      />
    </div>
  );
}
