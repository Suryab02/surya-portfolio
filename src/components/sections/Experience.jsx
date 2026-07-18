import { Link } from "react-router-dom";
import { experience } from "../../data/data";
import SystemCore from "../SystemCore";

export default function Experience() {
  return (
    <section id="experience" className="experience-section section-pad">
      <header className="section-intro"><p className="eyebrow">Experience</p><h2>Production work, not just portfolio work.</h2></header>
      <div className="experience-feature"><div><span>{experience[0].period}</span><h3>{experience[0].role}</h3><p>{experience[0].company} · {experience[0].project}</p><ul>{[experience[0].highlights[0],experience[0].highlights[2],experience[0].highlights[4]].map((item) => <li key={item}>{item}</li>)}</ul></div><SystemCore /></div>
      <div className="experience-list">{experience.slice(1).map((job) => <article key={`${job.company}-${job.period}`}><time>{job.period}</time><div><h3>{job.role}</h3><p>{job.company}</p></div><p>{job.highlights[0]}</p></article>)}</div>
      <Link to="/resume" className="inline-link">View complete experience →</Link>
    </section>
  );
}
