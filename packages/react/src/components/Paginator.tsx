import type { HTMLAttributes } from "react";

export interface PaginatorProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

function clampPage(page: number, pageCount: number) {
  if (pageCount <= 0) return 1;
  return Math.min(Math.max(page, 1), pageCount);
}

function buildPages(page: number, pageCount: number) {
  const current = clampPage(page, pageCount);
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1);

  const pages: Array<number | "ellipsis"> = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(pageCount - 1, current + 1);

  if (start > 2) pages.push("ellipsis");
  for (let p = start; p <= end; p += 1) pages.push(p);
  if (end < pageCount - 1) pages.push("ellipsis");

  pages.push(pageCount);
  return pages;
}

export function Paginator({ page, pageCount, onPageChange, className, ...props }: PaginatorProps) {
  const current = clampPage(page, pageCount);
  const pages = buildPages(current, pageCount);
  const canPrev = current > 1;
  const canNext = current < pageCount;

  return (
    <nav className={["ge-paginator", className].filter(Boolean).join(" ")} aria-label="Pagination" {...props}>
      <button
        type="button"
        className="ge-page-btn"
        onClick={() => onPageChange(current - 1)}
        disabled={!canPrev}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((item, index) =>
        item === "ellipsis" ? (
          <span key={`e-${index}`} className="ge-page-ellipsis" aria-hidden="true">
            ···
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={["ge-page-btn", item === current ? "is-active" : ""].filter(Boolean).join(" ")}
            onClick={() => onPageChange(item)}
            aria-current={item === current ? "page" : undefined}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        className="ge-page-btn"
        onClick={() => onPageChange(current + 1)}
        disabled={!canNext}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}

