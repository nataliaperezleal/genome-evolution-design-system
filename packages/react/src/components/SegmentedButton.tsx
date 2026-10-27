import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface SegmentedOption {
  label: string;
  value: string;
}

export type SegmentedButtonColor = "default" | "evergreen" | "indigo";
export type SegmentedButtonSize = "md" | "sm";
export type SegmentedButtonState = "default" | "selected" | "hovered" | "pressed" | "focused";

export interface SegmentedButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  options?: SegmentedOption[];
  value?: string;
  onChange?: (value: string) => void;
  text?: string;
  showText?: boolean;
  icon?: ReactNode;
  showIcon?: boolean;
  selected?: boolean;
  state?: SegmentedButtonState;
  color?: SegmentedButtonColor;
  size?: SegmentedButtonSize;
  rounded?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function SegmentedButton({
  options,
  value,
  onChange,
  text = "Section name",
  showText = true,
  icon = "≡",
  showIcon = true,
  selected = false,
  state,
  color = "default",
  size = "md",
  rounded = false,
  className,
  containerProps,
  ...buttonProps
}: SegmentedButtonProps) {
  const resolvedState = state ?? (selected ? "selected" : "default");
  const classes = ["ge-segmented__item", `ge-segmented__item--${color}`, `ge-segmented__item--${size}`, rounded ? "is-rounded" : ""];

  if (options) {
    const { className: containerClassName, ...restContainerProps } = containerProps ?? {};
    const { disabled: groupDisabled } = buttonProps;
    return (
      <div
        className={["ge-segmented", "ge-segmented--group", rounded ? "is-rounded" : "", className, containerClassName].filter(Boolean).join(" ")}
        role="group"
        {...restContainerProps}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={["ge-segmented__item", `ge-segmented__item--${color}`, `ge-segmented__item--${size}`, rounded ? "is-rounded" : "", option.value === value ? "is-selected" : ""].filter(Boolean).join(" ")}
            aria-pressed={option.value === value}
            disabled={groupDisabled}
            onClick={() => onChange?.(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={["ge-segmented", "ge-segmented--single", `ge-segmented--${size}`, rounded ? "is-rounded" : "", className].filter(Boolean).join(" ")}>
      <button
        type="button"
        className={[...classes, resolvedState === "selected" ? "is-selected" : "", resolvedState !== "default" && resolvedState !== "selected" ? `ge-segmented__item--state-${resolvedState}` : ""].filter(Boolean).join(" ")}
        aria-pressed={resolvedState === "selected"}
        {...buttonProps}
      >
        {showIcon ? <span className="ge-segmented__icon" aria-hidden="true">{icon}</span> : null}
        {showText ? text : null}
      </button>
    </div>
  );
}
