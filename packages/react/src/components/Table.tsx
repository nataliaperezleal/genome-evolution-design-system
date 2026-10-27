import type { ReactNode, TableHTMLAttributes } from "react";

export interface TableProps extends Omit<TableHTMLAttributes<HTMLTableElement>, "children"> {
  showHeader?: boolean;
  column2?: boolean;
  column3?: boolean;
  column4?: boolean;
  column5?: boolean;
  column6?: boolean;
  column7?: boolean;
  column8?: boolean;
  column9?: boolean;
  column10?: boolean;
  row2?: boolean;
  row3?: boolean;
  row4?: boolean;
  row5?: boolean;
  row6?: boolean;
  row7?: boolean;
  row8?: boolean;
  row9?: boolean;
  row10?: boolean;
  headers?: ReactNode[];
  rows?: ReactNode[][];
  children?: ReactNode;
}

const defaultHeader = "Header";
const defaultCell = "First line content cell";

export function Table({
  showHeader = true,
  column2 = false,
  column3 = false,
  column4 = false,
  column5 = false,
  column6 = false,
  column7 = false,
  column8 = false,
  column9 = false,
  column10 = false,
  row2 = false,
  row3 = false,
  row4 = false,
  row5 = false,
  row6 = false,
  row7 = false,
  row8 = false,
  row9 = false,
  row10 = false,
  headers,
  rows,
  children,
  className,
  ...props
}: TableProps) {
  const classes = ["ge-table", children === undefined ? "ge-table--documented" : "", className].filter(Boolean).join(" ");
  if (children !== undefined) return <table className={classes} {...props}>{children}</table>;

  const visibleColumns = [true, column2, column3, column4, column5, column6, column7, column8, column9, column10]
    .map((visible, index) => visible ? index : -1)
    .filter((index) => index >= 0);
  const visibleRows = [true, row2, row3, row4, row5, row6, row7, row8, row9, row10]
    .map((visible, index) => visible ? index : -1)
    .filter((index) => index >= 0);

  return (
    <table className={classes} {...props}>
      <colgroup>{visibleColumns.map((column) => <col key={column} />)}</colgroup>
      {showHeader ? (
        <thead>
          <tr>{visibleColumns.map((column) => <th key={column} scope="col">{headers?.[column] ?? defaultHeader}</th>)}</tr>
        </thead>
      ) : null}
      <tbody>
        {visibleRows.map((row) => (
          <tr key={row}>
            {visibleColumns.map((column) => <td key={column}>{rows?.[row]?.[column] ?? defaultCell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
