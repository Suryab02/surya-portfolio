import { personalInfo } from "../../data/data";

const proof = [
  ["10+", "production services"],
  ["10k+", "records per pipeline run"],
  ["40%", "faster reporting"],
  ["20+", "critical incidents resolved"],
];

export default function Hero() {
  return (
    <>
      <section className="lede" aria-labelledby="hero-title">
        <p className="eyebrow">
          {personalInfo.name} · {personalInfo.location}
        </p>
        <h1 id="hero-title">
          Backend engineer building reliable, data-heavy products.
        </h1>
        <p className="lede-deck">
          I work across C#/.NET services, SQL performance, Angular interfaces,
          and LLM-backed document extraction for enterprise software.
        </p>
        <div className="lede-actions">
          <a href="#work" className="button button-primary">
            View selected work
          </a>
          <a href="/resume" className="button button-quiet">
            Open résumé →
          </a>
        </div>
        <p className="lede-meta">
          <i /> {personalInfo.availability}
        </p>
      </section>

      <section className="metrics" aria-label="Production impact at Infor">
        <div className="metrics-rule">
          <span>Production impact</span>
          <span>At Infor · Mar 2024—Now</span>
        </div>
        <div className="metrics-grid">
          {proof.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p>
          Multi-tenant SaaS · ASP.NET Core · SQL Server · Angular · Document
          extraction
        </p>
      </section>
    </>
  );
}
