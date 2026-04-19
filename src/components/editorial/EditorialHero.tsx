import type { ReactNode } from "react";

export function EditorialHero({
  kicker,
  title,
  deck,
  aside,
  meta,
}: {
  kicker: string;
  title: ReactNode;
  deck: string;
  aside?: ReactNode;
  meta?: string;
}) {
  return (
    <section className="border-b border-ink">
      <div className="editorial-shell grid gap-8 py-10 md:grid-cols-12 md:py-16">
        <div className="min-w-0 md:col-span-9">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-accent">
            {kicker}
          </p>
          <h1 className="headline page-headline">{title}</h1>
        </div>
        <div className="min-w-0 flex flex-col justify-between gap-8 md:col-span-3">
          {meta ? (
            <p className="mono border-l border-ink pl-4 text-xs uppercase leading-relaxed tracking-[0.08em]">
              {meta}
            </p>
          ) : null}
          <p className="serif text-pretty text-2xl leading-tight md:text-3xl">{deck}</p>
          {aside}
        </div>
      </div>
    </section>
  );
}
