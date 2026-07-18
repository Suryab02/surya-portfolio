import { skills } from "../../data/data";

export default function Skills() {
  return (
    <section id="stack" className="stack-section section-pad">
      <div className="section-intro"><p className="eyebrow">Toolkit</p><h2>Built around the problem.</h2><span>Tools change. Clear boundaries, reliable data, and thoughtful failure handling do not.</span></div>
      <div className="stack-list">{skills.map((group) => <div key={group.category}><h3>{group.category}</h3><p>{group.items.join(" · ")}</p></div>)}</div>
    </section>
  );
}
