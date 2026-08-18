import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ScreenHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6 flex items-start justify-between gap-3">
      <div>
        <h1 className="font-display text-[1.75rem] leading-tight font-semibold text-foreground">
          {title}
        </h1>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      {action}
    </header>
  );
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/70 bg-card p-5 shadow-[0_8px_24px_-18px_oklch(0.4_0.13_18/0.7)]",
        className,
      )}
      {...props}
    />
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "soft" | "ghost" | "outline";
  size?: "md" | "lg" | "sm";
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
        size === "lg" && "min-h-13 px-6 text-base",
        size === "md" && "min-h-11 px-5 text-sm",
        size === "sm" && "min-h-9 px-4 text-xs",
        variant === "primary" && "bg-primary text-primary-foreground shadow-sm",
        variant === "soft" && "bg-accent text-accent-foreground",
        variant === "outline" && "border border-border bg-transparent text-foreground",
        variant === "ghost" && "text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function EmptyState({
  emoji = "🤍",
  title,
  body,
  action,
}: {
  emoji?: string;
  title: string;
  body?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-dashed border-border bg-secondary/40 px-6 py-12 text-center">
      <span className="text-3xl">{emoji}</span>
      <p className="mt-3 font-display text-lg text-foreground">{title}</p>
      {body ? <p className="mt-1 text-sm text-muted-foreground">{body}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      {children}
      {hint ? <span className="mt-1 block text-xs text-muted-foreground">{hint}</span> : null}
    </label>
  );
}

export const inputClass =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-base text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30";
