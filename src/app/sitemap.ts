import type { MetadataRoute } from "next";
import { getArticleCover } from "@/lib/article-covers";
import { getAllArticles } from "@/lib/articles";

const BASE_URL = "https://ybdizayn.com";
const STATIC_LAST_MODIFIED = "2026-03-23";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/makaleler", "/sss", "/hakkimizda", "/projeler", "/sertifikalar", "/iletisim"];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map((article) => {
    const cover = getArticleCover(article.slug);
    return {
      url: `${BASE_URL}/${article.slug}`,
      lastModified: article.publishDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(cover && {
        images: [`${BASE_URL}${cover.src}`],
      }),
    };
  });

  return [...staticEntries, ...articleEntries];
}
