import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTone = "evergreen" | "indigo" | "danger" | "information" | "success" | "warning" | "neutral";
type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md";
type ButtonCorner = "default" | "rounded";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: ButtonTone;
  variant?: ButtonVariant;
  size?: ButtonSize;
  corner?: ButtonCorner;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Button({
  tone = "evergreen",
  variant = "primary",
  size = "md",
  corner = "default",
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "ge-button",
    `ge-button--${variant}`,
    `ge-button--${tone}`,
    `ge-button--${size}`,
    `ge-button--${corner}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {leadingIcon ? <span className="ge-button__icon">{leadingIcon}</span> : null}
      <span className="ge-button__label">{children}</span>
      {trailingIcon ? <span className="ge-button__icon">{trailingIcon}</span> : null}
    </button>
  );
}
