import type { HTMLAttributes, ReactNode } from "react";

export type TooltipSide = "top" | "bottom" | "left" | "right";
export type TooltipColor = "white" | "black";

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children" | "content" | "title"> {
  content?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  image?: ReactNode;
  color?: TooltipColor;
  showTitle?: boolean;
  showDescription?: boolean;
  showImage?: boolean;
  side?: TooltipSide;
  children: ReactNode;
}

export function Tooltip({
  content,
  title,
  description,
  image,
  color = "white",
  showTitle = true,
  showDescription = true,
  showImage = false,
  side = "top",
  children,
  className,
  ...props
}: TooltipProps) {
  const classes = ["ge-tooltip", `ge-tooltip--${side}`, `ge-tooltip--${color}`, className].filter(Boolean).join(" ");
  const resolvedDescription = description ?? content;

  return (
    <span className={classes} {...props}>
      <span className="ge-tooltip__trigger" tabIndex={0}>
        {children}
      </span>
      <span className="ge-tooltip__content" role="tooltip">
        {showTitle && title ? <span className="ge-tooltip__title">{title}</span> : null}
        {showImage && image ? <span className="ge-tooltip__image">{image}</span> : null}
        {showDescription && resolvedDescription ? <span className="ge-tooltip__description">{resolvedDescription}</span> : null}
      </span>
    </span>
  );
}
