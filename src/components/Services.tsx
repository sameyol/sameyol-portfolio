
import { motion } from "framer-motion";
import {
  FiMonitor,
  FiLayers,
  FiDatabase,
  FiArrowUpRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type Service = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: FiMonitor,
    title: "Frontend Development",
    description:
      "I build modern, responsive, and user-friendly interfaces that work smoothly across desktops, tablets, and mobile devices.",
    features: [
      "React and Next.js applications",
      "Responsive website layouts",
      "Interactive user interfaces",
      "Tailwind CSS styling",
    ],
  },
  {
    icon: FiLayers,
    title: "Full-Stack Web Development",
    description:
      "I develop complete web applications by connecting intuitive frontend experiences with reliable backend systems and databases.",
    features: [
      "Frontend and backend integration",
      "Database design and integration",
      "Authentication and user roles",
      "Dynamic web applications",
    ],
  },
  {
    icon: FiDatabase,
    title: "Backend & API Development",
    description:
      "I create server-side functionality and APIs that help applications communicate with databases and other services.",
    features: [
      "Node.js and Express.js",
      "REST API development",
      "MongoDB and PostgreSQL",
      "Server-side application logic",
    ],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[#080d1a] px-6 py-24 text-white md:px-12 lg:px-20"
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
            What I Offer
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-5xl">
            Services I <span className="text-blue-400">Provide</span>
          </h2>

          <p className="text-base leading-7 text-gray-400 md:text-lg">
            I help turn ideas into practical digital solutions through
            thoughtful development, clean code, and reliable functionality.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group rounded-2xl border border-white/10 bg-[#0d1528] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                <ul className="mb-7 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-1 text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:gap-3"
                >
                  Discuss a project
                  <FiArrowUpRight />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
