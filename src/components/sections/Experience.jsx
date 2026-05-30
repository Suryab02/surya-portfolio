import { motion } from "framer-motion";
import { experience } from "../../data/data";
import { MapPin, Calendar } from "lucide-react";

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

      <div className="space-y-12">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative"
          >
            {/* Header: Role and Company */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-4">
              <div>
                <h3 className="font-serif text-2xl text-ink">{job.role}</h3>
                <div className="flex items-center gap-2 mt-1 text-terracotta font-medium">
                  {job.company}
                  {job.project && (
                    <span className="text-muted font-normal flex items-center gap-2">
                      <span className="text-rule/80 text-xs">•</span> {job.project}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Meta information */}
              <div className="flex flex-row md:flex-col gap-4 md:gap-1 text-xs text-faded md:text-right mt-2 md:mt-0 font-medium tracking-wide uppercase">
                <div className="flex items-center md:justify-end gap-1.5">
                  <Calendar size={13} className="text-rule" />
                  {job.period}
                </div>
                {job.location && (
                  <div className="flex items-center md:justify-end gap-1.5">
                    <MapPin size={13} className="text-rule" />
                    {job.location}
                  </div>
                )}
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mt-5">
              {job.highlights.map((h, j) => (
                <li
                  key={j}
                  className="text-sm text-muted leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-terracotta/40"
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
