import type { AnchorHTMLAttributes, ReactNode } from "react";

export type LinkTone = "default" | "evergreen" | "indigo";
export type LinkSize = "sm" | "md";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  tone?: LinkTone;
  size?: LinkSize;
  visited?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Link({
  tone = "default",
  size = "md",
  visited = false,
  "aria-disabled": ariaDisabled,
  leadingIcon,
  trailingIcon,
  className,
  children = "Link",
  ...props
}: LinkProps) {
  const disabled = ariaDisabled === true;
  const classes = [
    "ge-link",
    `ge-link--${tone}`,
    `ge-link--${size}`,
    visited ? "is-visited" : "",
    disabled ? "is-disabled" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <a
      className={classes}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      {...props}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        props.onClick?.(event);
      }}
    >
      {leadingIcon ? <span className="ge-link__icon">{leadingIcon}</span> : null}
      <span className="ge-link__label">{children}</span>
      {trailingIcon ? <span className="ge-link__icon">{trailingIcon}</span> : null}
    </a>
  );
}
