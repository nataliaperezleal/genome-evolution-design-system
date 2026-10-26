import type { HTMLAttributes, ReactNode } from "react";

export interface ScorecardProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  change?: ReactNode;
  tone?: "neutral" | "success" | "warning" | "danger" | "info";
}

export function Scorecard({ label, value, change, tone = "neutral", className, ...props }: ScorecardProps) {
  const classes = ["ge-scorecard", `ge-scorecard--${tone}`, className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...props}>
      <div className="ge-scorecard__label">{label}</div>
      <div className="ge-scorecard__value">{value}</div>
      {change ? <div className="ge-scorecard__change">{change}</div> : null}
    </div>
  );
}
