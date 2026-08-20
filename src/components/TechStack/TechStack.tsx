import { motion } from "framer-motion";
import SessionTitle from "../SessionTitle";
import { DEFAULT_SECTIONS, TECH_STACK } from "../../content";
import MagneticIcon from "./MagneticIcon";
import { groupRevealViewport, staggerContainer, staggerItem } from "../../lib/motion";

export default function TechStack() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 sm:py-32"
      id={DEFAULT_SECTIONS[2].label}
    >
      <SessionTitle
        title="My tech stack"
        mainTitle="WHAT I USE"
        description="I utilize a range of technologies, including full-stack web tools for scalable applications and specialized game engines for immersive interactive content."
      ></SessionTitle>

      {/* <div className="grid w-full place-items-center place-content-center lg:px-[6rem] xl:px-[10rem] max-w-[100rem] grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
        {TECH_STACK.map((c) => {
          const Icon = c.icon;
          console.log(c.name);
          return (
            <div key={c.name}>
              <Icon className="w-8 h-8 my-10"/>
            </div>
          );
        })}
      </div> */}
      {/* One shared trigger for the whole grid: as soon as the first icons
          appear, every icon starts its transition, just staggered a beat
          apart, instead of each icon waiting for its own turn to scroll in. */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 lg:px-[6rem] xl:px-[10rem]"
        variants={staggerContainer(0.02)}
        initial="hidden"
        whileInView="visible"
        viewport={groupRevealViewport}
      >
        {TECH_STACK.map((c) => (
          <motion.div
            key={c.name}
            className="flex h-24 w-[80px] flex-col items-center justify-center gap-2"
            variants={staggerItem}
          >
            <MagneticIcon icon={c.icon} className="h-8 w-8" />
            <span className="text-center text-xs text-gray-500 dark:text-gray-400">
              {c.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
