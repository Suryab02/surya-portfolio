import { Link } from "react-router-dom";
import { personalInfo } from "../../data/data";

export default function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div>
        <p className="eyebrow">Have a hard problem?</p>
        <h2>Let’s make it clear.</h2>
        <a href={`mailto:${personalInfo.email}`} className="contact-mail">
          {personalInfo.email} ↗
        </a>
      </div>
      <div className="contact-bottom">
        <span>© {new Date().getFullYear()} Surya Prabhas Bandaru</span>
        <nav>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <Link to="/writing">Writing</Link>
          <Link to="/resume">Résumé</Link>
        </nav>
      </div>
    </footer>
  );
}
