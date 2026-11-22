// Reads published posts' frontmatter straight from src/posts/*.mdx, for the
// Node-side build scripts that can't import MDX.
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export const root = join(dirname(fileURLToPath(import.meta.url)), "..");
export const SITE_URL = "https://surya-portfolio-mu.vercel.app";

export function readPosts() {
  const dir = join(root, "src/posts");
  return readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const block = readFileSync(join(dir, file), "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const fields = {};
      for (const line of (block?.[1] ?? "").split(/\r?\n/)) {
        const pair = line.match(/^([A-Za-z]+):\s*(.*)$/);
        if (pair) fields[pair[1]] = pair[2].replace(/^["']|["']$/g, "").trim();
      }
      return { slug: file.replace(/\.mdx$/, ""), ...fields };
    })
    .filter((post) => post.published !== "false");
}

// "2026-10-09" → "9 October 2026", in UTC so the day never shifts
export function readableDate(value) {
  const date = new Date(value);
  if (isNaN(date)) return value ?? "";
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
