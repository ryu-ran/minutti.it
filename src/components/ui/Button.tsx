import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  solid: "button-primary border-ink bg-ink hover:bg-accent hover:border-accent",
  outline: "button-outline border-ink bg-transparent hover:bg-ink",
  ghost: "border-transparent bg-transparent text-ink hover:border-ink hover:bg-wash",
};

export function Button({
  href,
  children,
  className,
  variant = "solid",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center border px-5 py-2 text-sm font-black uppercase tracking-[0.08em] transition-colors",
    variants[variant],
    className,
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
