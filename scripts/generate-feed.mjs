// Writes public/rss.xml from the published posts so readers can follow the
// Writing section in any feed reader. Runs as part of the build.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { readPosts, root, SITE_URL } from "./read-posts.mjs";

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]);

const posts = readPosts().sort((a, b) => new Date(b.date) - new Date(a.date));
const rfc822 = (value) => new Date(value).toUTCString();

const items = posts
  .map((post) => {
    const url = `${SITE_URL}/writing/${post.slug}`;
    return `    <item>
      <title>${esc(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <category>${esc(post.tag)}</category>
      <description>${esc(post.excerpt)}</description>
    </item>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Surya Prabhas — Writing</title>
    <link>${SITE_URL}/writing</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Notes on backend engineering, AI tools, and whatever else I'm figuring out.</description>
    <language>en</language>
    <lastBuildDate>${posts.length ? rfc822(posts[0].date) : new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

writeFileSync(join(root, "public/rss.xml"), xml);
console.log(`feed: ${posts.length} posts`);
