export function MarqueeLine({ items }: { items: string[] }) {
  const text = [...items, ...items].join(" / ");

  return (
    <div className="overflow-hidden border-y border-ink bg-accent py-3 text-paper">
      <p className="marquee-track whitespace-nowrap text-sm font-black uppercase tracking-[0.18em]">
        {text} / {text}
      </p>
    </div>
  );
}
