import type { HTMLAttributes, ReactNode } from "react";

export type TooltipSide = "top" | "bottom" | "left" | "right";

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children" | "content"> {
  content: ReactNode;
  side?: TooltipSide;
  children: ReactNode;
}

export function Tooltip({ content, side = "top", children, className, ...props }: TooltipProps) {
  const classes = ["ge-tooltip", `ge-tooltip--${side}`, className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...props}>
      <span className="ge-tooltip__trigger" tabIndex={0}>
        {children}
      </span>
      <span className="ge-tooltip__content" role="tooltip">
        {content}
      </span>
    </span>
  );
}
