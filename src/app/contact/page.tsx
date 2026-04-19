import { EditorialHero } from "@/components/editorial/EditorialHero";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contatti di Matteo Minutti per progetti software, prodotti digitali, sistemi custom e richieste press.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <EditorialHero
        deck="Se il progetto ha bisogno di prodotto, software, architettura e linguaggio visivo nello stesso tavolo, si puo iniziare da qui."
        kicker="Contact / Work with me"
        meta="Projects / systems / press"
        title={
          <>
            Contact
            <br />
            desk
          </>
        }
      />

      <section className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <SectionLabel index="01" label="Direct line" />
          <h2 className="text-5xl font-black uppercase leading-none">Mail first. Meeting later.</h2>
          <p className="mt-5 text-pretty text-muted">
            Sostituire il placeholder con l'indirizzo pubblico corretto prima del deploy.
          </p>
          <div className="mt-7">
            <Button href={site.contactEmailHref}>{site.contactEmailLabel}</Button>
          </div>
        </div>
        <div className="md:col-span-7">
          <SectionLabel index="02" label="Frontend form" />
          <form
            action={site.contactEmailHref}
            className="grid gap-5"
            encType="text/plain"
            method="post"
          >
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
              Name
              <input
                className="min-h-12 border border-ink bg-paper px-4 text-base font-normal normal-case tracking-normal"
                name="name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
              Email
              <input
                className="min-h-12 border border-ink bg-paper px-4 text-base font-normal normal-case tracking-normal"
                name="email"
                required
                type="email"
              />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em]">
              Message
              <textarea
                className="min-h-40 border border-ink bg-paper p-4 text-base font-normal normal-case tracking-normal"
                name="message"
                required
              />
            </label>
            <button
              className="min-h-11 border border-ink bg-ink px-5 py-2 text-sm font-black uppercase tracking-[0.08em] text-paper transition-colors hover:border-accent hover:bg-accent"
              type="submit"
            >
              Send via email client
            </button>
            <p className="text-sm text-muted">
              Il form usa il client email locale finche non viene collegato un endpoint. Nessun dato
              viene salvato dal sito statico.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
