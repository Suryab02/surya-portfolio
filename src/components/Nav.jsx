import { Link, useLocation } from "react-router-dom";
import { personalInfo } from "../data/data";

const links = [
  { label: "Work", to: "/#work" },
  { label: "Experience", to: "/#experience", desktop: true },
  { label: "Résumé", to: "/resume", route: true },
];

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <header className="nav-wrap">
      <nav className="nav-bar" aria-label="Primary navigation">
        <Link to="/" className="nav-brand" aria-label="Surya Prabhas, home"><span className="brand-mark" aria-hidden="true">SP</span><span>Surya Prabhas</span></Link>
        <div className="nav-links">
          {links.map((link) => <Link key={link.label} to={link.to} className={`${link.desktop ? "nav-desktop" : ""} ${link.route && pathname.startsWith(link.to) ? "is-active" : ""}`}>{link.label}</Link>)}
          <a href={`mailto:${personalInfo.email}`} className="nav-contact">Email me</a>
        </div>
      </nav>
    </header>
  );
}
