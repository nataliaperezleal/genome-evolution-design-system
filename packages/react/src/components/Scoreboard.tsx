import type { HTMLAttributes, ReactNode } from "react";

export interface ScoreboardProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  change?: ReactNode;
  tone?: "neutral" | "success" | "warning" | "danger" | "info";
}

export function Scoreboard({ label, value, change, tone = "neutral", className, ...props }: ScoreboardProps) {
  const classes = ["ge-scoreboard", `ge-scoreboard--${tone}`, className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...props}>
      <div className="ge-scoreboard__label">{label}</div>
      <div className="ge-scoreboard__value">{value}</div>
      {change ? <div className="ge-scoreboard__change">{change}</div> : null}
    </div>
  );
}

