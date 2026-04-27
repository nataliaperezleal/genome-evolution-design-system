# Token Usage Rules — Genome Plus DS

Reglas para aplicar tokens correctamente en el sistema.

## Regla fundamental

**Nunca usar valores hardcoded.** Siempre usar tokens del sistema.

❌ `color: #339947`
✅ `color: var(--border/focus)`

## Colores de marca

| Token | Valor | Uso |
|---|---|---|
| `background/canvas` | #ffffff | Fondo base de componentes |
| `text/primary` | #2d342f | Texto principal |
| `text/secondary` | #5f6d62 | Texto secundario |
| `text/disabled` | #849588 | Texto deshabilitado |
| `text/inverse` | blanco | Texto sobre fondos oscuros |
| `border/default` | #c3cbc5 | Bordes en reposo |
| `border/strong` | #5f6d62 | Bordes enfatizados |
| `border/focus` | #339947 | Anillo de foco (2px) |
| `border/evergreen` | #297a39 | Bordes en variante Evergreen |
| `border/indigo` | #6b1b99 | Bordes en variante Indigo |
| `background/interactive/hovered` | #f7f8f7 | Hover de elementos interactivos |
| `background/interactive/pressed` | #e9ecea | Pressed de elementos interactivos |
| `background/disabled` | #f4f6f4 | Fondo deshabilitado |

## Espaciado

| Token | Valor |
|---|---|
| `space/2` | 2px |
| `space/4` | 4px |
| `space/8` | 8px |
| `space/16` | 16px |
| `gap/sm` | 8px |

## Tipografía

| Token | Valor |
|---|---|
| `family/body` | Open Sans |
| `family/display` | display font |
| `family/mono` | monospace |
| `size/12` | 12px |
| `size/14` | 14px |
| `weight/regular` | 400 |
| `weight/medium` | 500 |
| `weight/semibold` | 600 |
| `weight/bold` | 700 |

## Warning es especial

El color `Warning` en Badge (y en componentes que lo usen) siempre usa `text/primary` para el texto,
NO `text/warning`, porque el amarillo sobre fondo claro no tiene contraste suficiente.
