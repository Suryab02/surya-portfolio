import { Link } from "react-router-dom";
import { projects } from "../../data/data";

function ProjectLinks({ project }) {
  return <div className="project-actions"><Link to={`/work/${project.slug}`}>Read case study →</Link>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Live product ↗</a>}{project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Source ↗</a>}</div>;
}

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="work-section section-pad">
      <header className="section-intro"><p className="eyebrow">Selected work</p><h2>Products built around a measurable problem.</h2></header>
      <article className="featured-project">
        <div className="feature-flow"><span>Résumé</span><i>→</i><span>AI extraction</span><i>→</i><span>Fit score</span></div>
        <div className="feature-copy"><p>{featured.subtitle} · {featured.year}</p><h3>{featured.name}</h3><strong>{featured.metrics[0]}</strong><p>{featured.description}</p><div className="project-tech">{featured.tech.slice(0,3).map((tech) => <span key={tech}>{tech}</span>)}</div><ProjectLinks project={featured} /></div>
      </article>
      <div className="project-list">{rest.map((project) => <article key={project.name}><div><p>{project.subtitle} · {project.year}</p><h3>{project.name}</h3></div><p>{project.description}</p><strong>{project.metrics[0]}</strong><ProjectLinks project={project} /></article>)}</div>
    </section>
  );
}
