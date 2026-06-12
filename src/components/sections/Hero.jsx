import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, FileText } from "lucide-react";
import { personalInfo } from "../../data/data";

export default function Hero() {
  return (
    <div className="min-h-[90vh] flex flex-col py-20">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <img
          src="/logo.png"
          alt="SP"
          className="w-9 h-9 opacity-50"
        />
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-ink leading-[1.05] mb-8"
          style={{ fontSize: "clamp(2.8rem, 7vw, 4.8rem)" }}
        >
          {personalInfo.firstName}
          <br />
          <span className="text-muted">{personalInfo.lastName}</span>
        </motion.h1>

        {/* Title + Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-1"
        >
          <p className="text-lg text-muted tracking-[-0.01em]">
            {personalInfo.title}
          </p>
          <span className="flex items-center gap-1 text-sm text-faded">
            <MapPin size={13} />
            {personalInfo.location}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-faded max-w-lg leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Available badge + Resume button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-faded">
              {personalInfo.availability}
            </span>
          </div>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-muted border border-rule rounded-full hover:text-ink hover:border-ink/30 transition-all duration-300 shrink-0"
          >
            <FileText size={13} />
            Resume
          </a>
        </motion.div>
      </div>

      {/* Bottom anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex items-center justify-between pt-10 border-t border-rule/40"
      >
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-faded hover:text-ink transition-colors duration-300"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-faded hover:text-ink transition-colors duration-300"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        </div>
        <span className="text-xs text-faded/60 font-serif italic">
          {personalInfo.email}
        </span>
      </motion.div>
    </div>
  );
}
