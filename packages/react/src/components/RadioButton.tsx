import type { HTMLAttributes } from "react";

export interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

export interface RadioButtonGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "children"> {
  label?: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
}

export function RadioButtonGroup({
  label,
  options,
  value,
  defaultValue,
  onChange,
  name = `ge-radio-${Math.random().toString(16).slice(2)}`,
  className,
  ...props
}: RadioButtonGroupProps) {
  const isControlled = typeof value === "string";
  const resolved = isControlled ? value : defaultValue ?? options[0]?.value ?? "";

  return (
    <div className={["ge-radio-group", className].filter(Boolean).join(" ")} {...props}>
      {label ? <div className="ge-radio-group__label">{label}</div> : null}
      <div className="ge-radio-group__options">
        {options.map((option) => (
          <label key={option.value} className="ge-radio">
            <input
              className="ge-radio__input"
              type="radio"
              name={name}
              value={option.value}
              checked={resolved === option.value}
              onChange={(event) => onChange?.(event.target.value)}
              readOnly={!onChange && isControlled}
            />
            <span className="ge-radio__dot" aria-hidden="true" />
            <span className="ge-radio__copy">
              <span className="ge-radio__title">{option.label}</span>
              {option.description ? <span className="ge-radio__desc">{option.description}</span> : null}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

