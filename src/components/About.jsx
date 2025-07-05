import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-2 py-24 bg-white text-black transition-all duration-300"
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
            I’m <strong>Surya Prabhas</strong>, a passionate Full-Stack Developer with a background in Computer Science and over 2 years of hands-on experience building robust web applications and scalable backend systems.
          </p>
          <p className="text-gray-700 mb-4">
            My curiosity for technology started early—I’ve always questioned how things work: how code becomes 0s and 1s, how Wi-Fi connects us to websites, how massive movies stream instantly to our personal devices. I’m fascinated by the evolution of the internet and how data moves behind the scenes.
          </p>
          <p className="text-gray-700 mb-4">
            This curiosity drives me to explore and build. I love frontend just a bit more than backend—there’s something magical about bringing ideas to life visually. But it’s the constant “how,” “when,” and “why” that keeps me learning and growing.
          </p>
          <p className="text-gray-700">
            I’m currently exploring ideas to build meaningful products in the tech space, combining creative UI with logical problem solving. I believe good software solves problems elegantly—and that’s what I strive to do every day.
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
