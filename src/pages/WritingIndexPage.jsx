import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { posts, allTags } from "../lib/posts";

function isoDate(d) {
  const date = new Date(d);
  if (isNaN(date)) return d;
  return date.toISOString().slice(0, 10);
}

export default function WritingIndexPage() {
  const [activeTag, setActiveTag] = useState(null);
  const shown = activeTag ? posts.filter((p) => p.tag === activeTag) : posts;

  return (
    <div className="max-w-[860px] mx-auto px-6 sm:px-9 pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display font-medium uppercase text-bright text-3xl sm:text-4xl tracking-[-0.02em]">
          The log<span className="text-accent">_</span>
        </h1>
        <p className="text-xs text-dim mt-3">
          Notes on software, systems, the tech industry, and electronics.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mt-7 mb-4 font-mono text-[10px]">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1 rounded-[3px] transition-colors ${
            activeTag === null
              ? "bg-accent text-base"
              : "border border-line-strong text-dim hover:text-bright"
          }`}
        >
          all
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`px-3 py-1 rounded-[3px] transition-colors ${
              activeTag === tag
                ? "bg-accent text-base"
                : "border border-line-strong text-dim hover:text-bright"
            }`}
          >
            {tag.toLowerCase()}
          </button>
        ))}
      </div>

      <div>
        {shown.map((post, i) => (
          <Link
            key={post.slug}
            to={`/writing/${post.slug}`}
            className="block no-underline"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 py-5 border-b border-line"
            >
              <span className="font-mono text-[11px] text-accent sm:min-w-[88px] shrink-0">
                {isoDate(post.date)}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-medium text-bright group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </p>
                {post.excerpt && (
                  <p className="text-xs text-faint mt-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
              </div>
              <span className="font-mono text-[10px] text-ghost shrink-0">
                {post.tag.toLowerCase()}
              </span>
            </motion.div>
          </Link>
        ))}

        {shown.length === 0 && (
          <p className="font-mono text-xs text-faint pt-6">
            // nothing logged here yet
          </p>
        )}
      </div>
    </div>
  );
}
