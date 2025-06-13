import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-10"
      style={{
        top: position.y - 75,
        left: position.x - 75,
        width: 150,
        height: 150,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent)",
        mixBlendMode: "lighten",
        filter: "blur(50px)",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-neutral-900 text-white flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <CursorGlow />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I’m <span className="text-accent">Surya Prabhas</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="text-lg max-w-xl text-gray-300"
      >
        I build smooth UIs & scalable applications.
      </motion.p>

      {/* Scroll Cue */}
      <div className="absolute bottom-10 text-gray-500 animate-bounce text-xl">
        ↓
      </div>
    </section>
  );
}
