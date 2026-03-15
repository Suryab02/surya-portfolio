import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" }
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
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      observerOptions
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle navigation with smooth scroll
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md border-b border-gray-100 dark:border-white/5 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent transition-all"
          >
            SURYA
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={`relative text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 group ${active === section.id
                  ? "text-blue-600 dark:text-white"
                  : "text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
                  }`}
              >
                {section.label}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1.5 h-1 bg-blue-600 rounded-full transition-all duration-500 ${active === section.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
                    }`}
                />
              </a>
            ))}

            {/* Theme Toggle */}
            <div className="pl-4 border-l border-gray-100 dark:border-white/10">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button & Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiX className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <HiMenu className="w-5 h-5 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
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
        className="md:hidden overflow-hidden bg-white dark:bg-[#070707] border-t border-gray-100 dark:border-white/5 shadow-2xl"
      >
        <div className="px-6 py-8 space-y-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className={`block text-sm font-bold uppercase tracking-[0.2em] transition-all ${active === section.id
                ? "text-blue-600 dark:text-white"
                : "text-gray-400 dark:text-gray-500"
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