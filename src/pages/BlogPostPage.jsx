import { useParams, Link } from "react-router-dom";
import { posts } from "../lib/posts";
import PageMeta, { SITE_URL } from "../components/PageMeta";

function isoDate(value) {
  const date = new Date(value);
  return isNaN(date) ? value : date.toISOString().slice(0, 10);
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);

  if (!post) return <main className="article-shell"><PageMeta title="Post not found — Surya Prabhas" description="The requested article could not be found." path={`/writing/${slug}`} noindex /><p>Post not found.</p></main>;

  return (
    <main className="article-shell">
      <PageMeta
        title={`${post.title} — Surya Prabhas`}
        description={post.excerpt || `A note by Surya Prabhas about ${post.tag}.`}
        path={`/writing/${post.slug}`}
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          mainEntityOfPage: `${SITE_URL}/writing/${post.slug}`,
          author: { "@type": "Person", name: "Surya Prabhas Bandaru", url: SITE_URL },
        }}
      />
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
