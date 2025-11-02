import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
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

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-blue-50 to-white/95 backdrop-blur-lg shadow-lg"
          : "bg-gradient-to-r from-blue-50/80 to-white/70 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wide uppercase bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-accent hover:to-blue-600 transition-all"
          >
            Surya
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  active === section.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {section.label}
                
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300 ${
                    active === section.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6 text-blue-600" />
            ) : (
              <HiMenu className="w-6 h-6 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gradient-to-b from-blue-50 to-white border-t border-blue-100"
      >
        <div className="px-4 py-4 space-y-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={handleNavClick}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === section.id
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}