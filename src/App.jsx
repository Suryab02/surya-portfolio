import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, ContactShadows } from "@react-three/drei";
import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Footer from "./components/common/Footer";
import Ocean from "./components/effects/Ocean";
import { FloatingBubbles, SplashEffect } from "./components/effects/WaterWaves";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [hasSplashed, setHasSplashed] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#water-threshold",
      start: "top center",
      onEnter: () => setHasSplashed(true),
      onLeaveBack: () => setHasSplashed(false)
    });
  }, []);

  return (
    <div className="w-full bg-white min-h-screen text-slate-900 font-sans selection:bg-blue-600/30 selection:text-blue-900 flex flex-col relative overflow-x-hidden">
      <SplashEffect isActive={hasSplashed} />
      
      <Navbar />
      
      <main className="flex-grow relative mt-[-80px]">
        {/* High-End Surface Intro */}
        <section className="relative h-screen bg-slate-50 overflow-hidden">
            <Hero />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.1),transparent)]" />
        </section>
        
        {/* The Transition Point (3D Ocean) */}
        <div id="water-threshold" className="relative h-[400px] z-10 bg-white">
          <Canvas camera={{ position: [0, 5, 20], fov: 55 }}>
            <Suspense fallback={null}>
              <Ocean />
              <Sky sunPosition={[100, 10, 100]} />
              <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={20} blur={2} />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-slate-950" />
        </div>

        {/* Global Deep Sea Sections */}
        <div className="bg-slate-950 text-white relative">
            <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.3)_100%)]" />
            <FloatingBubbles />
            
            <section className="relative z-20 border-b border-white/5 py-12">
                <About />
            </section>

            <section className="relative z-20 border-b border-white/5 bg-blue-900/10 backdrop-blur-3xl py-12">
                <Skills />
            </section>

            <section className="relative z-20 border-b border-white/5 py-12">
                <Projects />
            </section>

            <section className="relative z-20 py-12">
                <Experience />
            </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}



export default App;





