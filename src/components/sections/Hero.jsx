import { personalInfo } from "../../data/data";
import Orbit from "../Orbit";

const proof = [
  ["10+", "production services"],
  ["10k+", "records per pipeline run"],
  ["40%", "faster reporting"],
  ["20+", "critical incidents resolved"],
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Orbit />
      <div className="hero-inner">
        <p className="hero-status">
          <i /> {personalInfo.availability}
        </p>
        <h1 id="hero-title">{personalInfo.name}</h1>
        <p className="hero-role">
          <em>
            {personalInfo.title} at {personalInfo.company}.
          </em>
          <br />
          {personalInfo.team} · {personalInfo.location} / Remote.
        </p>
        <div className="hero-cta">
          <a href="#work" className="button button-primary">
            View selected work
          </a>
          <a href="/resume" className="button button-quiet">
            Open résumé →
          </a>
        </div>
      </div>

      <div className="metrics" aria-label="Production impact">
        {proof.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="metrics-note">
        3+ yrs shipping production software · C# · .NET Core · AWS · SQL Server
        · Angular
      </p>
    </section>
  );
}
