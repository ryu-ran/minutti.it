import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn("border border-ink bg-paper p-5 md:p-7", className)}>
      {children}
    </article>
  );
}
