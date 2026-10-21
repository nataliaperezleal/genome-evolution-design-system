---
component: "Avatar"
system: "Genome Evolution Design System"
type: "No verificado en Figma"
status: "No verificado en Figma"
version: "No verificado en Figma"
owner: "No verificado en Figma"
figma_node: "https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution?node-id=2040-247"
last_updated: "2026-10-21"
---

# Avatar

Sistema: Genome Evolution Design System

## Resumen del componente

Avatar es un componente con tres valores de Type (Print, Person, Icon), cinco valores de Size y dos valores de State. Los valores de Color Evergreen e Indigo existen para Type=Print.

## Referencia rápida

### Qué es

[Pendiente de confirmación]

Observación verificada: Figma expone tres valores de Type. Print contiene una etiqueta de texto, Person contiene una imagen fotográfica e Icon contiene un único gráfico vectorial.

### Propiedades clave

| Propiedad | Valores disponibles | Valor por defecto |
|-----------|---------------------|-------------------|
| Type | Print, Person, Icon | No verificado en Figma |
| Color | Default, Evergreen, Indigo | No verificado en Figma |
| Size | 16, 24, 32, 40, 48 | No verificado en Figma |
| State | Default, Focused | No verificado en Figma |

Evergreen e Indigo existen solo para Type=Print. Type=Person y Type=Icon existen únicamente con Color=Default.

### Configuración por defecto

[Pendiente de confirmación]

### Uso típico

[Pendiente de confirmación]

## Propósito / Intención

[Pendiente de confirmación]

## Cuándo usarlo

[Pendiente de confirmación]

## Cuándo NO usarlo

[Pendiente de confirmación]

## Estructura (Anatomía)

### Partes del componente

| Parte | Requerida / Opcional | Descripción |
|-------|----------------------|-------------|
| Container | No verificado en Figma | Elemento raíz con la variable radius/24 vinculada en las variantes Type=Print y Type=Person. En Type=Print lleva el relleno y el borde. En Type=Person la raíz no tiene relleno ni borde. |
| Label | No verificado en Figma | Texto centrado presente en las variantes Type=Print. El contenido de muestra en todas las variantes Print es "B". |
| Image | No verificado en Figma | Capa llamada "unsplash:LWkFHEGpleE" en las variantes Type=Person, con un radio de esquina literal de 360px. |
| Icon graphic | No verificado en Figma | Un único gráfico vectorial que ocupa las variantes Type=Icon. No se identifica el glifo por nombre. |
| State indicator | No verificado en Figma | Pequeño elemento en la esquina inferior derecha de las variantes Print y Person, expuesto mediante un interruptor `showState` en la interfaz del componente generada. Su tipo de propiedad en Figma, su valor por defecto, su significado y su color de relleno no están verificados. No está presente en las variantes Type=Icon. |

### Layout

| Propiedad | Valor verificado | Evidencia |
|-----------|------------------|-----------|
| Dimensiones de la variante | Ancho = Alto = valor de Size (16, 24, 32, 40, 48) | Metadatos de Figma, las 50 variantes |
| Radio de esquina (vinculación de token) | La variable radius/24 (valor 24) está vinculada en la raíz de las 30 variantes Type=Print y de las 10 variantes Type=Person | Contexto de diseño de Figma; valor de las definiciones de variables de Figma |
| Radio de esquina (capa de imagen de Person) | 360px literal, no vinculado a una variable | Contexto de diseño de Figma |
| Radio de esquina (Type=Icon) | No se encontró radio en la raíz de las 10 variantes Icon | Contexto de diseño de Figma |
| Borde (Print, Color=Default, State=Default) | 1px, border/strong | Contexto de diseño de Figma |
| Borde (Print, Color=Evergreen o Indigo, State=Default) | Ninguno; solo relleno | Contexto de diseño de Figma |
| Borde (State=Focused, Print y Person) | 2px, border/focus (focus/width). En Person se aplica a la capa de imagen. | Contexto de diseño de Figma |
| Tamaño del indicador de estado | 6 (Size 16), 8 (Size 24), 10 (Size 32), 12 (Size 40), 12 (Size 48) | Contexto de diseño de Figma |
| Posición del indicador de estado (top = left) | Size 16: 9 o 10; Size 24: 15 o 16; Size 32: 21 o 22; Size 40: 27 o 28; Size 48: 35 o 36 | Contexto de diseño de Figma |

La posición del indicador es 1px menor en Print, Color=Default, State=Default que en las demás variantes Print y en las variantes Person, en todos los tamaños. El motivo no está documentado (ver Aclaraciones pendientes).

El radio de esquina renderizado en los Size menores de 48 no se midió de forma independiente. Las medidas son por variante y no se generalizan entre variantes. En las variantes Person e Icon solo se midieron las dimensiones de la raíz, los bordes y la geometría del indicador.

## Semántica

[Pendiente de confirmación]

## Iconografía

| Ranura | Icono / Descripción verificada | Evidencia |
|--------|--------------------------------|-----------|
| Gráfico de Type=Icon | Un único gráfico vectorial por Size y State. El nombre del glifo no está expuesto. | Contexto de diseño de Figma |

## Variantes (Propiedades)

### Type

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Print | Etiqueta de texto dentro de un contenedor | 30 variantes |
| Person | Imagen fotográfica | 10 variantes, solo Color=Default |
| Icon | Un único gráfico vectorial | 10 variantes, solo Color=Default |

### Color

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Print: relleno background/canvas, borde border/strong, etiqueta en text/secondary | Vinculaciones de variables de Figma |
| Evergreen | Print: relleno surface/evergreen/subtle, etiqueta en text/evergreen, sin borde en State=Default | Solo Print |
| Indigo | Print: relleno surface/indigo/subtle, etiqueta en text/indigo, sin borde en State=Default | Solo Print |

### Size

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| 16 | 16 x 16; estilo de etiqueta de Print Text/Label/XS | Figma |
| 24 | 24 x 24; estilo de etiqueta de Print Text/Body/XS Strong | Figma |
| 32 | 32 x 32; estilo de etiqueta de Print Text/Body/SM Strong | Figma |
| 40 | 40 x 40; estilo de etiqueta de Print Text/Body/MD Strong | Figma |
| 48 | 48 x 48; estilo de etiqueta de Print Text/Body/MD Strong | Figma |

### State

| Valor | Descripción verificada | Evidencia / Notas |
|-------|------------------------|-------------------|
| Default | Variante visual | Figma |
| Focused | Variante visual con un anillo de 2px border/focus (ver Estados) | Figma |

Completitud del inventario: se inspeccionaron las 50 variantes listadas en los metadatos del nodo. No se inspeccionaron propiedades definidas fuera de este nodo, si existen.

## Estados

| Estado | Descripción verificada | Cambios visuales | Evidencia |
|--------|------------------------|------------------|-----------|
| Default | Variante visual | Print Color=Default: 1px border/strong. Print Evergreen e Indigo: solo relleno, sin borde. Person e Icon: sin borde. | Figma |
| Focused | Variante visual | Print Color=Default: un border/focus de 2px reemplaza el border/strong de 1px. Print Evergreen e Indigo: hay un border/focus de 2px donde Default no tiene borde. Person: border/focus de 2px en la capa de imagen en los cinco Size. Icon: un recurso gráfico separado cuyo inset es -12.5% (Size 16), -8.33% (24), -6.25% (32), -5% (40) y -4.17% (48), lo que equivale a 2px en cada tamaño por aritmética. El color del anillo del recurso Icon no se verificó. | Figma |

Son únicamente variantes visuales de estado. No demuestran que se haya implementado ninguna interacción, comportamiento de foco o transición de estado.

## Mapeo de tokens

| Categoría | Token | Uso verificado | Evidencia |
|-----------|-------|----------------|-----------|
| Color | background/canvas (#ffffff) | Relleno de Print, Color=Default | Vinculación de variable en Figma |
| Color | border/strong (#5f6d62) | Borde de Print, Color=Default en State=Default | Vinculación de variable en Figma |
| Color | border/focus (#339947) | Borde en State=Focused (Print, Person) | Vinculación de variable en Figma |
| Color | text/secondary (#5f6d62) | Etiqueta de Print, Color=Default | Vinculación de variable en Figma |
| Color | surface/evergreen/subtle (#eefbf2) | Relleno de Print, Color=Evergreen | Vinculación de variable en Figma |
| Color | text/evergreen (#297a39) | Etiqueta de Print, Color=Evergreen | Vinculación de variable en Figma |
| Color | surface/indigo/subtle (#fdf5ff) | Relleno de Print, Color=Indigo | Vinculación de variable en Figma |
| Color | text/indigo (#6b1b99) | Etiqueta de Print, Color=Indigo | Vinculación de variable en Figma |
| Forma | radius/24 (24) | Radio de esquina vinculado en la raíz de las variantes Print y Person. No está vinculado en la capa de imagen de Person (360px literal) ni en las variantes Icon. | Vinculación de variable en Figma |
| Ancho de borde | focus/width (2) | Borde de State=Focused | Vinculación de variable en Figma |
| Tipografía | Text/Label/XS | Etiqueta de Print en Size 16 (family/body, size/11, peso 600, line-height/16, letter-spacing/wide) | Figma |
| Tipografía | Text/Body/XS Strong | Etiqueta de Print en Size 24 (size/12, line-height/16, letter-spacing/normal) | Figma |
| Tipografía | Text/Body/SM Strong | Etiqueta de Print en Size 32 (size/14, line-height/20, espaciado entre letras 0) | Figma |
| Tipografía | Text/Body/MD Strong | Etiqueta de Print en Size 40 y 48 (size/16, line-height/20, letter-spacing/normal) | Figma |

La variable icon/secondary (#849588) se devuelve para este nodo, pero no se estableció su uso en el componente. El ancho de 1px del borde Default no está vinculado a ninguna variable que se pudiera identificar. Los valores de los tokens provienen únicamente de Figma; no se usaron los archivos JSON de tokens del repositorio.

## Interacción

[Pendiente de confirmación]

## Accesibilidad

[Pendiente de confirmación]

## Combinaciones inválidas

[Pendiente de confirmación]

Observación, no una regla: los valores de Color Evergreen e Indigo no se proporcionan para Type=Person ni Type=Icon.

## Lista de verificación de QA

- [x] Identidad del componente y referencias de origen verificadas.
- [ ] Propiedades y valores documentados contrastados con la evidencia disponible de Figma.
- [x] Completitud del inventario de variantes evaluada y limitaciones de inspección documentadas.
- [ ] Valores por defecto verificados, o conflictos sin resolver registrados.
- [ ] Medidas de layout contrastadas con las configuraciones relevantes.
- [ ] Mapeos de tokens verificados contra sus fuentes reales.
- [x] Estados visuales distinguidos del comportamiento interactivo verificado.
- [ ] Afirmaciones de accesibilidad respaldadas por evidencia explícita.
- [ ] Combinaciones inválidas respaldadas por evidencia explícita.
- [x] Recomendaciones distinguidas de las observaciones verificadas.
- [ ] La documentación en inglés y en español es semánticamente equivalente.
- [x] No quedan marcadores de posición de la plantilla sin resolver.
- [x] No quedan instrucciones de la plantilla en el documento final.
- [ ] No se ha añadido información no respaldada o inventada.
- [x] Cambios históricos incluidos solo cuando los respalda un historial de versiones.

## Aclaraciones pendientes

1. Estructura del componente. El nodo 2040:247 es un frame que contiene 50 componentes y no está confirmado como component set. No se inspeccionaron las propiedades definidas fuera de él, si existen. Se resuelve confirmando el component set en Figma.
2. Inventario de propiedades y valores por defecto. No se ha establecido el valor por defecto de Type, Color, Size ni State. La interfaz generada también lista `label` (muestra "B") y `showState`, pero no están verificados si son propiedades de Figma, sus tipos ni sus valores por defecto. Se resuelve confirmando el panel de propiedades del componente en Figma.
3. Indicador de estado. Su propósito, su color de relleno (un recurso SVG que no se abrió) y su condición de propiedad no están verificados. Su posición es 1px menor en Print, Color=Default, State=Default que en otras variantes, y se desconoce si es intencional.
4. Layout y radio. No se concilió el radio de esquina renderizado en los Size menores de 48 ni el radio literal de 360px de la capa de imagen de Person con la vinculación radius/24. El color del anillo de los recursos Icon Focused no está verificado.
5. Tokens. La variable weight/semibold se resuelve al nombre de estilo "Medium" con peso numérico 600. Se desconoce el uso de icon/secondary. El ancho de 1px del borde Default no tiene una variable identificada.
6. No documentado en Figma: propósito, guía de uso, restricciones, semántica, interacción, accesibilidad, combinaciones inválidas, status, version, owner y tags.
7. Imagen de Person. Es una fotografía de marcador de posición. No está documentado si debe poder sustituirse.
8. Colores exclusivos de Print. Se desconoce si la ausencia de Evergreen e Indigo para Person e Icon es intencional.

## Notas / Registro de cambios

Generado o revisado usando el material de origen disponible el 2026-10-21.

[No hay cambios históricos verificados disponibles]
