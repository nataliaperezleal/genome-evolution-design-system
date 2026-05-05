import { useState } from "react";

import type { ReactNode } from "react";

export interface SplitButtonItem {
  label: string;
  onSelect: () => void;
}

export interface SplitButtonProps {
  label: ReactNode;
  onClick: () => void;
  items: SplitButtonItem[];
}

export function SplitButton({ label, onClick, items }: SplitButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="ge-split">
      <button type="button" className="ge-split__primary" onClick={onClick}>
        {label}
      </button>
      <button type="button" className="ge-split__toggle" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        ▾
      </button>
      {open ? (
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

