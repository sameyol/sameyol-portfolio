
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("sameyol-theme");
  return savedTheme ? savedTheme === "dark" : true;
});

useEffect(() => {
  document.documentElement.dataset.theme = darkMode ? "dark" : "light";

  localStorage.setItem(
    "sameyol-theme",
    darkMode ? "dark" : "light"
  );
}, [darkMode]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080d1a]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tight">
          Sameyol<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setDarkMode((previous) => !previous)}
            className="text-xl text-gray-300 transition hover:text-blue-400"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://github.com/sameyol"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-xl text-gray-300 hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/samuel-eyo-498804340/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-gray-300 hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#080d1a] md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {[
                "Home",
                "About",
                "Skills",
                "Services",
                "Projects",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 transition hover:text-blue-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
