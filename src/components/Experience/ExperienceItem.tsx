import { motion, type Variants } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { revealViewport } from "../../lib/motion";

type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
};

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

// The timeline line and dot are driven by the row's own variants (below)
// instead of each watching the viewport on its own — one shared trigger
// keeps row/line/dot in sync as a single choreographed motion instead of
// three separate animations firing at slightly different moments.
const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export default function ExperienceItem({
  experience,
  index,
}: ExperienceItemProps) {
  const { title, company, location, startDate, endDate, bullets } = experience;

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
        // Children (line, dot) start a beat after the row settles in.
        delayChildren: 0.15,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10"
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {/* Left - timeline */}
      <div className="flex items-baseline gap-2 md:flex-col md:items-end md:gap-1 md:text-right">
        <span className="text-xl font-bold text-black sm:text-2xl md:text-3xl dark:text-white">
          {endDate}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          &mdash; {startDate}
        </span>
      </div>

      {/* Right - content box */}
      <div className="relative pl-6 md:pl-10">
        {/* Timeline line, drawn in from top */}
        <motion.span
          className="absolute top-0 left-0 h-full w-[2px] origin-top bg-black/10 dark:bg-white/10"
          variants={lineVariants}
        />
        <motion.span
          className="absolute top-2 -left-[5px] h-3 w-3 rounded-full bg-black dark:bg-white"
          variants={dotVariants}
        />

        <div className="rounded-xl border border-black/10 bg-white/60 p-6 shadow-sm transition hover:-translate-y-1 hover:border-black/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/30">
          <h3 className="text-lg font-bold text-black sm:text-xl dark:text-white">
            {title}
          </h3>

          <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300">
            {company}
            <span className="text-gray-400 dark:text-gray-500">·</span>
            <FiMapPin className="inline" size={14} />
            {location}
          </p>

          <ul className="mt-4 flex flex-col gap-2.5">
            {bullets.map((bullet, bulletIndex) => (
              <li
                key={bulletIndex}
                className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-black/40 dark:bg-white/40" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
