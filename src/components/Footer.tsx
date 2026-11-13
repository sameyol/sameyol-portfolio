
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d1a] px-6 py-10 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold">
              Sam Eyo<span className="text-blue-400">.</span>
            </a>

            <p className="mt-2 text-sm text-gray-400">
              Building digital experiences with purpose.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            <a href="#home" className="transition hover:text-blue-400">Home</a>
            <a href="#about" className="transition hover:text-blue-400">About</a>
            <a href="#skills" className="transition hover:text-blue-400">Skills</a>
            <a href="#services" className="transition hover:text-blue-400">Services</a>
            <a href="#projects" className="transition hover:text-blue-400">Projects</a>
            <a href="#contact" className="transition hover:text-blue-400">Contact</a>
          </nav>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sameyol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl text-gray-400 transition hover:text-blue-400"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com/in/samuel-eyo-498804340/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-gray-400 transition hover:text-blue-400"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Sameyol. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 transition hover:text-blue-400"
          >
            Back to top
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
