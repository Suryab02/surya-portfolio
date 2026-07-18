import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../lib/posts";

function isoDate(value) {
  const date = new Date(value);
  return isNaN(date) ? value : date.toISOString().slice(0, 10);
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} — Surya Prabhas` : "Post not found — Surya Prabhas";
    return () => { document.title = "Surya Prabhas Bandaru — Software Engineer"; };
  }, [post]);

  if (!post) return <main className="article-shell"><p>Post not found.</p></main>;

  return (
    <main className="article-shell">
      <Link to="/writing" className="article-back">← All writing</Link>
      <header className="article-header">
        <p>{isoDate(post.date)} · {post.tag} · {post.minutes || 1} min read</p>
        <h1>{post.title}</h1>
        {post.excerpt && <span>{post.excerpt}</span>}
      </header>
      <article className="blog-prose"><post.Component /></article>
    </main>
  );
}
