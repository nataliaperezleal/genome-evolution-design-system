import { useState } from "react";
import type { ReactNode } from "react";

export interface SplitButtonItem {
  label: string;
  onSelect: () => void;
}

export type SplitButtonColor = "evergreen" | "indigo" | "default";
export type SplitButtonType = "primary" | "secondary";
export type SplitButtonSize = "regular" | "small";

export interface SplitButtonProps {
  label: ReactNode;
  onClick: () => void;
  items: SplitButtonItem[];
  color?: SplitButtonColor;
  type?: SplitButtonType;
  size?: SplitButtonSize;
  disabled?: boolean;
}

export function SplitButton({
  label,
  onClick,
  items,
  color = "evergreen",
  type = "primary",
  size = "regular",
  disabled = false
}: SplitButtonProps) {
  const [open, setOpen] = useState(false);
  const classes = ["ge-split", `ge-split--${color}`, `ge-split--${type}`, `ge-split--${size}`, disabled ? "is-disabled" : ""];

  return (
    <div className={classes.join(" ")}>
      <button type="button" className="ge-split__primary" onClick={onClick} disabled={disabled}>
        {label}
      </button>
      <button
        type="button"
        className="ge-split__toggle"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        disabled={disabled}
      >
        ▾
      </button>
      {open && !disabled ? (
        <div className="ge-split__menu" role="menu">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              className="ge-split__item"
              role="menuitem"
              onClick={() => {
                setOpen(false);
                item.onSelect();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
