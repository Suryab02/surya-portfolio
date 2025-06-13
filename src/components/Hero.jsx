import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";


function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
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
        background: "radial-gradient(circle, rgba(0,0,0,0.08), transparent)",
        mixBlendMode: "multiply",
        filter: "blur(45px)",
      }}
    />
  );
}

// Framer Motion Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 text-black flex flex-col items-center justify-center text-center px-6 overflow-hidden transition-colors duration-300"
    >
      <CursorGlow />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md"
        >
          Hi, I’m <span className="text-accent">Surya Prabhas</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg sm:text-xl text-gray-700 max-w-xl mx-auto"
        >
          I build beautiful UIs, scalable apps, and solve real-world problems with modern tech.
        </motion.p>

        <motion.a
          href="#projects"
          variants={fadeUp}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-all duration-300"
        >
          View My Work <FaArrowRight />
        </motion.a>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, repeat: Infinity, repeatType: "loop", duration: 1 }}
        className="absolute bottom-6 text-gray-600 text-2xl"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}
