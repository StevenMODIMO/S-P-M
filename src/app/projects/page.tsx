import { Metadata } from "next";
import ProjectsFilter from "@/components/ProjectsFilter";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my projects and contributions to the tech community.",
};

export default function Projects({
  searchParams,
}: {
  searchParams: { q?: string; sort?:string };
}) {
  const query = searchParams.q || "No query provided";
  const sort = searchParams.sort || "No query provided";
  return (
    <main className="h-full">
      <Container>
        <header>
          Query from server component <span className="font-mono">{query} {sort}</span>
        </header>
        <ProjectsFilter />
      </Container>
    </main>
  );
}
