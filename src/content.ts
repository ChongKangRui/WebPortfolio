import type { NavSection } from "./components/Navbar";


export const DEFAULT_SECTIONS: NavSection[] = [
  { id: "home", label: "home" },
  { id: "services", label: "services" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];

export const SERVICES = [
  {
    title: "Full Stack Web Development",
    content:
      "Responsive, production-grade web apps with React, Next.js, and TypeScript — from UI to deployment on Vercel.",
    imageSrc: "src/assets/fullStack.png",
  },
  {
    title: "API & Backend development",
    content:
      "Scalable REST APIs and services with Node.js, PostgreSQL, and Prisma, with authentication, AI-assisted features, and CI/CD via GitHub Actions and Docker.",
    imageSrc: "src/assets/backend.png",
  },
  {
    title: "Game Development",
    content:
      "A secondary focus: multiplayer gameplay systems and a custom C++ game engine, built in Unreal Engine with the Gameplay Ability System and AI pathfinding.",
    imageSrc: "src/assets/gameDev.png",
  },
];
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiUnrealengine,
  SiUnity,
  SiVite,
  SiShadcnui,
  SiDiscord,
  SiGithub,
  SiVercel,
  SiRender,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { CsharpIcon } from "./components/icons/devicon-line-csharp";

type TechItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const TECH_STACK: TechItem[] = [
  // 1. PROGRAMMING LANGUAGES (Foundation)
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "C#", icon: CsharpIcon },

  // 2. MARKUP & STYLING
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "shadcn/ui", icon: SiShadcnui },

  // 3. FRAMEWORKS & LIBRARIES (Core)
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Next.js", icon: SiNextdotjs },

  // 4. DATABASES
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },

  // 5. BUILD TOOLS & DEVOPS
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Docker", icon: SiDocker },
  { name: "Vercel", icon: SiVercel },      // ← Add
  { name: "Render", icon: SiRender },
  

  // 6. GAME DEVELOPMENT
  { name: "Unreal Engine", icon: SiUnrealengine },
  { name: "Unity", icon: SiUnity },

  // 7. TOOLS (End with these)
  { name: "Visual Studio Code", icon: VscVscode },
  { name: "Discord", icon: SiDiscord },
];