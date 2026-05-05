import { useEffect } from "react";

export type SnackbarTone = "neutral" | "success" | "warning" | "danger" | "info";

export interface SnackbarProps {
  open: boolean;
  message: string;
  tone?: SnackbarTone;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  autoHideDurationMs?: number;
}

export function Snackbar({
  open,
  message,
  tone = "neutral",
  actionLabel,
  onAction,
  onClose,
  autoHideDurationMs = 4000
}: SnackbarProps) {
  useEffect(() => {
    if (!open) return;
    if (!autoHideDurationMs) return;
    const timer = window.setTimeout(() => onClose?.(), autoHideDurationMs);
    return () => window.clearTimeout(timer);
  }, [open, autoHideDurationMs, onClose]);

  if (!open) return null;

  return (
    <div className={["ge-snackbar", `ge-snackbar--${tone}`].join(" ")} role="status" aria-live="polite">
      <div className="ge-snackbar__message">{message}</div>
      <div className="ge-snackbar__actions">
        {actionLabel ? (
          <button type="button" className="ge-snackbar__action" onClick={() => onAction?.()}>
            {actionLabel}
          </button>
        ) : null}
        <button type="button" className="ge-snackbar__close" aria-label="Dismiss" onClick={() => onClose?.()}>
          ×
        </button>
      </div>
    </div>
  );
}

