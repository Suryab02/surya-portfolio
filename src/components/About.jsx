import { motion } from "framer-motion";

export default function About() {
  return (
   <section id="about" className="scroll-mt-20 py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <motion.img
         src="https://avatars.githubusercontent.com/u/103340147?v=4"
          alt="Surya Prabhas"
          className="rounded-full w-48 h-48 object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg leading-7"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            I'm a Full-Stack Developer with 2+ years of experience in building scalable, high-performance applications. I specialize in React, Node.js, and modern backend technologies. I love crafting clean UIs and solving real-world problems with code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
