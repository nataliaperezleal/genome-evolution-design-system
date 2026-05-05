import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonTone = "evergreen" | "indigo" | "neutral";
type IconButtonVariant = "filled" | "outline";
type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  tone?: IconButtonTone;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
}

export function IconButton({
  icon,
  label,
  tone = "evergreen",
  variant = "filled",
  size = "md",
  className,
  ...props
}: IconButtonProps) {
  const classes = [
    "ge-icon-button",
    `ge-icon-button--${variant}`,
    `ge-icon-button--${tone}`,
    `ge-icon-button--${size}`,
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
