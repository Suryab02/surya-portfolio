import { motion } from "framer-motion";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        {/* Experience Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <ul className="space-y-8 border-l-2 border-gray-300 pl-6">
            {experience.map((exp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-lg font-semibold">{exp.role}</div>
                <div className="text-sm text-gray-600">{exp.company}</div>
                <div className="text-xs text-gray-500 mb-2">{exp.year}</div>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-100 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">My Resume</h3>
          <p className="text-gray-700 mb-4">
            Download my resume for a detailed overview of my skills, experience, and projects.
          </p>
          <a
            href="/Suryaprabhas_Resume.pdf"
            download
            className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
