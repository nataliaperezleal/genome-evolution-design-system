import type { HTMLAttributes, ReactNode } from "react";

export type ScrollOrientation = "vertical" | "horizontal";
export type ScrollSize = "small" | "regular";

export interface ScrollProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  maxHeight?: number | string;
  orientation?: ScrollOrientation;
  size?: ScrollSize;
  indicatorOnly?: boolean;
  children?: ReactNode;
}

export function Scroll({
  maxHeight = 220,
  orientation = "vertical",
  size = "small",
  indicatorOnly = false,
  className,
  style,
  children,
  ...props
}: ScrollProps) {
  const classes = ["ge-scroll", `ge-scroll--${orientation}`, `ge-scroll--${size}`, indicatorOnly ? "ge-scroll--indicator" : "ge-scroll--container", className]
    .filter(Boolean)
    .join(" ");
  if (indicatorOnly) {
    return (
      <div className={classes} aria-hidden="true" style={style} {...props}>
        <span className="ge-scroll__thumb" />
      </div>
    );
  }

  return (
    <div
      className={classes}
      style={{ ...(style ?? {}), maxHeight }}
      {...props}
    >
      <div className="ge-scroll__inner">{children}</div>
    </div>
  );
}
