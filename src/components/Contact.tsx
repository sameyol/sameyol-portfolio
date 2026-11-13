
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#080d1a] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-[#0d1528] px-7 py-14 text-center md:px-16 md:py-20"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Let's Build Something{" "}
            <span className="text-blue-400">Great Together.</span>
          </h2>

          <p className="mx-auto mb-9 max-w-2xl leading-7 text-gray-400">
            Have a project idea, a job opportunity, or a collaboration
            in mind? I'd love to hear from you. Let's discuss how
            we can bring your ideas to life.
          </p>

          <a
            href="mailto:usamueleyo@gmail.com"
            className="inline-flex items-center gap-3 rounded-lg bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-600"
          >
            <FiMail className="text-xl" />
            Send Me an Email
            <FiArrowUpRight />
          </a>

          <div className="my-10 border-t border-white/10" />

          <p className="mb-5 text-sm text-gray-400">
            You can also find me here
          </p>

          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/sameyol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl text-gray-300 transition hover:border-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <FiGithub />
            </a>

            <a
              href="https://linkedin.com/in/samuel-eyo-498804340/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl text-gray-300 transition hover:border-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
