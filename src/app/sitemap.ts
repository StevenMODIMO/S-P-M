import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date().toISOString();
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
  ];
}
