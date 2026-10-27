import type { HTMLAttributes, ReactNode } from "react";
import { Checkbox } from "./Checkbox";
import { Switch } from "./Switch";

export type ListVariant = "unordered" | "ordered";
export type ListSize = "sm" | "md";
export type ListType = "list" | "header";
export type ListState = "default" | "hover" | "pressed" | "selected" | "focused";

export interface ListItem {
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export interface ListProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  text?: ReactNode;
  type?: ListType;
  state?: ListState;
  variant?: ListVariant;
  size?: ListSize;
  items?: ListItem[];
  leftSide?: boolean;
  showLeftCheckBox?: boolean;
  showLeftSwitch?: boolean;
  showLeftIcon?: boolean;
  leftIcon?: ReactNode;
  rightSide?: boolean;
  showRightCheckBox?: boolean;
  showRightSwitch?: boolean;
  showRightIcon?: boolean;
  rightIcon?: ReactNode;
}

export function List({
  text = "List item",
  type = "list",
  state = "default",
  variant = "unordered",
  size = "md",
  items,
  leftSide = false,
  showLeftCheckBox = true,
  showLeftSwitch = true,
  showLeftIcon = true,
  leftIcon = "≡",
  rightSide = false,
  showRightCheckBox = true,
  showRightSwitch = true,
  showRightIcon = true,
  rightIcon = "≡",
  className,
  ...props
}: ListProps) {
  const classes = ["ge-list", `ge-list--${size}`, `ge-list--${type}`, `ge-list--state-${state}`, items && text === undefined ? "ge-list--collection" : "", className]
    .filter(Boolean)
    .join(" ");
  const Root = variant === "ordered" ? "ol" : "ul";
  const resolvedItems = items ?? (text === undefined ? [] : [{ title: text }]);

  const renderSide = (side: "left" | "right") => {
    const enabled = side === "left" ? leftSide : rightSide;
    if (!enabled) return null;
    const showCheckBox = side === "left" ? showLeftCheckBox : showRightCheckBox;
    const showSwitch = side === "left" ? showLeftSwitch : showRightSwitch;
    const showIcon = side === "left" ? showLeftIcon : showRightIcon;
    const icon = side === "left" ? leftIcon : rightIcon;

    return (
      <span className={`ge-list__side ge-list__side--${side}`}>
        {showCheckBox ? <Checkbox disabled={false} aria-label={`${side} list checkbox`} /> : null}
        {showSwitch ? <Switch size="sm" aria-label={`${side} list switch`} /> : null}
        {showIcon ? <span className="ge-list__icon" aria-hidden="true">{icon}</span> : null}
      </span>
    );
  };

  return (
    <Root className={classes} {...props}>
      {resolvedItems.map((item, index) => (
        <li key={item.id ?? `${index}`} className="ge-list__item">
          {item.leading ? <div className="ge-list__leading">{item.leading}</div> : renderSide("left")}
          <div className="ge-list__body">
            <div className="ge-list__row">
              <div className="ge-list__title">{item.title}</div>
              {item.meta ? <div className="ge-list__meta">{item.meta}</div> : null}
            </div>
            {item.description ? <div className="ge-list__description">{item.description}</div> : null}
          </div>
          {item.trailing ? <div className="ge-list__trailing">{item.trailing}</div> : renderSide("right")}
        </li>
      ))}
    </Root>
  );
}
