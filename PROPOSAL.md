# Portfolio + Blog — Redesign Proposal

*June 2026 · based on commit `2ac79e0`*

## Where the site stands

The site is in good shape: React 19 + Vite + Tailwind 4 on Vercel, a single-column editorial layout (680px, cream/ink, DM Sans), all content driven from one file (`src/data/data.js`), and a working MDX blog with one published post. The design does not need a visual overhaul — it is minimal, fast, and cohesive. The opportunities are in **content workflow, copy, and discoverability**.

---

## 1. Blog pipeline — make posting one-file-easy

**Problem:** publishing a post today requires editing two places: add an entry to `blogPosts` in `data.js` *and* create the `.mdx` file. The slug must match by hand. This friction is what kills blogging habits.

**Proposal:** move post metadata into MDX frontmatter:

```mdx
---
title: "System Design: How Uber Matches Millions of Rides in Real Time"
date: 2026-06-01
tag: System Design
excerpt: Breaking down the distributed systems behind real-time matching…
published: true
---
```

A small loader (`import.meta.glob` with `eager` + a frontmatter remark plugin) builds the post list automatically. Publishing a post becomes: **drop one file in `src/posts/`, push.** The `blogPosts` array in `data.js` is deleted.

**Effort:** small — one utility file, edit Writing.jsx and BlogPostPage.jsx.

## 2. A `/writing` index page

The homepage Writing section should show only the 3 most recent posts with a "View all →" link to a new `/writing` route listing everything, with:

- tag filter pills (System Design, Career, AI…)
- computed reading time (word count ÷ 200)
- posts grouped or sorted by date

This costs nothing now and means the homepage never gets crowded as you write more.

**Effort:** small — one new page reusing the existing post-card style.

## 3. Copy rewrite in `data.js`

Current copy is heavy on résumé buzzwords ("Pioneered", "Architected", "cutting-edge Generative AI pipelines"). On a minimal personal site, plain confident sentences read stronger. Examples:

| Current | Proposed |
|---|---|
| "I am a Full-Stack Software Engineer with over 2 years of experience architecting and delivering enterprise-grade backend services…" | "I'm a full-stack engineer (2+ yrs) at Infor, building backend services and APIs for a multi-tenant SaaS ERP used by thousands of enterprise users." |
| "Pioneered an enterprise GenAI prompt management service, leveraging AWS Bedrock…" | "Built a GenAI prompt-management service on AWS Bedrock for context injection across the platform." |
| "Accelerated critical reporting modules by 40% through deep SQL Server execution plan analysis…" | "Made reporting 40% faster via SQL execution-plan analysis and indexing." |

Keep all the numbers (40%, 10k records, 50%) — cut the adjectives.

**Effort:** small — text-only changes in `data.js`.

## 4. SEO + sharing basics

- Per-post `<title>` and Open Graph/Twitter meta (a small `<Seo>` component or `react-helmet`-style head updates).
- An RSS feed (`/rss.xml` generated at build) so posts are subscribable.
- `sitemap.xml` + `robots.txt` in `public/`.
- Optional later: auto-generated OG images per post.

**Effort:** medium — feed generation needs a small build script.

## 5. Nice-to-haves (later, optional)

- **"Now" section** — one short paragraph about what you're currently learning/building; cheap to maintain, very human.
- **Project case-study pages** — HuntDesk and CityEatsInsight deserve a screenshot + 3-paragraph write-up each, reusing the blog page layout.
- **Dark mode** — the cream/ink palette inverts nicely; Tailwind makes this ~1 hr.

---

## Suggested order

1. Blog pipeline (frontmatter) — removes friction first, so writing starts now
2. `/writing` index — scales the blog
3. Copy rewrite — quick win, biggest reader-facing improvement
4. SEO/RSS — once there are 2–3 posts worth sharing

Total estimated effort for items 1–4: a few focused hours.
