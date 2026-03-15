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
      className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-0">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="text-slate-300 font-medium text-sm">No Image Available</div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-3 mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1">
              {project.shortTitle || project.title}
            </h3>
            <p className="text-slate-500 font-medium text-[13px] mt-0.5 line-clamp-1">{project.title}</p>
          </div>
          <div className="flex gap-1.5 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors"
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
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                aria-label="Live Demo"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed text-[14px] mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-100">
          {project.tech.slice(0, 4).map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-slate-50 text-slate-600 text-[11px] font-semibold rounded-md border border-slate-200"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md border border-slate-200">
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
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Featured <span className="text-slate-400">Work</span>
            </h2>
            <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full"></div>
          </div>
          <a
            href="https://github.com/Suryab02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 font-semibold hover:text-blue-600 transition-colors group"
          >
            <span>View all on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}