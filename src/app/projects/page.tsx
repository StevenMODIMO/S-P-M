import { Metadata } from "next";
import ProjectsHeader from "@/components/ProjectsHeader";
import Container from "@/components/Container";

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
        <section className="bg-[#fafafa] p-2 w-full rounded grid grid-cols-3 gap-4 dark:bg-[#2a2929] shadow">
          {projects.map(({ id, title, icon, created_at }) => {
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
                className="flex flex-col gap-2 shadow rounded w-fit p-4 bg-white"
              >
                <header className="flex itms-center gap-2">
                  <div className="relative w-10 h-10">
                    <Image
                      src={icon}
                      alt={title}
                      fill={true}
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-medium">{title}</h1>
                    <p className="text-xs">{formatDateTime(created_at)}</p>
                  </div>
                </header>
              </div>
            );
          })}
        </section>
      </Container>
    </main>
  );
}
