import type { ComponentType, CSSProperties } from "react";

type GithubCardProps = {
  href: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  style?: CSSProperties;
};

export default function GithubCard({ href, icon: Icon, style }: GithubCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      style={style}
      className="relative flex h-24 items-start gap-3 overflow-hidden rounded-2xl border border-black/10 bg-white/60 px-6 pt-6 text-black transition hover:-translate-y-1 hover:border-black/30 hover:shadow-sm lg:h-auto dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/30"
    >
      {/* TODO: floating project names go here */}

      <Icon className="shrink-0" size={28} />
      <span className="text-sm font-medium sm:text-base">
        github/ChongKangRui
      </span>
    </a>
  );
}
