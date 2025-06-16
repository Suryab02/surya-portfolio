import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wide uppercase text-black"
        >
          Surya
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative px-1 transition-colors duration-200 ${
                active === id ? "text-accent font-semibold" : "text-gray-700 hover:text-black"
              }`}
            >
              <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-accent transition-all duration-300 ${
                  active === id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
