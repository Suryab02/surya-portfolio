import { Link } from "react-router-dom";
import { posts } from "../../lib/posts";

export default function Writing() {
  const latest = posts[0];
  if (!latest) return null;
  return (
    <section id="writing" className="writing-section section-pad">
      <div className="section-intro"><p className="eyebrow">Writing</p><h2>Notes from the workbench.</h2></div>
      <Link to={`/writing/${latest.slug}`} className="writing-card"><div><span>{latest.tag} · {latest.minutes || 1} min read</span><h3>{latest.title}</h3><p>{latest.excerpt}</p></div><strong>Read →</strong></Link>
      <Link to="/writing" className="inline-link">View all writing →</Link>
    </section>
  );
}
