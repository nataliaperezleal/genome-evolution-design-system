import type { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children"> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function TextArea({ label, helperText, error, className, id, ...props }: TextAreaProps) {
  const areaId = id ?? props.name ?? `ge-textarea-${Math.random().toString(16).slice(2)}`;
  const message = error ?? helperText;

  return (
    <div className={["ge-field", className].filter(Boolean).join(" ")}>
      {label ? (
        <label className="ge-field__label" htmlFor={areaId}>
          {label}
        </label>
      ) : null}
      <textarea
        id={areaId}
        className={["ge-input", "ge-textarea", error ? "ge-input--error" : ""].filter(Boolean).join(" ")}
        {...props}
      />
      {message ? (
        <div className={["ge-field__message", error ? "ge-field__message--error" : ""].filter(Boolean).join(" ")}>{message}</div>
      ) : null}
    </div>
  );
}

