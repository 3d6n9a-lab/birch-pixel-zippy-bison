import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Glass({
  className,
  children,
  glow,
}: {
  className?: string;
  children: ReactNode;
  glow?: "cyan" | "mag" | "lime";
}) {
  return (
    <div className={cn("glass-panel", glow && `glow-${glow}`, className)}>{children}</div>
  );
}

export function Metric({ label, value, tone }: { label: string; value: string; tone?: "cyan" | "lime" | "mag" }) {
  const color =
    tone === "lime" ? "text-lime" : tone === "mag" ? "text-mag" : tone === "cyan" ? "text-cyan" : "text-fg";
  return (
    <div className="flex items-center justify-between border-b border-border/40 py-1.5 text-xs">
      <span className="text-muted">{label}</span>
      <span className={cn("tabular-nums font-medium", color)}>{value}</span>
    </div>
  );
}

export function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl border px-3 py-1 text-xs transition-colors",
        active
          ? "border-cyan bg-cyan/15 text-cyan"
          : "border-border text-muted hover:border-cyan/60 hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
