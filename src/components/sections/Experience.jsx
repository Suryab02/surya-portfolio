import { motion } from "framer-motion";
import { experience } from "../../data/data";

export default function Experience() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-10"
      >
        Experience
      </motion.p>

      <div className="space-y-0">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`${i > 0 ? "border-t border-rule pt-10 mt-10" : ""}`}
          >
            {/* Role + Period */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1.5">
              <h3 className="font-serif text-ink text-xl">{job.role}</h3>
              <span className="text-xs text-faded tracking-wide shrink-0">
                {job.period}
              </span>
            </div>

            {/* Company */}
            <p className="text-sm text-muted mb-6">
              {job.company}
              {job.location && `, ${job.location}`}
              {job.project && (
                <span className="text-faded"> · {job.project}</span>
              )}
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {job.highlights.map((h, j) => (
                <li
                  key={j}
                  className="text-sm text-muted leading-[1.7] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-faded"
                >
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
