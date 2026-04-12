import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import projects from "../../data/projects";

function ProjectCard({ project, idx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-500/50 overflow-hidden shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900 border-b border-white/5 flex items-center justify-center p-0">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="text-slate-600 font-medium text-sm">No Image Available</div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-3 mb-2">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors line-clamp-1">
              {project.shortTitle || project.title}
            </h3>
            <p className="text-slate-400 font-medium text-[13px] mt-0.5 line-clamp-1">{project.title}</p>
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-300/80 leading-relaxed text-[14px] mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
          {project.tech.slice(0, 4).map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-500/10 text-blue-300 text-[11px] font-semibold rounded-md border border-blue-500/20"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 bg-white/5 text-slate-400 text-[11px] font-semibold rounded-md border border-white/10">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Engineering <span className="text-blue-500">Portfolio</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 mt-4 rounded-full"></div>
          </div>
          <a
            href="https://github.com/Suryab02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-300 font-bold hover:text-white transition-all group"
          >
            <span>MASTER REPOSITORY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}