import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/data";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    document.title = project ? `${project.name} case study — Surya Prabhas` : "Case study not found — Surya Prabhas";
    return () => { document.title = "Surya Prabhas Bandaru — Software Engineer"; };
  }, [project]);

  if (!project) {
    return <main className="case-shell case-missing"><p>That case study does not exist.</p><Link to="/#work">Return to work →</Link></main>;
  }

  const { caseStudy } = project;
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  return (
    <main className="case-shell">
      <header className="case-hero">
        <Link to="/#work" className="case-back">← Selected work</Link>
        <div>
          <p>{caseStudy.eyebrow} · {project.year}</p>
          <h1>{project.name}<em>.</em></h1>
          <span>{project.blurb}</span>
        </div>
        <div className="case-facts">
          <div><span>Type</span><strong>{caseStudy.type}</strong></div>
          <div><span>System</span><strong>{project.tech.join(" · ")}</strong></div>
          <div><span>Reported outcome</span><strong>{project.metrics[0]}</strong></div>
        </div>
      </header>

      <section className="case-intro case-section">
        <p className="case-label">01 / The problem</p>
        <div><h2>A useful system starts with the real constraint.</h2><p>{caseStudy.challenge}</p></div>
      </section>

      <section className="case-architecture case-section">
        <p className="case-label">02 / The system</p>
        <div>
          <h2>From input to outcome.</h2>
          <p>{caseStudy.system}</p>
          <div className="architecture-flow">
            {caseStudy.flow.map((step, index) => (
              <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < caseStudy.flow.length - 1 && <i>→</i>}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-proof case-section">
        <p className="case-label">03 / Proof</p>
        <div>
          <h2>What you can inspect.</h2>
          <div className="artifact-list">
            {caseStudy.artifacts.map((artifact) => {
              const content = <><span>{artifact.type}</span><div><h3>{artifact.label}</h3><p>{artifact.note}</p></div><strong>{artifact.href ? "Open ↗" : "Not public"}</strong></>;
              return artifact.href ? <a key={artifact.label} href={artifact.href} target="_blank" rel="noopener noreferrer">{content}</a> : <div key={artifact.label} className="artifact-unavailable">{content}</div>;
            })}
          </div>
        </div>
      </section>

      <section className="case-scope case-section">
        <p className="case-label">04 / Scope</p>
        <div>
          <h2>Ownership, constraint, and what comes next.</h2>
          <div className="case-scope-grid">
            <div><span>I owned</span><p>{caseStudy.ownership}</p></div>
            <div><span>Hard constraint</span><p>{caseStudy.constraint}</p></div>
            <div><span>I would improve</span><p>{caseStudy.reflection}</p></div>
          </div>
        </div>
      </section>

      <section className="case-decisions case-section">
        <p className="case-label">05 / Decisions</p>
        <div><h2>What I chose—and why.</h2><ol>{caseStudy.decisions.map((decision, index) => <li key={decision}><span>0{index + 1}</span><p>{decision}</p></li>)}</ol></div>
      </section>

      <section className="case-outcome">
        <p className="case-label">06 / Outcome</p>
        <h2>{caseStudy.outcome}</h2>
        <p className="case-evidence">Evidence note: {caseStudy.evidenceNote}</p>
        <div className="case-outcome-actions">
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Open live project ↗</a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">View source ↗</a>}
          <Link to="/#work">All selected work →</Link>
          <Link to={`/work/${nextProject.slug}`}>Next: {nextProject.name} →</Link>
        </div>
      </section>
    </main>
  );
}
