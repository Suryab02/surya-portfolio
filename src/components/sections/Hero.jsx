import { Link } from "react-router-dom";
import { personalInfo } from "../../data/data";
import Orbit, { OrbitLegend } from "../Orbit";
import CountUp from "../CountUp";

// every figure names where it came from and links to the résumé entry that
// states it in full, so the numbers can be checked rather than taken on faith
const proof = [
  ["10+", "production services", "C# / .NET microservices"],
  ["10k+", "records per pipeline run", "Excel/XML bulk ingestion"],
  ["40%", "faster reporting", "SQL & Oracle query tuning"],
  ["20+", "critical incidents resolved", "backend & login flows"],
];
const PROOF_SOURCE = { company: "Infor", anchor: "/resume#infor" };

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
          <Link to="/resume" className="button button-quiet">
            Open résumé →
          </Link>
        </div>
        <OrbitLegend />
      </div>

      <div className="metrics" aria-label="Production impact">
        {proof.map(([value, label, how]) => (
          <Link className="metric" to={PROOF_SOURCE.anchor} key={label}>
            <strong><CountUp value={value} /></strong>
            <span>{label}</span>
            <small>
              {PROOF_SOURCE.company} · {how} <b aria-hidden="true">→</b>
            </small>
          </Link>
        ))}
      </div>
      <p className="metrics-note">
        3+ yrs shipping production software · C# · .NET Core · AWS · SQL Server
        · Angular
      </p>
    </section>
  );
}
