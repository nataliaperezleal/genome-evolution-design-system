# Elevación — Genome Evolution Design System

El sistema publica valores base de posición y desenfoque en `elevation.base.position.<valor>` y `elevation.base.blur.<valor>`. Actualmente no publica tokens de rol para elevación. Las recetas siguientes son combinaciones ilustrativas de esos valores base y del token de color con transparencia `color.primitive.light.palette.alpha.300`; sus nombres son etiquetas, no nombres de tokens.

## Recetas ilustrativas de sombra

| Nivel | X | Y | Desenfoque | Color |
|---|---|---:|---:|---:|---|
| `none` | 0px | 0px | 0px | transparente |
| `xs` | 1px | 1px | 1px | `#d9deda99` |
| `sm` | 2px | 2px | 2px | `#d9deda99` |
| `md` | 2px | 4px | 4px | `#d9deda99` |
| `lg` | 2px | 4px | 8px | `#d9deda99` |
| `overlay` | 2px | 4px | 16px | `#d9deda99` |

## Tokens base

Los valores de posición y desenfoque de estos ejemplos están disponibles en `elevation.base.position.<valor>` y `elevation.base.blur.<valor>`. El color de sombra se lee de `color.primitive.light.palette.alpha.300`.

## Uso

- Considera estas combinaciones como una guía, no como tokens de rol publicados para elevación.
- Reserva el ejemplo `overlay` para capas superpuestas y modales. Usa `none` en superficies planas.
- Evita las sombras en elementos pequeños, como insignias o etiquetas, cuando baste con un borde o color de superficie.
