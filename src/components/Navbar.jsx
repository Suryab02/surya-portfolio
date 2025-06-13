import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  // Track visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/80 border-b border-gray-200 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wide uppercase text-black"
        >
          Surya
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative transition-all duration-300 hover:text-black ${
                active === id ? "text-accent" : ""
              }`}
            >
              <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>

              {/* Underline animation */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  active === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
