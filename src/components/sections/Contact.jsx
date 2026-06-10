import { motion } from "framer-motion";
import { personalInfo } from "../../data/data";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-10"
      >
        Get in Touch
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-muted leading-[1.8] mb-10 max-w-lg text-lg"
      >
        Looking for a role where I can build high-performance distributed
        systems and enterprise-grade software. Let's connect.
      </motion.p>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <a
          href={`mailto:${personalInfo.email}`}
          className="group inline-flex items-center gap-3 font-serif text-3xl text-ink hover:text-terracotta transition-colors duration-300"
        >
          {personalInfo.email}
          <div className="bg-terracotta/10 rounded-full p-2 group-hover:bg-terracotta/20 transition-colors">
            <ArrowUpRight size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-4 mt-12"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium text-muted border border-rule rounded-full hover:text-ink hover:border-ink/30 transition-all duration-300"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium text-muted border border-rule rounded-full hover:text-ink hover:border-ink/30 transition-all duration-300"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-t border-rule mt-24 pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p className="text-xs font-medium text-faded uppercase tracking-widest">
          © {year} {personalInfo.name}
        </p>
        <p className="text-xs text-muted font-serif italic">
          Crafted with care.
        </p>
      </motion.div>
    </div>
  );
}
