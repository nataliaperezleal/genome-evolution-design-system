import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonTone = "default" | "evergreen" | "indigo" | "inverse" | "neutral";
type IconButtonVariant = "filled" | "outline";
type IconButtonSize = "sm" | "md" | "lg";
type IconButtonCorner = "square" | "rounded";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  tone?: IconButtonTone;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  corner?: IconButtonCorner;
}

export function IconButton({
  icon,
  label,
  tone = "evergreen",
  variant = "filled",
  size = "lg",
  corner = "square",
  className,
  ...props
}: IconButtonProps) {
  const classes = [
    "ge-icon-button",
    `ge-icon-button--${variant}`,
    `ge-icon-button--${tone}`,
    `ge-icon-button--${size}`,
    `ge-icon-button--corner-${corner}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button aria-label={label} className={classes} type="button" {...props}>
      <span aria-hidden="true" className="ge-icon-button__icon">
        {icon}
      </span>
    </button>
  );
}
