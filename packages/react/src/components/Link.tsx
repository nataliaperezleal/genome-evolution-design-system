import type { AnchorHTMLAttributes, ReactNode } from "react";

export type LinkTone = "default" | "evergreen" | "indigo";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  tone?: LinkTone;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Link({
  tone = "default",
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: LinkProps) {
  const classes = ["ge-link", `ge-link--${tone}`, className].filter(Boolean).join(" ");

  return (
    <a className={classes} {...props}>
      {leadingIcon ? <span className="ge-link__icon">{leadingIcon}</span> : null}
      <span className="ge-link__label">{children}</span>
      {trailingIcon ? <span className="ge-link__icon">{trailingIcon}</span> : null}
    </a>
  );
}

