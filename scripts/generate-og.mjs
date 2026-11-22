// Renders the link-preview images: public/og.png for the site and
// public/og/<slug>.png for each published post, public/og/work/<slug>.png for
// each case study. Run `npm run og` after adding
// or retitling a post and commit the PNGs. The build checks they exist, so a
// post can't ship with the generic image by accident.
//
// Needs Playwright with Chromium (npx playwright install chromium); it's a
// local authoring step, not part of the Vercel build.
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { personalInfo, projects } from "../src/data/data.js";
import { readPosts, readableDate, root } from "./read-posts.mjs";

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error("generate-og: Playwright isn't installed. Run `npm i -D playwright && npx playwright install chromium`.");
  process.exit(1);
}

const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const FONTS =
  "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400&family=Instrument+Sans:wght@400;500;600&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=block";

// the hero's orbit, cropped into the right edge
const ORBIT = `
<svg class="orbit" viewBox="0 0 440 400" fill="none">
  <g stroke="#d6cdb8" stroke-width="1.4">
    <path d="M 22.2 264.3 A 208 88 -18 1 0 417.8 135.7 A 208 88 -18 1 0 22.2 264.3"/>
    <path d="M 37.6 154.5 A 188 128 14 1 0 402.4 245.5 A 188 128 14 1 0 37.6 154.5"/>
    <path d="M 70 200 A 150 150 0 1 0 370 200 A 150 150 0 1 0 70 200" opacity=".5"/>
  </g>
  <circle cx="238" cy="178" r="104" fill="#f2663a"/>
  <circle cx="70" cy="214" r="11" fill="#f2663a"/>
  <circle cx="132" cy="42" r="12" fill="#e8a82e"/>
  <circle cx="392" cy="300" r="10" fill="#6fa368"/>
</svg>`;

const BASE_CSS = `
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px}
body{position:relative;overflow:hidden;padding:64px 80px;background:#f4f0e6;color:#1d1b16;font-family:"Instrument Sans",sans-serif}
.orbit{position:absolute;right:-110px;top:40px;width:520px;opacity:.95}
.mono{font-family:"DM Mono",monospace}
.foot{position:absolute;left:80px;right:80px;bottom:64px;display:flex;align-items:center;justify-content:space-between;padding-top:26px;border-top:1px solid #ddd5c3}
.brand{display:flex;align-items:center;gap:14px;font-size:22px;font-weight:600}
.brand i{width:44px;height:44px;display:grid;place-items:center;border-radius:10px;background:#ba3a10;color:#fdfbf6;font:500 16px/1 "DM Mono",monospace;font-style:normal}
.meta{color:#6b6659;font-size:18px}
`;

function homeHtml() {
  return `<!doctype html><html><head><link rel="stylesheet" href="${FONTS}"><style>${BASE_CSS}
.pill{display:inline-flex;align-items:center;gap:10px;padding:9px 18px 9px 14px;border:1px solid #d6cdb8;border-radius:999px;background:#faf7f0;color:#4a463d;font-size:18px}
.pill b{width:10px;height:10px;border-radius:50%;background:#4a9e3f;box-shadow:0 0 0 4px rgba(74,158,63,.2)}
h1{max-width:10ch;margin-top:22px;font:500 100px/.95 Newsreader,serif;letter-spacing:-.045em}
.role{margin-top:24px;font-size:28px;font-weight:600}
.sub{margin-top:6px;color:#4a463d;font-size:24px}
.foot{bottom:52px;padding-top:22px}
.stats{display:flex;gap:56px}
.stats strong{display:block;font:500 46px/1 Newsreader,serif}
.stats span{display:block;margin-top:8px;color:#6b6659;font-size:17px}
</style></head><body>${ORBIT}
<span class="pill mono"><b></b>${esc(personalInfo.availability)}</span>
<h1>${esc(personalInfo.name)}</h1>
<p class="role">${esc(personalInfo.title)} at ${esc(personalInfo.company)}.</p>
<p class="sub">${esc(personalInfo.team)} · C# · .NET Core · AWS</p>
<div class="foot">
  <div class="stats">
    <div><strong>3+</strong><span>yrs in production</span></div>
    <div><strong>10k+</strong><span>records per run</span></div>
    <div><strong>40%</strong><span>faster reporting</span></div>
  </div>
  <span class="brand"><i>SP</i>surya.dev</span>
</div>
</body></html>`;
}

// shared layout for posts and case studies
function cardHtml({ eyebrow, title, excerpt, meta }) {
  // long titles step down so they never run into the footer
  const size = title.length > 52 ? 64 : title.length > 34 ? 76 : 88;
  return `<!doctype html><html><head><link rel="stylesheet" href="${FONTS}"><style>${BASE_CSS}
.orbit{right:-230px;top:-60px;width:470px;opacity:.55}
.eyebrow{color:#ba3a10;font-size:18px;letter-spacing:.14em;text-transform:uppercase}
h1{max-width:900px;margin-top:30px;font:500 ${size}px/1.02 Newsreader,serif;letter-spacing:-.035em}
.excerpt{max-width:860px;margin-top:26px;color:#4a463d;font-size:24px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
</style></head><body>${ORBIT}
<p class="eyebrow mono">${esc(eyebrow)}</p>
<h1>${esc(title)}</h1>
<p class="excerpt">${esc(excerpt)}</p>
<div class="foot">
  <span class="brand"><i>SP</i>${esc(personalInfo.name)}</span>
  <span class="meta mono">${esc(meta)}</span>
</div>
</body></html>`;
}

const postHtml = (post) =>
  cardHtml({
    eyebrow: `Writing · ${post.tag}`,
    title: post.title,
    excerpt: post.excerpt,
    meta: `${readableDate(post.date)}${post.minutes ? ` · ${post.minutes} min read` : ""}`,
  });

const projectHtml = (project) =>
  cardHtml({
    eyebrow: `Case study · ${project.subtitle}`,
    title: project.name,
    excerpt: project.blurb,
    meta: `${project.year} · ${project.tech.slice(0, 3).join(" · ")}`,
  });

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

async function render(html, out) {
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out });
  console.log(`og: ${out.replace(root + "/", "")}`);
}

await render(homeHtml(), join(root, "public/og.png"));
mkdirSync(join(root, "public/og"), { recursive: true });
for (const post of readPosts()) await render(postHtml(post), join(root, "public/og", `${post.slug}.png`));
mkdirSync(join(root, "public/og/work"), { recursive: true });
for (const project of projects) await render(projectHtml(project), join(root, "public/og/work", `${project.slug}.png`));

await browser.close();
