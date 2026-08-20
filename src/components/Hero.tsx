import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMail, FiDownload } from "react-icons/fi";
import { DEFAULT_SECTIONS, JOB_TITLES } from "../content";

export interface HeroProps {
  availableForWork?: boolean;
}

const SWITCH_INTERVAL_MS = 3000;

export default function Hero({ availableForWork = true }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % JOB_TITLES.length);
    }, SWITCH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="relative overflow-hidden p-15 sm:p-17 lg:p-20 scroll-mt-[72px]" id={DEFAULT_SECTIONS[0].label}>
      <div className="mx-auto max-w-full text-center">
        {availableForWork && (
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full light:bg-black dark:bg-white" />
            Available for work
          </span>
        )}

        <h1 className="text-3xl font-extralight leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          Hi, I&apos;m Chong Kang Rui. A
        </h1>

        {/* Clips the swipe-up transition to a single line */}
        <div className="my-2 py-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={JOB_TITLES[titleIndex]}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="font-sans text-4xl text-slate-900 dark:text-white md:text-8xl"
            >
              {JOB_TITLES[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          I am a software engineer who passionate to explore the technologies
          and build modern, scalable and secure application. I enjoy working
          across different stack and technologies, building clean, robust
          interface or systems with an emphasis on performance,
          reliability and real-world impact.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${"chongkangrui@gmail.com"}`}
            className="inline-flex items-center gap-2 rounded-lg border border-black bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-slate-100 dark:border-white dark:bg-black dark:text-white dark:hover:bg-slate-900"
          >
            <FiMail size={16} />
            Let&apos;s talk
          </a>

          <a
            href={"resumeUrl"}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-100"
          >
            <FiDownload size={16} />
            Download CV
          </a>
        </div>
      </div>

     
    </section>
  );
}
