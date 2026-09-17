import { personalInfo } from "../../data/data";

const proof = [
  ["10+", "production services"],
  ["10k+", "records per pipeline run"],
  ["40%", "faster reporting"],
  ["20+", "critical incidents resolved"],
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <p className="hero-status">
          <i /> {personalInfo.availability}
        </p>
        <h1 id="hero-title">{personalInfo.name}</h1>
        <p className="hero-role">
          <em>Backend-focused software engineer at Infor.</em>
          <br />
          {personalInfo.location} / Remote.
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

      <div className="metrics" aria-label="Production impact at Infor">
        {proof.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="metrics-note">
        At Infor · Mar 2024—Now · Multi-tenant SaaS · ASP.NET Core · SQL Server
      </p>
    </section>
  );
}
