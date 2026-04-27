"use client";

import { useEffect } from "react";

export default function FluidCursor() {
  useEffect(() => {
    // Only run on client
    const loadAndInit = async () => {
      try {
        const { initFluid } = await import("smokey-fluid-cursor");
        
        // Detect if mobile to adjust parameters
        const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);
        
        initFluid({
          id: "smokey-fluid-canvas",
          transparent: true,
          densityDissipation: 0.8, // Fades faster to look lighter
          velocityDissipation: 0.9, // Keeps movement longer for swirls
          splatRadius: isMobile ? 0.3 : 0.15,
          splatForce: isMobile ? 8000 : 6000,
          curl: 80, // High vorticity for smoke swirls
          shading: true,
        });
      } catch (error) {
        console.error("Failed to initialize fluid cursor:", error);
      }
    };

    loadAndInit();
  }, []);

  return (
    <canvas
      id="smokey-fluid-canvas"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
