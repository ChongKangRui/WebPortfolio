import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SessionTitle from "../SessionTitle";
import { DEFAULT_SECTIONS, PROJECTS } from "../../content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import ProjectSlide from "./ProjectSlide";
import { fadeInUp, revealTransition, revealViewport } from "../../lib/motion";

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      className="relative overflow-hidden px-6 py-20"
      id={DEFAULT_SECTIONS[3].label}
    >
      <SessionTitle
        title="My Work"
        mainTitle="PROJECTS"
        description="A selection of full-stack applications I've built end-to-end — from database design and APIs to polished, production interfaces."
      />

      <motion.div
        className="relative mx-auto mt-12 max-w-5xl"
        initial={fadeInUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={revealTransition()}
      >
        <Carousel opts={{ loop: true }}  setApi={setApi}>
          <CarouselContent>
            {PROJECTS.map((project) => (
              <CarouselItem key={project.title} className="basis-full">
                <ProjectSlide project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            size="icon"
            className="left-0 sm:-left-6 lg:-left-14"
          />
          <CarouselNext size="icon" className="right-0 sm:-right-6 lg:-right-14" />
        </Carousel>

        {/* Position dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {PROJECTS.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Go to ${project.title}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-6 bg-black dark:bg-white"
                  : "w-2 bg-black/20 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
