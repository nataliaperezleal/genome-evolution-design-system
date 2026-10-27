import { useEffect, useId, type ReactNode } from "react";

import { Backdrop } from "./Backdrop";
import { Button } from "./Button";

export type ModalSize = "small" | "medium" | "large" | "bigger" | "90%" | "full";

export interface ModalProps {
  open: boolean;
  title?: string;
  size?: ModalSize;
  showHeader?: boolean;
  showTitleIcon?: boolean;
  titleIcon?: ReactNode;
  expand?: boolean;
  close?: boolean;
  showButtons?: boolean;
  helperText?: boolean;
  valueHelperText?: string;
  tertiaryButton?: boolean;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  onTertiary?: () => void;
  onClose?: () => void;
  className?: string;
}

export function Modal({
  open,
  title = "Modal 16x title",
  size = "small",
  showHeader = true,
  showTitleIcon = false,
  titleIcon = "i",
  expand = false,
  close = true,
  showButtons = true,
  helperText = false,
  valueHelperText = "1 of 5",
  tertiaryButton = false,
  description,
  children,
  footer,
  onConfirm,
  onCancel,
  onTertiary,
  onClose,
  className
}: ModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ge-modal-root">
      <Backdrop open tone="black" className="ge-modal-backdrop" onClick={() => onClose?.()} />
      <div className={["ge-modal", `ge-modal--${size.replace("%", "")}`, className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" aria-labelledby={showHeader ? titleId : undefined} aria-describedby={description ? descriptionId : undefined}>
        {showHeader ? (
          <div className="ge-modal__header">
            <div className="ge-modal__heading">
              {showTitleIcon ? <span className="ge-modal__title-icon" aria-hidden="true">{titleIcon}</span> : null}
              <div>
                <div className="ge-modal__title" id={titleId}>{title}</div>
                {description ? (
                  <div className="ge-modal__description" id={descriptionId}>{description}</div>
                ) : null}
              </div>
            </div>
            {expand ? <button type="button" className="ge-modal__expand" aria-label="Expand modal">⛶</button> : null}
            {close ? (
              <button type="button" className="ge-modal__close" aria-label="Close modal" onClick={() => onClose?.()}>
                ×
              </button>
            ) : null}
          </div>
        ) : null}
        {children ? <div className="ge-modal__body">{children}</div> : null}
        {footer ? <div className="ge-modal__footer">{footer}</div> : showButtons ? (
          <div className="ge-modal__footer">
            <div className="ge-modal__footer-meta">
              {tertiaryButton ? <Button variant="tertiary" size="sm" onClick={onTertiary}>Back</Button> : null}
              {helperText ? <span>{valueHelperText}</span> : null}
            </div>
            <div className="ge-modal__footer-actions">
              <Button variant="secondary" onClick={onCancel}>Cancel</Button>
              <Button onClick={onConfirm}>Apply</Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
