import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Checkbox({ label, helperText, error, className, id, ...props }: CheckboxProps) {
  const checkboxId = id ?? props.name ?? `ge-checkbox-${Math.random().toString(16).slice(2)}`;
  const message = error ?? helperText;
  const messageTone = error ? "error" : "helper";

  return (
    <div className={["ge-check-field", className].filter(Boolean).join(" ")}>
      <label className="ge-check" htmlFor={checkboxId}>
        <input id={checkboxId} className="ge-check__input" type="checkbox" {...props} />
        <span className="ge-check__box" aria-hidden="true" />
        {label ? <span className="ge-check__label">{label}</span> : null}
      </label>
      {message ? <div className={`ge-check__message ge-check__message--${messageTone}`}>{message}</div> : null}
    </div>
  );
}

