import { SectionLabel } from "@/components/ui/SectionLabel";

export function EditorialGrid({
  index,
  label,
  items,
}: {
  index: string;
  label: string;
  items: Array<{ title: string; text: string }>;
}) {
  return (
    <section className="editorial-shell py-12 md:py-20">
      <SectionLabel index={index} label={label} />
      <div className="grid border-t border-ink md:grid-cols-4">
        {items.map((item) => (
          <article className="border-b border-ink py-6 md:border-r md:px-5" key={item.title}>
            <h2 className="mb-6 text-2xl font-black uppercase leading-none">{item.title}</h2>
            <p className="text-pretty text-base leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
