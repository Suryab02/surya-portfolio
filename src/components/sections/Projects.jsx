import { motion } from "framer-motion";
import { projects } from "../../data/data";
import { ArrowUpRight, Trophy } from "lucide-react";

export default function Projects() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-10"
      >
        Projects
      </motion.p>

      <div className="space-y-6">
        {projects.map((project, i) => {
          const content = (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 -mx-6 rounded-2xl hover:bg-cream-dark/40 transition-colors duration-300"
            >
              {/* Title Row */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-xl text-ink tracking-tight group-hover:text-terracotta transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="font-sans text-sm text-muted font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>
                {project.link && (
                  <div className="text-faded group-hover:text-terracotta transition-colors duration-300 p-1">
                    <ArrowUpRight size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-[1.7] mt-4 max-w-2xl">
                {project.description}
              </p>

              {/* Achievement */}
              {project.achievement && (
                <div className="flex items-center gap-2 mt-4 text-xs font-medium text-sage bg-sage/10 w-fit px-3 py-1.5 rounded-full">
                  <Trophy size={12} />
                  <span>{project.achievement}</span>
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap items-center gap-2 mt-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium uppercase tracking-wider text-faded border border-rule/80 bg-white/50 rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );

          return project.link ? (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline"
            >
              {content}
            </a>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
