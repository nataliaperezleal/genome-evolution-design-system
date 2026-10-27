import type { HTMLAttributes, ReactNode } from "react";

export type BadgeTone = "default" | "neutral" | "primary" | "info" | "information" | "success" | "warning" | "danger" | "error" | "inverse" | "evergreen" | "indigo";
export type BadgeVariant = "filled" | "line" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  icon?: ReactNode;
}

export function Badge({ tone = "default", variant = "line", icon, className, children, ...props }: BadgeProps) {
  const resolvedTone = tone === "neutral" || tone === "primary" ? "default" : tone === "information" ? "info" : tone === "error" ? "danger" : tone;
  const resolvedVariant = variant === "outline" ? "line" : variant;
  const classes = ["ge-badge", `ge-badge--${resolvedTone}`, `ge-badge--${resolvedVariant}`, className].filter(Boolean).join(" ");

  return (
    <span className={classes} {...props}>
      {icon ? <span className="ge-badge__icon">{icon}</span> : null}
      <span className="ge-badge__label">{children}</span>
    </span>
  );
}
