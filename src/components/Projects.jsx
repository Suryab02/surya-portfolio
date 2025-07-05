import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import projects from "../data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 text-black scroll-mt-2"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-accent">Projects</h2>
        <p className="mt-3 text-gray-600 text-lg">
          A collection of things I’ve built, explored, or contributed to.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.12}
              scale={1.02}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 transition-all hover:shadow-2xl"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-44 object-cover mb-4"
                />
              )}

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

              <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-0.5 rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {project.description || "No description available."}
              </p>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-800 text-white text-sm px-4 py-1.5 rounded-full hover:bg-black transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
