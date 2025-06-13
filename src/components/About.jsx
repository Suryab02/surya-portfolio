import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-24 bg-white text-black transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        {/* 📄 Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg leading-relaxed max-w-xl"
        >
          <h2 className="text-4xl font-bold mb-6 text-black">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-gray-700 mb-4">
            I’m a <strong>Full-Stack Developer</strong> with 2+ years of experience
            building high-performance applications. I specialize in modern tech stacks
            like <strong>React</strong>, <strong>Node.js</strong>, and scalable cloud infrastructure.
          </p>
          <p className="text-gray-700">
            I enjoy crafting elegant user experiences, optimizing backend logic, and solving complex
            engineering problems with clean, scalable code.
          </p>
        </motion.div>

        {/* 👤 Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <motion.img
              src="https://avatars.githubusercontent.com/u/103340147?v=4"
              alt="Surya Prabhas"
              className="rounded-full object-cover w-full h-full border-4 border-white shadow-xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-transparent via-white/10 to-white/5 blur-xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
