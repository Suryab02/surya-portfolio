import { home } from "../../data/data";

const capabilities = [
  ["Backend systems", "C# · ASP.NET Core · Web API · Entity Framework · Microservices"],
  ["Data and performance", "SQL · SQL Server · Oracle · ETL · Query optimization"],
  ["Product interfaces", "Angular · JavaScript · HTML/CSS · Tailwind CSS"],
  ["AI engineering", "Prompt design · LLM integration · Document extraction · Structured outputs"],
];

export default function About() {
  return (
    <section id="profile" className="profile-section section-pad">
      <header className="section-intro"><p className="eyebrow">How I work</p><h2>Clear boundaries. Useful systems. Fewer surprises.</h2></header>
      <div className="profile-grid"><div className="profile-copy"><p>{home.about}</p><small>Earlier professional work: Java and Spring Boot. Independent projects: React, TypeScript, FastAPI, PostgreSQL, MongoDB, and the Gemini API.</small></div><div className="capability-grid">{capabilities.map(([title,items]) => <div key={title}><h3>{title}</h3><p>{items}</p></div>)}</div></div>
    </section>
  );
}
