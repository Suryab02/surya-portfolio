import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Writing from "./components/sections/Writing";
import Contact from "./components/sections/Contact";
import BlogPostPage from "./pages/BlogPostPage";
import WritingIndexPage from "./pages/WritingIndexPage";
import ResumePage from "./pages/ResumePage";

const sections = [
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "writing", Component: Writing },
  { id: "contact", Component: Contact },
];

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
    <main className="max-w-[680px] mx-auto px-6 sm:px-8">
      <Hero />
      {sections.map(({ id, Component }) => (
        <motion.section
          key={id}
          id={id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-16 sm:py-20 border-t border-rule"
        >
          <Component />
        </motion.section>
      ))}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="bg-cream min-h-screen text-ink">
        <Nav />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/writing" element={<WritingIndexPage />} />
          <Route path="/writing/:slug" element={<BlogPostPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
