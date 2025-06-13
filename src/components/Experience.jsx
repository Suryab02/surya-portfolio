import { useRef, useEffect } from "react";
import experience from "../data/experience";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;

    const scrollWidth = scroll.scrollWidth;
    const viewportWidth = section.offsetWidth;
    const totalScroll = scrollWidth - viewportWidth;

    const ctx = gsap.context(() => {
      gsap.to(scroll, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 text-black overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 left-0 w-full text-center z-10 py-10 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <h2 className="text-4xl font-extrabold tracking-tight text-accent">Experience</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-12 px-16 py-40 w-max"
      >
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="min-w-[320px] max-w-[320px] h-[460px] bg-white/80 border border-gray-200 backdrop-blur-lg shadow-2xl rounded-3xl p-6 flex flex-col justify-between hover:shadow-3xl transition-all duration-300"
          >
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-10 h-10 object-contain mb-4"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
              <p className="text-sm text-gray-600 mb-1">{exp.company}</p>
              <p className="text-xs text-gray-500 mb-3">{exp.year}</p>
              <ul className="list-disc text-sm text-gray-700 pl-4 space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
