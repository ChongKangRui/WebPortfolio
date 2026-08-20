import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiHome,
  FiBriefcase,
  FiCode,
  FiFolder,
  FiClock,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { useTheme } from "../context/ThemeContext";
import { DEFAULT_SECTIONS } from "../content";

export interface NavSection {
  id: string;
  label: string;
}

// Stays theme-aware (white in light mode, black in dark mode) — dark mode
// uses true black here instead of the dark-navy slate-900/950 it used
// before, so the header buttons and the open-menu overlay below match.
const SQUARE_BUTTON =
  "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-black transition hover:border-slate-400 dark:border-slate-800 dark:bg-black dark:text-white dark:hover:border-slate-700";

// One icon per section, purely decorative — keeps each menu card visually
// distinct instead of six identical text-only boxes.
const SECTION_ICONS: Record<string, IconType> = {
  home: FiHome,
  services: FiBriefcase,
  skills: FiCode,
  projects: FiFolder,
  experience: FiClock,
  contact: FiMail,
};

// The menu cascades its links in every time it opens — this is a toggled
// UI, not a scroll reveal, so it intentionally replays on every open rather
// than a `once`-viewport trigger. Since the menu still mounts/unmounts via
// the plain conditional below (no AnimatePresence, matching the outer
// chrome as-is), `initial`/`animate` fires fresh on every open by itself.
const menuVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock background scroll and allow Escape to close while the menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 flex items-center justify-between p-4"
      >
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className={SQUARE_BUTTON}
        >
          {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />}
        </button>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className={SQUARE_BUTTON}
        >
          {isMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </motion.header>

      {isMenuOpen && (
        <div
          // items-start on mobile: 6 stacked cards are taller than most phone
          // screens, and centering overflowing content pushes it up under the
          // header. sm:items-center keeps the original centered look once the
          // 2-row grid (sm:grid-cols-3) comfortably fits the viewport.
          // Same theme-aware black/white as the header buttons above —
          // white in light mode, true black (not the old slate-950) in dark.
          className="fixed inset-0 z-40 flex items-start overflow-y-auto bg-white/95 backdrop-blur-sm sm:items-center dark:bg-black/95"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            // Single column on mobile, stacked top to bottom as a flex list —
            // each row is short (icon + label side by side) so all 6 still
            // fit a phone viewport with no scrolling. sm: switches to the
            // original 3-column grid of taller, centered icon-over-label cards.
            className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 pt-20 pb-6 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6 sm:py-24"
            onClick={(e) => e.stopPropagation()}
          >
            {DEFAULT_SECTIONS.map(({ id, label }) => {
              const Icon = SECTION_ICONS[id];
              return (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  variants={linkVariants}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative flex flex-row items-center justify-start gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm transition-colors hover:border-black/20 hover:shadow-md sm:flex-col sm:justify-center sm:gap-3 sm:px-6 sm:py-8 sm:text-center dark:border-slate-800 dark:bg-gray-950 dark:hover:border-white/20"
                >
                  {Icon && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-white sm:h-11 sm:w-11 dark:bg-white dark:text-black">
                      <Icon size={18} />
                    </span>
                  )}

                  <span className="text-sm font-medium capitalize text-black sm:text-lg dark:text-white">
                    {label}
                  </span>

                  {/* arrow nudges in on hover, plain CSS on a non-motion child so it doesn't fight framer's own transform on the card */}
                  <FiArrowUpRight
                    size={14}
                    className="pointer-events-none absolute bottom-2 right-3 text-slate-300 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:bottom-3 sm:right-4 dark:text-slate-600"
                  />
                </motion.a>
              );
            })}
          </motion.nav>
        </div>
      )}
    </>
  );
}
