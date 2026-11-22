const mdxModules = import.meta.glob("../posts/*.mdx", { eager: true });

// Post dates are date-only strings ("2026-10-09"), which parse as UTC
// midnight. Format in UTC too, or readers west of UTC see the day before.
export function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

// readable for people; the machine-readable form goes on <time dateTime>
export function readableDate(value) {
  const date = new Date(value);
  if (isNaN(date)) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function isoDate(value) {
  const date = new Date(value);
  return isNaN(date) ? value : date.toISOString().slice(0, 10);
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
