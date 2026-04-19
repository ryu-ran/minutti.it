import { CVSection } from "@/components/editorial/CVSection";
import { EditorialHero } from "@/components/editorial/EditorialHero";
import { Timeline } from "@/components/editorial/Timeline";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cv } from "@/data/cv";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CV",
  description:
    "CV editoriale di Matteo Minutti: profilo, competenze, stack, ruoli e aree tecniche.",
  path: "/cv",
});

export default function CVPage() {
  return (
    <>
      <EditorialHero
        deck="Curriculum, ma in forma di documento editoriale. Il formato Europass puo riposare tranquillo altrove."
        kicker="CV / Resume"
        meta="Profile / competencies / stack / roles"
        title={
          <>
            Curriculum
            <br />
            file
          </>
        }
      />

      <section className="editorial-shell py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel index="01" label="Profile" />
            <p className="serif text-pretty text-3xl leading-tight">{cv.profile}</p>
          </div>
          <div className="md:col-span-7">
            <CVSection index="02" items={cv.competencies} title="Competencies" />
            <CVSection index="03" items={cv.stack} title="Stack and materials" />
          </div>
        </div>
      </section>

      <section className="border-y border-ink bg-wash">
        <div className="editorial-shell py-12 md:py-20">
          <SectionLabel index="04" label="Experience" />
          <Timeline
            items={cv.experience.map((item) => ({
              period: item.period,
              title: `${item.role} / ${item.organization}`,
              text: item.description,
            }))}
          />
        </div>
      </section>

      <section className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <SectionLabel index="05" label="Documents" />
          <h2 className="text-5xl font-black uppercase leading-none">Download</h2>
        </div>
        <div className="grid gap-4 md:col-span-7">
          {cv.documents.map((document) => (
            <div className="border-t border-ink py-5" key={document.href}>
              <p className="mb-2 text-2xl font-black uppercase">{document.label}</p>
              <p className="mb-4 text-muted">{document.note}</p>
              <Button
                aria-disabled={!document.available}
                className={!document.available ? "pointer-events-none opacity-50" : undefined}
                href={document.href}
                variant="outline"
              >
                {document.available ? "Download file" : "File not available yet"}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
