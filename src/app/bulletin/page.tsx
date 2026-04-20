import Link from "next/link";
import { EditorialHero } from "@/components/editorial/EditorialHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getPublishedBulletinEntries } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Bulletin",
  description:
    "Il mio bulletin personale: note brevi, aggiornamenti, appunti tecnici e mini-articoli.",
  path: "/bulletin",
});

export default function BulletinPage() {
  const entries = getPublishedBulletinEntries();

  return (
    <>
      <EditorialHero
        deck="Note, pensieri, aggiornamenti e piccole dichiarazioni operative. Un journal senza la liturgia del blog settimanale."
        kicker="Bulletin / Journal"
        meta="Notes / updates / mini articles"
        title={
          <>
            Bulletin
            <br />
            notes
          </>
        }
      />

      <section className="editorial-shell py-12 md:py-20">
        <SectionLabel index="01" label="Published notes" />
        <div className="grid border-t border-ink">
          {entries.map((entry, index) => (
            <Link
              className="group grid gap-4 border-b border-ink py-6 transition-colors hover:bg-ink hover:text-paper md:grid-cols-12"
              href={`/bulletin/${entry.slug}`}
              key={entry.slug}
            >
              <p className="mono text-xs uppercase tracking-[0.08em] text-accent md:col-span-2">
                0{index + 1} / {formatDate(entry.date)}
              </p>
              <div className="md:col-span-7">
                <h2 className="hover-stroke-title text-3xl font-black uppercase leading-none md:text-5xl">
                  {entry.title}
                </h2>
                <p className="mt-4 max-w-3xl text-pretty text-muted group-hover:text-paper/70">
                  {entry.excerpt}
                </p>
              </div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-muted group-hover:text-paper/60 md:col-span-3">
                {entry.category}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
