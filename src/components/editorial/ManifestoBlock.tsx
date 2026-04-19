import { SectionLabel } from "@/components/ui/SectionLabel";

export function ManifestoBlock({
  label = "Manifesto",
  statements,
}: {
  label?: string;
  statements: string[];
}) {
  return (
    <section className="editorial-shell py-12 md:py-20">
      <SectionLabel index="01" label={label} />
      <div className="grid gap-0 border-y border-ink md:grid-cols-3 md:divide-x md:divide-ink">
        {statements.map((statement, index) => (
          <p
            className="min-h-56 border-b border-ink p-5 text-3xl font-black uppercase leading-none md:border-b-0 md:p-7 md:text-4xl"
            key={statement}
          >
            <span className="mb-8 block text-xs text-accent">0{index + 1}</span>
            {statement}
          </p>
        ))}
      </div>
    </section>
  );
}
