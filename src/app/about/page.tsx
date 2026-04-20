import { EditorialGrid } from "@/components/editorial/EditorialGrid";
import { EditorialHero } from "@/components/editorial/EditorialHero";
import { PullQuote } from "@/components/editorial/PullQuote";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "La mia bio editoriale: impresa, software, prodotto, design tecnico e sistemi digitali.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <EditorialHero
        deck="Una bio, ma senza l'effetto medaglia sul petto. Il lavoro sta nel costruire oggetti digitali leggibili, utili e abbastanza solidi da sopportare la realta."
        kicker="About / Bio"
        meta="Founder / CEO / developer / product builder"
        title={
          <>
            Bio
            <br />
            operative
          </>
        }
      />

      <section className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <SectionLabel index="01" label="Position" />
          <p className="serif text-pretty text-3xl leading-tight">
            Lavoro nel punto in cui sviluppo software, prodotto, impresa e direzione visiva smettono
            di fingersi reparti separati.
          </p>
        </div>
        <div className="grid gap-6 text-pretty text-lg leading-relaxed text-muted md:col-span-8 md:grid-cols-2">
          <p>
            Costruisco software, piattaforme digitali, sistemi custom e identita tecniche. Ho
            pensato questo sito come archivio personale: un luogo dove raccontare i progetti senza
            gonfiarli e dove lasciare le idee abbastanza precise da non diventare arredamento.
          </p>
          <p>
            Il metodo privilegia architettura, interfaccia, testo e responsabilita operativa. Una
            buona piattaforma non vive solo nel codice; vive anche nelle decisioni che la rendono
            comprensibile, mantenibile e vendibile senza trasformarla in teatro.
          </p>
        </div>
      </section>

      <section className="border-y border-ink bg-ink text-paper">
        <div className="editorial-shell py-12 md:py-20">
          <PullQuote
            caption="Design technical, not decorative"
            quote="Il design tecnico non aggiunge una pelle al prodotto. Decide come il prodotto pensa."
          />
        </div>
      </section>

      <EditorialGrid
        index="02"
        label="How I think"
        items={[
          {
            title: "Product",
            text: "Un prodotto deve chiarire cosa promette, cosa evita e dove crea valore reale. Il resto è arredamento.",
          },
          {
            title: "Software",
            text: "Il codice non è solo implementazione. È una serie di decisioni organizzative rese eseguibili.",
          },
          {
            title: "Business",
            text: "Impresa significa costruire sistemi che possono reggere persone, processi, rischi e ambizione.",
          },
          {
            title: "Communication",
            text: "La comunicazione visiva non deve abbellire la complessita. Deve renderla leggibile senza banalizzarla.",
          },
        ]}
      />
    </>
  );
}
