import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { posts, allTags, formatDate } from "../lib/posts";

export default function WritingIndexPage() {
  const [activeTag, setActiveTag] = useState(null);
  const shown = activeTag ? posts.filter((p) => p.tag === activeTag) : posts;

  return (
    <div className="bg-cream min-h-screen text-ink">
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 pt-24 pb-16">
        <Link
          to="/#writing"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-faded hover:text-ink transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={14} />
          Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-ink text-3xl sm:text-4xl mb-3">
            Writing
          </h1>
          <p className="text-sm text-faded mb-8">
            Notes on software, systems, and how things work.
          </p>
        </motion.div>

        {allTags.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-[11px] font-medium uppercase tracking-wider rounded-full px-3 py-1 border transition-colors duration-300 ${
                activeTag === null
                  ? "border-ink text-ink"
                  : "border-rule text-faded hover:text-ink"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`text-[11px] font-medium uppercase tracking-wider rounded-full px-3 py-1 border transition-colors duration-300 ${
                  activeTag === tag
                    ? "border-terracotta text-terracotta"
                    : "border-rule text-faded hover:text-ink"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

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
                className="group py-6 border-t border-rule"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium text-ink text-base leading-snug group-hover:text-terracotta transition-colors duration-300">
                    {post.title}
                  </p>
                  <span className="text-xs text-faded whitespace-nowrap shrink-0 mt-0.5">
                    {formatDate(post.date)} · {post.minutes} min
                  </span>
                </div>
                {post.excerpt && (
                  <p className="text-sm text-faded mt-1.5 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.12em] text-terracotta/80 mt-2">
                  {post.tag}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </span>
              </motion.div>
            </Link>
          ))}

          {shown.length === 0 && (
            <p className="text-sm text-faded border-t border-rule pt-6">
              Nothing here yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
