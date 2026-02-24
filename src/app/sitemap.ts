import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date().toISOString();
  const projectsResponse = await fetch(`${process.env.BASE_URL}/api/projects`, {
    next: { revalidate: 3600 },
  });

  const projects = projectsResponse.ok
    ? ((await projectsResponse.json()) as { id: string; created_at?: string }[])
    : [];

  const projectPages = projects
    .filter(({ id }) => Boolean(id))
    .map(({ id, created_at }) => ({
      url: `${process.env.BASE_URL}/projects/${id}`,
      lastModified: created_at ?? lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectPages,
  ];
}
