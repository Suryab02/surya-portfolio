import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="w-full bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-500/30 selection:text-blue-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
