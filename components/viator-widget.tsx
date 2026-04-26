"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type ViatorWidgetProps = {
  partnerId: string;
  widgetRef: string;
  className?: string;
};

const VIATOR_SCRIPT_SRC = "https://www.viator.com/orion/partner/widget.js";

// Global tracker to ensure we only inject the script once per page navigation.
let lastInjectedPath = "";

/**
 * ViatorWidget
 *
 * Renders a Viator booking widget.
 *
 * How it works:
 * 1. The `<div data-vi-*>` placeholder is rendered immediately (no IntersectionObserver).
 *    This ensures that when the Viator script loads, it finds ALL placeholders on the page
 *    during its initial DOM scan, preventing the need to force re-scans.
 * 2. On mount, we check if we've already loaded the script for the current route.
 *    If not, we wipe any old Viator global state (from previous SPA pages) and inject
 *    a fresh `<script>` tag.
 * 3. Because all placeholders are in the DOM before the script runs, they all load perfectly.
 *    Because we don't wipe globals on scroll, there is zero flickering on mobile.
 */
export default function ViatorWidget({
  partnerId,
  widgetRef,
  className = "",
}: ViatorWidgetProps) {
  const pathname = usePathname();

  useEffect(() => {
    // If we have already injected the script for this specific page, do nothing.
    // The script is either loading or loaded, and it will find this widget's
    // placeholder because the placeholder was rendered synchronously.
    if (lastInjectedPath === pathname) return;

    lastInjectedPath = pathname;

    // --- Clean up old state from previous page navigations ---
    
    // 1. Remove old script tags to prevent memory leaks or duplicate executions
    document
      .querySelectorAll(`script[src^="${VIATOR_SCRIPT_SRC}"]`)
      .forEach((s) => s.remove());

    // 2. Wipe Viator/LMA global variables so the fresh script doesn't bail out
    const win = window as any;
    const globalsToDelete = [
      "viator",
      "ViatorWidget",
      "__viatorWidget",
      "lma",
      "LMA",
      "letMeAllez",
    ];
    globalsToDelete.forEach((key) => {
      try {
        delete win[key];
      } catch (e) {
        // Ignore errors if property is not configurable
      }
    });

    // Also attempt to clear any dynamically named viator globals
    try {
      Object.keys(win).forEach((key) => {
        if (key.toLowerCase().includes("viator")) {
          delete win[key];
        }
      });
    } catch (e) {
      // Ignore cross-origin frame access errors
    }

    // --- Inject fresh script ---
    const script = document.createElement("script");
    script.src = `${VIATOR_SCRIPT_SRC}?_=${Date.now()}`;
    script.async = true;
    document.body.appendChild(script);
  }, [pathname]);

  return (
    <div
      className={className}
      style={{ minHeight: "400px" }}
      // Viator relies on these data attributes to find where to inject the iframe
      data-vi-partner-id={partnerId}
      data-vi-widget-ref={widgetRef}
    />
  );
}
