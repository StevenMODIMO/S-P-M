"use client";
import { projectsListings } from "@/lib/project-listings";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Header from "./ui/Header";
import { FolderGit2, Figma, BookOpenText, Globe, Github } from "lucide-react";
import ProjectDetails from "./ProjectDetails";

export default function ProjectsFilter() {
  return (
    <div className="text-[#393a1f] dark:text-white">
      <header className="flex flex-col gap-3 dark:bg-[#2a2929] dark:shadow-md p-4">
        <div className="flex items-center justify-center gap-2">
          <FolderGit2 className="" />
          <Header className="text-4xl text-[#E7EE1A]">My Projects</Header>
        </div>
        <p className="text-xs text-center text-[#E7EE1A] italic font-bold">
          <span>CODE.</span> <span className="dark:text-white">CREATE.</span>{" "}
          <span>INNOVATE</span>
        </p>
        <p className="text-sm text-center">
          A collection of personal and professional projects that showcase my
          skills in web development, problem-solving, and building real-world
          applications.
        </p>
      </header>
      <ProjectDetails />
      <Container>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-4">
          {projectsListings.map((project) => (
            <div
              key={project.id}
              className="dark:bg-[#2a2929] dark:shadow-xl p-4"
            >
              {" "}
              <div className="relative w-60 h-32">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-medium">{project.title}</h1>
                {/* <p className="text-xs xs:italic xm:not-italic">{project.description}</p> */}
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-1 text-xs text-[#393a1f] dark:text-[#E7EE1A]">
                    {project.stack.join(" - ")}
                  </p>
                </div>
                <footer className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm bg-[#333333] w-fit py-2 px-4 dark:text-white">
                    <BookOpenText className="w-4 h-4" />
                    <span>Details</span>
                  </button>
                  {project.figmaLink && (
                    <Link
                      href={project.figmaLink}
                      target="_blank"
                      className="text-xs flex items-center gap-2 bg-[#333333] w-fit py-2 px-4"
                    >
                      <Figma className="w-4 h-4" />
                      <span>Open in figma</span>
                    </Link>
                  )}
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      className="text-xs flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Demo</span>
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="text-xs flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repo</span>
                    </Link>
                  )}
                </footer>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

{
  /* <div className="relative w-24 h-24">
                <Image src={project.icon} alt={project.title} fill={true} />
              </div> */
}
{
  /* <Header className="text-lg">{project.title}</Header> */
}
