import { EditorialHero } from "@/components/editorial/EditorialHero";
import { PressCard } from "@/components/editorial/PressCard";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getPublishedPressItems } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Press Release",
  description:
    "La mia press room personale: comunicati, media note, contatti press e materiali scaricabili.",
  path: "/press",
});

export default function PressPage() {
  const items = getPublishedPressItems();

  return (
    <>
      <EditorialHero
        deck="Una press room personale, non una pagina corporate con il sorriso plastificato. Qui entrano solo comunicati, note e materiali verificabili."
        kicker="Press release / Media room"
        meta="Announcements / media kit / press contact"
        title={
          <>
            Press
            <br />
            release
          </>
        }
      />

      <section className="editorial-shell py-12 md:py-20">
        <SectionLabel index="01" label="Archive" />
        {items.map((item) => (
          <PressCard item={item} key={item.slug} />
        ))}
      </section>

      <section className="border-y border-ink bg-wash">
        <div className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <SectionLabel index="02" label="Media kit" />
            <h2 className="text-5xl font-black uppercase leading-none md:text-7xl">
              Assets, files, notes.
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-lg text-muted">
              Aggiungere media kit, immagini autorizzate, bio breve, logo e documenti solo quando
              disponibili. Il placeholder resta intenzionale.
            </p>
          </div>
          <div className="md:col-span-5">
            <Button aria-disabled="true" className="pointer-events-none opacity-50" href="/documents/media-kit-placeholder.pdf">
              Media kit not available yet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
