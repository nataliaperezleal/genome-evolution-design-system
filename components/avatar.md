---
component: "Avatar"
system: "Genome Plus Design System"
type: "Identity"
status: "Production"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2040-247"
last_updated: "2026-04-09"
tags: [avatar, identity, user, presence]
---

# Avatar — Genome Plus Design System

Representa visualmente a una persona o entidad mediante inicial, ícono genérico o imagen real, con soporte opcional para indicador de estado.

## Quick Reference (AI-optimized)

**Propiedades clave:**
- `Type` [`Icon` | `Person` | `Print`] — default: `Icon`
- `Color` [`Default` | `Evergreen` | `Indigo`] — default: `Default`
- `Size` [`16` | `24` | `32` | `40` | `48`] — default: `32`
- `Show state` [`true` | `false`] — default: `True`
- `Letter` — Carácter visible cuando Type=Print. Default: `B`

**Combinaciones inválidas:**
- `Type=Person` sin imagen asignada (fallback a Icon; no usar Print).
- `Letter` visible cuando `Type=Icon` o `Type=Person` (Letter solo aplica a Print).
- `Size=16` con `Show state=true` (indicador no cabe en tamaño mínimo).

**Snippets de uso frecuente:**
- Lista de usuarios activos: `Type=Icon, Color=Default, Size=32, Show state=true`
- Perfil con foto: `Type=Person, Color=Default, Size=40, Show state=false`
- Avatar con inicial: `Type=Print, Color=Indigo, Size=40, Letter=B, Show state=true`
- Miniatura compacta: `Type=Icon, Color=Evergreen, Size=16, Show state=false`

## When to Use / When NOT to Use

### ✅ Usar cuando
- Identificar a una persona en listas, tablas o perfiles.
- Indicar presencia o disponibilidad con indicador de estado.
- No hay imagen y se necesita fallback con inicial o ícono.

### ❌ Evitar cuando
- Se busca un botón de acción (usar Button).
- Se representa una entidad no personal (empresa, proyecto).
- El espacio disponible es menor a 16px.

## Variants

### Type
- `Icon` — Silueta humana genérica. Fallback sin datos de usuario.
- `Person` — Fotografía real recortada en círculo.
- `Print` — Inicial de texto centrada.

### Color
- `Default` — Fondo/borde en tono neutro.
- `Evergreen` — Fondo/borde en verde de marca.
- `Indigo` — Fondo/borde en índigo de marca.

### Size
- `16` — Solo sin indicador de estado.
- `24` — Compacto. Listas densas.
- `32` — Estándar. Uso general.
- `40` — Perfiles y cabeceras secundarias.
- `48` — Cabeceras de perfil protagonistas.

### Show state
- `true` — Punto verde en esquina inferior derecha.
- `false` — Sin indicador.

## Accessibility

- `aria-label` con nombre completo: `aria-label="Avatar de Juan Pérez"`.
- Si muestra estado: `aria-label="Juan Pérez, activo"`.
- Si interactivo: focusable con Tab, activable con Enter/Space.
- Target mínimo interactivo: 32px recomendado.

## Changelog
- `2026-04-09` — v1.0. Documentación inicial.
