import Link from "next/link";
import { site } from "@/data/site";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navigation } from "@/components/layout/Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper/95 backdrop-blur">
      <div className="editorial-shell flex min-h-16 items-center justify-between gap-6">
        <Link
          aria-label={`${site.name} home`}
          className="text-lg font-black uppercase leading-none tracking-[0.03em] md:text-2xl"
          href="/"
        >
          Matteo Minutti
        </Link>
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
}
