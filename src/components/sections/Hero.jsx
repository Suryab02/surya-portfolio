import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

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
      className="relative min-h-[90vh] bg-white dark:bg-[#050505] text-gray-900 dark:text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 max-w-4xl mx-auto text-center mt-12"
      >
        {/* Logo Mark */}
        <motion.div variants={fadeUp} className="flex justify-center mb-10">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        {/* Greeting Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/50 dark:bg-white/5 backdrop-blur-sm border border-blue-100 dark:border-white/10 rounded-full text-sm text-blue-600 dark:text-gray-300 mb-8 shadow-sm dark:shadow-none"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-6 text-gray-900 dark:text-white"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-white dark:via-white dark:to-gray-400 bg-clip-text text-transparent">
            Surya Prabhas
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={fadeUp}
          className="mt-4 text-2xl sm:text-3xl font-light text-blue-600 dark:text-blue-300 tracking-wide"
        >
          Full-Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-8 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          I build beautiful, scalable web applications and solve real-world problems.
          Passionate about clean code, elegant design, and meaningful user experiences.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex items-center justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 text-white dark:bg-white dark:text-black rounded-lg font-bold hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg dark:shadow-none"
          >
            View Work
            <FaArrowRight />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <motion.a
            href="https://github.com/Suryab02"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </motion.a>

          <motion.a
            href="mailto:bsprabhas2002@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <HiMail size={26} />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">2+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">10+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">25+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Technologies</div>
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
        className="absolute bottom-8 text-gray-400 dark:text-gray-500"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <FaArrowDown className="text-xl" />
        </div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}