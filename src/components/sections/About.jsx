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
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6 text-slate-600 leading-relaxed text-[15px]"
          >
            <p>
              I am a dedicated <strong className="text-slate-900 font-semibold">Software Engineer</strong> currently at Infor, specializing in building high-performance <strong className="text-slate-900 font-semibold">enterprise SaaS applications</strong>. I thrive on architecting scalable backend systems and streamlining complex multi-tenant workflows.
            </p>
            <p>
              My expertise spans across the <strong className="text-slate-900 font-semibold">.NET ecosystem (ASP.NET Core, C#, SQL Server)</strong> and <strong className="text-slate-900 font-semibold">Java (Spring Boot)</strong>, with a strong focus on building resilient RESTful APIs and optimizing data-heavy infrastructures. I am passionate about infrastructure, clean architecture, and integrating AI to solve real-world engineering challenges.
            </p>
            <p>
              With experience at both Infor and Tech Mahindra, I've developed a robust foundation in full-stack development—from migrating legacy systems to modern <strong className="text-slate-900 font-semibold">Angular</strong> frontends to designing real-time emergency platforms. I'm a builder who values long-term maintainability and system resilience.
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
              { icon: <Database className="w-5 h-5 text-blue-600" />, title: "Backend Architecture", desc: "Building resilient microservices and fast monolithic APIs." },
              { icon: <Layers className="w-5 h-5 text-blue-600" />, title: "Full-Stack Integrations", desc: "Connecting rich, interactive UIs with data-heavy backend resources." },
              { icon: <Code2 className="w-5 h-5 text-blue-600" />, title: "Clean Code", desc: "Writing legible, testable, and maintainable software implementations." },
              {
                icon: <div className="text-xs font-bold text-blue-600">B.Tech</div>,
                title: "Education",
                desc: "Computer Science & Engineering, Presidency University (CGPA: 8.5/10)"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex gap-4 items-start"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-blue-100/50 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>

  );
}