import { useState } from "react";
import { ColorPicker } from "@genome-evolution/react";

export default function ColorPickerDemo({ width = 420 }: { width?: number }) {
  const [color, setColor] = useState("#4f46e5");

  return (
    <div style={{ width }}>
      <ColorPicker label="Brand" defaultValue={color} onChange={(next) => setColor(next)} />
    </div>
  );
}
