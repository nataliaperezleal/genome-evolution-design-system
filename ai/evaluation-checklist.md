# Evaluation Checklist — Genome Plus DS

Lista de verificación para evaluar si una propuesta de UI generada por IA es correcta.

## ✅ Checklist general

- [ ] Todos los componentes usados existen en `manifest.json`.
- [ ] No hay valores hardcoded de color, spacing o tipografía.
- [ ] No hay combinaciones de propiedades inválidas (ver `ai/invalid-combinations.md`).
- [ ] Cada componente tiene todas sus propiedades especificadas.
- [ ] El componente elegido es el más específico para el caso de uso.
- [ ] Los estados interactivos están contemplados (hover, pressed, focused, disabled).
- [ ] Los textos cumplen la guía de contenido del componente.
- [ ] Los tokens de foco son correctos: `border/focus` (#339947), 2px.

## ✅ Checklist de accesibilidad

- [ ] Contraste mínimo 4.5:1 en todos los textos.
- [ ] Focus ring visible en todos los elementos interactivos.
- [ ] `aria-label` presente cuando no hay texto visible.
- [ ] No se depende solo del color para comunicar estado.
- [ ] Targets táctiles mínimo 32px (preferiblemente 40px).

## ✅ Checklist semántico

- [ ] Se usó Button (no Link) para acciones.
- [ ] Se usó Link (no Button) para navegación.
- [ ] Se usó Checkbox (no Radio) para selección múltiple.
- [ ] Se usó Radio (no Checkbox) para selección exclusiva.
- [ ] Se usó Switch (no Checkbox) para activar/desactivar en tiempo real.
- [ ] Badge solo contiene valores numéricos (no texto).
