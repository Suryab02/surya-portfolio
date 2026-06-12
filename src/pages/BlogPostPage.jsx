import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/data";

const postModules = import.meta.glob("../posts/*.mdx");

export default function BlogPostPage() {
  const { slug } = useParams();
  const [Content, setContent] = useState(null);
  const [error, setError] = useState(false);

  const meta = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    const key = `../posts/${slug}.mdx`;
    if (!postModules[key]) { setError(true); return; }
    postModules[key]()
      .then((mod) => setContent(() => mod.default))
      .catch(() => setError(true));
  }, [slug]);

  return (
    <div className="bg-cream min-h-screen text-ink">
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 py-12">

        {/* Back link */}
        <Link
          to="/#writing"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-faded hover:text-ink transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        {error ? (
          <p className="text-muted">Post not found.</p>
        ) : !Content ? (
          <p className="text-faded text-sm">Loading…</p>
        ) : (
          <>
            {/* Meta */}
            {meta && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-terracotta/80 border border-terracotta/20 rounded-full px-2.5 py-0.5">
                    {meta.tag}
                  </span>
                  {meta.date && (
                    <span className="text-xs text-faded">{meta.date}</span>
                  )}
                </div>
              </div>
            )}

            {/* Post content */}
            <article className="blog-prose">
              <Content />
            </article>
          </>
        )}
      </div>
    </div>
  );
}
