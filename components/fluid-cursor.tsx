"use client";

import { useEffect, useState } from "react";

export default function FluidCursor() {
  const [isMobile, setIsMobile] = useState(true); // Default to true for SSR safety and to avoid flash of canvas on mobile

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const loadAndInit = async () => {
      try {
        const { initFluid } = await import("smokey-fluid-cursor");
        
        initFluid({
          id: "smokey-fluid-canvas",
          transparent: true,
          densityDissipation: 0.10, // Extreme fade (keeps 10% per frame)
          velocityDissipation: 0.10, 
          splatRadius: 0.005, // Microscopic radius
          splatForce: 10,    // Near zero force
          curl: 0,         
          shading: false,   
        });
      } catch (error) {
        console.error("Failed to initialize fluid cursor:", error);
      }
    };

    loadAndInit();
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      id="smokey-fluid-canvas"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0.2, // Force the entire effect to be 80% transparent
      }}
    />
  );
}
