import { useEffect, useRef, useState } from "react";

// Counts a metric up the first time it scrolls into view. Parses the number
// out of strings like "10k+", "40%" or "3+" so the surrounding characters
// survive, and renders the final value immediately when motion is reduced
// or IntersectionObserver is unavailable.
const PARSE = /^(\D*?)([\d.]+)(.*)$/;

function parseValue(value) {
  const m = String(value).match(PARSE);
  if (!m) return null;
  return {
    prefix: m[1],
    target: parseFloat(m[2]),
    suffix: m[3],
    decimals: (m[2].split(".")[1] || "").length,
  };
}

export default function CountUp({ value, duration = 1100 }) {
  const parsed = parseValue(value);
  const ref = useRef(null);
  const [shown, setShown] = useState(parsed ? 0 : null);

  // depends on the raw value only — deriving `parsed` in the body would make
  // a fresh object each render and restart the effect on every tick
  useEffect(() => {
    const p = parseValue(value);
    if (!p) return;
    const node = ref.current;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !node || typeof IntersectionObserver === "undefined") {
      setShown(p.target);
      return;
    }

    let frame = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - t0) / duration);
          // ease-out so it settles rather than stopping dead
          const eased = 1 - Math.pow(1 - progress, 3);
          setShown(parseFloat((p.target * eased).toFixed(p.decimals)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  if (!parsed) return <>{value}</>;

  return (
    <span ref={ref}>
      {parsed.prefix}
      {shown}
      {parsed.suffix}
    </span>
  );
}
