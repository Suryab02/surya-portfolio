import { motion } from "framer-motion";
import { personalInfo } from "../../data/data";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 font-mono text-[11px]"
    >
      <a
        href={`mailto:${personalInfo.email}`}
        className="text-dim hover:text-accent transition-colors no-underline"
      >
        {personalInfo.email}
      </a>
      <div className="flex items-center gap-5">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-faint hover:text-bright transition-colors no-underline"
        >
          [github]
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-faint hover:text-bright transition-colors no-underline"
        >
          [linkedin]
        </a>
        <span className="text-ghost">© {year}</span>
      </div>
    </motion.div>
  );
}
