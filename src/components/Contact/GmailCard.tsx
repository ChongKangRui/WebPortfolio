import type { ComponentType, CSSProperties } from "react";

type GmailCardProps = {
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  style?: CSSProperties;
};

export default function GmailCard({ href, icon: Icon, style }: GmailCardProps) {
  const address = href.replace("mailto:", "");

  return (
    <a
      href={href}
      aria-label="Gmail"
      style={style}
      className="flex h-20 items-center gap-10 rounded-2xl border border-black/10 bg-white/60 px-5 text-black transition hover:-translate-y-1 hover:border-black/30 hover:shadow-sm lg:h-auto dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30"
    >
      <Icon className="shrink-0" size={26} />
      <span className="truncate text-sm font-medium sm:text-base">
        {address}
      </span>
    </a>
  );
}
