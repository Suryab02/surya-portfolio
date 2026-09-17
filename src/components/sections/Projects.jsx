import { Link } from "react-router-dom";
import { projects } from "../../data/data";

export default function Projects() {
  return (
    <section id="work" className="section">
      <header className="section-head">
        <p className="eyebrow">Selected work</p>
        <h2>Products built around a measurable problem.</h2>
      </header>

      <div className="panel-grid">
        {projects.map((project, i) => (
          <article className="panel" key={project.slug}>
            <div className="panel-top">
              <span className="panel-idx">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{project.year}</span>
            </div>

            <h3>{project.name}</h3>
            <p className="panel-kicker">{project.subtitle}</p>
            <p className="panel-desc">{project.description}</p>
            <span className="panel-metric">{project.metrics[0]}</span>

            <div className="panel-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="panel-links">
              <Link to={`/work/${project.slug}`} className="is-lead">
                Case study →
              </Link>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live ↗
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
      </div>
    </section>
  );
}
