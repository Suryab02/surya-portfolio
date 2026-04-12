import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import skills from "../../data/skills";

export default function Skills() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const categories = {
    "Languages & Backend": skills.filter(s => s.category === "Languages" || s.category === "Backend"),
    "Frontend & Database": skills.filter(s => s.category === "Frontend" || s.category === "Database"),
    "Cloud, DevOps & Tools": skills.filter(s => s.category === "Cloud & DevOps" || s.category === "Tools")
  };

  return (
    <section id="skills" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            Technical Arsenal
          </h2>
          <div className="w-16 h-1 bg-blue-500 mt-4 rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl font-medium text-lg">
            A comprehensive overview of the languages, frameworks, and tools I use to build scalable software.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-500"
            >
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                {category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <div
                    key={skill.id}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">{skill.icon}</span>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white">{skill.name}</span>
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