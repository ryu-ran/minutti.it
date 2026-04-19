"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        className="navigation-link border border-ink px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition-colors hover:bg-ink"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full z-50 border-b border-ink bg-paper"
          id="mobile-navigation"
        >
          <div className="editorial-shell grid divide-y divide-ink">
            {navigation.map((item) => (
              <Link
                className="navigation-link py-5 text-3xl font-black uppercase leading-none hover:bg-ink"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </div>
  );
}
