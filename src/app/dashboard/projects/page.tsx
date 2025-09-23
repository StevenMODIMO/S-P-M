import { type Metadata } from "next";
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
};

export default async function DashboardProjects() {
  const response = await fetch(`${process.env.BASE_URL}/api/projects`);
  const projects: ProjectsListingTypes[] = await response.json();
  return (
    <div className="text-[#393a1f] flex flex-col gap-4">
      <header className="flex items-center gap-2">
        <h1 className="font-semibold text-xl">Project Listings</h1>
        <Link className="bg-[#e7ee1a] p-1 rounded" href="/dashboard/new">
          Add project
        </Link>
      </header>
      <section className="bg-[#fafafa] p-2 w-full rounded shadow grid grid-cols-3 gap-4">
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
    </div>
  );
}
