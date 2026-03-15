import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import experience from "../../data/experience";
import { ChevronDown, Briefcase } from "lucide-react";
import clsx from "clsx";

function ExperienceCard({ exp, idx, expandedIdx, setExpandedIdx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isExpanded = expandedIdx === idx;

  return (
    <div ref={ref} className="relative pl-6 sm:pl-10 group">
      {/* Timeline Line & Node */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 group-last:bg-transparent"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: idx * 0.2, type: "spring" }}
        className={clsx(
          "absolute left-[-16px] top-6 w-8 h-8 rounded-full border-[3px] border-white flex items-center justify-center shadow-sm transition-colors duration-300",
          isExpanded ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600"
        )}
      >
        <Briefcase size={14} />
      </motion.div>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300"
      >
        <button
          onClick={() => setExpandedIdx(isExpanded ? null : idx)}
          className="w-full text-left p-5 sm:p-6 flex items-start gap-4 sm:gap-5 bg-transparent"
        >
          {exp.logo && (
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-slate-100 overflow-hidden flex-shrink-0 bg-white p-2 flex items-center justify-center shadow-sm">
              <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
            </div>
          )}

          <div className="flex-1 mt-0.5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              {exp.role}
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 mt-1.5">
              <span className="text-blue-600 font-semibold text-[15px]">{exp.company}</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-slate-500 font-medium text-[13px]">{exp.year}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 bg-slate-50 rounded-md border border-slate-100">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide uppercase">
                {exp.details.length} Achievements
              </span>
            </div>
          </div>

          <div className={clsx("mt-1.5 text-slate-400 transition-transform duration-300", isExpanded && "rotate-180 text-blue-600")}>
            <ChevronDown size={20} />
          </div>
        </button>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isExpanded ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-50">
            <ul className="space-y-3 mt-4">
              {exp.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex gap-3 text-slate-600 leading-relaxed text-[14px]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2"></div>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(0); // First one expanded by default
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col items-start md:items-center text-left md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3 text-left">
            Experience History
          </h2>
          <p className="text-slate-500 max-w-xl font-medium text-[15px] md:text-base mb-4 text-left md:mx-auto">
            My professional journey crafting robust solutions and optimizing systems across different domains.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full md:mx-auto"></div>
        </motion.div>

        {/* Timeline container */}
        <div className="relative pt-2 pl-4 sm:pl-0">
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

      </div>
    </section>
  );
}