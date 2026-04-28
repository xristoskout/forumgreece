"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ──────────────────────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  hue: number; // 185–215 → Mediterranean blue/cyan
}

// ─── Constants ───────────────────────────────────────────────────────────────
const FADE = 0.93;
const SHRINK = 0.96;
const DAMPEN = 0.91;
const MAX_PARTICLES = 60;

// ─── Component ───────────────────────────────────────────────────────────────
export default function MediterraneanCursor() {
  // Detect desktop (fine pointer = mouse). Starts as false → no flash on mobile.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }
  }, []);

  // Don't render ANYTHING on mobile / touch devices
  if (!isDesktop) return null;

  return <CursorCanvas />;
}

// ─── Canvas (only mounted on desktop) ────────────────────────────────────────
function CursorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -200, y: -200 });
  const dot = useRef({ x: -200, y: -200 });
  const lastMouse = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Mouse tracking ───────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 3 && particles.current.length < MAX_PARTICLES) {
        const len = speed || 1;
        const nx = -dy / len; // perpendicular axis (wake "V")
        const ny = dx / len;

        const count = Math.min(2, Math.ceil(speed / 8));
        for (let i = 0; i < count; i++) {
          const side = i % 2 === 0 ? 1 : -1;
          const spread = (0.4 + Math.random() * 0.8) * side;
          particles.current.push({
            x: e.clientX - dx * (0.1 + Math.random() * 0.3),
            y: e.clientY - dy * (0.1 + Math.random() * 0.3),
            vx: nx * spread * 1.6,
            vy: ny * spread * 1.6,
            alpha: 0.55 + Math.random() * 0.3,
            size: 3.5 + Math.random() * 3.5,
            hue: 185 + Math.random() * 30,
          });
        }
      }
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    // ── Animation loop ───────────────────────────────────────────────────────
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth-follow sun dot
      dot.current.x += (mouse.current.x - dot.current.x) * 0.18;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.18;

      // Wake particles
      particles.current = particles.current.filter((p) => p.alpha > 0.015);
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= DAMPEN;
        p.vy *= DAMPEN;
        p.alpha *= FADE;
        p.size *= SHRINK;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.size, 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 58%, ${p.alpha})`;
        ctx.fill();
      }

      // Sun dot
      const { x, y } = dot.current;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, 12);
      grad.addColorStop(0, "rgba(255, 213, 79, 0.35)");
      grad.addColorStop(1, "rgba(255, 213, 79, 0)");
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 213, 79, 0.9)";
      ctx.fill();

      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
