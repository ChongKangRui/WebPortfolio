import type { ComponentType, CSSProperties } from "react";

type LinkedInCardProps = {
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  style?: CSSProperties;
};

export default function LinkedInCard({
  href,
  icon: Icon,
  style,
}: LinkedInCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      style={style}
      className="relative flex h-32 flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-5 text-black transition hover:-translate-y-1 hover:border-black/30 hover:shadow-sm lg:h-auto dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30"
    >
      {/* TODO: floating decorative effect goes here */}

      {/* Icon swatch - inverted so it reads like a brand mark (no official LinkedIn icon in our set) */}
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
        <Icon size={20} />
      </span>

      <span className="text-sm font-medium sm:text-base">LinkedIn</span>
    </a>
  );
}
