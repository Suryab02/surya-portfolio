import { Link } from "react-router-dom";
import { projects } from "../../data/data";

export default function Projects() {
  return (
    <section id="work" className="index-section">
      <header className="index-head">
        <p className="eyebrow">Selected work</p>
        <h2>Products built around a measurable problem.</h2>
      </header>

      {projects.map((project, i) => (
        <article className="index-row" key={project.slug}>
          <p className="index-num">{String(i + 1).padStart(2, "0")}</p>

          <div>
            <p className="index-kicker">
              {project.subtitle} · {project.year}
            </p>
            <Link to={`/work/${project.slug}`} className="index-title">
              {project.name}
            </Link>
            <p className="index-desc">{project.description}</p>
            <div className="index-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="index-aside">
            <strong>{project.metrics[0]}</strong>
            <Link to={`/work/${project.slug}`} className="is-lead">
              Read case study →
            </Link>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live product ↗
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Source ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
