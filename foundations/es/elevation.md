# Elevación — Genome Evolution Design System

Las recetas de elevación se publican como `color.role.light.elevation.<nivel>`. La página de documentación muestra estas recetas con sus valores canónicos de posición y desenfoque.

## Recetas de sombra

| Nivel | Token | X | Y | Desenfoque | Color |
|---|---|---:|---:|---:|---|
| `none` | `color.role.light.elevation.none` | 0px | 0px | 0px | transparente |
| `xs` | `color.role.light.elevation.xs` | 1px | 1px | 1px | `#d9deda99` |
| `sm` | `color.role.light.elevation.sm` | 2px | 2px | 2px | `#d9deda99` |
| `md` | `color.role.light.elevation.md` | 2px | 4px | 4px | `#d9deda99` |
| `lg` | `color.role.light.elevation.lg` | 2px | 4px | 8px | `#d9deda99` |
| `overlay` | `color.role.light.elevation.overlay` | 2px | 4px | 16px | `#d9deda99` |

## Tokens base

Los valores de posición y desenfoque de estas recetas están disponibles en `elevation.base.position.<valor>` y `elevation.base.blur.<valor>`.

## Uso

- Usa la receta de elevación que corresponda a la jerarquía del componente; no inventes valores de sombra.
- Reserva `overlay` para capas superpuestas y modales. Usa `none` en superficies planas.
- Evita las sombras en elementos pequeños, como insignias o etiquetas, cuando baste con un borde o color de superficie.
