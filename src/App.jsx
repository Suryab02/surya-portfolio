import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
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
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function Portfolio() {
  return (
    <main className="site-main">
      <PageMeta
        title="Surya Prabhas Bandaru — Backend-Focused Software Engineer"
        description="Backend engineer building dependable .NET services, data pipelines, LLM-backed extraction workflows, and product interfaces."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Surya Prabhas Bandaru",
          url: SITE_URL,
          jobTitle: "Backend-Focused Full-Stack Engineer",
          sameAs: ["https://github.com/Suryab02", "https://www.linkedin.com/in/bsuryaprabhas/"],
        }}
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
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
