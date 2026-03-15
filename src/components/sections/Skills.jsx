import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import skills from "../../data/skills";

export default function Skills() {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  // Group skills by category for the static list
  const categories = {
    Frontend: skills.filter(s => s.category === "Frontend"),
    Backend: skills.filter(s => s.category === "Backend"),
    Tools: skills.filter(s => s.category !== "Frontend" && s.category !== "Backend")
  };

  return (
    <section
      id="skills"
      className="py-32 min-h-[90vh] flex items-center bg-white dark:bg-[#050505] text-gray-900 dark:text-white scroll-mt-2 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-gray-900 dark:text-white">Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-medium">
            My technical stack and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Minimalist Skill List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {Object.entries(categories).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              className="p-8 bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {items.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-white/5 border border-gray-200/50 dark:border-white/5 rounded-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all group lg:hover:translate-x-2"
                  >
                    <span className="text-2xl text-gray-400 group-hover:text-blue-500 transition-colors">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}