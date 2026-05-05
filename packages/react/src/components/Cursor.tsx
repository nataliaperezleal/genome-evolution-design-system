import type { HTMLAttributes } from "react";

export type CursorTone = "default" | "evergreen" | "indigo";
export type CursorVariant = "pointer" | "text" | "grab";

export interface CursorProps extends HTMLAttributes<HTMLDivElement> {
  tone?: CursorTone;
  variant?: CursorVariant;
  label?: string;
}

export function Cursor({ tone = "default", variant = "pointer", label, className, ...props }: CursorProps) {
  const classes = ["ge-cursor", `ge-cursor--${tone}`, `ge-cursor--${variant}`, className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...props}>
      <span className="ge-cursor__glyph" aria-hidden="true" />
      {label ? <span className="ge-cursor__label">{label}</span> : null}
    </div>
  );
}

