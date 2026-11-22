import { Component, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import { personalInfo } from "./data/data";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Writing from "./components/sections/Writing";
import PageMeta, { SITE_URL } from "./components/PageMeta";

const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const WritingIndexPage = lazy(() => import("./pages/WritingIndexPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash || hash === "#") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // look the target up by id, never as a CSS selector: fragments such as
    // #2024 or #a:b are valid in a URL but make querySelector throw
    let id = hash.slice(1);
    try {
      id = decodeURIComponent(id);
    } catch {
      // malformed escape sequence; fall back to the raw fragment
    }
    // lazy routes (e.g. /resume#infor) mount after this effect runs, so keep
    // looking for the target for about a second before giving up
    let frame = 0;
    let tries = 0;
    const seek = () => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      else if (tries++ < 60) frame = requestAnimationFrame(seek);
    };
    seek();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

// Keeps a failure in one subtree from unmounting the whole site.
class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="not-found">
        <p>Something broke</p>
        <h1>
          That didn&rsquo;t load.
          <br />
          <em>Try the home page.</em>
        </h1>
        <a href="/" className="button button-dark">
          Back home ←
        </a>
      </main>
    );
  }
}

// built from data.js so the next role change updates search results too
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: SITE_URL,
  jobTitle: personalInfo.title,
  worksFor: { "@type": "Organization", name: personalInfo.company },
  sameAs: [personalInfo.github, personalInfo.linkedin],
};

function Portfolio() {
  return (
    <main className="site-main">
      <PageMeta
        title={`${personalInfo.name} — ${personalInfo.title} at ${personalInfo.company}`}
        description={`${personalInfo.title} at ${personalInfo.company} building C#/.NET services, AWS integrations, data pipelines, and LLM-backed extraction workflows.`}
        structuredData={PERSON_SCHEMA}
      />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Writing />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="site-frame">
        <Nav />
        <ErrorBoundary>
          <Suspense fallback={<main className="route-loading">Loading…</main>}>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/writing" element={<WritingIndexPage />} />
              <Route path="/writing/:slug" element={<BlogPostPage />} />
              <Route path="/work/:slug" element={<CaseStudyPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
