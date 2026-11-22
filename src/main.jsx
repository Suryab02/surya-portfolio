import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Self-hosted fonts: same origin as the page, so they start downloading as soon
// as the CSS is parsed, with no extra connection to Google. Each family is
// split by script, and browsers only fetch the subsets the page uses.
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/instrument-sans";
import "@fontsource/dm-mono/400.css";
import "@fontsource/dm-mono/500.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
