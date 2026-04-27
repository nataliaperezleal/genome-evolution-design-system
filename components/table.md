---
component: "Table"
system: "Genome Evolution DS"
type: "Data Display"
status: "Production"
figma_nodes:
  table: "2192:2382"
  header_assets: "2192:2096"
  cell_assets: "2192:1922"
last_updated: "2026-04-17"
tags: [table, data, grid, header, cell, rows, columns]
---

# Table System — Genome Evolution DS

Sistema de tres componentes interrelacionados: **Table** (orquestador), **.TableHeaderAssets** (cabeceras) y **.TableCellAssets** (celdas).

## Arquitectura

```
Table (orquestador)
├── Columna 1 (siempre visible)
│   ├── .TableHeaderAssets (Type=Header)
│   └── .TableCellAssets (row1 siempre + row2-10 opcionales)
├── Columna 2 (column2=true)
│   ├── .TableHeaderAssets
│   └── .TableCellAssets × filas
└── ... hasta Columna 10
```

**Tokens comunes a todo el sistema:**

| Elemento | Token | Valor |
|---|---|---|
| Fondo (header y celdas) | `background/canvas` | #ffffff |
| Borde inferior header | `border/strong` | #5f6d62 1px |
| Texto header | `text/primary` | #2d342f |
| Primera línea celda | `text/primary` | #2d342f |
| Segunda línea celda | `text/secondary` | #5f6d62 |
| Padding H | `space/16` | 16px |

## .TableHeaderAssets (node 2192:2096)

**Propiedades:**
- `Type` [`Header` | `Icon Header`] — default: `Header`
- `firstIcon` — sort icon (arrow-down 12px). Default: `true`
- `secondIcon` — filter icon (12px). Default: `true`

| Type | Ancho | Alto |
|---|---|---|
| Header | 230px | 32px |
| Icon Header | 48px | 32px |

- Header: `Text/Button/MD` 14/16 semibold, `text/primary`. Gap `gap/s` 8px.
- Icon Header: `bizagi-lines` 16×16px centrado, sin texto.

## .TableCellAssets (node 2192:1922)

**Propiedades:**
- `Type` [`Cell` | `Icon Cell`] — default: `Cell`
- `Size` [`Small` | `Medium` | `Large`] — default: `Small`
- `icon`, `title`, `content` — default: `true`

| Type | Size | Ancho | Alto | Padding V |
|---|---|---|---|---|
| Cell | Small | 230px | 40px | `space/4` 4px |
| Cell | Medium | 230px | 48px | `space/8` 8px |
| Cell | Large | 230px | 64px | `space/16` 16px |
| Icon Cell | Small | 48px | 24px | `space/4` 4px |
| Icon Cell | Medium | 48px | 32px | `space/8` 8px |
| Icon Cell | Large | 48px | 48px | `space/16` 16px |

- Cell: ícono 16×16px + columna texto 174px (title `text/primary` + content `text/secondary`).
- Tipografía celdas: `Text/Body/XS` 12/16 regular.

## Table (node 2192:2382)

**Props booleanos:**
- `column2`...`column10` — activa columnas (default: false).
- `row2`...`row10` — activa filas (default: false).
- Columna 1 y fila 1 siempre visibles, sin prop.

## Accessibility
- `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th scope="col">`, `<td>` nativos.
- `firstIcon` (sort): `aria-sort="ascending/descending/none"`.

## Changelog
- `2026-04-17` — Todos los tokens migrados a sistema. Bug row6 corregido.
