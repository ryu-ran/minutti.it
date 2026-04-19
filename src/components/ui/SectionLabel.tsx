export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-muted">
      <span className="text-accent">{index}</span>
      <span>{label}</span>
    </div>
  );
}
