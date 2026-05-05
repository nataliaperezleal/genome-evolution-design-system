import type { HTMLAttributes, ReactNode } from "react";

export type ListVariant = "unordered" | "ordered";
export type ListSize = "sm" | "md";

export interface ListItem {
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export interface ListProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  variant?: ListVariant;
  size?: ListSize;
  items: ListItem[];
}

export function List({ variant = "unordered", size = "md", items, className, ...props }: ListProps) {
  const classes = ["ge-list", `ge-list--${size}`, className].filter(Boolean).join(" ");
  const Root = variant === "ordered" ? "ol" : "ul";

  return (
    <Root className={classes} {...props}>
      {items.map((item, index) => (
        <li key={item.id ?? `${index}`} className="ge-list__item">
          {item.leading ? <div className="ge-list__leading">{item.leading}</div> : null}
          <div className="ge-list__body">
            <div className="ge-list__row">
              <div className="ge-list__title">{item.title}</div>
              {item.meta ? <div className="ge-list__meta">{item.meta}</div> : null}
            </div>
            {item.description ? <div className="ge-list__description">{item.description}</div> : null}
          </div>
          {item.trailing ? <div className="ge-list__trailing">{item.trailing}</div> : null}
        </li>
      ))}
    </Root>
  );
}

