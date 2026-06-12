import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { posts, formatDate } from "../lib/posts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  return (
    <div className="bg-cream min-h-screen text-ink">
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 pt-24 pb-16">
        <Link
          to="/writing"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-faded hover:text-ink transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={14} />
          All writing
        </Link>

        {!post ? (
          <p className="text-muted">Post not found.</p>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-medium uppercase tracking-wider text-terracotta/80 border border-terracotta/20 rounded-full px-2.5 py-0.5">
                  {post.tag}
                </span>
                {post.date && (
                  <span className="text-xs text-faded">
                    {formatDate(post.date)} · {post.minutes} min read
                  </span>
                )}
              </div>
              <h1
                className="font-serif text-ink leading-[1.15]"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
              >
                {post.title}
              </h1>
            </div>

            <article className="blog-prose">
              <post.Component />
            </article>
          </>
        )}
      </div>
    </div>
  );
}
