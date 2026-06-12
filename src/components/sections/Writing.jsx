import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { posts, formatDate } from "../../lib/posts";

export default function Writing() {
  const latest = posts.slice(0, 3);

  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-faded mb-3"
      >
        Writing
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-sm text-faded mb-10"
      >
        Notes on software, systems, and how things work — from distributed
        systems to whatever has my attention this month.
      </motion.p>

      <div className="space-y-4">
        {latest.map((post, i) => (
          <Link
            key={post.slug}
            to={`/writing/${post.slug}`}
            className="block no-underline"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex items-start justify-between gap-4 p-5 -mx-5 rounded-xl transition-colors duration-300 hover:bg-cream-dark/40 cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-terracotta/80 border border-terracotta/20 rounded-full px-2.5 py-0.5">
                    {post.tag}
                  </span>
                  {post.date && (
                    <span className="text-xs text-faded">
                      {formatDate(post.date)} · {post.minutes} min
                    </span>
                  )}
                </div>
                <p className="font-medium text-ink text-base leading-snug group-hover:text-terracotta transition-colors duration-300">
                  {post.title}
                </p>
                <p className="text-sm text-faded mt-1.5 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-faded group-hover:text-terracotta shrink-0 mt-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
              />
            </motion.div>
          </Link>
        ))}
      </div>

      {posts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Link
            to="/writing"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted hover:text-terracotta transition-colors duration-300"
          >
            View all writing
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
