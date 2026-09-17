import { Link } from "react-router-dom";
import { experience } from "../../data/data";
import SystemCore from "../SystemCore";

// the current role earns more detail; earlier roles stay to one line
const DETAIL = [0, 2, 4, 6];

export default function Experience() {
  const [current, ...earlier] = experience;
  return (
    <section id="experience" className="section">
      <header className="section-head">
        <p className="eyebrow">Experience</p>
        <h2>Production work, not just portfolio work.</h2>
      </header>

      <div className="exp-grid">
        <article className="exp-main">
          <div className="panel-top">
            <span className="panel-idx">{current.period}</span>
            <span>{current.location}</span>
          </div>
          <h3>{current.role}</h3>
          <p className="exp-org">
            {current.company}
            {current.project ? ` · ${current.project}` : ""}
          </p>
          <ul>
            {DETAIL.map((i) => current.highlights[i])
              .filter(Boolean)
              .map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </article>

        <SystemCore />
      </div>

      <div className="exp-past">
        {earlier.map((job) => (
          <article key={`${job.company}-${job.period}`}>
            <time>{job.period}</time>
            <h3>{job.role}</h3>
            <p className="exp-org">{job.company}</p>
            <p>{job.highlights[0]}</p>
          </article>
        ))}
      </div>

      <Link to="/resume" className="inline-link">
        View complete experience →
      </Link>
    </section>
  );
}
