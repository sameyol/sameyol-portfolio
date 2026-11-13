
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiCode,
  FiTerminal,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-[#080d1a] px-6 py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Availability label */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Full-Stack Web Developer
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            I build modern
            <span className="block">
              digital
              <span className="text-blue-500"> experiences.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm Sameyol, a full-stack web developer passionate
            about transforming ideas into functional, beautiful,
            and responsive digital products.
          </p>

          <p className="mt-3 max-w-xl text-base leading-8 text-gray-400">
            From intuitive user interfaces to powerful backend
            systems, I enjoy building solutions that make a
            difference.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-medium text-white transition hover:bg-blue-700"
            >
              Explore My Work
              <FiArrowUpRight size={19} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 font-medium text-white transition hover:border-blue-500 hover:text-blue-400"
            >
              Let's Talk
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-sm text-gray-500">
              Find me on
            </span>

            <a
              href="https://github.com/sameyol"
              target="_blank"
              rel="noreferrer"
              aria-label="Sameyol on GitHub"
              className="text-xl text-gray-400 transition hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/samuel-eyo-498804340/"
              target="_blank"
              rel="noreferrer"
              aria-label="Sameyol on LinkedIn"
              className="text-xl text-gray-400 transition hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: CODE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Decorative glow */}
          <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

          {/* Code window */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1528] shadow-2xl shadow-blue-950/40">

            {/* Window header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FiTerminal />
                developer.ts
              </div>

              <FiCode className="text-gray-500" />
            </div>

            {/* Code content */}
            <div className="overflow-x-auto p-6 font-mono text-sm leading-8 sm:p-8">
              <p className="text-gray-500">
                01&nbsp; // A little about me
              </p>

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                = {"{"}
              </p>

              <p className="pl-6">
                <span className="text-cyan-300">name</span>:{" "}
                <span className="text-green-400">
                  "Samuel Eyo"
                </span>,
              </p>

              <p className="pl-6">
                <span className="text-cyan-300">role</span>:{" "}
                <span className="text-green-400">
                  "Full-Stack Developer"
                </span>,
              </p>

              <p className="pl-6">
                <span className="text-cyan-300">frontend</span>: [
              </p>

              <p className="pl-12 text-green-400">
                "React", "Next.js", "JavaScript", "TypeScript"
              </p>

              <p className="pl-6">],</p>

              <p className="pl-6">
                <span className="text-cyan-300">backend</span>: [
              </p>

              <p className="pl-12 text-green-400">
                "Node.js", "Express", "MongoDB"
              </p>

              <p className="pl-6">],</p>

              <p className="pl-6">
                <span className="text-cyan-300">passion</span>:{" "}
                <span className="text-green-400">
                  "Building great products"
                </span>
              </p>

              <p>{"}"}</p>

              <p className="mt-5 text-gray-500">
                02&nbsp; // Always learning. Always building.
              </p>

              <p className="mt-3 text-blue-400">
                <span className="animate-pulse">▌</span>
              </p>
            </div>

            {/* Bottom label */}
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
              <span className="text-xs text-gray-500">
                Built with passion
              </span>

              <span className="text-xs text-blue-400">
                {"<"} Code. Create. Innovate. {"/>"}
              </span>
            </div>
          </div>

          {/* Floating technology label */}
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-[#111c33] px-5 py-3 shadow-xl">
            <p className="text-xs text-gray-500">
              Current focus
            </p>
            <p className="mt-1 font-semibold text-white">
              Building for the web
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
