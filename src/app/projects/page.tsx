import { EditorialHero } from "@/components/editorial/EditorialHero";
import { ProjectIndex } from "@/components/editorial/ProjectIndex";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Il mio archivio progetti: SILPH Technologies, SILPH Control, Mangiafuoco, ALTAIR, Qonecto e FaiCONTO.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <EditorialHero
        deck="Non una vetrina con miniature sorridenti. Un archivio di sistemi, prodotti, esperimenti e materiali in lavorazione."
        kicker="Projects / Archive"
        meta="Companies / products / platforms / experiments"
        title={
          <>
            Project
            <br />
            archive
          </>
        }
      />

      <section className="editorial-shell py-12 md:py-20">
        <SectionLabel index="01" label="Index" />
        <ProjectIndex projects={projects} />
      </section>
    </>
  );
}
