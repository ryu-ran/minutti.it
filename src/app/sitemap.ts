import type { MetadataRoute } from "next";
import { bulletinEntries } from "@/data/bulletin";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const staticRoutes = [
  "/",
  "/about",
  "/cv",
  "/projects",
  "/bulletin",
  "/press",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const bulletinRoutes = bulletinEntries
    .filter((entry) => entry.status === "published")
    .map((entry) => `/bulletin/${entry.slug}`);

  return [...staticRoutes, ...projectRoutes, ...bulletinRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
