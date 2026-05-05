import type { HTMLAttributes, ReactNode } from "react";

export type InlineAlertTone = "info" | "success" | "warning" | "danger";

export interface InlineAlertProps extends HTMLAttributes<HTMLDivElement> {
  tone?: InlineAlertTone;
  icon?: ReactNode;
}

export function InlineAlert({ tone = "info", icon, className, children, ...props }: InlineAlertProps) {
  const classes = ["ge-inline-alert", `ge-inline-alert--${tone}`, className].filter(Boolean).join(" ");
  return (
    <div className={classes} role="status" {...props}>
      {icon ? <span className="ge-inline-alert__icon">{icon}</span> : null}
      <div className="ge-inline-alert__content">{children}</div>
    </div>
  );
}

