import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Navigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
      {navigation.map((item) => (
        <Link
          className="navigation-link px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition-colors hover:bg-ink"
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
