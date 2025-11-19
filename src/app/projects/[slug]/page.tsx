import Container from "@/components/Container";
import ProjectLinks from "../components/ProjectLinks";
import { Metadata } from "next";
import Description from "./components/Description";
import Image from "next/image";

interface ProjectType {
  thumbnail: string;
  icon: string;
  title: string;
  description: string;
  created_at: string;
  demo_link?: string;
  github_link?: string;
  figma_link?: string;
  category: string[];
  stack: string[];
  id: string;
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.BASE_URL}/api/projects`);
  const projects: ProjectType[] = await response.json();

  return projects.map(({ id }: { id: string }) => ({ slug: id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const response = await fetch(`${process.env.BASE_URL}/api/projects/${slug}`);
  const project = await response.json();

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(`${process.env.BASE_URL}/api/projects/${slug}`);
  const project = await response.json();
  return (
    <div>
      <Container className="text-[#393a1f] dark:text-white">
        <div>
          <header>
            <div className="relative w-72 h-44 xs:w-80 xm:w-96 xm:h-52 sm:w-[500px] sm:h-54 md:w-[600px] lg:w-full lg:h-40">
              <Image
                src={project.thumbnail ?? ""}
                alt={project.title}
                fill={true}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <h1 className="text-2xl font-medium my-2">{project.title}</h1>
            <ProjectLinks
              github_link={project.github_link}
              demo_link={project.demo_link}
              figma_link={project.figma_link}
              category={project.category}
              stack={project.stack}
            />
          </header>
          <Description description={project.description} />
        </div>
      </Container>
    </div>
  );
}
