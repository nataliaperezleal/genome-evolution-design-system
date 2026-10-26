---
component: "Thinking-ia"
system: "Genome Evolution Design System"
type: "Indicador de pasos del proceso de IA"
status: "Design"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=3924-4713"
last_updated: "2026-10-23"
tags:
  - "ai"
  - "thinking"
  - "progress"
---

# Thinking-ia

Sistema: Genome Evolution Design System

## Resumen del componente

Paso individual del proceso de trabajo de una IA, mostrado como un icono y un texto breve, con una línea conectora opcional hacia el siguiente paso. Está disponible en dos estados: `Done` y `Changing`.

## Referencia rápida

### Qué es

Interpretación basada en evidencia: Thinking-ia muestra lo que la IA está haciendo o ya hizo mientras prepara una respuesta. La evidencia:

- El nombre del componente ("thinking", pensando).
- El paso de ejemplo "Read documents" ("Leer documentos") con un icono `Search`.
- Una línea conectora vertical debajo del icono que enlaza con el siguiente paso.
- Dos estados: `Done` está atenuado y `Changing` usa colores primarios, lo que sugiere el paso en curso.

No se encontró una descripción escrita del componente en Figma.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| State | Done, Changing | Done (según Figma MCP) |
| Text (texto) | Texto libre | "Read documents" (según Figma MCP) |
| Icono (intercambio de instancia) | Cualquier instancia de icono | `Search` (según Figma MCP) |
| Mostrar línea (booleana) | true, false | true (según Figma MCP) |

Los nombres de las propiedades de texto, de intercambio de instancia y booleana se indican tal como los expone Figma MCP (`text`, `icon`, `showLine`); no se verificaron sus nombres exactos en el panel de propiedades de Figma.

### Configuración por defecto

Figma MCP reporta `State=Done`, el texto "Read documents", el icono `Search` y la línea visible. Esto coincide con la primera variante del conjunto (`State=Done`, nodo `3924:4697`). Figma no documenta por escrito un valor por defecto aparte.

### Uso típico

Observaciones verificadas:

- Cada instancia es un paso: un icono de 16 px y un texto de 12 px, con una línea vertical de 10 px debajo del icono.
- `Done` usa colores atenuados (`icon/secondary`, `text/tertiary`); `Changing` usa colores primarios (`icon/primary`, `text/primary`).

Interpretación basada en evidencia:

- Apila varias instancias verticalmente para mostrar la secuencia de pasos que sigue la IA (por ejemplo, leer documentos, analizar datos, generar un resultado).
- Usa `Changing` para el paso en curso y `Done` para los pasos completados.
- Desactiva Mostrar línea en el último paso para que el conector no lleve a un espacio vacío.
- Cambia el icono según la acción de cada paso.

## Propósito / Intención

### Problema que resuelve

Interpretación basada en evidencia: Thinking-ia hace visible el trabajo de la IA mientras el usuario espera, para que entienda qué está ocurriendo y cuánto ha avanzado el proceso.

### Resultado esperado

Interpretación basada en evidencia: El usuario puede ver qué pasos están completos y cuál está en curso.

### Contexto típico

Interpretación basada en evidencia: Experiencias de conversación y construcción con IA, probablemente cerca o dentro de las respuestas de `Chat-ia` mientras se genera una respuesta. Esta relación no está definida en Figma.

## Cuándo usar

Interpretación basada en evidencia (no documentada como guía oficial en Figma):

- Para mostrar los pasos de un proceso de IA mientras se ejecuta o una vez terminado.
- Cuando un proceso tiene varias acciones diferenciadas que vale la pena nombrar.

## Cuándo NO usar

[No se encontraron restricciones documentadas]

Recomendación (no es una regla establecida del sistema de diseño): Para una espera única y sin pasos nombrados, puede bastar con el estado `Charging` de `Chat-ia`.

## Estructura (Anatomía)

### Composición

```
Thinking-ia (358 px)
├── Fila de tarea (2 px de relleno vertical, 8 px de espacio)
│   ├── Icono (intercambio de instancia, 16 px)
│   └── Texto (propiedad Text, 12 px)
└── Línea conectora (Mostrar línea), 16 × 10 px, línea vertical centrada bajo el icono
```

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Icono | Requerida | Instancia de icono intercambiable de 16 px, por defecto `Search`. `icon/secondary` en `Done`, `icon/primary` en `Changing`. |
| Texto | Requerida | Texto de 12 px en una sola línea (`Text/Body/XS`). `text/tertiary` en `Done`, `text/primary` en `Changing`. |
| Línea conectora | Opcional | Línea vertical de 10 px en `border/default`, centrada bajo el icono. Se controla con Mostrar línea. |

### Lógica de orden

Interpretación basada en evidencia: Los pasos se apilan de arriba abajo en el orden en que la IA los realiza. La línea conectora de cada paso lleva al icono del paso siguiente, y la línea del último paso se oculta. Figma no ofrece un componente contenedor que imponga este orden.

### Disposición

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Ancho | 358 px, fijo | Dimensiones de variante |
| Altura | 30 px con línea (fila de 20 px + línea de 10 px) | Dimensiones de variante |
| Relleno vertical de la fila | 2 px (`space/2`) | Vinculación de variable |
| Espacio entre icono y texto | 8 px (`gap/sm`) | Vinculación de variable |
| Tamaño de icono | 16 × 16 px | Dimensiones de capa |
| Conector | Marco de 16 × 10 px con una línea centrada de 1 px | Dimensiones de capa |

## Semántica

Interpretación basada en evidencia: Cada instancia es un paso de un proceso. `Done` significa que el paso está completo; `Changing` muy probablemente significa que el paso está en curso. El conector expresa la secuencia entre pasos.

Elementos HTML, atributos ARIA (por ejemplo, regiones status o live) y comportamiento con lector de pantalla: No verificado en Figma.

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Icono | `Search` por defecto, 16 px, intercambiable; `icon/secondary` (Done) o `icon/primary` (Changing) | Capa, vinculaciones de variables, propiedad de intercambio de instancia |

## Variantes (Propiedades)

El inventario de variantes es completo: se inspeccionaron 2 variantes.

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Done | Icono (`icon/secondary`) y texto (`text/tertiary`) atenuados. | Vinculaciones de variables |
| Changing | Icono (`icon/primary`) y texto (`text/primary`) primarios. | Vinculaciones de variables |

### Text, Icono, Mostrar línea

- Text: texto del paso. Valor por defecto reportado: "Read documents".
- Icono: icono del paso. Por defecto: `Search`.
- Mostrar línea: muestra u oculta el conector bajo el icono. Valor por defecto reportado: `true`.

## Estados

Estos son estados visuales definidos como variantes. No prueban que las transiciones ni las animaciones estén implementadas.

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Done | Paso completado (interpretación) | Icono y texto atenuados | Vinculaciones de variables |
| Changing | Paso en curso (interpretación) | Icono y texto primarios | Vinculaciones de variables |

## Mapeo de tokens

Todos los tokens siguientes se verificaron mediante vinculaciones de variables de Figma.

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Icono | `icon/secondary`, `icon/primary` | Icono en Done / Changing | Vinculaciones de variables |
| Texto | `text/tertiary`, `text/primary` | Texto en Done / Changing | Vinculaciones de variables |
| Borde | `border/default` | Línea conectora | Vinculación de variable |
| Tipografía | `Text/Body/XS` | Texto (12/16) | Estilo de texto |
| Espaciado | `space/2`, `gap/sm` | Relleno de la fila; espacio entre icono y texto | Vinculaciones de variables |

## Interacción

No hay estados interactivos ni interacciones de prototipo.

No verificado en Figma: animación del paso en curso, si la lista de pasos se puede contraer o expandir, y si los pasos se pueden seleccionar para ver detalles.

## Comportamiento de desbordamiento

Observación verificada: El texto ocupa una sola línea sin ajuste, dentro de un ancho fijo de 358 px.

No verificado en Figma: truncado de textos largos y comportamiento del conector si un texto necesitara más de una línea.

## Accesibilidad

Observaciones relacionadas con la accesibilidad:

- `Done` y `Changing` solo se diferencian por el color (atenuado frente a primario). Ningún cambio de icono o de texto los distingue.
- `Done` usa `text/tertiary`, con menos contraste que `text/primary`.

Información de accesibilidad faltante (no verificada en Figma): anuncio de los cambios de paso a las tecnologías de asistencia, nombres accesibles para los iconos y cumplimiento de contraste.

## Guía de contenido

Observación verificada: El texto de ejemplo es una frase verbal breve en inglés ("Read documents").

Recomendación: Usa frases verbales breves que describan cada acción (por ejemplo, "Leer documentos", "Analizar datos").

## Ejemplos

### Paso completado

Configuración: `State=Done`, Mostrar línea `true`

Descripción: Icono de búsqueda y texto "Read documents" atenuados, con un conector hacia el siguiente paso.

Evidencia / Clasificación: Variante existente en Figma (`3924:4697`).

### Paso en curso

Configuración: `State=Changing`, Mostrar línea `true`

Descripción: Icono de búsqueda y texto en colores primarios.

Evidencia / Clasificación: Variante existente en Figma (`3924:4714`).

## Combinaciones no válidas

[No se encontraron combinaciones no válidas documentadas]

## Aclaraciones pendientes

1. **Significado y nombre de `Changing`.** `Changing` parece significar "en curso". Confirma su significado, si debe renombrarse (por ejemplo, `In progress`) y si se necesitan estados adicionales, como pasos pendientes o fallidos, o una animación para el paso activo.
2. **Los estados solo se diferencian por el color.** `Done` y `Changing` solo difieren en el color del icono y del texto. Confirma si se necesita un indicador que no dependa del color (por ejemplo, un icono de check o un indicador de carga).
3. **Contenedor de la lista de pasos.** Figma no define un contenedor para una secuencia de pasos, cuántos pasos pueden aparecer, dónde se ubica la lista (por ejemplo, dentro de `Chat-ia`) ni si se puede contraer. Confirma la composición prevista.
4. **Textos largos.** Los textos ocupan una sola línea dentro de un ancho fijo de 358 px, y no hay truncado definido. Confirma cómo deben comportarse los textos largos.

## Notas / Registro de cambios

Generado a partir de evidencia de Figma (nodo `3924:4713`) el 2026-10-23.

[No hay cambios históricos verificados disponibles]
