import { personalInfo } from "../../data/data";

const proof = [
  ["10+", "production services"],
  ["10k+", "records per pipeline run"],
  ["40%", "faster reporting"],
  ["20+", "critical incidents resolved"],
];

export default function Hero() {
  return (
    <section className="hero-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Surya Prabhas Bandaru · Infor</p>
        <h1 id="hero-title">Backend engineer building reliable, data-heavy products.</h1>
        <p className="hero-deck">I work across C#/.NET services, SQL performance, Angular interfaces, and LLM-backed document extraction for enterprise software.</p>
        <div className="hero-actions"><a href="#work" className="button button-primary">View selected work</a><a href="/resume" className="button button-quiet">Open résumé →</a></div>
        <p className="hero-availability"><i /> {personalInfo.availability}</p>
      </div>
      <aside className="hero-proof" aria-label="Production impact at Infor">
        <div className="proof-heading"><span>Production impact</span><strong>At Infor · Mar 2024—Now</strong></div>
        <div className="proof-grid">{proof.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        <p>Multi-tenant SaaS · ASP.NET Core · SQL Server · Angular · Document extraction</p>
      </aside>
    </section>
  );
}
