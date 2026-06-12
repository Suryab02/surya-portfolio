import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { posts } from "../../lib/posts";

export default function Writing() {
  const latest = posts[0];
  if (!latest) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to={`/writing/${latest.slug}`}
        className="group flex items-baseline justify-between gap-4 no-underline font-mono text-[11px]"
      >
        <span className="text-faint truncate">
          LATEST_LOG →{" "}
          <span className="text-dim group-hover:text-bright transition-colors">
            {latest.title}
          </span>
        </span>
        <span className="text-accent shrink-0">read ↗</span>
      </Link>
    </motion.div>
  );
}
