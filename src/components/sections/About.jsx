import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="py-32 min-h-[90vh] flex items-center bg-white dark:bg-[#050505] text-gray-900 dark:text-white scroll-mt-2"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-600 dark:text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <motion.img
                src="https://avatars.githubusercontent.com/u/103340147?v=4"
                alt="Surya Prabhas"
                className="rounded-3xl object-cover w-72 h-72 md:w-80 md:h-80 border-8 border-gray-50 dark:border-white/5 shadow-2xl dark:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 space-y-6 text-gray-600 dark:text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              I'm <strong className="text-gray-900 dark:text-white font-bold">Surya Prabhas</strong>, a dedicated full-stack developer with over 2 years of experience crafting high-performance web solutions and scalable backend architectures.
            </p>

            <p className="text-base leading-relaxed opacity-90">
              My technical journey is fueled by a profound curiosity for how complex systems operate—from the low-level execution of code to the intricate networking that powers the modern web. I specialize in building applications that are not just functional, but optimized for performance and user experience.
            </p>

            <p className="text-base leading-relaxed opacity-90">
              With a strong foundation in Computer Science, I focus on elegant system design and clean, maintainable code. I'm constantly exploring modern design patterns and emerging technologies to stay at the forefront of the industry.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-gray-50/50 dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10 hover:border-blue-500/30 transition-all">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">2+</div>
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Years of Experience</div>
              </div>
              <div className="bg-gray-50/50 dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10 hover:border-blue-500/30 transition-all">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">25+</div>
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider">Technologies Mastered</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Focus Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 transition-all">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold">01</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Frontend Mastery</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Designing immersive, responsive interfaces using React and modern CSS architectures with a focus on accessibility.</p>
          </div>

          <div className="p-8 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 transition-all">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold">02</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Backend Excellence</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Developing robust server-side logic and optimized database schemas to power high-traffic applications.</p>
          </div>

          <div className="p-8 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 transition-all">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-left">Systems Architecture</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Orchestrating complex software components into a unified, efficient, and scalable technological infrastructure.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}