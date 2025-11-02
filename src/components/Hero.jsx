import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

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
        top: position.y - 100,
        left: position.x - 100,
        width: 200,
        height: 200,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,0,0,0.06), transparent)",
        mixBlendMode: "multiply",
        filter: "blur(50px)",
      }}
    />
  );
}

// Framer Motion Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <CursorGlow />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 max-w-4xl mx-auto text-center"
      >
        {/* Greeting Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 mb-6"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-accent to-blue-800 bg-clip-text text-transparent">
            Surya Prabhas
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={fadeUp}
          className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-700"
        >
          Full-Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          I build beautiful, scalable web applications and solve real-world problems with modern technologies. Passionate about clean code, elegant design, and meaningful products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300"
          >
            View My Work
            <FaArrowRight />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/Suryab02"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </motion.a>

          <motion.a
            href="mailto:bsprabhas2002@gmail.com"
            whileHover={{ scale: 1.1, y: -3 }}
            className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <HiMail size={22} />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">2+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">10+</div>
            <div className="text-sm text-gray-600 mt-1">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">25+</div>
            <div className="text-sm text-gray-600 mt-1">Technologies</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        className="absolute bottom-8 text-gray-400"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaArrowDown className="text-xl" />
        </div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent bg-opacity-5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 bg-opacity-5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}