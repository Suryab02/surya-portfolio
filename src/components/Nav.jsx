import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const sectionLinks = [
  { label: "About", id: "about" },
];

const pageLinks = [
  { label: "Writing", to: "/writing" },
  { label: "Resume", to: "/resume" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = isHome ? scrolled : true;

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const linkClass =
    "text-xs font-medium tracking-[0.12em] text-faded hover:text-ink transition-colors uppercase whitespace-nowrap";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-cream/90 backdrop-blur-sm border-b border-rule/60">
        <div className="max-w-[680px] mx-auto px-6 sm:px-8 h-12 flex items-center justify-between">
          {isHome ? (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs font-medium tracking-[0.15em] text-faded hover:text-ink transition-colors uppercase"
            >
              SP
            </button>
          ) : (
            <Link
              to="/"
              className="text-xs font-medium tracking-[0.15em] text-faded hover:text-ink transition-colors uppercase no-underline"
            >
              SP
            </Link>
          )}
          <div className="hidden sm:flex items-center gap-5 sm:gap-6">
            {isHome &&
              sectionLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={linkClass}
                >
                  {label}
                </button>
              ))}
            {pageLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`${linkClass} no-underline ${
                  pathname.startsWith(to) ? "text-ink" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
