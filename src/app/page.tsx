import Link from "next/link";
import { EditorialGrid } from "@/components/editorial/EditorialGrid";
import { EditorialHero } from "@/components/editorial/EditorialHero";
import { ManifestoBlock } from "@/components/editorial/ManifestoBlock";
import { MarqueeLine } from "@/components/editorial/MarqueeLine";
import { PressCard } from "@/components/editorial/PressCard";
import { ProjectIndex } from "@/components/editorial/ProjectIndex";
import { PullQuote } from "@/components/editorial/PullQuote";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cv } from "@/data/cv";
import { featuredProjects } from "@/data/projects";
import { site } from "@/data/site";
import { getPublishedBulletinEntries, getPublishedPressItems } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Manifesto",
  description: site.shortDescription,
  path: "/",
});

export default function HomePage() {
  const bulletin = getPublishedBulletinEntries()[0];
  const press = getPublishedPressItems()[0];

  return (
    <>
      <EditorialHero
        aside={
          <div className="flex flex-wrap gap-3">
            <Button href="/projects">Projects</Button>
            <Button href="/contact" variant="outline">
              Contact
            </Button>
          </div>
        }
        deck="CEO, founder, developer, product builder. Tecnica, prodotto e comunicazione visiva nello stesso documento, perche separarli spesso peggiora tutto."
        kicker="Personal manifesto / press object"
        meta="Software engineering / product design / cloud architecture / technical identity"
        title={
          <>
            Matteo
            <br />
            Minutti
          </>
        }
      />

      <MarqueeLine
        items={[
          "software engineering",
          "product design",
          "B2B platforms",
          "automation",
          "security",
          "technical branding",
        ]}
      />

      <ManifestoBlock
        statements={[
          "I build software, products and systems.",
          "The interface is part of the architecture.",
          "A good product has less theatre and more method.",
        ]}
      />

      <EditorialGrid
        index="02"
        label="What I do"
        items={[
          {
            title: "Systems",
            text: "Architetture software, cloud, API, dati, permessi, automazioni e strumenti operativi costruiti per durare oltre la prima demo.",
          },
          {
            title: "Products",
            text: "Web app, piattaforme B2B e prodotti custom con attenzione a flusso, interfaccia, manutenzione e responsabilita tecnica.",
          },
          {
            title: "Identity",
            text: "Branding tecnico, linguaggio di prodotto, materiali editoriali e comunicazione visiva per dare forma leggibile a oggetti complessi.",
          },
          {
            title: "Method",
            text: "Meno decorazione, piu struttura: capire il processo, disegnare il sistema, scrivere il software, raccontarlo senza fumo.",
          },
        ]}
      />

      <section className="editorial-shell py-12 md:py-20">
        <SectionLabel index="03" label="Selected projects" />
        <ProjectIndex projects={featuredProjects} />
        <div className="mt-8">
          <Button href="/projects" variant="outline">
            Open full archive
          </Button>
        </div>
      </section>

      <section className="border-y border-ink bg-wash">
        <div className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <PullQuote
              caption="Operating note"
              quote="Il punto non è sembrare innovativi. Il punto è costruire oggetti digitali che reggono quando finiscono le slide."
            />
          </div>
          <div className="md:col-span-5">
            <SectionLabel index="04" label="CV extract" />
            <p className="serif mb-6 text-2xl leading-tight">{cv.profile}</p>
            <ul className="grid gap-2">
              {cv.roles.map((role) => (
                <li className="border-t border-ink py-3 font-black uppercase" key={role}>
                  {role}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button href="/cv">Read CV</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-6">
          <SectionLabel index="05" label="Bulletin" />
          {bulletin ? (
            <Link className="group block border-t border-ink py-6" href={`/bulletin/${bulletin.slug}`}>
              <p className="mono mb-4 text-xs uppercase tracking-[0.08em] text-muted">
                {formatDate(bulletin.date)} / {bulletin.category}
              </p>
              <h2 className="hover-stroke-title text-4xl font-black uppercase leading-none">
                {bulletin.title}
              </h2>
              <p className="mt-4 text-pretty text-muted">{bulletin.excerpt}</p>
            </Link>
          ) : null}
        </div>
        <div className="md:col-span-6">
          <SectionLabel index="06" label="Press release" />
          {press ? <PressCard item={press} /> : null}
        </div>
      </section>

      <section className="editorial-shell border-t border-ink py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 className="headline closing-headline md:col-span-8">
            Build the thing.
            <br />
            Then make it human.
          </h2>
          <div className="md:col-span-4">
            <p className="serif mb-6 text-2xl leading-tight">
              Progetti, sistemi, identita tecniche, piattaforme. Se serve un oggetto digitale serio,
              la conversazione puo iniziare qui.
            </p>
            <Button href="/contact">Contact</Button>
          </div>
        </div>
      </section>
    </>
  );
}
