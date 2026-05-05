import { useState, type ButtonHTMLAttributes } from "react";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Switch({ checked, defaultChecked = false, onCheckedChange, className, disabled, ...props }: SwitchProps) {
  const isControlled = typeof checked === "boolean";
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const resolved = isControlled ? (checked as boolean) : internalChecked;
  const classes = ["ge-switch", resolved ? "is-on" : "", disabled ? "is-disabled" : "", className].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      role="switch"
      aria-checked={resolved}
      className={classes}
      disabled={disabled}
      onClick={(event) => {
        props.onClick?.(event);
        if (event.defaultPrevented) return;
        const next = !resolved;
        if (!isControlled) setInternalChecked(next);
        onCheckedChange?.(next);
      }}
      {...props}
    >
      <span className="ge-switch__thumb" aria-hidden="true" />
    </button>
  );
}
