import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ClearButtonTone = "default" | "evergreen" | "indigo";
export type ClearButtonType = "default" | "information" | "success" | "danger" | "warning";
export type ClearButtonCorner = "default" | "rounded";

export interface ClearButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: ClearButtonTone;
  typeTone?: ClearButtonType;
  corner?: ClearButtonCorner;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function ClearButton({
  tone = "indigo",
  typeTone = "default",
  corner = "default",
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: ClearButtonProps) {
  const classes = [
    "ge-clear-button",
    `ge-clear-button--${tone}`,
    `ge-clear-button--type-${typeTone}`,
    `ge-clear-button--${corner}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} {...props}>
      {leadingIcon ? <span className="ge-clear-button__icon">{leadingIcon}</span> : null}
      <span className="ge-clear-button__label">{children}</span>
      {trailingIcon ? <span className="ge-clear-button__icon">{trailingIcon}</span> : null}
    </button>
  );
}

