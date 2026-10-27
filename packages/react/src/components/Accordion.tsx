import { useId, useMemo, useState, type ReactNode } from "react";
import { Badge } from "./Badge";

export type AccordionSize = "sm" | "md";
export type AccordionTone = "default" | "evergreen" | "indigo";
export type AccordionState = "default" | "hovered" | "pressed" | "focused" | "disabled" | "loading";

export interface AccordionProps {
  title?: string;
  text?: string;
  children?: ReactNode;
  size?: AccordionSize;
  tone?: AccordionTone;
  state?: AccordionState;
  disabled?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showLeftIcon?: boolean;
  icon?: ReactNode;
  showCheckbox?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  showBadge?: boolean;
  badge?: ReactNode;
}

export function Accordion({
  title,
  text,
  children,
  size = "md",
  tone = "default",
  state = "default",
  disabled = false,
  defaultOpen = false,
  open,
  onOpenChange,
  showLeftIcon = false,
  icon,
  showCheckbox = false,
  checked,
  defaultChecked = false,
  onCheckedChange,
  showBadge = false,
  badge = "0"
}: AccordionProps) {
  const panelId = useId();
  const buttonId = useId();
  const isControlled = typeof open === "boolean";
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const resolvedOpen = isControlled ? open : uncontrolledOpen;
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
  const resolvedChecked = checked ?? uncontrolledChecked;
  const isLoading = state === "loading";
  const isDisabled = disabled || state === "disabled";
  const resolvedTitle = title ?? text ?? "Placeholder";

  const classes = useMemo(
    () =>
      ["ge-accordion", `ge-accordion--${size}`, `ge-accordion--${tone}`, `ge-accordion--state-${state}`, resolvedOpen ? "is-open" : "", isDisabled ? "is-disabled" : "", isLoading ? "is-loading" : ""]
        .filter(Boolean)
        .join(" "),
    [resolvedOpen, size, tone, state, isDisabled, isLoading]
  );

  const toggle = () => {
    if (isDisabled || isLoading) return;
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
        aria-expanded={resolvedOpen || isLoading}
        aria-controls={panelId}
        onClick={toggle}
        disabled={isDisabled || isLoading}
      >
        {isLoading ? <span className="ge-accordion__skeleton ge-accordion__skeleton--icon" /> : null}
        {showLeftIcon && !isLoading ? <span className="ge-accordion__left-icon">{icon ?? "i"}</span> : null}
        {showCheckbox && !isLoading ? (
          <input
            type="checkbox"
            className="ge-accordion__checkbox"
            checked={resolvedChecked}
            disabled={isDisabled}
            onClick={(event) => event.stopPropagation()}
            onChange={(event) => {
              if (checked === undefined) setUncontrolledChecked(event.target.checked);
              onCheckedChange?.(event.target.checked);
            }}
            aria-label={`Select ${resolvedTitle}`}
          />
        ) : null}
        {isLoading ? <span className="ge-accordion__skeleton ge-accordion__skeleton--title" /> : (
          <span className="ge-accordion__title">{resolvedTitle}</span>
        )}
        {showBadge && !isLoading ? <Badge className="ge-accordion__badge">{badge}</Badge> : null}
        {isLoading ? <span className="ge-accordion__skeleton ge-accordion__skeleton--chevron" /> : null}
        {!isLoading ? (
          <span className="ge-accordion__chevron" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ) : null}
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="ge-accordion__panel"
        hidden={!resolvedOpen && !isLoading}
      >
        <div className="ge-accordion__content">
          {isLoading ? <span className="ge-accordion__skeleton ge-accordion__skeleton--content" /> : children}
        </div>
      </div>
    </div>
  );
}
