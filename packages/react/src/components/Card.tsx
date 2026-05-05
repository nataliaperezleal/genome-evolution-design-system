import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant = "base" | "elevated";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  footer?: ReactNode;
  variant?: CardVariant;
}

export function Card({ title, footer, variant = "base", className, children, ...props }: CardProps) {
  const classes = ["ge-card", `ge-card--${variant}`, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {title ? <div className="ge-card__title">{title}</div> : null}
      <div className="ge-card__body">{children}</div>
      {footer ? <div className="ge-card__footer">{footer}</div> : null}
    </div>
  );
}
