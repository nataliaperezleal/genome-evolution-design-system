import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent, PointerEvent } from "react";
import { ClearButton } from "./ClearButton";

export type ColorPickerType = "Solid" | "Gradient";

export interface ColorPickerProps {
  label?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: ColorPickerType;
  onTypeChange?: (type: ColorPickerType) => void;
}

// HSV instead of HSL — matches the Figma design canvas behavior
type Hsva = { h: number; s: number; v: number; a: number };
type GradientStop = { position: number; hex: string; opacity: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function normalizeHex(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "#000000";

  const normalized = trimmed.startsWith("#") ? trimmed.slice(1) : trimmed;
  if (/^[0-9a-fA-F]{3}$/.test(normalized)) {
    return `#${normalized[0]}${normalized[0]}${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}`;
  }
  if (/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return `#${normalized}`;
  }
  if (/^[0-9a-fA-F]{8}$/.test(normalized)) {
    return `#${normalized}`;
  }
  return "#000000";
}

function parseColor(value: string) {
  const rgbaRegex =
    /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d*\.?\d+))?\s*\)/i;
  const rgbaMatch = value.match(rgbaRegex);

  if (rgbaMatch) {
    const r = clamp(Number(rgbaMatch[1]), 0, 255);
    const g = clamp(Number(rgbaMatch[2]), 0, 255);
    const b = clamp(Number(rgbaMatch[3]), 0, 255);
    const a = clamp(Number(rgbaMatch[4] ?? "1"), 0, 1);
    return { r, g, b, a };
  }

  const hex = normalizeHex(value);
  const hexValue = hex.slice(1);
  let r = 0, g = 0, b = 0, a = 1;

  if (hexValue.length === 6) {
    r = parseInt(hexValue.slice(0, 2), 16);
    g = parseInt(hexValue.slice(2, 4), 16);
    b = parseInt(hexValue.slice(4, 6), 16);
  } else if (hexValue.length === 8) {
    r = parseInt(hexValue.slice(0, 2), 16);
    g = parseInt(hexValue.slice(2, 4), 16);
    b = parseInt(hexValue.slice(4, 6), 16);
    a = parseInt(hexValue.slice(6, 8), 16) / 255;
  }

  return { r, g, b, a };
}

function rgbToHex(r: number, g: number, b: number, a = 1) {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");
  if (a >= 1) return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(Math.round(a * 255))}`;
}

// --- HSV <-> RGB conversions (correct for the Figma canvas) ---
function rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number } {
  const rr = r / 255, gg = g / 255, bb = b / 255;
  const max = Math.max(rr, gg, bb), min = Math.min(rr, gg, bb);
  const delta = max - min;

  let h = 0;
  const s = max === 0 ? 0 : delta / max;
  const v = max;

  if (delta !== 0) {
    if (max === rr) h = ((gg - bb) / delta) % 6;
    else if (max === gg) h = (bb - rr) / delta + 2;
    else h = (rr - gg) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  return { h, s, v };
}

function hsvToRgb(h: number, s: number, v: number) {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let rr = 0, gg = 0, bb = 0;

  if (h < 60)       { rr = c; gg = x; }
  else if (h < 120) { rr = x; gg = c; }
  else if (h < 180) { gg = c; bb = x; }
  else if (h < 240) { gg = x; bb = c; }
  else if (h < 300) { rr = x; bb = c; }
  else              { rr = c; bb = x; }

  return {
    r: Math.round((rr + m) * 255),
    g: Math.round((gg + m) * 255),
    b: Math.round((bb + m) * 255),
  };
}

function rgbaToCss(r: number, g: number, b: number, a: number) {
  return a >= 1 ? rgbToHex(r, g, b, a) : `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
}

function hsvaToCss(color: Hsva) {
  const { r, g, b } = hsvToRgb(color.h, color.s, color.v);
  return rgbaToCss(r, g, b, color.a);
}

function parseToHsva(value: string): Hsva {
  const { r, g, b, a } = parseColor(value);
  const { h, s, v } = rgbToHsv(r, g, b);
  return { h, s, v, a };
}

function opacityToPercent(value: number) {
  return `${Math.round(value * 100)}%`;
}

export function ColorPicker({
  label = "Color",
  defaultValue = "#297A39",
  value,
  onChange,
  type,
  onTypeChange,
}: ColorPickerProps) {
  const isControlled = typeof value === "string";
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [mode, setMode] = useState<ColorPickerType>(type ?? "Solid");
  const [swatches, setSwatches] = useState([
    "#23748f",
    "#185467",
    "#98d2e6",
    "#eaf6fa",
    "#70c0dc",
    "#47aed2",
    "#0f323e",
  ]);
  const [gradientStops, setGradientStops] = useState<GradientStop[]>([
    { position: 0, hex: "#edf7f7", opacity: 1 },
    { position: 100, hex: "#23748f", opacity: 1 },
  ]);
  const [draggingStop, setDraggingStop] = useState<number | null>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  const currentValue = isControlled ? value : uncontrolled;
  // Use HSV for correct canvas behavior
  const color = useMemo(() => parseToHsva(currentValue), [currentValue]);

  useEffect(() => {
    if (typeof type === "string") setMode(type);
  }, [type]);

  useEffect(() => {
    if (draggingStop === null) return;

    const move = (event: globalThis.PointerEvent) => {
      if (!gradientRef.current) return;
      const rect = gradientRef.current.getBoundingClientRect();
      const next = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
      setGradientStops((current) =>
        current.map((stop, index) =>
          index === draggingStop ? { ...stop, position: next } : stop
        )
      );
    };

    const stop = () => setDraggingStop(null);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };
  }, [draggingStop]);

  const activeMode = type ?? mode;

  const setValue = (next: string) => {
    const normalized = normalizeHex(next);
    if (!isControlled) setUncontrolled(normalized);
    onChange?.(normalized);
  };

  const setHsva = (next: Partial<Hsva>) => {
    const updated = { ...color, ...next };
    const css = hsvaToCss(updated);
    if (!isControlled) {
      const { r, g, b } = hsvToRgb(updated.h, updated.s, updated.v);
      const hex = updated.a >= 1 ? rgbToHex(r, g, b) : css;
      setUncontrolled(hex);
    }
    onChange?.(css);
  };

  const addSwatch = () => {
    const hex = hsvaToCss(color);
    if (swatches.includes(hex)) return;
    setSwatches((prev) => [hex, ...prev].slice(0, 7));
  };

  const setModeValue = (nextMode: ColorPickerType) => {
    if (typeof type === "string") onTypeChange?.(nextMode);
    else setMode(nextMode);
  };

  const selectedSwatch = swatches.includes(hsvaToCss(color)) ? hsvaToCss(color) : undefined;

  const gradientStopsOrdered = [...gradientStops].sort((a, b) => a.position - b.position);
  const gradientCss = `linear-gradient(90deg, ${gradientStopsOrdered
    .map(
      (stop) =>
        `${rgbaToCss(...(Object.values(parseColor(stop.hex)) as [number, number, number, number]))} ${stop.position}%`
    )
    .join(", ")})`;

  const setStopField = (index: number, field: keyof GradientStop, raw: string) => {
    setGradientStops((current) =>
      current.map((stop, stopIndex) => {
        if (stopIndex !== index) return stop;
        if (field === "position") {
          const v = clamp(Number(raw.replace(/[^0-9]/g, "")), 0, 100);
          return { ...stop, position: Number.isNaN(v) ? stop.position : v };
        }
        if (field === "hex") {
          return { ...stop, hex: normalizeHex(raw) };
        }
        if (field === "opacity") {
          const v = clamp(Number(raw.replace(/[^0-9.]/g, "")) / 100, 0, 1);
          return { ...stop, opacity: Number.isNaN(v) ? stop.opacity : v };
        }
        return stop;
      })
    );
  };

  const removeStop = (index: number) => {
    setGradientStops((current) =>
      current.length > 2 ? current.filter((_, i) => i !== index) : current
    );
  };

  // Canvas pointer — maps x→saturation, y→value (HSV, not HSL)
  const handleCanvasPointer = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const rect = event.currentTarget.getBoundingClientRect();
    const nextS = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const nextV = clamp(1 - (event.clientY - rect.top) / rect.height, 0, 1);
    setHsva({ s: nextS, v: nextV });
  };

  const handleCanvasPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nextS = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const nextV = clamp(1 - (event.clientY - rect.top) / rect.height, 0, 1);
    setHsva({ s: nextS, v: nextV });
  };

  // Compute current hex for display
  const { r: cr, g: cg, b: cb } = hsvToRgb(color.h, color.s, color.v);
  const currentHex = rgbToHex(cr, cg, cb).toUpperCase();
  const currentSwatchColor = hsvToRgb(color.h, color.s, color.v);

  // Pure hue color for canvas background (full sat + full value)
  const hueColor = (() => {
    const { r, g, b } = hsvToRgb(color.h, 1, 1);
    return `rgb(${r}, ${g}, ${b})`;
  })();

  // Alpha slider background
  const alphaGradient = `linear-gradient(90deg, rgba(${cr},${cg},${cb},0) 0%, rgb(${cr},${cg},${cb}) 100%)`;

  return (
    <div className="ge-color-picker ge-color-picker--panel">
      {/* Tabs */}
      <div className="ge-color-picker__tabs">
        {(["Solid", "Gradient"] as ColorPickerType[]).map((option) => (
          <button
            key={option}
            type="button"
            className={`ge-color-picker__tab ${activeMode === option ? "ge-color-picker__tab--active" : ""}`}
            onClick={() => setModeValue(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {activeMode === "Solid" ? (
        <>
          {/*
           * CANVAS — HSV gradient:
           *   Layer 1 (bottom): pure hue color → white (left to right)
           *   Layer 2 (top):    transparent → black (top to bottom)
           * The handle position maps x→saturation, y→(1-value)
           */}
          <div
            className="ge-color-picker__canvas"
            onPointerDown={handleCanvasPointer}
            onPointerMove={handleCanvasPointerMove}
            style={{
              background: hueColor,
              position: "relative",
              width: "100%",
              height: "152px",
              borderRadius: "var(--radius-4, 4px)",
              cursor: "crosshair",
              overflow: "hidden",
              userSelect: "none",
            }}
          >
            {/* White → transparent (horizontal) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, #ffffff 0%, transparent 100%)",
              }}
            />
            {/* Transparent → black (vertical) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 0%, #000000 100%)",
              }}
            />
            {/* Handle / swatch dot */}
            <div
              className="ge-color-picker__canvas-handle"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: `${color.s * 100}%`,
                top: `${(1 - color.v) * 100}%`,
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                border: "2px solid #f7f8f7",
                boxShadow: "0 0 0 2px rgba(0,0,0,0.25)",
                background: `rgb(${currentSwatchColor.r}, ${currentSwatchColor.g}, ${currentSwatchColor.b})`,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Hue slider */}
          <div className="ge-color-picker__slider-row">
            <input
              id="ge-color-picker-hue"
              className="ge-color-picker__slider ge-color-picker__slider--hue"
              type="range"
              min={0}
              max={360}
              value={color.h}
              onChange={(event) => setHsva({ h: Number(event.target.value) })}
              style={{
                width: "100%",
                height: "8px",
                borderRadius: "24px",
                appearance: "none",
                background:
                  "linear-gradient(90deg, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
                outline: "none",
                cursor: "pointer",
              }}
            />
          </div>

          {/* Opacity/Alpha slider */}
          <div className="ge-color-picker__slider-row" style={{ position: "relative" }}>
            {/* Checkerboard pattern underneath */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "24px",
                backgroundImage:
                  "repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%)",
                backgroundSize: "8px 8px",
                pointerEvents: "none",
              }}
            />
            <input
              id="ge-color-picker-alpha"
              className="ge-color-picker__slider ge-color-picker__slider--opacity"
              type="range"
              min={0}
              max={100}
              value={Math.round(color.a * 100)}
              onChange={(event) => setHsva({ a: Number(event.target.value) / 100 })}
              style={{
                position: "relative",
                width: "100%",
                height: "8px",
                borderRadius: "24px",
                appearance: "none",
                background: alphaGradient,
                outline: "none",
                cursor: "pointer",
                margin: "0px",
              }}
            />
          </div>
              
          {/* Hex + opacity fields */}
          <div className="ge-color-picker__fields">
            <button type="button" className="ge-color-picker__format-field">
              Hex <span className="ge-color-picker__format-chevron">▾</span>
            </button>
            <input
              className="ge-color-picker__field"
              value={currentHex}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
            />
            <input
              className="ge-color-picker__field"
              value={opacityToPercent(color.a)}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setHsva({
                  a: clamp(Number(event.target.value.replace(/[^0-9]/g, "")) / 100, 0, 1),
                })
              }
            />
          </div>
        </>
      ) : (
        <>
        <div className="ge-color-picker__section-label">Gradient color</div>
        <div style={{ paddingTop: "0px", position: "relative" }}>
          
          
  <div
    className="ge-color-picker__gradient-bar"
    ref={gradientRef}
    style={{
      background: gradientCss,
      position: "relative",
      height: "41px",
      borderRadius: "2px",
      overflow: "visible",
    }}
  >
    {gradientStopsOrdered.map((stop, index) => (
      <button
        key={`${stop.hex}-${stop.position}`}
        type="button"
        className="ge-color-picker__gradient-handle"
        style={{
          position: "absolute",
          left: `${stop.position}%`,
          top: "-14px",
          transform: "translateX(-50%)",
          width: "14px",
          height: "14px",
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "ew-resize",
        }}
        onPointerDown={(event) => {
          event.preventDefault();
          setDraggingStop(gradientStops.findIndex((item) => item === stop));
        }}
        aria-label={`Move stop ${index + 1}`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect
            x="7" y="0.7"
            width="9" height="9"
            rx="1.5"
            transform="rotate(45 7 0.7)"
            fill={stop.hex}
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </svg>
      </button>
    ))}
  </div>
</div>

          <div className="ge-color-picker__section-label">Stops</div>

          <div className="ge-color-picker__stop-grid">
            {gradientStopsOrdered.map((stop, index) => (
              <div key={`${stop.hex}-${stop.position}`} className="ge-color-picker__stop-row">
                <input
                  className="ge-color-picker__field ge-color-picker__field--small"
                  value={`${Math.round(stop.position)}%`}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setStopField(index, "position", event.target.value)
                  }
                />
                <input
                  className="ge-color-picker__field ge-color-picker__field--small"
                  value={stop.hex.toUpperCase()}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setStopField(index, "hex", event.target.value)
                  }
                />
                <input
                  className="ge-color-picker__field ge-color-picker__field--small"
                  value={opacityToPercent(stop.opacity)}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setStopField(index, "opacity", event.target.value)
                  }
                />
                <button
                  type="button"
                  className="ge-color-picker__stop-remove"
                  onClick={() => removeStop(index)}
                  disabled={gradientStopsOrdered.length <= 2}
                  aria-label="Remove stop"
                >
                  —
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/*
       * "My colors library" + swatches always at the bottom,
       * after the mode-specific controls — matching the Figma layout.
       */}
      <div className="ge-color-picker__row">
        <div className="ge-color-picker__palette-label">My colors library</div>
        <ClearButton typeTone="default" tone="indigo" onClick={addSwatch}>
          Add
        </ClearButton>
      </div>

      <div className="ge-color-picker__swatches">
        {swatches.map((swatch) => (
          <button
            key={swatch}
            type="button"
            className={`ge-color-picker__swatch-chip ${selectedSwatch === swatch ? "ge-color-picker__swatch-chip--selected" : ""}`}
            style={{ background: swatch }}
            aria-pressed={selectedSwatch === swatch}
            onClick={() => setValue(swatch)}
          />
        ))}
      </div>
    </div>
  );
}