import Link from "next/link";
import type { PressItem } from "@/data/press";
import { formatDate } from "@/lib/utils";

export function PressCard({ item }: { item: PressItem }) {
  return (
    <article className="grid gap-4 border-t border-ink py-6 md:grid-cols-12">
      <div className="md:col-span-2">
        <p className="mono text-xs uppercase tracking-[0.08em] text-muted">
          {formatDate(item.date)}
        </p>
      </div>
      <div className="md:col-span-7">
        <h2 className="text-3xl font-black uppercase leading-none md:text-5xl">{item.title}</h2>
        <p className="mt-4 max-w-3xl text-pretty text-muted">{item.abstract}</p>
      </div>
      <div className="md:col-span-3">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-accent">
          {item.type}
        </p>
        <Link className="font-black uppercase underline" href="/press">
          Press room
        </Link>
      </div>
    </article>
  );
}
