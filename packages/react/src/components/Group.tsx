import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { Paginator } from "./Paginator";

export type GroupDirection = "row" | "column";
export type GroupGap = "xs" | "sm" | "md" | "lg";
export type GroupAlign = "start" | "center" | "end" | "stretch";
export type GroupJustify = "start" | "center" | "end" | "between";
export type GroupTone = "default" | "evergreen" | "indigo";
export type GroupState = "collapsed" | "expanded";

export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  state?: GroupState;
  defaultState?: GroupState;
  onStateChange?: (state: GroupState) => void;
  tone?: GroupTone;
  showFooter?: boolean;
  showPaginator?: boolean;
  leftActions?: ReactNode;
  rightActions?: ReactNode;
  pageCount?: number;
  direction?: GroupDirection;
  gap?: GroupGap;
  align?: GroupAlign;
  justify?: GroupJustify;
  wrap?: boolean;
  children?: ReactNode;
}

const gapToVar: Record<GroupGap, string> = {
  xs: "var(--ge-spacing-gap-xs)",
  sm: "var(--ge-spacing-gap-sm)",
  md: "var(--ge-spacing-gap-md)",
  lg: "var(--ge-spacing-gap-lg)"
};

export function Group({
  title = "Title",
  state,
  defaultState = "collapsed",
  onStateChange,
  tone = "default",
  showFooter = true,
  showPaginator = true,
  leftActions,
  rightActions,
  pageCount = 3,
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
  const [uncontrolledState, setUncontrolledState] = useState(defaultState);
  const [page, setPage] = useState(1);
  const resolvedState = state ?? uncontrolledState;

  if (title !== undefined) {
    const expanded = resolvedState === "expanded";
    return (
      <section
        className={["ge-group", "ge-group--panel", `ge-group--${tone}`, expanded ? "is-expanded" : "", className].filter(Boolean).join(" ")}
        style={style}
        {...props}
      >
        <button
          type="button"
          className="ge-group__header"
          aria-expanded={expanded}
          onClick={() => {
            const nextState = expanded ? "collapsed" : "expanded";
            if (state === undefined) setUncontrolledState(nextState);
            onStateChange?.(nextState);
          }}
        >
          <span className="ge-group__chevron" aria-hidden="true">⌄</span>
          <span className="ge-group__title">{title}</span>
        </button>
        {expanded ? (
          <>
            <div className="ge-group__content">{children}</div>
            {showFooter ? (
              <footer className="ge-group__footer">
                <div className="ge-group__footer-actions ge-group__footer-actions--left">{leftActions}</div>
                {showPaginator ? (
                  <Paginator type="input" page={page} pageCount={pageCount} onPageChange={setPage} />
                ) : null}
                <div className="ge-group__footer-actions ge-group__footer-actions--right">{rightActions}</div>
              </footer>
            ) : null}
          </>
        ) : null}
      </section>
    );
  }

  const classes = [
    "ge-group",
    "ge-group--layout",
    `ge-group--${direction}`,
    `ge-group--align-${align}`,
    `ge-group--justify-${justify}`,
    wrap ? "ge-group--wrap" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle = {
    ...(style as CSSProperties),
    "--ge-group-gap": gapToVar[gap]
  } as CSSProperties & { "--ge-group-gap": string };

  return (
    <div className={classes} style={mergedStyle} {...props}>
      {children}
    </div>
  );
}
