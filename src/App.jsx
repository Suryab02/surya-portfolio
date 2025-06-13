import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience"
import Contact from "./components/Contact";

function App() {
  return (
   <div className="bg-neutral-900 min-h-screen text-white font-sans">
  <Navbar />
  <main>
    <Hero />
    <About />
     <Skills /> 
    <Projects />
    <Experience /> 
    <Contact />
  </main>
</div>
  );
}

export default App;
