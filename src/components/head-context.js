import { createContext } from "react";

// Set only during the build-time prerender (src/entry-server.jsx). PageMeta
// writes its props here while rendering, so the static HTML gets the same
// <head> the browser would build: one source of truth for both.
export const HeadContext = createContext(null);
