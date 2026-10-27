import type { HTMLAttributes, ReactNode } from "react";

export type AvatarSize = 16 | 24 | 32 | 40 | 48 | "sm" | "md" | "lg";
export type AvatarTone = "default" | "evergreen" | "indigo" | "blue" | "green" | "amber" | "pink" | "neutral";
export type AvatarType = "icon" | "person" | "print";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  initials?: string;
  label?: string;
  type?: AvatarType;
  size?: AvatarSize;
  tone?: AvatarTone;
  src?: string;
  alt?: string;
  showState?: boolean;
  focused?: boolean;
  icon?: ReactNode;
}

const sizeMap: Record<Exclude<AvatarSize, number>, number> = { sm: 24, md: 32, lg: 40 };

function PersonIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="70%" viewBox="0 0 24 24" width="70%">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0v1H5v-1Z" fill="currentColor" />
    </svg>
  );
}

export function Avatar({
  initials,
  label,
  type = initials || label ? "print" : "icon",
  size = 16,
  tone = "default",
  src,
  alt = "",
  showState = false,
  focused = false,
  icon,
  className,
  ...props
}: AvatarProps) {
  const resolvedSize = typeof size === "number" ? size : sizeMap[size];
  const classes = [
    "ge-avatar",
    `ge-avatar--${resolvedSize}`,
    `ge-avatar--${tone}`,
    `ge-avatar--type-${type}`,
    focused ? "is-focused" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <div
      className={classes}
      role={type === "person" && alt ? "img" : undefined}
      aria-label={type === "person" && alt ? alt : undefined}
      aria-hidden={type !== "person" || !alt ? true : undefined}
      {...props}
    >
      {type === "person" ? src ? <img alt="" className="ge-avatar__photo" src={src} /> : <PersonIcon /> : null}
      {type === "icon" ? icon ?? <PersonIcon /> : null}
      {type === "print" ? label ?? initials ?? "B" : null}
      {showState ? <span className="ge-avatar__state" aria-hidden="true" /> : null}
    </div>
  );
}
