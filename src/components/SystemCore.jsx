import { useState } from "react";

const stages = [
  { label: "Receive", detail: "Accept Excel or XML input and establish a traceable batch." },
  { label: "Validate", detail: "Apply schema and row-level rules before business processing." },
  { label: "Process", detail: "Handle valid records in batches without losing failure context." },
  { label: "Recover", detail: "Isolate row errors so one bad record does not erase the run." },
];

export default function SystemCore() {
  const [active, setActive] = useState(0);
  return (
    <div className="system-core" role="region" aria-label="Bulk ingestion pipeline pattern">
      <div className="system-heading"><div><span>Under the hood</span><strong>10k+ record ingestion</strong></div><span>Production pattern</span></div>
      <div className="system-steps">{stages.map((stage, index) => <button type="button" key={stage.label} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-pressed={index === active}><span>0{index + 1}</span><strong>{stage.label}</strong></button>)}</div>
      <p className="system-detail"><span>0{active + 1}</span>{stages[active].detail}</p>
    </div>
  );
}
