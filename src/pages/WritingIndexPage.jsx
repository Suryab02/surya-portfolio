import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { posts, allTags } from "../lib/posts";

function isoDate(value) {
  const date = new Date(value);
  return isNaN(date) ? value : date.toISOString().slice(0, 10);
}

export default function WritingIndexPage() {
  const [activeTag, setActiveTag] = useState(null);
  const shown = activeTag ? posts.filter((post) => post.tag === activeTag) : posts;

  useEffect(() => {
    document.title = "Writing — Surya Prabhas";
    return () => { document.title = "Surya Prabhas Bandaru — Software Engineer"; };
  }, []);

  return (
    <main className="page-shell">
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
              <time>{isoDate(post.date)}</time>
              <div><h2>{post.title}</h2><p>{post.excerpt}</p></div>
              <span>{post.tag} ↗</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
