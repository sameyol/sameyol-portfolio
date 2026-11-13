
import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Creating responsive, accessible, and user-friendly interfaces.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Building application logic, APIs, and database-driven systems.",
  },
  {
    icon: <FaCode />,
    title: "Problem Solving",
    description:
      "Turning ideas and real-world challenges into practical solutions.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#0b1222] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get to know me
          </p>

          <h2
            id="about-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-gray-400">
            A little introduction to who I am, what I do,
            and how I approach building digital products.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-start gap-14 lg:grid-cols-2">

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              I enjoy turning ideas into
              <span className="text-blue-400">
                {" "}meaningful digital solutions.
              </span>
            </h3>

            <div className="mt-7 space-y-5 text-base leading-8 text-gray-400">
              <p>
                I'm Sam Eyo, a full-stack web developer
                interested in building modern websites and
                web applications that combine thoughtful
                design with reliable functionality.
              </p>

              <p>
                I work across both frontend and backend
                development. I enjoy creating clean user
                interfaces, developing application features,
                connecting APIs, and working with databases.
              </p>

              <p>
                My approach is simple: understand the problem,
                plan a practical solution, write maintainable
                code, and keep improving the experience for
                the people who use what I build.
              </p>
            </div>

            {/* Technology tags */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold text-white">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 transition hover:border-blue-500/50 hover:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact link */}
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300"
            >
              Let's work together
              <FiArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-[#111c33] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#14213b]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <span className="text-xs text-gray-600">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
