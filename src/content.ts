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
      "Scalable REST APIs and backend systems with Node.js, PostgreSQL, and Prisma. Experience with AI/LLM integrations, payment processing (Stripe), and CI/CD via GitHub Actions and Docker.",
    imageSrc: "src/assets/backend.png",
  },
  {
    title: "Game Development",
    content:
      "Commercial and personal game projects built with Unreal Engine and Unity. Experience with multiplayer systems, ECS architecture, complex state management, custom algorithms and mathematical solutions.",
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
  SiTanstack,
  SiAxios,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { CsharpIcon } from "./components/icons/devicon-line-csharp";

import ecommerGameShopImg from "./assets/projects/ecommergameshop.jpg";
import aiPowerCustomerSupportImg from "./assets/projects/aipowercustomersupport.jpg";
import yelpCampImg from "./assets/projects/yelpcamp.jpg";

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
  { name: "Tanstack", icon: SiTanstack },
  { name: "Axios", icon: SiAxios },

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

type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  imageSrc: string;
};

export const PROJECTS: Project[] = [
  {
    title: "EcommerGameShop",
    description:
      "A full-stack e-commerce platform for gaming gear and peripherals. Product browsing with search/filtering, guest & logged-in cart, secure Stripe checkout with stock validation, order tracking, and customer refund requests, include a role-protected admin dashboard for products, orders, refunds, and sales analytics.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe",
      "Docker",
    ],
    liveDemoUrl: "https://red-field-gaming.vercel.app",
    githubUrl: "https://github.com/ChongKangRui/EcommerGameShop",
    imageSrc: ecommerGameShopImg,
  },
  {
    title: "AI Power Customer Support",
    description:
      "A support desk platform that ingests real customer emails via the Gmail API, uses Google Gemini to auto-resolve straightforward inquiries or escalate complex ones, and gives agents AI-assisted reply suggestions with threaded conversations, role-based access, and an admin analytics dashboard.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Google Gemini",
      "Tailwind CSS",
    ],
    liveDemoUrl: "https://ai-power-customer-support.vercel.app",
    githubUrl: "https://github.com/ChongKangRui/AIPowerCustomerSupport",
    imageSrc: aiPowerCustomerSupportImg,
  },
  {
    title: "YelpCamp",
    description:
      "A full-stack campground review application where users can discover, create, and review campgrounds with star ratings and images, backed by secure authentication, persistent sessions, and interactive maps.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Bootstrap",
      "JavaScript",
      "Cloudinary",
      "EJS",
    ],
    liveDemoUrl: "https://ckryelpcamp.vercel.app",
    githubUrl: "https://github.com/ChongKangRui/YelpCamp",
    imageSrc: yelpCampImg,
  },
];