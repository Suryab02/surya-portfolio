import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import experience from "../data/experience";
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
      className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 bg-white dark:bg-transparent"
    >
      {/* Header Button */}
      <button
        onClick={() => setExpandedIdx(isExpanded ? null : idx)}
        className="w-full p-6 bg-white dark:bg-white/5 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-colors flex items-center justify-between group"
      >
        <div className="flex items-start gap-4 flex-1 text-left">
          {/* Company Logo */}
          {exp.logo && (
            <motion.img
              src={exp.logo}
              alt={exp.company}
              className="w-14 h-14 object-contain rounded-lg bg-gray-50 dark:bg-white p-2 shadow-sm flex-shrink-0 border border-gray-100 dark:border-none"
              initial={{ scale: 0.8 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.4 }}
            />
          )}

          {/* Company Info */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {exp.role}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-sm">
              <p className="text-purple-600 dark:text-purple-400 font-semibold">
                {exp.company}
              </p>
              <span className="hidden sm:inline text-gray-400 dark:text-gray-600">
                •
              </span>
              <p className="text-gray-500 dark:text-gray-500">{exp.year}</p>
            </div>
            {/* Achievement Count */}
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              {exp.details.length} key achievements
            </p>
          </div>
        </div>

        {/* Chevron Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-purple-600 dark:text-purple-500 flex-shrink-0 ml-4"
        >
          <ChevronDown size={24} />
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
        className="overflow-hidden bg-gray-50 dark:bg-transparent"
      >
        <div className="px-6 py-6 border-t border-gray-200 dark:border-white/5 bg-white/5">
          <ul className="space-y-3">
            {exp.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: i * 0.05,
                }}
                className="flex gap-3 text-sm text-gray-700 dark:text-gray-300"
              >
                <span className="text-purple-600 dark:text-purple-400 font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-relaxed">{detail}</span>
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
      className="py-20 bg-white dark:bg-[#050505] text-gray-900 dark:text-white scroll-mt-2"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
            Experience
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-sm">
            My professional journey and key contributions
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
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
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-600">
            Click on any role to view detailed achievements
          </p>
        </div>
      </div>
    </section>
  );
}