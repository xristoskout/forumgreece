"use client";

type ViatorWidgetProps = {
  partnerId: string;
  widgetRef: string;
  className?: string;
  height?: number;
};

const VIATOR_SCRIPT_SRC = "https://www.viator.com/orion/partner/widget.js";

/**
 * ViatorWidget — srcDoc iframe with popup permissions
 *
 * We use a self-contained srcDoc iframe so the Viator script gets a fresh
 * DOMContentLoaded on every SPA navigation (solving the Next.js re-init problem).
 *
 * The critical fix is `allow="popups popups-to-escape-sandbox"` on the iframe.
 * The Viator widget script internally creates its own <iframe> pointing to
 * viator.com/widget/partner/... When the user clicks a tour inside that nested
 * iframe, the browser blocks the navigation with "blocked:sandboxed frame"
 * UNLESS the parent iframe explicitly grants popup/navigation permissions.
 * This attribute is the definitive fix for ERR_BLOCKED_BY_RESPONSE.
 */
export default function ViatorWidget({
  partnerId,
  widgetRef,
  className = "",
  height = 720,
}: ViatorWidgetProps) {
  const srcDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <base target="_blank" />
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
        allow="popups popups-to-escape-sandbox"
      />
    </div>
  );
}
