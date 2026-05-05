import type { HTMLAttributes, ReactNode } from "react";

export interface HeaderProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  leading?: ReactNode;
  actions?: ReactNode;
}

export function Header({ eyebrow, title, subtitle, leading, actions, className, ...props }: HeaderProps) {
  const classes = ["ge-header", className].filter(Boolean).join(" ");
  return (
    <header className={classes} {...props}>
      <div className="ge-header__main">
        {leading ? <div className="ge-header__leading">{leading}</div> : null}
        <div className="ge-header__copy">
          {eyebrow ? <div className="ge-header__eyebrow">{eyebrow}</div> : null}
          <div className="ge-header__title">{title}</div>
          {subtitle ? <div className="ge-header__subtitle">{subtitle}</div> : null}
        </div>
      </div>
      {actions ? <div className="ge-header__actions">{actions}</div> : null}
    </header>
  );
}
