
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiCalendar,
  FiActivity,
  FiArrowUpRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type Project = {
  icon: IconType;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
};

const projects: Project[] = [
  {
    icon: FiBookOpen,
    category: "Digital Library",
    title: "Sameyol LibRead",
    description:
      "A digital library platform designed to make discovering, reading, and downloading books easier for users.",
    technologies: ["Next.js", "MongoDB", "TypeScript"],
    highlights: [
      "Digital book collection",
      "Online reading experience",
      "Book download functionality",
    ],
  },
  {
    icon: FiCalendar,
    category: "Booking Platform",
    title: "Prime Cuts / BarberX",
    description:
      "A salon booking platform designed to connect clients, barbers, and administrators through one organized system.",
    technologies: ["Next.js", "PostgreSQL", "Supabase", "Prisma"],
    highlights: [
      "Client booking experience",
      "Barber and admin roles",
      "Appointment management",
    ],
  },
  {
    icon: FiActivity,
    category: "Fitness Website",
    title: "Fitness Website",
    description:
      "A web project focused on presenting fitness services and creating an engaging online experience for visitors.",
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Website layout and structure",
      "Responsive interface",
      "Interactive elements",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a1020] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Work
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-5xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <p className="text-base leading-7 text-gray-400 md:text-lg">
            Here are some of the projects I've worked on, showcasing my
            approach to building useful and engaging web experiences.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1528] transition duration-300 hover:-translate-y-2 hover:border-blue-400/50"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500/20 via-[#111d36] to-[#080d1a]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-4xl text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="mb-3 text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mb-7 space-y-3">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <span className="text-blue-400">✓</span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-semibold text-blue-400 transition hover:gap-3"
                  >
                    Ask me about this project
                    <FiArrowUpRight />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
