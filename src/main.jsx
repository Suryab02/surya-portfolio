import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
// Self-hosted fonts: same origin as the page, so they start downloading as soon
// as the CSS is parsed, with no extra connection to Google. Each family is
// split by script, and browsers only fetch the subsets the page uses.
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/instrument-sans";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Prerendered pages (scripts/prerender.mjs) carry the route they were built
// for. Hydrate when it matches; otherwise this is the SPA fallback serving
// another page's HTML (or the dev server's empty shell), so render fresh.
const here = location.pathname.replace(/\/+$/, "") || "/";
if (container.dataset.route === here && container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  container.textContent = "";
  createRoot(container).render(app);
}
document.documentElement.classList.remove("spa-pending");
