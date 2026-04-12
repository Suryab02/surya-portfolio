import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Code2, Database, Layers } from "lucide-react";

export default function About() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-500 mt-4 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6 text-slate-200 leading-relaxed text-lg"
          >
            <p>
              I am a <strong className="text-white font-bold">Software Engineer</strong> at Infor, architecting high-performance <strong className="text-white font-bold">enterprise SaaS applications</strong>. I focus on building scalable backend systems and streamlining complex multi-tenant workflows.
            </p>
            <p>
              My expertise covers the <strong className="text-white font-bold">.NET ecosystem</strong> and <strong className="text-white font-bold">Java (Spring Boot)</strong>, with a heavy emphasis on building resilient RESTful APIs and optimizing data infrastructures.
            </p>
            <p>
              With a foundation in full-stack development, I value long-term maintainability and system resilience. I'm a builder who loves solving real-world engineering challenges at scale.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4"
          >
            {[
              { icon: <Database className="w-5 h-5 text-blue-400" />, title: "Backend Architecture", desc: "Building resilient microservices and fast monolithic APIs." },
              { icon: <Layers className="w-5 h-5 text-blue-400" />, title: "Full-Stack Tech", desc: "Connecting rich, interactive UIs with data-heavy backend resources." },
              { icon: <Code2 className="w-5 h-5 text-blue-400" />, title: "Clean Code", desc: "Writing legible, testable, and maintainable software implementations." },
              {
                icon: <div className="text-xs font-bold text-blue-400">B.Tech</div>,
                title: "Education",
                desc: "Computer Science & Engineering, Presidency University (8.5/10)"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex gap-5 items-start"
              >
                <div className="mt-1 flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>



  );
}