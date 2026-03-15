import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import experience from "../../data/experience";
import { ChevronDown } from "lucide-react";

function ExperienceCard({ exp, idx, expandedIdx, setExpandedIdx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const isExpanded = expandedIdx === idx;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 bg-white dark:bg-[#0a0a0a]"
    >
      {/* Header Button */}
      <button
        onClick={() => setExpandedIdx(isExpanded ? null : idx)}
        className="w-full p-8 bg-white dark:bg-white/5 backdrop-blur-sm hover:bg-gray-50/80 dark:hover:bg-white/10 transition-all flex items-center justify-between group"
      >
        <div className="flex items-start gap-6 flex-1 text-left">
          {/* Company Logo */}
          {exp.logo && (
            <motion.div
              className="w-16 h-16 bg-white dark:bg-white rounded-2xl p-2.5 shadow-md flex-shrink-0 border border-gray-100 dark:border-transparent overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-contain"
              />
            </motion.div>
          )}

          {/* Company Info */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {exp.role}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1.5">
              <p className="text-blue-600 dark:text-blue-400 font-bold tracking-tight">
                {exp.company}
              </p>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-700">
                |
              </span>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">{exp.year}</p>
            </div>
            {/* Achievement Count Badge */}
            <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 bg-gray-50 dark:bg-white/5 rounded-full border border-gray-200/50 dark:border-white/5">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {exp.details.length} Achievements
              </span>
            </div>
          </div>
        </div>

        {/* Chevron Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 ml-4"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>

      {/* Expandable Content */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isExpanded
            ? { opacity: 1, height: "auto" }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-gray-50/30 dark:bg-transparent"
      >
        <div className="px-8 py-8 border-t border-gray-100 dark:border-white/5">
          <ul className="space-y-4">
            {exp.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: i * 0.05,
                }}
                className="flex gap-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <div className="w-5 h-5 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-[10px]">
                    ✓
                  </span>
                </div>
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section
      id="experience"
      className="py-32 min-h-[90vh] flex items-center bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white scroll-mt-2"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            A chronicle of my professional growth, technical contributions, and the industries I've impacted.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              exp={exp}
              idx={idx}
              expandedIdx={expandedIdx}
              setExpandedIdx={setExpandedIdx}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-600 uppercase tracking-widest">
            Select a role to dive deeper into achievements
          </p>
        </div>
      </div>
    </section>
  );
}