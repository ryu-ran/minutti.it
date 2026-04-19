import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex border border-ink px-2 py-1 text-[11px] font-black uppercase leading-none tracking-[0.12em]",
        className,
      )}
    >
      {children}
    </span>
  );
}
