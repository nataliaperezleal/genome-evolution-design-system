import type { HTMLAttributes, ReactNode } from "react";

export type BadgeTone = "neutral" | "primary" | "info" | "success" | "warning" | "danger";
export type BadgeVariant = "filled" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  icon?: ReactNode;
}

export function Badge({ tone = "neutral", variant = "filled", icon, className, children, ...props }: BadgeProps) {
  const classes = ["ge-badge", `ge-badge--${tone}`, `ge-badge--${variant}`, className].filter(Boolean).join(" ");

  return (
    <span className={classes} {...props}>
      {icon ? <span className="ge-badge__icon">{icon}</span> : null}
      <span className="ge-badge__label">{children}</span>
    </span>
  );
}

