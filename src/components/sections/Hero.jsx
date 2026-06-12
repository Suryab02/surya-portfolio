import { motion } from "framer-motion";
import { personalInfo, home } from "../../data/data";

const links = [
  { label: "[github]", href: null, key: "github" },
  { label: "[linkedin]", href: null, key: "linkedin" },
  { label: "[mail]", href: null, key: "mail" },
];

export default function Hero() {
  const hrefs = {
    github: personalInfo.github,
    linkedin: personalInfo.linkedin,
    mail: `mailto:${personalInfo.email}`,
  };

  return (
    <div className="pt-32 pb-14 sm:pt-40 sm:pb-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs text-accent mb-5"
      >
        {home.heroComment}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-medium uppercase text-bright leading-[1.0] tracking-[-0.02em]"
        style={{ fontSize: "clamp(2.6rem, 7vw, 4.4rem)" }}
      >
        {personalInfo.firstName}
        <br />
        <span className="text-ghost">{personalInfo.lastName}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 text-sm text-dim max-w-md leading-[1.8]"
      >
        {home.heroTagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px]"
      >
        <span className="flex items-center gap-2 text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
          </span>
          open_to_work
        </span>
        {links.map(({ label, key }) => (
          <a
            key={key}
            href={hrefs[key]}
            target={key === "mail" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-faint hover:text-bright transition-colors no-underline"
          >
            {label}
          </a>
        ))}
      </motion.div>
    </div>
  );
}
