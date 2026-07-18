import { motion } from "framer-motion";
import { Download } from "lucide-react";
import PageMeta from "../components/PageMeta";
import {
  personalInfo,
  skills,
  experience,
  projects,
  education,
  achievements,
} from "../data/data";

function Section({ label, children }) {
  return (
    <div className="border-t border-line py-8 grid sm:grid-cols-[130px_1fr] gap-4 sm:gap-6">
      <p className="font-mono text-[11px] text-faint pt-0.5">{label}</p>
      <div>{children}</div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="page-shell resume-shell">
      <PageMeta
        title="Résumé — Surya Prabhas Bandaru"
        description="Experience, selected projects, technical skills, education, and achievements of backend-focused software engineer Surya Prabhas Bandaru."
        path="/resume"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="resume-header flex flex-wrap items-start justify-between gap-4 mb-10"
      >
        <div>
          <h1 className="font-display font-medium uppercase text-bright text-3xl sm:text-4xl tracking-[-0.02em]">
            Resume<span className="text-accent">.</span>
          </h1>
          <p className="font-mono text-[11px] text-faint mt-3">
            {personalInfo.name.toLowerCase().replace(/ /g, "_")} ·{" "}
            {personalInfo.email}
          </p>
        </div>
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-accent border border-accent px-4 py-2 rounded-[3px] hover:bg-accent hover:text-base transition-colors duration-300 no-underline"
        >
          <Download size={13} />
          download_pdf
        </a>
      </motion.div>

      <Section label="EXPERIENCE">
        <div className="space-y-9">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-[15px] font-medium text-bright">
                  {job.role} — {job.company}
                </p>
                <span className="font-mono text-[10px] text-accent whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              <p className="font-mono text-[10px] text-ghost mt-1">
                {job.location.toLowerCase()}
                {job.project ? ` · ${job.project.toLowerCase()}` : ""}
              </p>
              <ul className="mt-3 space-y-2">
                {job.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-xs text-dim leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ghost"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section label="PROJECTS">
        <div className="space-y-7">
          {projects.map((p) => (
            <div key={p.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-[15px] font-medium text-bright">
                  {p.name}{" "}
                  <span className="text-faint font-normal text-xs">
                    — {p.subtitle}
                  </span>
                </p>
                <span className="font-mono text-[10px] text-ghost">
                  {p.year}
                </span>
              </div>
              <p className="text-xs text-dim leading-relaxed mt-2">
                {p.description}
              </p>
              {p.achievement && (
                <p className="font-mono text-[10px] text-accent mt-2">
                  ★ {p.achievement}
                </p>
              )}
              <p className="font-mono text-[10px] text-ghost mt-2">
                {p.tech.join(" · ").toLowerCase()}
                {p.link && (
                  <>
                    {"  "}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent no-underline hover:underline"
                    >
                      [live ↗]
                    </a>
                  </>
                )}
                {p.repo && (
                  <>
                    {" "}
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent no-underline hover:underline"
                    >
                      [code ↗]
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="TECHNICAL SKILLS">
        <div className="space-y-2.5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-0.5"
            >
              <span className="font-mono text-[10px] text-faint w-36 shrink-0 uppercase tracking-wide">
                {group.category}
              </span>
              <span className="font-mono text-[11px] text-dim">
                {group.items.join(" · ").toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section label="EDUCATION">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div>
            <p className="text-[15px] font-medium text-bright">
              {education.degree}
            </p>
            <p className="text-xs text-dim mt-1">
              {education.school} · CGPA {education.gpa}
            </p>
          </div>
          <span className="font-mono text-[10px] text-ghost whitespace-nowrap">
            {education.period}
          </span>
        </div>
      </Section>

      <Section label="ACHIEVEMENTS">
        <ul className="space-y-2">
          {achievements.map((a, i) => (
            <li
              key={i}
              className="text-xs text-dim leading-relaxed pl-4 relative before:content-['★'] before:absolute before:left-0 before:text-accent before:text-[10px]"
            >
              {a}
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
