import type { HTMLAttributes, ReactNode } from "react";

export type BreadcrumbTone = "default" | "evergreen" | "indigo";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  tone?: BreadcrumbTone;
  showOverflow?: boolean;
  showLevel1?: boolean;
  showLevel2?: boolean;
  showLevel3?: boolean;
  showLevel4?: boolean;
  showLevel5?: boolean;
}

function ChevronRight() {
  return (
    <svg aria-hidden="true" className="ge-breadcrumb__separator" fill="none" height="12" viewBox="0 0 12 12" width="12">
      <path d="m4.5 2.5 3.5 3.5-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function Breadcrumb({
  items,
  tone = "default",
  showOverflow = true,
  showLevel1 = true,
  showLevel2 = true,
  showLevel3 = true,
  showLevel4 = true,
  showLevel5 = true,
  className,
  ...props
}: BreadcrumbProps) {
  const ancestors = items.slice(0, -1);
  const firstVisibleIndex = Math.max(0, ancestors.length - 5);
  const visibleAncestors = ancestors.slice(firstVisibleIndex).filter((_, index) => {
    const level = ancestors.length - (firstVisibleIndex + index);
    const levelVisibility = [showLevel1, showLevel2, showLevel3, showLevel4, showLevel5];
    return levelVisibility[level - 1];
  });
  const currentItem = items[items.length - 1];
  const trail = [
    ...(showOverflow ? [{ label: "…", kind: "overflow" as const }] : []),
    ...visibleAncestors.map((item) => ({ ...item, kind: "level" as const })),
    ...(currentItem ? [{ ...currentItem, kind: "current" as const }] : [])
  ];

  return (
    <nav className={["ge-breadcrumb", `ge-breadcrumb--${tone}`, className].filter(Boolean).join(" ")} aria-label="Breadcrumb" {...props}>
      <ol>
        {trail.map((item, index) => {
          const isCurrent = item.kind === "current";
          const isOverflow = item.kind === "overflow";
          return (
            <li
              className={[
                isCurrent ? "ge-breadcrumb__current" : "ge-breadcrumb__level",
                !isCurrent && !isOverflow && item.href ? "ge-breadcrumb__linked" : "",
                isOverflow ? "ge-breadcrumb__overflow" : ""
              ].filter(Boolean).join(" ")}
              key={`${index}-${String(item.label)}`}
            >
              <span className="ge-breadcrumb__item">
                {isCurrent || isOverflow || !item.href ? (
                  <span aria-current={isCurrent ? "page" : undefined}>{item.label}</span>
                ) : (
                  <a className="ge-breadcrumb__link" href={item.href}>{item.label}</a>
                )}
                {!isCurrent ? <ChevronRight /> : null}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
