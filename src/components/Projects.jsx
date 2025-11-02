import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import projects from "../data/projects";

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 bg-white text-gray-900 scroll-mt-2"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've built exploring different technologies, solving real-world problems, and winning innovation competitions.
          </p>
        </motion.div>

        {/* Projects Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto auto-rows-max">
          {projects.map((project, idx) => {
            const ref = useRef();
            const inView = useInView(ref, { once: true });
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gray-200 h-48 sm:h-56">
                  {project.image && (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.shortTitle}
                  </div>
                </div>

                {/* Project Info - Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="w-full p-6 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-accent bg-opacity-10 text-accent px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs font-medium bg-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-accent flex-shrink-0 mt-1"
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    isExpanded
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-6 bg-white border-t border-gray-100 space-y-4">
                    {/* All Tech Stack */}
                    <div>
                      <p className="text-xs text-gray-500 font-semibold mb-2">
                        TECHNOLOGIES
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="text-xs text-gray-500 font-semibold mb-2">
                        KEY HIGHLIGHTS
                      </p>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: i * 0.05,
                            }}
                            className="flex gap-2 text-sm text-gray-700"
                          >
                            <span className="text-accent font-bold flex-shrink-0">
                              ✓
                            </span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                        >
                          <Github size={16} />
                          GitHub
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg font-semibold hover:bg-accent hover:bg-opacity-90 transition-all"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Want to see more projects?{" "}
            <a
              href="https://github.com/Suryab02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:underline"
            >
              Visit my GitHub
            </a>
          </p>
          <motion.a
            href="https://github.com/Suryab02"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-accent transition-all"
          >
            <Github size={18} />
            Explore All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}