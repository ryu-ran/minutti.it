import { notFound } from "next/navigation";
import { EditorialHero } from "@/components/editorial/EditorialHero";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({ title: "Project not found", path: `/projects/${slug}`, noIndex: true });
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectLinks = project.links?.filter((link) => link.href !== `/projects/${project.slug}`) ?? [];

  return (
    <>
      <EditorialHero
        deck={project.summary}
        kicker={`${project.category} / ${project.status}`}
        meta={`${project.eyebrow} / ${project.year}`}
        title={project.title}
      />

      <section className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <img
            alt={project.imageAlt}
            className="aspect-[4/3] w-full border border-ink object-cover"
            src={project.image}
          />
        </div>
        <div className="md:col-span-7">
          <SectionLabel index="01" label="Summary" />
          <p className="serif text-pretty text-3xl leading-tight">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
          {projectLinks.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {projectLinks.map((link) => (
                <Button href={link.href} key={link.href} variant="outline">
                  {link.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-ink bg-wash">
        <div className="editorial-shell grid gap-8 py-12 md:grid-cols-3 md:py-20">
          <article>
            <SectionLabel index="02" label="Challenge" />
            <p className="text-pretty text-lg leading-relaxed">{project.challenge}</p>
          </article>
          <article>
            <SectionLabel index="03" label="Approach" />
            <p className="text-pretty text-lg leading-relaxed">{project.approach}</p>
          </article>
          <article>
            <SectionLabel index="04" label="Output" />
            <p className="text-pretty text-lg leading-relaxed">{project.output}</p>
          </article>
        </div>
      </section>

      <section className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <SectionLabel index="05" label="Gallery" />
          <h2 className="text-5xl font-black uppercase leading-none">Editorial plates</h2>
        </div>
        <div className="grid gap-5 md:col-span-8 md:grid-cols-2">
          {[project.image, "/images/project-systems.svg"].map((image, index) => (
            <img
              alt={`${project.title} visual plate ${index + 1}`}
              className="aspect-[4/3] w-full border border-ink object-cover"
              key={image}
              src={image}
            />
          ))}
        </div>
      </section>

      <section className="editorial-shell border-t border-ink py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <SectionLabel index="06" label="Notes" />
            {project.notes?.length ? (
              <div className="grid gap-4">
                {project.notes.map((note) => (
                  <p
                    className="border-t border-ink pt-4 text-pretty text-lg leading-relaxed"
                    key={note}
                  >
                    {note}
                  </p>
                ))}
              </div>
            ) : (
              <p className="serif text-pretty text-3xl leading-tight">
                Questa pagina e pronta per case study piu estesi: metriche, immagini reali, dettagli
                tecnici e link pubblici vanno aggiunti solo quando verificati e pubblicabili.
              </p>
            )}
          </div>
          <div className="md:col-span-4">
            <Button href="/projects" variant="outline">
              Back to projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
