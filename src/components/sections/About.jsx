import { motion } from "framer-motion";
import { personalInfo, education } from "../../data/data";

export default function About() {
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

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {["2+ Years Experience", "Full-Stack Engineer", "Hyderabad, India"].map((stat) => (
          <span
            key={stat}
            className="text-xs font-medium uppercase tracking-wider text-faded border border-rule/80 bg-white/50 rounded-full px-3 py-1"
          >
            {stat}
          </span>
        ))}
      </motion.div>

      <div className="space-y-5">
        {personalInfo.summary.map((paragraph, i) => (
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
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 pt-8 border-t border-rule"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-3">
          Education
        </p>
        <p className="font-semibold text-ink text-base tracking-tight">{education.degree}</p>
        <p className="text-sm text-muted mt-1">
          {education.school}
          <span className="text-faded"> · {education.period} · CGPA: {education.gpa}</span>
        </p>
      </motion.div>
    </div>
  );
}
