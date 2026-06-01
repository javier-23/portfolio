// src/data/technologies.ts
import AstroIcon from "../icons/Astro.astro";
import cplusplusIcon from "../icons/Cpluplus.astro";
import CSSIcon from "../icons/CSS.astro";
import DockerIcon from "../icons/Docker.astro";
import expressIcon from "../icons/Express.astro";
import GitIcon from "../icons/GitHub.astro";
import HTMLIcon from "../icons/HTML.astro";
import JavaScriptIcon from "../icons/JavaScript.astro";
import NodeIcon from "../icons/Node.astro";
import PostgreSQLIcon from "../icons/PostgreSQL.astro";
import ReactIcon from "../icons/React.astro";
import TailwindIcon from "../icons/Tailwind.astro";

export const TECHNOLOGIES = {
  astro: {
    name: "Astro",
    class: "bg-cyan-900/80",
    image: AstroIcon,
  },
  tailwind: {
    name: "Tailwind CSS",
    class: "bg-blue-900/80",
    image: TailwindIcon,
  },
  javascript: {
    name: "JavaScript",
    class: "bg-yellow-900/70",
    image: JavaScriptIcon,
  },
  react: {
    name: "React",
    class: "bg-sky-900/50",
    image: ReactIcon,
  },
  nodejs: {
    name: "Node.js",
    class: "bg-green-900/80",
    image: NodeIcon,
  },
  git: {
    name: "GitHub",
    class: "bg-gray-700/90",
    image: GitIcon,
  },
  cplusplus: {
    name: "C++",
    class: "bg-blue-900/80",
    image: cplusplusIcon,
  },
  docker: {
    name: "Docker",
    class: "bg-blue-800/80",
    image: DockerIcon,
  },
  express: {
    name: "Express.js",
    class: "bg-gray-500/80",
    image: expressIcon,
  },
  css: {
    name: "CSS",
    class: "bg-purple-900/50",
    image: CSSIcon,
  },
  html: {
    name: "HTML",
    class: "bg-orange-700/80",
    image: HTMLIcon,
  },
  postgres: {
    name: "PostgreSQL",
    class: "bg-blue-900/80",
    image: PostgreSQLIcon,
  },
} as const;