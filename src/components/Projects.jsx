import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import projects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef();
  const horizontalRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;
    if (!container || !horizontal) return;

    const scrollWidth = horizontal.scrollWidth;
    const viewportWidth = container.offsetWidth;
    const totalScroll = scrollWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(horizontal, {
        x: () => -totalScroll,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => scrollWidth,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 text-black overflow-hidden scroll-mt-20"
    >
      {/* Scroll End Gradient */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white/90 via-white/60 to-transparent pointer-events-none z-20" />

      {/* Fixed Section Heading */}
      <div className="absolute top-0 left-0 w-full text-center z-10 py-8 bg-white/70 backdrop-blur-lg border-b border-gray-200">
        <h2 className="text-4xl font-bold text-accent tracking-tight">Projects</h2>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={horizontalRef}
        className="flex gap-10 px-16 py-40 w-max snap-x snap-mandatory"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="snap-start"
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.1}
              scale={1.04}
              transitionSpeed={300}
              className="min-w-[320px] max-w-[320px] h-[480px] bg-white/80 border border-gray-200 backdrop-blur-lg shadow-xl rounded-3xl p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Image or GIF */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl w-full h-36 object-cover mb-4 shadow-md"
                    loading="lazy"
                  />
                )}

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <div className="flex flex-wrap gap-2 text-xs text-gray-700 mt-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white px-3 py-0.5 rounded-full border border-gray-300 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-snug line-clamp-4">
                  {project.description || "No description available."}
                </p>
              </div>

              <div className="mt-auto flex gap-3 pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 text-white text-sm px-4 py-1.5 rounded-full hover:bg-black transition"
                >
                  Live Demo
                </a>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
