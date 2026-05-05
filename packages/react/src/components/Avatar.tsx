import type { HTMLAttributes } from "react";

export type AvatarSize = "sm" | "md" | "lg";
export type AvatarTone = "blue" | "green" | "amber" | "pink" | "neutral";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  initials: string;
  size?: AvatarSize;
  tone?: AvatarTone;
}

export function Avatar({ initials, size = "md", tone = "neutral", className, ...props }: AvatarProps) {
  const classes = ["ge-avatar", `ge-avatar--${size}`, `ge-avatar--${tone}`, className].filter(Boolean).join(" ");
  return (
    <div className={classes} aria-hidden="true" {...props}>
      {initials}
    </div>
  );
}

