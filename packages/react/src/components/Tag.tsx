import type { ButtonHTMLAttributes, ReactNode } from "react";

export type TagTone = "neutral" | "evergreen" | "indigo";

export interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: TagTone;
  icon?: ReactNode;
}

export function Tag({ tone = "neutral", icon, className, children, ...props }: TagProps) {
  const classes = ["ge-tag", `ge-tag--${tone}`, className].filter(Boolean).join(" ");
  return (
    <button type="button" className={classes} {...props}>
      {icon ? <span className="ge-tag__icon">{icon}</span> : null}
      <span className="ge-tag__label">{children}</span>
    </button>
  );
}

