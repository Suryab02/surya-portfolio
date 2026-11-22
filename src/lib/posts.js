import { lazy } from "react";
import postIndex from "virtual:post-index";

// Listings only need frontmatter, which comes from a small build-time index
// (see vite.config.js). Each post body is its own chunk, fetched when someone
// opens the post, which keeps every article out of the homepage bundle.
const bodies = import.meta.glob("../posts/*.mdx");

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

// the index already leaves out unpublished drafts
export const posts = postIndex
  .filter((post) => bodies[`../posts/${post.slug}.mdx`])
  .map((post) => ({ ...post, Component: lazy(bodies[`../posts/${post.slug}.mdx`]) }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const allTags = [...new Set(posts.map((p) => p.tag))];
