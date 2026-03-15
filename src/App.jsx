// import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
// import Contact from "./components/sections/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="w-full bg-gray-50 dark:bg-[#050505] min-h-screen text-gray-900 dark:text-white font-sans transition-colors duration-300 selection:bg-purple-500 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          {/* <Contact /> */}
        </main>
        {/* <Analytics />Status: */}
      </div>
    </ThemeProvider>
  );
}

export default App;
