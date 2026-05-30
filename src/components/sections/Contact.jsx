import { motion } from "framer-motion";
import { personalInfo } from "../../data/data";

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
        className="text-muted leading-[1.8] mb-10 max-w-lg"
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
          className="group inline-flex items-center gap-2.5 font-serif text-xl text-ink hover:text-terracotta transition-colors duration-300"
        >
          {personalInfo.email}
          <span className="group-hover:translate-x-1 transition-transform duration-300 text-base">
            →
          </span>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-6 mt-6"
      >
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-ink transition-colors duration-300"
        >
          GitHub
        </a>
        <span className="text-rule">·</span>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-ink transition-colors duration-300"
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-t border-rule mt-20 pt-8 pb-4"
      >
        <p className="text-xs text-faded">
          © {year} {personalInfo.name}
        </p>
      </motion.div>
    </div>
  );
}
