import type { HTMLAttributes, ReactNode } from "react";
import { Avatar } from "./Avatar";

export type HeaderTheme = "apps-designer" | "apps-tools" | "workportal";

export interface HeaderProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  theme?: HeaderTheme;
  showUserName?: boolean;
  showMail?: boolean;
  showAvatar?: boolean;
  eyebrow?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  leading?: ReactNode;
  actions?: ReactNode;
}

const workportalItems = [
  ["Me", "⌂"],
  ["Inbox", "✉"],
  ["New Case", "+"],
  ["Queries", "⌕"],
  ["Reports", "▥"],
  ["Live Processes", "◉"],
  ["Admin", "⚙"]
];

const toolItems = [
  ["Controls", "+"],
  ["Settings", "⚙"],
  ["Tools", "▣"],
  ["ADA Charts", "▥"]
];

function BrandIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 128 128" width="32" height="32">
      <path d="M25.44 119.7 91.84 81.8A4.34 4.34 0 0 0 94 78.08V38.74L24.16 78.6A4.34 4.34 0 0 0 22 82.32v35.38c0 1.76 1.9 2.88 3.44 2Z" fill="currentColor" />
      <path d="m50.14 55.48-10.02-5.84A4.24 4.24 0 0 1 38 45.94V10.3c0-1.78 1.92-2.88 3.46-2l45.34 26.24-36.66 20.92v.02Z" fill="currentColor" />
    </svg>
  );
}

export function Header({
  theme,
  showUserName = true,
  showMail = true,
  showAvatar = true,
  eyebrow,
  title = "Title",
  subtitle,
  leading,
  actions,
  className,
  ...props
}: HeaderProps) {
  if (theme) {
    const classes = ["ge-header", "ge-header--theme", `ge-header--${theme}`, className].filter(Boolean).join(" ");

    return (
      <header className={classes} {...props}>
        {theme === "apps-designer" ? (
          <>
            <div className="ge-header__brand">
              <span className="ge-header__brand-mark"><BrandIcon /></span>
              <span className="ge-header__brand-name">bizagi<br /><strong>App Designer</strong></span>
            </div>
            <div className="ge-header__user">
              {showUserName || showMail ? (
                <span className="ge-header__user-copy">
                  {showUserName ? <strong>User name</strong> : null}
                  {showMail ? <span>user.name@company.com</span> : null}
                </span>
              ) : null}
              {showAvatar ? <Avatar type="print" label="UN" size={40} tone="evergreen" /> : null}
            </div>
          </>
        ) : null}
        {theme === "apps-tools" ? (
          <>
            <div className="ge-header__tools">
              <span className="ge-header__brand-mark"><BrandIcon /></span>
              {toolItems.map(([label, icon]) => (
                <span className="ge-header__theme-item" key={label}>
                  <span aria-hidden="true">{icon}</span>{label}
                </span>
              ))}
            </div>
            <button type="button" className="ge-header__main-menu">⌑　Main menu　⌄<strong>test-app-ux</strong></button>
            <div className="ge-header__tools ge-header__tools--right">
              {["Unlock app", "App saved", "Download app", "Open app"].map((item) => (
                <span className="ge-header__theme-item" key={item}>{item}</span>
              ))}
              <span className="ge-header__theme-item ge-header__publish">Publish</span>
            </div>
          </>
        ) : null}
        {theme === "workportal" ? (
          <>
            <div className="ge-header__brand ge-header__brand--wordmark">
              <span className="ge-header__brand-mark"><BrandIcon /></span>
              <strong>bizagi</strong>
            </div>
            <nav className="ge-header__navigation" aria-label="Main navigation">
              {workportalItems.map(([label, icon]) => (
                <span className="ge-header__theme-item" key={label}>
                  <span aria-hidden="true">{icon}</span>{label}
                </span>
              ))}
            </nav>
            <div className="ge-header__user">
              <span className="ge-header__search">⌕ <span>Search</span></span>
              {showAvatar ? <Avatar type="print" label="UN" size={24} tone="evergreen" /> : null}
            </div>
          </>
        ) : null}
      </header>
    );
  }

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
