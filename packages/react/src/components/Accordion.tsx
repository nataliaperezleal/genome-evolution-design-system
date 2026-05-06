import { useId, useMemo, useState } from "react";

export type AccordionSize = "sm" | "md";
export type AccordionTone = "default" | "evergreen" | "indigo";

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  size?: AccordionSize;
  tone?: AccordionTone;
  disabled?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Accordion({
  title,
  children,
  size = "md",
  tone = "default",
  disabled = false,
  defaultOpen = false,
  open,
  onOpenChange
}: AccordionProps) {
  const panelId = useId();
  const buttonId = useId();
  const isControlled = typeof open === "boolean";
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const resolvedOpen = isControlled ? open : uncontrolledOpen;

  const classes = useMemo(
    () =>
      ["ge-accordion", `ge-accordion--${size}`, `ge-accordion--${tone}`, resolvedOpen ? "is-open" : "", disabled ? "is-disabled" : ""]
        .filter(Boolean)
        .join(" "),
    [resolvedOpen, size, tone, disabled]
  );

  const toggle = () => {
    if (disabled) return;
    const next = !resolvedOpen;
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  return (
    <div className={classes}>
      <button
        type="button"
        id={buttonId}
        className="ge-accordion__trigger"
        aria-expanded={resolvedOpen}
        aria-controls={panelId}
        onClick={toggle}
        disabled={disabled}
      >
        <span className="ge-accordion__title">{title}</span>
        <span className="ge-accordion__chevron" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="ge-accordion__panel"
        hidden={!resolvedOpen}
      >
        <div className="ge-accordion__content">{children}</div>
      </div>
    </div>
  );
}
