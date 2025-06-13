import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";



function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen font-sans transition-colors">
        <Navbar toggleTheme={() => setDark(!dark)} />
        <main className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
