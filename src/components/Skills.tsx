
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiCoreldraw,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbBrandAdobePhotoshop } from "react-icons/tb";

import { FaCss3 } from "react-icons/fa";

import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing application logic, APIs, and databases.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "Tools & Design",
    description: "Tools I use for development and creative work.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Photoshop", icon: TbBrandAdobePhotoshop  },
      { name: "CorelDRAW", icon: SiCoreldraw },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-[#080d1a] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Technical Skills
          </p>

          <h2
            id="skills-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Technologies I <span className="text-blue-500">Work With</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            A collection of technologies and tools I use to
            design, develop, and build modern web applications.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-8 lg:grid-cols-3">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-2xl border border-white/10 bg-[#0d1528] p-7 transition duration-300 hover:border-blue-500/40"
            >
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
                {category.description}
              </p>

              {/* Technology cards */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10"
                    >
                      <Icon
                        aria-hidden="true"
                        className="shrink-0 text-xl text-blue-400 transition group-hover:scale-110"
                      />

                      <span className="text-sm font-medium text-gray-300 transition group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
