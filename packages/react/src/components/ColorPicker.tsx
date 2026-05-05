import { useMemo, useState } from "react";

export interface ColorPickerProps {
  label?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function normalizeHex(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "#000000";
  if (trimmed.startsWith("#")) return trimmed;
  return `#${trimmed}`;
}

export function ColorPicker({ label = "Color", defaultValue = "#297A39", value, onChange }: ColorPickerProps) {
  const isControlled = typeof value === "string";
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const resolved = normalizeHex(isControlled ? value : uncontrolled);

  const ids = useMemo(() => {
    const suffix = Math.random().toString(16).slice(2);
    return { input: `ge-color-${suffix}`, hex: `ge-color-hex-${suffix}` };
  }, []);

  const setValue = (next: string) => {
    const normalized = normalizeHex(next);
    if (!isControlled) setUncontrolled(normalized);
    onChange?.(normalized);
  };

  return (
    <div className="ge-color-picker">
      <div className="ge-color-picker__header">
        <label className="ge-color-picker__label" htmlFor={ids.input}>
          {label}
        </label>
        <div className="ge-color-picker__value" id={ids.hex}>
          {resolved.toUpperCase()}
        </div>
      </div>
      <div className="ge-color-picker__body">
        <div className="ge-color-picker__swatch" style={{ background: resolved }} aria-hidden="true" />
        <input
          id={ids.input}
          className="ge-color-picker__input"
          type="color"
          value={resolved}
          aria-describedby={ids.hex}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
}

