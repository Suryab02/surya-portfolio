// Link previews (LinkedIn, WhatsApp, Slack, X) read the raw HTML and never run
// JavaScript, so PageMeta's client-side tags are invisible to them. After
// `vite build`, write dist/writing/<slug>.html per post: the same app shell
// with that post's title, description, image and canonical URL baked into
// <head>. vercel.json's cleanUrls serves it at /writing/<slug>, ahead of the
// SPA rewrite.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { readPosts, root, SITE_URL } from "./read-posts.mjs";

const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const shell = readFileSync(join(root, "dist/index.html"), "utf8");

function withMeta(html, { title, description, url, image, type }) {
  const set = (pattern, replacement) => {
    if (!pattern.test(html)) throw new Error(`prerender-meta: index.html has no tag matching ${pattern}`);
    html = html.replace(pattern, replacement);
  };
  const t = esc(title);
  const d = esc(description);
  set(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
  set(/<meta name="description"[^>]*>/, `<meta name="description" content="${d}" />`);
  set(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${type}" />`);
  set(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`);
  set(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`);
  set(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);
  set(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}" />`);
  set(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`);
  set(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`);
  set(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}" />`);
  set(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  return html;
}

const posts = readPosts();
for (const post of posts) {
  const hasImage = existsSync(join(root, "public/og", `${post.slug}.png`));
  const html = withMeta(shell, {
    title: `${post.title} — Surya Prabhas`,
    description: post.excerpt,
    url: `${SITE_URL}/writing/${post.slug}`,
    image: hasImage ? `${SITE_URL}/og/${post.slug}.png` : `${SITE_URL}/og.png`,
    type: "article",
  });
  mkdirSync(join(root, "dist/writing"), { recursive: true });
  writeFileSync(join(root, "dist/writing", `${post.slug}.html`), html);
}

console.log(`prerender-meta: ${posts.length} post pages`);
