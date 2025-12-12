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
  alternates: {
    canonical: `${process.env.BASE_URL}/projects`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Projects() {
  const response = await fetch(`${process.env.BASE_URL}/api/projects`);
  const projects: ProjectsListingTypes[] = await response.json();
  return (
    <main className="h-full">
      <ProjectsHeader />
      <Container>
        <section className="bg-[#fafafa] text-[#393a1f] dark:text-[#fafafa] p-2 md:p-4 w-full rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-[#2a2929] shadow">
          {projects.map(
            (
              {
                id,
                title,
                description,
                icon,
                github_link,
                figma_link,
                demo_link,
                category,
                stack,
                created_at,
              },
              index
            ) => {
              console.log(`Index: ${index}`);
              const oddIndex = index % 2 !== 0;
              console.log(`Odd Index: ${oddIndex}`);
              return (
                <div
                  key={id}
                  className={`${
                    !oddIndex
                      ? "-skew-y-2 hover:skew-0"
                      : "skew-y-2 hover:skew-0"
                  } flex flex-col gap-2 shadow rounded p-4 bg-white hover:bg-[#fafafa] transition-all duration-150 ease-in-out cursor-pointer dark:bg-[#3a3838] dark:hover:bg-[#2e2c2c]`}
                >
                  <header className="flex gap-2">
                    <div className="flex flex-col gap-2">
                      <Link
                        href={`/projects/${id}`}
                        className="font-medium hover:underline flex items-center gap-2"
                      >
                        <div className="relative w-8 h-8 lg:w-10 lg:h-10 lg:p-2">
                          <Image src={icon} alt={title} fill={true} />
                        </div>
                        <span className="text-lg">{title}</span>
                      </Link>
                    </div>
                  </header>
                  <ProjectLinks
                    figma_link={figma_link}
                    github_link={github_link}
                    demo_link={demo_link}
                    category={category}
                    stack={stack}
                    created_at={created_at}
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
