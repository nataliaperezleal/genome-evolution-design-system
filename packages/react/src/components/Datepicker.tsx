import { useEffect, useState, type ChangeEventHandler, type InputHTMLAttributes } from "react";
import { Button } from "./Button";

export type DatepickerType = "numbers" | "month" | "year";
export type DatepickerSize = "sm" | "md";
export type DatepickerTone = "evergreen" | "indigo";
export type DatepickerPresentation = "field" | "panel";

export interface DatepickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "onChange"> {
  label?: string;
  helperText?: string;
  error?: string;
  type?: DatepickerType;
  size?: DatepickerSize;
  tone?: DatepickerTone;
  showButtons?: boolean;
  showConventions?: boolean;
  presentation?: DatepickerPresentation;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onDateChange?: (date: string) => void;
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdayNames = ["S", "M", "T", "W", "T", "F", "S"];
const monthOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function dateToString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(value?: string) {
  if (!value) return new Date();
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function dateWithinBounds(date: Date, min?: string | number, max?: string | number) {
  const value = dateToString(date);
  const lower = min === undefined ? "" : String(min);
  const upper = max === undefined ? "" : String(max);
  return (!lower || value >= lower) && (!upper || value <= upper);
}

export function Datepicker({
  label,
  helperText,
  error,
  type = "numbers",
  size = "sm",
  tone = "evergreen",
  showButtons = true,
  showConventions = true,
  presentation,
  onDateChange,
  onChange,
  className,
  id,
  value,
  defaultValue,
  min,
  max,
  disabled,
  required,
  name,
  ...inputProps
}: DatepickerProps) {
  const resolvedPresentation = presentation ?? (label || helperText || error ? "field" : "panel");
  const inputId = id ?? name ?? `ge-date-${Math.random().toString(16).slice(2)}`;
  const message = error ?? helperText;
  const [internalDate, setInternalDate] = useState(String(defaultValue ?? ""));
  const selectedValue = value === undefined ? internalDate : String(value);
  const selectedDate = parseDate(selectedValue);
  const [visibleDate, setVisibleDate] = useState(selectedDate);
  const [view, setView] = useState(type);
  const [pendingDate, setPendingDate] = useState(selectedValue);
  const controlled = value !== undefined;

  useEffect(() => setView(type), [type]);
  useEffect(() => {
    const nextValue = String(value ?? defaultValue ?? "");
    setPendingDate(nextValue);
    if (nextValue) setVisibleDate(parseDate(nextValue));
  }, [value, defaultValue]);

  if (resolvedPresentation === "field") {
    return (
      <div className={["ge-field", className].filter(Boolean).join(" ")}>
        {label ? <label className="ge-field__label" htmlFor={inputId}>{label}</label> : null}
        <input
          id={inputId}
          name={name}
          className={["ge-input", error ? "ge-input--error" : ""].filter(Boolean).join(" ")}
          type="date"
          value={value}
          defaultValue={defaultValue}
          min={min}
          max={max}
          disabled={disabled}
          required={required}
          onChange={(event) => {
            if (!controlled) setInternalDate(event.target.value);
            onChange?.(event);
            onDateChange?.(event.target.value);
          }}
          {...inputProps}
        />
        {message ? (
          <div className={["ge-field__message", error ? "ge-field__message--error" : ""].filter(Boolean).join(" ")}>
            {message}
          </div>
        ) : null}
      </div>
    );
  }

  const commitDate = (date: string) => {
    if (!controlled) setInternalDate(date);
    setPendingDate(date);
    onDateChange?.(date);
  };
  const selectDate = (date: string) => {
    setPendingDate(date);
    setVisibleDate(parseDate(date));
    if (!showButtons) commitDate(date);
  };
  const displayedYear = visibleDate.getFullYear();
  const displayedMonth = visibleDate.getMonth();
  const monthLabel = `${monthNames[displayedMonth]} ${displayedYear}`.toUpperCase();
  const monthStartOffset = new Date(displayedYear, displayedMonth, 1).getDay();
  const visibleDayCount = Math.ceil((monthStartOffset + new Date(displayedYear, displayedMonth + 1, 0).getDate()) / 7) * 7;
  const firstVisibleDate = new Date(displayedYear, displayedMonth, 1 - monthStartOffset);
  const yearsStart = Math.floor(displayedYear / 24) * 24;
  const dateForAction = parseDate(pendingDate || selectedValue);

  const changePeriod = (direction: -1 | 1) => {
    setVisibleDate((date) => {
      if (view === "numbers") return new Date(date.getFullYear(), date.getMonth() + direction, 1);
      if (view === "month") return new Date(date.getFullYear() + direction, date.getMonth(), 1);
      return new Date(date.getFullYear() + direction * 24, date.getMonth(), 1);
    });
  };

  const classes = ["ge-datepicker", `ge-datepicker--${size}`, `ge-datepicker--${tone}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} aria-label="Date picker">
      <header className="ge-datepicker__header">
        <button type="button" aria-label="Previous period" onClick={() => changePeriod(-1)}>‹</button>
        <button
          type="button"
          className="ge-datepicker__heading"
          aria-label="Change calendar view"
          onClick={() => setView(view === "numbers" ? "month" : "year")}
        >
          {view === "numbers" ? monthLabel : view === "month" ? displayedYear : `${yearsStart}-${yearsStart + 23}`}
          <span aria-hidden="true">⌄</span>
        </button>
        <button type="button" aria-label="Next period" onClick={() => changePeriod(1)}>›</button>
      </header>
      {view === "numbers" ? (
        <div className="ge-datepicker__days" role="grid" aria-label={monthLabel}>
          {weekdayNames.map((day, index) => <span key={index} className="ge-datepicker__weekday">{day}</span>)}
          {Array.from({ length: visibleDayCount }, (_, index) => {
            const date = new Date(firstVisibleDate.getFullYear(), firstVisibleDate.getMonth(), firstVisibleDate.getDate() + index);
            const dateString = dateToString(date);
            const opaque = date.getMonth() !== displayedMonth;
            const selected = dateString === pendingDate;
            const hasConvention = showConventions && !opaque && [2, 12, 22].includes(date.getDate());
            const unavailable = !dateWithinBounds(date, min, max);
            return (
              <button
                key={dateString}
                type="button"
                role="gridcell"
                aria-selected={selected}
                aria-label={`${date.toLocaleDateString()}${hasConvention ? ", Convention" : ""}`}
                className={[
                  "ge-datepicker__day",
                  opaque ? "is-opaque" : "",
                  selected ? "is-selected" : "",
                  hasConvention ? "is-convention" : ""
                ].filter(Boolean).join(" ")}
                disabled={disabled || unavailable}
                onClick={() => selectDate(dateString)}
              >
                <span className="ge-datepicker__day-number">{date.getDate()}</span>
                {hasConvention ? (
                  <span className="ge-datepicker__day-markers" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : view === "month" ? (
        <div className="ge-datepicker__month-grid">
          {monthOptions.map((month, index) => (
            <button
              key={month}
              type="button"
              className={["ge-datepicker__period", index === displayedMonth ? "is-selected" : ""].filter(Boolean).join(" ")}
              onClick={() => {
                setVisibleDate(new Date(displayedYear, index, 1));
                setView("numbers");
              }}
            >
              {month.slice(0, 3)}
            </button>
          ))}
        </div>
      ) : (
        <div className="ge-datepicker__year-grid">
          {Array.from({ length: 24 }, (_, index) => yearsStart + index).map((year) => (
            <button
              key={year}
              type="button"
              className={["ge-datepicker__period", year === displayedYear ? "is-selected" : ""].filter(Boolean).join(" ")}
              onClick={() => {
                setVisibleDate(new Date(year, displayedMonth, 1));
                setView("month");
              }}
            >
              {year}
            </button>
          ))}
        </div>
      )}
      {showButtons ? (
        <footer className="ge-datepicker__actions">
          <Button size={size} variant="tertiary" onClick={() => setPendingDate(selectedValue)}>Cancel</Button>
          <Button size={size} tone={tone} onClick={() => commitDate(dateToString(dateForAction))}>Apply</Button>
        </footer>
      ) : null}
      {showConventions && view === "numbers" ? (
        <div className="ge-datepicker__conventions" aria-label="Conventions">
          {["first", "second", "third"].map((item) => (
            <span key={item} className="ge-datepicker__convention">
              <i aria-hidden="true" />
              Convention
            </span>
          ))}
        </div>
      ) : null}
    </section>
  );
}
