// Generates public/sitemap.xml from the real routes: the home page, the
// standalone pages, one entry per case study, and one per published post.
// Runs as part of the build so a new post or project is indexed without
// anyone remembering to update a list by hand.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://surya-portfolio-mu.vercel.app";

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

// project slugs, straight out of the data module
const projectSlugs = [...read("src/data/data.js").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map(
  (m) => m[1],
);

// published posts, with their dates for <lastmod>
const posts = readdirSync(join(root, "src/posts"))
  .filter((f) => f.endsWith(".mdx"))
  .map((file) => {
    const raw = read(`src/posts/${file}`);
    const fm = raw.split("---")[1] ?? "";
    const get = (key) => (fm.match(new RegExp(`^${key}:\\s*(.+)$`, "m")) || [])[1]?.trim();
    return {
      slug: file.replace(/\.mdx$/, ""),
      date: (get("date") || "").replace(/['"]/g, ""),
      published: get("published") !== "false",
    };
  })
  .filter((p) => p.published);

const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: "/", priority: "1.0", changefreq: "monthly", lastmod: today },
  { loc: "/writing", priority: "0.8", changefreq: "weekly", lastmod: today },
  { loc: "/resume", priority: "0.8", changefreq: "monthly", lastmod: today },
  ...projectSlugs.map((slug) => ({
    loc: `/work/${slug}`,
    priority: "0.9",
    changefreq: "monthly",
    lastmod: today,
  })),
  ...posts.map((p) => ({
    loc: `/writing/${p.slug}`,
    priority: "0.7",
    changefreq: "yearly",
    lastmod: p.date || today,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml);

writeFileSync(
  join(root, "public/robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

console.log(`sitemap: ${urls.length} urls (${posts.length} posts, ${projectSlugs.length} projects)`);
