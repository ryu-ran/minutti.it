import { notFound } from "next/navigation";
import { EditorialHero } from "@/components/editorial/EditorialHero";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { bulletinEntries } from "@/data/bulletin";
import { getBulletinEntryBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return bulletinEntries
    .filter((entry) => entry.status === "published")
    .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const entry = getBulletinEntryBySlug(slug);

  if (!entry) {
    return createMetadata({ title: "Bulletin not found", path: `/bulletin/${slug}`, noIndex: true });
  }

  return createMetadata({
    title: entry.title,
    description: entry.excerpt,
    path: `/bulletin/${entry.slug}`,
  });
}

export default async function BulletinDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getBulletinEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <EditorialHero
        deck={entry.excerpt}
        kicker={`${entry.category} / ${formatDate(entry.date)}`}
        meta="Bulletin entry"
        title={entry.title}
      />

      <article className="editorial-shell grid gap-10 py-12 md:grid-cols-12 md:py-20">
        <aside className="md:col-span-3">
          <SectionLabel index="01" label="Filed under" />
          <p className="mono text-xs uppercase tracking-[0.08em] text-muted">
            {entry.category}
            <br />
            {formatDate(entry.date)}
          </p>
        </aside>
        <div className="serif grid gap-6 text-pretty text-2xl leading-relaxed md:col-span-7">
          {entry.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="md:col-span-2">
          <Button href="/bulletin" variant="outline">
            Back
          </Button>
        </div>
      </article>
    </>
  );
}
