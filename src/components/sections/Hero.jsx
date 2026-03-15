import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

// Framer Motion Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 max-w-4xl mx-auto text-center w-full"
      >
        {/* Availability Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100/80 rounded-full text-xs font-semibold text-blue-700 tracking-wide mb-8"
        >
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          Available for new opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-slate-900 mb-6"
        >
          Building scalable <br className="hidden sm:block" />
          <span className="text-slate-400">backend systems</span>
        </motion.h1>

        {/* Short Bio */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          I'm Surya Prabhas Bandaru, a Full-Stack Backend Engineer working at Infor.
          I design elegant APIs and robust architectures that scale natively.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] transition-all duration-300"
          >
            View Projects
            <FaArrowRight className="text-sm" />
          </a>
          <a
            href="mailto:bsprabhas2002@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex items-center justify-center gap-8"
        >
          <a
            href="https://github.com/Suryab02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/bsuryaprabhas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#0A66C2] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
    </section>
  );
}