import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import {
  personalInfo,
  skills,
  experience,
  education,
  achievements,
} from "../data/data";

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-faded mb-5 pt-10 border-t border-rule">
      {children}
    </p>
  );
}

export default function ResumePage() {
  return (
    <div className="bg-cream min-h-screen text-ink">
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 pt-24 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-faded hover:text-ink transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={14} />
          Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-start justify-between gap-4 mb-12"
        >
          <div>
            <h1 className="font-serif text-ink text-3xl sm:text-4xl mb-2">
              Resume
            </h1>
            <p className="text-sm text-faded">
              {personalInfo.name} · {personalInfo.location}
            </p>
          </div>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-cream bg-terracotta rounded-full hover:bg-terracotta-hover transition-colors duration-300"
          >
            <Download size={13} />
            Download PDF
          </a>
        </motion.div>

        <SectionLabel>Experience</SectionLabel>
        <div className="space-y-10">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <p className="font-medium text-ink">
                  {job.role} · {job.company}
                </p>
                <span className="text-xs text-faded whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              <p className="text-xs text-faded mb-3">
                {job.location}
                {job.project ? ` · ${job.project}` : ""}
              </p>
              <ul className="space-y-2">
                {job.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-faded/60"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SectionLabel>Skills</SectionLabel>
        <div className="space-y-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-wrap items-baseline gap-x-3"
            >
              <span className="text-xs font-medium text-ink w-32 shrink-0">
                {group.category}
              </span>
              <span className="text-sm text-muted">
                {group.items.join(" · ")}
              </span>
            </div>
          ))}
        </div>

        <SectionLabel>Education</SectionLabel>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div>
            <p className="font-medium text-ink">{education.degree}</p>
            <p className="text-sm text-muted">
              {education.school} · CGPA {education.gpa}
            </p>
          </div>
          <span className="text-xs text-faded whitespace-nowrap">
            {education.period}
          </span>
        </div>

        <SectionLabel>Achievements</SectionLabel>
        <ul className="space-y-2 mb-16">
          {achievements.map((a, i) => (
            <li
              key={i}
              className="text-sm text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-faded/60"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
