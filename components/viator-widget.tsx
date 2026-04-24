"use client";

import { useEffect, useRef, useState } from "react";

type ViatorWidgetProps = {
  partnerId: string;
  widgetRef: string;
  className?: string;
};

const VIATOR_SCRIPT_SRC = "https://www.viator.com/orion/partner/widget.js";

/**
 * ViatorWidget
 *
 * The core problem with third-party widgets in SPAs:
 *   1. The widget script sets global flags like window.ViatorWidgets
 *   2. On Next.js client-side navigation the script is NOT re-downloaded
 *   3. Even if we inject a new <script>, the fresh copy sees the global
 *      flag and exits early — so the widget never renders.
 *
 * Fix:
 *   1. Wipe ALL window properties whose name contains "viator" (case-insensitive)
 *      so the fresh copy of the script sees a clean global state.
 *   2. Remove every existing <script> that points at the Viator CDN.
 *   3. Re-create the placeholder <div> inside the container ref.
 *   4. Append a brand-new <script> to document.body (scripts appended to
 *      nested divs are not always executed by all browsers).
 *   5. Use a cache-buster (?_=timestamp) so the browser re-downloads
 *      the script instead of serving a cached + already-run copy.
 *   6. Callers should also pass key={widgetRef} so React fully unmounts
 *      and remounts this component on every route change.
 */
export default function ViatorWidget({
  partnerId,
  widgetRef,
  className = "",
}: ViatorWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // "ready" delays the effect by one tick so React has fully committed
  // the container div to the DOM before we start manipulating it.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Small delay ensures the container is in the DOM
    const timer = setTimeout(() => setReady(true), 50);
    return () => {
      clearTimeout(timer);
      setReady(false);
    };
  }, [partnerId, widgetRef]);

  useEffect(() => {
    if (!ready) return;
    const container = containerRef.current;
    if (!container) return;

    // ── Step 1: Wipe Viator global state ──────────────────────────────
    // The Viator script guards against double-init with window globals.
    // Deleting them forces the fresh script copy to run its full init.
    try {
      const win = window as Record<string, unknown>;
      Object.keys(win).forEach((k) => {
        if (/viator/i.test(k)) {
          try {
            delete win[k];
          } catch {
            // Some globals (e.g. on Safari) can't be deleted; ignore.
          }
        }
      });
    } catch {
      // If Object.keys(window) throws, continue anyway.
    }

    // ── Step 2: Remove all existing Viator <script> tags ─────────────
    document
      .querySelectorAll(`script[src*="viator.com"]`)
      .forEach((el) => el.remove());

    // ── Step 3: Clear the container and add the placeholder <div> ────
    container.innerHTML = "";
    const placeholder = document.createElement("div");
    placeholder.setAttribute("data-vi-partner-id", partnerId);
    placeholder.setAttribute("data-vi-widget-ref", widgetRef);
    container.appendChild(placeholder);

    // ── Step 4: Inject a fresh script to document.body ───────────────
    // Scripts MUST be appended to body/head to be reliably executed.
    // Cache-buster forces re-download so the browser re-runs the code.
    const script = document.createElement("script");
    script.src = `${VIATOR_SCRIPT_SRC}?_=${Date.now()}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [ready, partnerId, widgetRef]);

  return <div ref={containerRef} className={className} />;
}
