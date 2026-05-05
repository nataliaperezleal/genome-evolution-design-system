import type { ButtonHTMLAttributes } from "react";

export interface SegmentedOption {
  label: string;
  value: string;
}

export interface SegmentedButtonProps extends Omit<ButtonHTMLAttributes<HTMLDivElement>, "onChange"> {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
}

export function SegmentedButton({ options, value, onChange, className, ...props }: SegmentedButtonProps) {
  return (
    <div className={["ge-segmented", className].filter(Boolean).join(" ")} role="group" {...(props as any)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={["ge-segmented__item", option.value === value ? "is-selected" : ""].filter(Boolean).join(" ")}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

