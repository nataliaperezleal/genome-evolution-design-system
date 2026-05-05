import type { HTMLAttributes } from "react";

export type ProgressBarTone = "evergreen" | "indigo" | "neutral";

export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  tone?: ProgressBarTone;
  label?: string;
}

export function ProgressBar({
  value = 0,
  max = 100,
  indeterminate = false,
  tone = "evergreen",
  label = "Progress",
  className,
  ...props
}: ProgressBarProps) {
  const safeMax = max > 0 ? max : 100;
  const clamped = Math.min(Math.max(value, 0), safeMax);
  const percent = (clamped / safeMax) * 100;

  const classes = ["ge-progress", `ge-progress--${tone}`, indeterminate ? "is-indeterminate" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={indeterminate ? undefined : clamped}
      {...props}
    >
      <div className="ge-progress__track" aria-hidden="true">
        <div className="ge-progress__fill" style={indeterminate ? undefined : { width: `${percent}%` }} />
      </div>
    </div>
  );
}

