import { Link } from "react-router-dom";
import { posts } from "../../lib/posts";

export default function Writing() {
  if (!posts.length) return null;
  return (
    <section id="writing" className="index-section">
      <header className="index-head">
        <p className="eyebrow">Writing</p>
        <h2>Notes from the workbench.</h2>
      </header>

      {posts.slice(0, 3).map((post, i) => (
        <article className="index-row" key={post.slug}>
          <p className="index-num">{String(i + 1).padStart(2, "0")}</p>
          <div>
            <p className="index-kicker">
              {post.tag} · {post.minutes || 1} min read
            </p>
            <Link to={`/writing/${post.slug}`} className="index-title">
              {post.title}
            </Link>
            <p className="index-desc">{post.excerpt}</p>
          </div>
          <div className="index-aside">
            <Link to={`/writing/${post.slug}`} className="is-lead">
              Read →
            </Link>
          </div>
        </article>
      ))}

      <Link to="/writing" className="inline-link">
        View all writing →
      </Link>
    </section>
  );
}
