import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../data/skills";

const categories = Object.keys(skills);

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1 rounded-full text-sm border transition ${
                activeTab === cat
                  ? "bg-black text-white"
                  : "text-gray-700 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Skill List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {skills[activeTab].map((skill, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-sm text-gray-800 px-4 py-2 rounded-lg shadow-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
