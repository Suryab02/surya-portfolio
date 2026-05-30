import { motion } from "framer-motion";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const sections = [
  { id: "about", Component: About },
  { id: "stack", Component: Skills },
  { id: "experience", Component: Experience },
  { id: "projects", Component: Projects },
  { id: "contact", Component: Contact },
];

function App() {
  return (
    <div className="bg-cream min-h-screen text-ink">
      <main className="max-w-[680px] mx-auto px-6 sm:px-8">
        <Hero />

        {sections.map(({ id, Component }, i) => (
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
    </div>
  );
}

export default App;
