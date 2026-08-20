import { motion } from "framer-motion";
import { fadeInUp, revealTransition, revealViewport } from "../lib/motion";

type SessionTitleProps = {
  title: string;
  mainTitle: string;
  description: string;
};

export default function SessionTitle({
  title,
  mainTitle,
  description,
}: SessionTitleProps) {
  return (
    <div className="flex flex-col my-10 md:flex-row items-start md:items-center justify-around gap-4 md:gap-8 w-full text-black dark:text-white">
      {/* Left side - Title and Main Title */}
      <div className="flex flex-col w-full md:w-auto" >
        <motion.h2 className="flex items-center text-sm sm:text-base font-medium"
        initial={fadeInUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={revealTransition(0)}>
          <span className="inline-block w-8 sm:w-12 h-[2px] mr-2 bg-black dark:bg-white flex-shrink-0" />
          {title}
        </motion.h2>
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl max-w-[12rem] sm:max-w-[14rem] md:max-w-[10rem] text-wrap leading-tight"
         initial={fadeInUp}
         whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
         transition={revealTransition(0.12)}
        >
          {mainTitle}
        </motion.h1>
      </div>

      {/* Right side - Description */}
      <motion.p className="text-sm sm:text-base max-w-full md:max-w-[20rem] lg:max-w-[30rem] text-gray-600 dark:text-gray-300"
      initial={fadeInUp}
         whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
         transition={revealTransition(0.24)}
      >
        {description}
      </motion.p>
    </div>
  );
}
