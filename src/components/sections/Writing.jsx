import { motion } from "framer-motion";
import { blogPosts } from "../../data/data";
import { ArrowUpRight, PenLine } from "lucide-react";

export default function Writing() {
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
        Thoughts on software engineering, AI systems, and electronics.
      </motion.p>

      <div className="space-y-4">
        {blogPosts.map((post, i) => {
          const card = (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group flex items-start justify-between gap-4 p-5 -mx-5 rounded-xl transition-colors duration-300 ${
                post.link ? "hover:bg-cream-dark/40 cursor-pointer" : "opacity-70"
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-terracotta/80 bg-terracotta/8 border border-terracotta/20 rounded-full px-2.5 py-0.5">
                    {post.tag}
                  </span>
                  {!post.link && (
                    <span className="text-[11px] font-medium uppercase tracking-wider text-faded bg-cream-dark rounded-full px-2.5 py-0.5 flex items-center gap-1">
                      <PenLine size={9} />
                      Drafting
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
              {post.link && (
                <ArrowUpRight
                  size={18}
                  className="text-faded group-hover:text-terracotta shrink-0 mt-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                />
              )}
            </motion.div>
          );

          return post.link ? (
            <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" className="block no-underline">
              {card}
            </a>
          ) : (
            <div key={i}>{card}</div>
          );
        })}
      </div>
    </div>
  );
}
