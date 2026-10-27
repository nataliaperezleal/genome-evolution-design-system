import type { HTMLAttributes } from "react";

export type PaginatorType = "page-size-range" | "input" | "numbers";

export interface PaginatorProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  type?: PaginatorType;
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  showPages?: boolean;
  pageSize?: number;
  totalItems?: number;
  onPageSizeChange?: (pageSize: number) => void;
}

function clampPage(page: number, pageCount: number) {
  if (pageCount <= 0) return 1;
  return Math.min(Math.max(page, 1), pageCount);
}

function buildPages(page: number, pageCount: number): number[] {
  const current = clampPage(page, pageCount);
  const start = Math.max(1, Math.min(current - 1, pageCount - 2));
  return Array.from({ length: Math.min(3, pageCount) }, (_, index) => start + index);
}

export function Paginator({
  type = "numbers",
  page,
  pageCount,
  onPageChange,
  showPages = true,
  pageSize = 15,
  totalItems = 100,
  onPageSizeChange,
  className,
  ...props
}: PaginatorProps) {
  const current = clampPage(page, pageCount);
  const pages = buildPages(current, pageCount);
  const canPrev = current > 1;
  const canNext = current < pageCount;
  const firstItem = totalItems <= 0 ? 0 : (current - 1) * pageSize + 1;
  const lastItem = Math.min(current * pageSize, totalItems);

  return (
    <nav className={["ge-paginator", `ge-paginator--${type}`, className].filter(Boolean).join(" ")} aria-label="Pagination" {...props}>
      {type === "page-size-range" ? (
        <>
          {showPages ? (
            <label className="ge-paginator__size">
              <span>Show items:</span>
              <select value={pageSize} onChange={(event) => onPageSizeChange?.(Number(event.target.value))}>
                {[15, 30, 50].map((size) => <option key={size} value={size}>{size}</option>)}
              </select>
            </label>
          ) : null}
          <span className="ge-paginator__range">{firstItem} - {lastItem} of {totalItems}</span>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(1)} disabled={!canPrev} aria-label="First page">«</button>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(current - 1)} disabled={!canPrev} aria-label="Previous page">‹</button>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(current + 1)} disabled={!canNext} aria-label="Next page">›</button>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(pageCount)} disabled={!canNext} aria-label="Last page">»</button>
        </>
      ) : type === "input" ? (
        <>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(1)} disabled={!canPrev} aria-label="First page">«</button>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(current - 1)} disabled={!canPrev} aria-label="Previous page">‹</button>
          <input
            className="ge-paginator__input"
            type="number"
            min={1}
            max={pageCount}
            value={current}
            aria-label="Current page"
            onChange={(event) => {
              const nextPage = Number(event.target.value);
              if (Number.isFinite(nextPage)) onPageChange(clampPage(nextPage, pageCount));
            }}
          />
          <span className="ge-paginator__count">/ {pageCount}</span>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(current + 1)} disabled={!canNext} aria-label="Next page">›</button>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(pageCount)} disabled={!canNext} aria-label="Last page">»</button>
        </>
      ) : (
        <>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(1)} disabled={!canPrev} aria-label="First page">«</button>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(current - 1)} disabled={!canPrev} aria-label="Previous page">‹</button>
          {pages.map((item) => (
            <button
              key={item}
              type="button"
              className={["ge-page-btn", item === current ? "is-active" : ""].filter(Boolean).join(" ")}
              onClick={() => onPageChange(item)}
              aria-current={item === current ? "page" : undefined}
            >
              {item}
            </button>
          ))}
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(current + 1)} disabled={!canNext} aria-label="Next page">›</button>
          <button type="button" className="ge-page-btn" onClick={() => onPageChange(pageCount)} disabled={!canNext} aria-label="Last page">»</button>
        </>
      )}
    </nav>
  );
}
