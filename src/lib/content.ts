import { bulletinEntries } from "@/data/bulletin";
import { pressItems } from "@/data/press";
import { projects } from "@/data/projects";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPublishedBulletinEntries() {
  return bulletinEntries
    .filter((entry) => entry.status === "published")
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getBulletinEntryBySlug(slug: string) {
  return bulletinEntries.find((entry) => entry.slug === slug && entry.status === "published");
}

export function getPublishedPressItems() {
  return pressItems
    .filter((item) => item.status === "published")
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}
