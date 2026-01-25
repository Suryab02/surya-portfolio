import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import skills from "../data/skills";
import Skills3D from "./Skills3D";

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
      className="py-20 bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white scroll-mt-2 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Tech Ecosystem</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm">
            A visualized orbit of my technical stack and tools.
          </p>
        </motion.div>

        {/* 3D Skills Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-16 -mt-10 grayscale dark:grayscale-0 hover:grayscale-0 transition-all duration-500"
        >
          <Skills3D />
        </motion.div>

        {/* Minimalist Skill List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-l-4 border-purple-500 pl-3">{category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {items.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none"
                  >
                    <span className="text-xl text-gray-600 dark:text-gray-300">{skill.icon}</span>
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