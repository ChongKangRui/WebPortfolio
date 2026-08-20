import SessionTitle from "../SessionTitle";
import { DEFAULT_SECTIONS, EXPERIENCES } from "../../content";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20"
      id={DEFAULT_SECTIONS[4].label}
    >
      <SessionTitle
        title="My Journey"
        mainTitle="EXPERIENCE"
        description="I came from game development background, not web — but the core engineering discipline doesn't change: architecting systems, managing complex state and optimizing performance."
      />

      <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-10 md:gap-14">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={`${experience.company}-${experience.title}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
}
