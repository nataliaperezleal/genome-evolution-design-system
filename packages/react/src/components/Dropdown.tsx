import { useState, type ReactNode, type SelectHTMLAttributes } from "react";
import { Button } from "./Button";

export interface DropdownOption {
  label: ReactNode;
  value: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export type DropdownContent = "items" | "slots";
export type DropdownPresentation = "field" | "panel";

export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  helperText?: string;
  error?: string;
  options?: DropdownOption[];
  content?: DropdownContent;
  presentation?: DropdownPresentation;
  buttonLabel?: string;
  onValueChange?: (value: string) => void;
  onApply?: () => void;
  children?: ReactNode;
}

const defaultOptions: DropdownOption[] = Array.from({ length: 10 }, (_, index) => ({
  label: "Item list",
  value: `item-${index + 1}`
}));

export function Dropdown({
  label,
  helperText,
  error,
  options = defaultOptions,
  content = "items",
  presentation,
  buttonLabel = "Button",
  onValueChange,
  onApply,
  children,
  className,
  id,
  value,
  defaultValue,
  disabled,
  ...props
}: DropdownProps) {
  const resolvedPresentation = presentation ?? (label || helperText || error ? "field" : "panel");
  const selectId = id ?? props.name ?? `ge-dropdown-${Math.random().toString(16).slice(2)}`;
  const [internalValue, setInternalValue] = useState(String(defaultValue ?? ""));
  const selectedValue = value === undefined ? internalValue : String(value);
  const message = error ?? helperText;

  if (resolvedPresentation === "field") {
    return (
      <div className={["ge-field", className].filter(Boolean).join(" ")}>
        {label ? <label className="ge-field__label" htmlFor={selectId}>{label}</label> : null}
        <select
          id={selectId}
          className={["ge-input", error ? "ge-input--error" : ""].filter(Boolean).join(" ")}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {message ? (
          <div className={["ge-field__message", error ? "ge-field__message--error" : ""].filter(Boolean).join(" ")}>
            {message}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={["ge-dropdown", `ge-dropdown--${content}`, className].filter(Boolean).join(" ")}>
      <div className="ge-dropdown__list" role="listbox" aria-label={label ?? "Options"} aria-disabled={disabled}>
        {content === "slots" && children
          ? children
          : options.map((option) => (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={selectedValue === option.value}
                className="ge-dropdown__option"
                disabled={disabled}
                onClick={() => {
                  if (value === undefined) setInternalValue(option.value);
                  onValueChange?.(option.value);
                }}
              >
                {content === "items" ? (
                  <>
                    <span className="ge-dropdown__leading">{option.leadingIcon ?? "+"}</span>
                    <span className="ge-dropdown__label">{option.label}</span>
                    <span className="ge-dropdown__trailing">{option.trailingIcon ?? "›"}</span>
                  </>
                ) : option.label}
              </button>
            ))}
      </div>
      <span className="ge-dropdown__scroll" aria-hidden="true"><span /></span>
      <footer className="ge-dropdown__footer">
        <Button size="sm" onClick={onApply}>{buttonLabel}</Button>
      </footer>
    </div>
  );
}
