---
component: Avatar
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [identidad-usuario, perfil, presencia, estado]
---

# Avatar

## Propósito

Representa visualmente a una persona o entidad mediante una inicial, ícono genérico o imagen real con soporte opcional para indicador de estado. Los avatares muestran la identidad del usuario en listas, tablas, perfiles, comentarios, asignaciones y menciones.

## Referencia Rápida

| Propiedad | Valores | Predeterminado |
|-----------|---------|----------------|
| Type | Icon, Person, Print | Icon |
| Color | Default, Evergreen, Indigo | Default |
| Size | 16, 24, 32, 40, 48 | 32 |
| Show State | true, false | true |
| Label | Texto/Carácter | B |

## Cuándo usar

- Mostrar la identidad del usuario en listas, tablas o perfiles
- Indicar presencia o disponibilidad con indicador de estado
- Representar personas en comentarios, asignaciones o menciones
- Mostrar selección de usuario o filtrado en diseños compactos

## Cuándo NO usar

- Como botón de acción principal
- Cuando el espacio disponible es menor a 16px
- Para representar entidades no personales (usar ícono específico en su lugar)
- Como elemento decorativo sin propósito contextual

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Contenedor | Sí | Fondo cuadrado redondeado | Siempre presente |
| Contenido | Sí | Ícono, foto o inicial | Depende de Type |
| Indicador de estado | No | Punto pequeño coloreado | Solo cuando Show State=true |
| Fondo | Sí | Relleno de color sutil | Visible para tipo Print |
| Borde | Condicional | Borde de enfoque/predeterminado | Visible en estado Focused |

## Propiedades

| Propiedad | Tipo | Predeterminado | Valores | Se aplica a | Descripción |
|-----------|------|----------------|---------|------------|-------------|
| Type | Enum | Icon | Icon, Person, Print | Todos | Define el contenido mostrado: Icon (avatar genérico), Person (foto de usuario), Print (inicial/letra) |
| Color | Enum | Default | Default, Evergreen, Indigo | Todos | Aplica tema de color al fondo y texto. Default usa fondo canvas; Evergreen usa superficie evergreen; Indigo usa superficie indigo |
| Size | Enum | 32 | 16, 24, 32, 40, 48 | Todos | Tamaño en píxeles. Afecta dimensiones del contenedor, tipografía y tamaño del indicador de estado |
| Show State | Boolean | true | true, false | Todos | Controla la visibilidad del punto indicador de estado en la esquina superior izquierda |
| Label | String | B | Cualquier carácter simple | Solo Print | Inicial o carácter a mostrar cuando Type=Print |

## Estados

| Estado | Descripción | Cambios visuales |
|--------|-------------|------------------|
| Default | Apariencia estándar del avatar | Sin modificaciones de borde; opacidad regular |
| Focused | Estado de enfoque interactivo | Borde de enfoque verde (color border/focus); indicador de estado permanece visible |

## Tamaños

| Tamaño | Dimensiones | Tipografía | Tamaño estado | Notas |
|--------|------------|-----------|--------------|-------|
| 16 | 16x16px | Text/Label/XS (11px) | 6x6px | Tamaño mínimo; indicador de estado puede estar apretado |
| 24 | 24x24px | Text/Body/XS Strong (12px) | 8x8px | Tamaño de diseño compacto |
| 32 | 32x32px | Text/Body/SM Strong (14px) | 10x10px | Tamaño predeterminado y recomendado |
| 40 | 40x40px | Text/Body/MD Strong (16px) | 12x12px | Tamaño de diseño grande |
| 48 | 48x48px | Text/Body/MD Strong (16px) | 12x12px | Tamaño extra grande para visualización prominente |

## Mapeo de tokens

### Fondo

- **Type=Print, Color=Default**: background/canvas
- **Type=Print, Color=Evergreen**: surface/evergreen/subtle
- **Type=Print, Color=Indigo**: surface/indigo/subtle
- **Type=Person**: transparente (basado en imagen)
- **Type=Icon**: transparente

### Texto

- **Type=Print, Color=Default**: text/secondary
- **Type=Print, Color=Evergreen**: text/evergreen
- **Type=Print, Color=Indigo**: text/indigo

### Borde

- **Estado predeterminado (Type=Print, Size=24+)**: border/strong
- **Estado Focused**: border/focus (ancho: 2px)

### Ícono

- **Type=Icon, todos los tamaños**: Silueta genérica de persona (varía según tamaño)

### Tipografía

- **Size=16**: Text/Label/XS (family/body, weight/semibold, size/11, lineHeight/16, letterSpacing/wide)
- **Size=24**: Text/Body/XS Strong (family/body, weight/semibold, size/12, lineHeight/16, letterSpacing/normal)
- **Size=32**: Text/Body/SM Strong (family/body, weight/semibold, size/14, lineHeight/20, letterSpacing/normal)
- **Size=40+**: Text/Body/MD Strong (family/body, weight/semibold, size/16, lineHeight/20, letterSpacing/normal)

### Espaciado

- **Posición del indicador de estado**: Esquina superior izquierda, inserto por margen proporcional relativo al tamaño
- **Relleno del contenedor**: Contenido centrado dentro del contenedor

### Radio

- **Contenedor**: radius/24 (cuadrado completamente redondeado)
- **Imagen (Type=Person)**: radius/24
- **Contenedor de ícono**: radius/24

### Sombra

[Pendiente de confirmación]

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| Estado de enfoque | Borde verde visible (2px, color border/focus) |
| Indicador de estado | Solo visual; indica estado de presencia |
| Label (Type=Print) | Contenido de texto accesible para lector de pantalla cuando se proporciona Label |
| Texto alternativo | [Pendiente de confirmación] |

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|----------------|
| Elemento de lista de usuarios | Avatar compacto mostrando identidad del usuario | Type=Icon, Color=Default, Size=32, Show State=true |
| Página de perfil | Avatar grande con foto de usuario | Type=Person, Color=Default, Size=48, Show State=false |
| Insignia inicial | Avatar mostrando inicial de letra | Type=Print, Color=Indigo, Size=40, Label=B, Show State=true |
| Estado enfocado | Avatar en estado de enfoque del teclado | Cualquier combinación + estado Focused |
| Miembro del equipo | Avatar inicial coloreado en evergreen | Type=Print, Color=Evergreen, Size=32, Label=J, Show State=false |
| Lista de menciones | Avatares compactos pequeños | Type=Icon, Color=Evergreen, Size=16, Show State=false |

## Combinaciones inválidas

- **Type=Person sin imagen**: Cae automáticamente a Icon; evite usar Print como alternativa
- **Label con Type=Icon o Type=Person**: La propiedad Label solo se aplica a Type=Print
- **Size=16 con Show State=true**: El indicador de estado puede no renderizarse correctamente debido a restricciones de espacio; use Show State=false para Size=16

## Guías de uso

- Usa avatars para apoyar la identidad, no como imagen decorativa
- Mantén el label en un solo carácter cuando uses el tipo Print
- Prefiere 32px para la mayoría de las superficies y reserva tamaños mayores para perfiles
- Oculta el indicador de estado cuando el espacio sea limitado o la presencia no sea relevante
- Usa el tipo Photo/Person solo cuando la imagen exista y aporte valor

## Notas de implementación

- Conserva la forma completamente redondeada para que se vea consistente en todos los tamaños
- Reserva el foco visual para usos interactivos, como enlaces de perfil o selectores
- Mantén el indicador de estado lo suficientemente pequeño para no competir con el contenido principal
- Asegura un fallback consistente cuando no haya assets de imagen
