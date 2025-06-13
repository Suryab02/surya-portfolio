import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-24 bg-white text-black transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Skillset
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.06}
                transitionSpeed={300}
                className="relative bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <div className="text-sm font-semibold tracking-wide">
                  {skill.name}
                </div>
                {/* Glow ring effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200 blur-xl opacity-20 z-[-1]" />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
