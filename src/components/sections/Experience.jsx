import { Link } from "react-router-dom";
import { experience } from "../../data/data";
import SystemCore from "../SystemCore";

// the current role earns more detail; earlier roles stay to one line
const DETAIL = [0, 2, 4, 6];

export default function Experience() {
  const [current, ...earlier] = experience;
  return (
    <section id="experience" className="timeline-section">
      <header className="index-head">
        <p className="eyebrow">Experience</p>
        <h2>Production work, not just portfolio work.</h2>
      </header>

      <article className="timeline-row">
        <div className="timeline-when">
          <time>{current.period}</time>
          <span>{current.location}</span>
          {current.project && <span>{current.project}</span>}
        </div>
        <div>
          <h3>{current.role}</h3>
          <p className="timeline-org">{current.company}</p>
          <ul>
            {DETAIL.map((i) => current.highlights[i])
              .filter(Boolean)
              .map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </div>
      </article>

      {earlier.map((job) => (
        <article className="timeline-row" key={`${job.company}-${job.period}`}>
          <div className="timeline-when">
            <time>{job.period}</time>
            <span>{job.location}</span>
          </div>
          <div>
            <h3>{job.role}</h3>
            <p className="timeline-org">{job.company}</p>
            <ul>
              <li>{job.highlights[0]}</li>
            </ul>
          </div>
        </article>
      ))}

      <div className="system-band">
        <SystemCore />
      </div>

      <Link to="/resume" className="inline-link">
        View complete experience →
      </Link>
    </section>
  );
}
