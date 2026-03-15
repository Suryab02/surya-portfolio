import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import skills from "../../data/skills";

export default function Skills() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const categories = {
    Frontend: skills.filter(s => s.category === "Frontend"),
    Backend: skills.filter(s => s.category === "Backend"),
    "Cloud & Tools": skills.filter(s => s.category !== "Frontend" && s.category !== "Backend")
  };

  return (
    <section id="skills" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Technical Arsenal
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl font-medium">
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
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-slate-200 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                {category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <div
                    key={skill.id}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg hover:bg-slate-100 hover:border-slate-200 transition-colors group"
                  >
                    <span className="text-lg grayscale group-hover:grayscale-0 transition-all duration-300">{skill.icon}</span>
                    <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
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