import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import DotGrid from "./components/DotGrid";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Writing from "./components/sections/Writing";
import Contact from "./components/sections/Contact";
import BlogPostPage from "./pages/BlogPostPage";
import WritingIndexPage from "./pages/WritingIndexPage";
import ResumePage from "./pages/ResumePage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function Portfolio() {
  return (
    <main className="max-w-[860px] mx-auto px-6 sm:px-9">
      <Hero />
      <section
        id="about"
        className="relative py-12 sm:py-14 border-t border-line"
      >
        <DotGrid />
        <div className="relative">
          <About />
        </div>
      </section>
      <section id="projects" className="py-12 sm:py-14 border-t border-line">
        <Projects />
      </section>
      <section id="writing" className="py-6 border-t border-line">
        <Writing />
      </section>
      <section id="contact" className="py-6 border-t border-line">
        <Contact />
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="bg-base min-h-screen text-bright">
        <Nav />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/writing" element={<WritingIndexPage />} />
          <Route path="/writing/:slug" element={<BlogPostPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
