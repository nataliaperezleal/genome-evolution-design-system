import type { HTMLAttributes } from "react";

export type BackdropTone = "black" | "white";

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  tone?: BackdropTone;
}

export function Backdrop({ open = true, tone = "black", className, ...props }: BackdropProps) {
  if (!open) return null;
  const classes = ["ge-backdrop", `ge-backdrop--${tone}`, className].filter(Boolean).join(" ");
  return <div className={classes} {...props} />;
}

