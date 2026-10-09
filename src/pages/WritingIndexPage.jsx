import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { posts, allTags } from "../lib/posts";
import PageMeta from "../components/PageMeta";

// readable for people; the machine-readable form stays on <time dateTime>
function readableDate(value) {
  const date = new Date(value);
  if (isNaN(date)) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function isoDate(value) {
  const date = new Date(value);
  return isNaN(date) ? value : date.toISOString().slice(0, 10);
}

export default function WritingIndexPage() {
  const [activeTag, setActiveTag] = useState(null);
  const shown = activeTag ? posts.filter((post) => post.tag === activeTag) : posts;

  return (
    <main className="page-shell">
      <PageMeta
        title="Writing — Surya Prabhas Bandaru"
        description="Notes on software systems, AI, engineering practice, and the details that make products dependable."
        path="/writing"
      />
      <header className="page-header">
        <p>Writing / Notes</p>
        <h1>Thinking in<br /><em>public.</em></h1>
        <span>Systems, software, AI, and the details that make them work.</span>
      </header>

      <div className="filter-row" aria-label="Filter posts by topic">
        <button type="button" aria-pressed={!activeTag} className={!activeTag ? "is-active" : ""} onClick={() => setActiveTag(null)}>All</button>
        {allTags.map((tag) => (
          <button type="button" aria-pressed={activeTag === tag} key={tag} className={activeTag === tag ? "is-active" : ""} onClick={() => setActiveTag(activeTag === tag ? null : tag)}>{tag}</button>
        ))}
      </div>

      <div className="post-list">
        {shown.map((post, index) => (
          <motion.article key={post.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: index * .05 }}>
            <Link to={`/writing/${post.slug}`}>
              <time dateTime={isoDate(post.date)}>{readableDate(post.date)}</time>
              <div><h2>{post.title}</h2><p>{post.excerpt}</p></div>
              <span>{post.tag} · {post.minutes || 1} min</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
