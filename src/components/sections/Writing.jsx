import { Link } from "react-router-dom";
import { posts } from "../../lib/posts";

export default function Writing() {
  if (!posts.length) return null;
  return (
    <section id="writing" className="section">
      <header className="section-head">
        <p className="eyebrow">Writing</p>
        <h2>Notes from the workbench.</h2>
      </header>

      <div className="writing-grid">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            to={`/writing/${post.slug}`}
            className="writing-item"
          >
            <span>
              {post.tag} · {post.minutes || 1} min read
            </span>
            <div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <strong>Read →</strong>
          </Link>
        ))}
      </div>

      <Link to="/writing" className="inline-link">
        View all writing →
      </Link>
    </section>
  );
}
