import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { personalInfo, education, experience } from "../../data/data";

export default function About() {
  const current = experience[0];

  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-10"
      >
        About
      </motion.p>

      {/* Currently block */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 pl-4 border-l-2 border-terracotta/40"
      >
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-faded mb-1">
          Currently
        </p>
        <p className="text-sm text-muted">
          {current.role} at <span className="text-ink font-medium">{current.company}</span>
          {current.project ? ` · ${current.project}` : ""} · {current.location}
        </p>
      </motion.div>

      {/* Summary */}
      <div className="space-y-5">
        {personalInfo.summary.slice(0, 2).map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-muted leading-[1.8]"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 pt-8 border-t border-rule"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-3">
          Education
        </p>
        <p className="font-serif text-ink text-lg">{education.degree}</p>
        <p className="text-sm text-muted mt-1">
          {education.school}
          <span className="text-faded"> · {education.period} · CGPA: {education.gpa}</span>
        </p>
      </motion.div>

      {/* Navigation hints */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap gap-6"
      >
        <Link
          to="/resume"
          className="group flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-faded hover:text-ink transition-colors duration-300 no-underline"
        >
          Full résumé
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
        <Link
          to="/writing"
          className="group flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-faded hover:text-ink transition-colors duration-300 no-underline"
        >
          Writing
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  );
}
