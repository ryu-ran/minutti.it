export function Timeline({
  items,
}: {
  items: Array<{ period: string; title: string; text: string }>;
}) {
  return (
    <ol className="border-t border-ink">
      {items.map((item) => (
        <li className="grid gap-4 border-b border-ink py-6 md:grid-cols-12" key={item.title}>
          <p className="mono text-xs uppercase tracking-[0.08em] text-muted md:col-span-2">
            {item.period}
          </p>
          <h3 className="text-2xl font-black uppercase leading-none md:col-span-4">
            {item.title}
          </h3>
          <p className="text-pretty text-muted md:col-span-6">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
