import { useEffect, useRef } from "react";

export default function EEGWave({ height = 120, from = "#00D4FF", to = "#00FF88", opacity = 0.4 }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { amp: 18, freq: 0.018, phase: 0, speed: 0.8 },
      { amp: 10, freq: 0.035, phase: 1.2, speed: 1.2 },
      { amp: 6, freq: 0.055, phase: 2.4, speed: 0.6 },
      { amp: 14, freq: 0.012, phase: 0.8, speed: 1.0 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      grad.addColorStop(0, from);
      grad.addColorStop(1, to);
      ctx.strokeStyle = grad;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        let y = canvas.height / 2;
        waves.forEach((w) => {
          y += w.amp * Math.sin(x * w.freq + timeRef.current * w.speed + w.phase);
        });
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      timeRef.current += 0.025;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [from, to, opacity, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: `${height}px`, display: "block" }}
    />
  );
}
