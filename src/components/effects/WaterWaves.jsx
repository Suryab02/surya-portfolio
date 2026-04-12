import { useEffect, useRef } from "react";
import gsap from "gsap";

export const FloatingBubbles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/10 rounded-full blur-[1px] animate-float"
          style={{
            width: Math.random() * 10 + 2 + "px",
            height: Math.random() * 10 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 10 + "s",
            animationDuration: Math.random() * 20 + 10 + "s"
          }}
        />
      ))}
    </div>
  );
};

export const SplashEffect = ({ isActive }) => {
    const splashRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            const particles = splashRef.current.children;
            const tl = gsap.timeline();
            
            tl.set(particles, { opacity: 0, scale: 0, x: 0, y: 0 });
            
            tl.to(particles, {
                opacity: 1,
                scale: (i) => Math.random() * 1 + 0.5,
                x: (i) => (Math.random() - 0.5) * 400,
                y: (i) => -Math.random() * 300 - 100,
                duration: 0.8,
                stagger: 0.01,
                ease: "power2.out"
            })
            .to(particles, {
                opacity: 0,
                y: "+=200",
                duration: 1,
                ease: "power1.in"
            }, "-=0.2");
        }
    }, [isActive]);

    return (
        <div ref={splashRef} className="fixed top-[100vh] left-4 sm:left-10 w-20 flex items-center justify-center pointer-events-none z-[60]">
            {[...Array(20)].map((_, i) => (
                <div 
                    key={i} 
                    className="absolute w-2 h-2 bg-blue-100 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
            ))}
        </div>
    );
};

export const WaveSeparator = ({ color = "fill-slate-50", flip = false }) => {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
        <svg
          className="relative block w-full h-[60px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={color}
          ></path>
        </svg>
      </div>
    );
  };
