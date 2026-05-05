import type { InputHTMLAttributes } from "react";

export interface DatepickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Datepicker({ label, helperText, error, className, id, ...props }: DatepickerProps) {
  const inputId = id ?? props.name ?? `ge-date-${Math.random().toString(16).slice(2)}`;
  const message = error ?? helperText;
  return (
    <div className={["ge-field", className].filter(Boolean).join(" ")}>
      {label ? (
        <label className="ge-field__label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={["ge-input", error ? "ge-input--error" : ""].filter(Boolean).join(" ")}
        type="date"
        {...props}
      />
      {message ? (
        <div className={["ge-field__message", error ? "ge-field__message--error" : ""].filter(Boolean).join(" ")}>{message}</div>
      ) : null}
    </div>
  );
}

