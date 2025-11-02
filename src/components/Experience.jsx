import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import experience from "../data/experience";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section
      id="experience"
      className="py-20 bg-white text-gray-900 scroll-mt-2"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            My professional journey and key contributions
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experience.map((exp, idx) => {
            const ref = useRef();
            const inView = useInView(ref, { once: true });
            const isExpanded = expandedIdx === idx;

            return (
              <motion.div
                key={idx}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                {/* Header Button */}
                <button
                  onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                  className="w-full p-6 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-start gap-4 flex-1 text-left">
                    {/* Company Logo */}
                    {exp.logo && (
                      <motion.img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-14 h-14 object-contain rounded-lg bg-white p-2 shadow-sm flex-shrink-0"
                        initial={{ scale: 0.8 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4 }}
                      />
                    )}

                    {/* Company Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-sm">
                        <p className="text-accent font-semibold">
                          {exp.company}
                        </p>
                        <span className="hidden sm:inline text-gray-300">
                          •
                        </span>
                        <p className="text-gray-500">{exp.year}</p>
                      </div>
                      {/* Achievement Count */}
                      <p className="text-xs text-gray-500 mt-2">
                        {exp.details.length} key achievements
                      </p>
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-accent flex-shrink-0 ml-4"
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
                  className="overflow-hidden"
                >
                  <div className="px-6 py-6 bg-white border-t border-gray-100">
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
                          className="flex gap-3 text-sm text-gray-700"
                        >
                          <span className="text-accent font-bold flex-shrink-0 mt-0.5">
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
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Click on any role to view detailed achievements
          </p>
        </div>
      </div>
    </section>
  );
}