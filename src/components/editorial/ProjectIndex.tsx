import Link from "next/link";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <div className="grid border-t border-ink">
      {projects.map((project, index) => (
        <Link
          className="project-card group grid gap-5 border-b border-ink py-7 transition-colors hover:bg-ink hover:text-paper md:grid-cols-12"
          href={`/projects/${project.slug}`}
          key={project.slug}
        >
          <div className="md:col-span-1">
            <span className="text-xs font-black text-accent">0{index + 1}</span>
          </div>
          <div className="md:col-span-3">
            <img
              alt={project.imageAlt}
              className="aspect-[4/3] w-full border border-ink object-cover group-hover:border-paper"
              src={project.image}
            />
          </div>
          <div className="md:col-span-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-muted group-hover:text-paper/60">
              {project.eyebrow} / {project.year}
            </p>
            <h2 className="project-card-title text-4xl font-black uppercase leading-none md:text-6xl">
              {project.title}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-muted group-hover:text-paper/75">
              {project.summary}
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2 md:col-span-3">
            <Badge className="group-hover:border-paper">{project.status}</Badge>
            {project.tags.map((tag) => (
              <Badge className="group-hover:border-paper" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
