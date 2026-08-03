import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/fleet", "/services", "/tours", "/about", "/contact"];
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.url}/${locale}${route}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en${route}`,
          "zh-CN": `${siteConfig.url}/zh${route}`,
          id: `${siteConfig.url}/id${route}`,
          ms: `${siteConfig.url}/ms${route}`,
          th: `${siteConfig.url}/th${route}`,
        },
      },
    })),
  );
}
