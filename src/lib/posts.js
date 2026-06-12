// Single source of truth for blog posts.
// To publish: drop a .mdx file in src/posts/ with frontmatter
// (title, date, tag, excerpt, published) and push. That's it.

const mdxModules = import.meta.glob("../posts/*.mdx", { eager: true });
const rawModules = import.meta.glob("../posts/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (!match) return data;
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
    if (value === "true") value = true;
    else if (value === "false") value = false;
    data[key] = value;
  }
  return data;
}

function readingTime(raw) {
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---/, "");
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export const posts = Object.keys(mdxModules)
  .map((path) => {
    const slug = path.split("/").pop().replace(/\.mdx$/, "");
    const raw = rawModules[path] ?? "";
    const fm = parseFrontmatter(raw);
    return {
      slug,
      title: fm.title ?? slug,
      date: fm.date ?? "",
      tag: fm.tag ?? "Notes",
      excerpt: fm.excerpt ?? "",
      published: fm.published !== false,
      minutes: readingTime(raw),
      Component: mdxModules[path].default,
    };
  })
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const allTags = [...new Set(posts.map((p) => p.tag))];
