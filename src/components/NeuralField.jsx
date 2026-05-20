import { useEffect, useRef } from "react";

// Lightweight animated node-network rendered to a canvas that fills its
// positioned parent. Use as a subtle background motif.
export default function NeuralField({ density = 0.00009, opacity = 0.6 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;
    let nodes = [];

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const build = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
      const count = Math.min(70, Math.max(18, Math.floor(w * h * density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const mix = (x) => {
      // cyan -> green across the width
      const r = Math.round(0 + x * 0);
      const g = Math.round(212 + x * (255 - 212));
      const b = Math.round(255 + x * (136 - 255));
      return `${r}, ${g}, ${b}`;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const maxDist = Math.min(170, w / 6);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduce) { a.x += a.vx; a.y += a.vy; }
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.5 * opacity;
            ctx.strokeStyle = `rgba(${mix((a.x / w + b.x / w) / 2)}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${mix(a.x / w)}, ${0.9 * opacity})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    build();
    draw();
    window.addEventListener("resize", build);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", build);
    };
  }, [density, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
