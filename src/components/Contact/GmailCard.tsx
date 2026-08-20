import type { ComponentType, CSSProperties } from "react";
import { motion } from "framer-motion";
import { fadeInUp, revealTransition, revealViewport } from "../../lib/motion";

type GmailCardProps = {
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  style?: CSSProperties;
  delay?: number;
};

export default function GmailCard({
  href,
  icon: Icon,
  style,
  delay = 0,
}: GmailCardProps) {
  const address = href.replace("mailto:", "");

  return (
    <motion.a
      href={href}
      aria-label="Gmail"
      style={style}
      initial={fadeInUp}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      // Own transition so hover stays snappy instead of inheriting the
      // entrance's stagger delay from the `transition` prop below.
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      transition={revealTransition(delay)}
      className="flex h-20 items-center gap-10 rounded-2xl border border-black/10 bg-white/60 px-5 text-black transition-colors hover:border-black/30 hover:shadow-sm lg:h-auto dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30"
    >
      <Icon className="shrink-0" size={26} />
      <span className="truncate text-sm font-medium sm:text-base">
        {address}
      </span>
    </motion.a>
  );
}
