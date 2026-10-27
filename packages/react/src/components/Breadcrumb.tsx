import type { HTMLAttributes, ReactNode } from "react";

export type BreadcrumbTone = "default" | "evergreen" | "indigo";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  tone?: BreadcrumbTone;
}

function ChevronRight() {
  return (
    <svg aria-hidden="true" className="ge-breadcrumb__separator" fill="none" height="12" viewBox="0 0 12 12" width="12">
      <path d="m4.5 2.5 3.5 3.5-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function Breadcrumb({ items, tone = "default", className, ...props }: BreadcrumbProps) {
  return (
    <nav className={["ge-breadcrumb", `ge-breadcrumb--${tone}`, className].filter(Boolean).join(" ")} aria-label="Breadcrumb" {...props}>
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              className={[
                isLast ? "ge-breadcrumb__current" : "ge-breadcrumb__level",
                !isLast && item.href ? "ge-breadcrumb__linked" : ""
              ].filter(Boolean).join(" ")}
              key={`${index}-${String(item.label)}`}
            >
              <span className="ge-breadcrumb__item">
                {isLast || !item.href ? (
                  <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
                ) : (
                  <a className="ge-breadcrumb__link" href={item.href}>{item.label}</a>
                )}
                {!isLast ? <ChevronRight /> : null}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
