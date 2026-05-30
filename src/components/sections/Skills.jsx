import { motion } from "framer-motion";
import { skills } from "../../data/data";

export default function Skills() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-10"
      >
        Stack
      </motion.p>

      <div className="space-y-5">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-8"
          >
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-faded sm:w-24 sm:shrink-0">
              {group.category}
            </span>
            <span className="text-sm text-muted leading-relaxed">
              {group.items.join("  ·  ")}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
