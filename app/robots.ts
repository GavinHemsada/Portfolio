import type { MetadataRoute } from "next";

const siteUrl = "https://gavinhemsandaportfolio.netlify.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
