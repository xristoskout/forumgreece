"use client";

import { useEffect } from "react";

export default function FluidCursor() {
  useEffect(() => {
    // Only run on client
    const loadAndInit = async () => {
      try {
        const { initFluid } = await import("smokey-fluid-cursor");
        initFluid({
          id: "smokey-fluid-canvas",
          transparent: true,
          densityDissipation: 0.85,
          velocityDissipation: 0.85,
          splatRadius: 0.08,
          splatForce: 1000,
          curl: 10,
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
