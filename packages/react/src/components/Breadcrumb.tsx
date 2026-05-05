import type { HTMLAttributes, ReactNode } from "react";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <nav className={["ge-breadcrumb", className].filter(Boolean).join(" ")} aria-label="Breadcrumb" {...props}>
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${index}-${String(item.label)}`}>
              {isLast || !item.href ? (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

