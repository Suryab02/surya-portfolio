import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white to-gray-50 text-black scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-14 text-center text-accent">
          Experience
        </h2>

        <ul className="relative border-l-2 border-gray-300 space-y-16">
          {experience.map((exp, idx) => {
            const ref = useRef();
            const inView = useInView(ref, { once: true });

            return (
              <motion.li
                key={idx}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative pl-12 group`}
              >
                {/* Logo & Dot */}
                <div className="absolute -left-[26px] top-1 flex items-center justify-center w-10 h-10 rounded-full border-2 border-accent bg-white shadow">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4 }}
                    className="w-5 h-5 bg-accent rounded-full"
                  />
                </div>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-6 h-6 object-contain mb-2"
                  />
                )}

                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600 text-sm">{exp.company}</p>
                <p className="text-xs text-gray-500 mb-2">{exp.year}</p>

                <ul className="list-disc text-gray-700 text-sm pl-4 space-y-1">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
