import hockeyLineupProject from "@/assets/images/hockey_lineup_project.png";
import mernStackProject from "@/assets/images/mern_fullstack_project.png";
import aiNotesApp from "@/assets/images/ai-notes-app.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Hockey Lineup Creator",
    year: "2025",
    title: "User-Friendly Lineup Management Tool",
    results: [
      { title: "React, TypeScript, Next.js, Node.js" },
      { title: "MongoDB, Express, NextAuth" },
      { title: "Tailwind, Shadcn UI, Lucid, Zustand" },
    ],
    link: "https://github.com/daniel-budai/hockey-lineup-builder-examensarbete",
    image: hockeyLineupProject,
  },
  {
    company: "MERN Stack Project",
    year: "2024",
    title: "Food Delivery App",
    results: [
      { title: "React, TypeScript, Node.js" },
      { title: "Express, MongoDB, Multer, JWT" },
      { title: "Tailwind, Shadcn UI, Zustand" },
    ],
    link: "https://github.com/daniel-budai/food-ordering-app-frontend",
    image: mernStackProject,
  },
  {
    company: "Ai Notes App",
    year: "2024",
    title: "Smart Notes: AI-Powered Note Taking",
    results: [
      { title: "React, TypeScript, Node.js, Nextjs, Pinecone, Prisma" },
      { title: "Express, MongoDB, OpenAI API, Multer " },
      { title: "Tailwind, Shadcn UI" },
    ],
    link: "https://github.com/daniel-budai/notes-ai",
    image: aiNotesApp,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:pb-24 ">
      <div className="container">
        <SectionHeader
          eyebrow="Real stuff"
          title="My Projects"
          description="Here’s what I’ve been working on lately."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20 sticky">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View</span>
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0
                     lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
