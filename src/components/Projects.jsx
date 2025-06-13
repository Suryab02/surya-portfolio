import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import projects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef();
  const horizontalRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    const scrollWidth = horizontal.scrollWidth;
    const viewportWidth = container.offsetWidth;

    const totalScroll = scrollWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(horizontal, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
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
  className="scroll-mt-30 relative h-screen bg-white text-black overflow-hidden"
>

      <h2 className="text-3xl font-bold px-10 pt-10">Projects</h2>
      <div
        ref={horizontalRef}
        className="flex gap-6 px-10 py-20 w-max"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[300px] max-w-[300px] h-[400px] bg-gray-100 p-6 rounded-xl shadow-md flex flex-col justify-between"
          >
            <h3 className="text-lg font-bold">{project.title}</h3>
            <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-3">
              <a
                href={project.github}
                className="bg-black text-white text-sm px-3 py-1 rounded"
              >
                GitHub
              </a>
              <a
                href={project.live}
                className="bg-gray-800 text-white text-sm px-3 py-1 rounded"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
