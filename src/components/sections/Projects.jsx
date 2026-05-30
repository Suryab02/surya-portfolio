import { motion } from "framer-motion";
import { projects } from "../../data/data";

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

      <div>
        {projects.map((project, i) => {
          const content = (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group py-8 ${i > 0 ? "border-t border-rule" : ""}`}
            >
              {/* Title Row */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-xl text-ink group-hover:text-terracotta transition-colors duration-300">
                    {project.name}
                    <span className="font-sans text-sm text-faded ml-2 font-normal">
                      — {project.subtitle}
                    </span>
                  </h3>
                </div>
                {project.link && (
                  <span className="text-faded group-hover:text-terracotta group-hover:translate-x-1 transition-all duration-300 text-sm mt-1.5 shrink-0">
                    →
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-[1.7] mt-3 max-w-xl">
                {project.description}
              </p>

              {/* Tech + Achievement */}
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-faded border border-rule rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.achievement && (
                <p className="text-xs text-terracotta mt-3">
                  ✦ {project.achievement}
                </p>
              )}
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
