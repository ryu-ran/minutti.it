import { SectionLabel } from "@/components/ui/SectionLabel";

export function CVSection({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: string[];
}) {
  return (
    <section className="py-10">
      <SectionLabel index={index} label={title} />
      <ul className="grid gap-2 md:grid-cols-2">
        {items.map((item) => (
          <li
            className="border-b border-ink py-3 text-xl font-black uppercase leading-tight"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
