// Build-time renderer: turns each route into static HTML so content, meta tags
// and link previews exist before any JavaScript runs. scripts/prerender.mjs
// calls render() for every route; the browser then hydrates that markup.
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import { AppShell } from "./App.jsx";
import { HeadContext } from "./components/PageMeta.jsx";
import { posts } from "./lib/posts.js";
import { projects } from "./data/data.js";

export const routes = [
  "/",
  "/writing",
  "/resume",
  ...projects.map((project) => `/work/${project.slug}`),
  ...posts.map((post) => `/writing/${post.slug}`),
];

export async function render(url) {
  const head = { current: null };
  // prerender (unlike renderToString) waits for lazy routes and post bodies
  const { prelude } = await prerenderToNodeStream(
    <HeadContext.Provider value={head}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HeadContext.Provider>,
  );
  let html = "";
  for await (const chunk of prelude) html += chunk;
  return { html, head: head.current };
}
