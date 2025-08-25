import { Metadata } from "next";
import ProjectsFilter from "@/components/ProjectsFilter";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects and contributions to the tech community.",
};

export default function Projects() {
  return (
    <main className="h-full">
      <ProjectsFilter />
    </main>
  );
}
