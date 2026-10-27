import type { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "sm" | "md";
export type InputOrientation = "default" | "label-left";
export type InputCorner = "square" | "rounded";
export type InputState = "default" | "filled" | "hovered" | "on-focus" | "focused" | "error" | "disabled" | "read-only";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: InputSize;
  orientation?: InputOrientation;
  corner?: InputCorner;
  state?: InputState;
  showLabel?: boolean;
  showInfo?: boolean;
  infoIcon?: ReactNode;
  showLeftIcon?: boolean;
  leftIcon?: ReactNode;
  showPlaceholder?: boolean;
  showRightIcon?: boolean;
  rightIcon?: ReactNode;
  showHelperText?: boolean;
}

export function Input({
  label,
  helperText,
  error,
  size = "md",
  orientation = "default",
  corner = "square",
  state,
  showLabel = true,
  showInfo = false,
  infoIcon = "i",
  showLeftIcon = false,
  leftIcon = "▦",
  showPlaceholder = true,
  showRightIcon = false,
  rightIcon = "⌄",
  showHelperText = true,
  id,
  className,
  placeholder,
  disabled,
  readOnly,
  defaultValue,
  value,
  ...props
}: InputProps) {
  const inputId = id ?? `ge-input-${label?.toLowerCase().replace(/\s+/g, "-") ?? "field"}`;
  const derivedState: InputState = error
    ? "error"
    : disabled
      ? "disabled"
      : readOnly
        ? "read-only"
        : value !== undefined || defaultValue !== undefined
          ? "filled"
          : "default";
  const resolvedState = state ?? derivedState;
  const resolvedDisabled = disabled ?? resolvedState === "disabled";
  const resolvedReadOnly = readOnly ?? resolvedState === "read-only";
  const describedBy = error ? `${inputId}-error` : helperText && showHelperText ? `${inputId}-helper` : undefined;
  const classes = [
    "ge-field",
    `ge-field--${size}`,
    `ge-field--${orientation}`,
    `ge-field--${corner}`,
    `ge-field--state-${resolvedState}`,
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {showLabel && label ? (
        <div className="ge-field__label-row">
          <label className="ge-field__label" htmlFor={inputId}>{label}</label>
          {showInfo ? <span className="ge-field__info" aria-hidden="true">{infoIcon}</span> : null}
        </div>
      ) : null}
      <div className="ge-input-wrap">
        {showLeftIcon && resolvedState !== "read-only" ? (
          <span className="ge-input__icon ge-input__icon--left" aria-hidden="true">{leftIcon}</span>
        ) : null}
        <input
          aria-invalid={error || resolvedState === "error" ? true : undefined}
          aria-describedby={describedBy}
          className="ge-input__control"
          id={inputId}
          placeholder={showPlaceholder ? placeholder : undefined}
          disabled={resolvedDisabled}
          readOnly={resolvedReadOnly}
          value={value}
          defaultValue={defaultValue}
          {...props}
        />
        {showRightIcon && resolvedState !== "read-only" ? (
          <span className="ge-input__icon ge-input__icon--right" aria-hidden="true">{rightIcon}</span>
        ) : null}
      </div>
      {showHelperText && (error || helperText) ? (
        <span
          className={["ge-field__message", error || resolvedState === "error" ? "ge-field__message--error" : ""].filter(Boolean).join(" ")}
          id={describedBy}
        >
          {error ?? helperText}
        </span>
      ) : null}
    </div>
  );
}
