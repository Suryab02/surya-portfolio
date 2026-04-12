import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 bg-white"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 max-w-6xl mx-auto text-center w-full"
      >
        {/* Modern Indicator */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-slate-200 bg-white shadow-sm mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
             Software Engineer @ Infor
          </span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-7xl sm:text-9xl md:text-[11rem] font-black tracking-tighter leading-[0.85] text-slate-950 mb-10"
        >
          SURYA <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900/40 to-slate-900">PRABHAS</span>
        </motion.h1>

        {/* Professional Presence */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium mb-16 tracking-tight"
        >
          Engineering robust backend architectures and enterprise SaaS ecosystems.
          Solving complex technical challenges with precision and scale.
        </motion.p>

        {/* Cinematic Interactions */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-12 py-5 bg-slate-950 text-white rounded-full font-bold text-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Projects
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>
          <a
            href="mailto:bsprabhas2002@gmail.com"
            className="px-12 py-5 bg-white border border-slate-200 text-slate-950 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Modern Atmosphere */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-slate-200 to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.4em] font-black text-slate-400">Scroll to Dive</span>
      </div>
    </section>
  );
}