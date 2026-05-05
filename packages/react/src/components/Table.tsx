import type { TableHTMLAttributes } from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}

export function Table({ className, ...props }: TableProps) {
  const classes = ["ge-table", className].filter(Boolean).join(" ");
  return <table className={classes} {...props} />;
}

