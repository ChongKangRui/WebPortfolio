import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { DEFAULT_SECTIONS, CONTACT_LINKS } from "../../content";
import GmailCard from "./GmailCard";
import LinkedInCard from "./LinkedInCard";
import GithubCard from "./GithubCard";
import { fadeInUp, revealTransition, revealViewport } from "../../lib/motion";

const GAME_DEV_PORTFOLIO_URL = "https://chongkangrui.github.io/Portfolio/";

export default function ContactBento() {
  const gmail = CONTACT_LINKS.find((link) => link.name === "Gmail")!;
  const github = CONTACT_LINKS.find((link) => link.name === "GitHub")!;
  const linkedin = CONTACT_LINKS.find((link) => link.name === "LinkedIn")!;

  return (
    <section
      className="relative overflow-hidden px-6 py-45"
      id={DEFAULT_SECTIONS[5].label}
    >
      <div className="flex max-w-4xl flex-col gap-4 md:mx-auto lg:grid lg:h-[320px] lg:grid-cols-[260px_1fr_220px] lg:grid-rows-[auto_1fr] lg:gap-5">
        {/* Contact title - no box, aligned like the other section titles */}
        <motion.div
          className="flex items-center justify-center text-black lg:justify-start dark:text-white"
          style={{ gridArea: "1 / 1 / 2 / 2" }}
          initial={fadeInUp}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={revealTransition()}
        >
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            CONTACT
          </h1>
        </motion.div>

        <GmailCard
          href={gmail.href}
          icon={gmail.icon}
          style={{ gridArea: "1 / 2 / 2 / 3" }}
          delay={0.1}
        />

        <LinkedInCard
          href={linkedin.href}
          icon={linkedin.icon}
          style={{ gridArea: "1 / 3 / 3 / 4" }}
          delay={0.2}
        />

        <GithubCard
          href={github.href}
          icon={github.icon}
          style={{ gridArea: "2 / 1 / 3 / 3" }}
          delay={0.3}
        />
      </div>

      {/* Secondary callout, not a contact method — kept visually distinct
          from the cards above so it doesn't read as a 4th way to reach me. */}
      <motion.a
        href={GAME_DEV_PORTFOLIO_URL}
        target="_blank"
        rel="noreferrer"
        initial={fadeInUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={revealTransition(0.4)}
        className="mx-auto mt-8 flex max-w-4xl items-center justify-center gap-1.5 text-center text-sm text-gray-500 underline decoration-dotted underline-offset-4 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
      >
        Hiring for a game dev role? See my game-focused portfolio
        <FiArrowUpRight size={14} />
      </motion.a>
    </section>
  );
}
