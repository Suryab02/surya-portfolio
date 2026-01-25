import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#050505] text-gray-900 dark:text-white scroll-mt-2"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            About <span className="text-purple-600 dark:text-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <motion.img
                src="https://avatars.githubusercontent.com/u/103340147?v=4"
                alt="Surya Prabhas"
                className="rounded-2xl object-cover w-72 h-72 md:w-80 md:h-80 border-4 border-gray-100 dark:border-white/10 shadow-xl dark:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 bg-opacity-10 dark:bg-opacity-20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 rounded-full blur-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 space-y-4 text-gray-600 dark:text-gray-300"
          >
            <p className="text-base leading-relaxed">
              I'm <strong className="text-gray-900 dark:text-white">Surya Prabhas</strong>, a passionate os developer with a background in Computer Science and over 2 years of hands-on experience building robust web applications and scalable backend systems.
            </p>

            <p className="text-base leading-relaxed">
              My curiosity for technology started early—I've always questioned how things work: how code becomes 0s and 1s, how Wi-Fi connects us to websites, how massive movies stream instantly to our personal devices. I'm fascinated by the evolution of the internet and how data moves behind the scenes.
            </p>

            <p className="text-base leading-relaxed">
              This curiosity drives me to explore and build. I'm passionate about system design—understanding how sophisticated architectures solve complex problems elegantly. I constantly improve myself by staying updated with emerging technologies and design patterns. It's the constant "how," "when," and "why" that keeps me learning and growing.
            </p>

            <p className="text-base leading-relaxed">
              I'm currently exploring ideas to build meaningful products in the tech space, combining creative UI with logical problem solving. I believe good software solves problems elegantly—and that's what I strive to do every day.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-4 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-colors">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">Full-Stack</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Developer</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-8 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What I Do</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🎨</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Frontend Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Creating beautiful, responsive, and user-friendly interfaces with React, Angular, and modern CSS frameworks.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">⚙️</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Backend Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building scalable APIs and server architecture with Node.js, .NET Core, Spring Boot, and FastAPI.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🚀</div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Product Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Combining creative UI with logical problem solving to build meaningful products that solve real-world problems.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}