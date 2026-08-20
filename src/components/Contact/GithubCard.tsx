import type { ComponentType, CSSProperties } from "react";
import { motion } from "framer-motion";
import { PROJECTS, EXTRA_GITHUB_PROJECTS } from "../../content";

type GithubCardProps = {
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  style?: CSSProperties;
};

// The 3 case-study projects plus the smaller placeholder repos, in that order
const CHIP_NAMES = [...PROJECTS.map((project) => project.title), ...EXTRA_GITHUB_PROJECTS];

// Scattered spots + independent timing per chip so they drift out of sync
// instead of floating in lockstep. Kept clear of the icon/label corner, and
// longer names get extra clearance from the right edge.
const CHIP_LAYOUT = [
  { top: "30%", left: "42%", duration: 5, delay: 0 }, // EcommerGameShop
  { top: "42%", left: "14%", duration: 6.5, delay: 1 }, // AI Power Customer Support
  { top: "55%", left: "70%", duration: 5.5, delay: 2 }, // YelpCamp
  { top: "62%", left: "6%", duration: 4, delay: 0.5 }, // CGE
  { top: "68%", left: "44%", duration: 6, delay: 1.5 }, // SpaceShooter_3D
  { top: "82%", left: "18%", duration: 5, delay: 2.5 }, // Python_FileOrganizer
  { top: "80%", left: "58%", duration: 4.5, delay: 3 }, // Python_UnitConverter
];

export default function GithubCard({
  href,
  icon: Icon,
  style,
}: GithubCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      style={style}
      className="relative flex h-24 items-start gap-3 overflow-hidden rounded-2xl border border-black/10 bg-white/60 px-6 pt-6 text-black transition hover:-translate-y-1 hover:border-black/30 hover:shadow-sm lg:h-auto dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30"
    >
      {/* Ambient drift of past project names, filling the space below the label */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        {CHIP_NAMES.map((name, index) => {
          const layout = CHIP_LAYOUT[index % CHIP_LAYOUT.length];
          return (
            <motion.span
              key={name}
              className="absolute rounded-full border border-black/15 bg-black/[0.03] px-3 py-1 text-xs font-medium whitespace-nowrap text-black/70 dark:border-white/15 dark:bg-white/[0.04] dark:text-white/70"
              style={{ top: layout.top, left: layout.left }}
              animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
              transition={{
                duration: layout.duration,
                delay: layout.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {name}
            </motion.span>
          );
        })}
      </div>

      <Icon className="relative z-10 shrink-0" size={28} />
      <span className="relative z-10 text-sm font-medium sm:text-base">
        github/ChongKangRui
      </span>
    </a>
  );
}
