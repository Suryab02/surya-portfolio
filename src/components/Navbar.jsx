import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

export default function Navbar({ toggleTheme }) {
  const [active, setActive] = useState("hero");

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
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur z-50 border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold">Surya</a>
        <div className="flex items-center gap-4 text-sm">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:underline ${
                active === id ? "text-accent font-semibold" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 border rounded"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
}
