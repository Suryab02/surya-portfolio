import { motion } from "framer-motion";
import { projects } from "../../data/data";

function Card({ project, index }) {
  const num = String(index + 1).padStart(3, "0");
  const accentHref = project.accent?.href ?? project.repo;

  const body = (
    <>
      <div className="flex items-baseline justify-between font-mono text-[11px]">
        <span className="text-accent">{num}</span>
        <span className="text-ghost">{project.year}</span>
      </div>
      <p className="mt-3 text-[15px] font-medium text-bright">
        {project.name}
      </p>
      <p className="mt-1.5 text-xs text-dim leading-[1.6]">{project.blurb}</p>
      {project.accent?.label && (
        <p className="mt-3 font-mono text-[10px] text-accent">
          {project.accent.label}
          {accentHref ? " ↗" : ""}
        </p>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="border-line border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
    >
      {accentHref ? (
        <a
          href={accentHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 sm:p-7 no-underline hover:bg-card transition-colors duration-300 h-full"
        >
          {body}
        </a>
      ) : (
        <div className="p-6 sm:p-7 h-full">{body}</div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] text-faint mb-5"
      >
        THINGS_I_BUILT ({projects.length})
      </motion.p>
      <div className="grid sm:grid-cols-3 border border-line">
        {projects.map((p, i) => (
          <Card key={p.name} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
