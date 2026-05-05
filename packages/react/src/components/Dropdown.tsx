import type { ReactNode, SelectHTMLAttributes } from "react";

export interface DropdownOption {
  label: ReactNode;
  value: string;
}

export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  helperText?: string;
  error?: string;
  options: DropdownOption[];
}

export function Dropdown({ label, helperText, error, options, className, id, ...props }: DropdownProps) {
  const selectId = id ?? props.name ?? `ge-dropdown-${Math.random().toString(16).slice(2)}`;
  const message = error ?? helperText;

  return (
    <div className={["ge-field", className].filter(Boolean).join(" ")}>
      {label ? (
        <label className="ge-field__label" htmlFor={selectId}>
          {label}
        </label>
      ) : null}
      <select id={selectId} className={["ge-input", error ? "ge-input--error" : ""].filter(Boolean).join(" ")} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {message ? (
        <div className={["ge-field__message", error ? "ge-field__message--error" : ""].filter(Boolean).join(" ")}>{message}</div>
      ) : null}
    </div>
  );
}

