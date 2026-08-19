import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import SessionTitle from "../SessionTitle";
import { DEFAULT_SECTIONS, SERVICES } from "../../content";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ExpertiseContentCard from "./ExpertiseContentCard";



export default function ExpertiseOffer() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  return (
    <section
      className="relative overflow-hidden px-6 py-20"
      id={DEFAULT_SECTIONS[1].label}
    >
      <SessionTitle
        title="My Expertise"
        mainTitle="WHAT I BRING"
        description="I design and build end-to-end digital products from full stack web application, user interface, backend API to game application. My focus is on creating reliable, high-performance solutions that solve real problems and scale with business needs."
      ></SessionTitle>

      <Carousel
        className="mt-12 w-full"
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
      >
        <CarouselContent className="-ml-1">
          {SERVICES.map((service) => (
            <CarouselItem
              key={service.title}
              className="basis-full pl-1 sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <ExpertiseContentCard
                  imageSrc={service.imageSrc}
                  title={service.title}
                  content={service.content}
                  
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}