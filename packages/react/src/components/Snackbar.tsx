import { useEffect } from "react";

import type { ReactNode } from "react";

export type SnackbarTone = "neutral" | "success" | "warning" | "danger" | "info";
export type SnackbarType = "danger" | "warning" | "information" | "success";

export interface SnackbarProps {
  open: boolean;
  message?: string;
  label?: string;
  type?: SnackbarType;
  tone?: SnackbarTone;
  actionLabel?: string;
  showButton?: boolean;
  showBar?: boolean;
  onAction?: () => void;
  onClose?: () => void;
  autoHideDurationMs?: number;
}

const typeIcons: Record<SnackbarType, ReactNode> = {
  danger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6m0-6-6 6" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3 2.8 19h18.4L12 3Z" />
      <path d="M12 9v4m0 3h.01" />
    </svg>
  ),
  information: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5m0-8h.01" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  )
};

export function Snackbar({
  open,
  message,
  label,
  type,
  tone,
  actionLabel,
  showButton = true,
  showBar = true,
  onAction,
  onClose,
  autoHideDurationMs = 4000
}: SnackbarProps) {
  useEffect(() => {
    if (!open || !autoHideDurationMs) return;
    const timer = window.setTimeout(() => onClose?.(), autoHideDurationMs);
    return () => window.clearTimeout(timer);
  }, [open, autoHideDurationMs, onClose]);

  if (!open) return null;

  const resolvedType: SnackbarType =
    type ?? (tone === "info" || tone === "neutral" ? "information" : tone ?? "danger");
  const resolvedMessage = message ?? label ?? "Single-line toast bar";
  const resolvedAction = actionLabel ?? (showButton ? "Button" : undefined);

  return (
    <div
      className={[
        "ge-snackbar",
        `ge-snackbar--${resolvedType}`,
        autoHideDurationMs ? "" : "ge-snackbar--persistent"
      ].filter(Boolean).join(" ")}
      role={resolvedType === "danger" ? "alert" : "status"}
      aria-live={resolvedType === "danger" ? "assertive" : "polite"}
    >
      <div className="ge-snackbar__content">
        <span className="ge-snackbar__icon">{typeIcons[resolvedType]}</span>
        <div className="ge-snackbar__message">{resolvedMessage}</div>
        {showButton ? (
          <button type="button" className="ge-snackbar__action" onClick={() => onAction?.()}>
            {resolvedAction}
          </button>
        ) : null}
      </div>
      <button type="button" className="ge-snackbar__close" aria-label="Dismiss" onClick={() => onClose?.()}>
        ×
      </button>
      {showBar ? (
        <div className="ge-snackbar__bar" aria-hidden="true">
          <span style={{ animationDuration: `${autoHideDurationMs || 4000}ms` }} />
        </div>
      ) : null}
    </div>
  );
}
