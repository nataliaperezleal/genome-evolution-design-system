import type { HTMLAttributes, ReactNode } from "react";

export interface ScorecardProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  size?: "sm" | "md";
  valuePosition?: "top" | "bottom";
  change?: ReactNode;
  tone?: "neutral" | "success" | "warning" | "danger" | "info";
}

export function Scorecard({
  label,
  value,
  size = "sm",
  valuePosition = "top",
  change,
  tone = "neutral",
  className,
  ...props
}: ScorecardProps) {
  const classes = ["ge-scorecard", `ge-scorecard--${tone}`, `ge-scorecard--${size}`, `ge-scorecard--${valuePosition}-value`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...props}>
      <div className="ge-scorecard__label">{label}</div>
      <div className="ge-scorecard__value">{value}</div>
      {change ? <div className="ge-scorecard__change">{change}</div> : null}
    </div>
  );
}
