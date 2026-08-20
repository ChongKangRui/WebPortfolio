import { FiMapPin } from "react-icons/fi";

type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
};

type ExperienceItemProps = {
  experience: Experience;
};

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { title, company, location, startDate, endDate, bullets } = experience;

  return (
    <div className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
      {/* Left - timeline */}
      <div className="flex items-baseline gap-2 md:flex-col md:items-end md:gap-1 md:text-right">
        <span className="text-xl font-bold text-black sm:text-2xl md:text-3xl dark:text-white">
          {endDate}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          &mdash; {startDate}
        </span>
      </div>

      {/* Right - content box */}
      <div className="relative border-l-2 border-black/10 pl-6 md:pl-10 dark:border-white/10">
        <span className="absolute top-2 -left-[7px] h-3 w-3 rounded-full bg-black dark:bg-white" />

        <div className="rounded-xl border border-black/10 bg-white/60 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-bold text-black sm:text-xl dark:text-white">
            {title}
          </h3>

          <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300">
            {company}
            <span className="text-gray-400 dark:text-gray-500">·</span>
            <FiMapPin className="inline" size={14} />
            {location}
          </p>

          <ul className="mt-4 flex flex-col gap-2.5">
            {bullets.map((bullet, index) => (
              <li
                key={index}
                className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-black/40 dark:bg-white/40" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
