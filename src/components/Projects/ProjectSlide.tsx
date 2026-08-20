import { FiExternalLink, FiGithub } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  imageSrc: string;
};

type ProjectSlideProps = {
  project: Project;
};

export default function ProjectSlide({ project }: ProjectSlideProps) {
  const { title, description, techStack, liveDemoUrl, githubUrl, imageSrc } =
    project;

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
      {/* Left - text content */}
      <div className="order-2 flex flex-col items-start gap-5 text-left md:order-1">
        <h3 className="text-2xl font-bold text-black sm:text-3xl dark:text-white">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-black/20 px-3 py-1 text-xs text-black dark:border-white/20 dark:text-white"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-100"
          >
            <FiExternalLink size={16} />
            Live Demo
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-black bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-slate-100 dark:border-white dark:bg-black dark:text-white dark:hover:bg-slate-900"
          >
            <FiGithub size={16} />
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Right - screenshot */}
      <div className="order-1 flex justify-center md:order-2">
        <img
          src={imageSrc}
          alt={title}
          className="w-full max-w-md rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
