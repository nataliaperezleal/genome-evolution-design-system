import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface TabOption {
  label: string;
  value: string;
}

export type TabColor = "default" | "indigo" | "evergreen";
export type TabSize = "md" | "sm";
export type TabState = "default" | "hovered" | "pressed" | "selected" | "focused" | "selected-focused" | "focused-selected";

function TabArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {direction === "left" ? <path d="M13 8H3m0 0 4-4m-4 4 4 4" /> : <path d="M3 8h10m0 0-4-4m4 4-4 4" />}
    </svg>
  );
}

export interface TabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  color?: TabColor;
  size?: TabSize;
  selected?: boolean;
  state?: TabState;
  showLeftIcon?: boolean;
  leftIcon?: ReactNode;
  showText?: boolean;
  text?: string;
  showRightIcon?: boolean;
  rightIcon?: ReactNode;
}

export function Tab({
  color = "default",
  size = "md",
  selected = false,
  state,
  showLeftIcon = true,
  leftIcon = <TabArrow direction="left" />,
  showText = true,
  text = "Tab name",
  showRightIcon = true,
  rightIcon = <TabArrow direction="right" />,
  className,
  ...props
}: TabProps) {
  const resolvedState = state ?? (selected ? "selected" : "default");
  const isSelected = resolvedState === "selected" || resolvedState === "selected-focused" || resolvedState === "focused-selected";
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      className={[
        "ge-tab",
        `ge-tab--${color}`,
        `ge-tab--${size}`,
        isSelected ? "is-active" : "",
        resolvedState !== "default" && !isSelected ? `ge-tab--state-${resolvedState}` : "",
        resolvedState === "selected-focused" || resolvedState === "focused-selected" ? "ge-tab--state-focused" : "",
        className
      ].filter(Boolean).join(" ")}
      {...props}
    >
      {showLeftIcon ? <span className="ge-tab__icon" aria-hidden="true">{leftIcon}</span> : null}
      {showText ? <span>{text}</span> : null}
      {showRightIcon ? <span className="ge-tab__icon" aria-hidden="true">{rightIcon}</span> : null}
    </button>
  );
}

export interface TabListProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "children"> {
  options: TabOption[];
  value: string;
  onChange: (value: string) => void;
  color?: TabColor;
  size?: TabSize;
}

export function TabList({ options, value, onChange, color = "default", size = "md", className, ...props }: TabListProps) {
  return (
    <div className={["ge-tabs", className].filter(Boolean).join(" ")} role="tablist" {...props}>
      {options.map((option) => (
        <Tab
          key={option.value}
          text={option.label}
          color={color}
          size={size}
          selected={option.value === value}
          showLeftIcon={false}
          showRightIcon={false}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}
