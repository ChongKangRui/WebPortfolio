import type { ComponentType, CSSProperties } from "react";
import { motion } from "framer-motion";
import { JOB_TITLES } from "../../content";
import { fadeInUp, revealTransition, revealViewport } from "../../lib/motion";
import { LG_QUERY, useMediaQuery } from "../../hooks/useMediaQuery";

type LinkedInCardProps = {
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  style?: CSSProperties;
  delay?: number;
};

// Column 1 spells its title letter-by-letter, stacked top to bottom.
// Columns 2 and 3 repeat their whole title as normal text, still stacked
// vertically and wrapped to fit the narrow column.
const LETTER_ROWS = [...JOB_TITLES[0].toUpperCase()," "]; // "SOFTWARE ENGINEER" -> one char per row
const WORD_REPEAT_COUNT = 4;

type ScrollColumnProps = {
  rows: string[];
  duration: number;
  rowClassName: string;
};

// Rows are rendered twice back-to-back so animating to exactly -50% loops
// seamlessly, no matter how tall each row ends up being.
function ScrollColumn({ rows, duration, rowClassName }: ScrollColumnProps) {
  const loopedRows = [...rows, ...rows];

  return (
    <div className="relative h-full min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
      <motion.div
        className="flex flex-col items-center"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loopedRows.map((row, index) => (
          <span key={index} className={rowClassName}>
            {row === " " ? " " : row}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function LinkedInCard({
  href,
  icon: Icon,
  style,
  delay = 0,
}: LinkedInCardProps) {
  // Below `lg`, ContactBento's grid collapses to a stacked flex column — the
  // scrolling-ticker card only makes sense in the tall grid cell, so on
  // small screens this renders as a plain row instead (same style as
  // GmailCard) with no entrance/hover motion at all.
  const isDesktop = useMediaQuery(LG_QUERY);

  if (!isDesktop) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        style={style}
        initial={fadeInUp}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      transition={revealTransition(delay)}
        className="flex h-20 items-center gap-10 rounded-2xl border border-black/10 bg-white/60 px-5 text-black transition-colors hover:border-black/30 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30"
      >
        <Icon className="shrink-0" size={26} />
        <span className="truncate text-sm font-medium sm:text-base">
          LinkedIn
        </span>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      style={style}
      initial={fadeInUp}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      transition={revealTransition(delay)}
      className="relative flex h-32 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-5 text-black transition-colors hover:border-black/30 hover:shadow-sm lg:h-auto dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30"
    >
      {/* Icon swatch - inverted so it reads like a brand mark (no official LinkedIn icon in our set) */}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
        <Icon size={20} />
      </span>

      {/* 3 columns, each endlessly scrolling one job title */}
      <div className="my-2 flex min-h-0 flex-1 gap-2">
        <ScrollColumn
          rows={LETTER_ROWS}
          duration={16}
          rowClassName="py-1 text-center text-[10px] font-semibold leading-none text-black/60 dark:text-white/60"
        />
        <ScrollColumn
          rows={Array(WORD_REPEAT_COUNT).fill(JOB_TITLES[1])}
          duration={11}
          rowClassName="break-words py-3 text-center text-[9px] leading-tight font-medium text-black/50 dark:text-white/50"
        />
        <ScrollColumn
          rows={Array(WORD_REPEAT_COUNT).fill(JOB_TITLES[2])}
          duration={13}
          rowClassName="break-words py-3 text-center text-[9px] leading-tight font-medium text-black/50 dark:text-white/50"
        />
      </div>

      <span className="shrink-0 text-sm font-medium sm:text-base">
        LinkedIn
      </span>
    </motion.a>
  );
}
