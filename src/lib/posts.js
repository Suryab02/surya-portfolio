const mdxModules = import.meta.glob("../posts/*.mdx", { eager: true });

export function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export const posts = Object.keys(mdxModules)
  .map((path) => {
    const mod = mdxModules[path];
    const fm = mod.frontmatter ?? {};
    const slug = path.split("/").pop().replace(/\.mdx$/, "");
    return {
      slug,
      title: fm.title ?? slug,
      date: fm.date ?? "",
      tag: fm.tag ?? "Notes",
      excerpt: fm.excerpt ?? "",
      published: fm.published !== false,
      minutes: fm.minutes ?? 1,
      Component: mod.default,
    };
  })
  .filter((p) => p.published)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const allTags = [...new Set(posts.map((p) => p.tag))];
