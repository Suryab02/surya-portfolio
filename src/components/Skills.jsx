import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import skills from "../data/skills";

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState("Frontend");

  // Get unique categories
  const categories = [...new Set(skills.map((skill) => skill.category))];

  // Get skills for selected category
  const categorizedSkills = skills.filter(
    (skill) => skill.category === expandedCategory
  );

  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      className="py-20 bg-white text-gray-900 scroll-mt-2"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">My Skillset</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I've learned and developed across frontend, backend, databases, and DevOps.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setExpandedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                expandedCategory === category
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
        >
          {categorizedSkills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative"
            >
              {/* Skill Card */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center cursor-default hover:border-accent hover:bg-white">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-5xl mb-3"
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>

                {/* Proficiency Badge */}
                <div className="mt-2">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      skill.proficiency === "Advanced"
                        ? "bg-green-100 text-green-700"
                        : skill.proficiency === "Intermediate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {skill.proficiency}
                  </span>
                </div>

                {/* Hover Description */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-gray-900 text-white text-xs rounded-lg p-2 pointer-events-none hidden group-hover:block z-10"
                >
                  {skill.description}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </motion.div>

                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-blue-500 blur-lg opacity-0 group-hover:opacity-20 -z-10 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-900">
            {expandedCategory} Skills Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categorizedSkills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="flex gap-4"
              >
                <div className="text-3xl flex-shrink-0">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">
                      {skill.name}
                    </h4>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        skill.proficiency === "Advanced"
                          ? "bg-green-100 text-green-700"
                          : skill.proficiency === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: "Total Skills", value: skills.length },
            { label: "Categories", value: categories.length },
            { label: "Advanced", value: skills.filter((s) => s.proficiency === "Advanced").length },
            { label: "Years Experience", value: "2+" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}