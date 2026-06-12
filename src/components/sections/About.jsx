import { motion } from "framer-motion";
import { home } from "../../data/data";

export default function About() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] text-faint mb-7"
      >
        01 — ABOUT
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm text-body leading-[1.85] max-w-lg"
      >
        {home.about}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-xs text-dim"
      >
        {home.stats.map(({ value, label }) => (
          <span key={label}>
            <span className="text-bright font-medium">{value}</span> {label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
