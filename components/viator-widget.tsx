"use client";

import { useEffect, useRef, useState } from "react";

type ViatorWidgetProps = {
  partnerId: string;
  widgetRef: string;
  className?: string;
};

const VIATOR_SCRIPT_SRC = "https://www.viator.com/orion/partner/widget.js";

let viatorScriptTimeout: ReturnType<typeof setTimeout> | null = null;

function injectViatorScript() {
  if (viatorScriptTimeout) {
    clearTimeout(viatorScriptTimeout);
  }
  
  viatorScriptTimeout = setTimeout(() => {
    // ── Step 1: Wipe Viator global state ──────────────────────────────
    try {
      const win = window as unknown as Record<string, unknown>;
      Object.keys(win).forEach((k) => {
        if (/viator/i.test(k)) {
          try {
            delete win[k];
          } catch {
            // Some globals can't be deleted; ignore.
          }
        }
      });
    } catch {
      // Ignore if Object.keys throws
    }

    // ── Step 2: Remove all existing Viator <script> tags ─────────────
    document
      .querySelectorAll(`script[src*="viator.com"]`)
      .forEach((el) => el.remove());

    // ── Step 3: Inject a fresh script to document.body ───────────────
    const script = document.createElement("script");
    script.src = `${VIATOR_SCRIPT_SRC}?_=${Date.now()}`;
    script.async = true;
    document.body.appendChild(script);
  }, 200);
}

/**
 * ViatorWidget
 *
 * Optimized to fix performance issues on pages with multiple widgets (e.g. /tours/all).
 * 1. Uses IntersectionObserver to lazy-load the widget only when it scrolls near the viewport.
 * 2. Uses a global debounced function (injectViatorScript) so that if multiple widgets
 *    become visible at the exact same time, the heavy script is only injected ONCE.
 */
export default function ViatorWidget({
  partnerId,
  widgetRef,
  className = "",
}: ViatorWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load using IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only load once
        }
      },
      { rootMargin: "600px" } // Load slightly before it comes into view
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Initialize placeholder and script once visible
  useEffect(() => {
    if (!isVisible) return;
    
    const container = containerRef.current;
    if (!container) return;

    // Clear the container and add the placeholder <div>
    container.innerHTML = "";
    const placeholder = document.createElement("div");
    placeholder.setAttribute("data-vi-partner-id", partnerId);
    placeholder.setAttribute("data-vi-widget-ref", widgetRef);
    container.appendChild(placeholder);

    // Call the globally debounced script injector
    injectViatorScript();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [isVisible, partnerId, widgetRef]);

  // Give the container a min-height to avoid layout shift before widget loads
  return <div ref={containerRef} className={className} style={{ minHeight: "400px" }} />;
}
