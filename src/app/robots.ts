import type { MetadataRoute } from "next";

const BASE_URL = "https://ybdizayn.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/wp-admin/", "/wp-content/", "/wp-includes/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/wp-admin/", "/wp-content/", "/wp-includes/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
