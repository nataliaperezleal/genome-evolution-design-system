import { useState, type ButtonHTMLAttributes } from "react";

export type SwitchSize = "sm" | "md";
export type SwitchTone = "default" | "evergreen" | "indigo";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  size?: SwitchSize;
  tone?: SwitchTone;
}

export function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  label,
  size = "md",
  tone = "evergreen",
  className,
  disabled,
  ...props
}: SwitchProps) {
  const isControlled = typeof checked === "boolean";
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const resolved = isControlled ? checked : internalChecked;
  const classes = [
    "ge-switch",
    `ge-switch--${size}`,
    `ge-switch--${tone}`,
    resolved ? "is-on" : "",
    disabled ? "is-disabled" : "",
    className
  ].filter(Boolean).join(" ");

  const control = (
    <button
      type="button"
      role="switch"
      aria-checked={resolved}
      aria-label={props["aria-label"] ?? label}
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

  return label ? (
    <span className={`ge-switch-control ge-switch-control--${size}`}>
      {control}
      <span className="ge-switch__label">{label}</span>
    </span>
  ) : control;
}
