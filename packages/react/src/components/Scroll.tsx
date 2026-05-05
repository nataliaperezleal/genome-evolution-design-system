import type { HTMLAttributes, ReactNode } from "react";

export interface ScrollProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  maxHeight?: number | string;
  children: ReactNode;
}

export function Scroll({ maxHeight = 220, className, style, children, ...props }: ScrollProps) {
  return (
    <div
      className={["ge-scroll", className].filter(Boolean).join(" ")}
      style={{ ...(style ?? {}), maxHeight }}
      {...props}
    >
      <div className="ge-scroll__inner">{children}</div>
    </div>
  );
}

