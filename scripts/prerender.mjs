// Prerenders every route into static HTML after `vite build`.
//
// Each page ships its real content plus its own <head>: title, description,
// canonical URL, Open Graph image and JSON-LD. Link previews (LinkedIn,
// WhatsApp, Slack, X) never run JavaScript, and on slow phones the content
// shows before the bundle arrives. The browser then hydrates the markup.
//
// Files land where vercel.json's cleanUrls expects them: /writing →
// writing.html, /work/huntdesk → work/huntdesk.html, / → index.html. Unknown
// paths still fall back to index.html; src/main.jsx sees that the markup is
// for a different route and renders the right page instead.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";
import { root, SITE_URL } from "./read-posts.mjs";

const { render, routes } = await import(pathToFileURL(join(root, "dist-ssr/entry-server.js")).href);
const template = readFileSync(join(root, "dist/index.html"), "utf8");

const esc = (s = "") => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function withHead(html, meta, route) {
  const set = (pattern, replacement) => {
    if (!pattern.test(html)) throw new Error(`prerender: index.html has no tag matching ${pattern}`);
    html = html.replace(pattern, replacement);
  };
  const title = esc(meta.title);
  const description = esc(meta.description);
  const url = new URL(meta.path || route, SITE_URL).toString();
  const image = esc(meta.image);
  set(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  set(/<meta name="description"[^>]*>/, `<meta name="description" content="${description}" />`);
  set(/<meta name="robots"[^>]*>/, `<meta name="robots" content="${meta.noindex ? "noindex, nofollow" : "index, follow"}" />`);
  set(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${meta.type || "website"}" />`);
  set(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`);
  set(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`);
  set(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);
  set(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}" />`);
  set(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`);
  set(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`);
  set(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}" />`);
  set(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);

  // `<` escaped so a string in the data can never close the script tag
  const schema = meta.structuredData
    ? `<script type="application/ld+json" data-page-schema="true">${JSON.stringify(meta.structuredData).replace(/</g, "\\u003c")}</script>`
    : "";
  // when this file is served for a different path (the SPA fallback), hide
  // the mismatched markup until the app renders the right page
  const guard = `<script>(location.pathname.replace(/\\/+$/,"")||"/")!==${JSON.stringify(route)}&&document.documentElement.classList.add("spa-pending")</script>`;
  set(/<\/head>/, `${schema}${guard}</head>`);
  return html;
}

function fileFor(route) {
  return route === "/" ? "index.html" : `${route.slice(1)}.html`;
}

for (const route of routes) {
  const { html, head } = await render(route);
  if (!head) throw new Error(`prerender: ${route} rendered no PageMeta`);
  if (!html.includes("<main")) throw new Error(`prerender: ${route} rendered no <main>`);
  const page = withHead(template, head, route).replace(
    '<div id="root"></div>',
    `<div id="root" data-route="${esc(route)}">${html}</div>`,
  );
  const out = join(root, "dist", fileFor(route));
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page);
}

rmSync(join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerender: ${routes.length} routes`);
