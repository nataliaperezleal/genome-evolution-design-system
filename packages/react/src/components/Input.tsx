import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Input({ label, helperText, error, id, className, ...props }: InputProps) {
  const inputId = id ?? `ge-input-${label?.toLowerCase().replace(/\s+/g, "-") ?? "field"}`;
  const describedBy = error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined;

  return (
    <label className={`ge-field ${className ?? ""}`.trim()} htmlFor={inputId}>
      {label ? <span className="ge-field__label">{label}</span> : null}
      <input
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className="ge-input"
        id={inputId}
        {...props}
      />
      {error ? (
        <span className="ge-field__message ge-field__message--error" id={`${inputId}-error`}>
          {error}
        </span>
      ) : helperText ? (
        <span className="ge-field__message" id={`${inputId}-helper`}>
          {helperText}
        </span>
      ) : null}
    </label>
  );
}
