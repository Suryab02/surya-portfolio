import { Link, useLocation } from "react-router-dom";

const links = [
  { num: "01", label: "about", to: "/#about", match: null },
  { num: "02", label: "writing", to: "/writing", match: "/writing" },
  { num: "03", label: "resume", to: "/resume", match: "/resume" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-[860px] mx-auto px-6 sm:px-9 h-12 flex items-center justify-between font-mono text-[11px]">
        <Link
          to="/"
          className="text-bright hover:text-accent transition-colors no-underline"
        >
          SP — surya.dev
        </Link>
        <div className="flex items-center gap-1 text-faint">
          {links.map(({ num, label, to, match }, i) => {
            const active = match
              ? pathname.startsWith(match)
              : isHome;
            return (
              <span key={label} className="flex items-center">
                {i > 0 && <span className="mx-2 text-ghost">/</span>}
                <Link
                  to={to}
                  className={`no-underline transition-colors hover:text-bright ${
                    active ? "text-bright" : "text-faint"
                  }`}
                >
                  <span className="hidden sm:inline">{num} </span>
                  {label}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
