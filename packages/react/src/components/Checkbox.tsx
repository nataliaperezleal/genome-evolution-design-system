import { useEffect, useId, useRef, type InputHTMLAttributes, type ReactNode } from "react";

export type CheckboxColor = "default" | "evergreen" | "indigo";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  helperText?: string;
  error?: string;
  color?: CheckboxColor;
  indeterminate?: boolean;
  icon?: ReactNode;
}

export function Checkbox({
  label,
  helperText,
  error,
  color = "default",
  indeterminate = false,
  icon,
  className,
  id,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? props.name ?? `ge-checkbox-${generatedId}`;
  const message = error ?? helperText;
  const messageTone = error ? "error" : "helper";
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <div className={["ge-check-field", `ge-check--${color}`, className].filter(Boolean).join(" ")}>
      <label className="ge-check" htmlFor={checkboxId}>
        <input
          ref={inputRef}
          id={checkboxId}
          className="ge-check__input"
          type="checkbox"
          aria-checked={indeterminate ? "mixed" : undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? `${checkboxId}-message` : undefined}
          {...props}
        />
        <span className="ge-check__box" aria-hidden="true" />
        {icon ? <span className="ge-check__icon" aria-hidden="true">{icon}</span> : null}
        {label ? <span className="ge-check__label">{label}</span> : null}
      </label>
      {message ? (
        <div id={`${checkboxId}-message`} className={`ge-check__message ge-check__message--${messageTone}`}>
          {message}
        </div>
      ) : null}
    </div>
  );
}
