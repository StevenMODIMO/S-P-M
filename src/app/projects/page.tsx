import { Metadata } from "next";
import ProjectsHeader from "@/components/ProjectsHeader";
import Container from "@/components/Container";
import ProjectLinks from "./components/ProjectLinks";

import Link from "next/link";
import Image from "next/image";

interface ProjectsListingTypes {
  id?: string;
  title: string;
  thumbnail: string;
  icon: string;
  description?: string;
  demo_link?: string;
  github_link?: string;
  figma_link?: string;
  category?: string[];
  stack?: string[];
  created_at: string;
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects and contributions to the tech community.",
};

export default async function Projects() {
  const response = await fetch("http://localhost:3000/api/projects");
  const projects: ProjectsListingTypes[] = await response.json();
  return (
    <main className="h-full">
      <ProjectsHeader />
      <Container>
        <section className="bg-[#fafafa] text-[#393a1f] dark:text-[#fafafa] p-2 w-full rounded grid sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-[#2a2929] shadow">
          {projects.map(
            ({
              id,
              title,
              icon,
              github_link,
              figma_link,
              demo_link,
              category,
              stack,
              created_at,
            }) => {
              function formatDateTime(isoString: string) {
                const date = new Date(isoString);
                return (
                  date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) +
                  " at " +
                  date.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })
                );
              }
              return (
                <div
                  key={id}
                  className="flex flex-col gap-2 shadow rounded p-4 bg-white hover:bg-[#fafafa] transition-all duration-150 ease-in-out cursor-pointer dark:bg-[#3a3838] dark:hover:bg-[#2e2c2c]"
                >
                  <header className="flex gap-2">
                    <div className="relative w-8 h-8">
                      <Image
                        src={icon}
                        alt={title}
                        fill={true}
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div>
                        <h1 className="text-sm font-medium">{title}</h1>
                        <p className="text-xs">{formatDateTime(created_at)}</p>
                      </div>
                    </div>
                  </header>
                  <ProjectLinks
                    figma_link={figma_link}
                    github_link={github_link}
                    demo_link={demo_link}
                    category={category}
                    stack={stack}
                  />
                </div>
              );
            }
          )}
        </section>
      </Container>
    </main>
  );
}
