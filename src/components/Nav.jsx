import { useState, useEffect } from "react";

const links = [
  { label: "About", id: "about" },
  { label: "Stack", id: "stack" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Writing", id: "writing" },
  { label: "Contact", id: "contact" },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-cream/90 backdrop-blur-sm border-b border-rule/60">
        <div className="max-w-[680px] mx-auto px-6 sm:px-8 h-12 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-medium tracking-[0.15em] text-faded hover:text-ink transition-colors uppercase"
          >
            SP
          </button>
          <div className="hidden sm:flex items-center gap-5 sm:gap-6">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs font-medium tracking-[0.12em] text-faded hover:text-ink transition-colors uppercase whitespace-nowrap"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
