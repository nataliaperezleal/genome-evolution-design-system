import type { HTMLAttributes } from "react";

export interface TabOption {
  label: string;
  value: string;
}

export interface TabListProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "children"> {
  options: TabOption[];
  value: string;
  onChange: (value: string) => void;
}

export function TabList({ options, value, onChange, className, ...props }: TabListProps) {
  return (
    <div className={["ge-tabs", className].filter(Boolean).join(" ")} role="tablist" {...props}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={option.value === value}
          className={["ge-tab", option.value === value ? "is-active" : ""].filter(Boolean).join(" ")}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

