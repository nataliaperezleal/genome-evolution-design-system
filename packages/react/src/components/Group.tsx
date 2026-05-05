import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type GroupDirection = "row" | "column";
export type GroupGap = "xs" | "sm" | "md" | "lg";
export type GroupAlign = "start" | "center" | "end" | "stretch";
export type GroupJustify = "start" | "center" | "end" | "between";

export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  direction?: GroupDirection;
  gap?: GroupGap;
  align?: GroupAlign;
  justify?: GroupJustify;
  wrap?: boolean;
  children: ReactNode;
}

const gapToVar: Record<GroupGap, string> = {
  xs: "var(--ge-spacing-gap-xs)",
  sm: "var(--ge-spacing-gap-sm)",
  md: "var(--ge-spacing-gap-md)",
  lg: "var(--ge-spacing-gap-lg)"
};

export function Group({
  direction = "row",
  gap = "sm",
  align = "center",
  justify = "start",
  wrap = false,
  className,
  style,
  children,
  ...props
}: GroupProps) {
  const classes = [
    "ge-group",
    `ge-group--${direction}`,
    `ge-group--align-${align}`,
    `ge-group--justify-${justify}`,
    wrap ? "ge-group--wrap" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle: CSSProperties = {
    ...(style as CSSProperties),
    ["--ge-group-gap" as any]: gapToVar[gap]
  };

  return (
    <div className={classes} style={mergedStyle} {...props}>
      {children}
    </div>
  );
}

