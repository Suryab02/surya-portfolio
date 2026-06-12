import { useEffect, useRef } from "react";

const SPACING = 26;
const RADIUS = 130;

export default function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    let dots = [];
    let mouse = { x: -9999, y: -9999 };
    let raf = null;
    let needsFrame = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          dots.push({ x, y });
        }
      }
      needsFrame = true;
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!needsFrame) return;
      needsFrame = false;
      const { width, height } = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const t = Math.max(0, 1 - dist / RADIUS);
        if (t > 0.02) {
          const push = t * 6;
          const px = dot.x + (dx / (dist || 1)) * push;
          const py = dot.y + (dy / (dist || 1)) * push;
          ctx.fillStyle = `rgba(93, 202, 165, ${0.12 + t * 0.55})`;
          ctx.beginPath();
          ctx.arc(px, py, 1 + t * 0.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = "rgba(232, 230, 225, 0.07)";
          ctx.fillRect(dot.x - 0.75, dot.y - 0.75, 1.5, 1.5);
        }
      }
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      needsFrame = true;
    };
    const onLeave = () => {
      mouse = { x: -9999, y: -9999 };
      needsFrame = true;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
