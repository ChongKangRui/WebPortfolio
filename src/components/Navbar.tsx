import { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { DEFAULT_SECTIONS } from "../content";

export interface NavSection {
  id: string;
  label: string;
}





const SQUARE_BUTTON =
  "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-black transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600";

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
      <header className="sticky top-0 z-50 flex items-center justify-between p-4">
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
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex items-center overflow-y-auto bg-white/95 backdrop-blur-sm dark:bg-slate-950/95"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-3 px-6 py-24 sm:grid-cols-3"
            onClick={(e) => e.stopPropagation()}
          >
            {DEFAULT_SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl border border-slate-200 bg-white px-6 py-8 text-center text-lg text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}