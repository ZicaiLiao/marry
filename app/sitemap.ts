import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-data";

const pages = ["", "stories", "inspiration", "services", "tools", "about"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteConfig.siteUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: now,
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8
    }))
  );
}
