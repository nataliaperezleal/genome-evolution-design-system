import { useEffect, useId } from "react";

import { Backdrop } from "./Backdrop";

export interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}

export function Modal({ open, title, description, children, footer, onClose }: ModalProps) {
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
      <div className="ge-modal" role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={description ? descriptionId : undefined}>
        <div className="ge-modal__header">
          <div>
            <div className="ge-modal__title" id={titleId}>
              {title}
            </div>
            {description ? (
              <div className="ge-modal__description" id={descriptionId}>
                {description}
              </div>
            ) : null}
          </div>
          <button type="button" className="ge-modal__close" aria-label="Close modal" onClick={() => onClose?.()}>
            ×
          </button>
        </div>
        {children ? <div className="ge-modal__body">{children}</div> : null}
        {footer ? <div className="ge-modal__footer">{footer}</div> : null}
      </div>
    </div>
  );
}

