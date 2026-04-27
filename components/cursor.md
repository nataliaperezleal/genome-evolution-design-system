---
component: "Cursor"
system: "Genome Evolution DS"
type: "Interaction"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2204-2358"
last_updated: "2026-04-16"
tags: [cursor, pointer, interaction, mouse, ux, prototype]
---

# Cursor — Genome Evolution DS

Biblioteca de 39 cursores del sistema organizados en 7 categorías. Útil en prototipos interactivos y documentación de patrones de interacción. Referencia para CSS `cursor`.

## Quick Reference (AI-optimized)

**Propiedad única:** `Type` — 39 valores. Default: `Pointer 👆`

**Dimensiones:**
- Estándar: 24×24px
- Arrow con badge (➕ ⌛️ 🚫 ❌): 28×40px
- Screenshot 📷, Select Area ✛: 28×28px

**Equivalencias CSS principales:**

| Type Figma | CSS cursor |
|---|---|
| Arrow ↖︎ | `default` |
| Pointer 👆 | `pointer` |
| Input \| | `text` |
| Grab 🖐 | `grab` |
| Grabbed ✊ | `grabbing` |
| Move | `move` |
| Resize ↔︎ | `ew-resize` |
| Resize ↕︎ | `ns-resize` |
| Zoom ➕ | `zoom-in` |
| Zoom ➖ | `zoom-out` |
| Help ？ | `help` |
| Arrow 🚫 | `not-allowed` |
| Cross ✛ | `crosshair` |

## Grupos y valores de Type

**1. Puntero Base (4):** Arrow ↖︎ · Pointer 👆 · Grab 🖐 · Grabbed ✊

**2. Arrow con Badge (4):** Arrow ➕ · Arrow ⌛️ · Arrow 🚫 · Arrow ❌

**3. Herramientas (7):** Move · Zoom ➕ · Zoom ➖ · Clone ↖︎ · Alias ⤤ · Screenshot 📷 · Select Area ✛

**4. Texto y Edición (6):** Input | · ⌶-Horizontal · ⌶-Vertical · Cell ✚ · Cross ✛ · Help ？

**5. Resize (6):** ← → ↑ ↓ ↔︎ ↕︎

**6. Direction (12):** ← → ↑ ↓ ↖︎ ↗︎ ↘︎ ↙︎ ↔︎ ↕︎ ⤡ ⤢

## Semántica clave

- **Grab 🖐** = disponible para arrastrar · **Grabbed ✊** = arrastre en curso.
- **Resize** = cambio de tamaño · **Direction** = movimiento/navegación (semánticas distintas).
- **Arrow 🚫** = acción no permitida (acompañar con `aria-disabled`).

## Combinaciones inválidas
- Direction cuando se necesita Resize.
- Grab y Grabbed indistintamente.
- Arrow con badge sin significado funcional real.

## Token confirmado
- `Input |`: fill `icon/primary` #5f6d62 con `mask-image`.

## Changelog
- `2026-04-16` — 39 variantes en 7 grupos.
