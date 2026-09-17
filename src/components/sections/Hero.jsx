import { personalInfo } from "../../data/data";

const proof = [
  ["10+", "production services"],
  ["10k+", "records per pipeline run"],
  ["40%", "faster reporting"],
  ["20+", "critical incidents resolved"],
];

const spec = [
  ["Role", "Software Engineer · Infor"],
  ["Focus", "Backend services · Data pipelines · LLM extraction"],
  ["Stack", "C# · ASP.NET Core · SQL Server · Angular"],
  ["Since", "Mar 2024 · 2+ yrs in production"],
  ["Base", "Hyderabad, India · Remote"],
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div>
          <p className="eyebrow">Surya Prabhas Bandaru</p>
          <h1 id="hero-title">
            Backend engineer building <em>reliable</em> systems.
          </h1>
          <p className="hero-deck">
            I work across C#/.NET services, SQL performance, Angular
            interfaces, and LLM-backed document extraction for enterprise
            software.
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

        <aside className="spec-card" aria-label="Current role at a glance">
          <div className="spec-head">
            <i className="spec-dot" />
            <i className="spec-dot" />
            <i className="spec-dot" />
            <span>surya.dev — production</span>
          </div>
          <dl className="spec-body">
            {spec.map(([label, value]) => (
              <div className="spec-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="spec-foot">
            <i /> {personalInfo.availability}
          </p>
        </aside>
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
