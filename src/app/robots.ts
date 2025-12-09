import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/projects"],
        disallow: ["/dashboard"],
      },
    ],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  };
}
