import { useParams, Link } from "react-router-dom";
import { posts } from "../lib/posts";

function isoDate(d) {
  const date = new Date(d);
  if (isNaN(date)) return d;
  return date.toISOString().slice(0, 10);
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  return (
    <div className="max-w-[720px] mx-auto px-6 sm:px-9 pt-28 pb-16">
      {!post ? (
        <p className="font-mono text-xs text-faint">// post not found</p>
      ) : (
        <>
          <p className="font-mono text-[11px] text-faint mb-6">
            <Link
              to="/writing"
              className="no-underline text-faint hover:text-bright transition-colors"
            >
              ← the_log
            </Link>{" "}
            / <span className="text-accent">{isoDate(post.date)}</span> /{" "}
            {post.tag.toLowerCase()}
            {post.minutes > 1 ? ` / ${post.minutes} min` : ""}
          </p>

          <h1
            className="font-display font-medium text-bright leading-[1.2] tracking-[-0.01em] mb-8"
            style={{ fontSize: "clamp(1.7rem, 4vw, 2.4rem)" }}
          >
            {post.title}
          </h1>

          <article className="blog-prose">
            <post.Component />
          </article>
        </>
      )}
    </div>
  );
}
