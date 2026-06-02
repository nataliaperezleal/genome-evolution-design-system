---
component: Breadcrumb
system: Genome Evolution Design System
type: Component
status: Design
version: 1.0
owner: UX Design Team
last_updated: 2026-06-02
tags: [navegacion, jerarquia, breadcrumb, orientacion]
---

# Breadcrumb

## Propósito

Muestra la ubicación actual del usuario dentro de una jerarquía navegacional. Muestra las migas de pan como una ruta de enlaces, permitiendo a los usuarios comprender la estructura de la página y navegar hacia atrás a través de niveles jerárquicos. Proporciona contexto y permite navegación rápida a páginas principales.

## Referencia Rápida

| Propiedad | Valores | Predeterminado |
|-----------|---------|----------------|
| Color | Default, Evergreen, Indigo | Default |
| Show Overflow | true, false | true |
| Show Level 1-5 | true, false | true (todos los niveles mostrados) |

## Cuándo usar

- Mostrar ubicación actual de la página en estructuras jerárquicas
- Habilitar navegación hacia atrás a través de niveles jerárquicos
- Proporcionar contexto para páginas profundamente anidadas
- Mostrar relaciones de página en navegación multinivel
- Reducir clics necesarios para navegar a páginas principales
- Aclarar posición en arquitecturas de información complejas
- Crear contexto de orientación en aplicaciones grandes

## Cuándo NO usar

- Para navegación plana (un solo nivel)
- Cuando la navegación primaria es suficiente
- Para aplicaciones pequeñas sin jerarquía
- En páginas de destino o páginas índice principales
- Cuando el espacio es extremadamente limitado
- Como reemplazo para navegación principal
- Para sitios web de marketing sin jerarquía

## Anatomía

| Parte | Requerida | Descripción | Condición |
|-------|-----------|-------------|-----------|
| Contenedor | Sí | Contenedor horizontal para elementos de breadcrumb | Siempre presente |
| Elemento Breadcrumb | Sí | Nivel individual en jerarquía | Al menos uno (página actual) |
| Etiqueta de texto | Sí | Nombre de nivel o página | Siempre presente en elemento |
| Separador | Condicional | Ícono de chevron entre elementos | Entre elementos no finales |
| Elemento de desbordamiento | Condicional | Puntos suspensivos (...) para niveles colapsados | Cuando Show Overflow=true |
| Elemento actual | Sí | Elemento final mostrando página actual | Siempre último elemento |

## Propiedades

| Propiedad | Tipo | Predeterminado | Valores | Descripción |
|-----------|------|----------------|---------|-------------|
| Color | Enum | Default | Default, Evergreen, Indigo | Color semántico para elemento de página actual |
| Show Overflow | Boolean | true | true, false | Muestra/oculta elemento de desbordamiento (...) para niveles colapsados |
| Show Level 1 | Boolean | true | true, false | Muestra/oculta primer nivel (raíz) |
| Show Level 2 | Boolean | true | true, false | Muestra/oculta segundo nivel |
| Show Level 3 | Boolean | true | true, false | Muestra/oculta tercer nivel |
| Show Level 4 | Boolean | true | true, false | Muestra/oculta cuarto nivel |
| Show Level 5 | Boolean | true | true, false | Muestra/oculta quinto nivel (actual) |

## Niveles de jerarquía

| Nivel | Posición | Rol | Ejemplo |
|-------|----------|-----|---------|
| Overflow | Primero (si se muestra) | Indicador colapsado | ... |
| Level 1 | Raíz | Casa o raíz de categoría | Productos |
| Level 2 | Secundario | Primera categoría | Electrónica |
| Level 3 | Terciario | Segunda categoría | Computadoras |
| Level 4 | Cuaternario | Tercera categoría | Portátiles |
| Level 5 | Actual | Ubicación página actual | MacBook Pro |

## Estados de elemento

| Tipo de elemento | Descripción | Visual |
|------------------|-------------|--------|
| Overflow | Indicador de niveles colapsados | "..." en semibold |
| Level | Nivel de jerarquía intermedio | Texto + separador de chevron |
| Current | Ubicación página final/actual | Texto (sin separador siguiente) |

## Variantes de color

| Color | Texto actual | Texto nivel | Separador | Caso de uso |
|-------|--------------|------------|-----------|------------|
| Default | text/primary | text/secondary | Chevron predeterminado | Estilo neutro, predeterminado |
| Evergreen | text/evergreen | text/secondary | Chevron evergreen | Contexto éxito, positivo |
| Indigo | text/indigo | text/secondary | Chevron indigo | Contexto primario, marca |

## Mapeo de tokens

### Texto

- **Elemento overflow**: Text/Button/MD (semibold, 14px)
- **Elementos nivel**: Text/Body/SM (regular, 14px)
- **Elemento actual**: Text/Button/MD (semibold, 14px)
- **Color=Default, Actual**: text/primary
- **Color=Evergreen, Actual**: text/evergreen
- **Color=Indigo, Actual**: text/indigo
- **Elementos nivel**: text/secondary (todos los colores)

### Iconos

- **Separador**: chevron-right (12px)
- **Color ícono coincide con color texto actual**

### Espaciado

- **Relleno horizontal**: space/8 por elemento
- **Relleno vertical**: space/8 por elemento
- **Brecha entre texto y chevron**: gap/sm (8px)
- **Brecha entre elementos**: Sin brecha (chevron es separador)

### Radio

- **Fondo elemento**: radius/4

### Tipografía

- **Todo texto**: family/body
- **Overflow/Actual**: weight/semibold
- **Niveles**: weight/regular
- **Tamaño**: size/14
- **Altura línea**: line-height/16 (overflow/actual), line-height/20 (niveles)
- **Espaciado letra**: letter-spacing/normal

## Ejemplos

| Ejemplo | Descripción | Configuración |
|---------|-------------|----------------|
| Ruta comercio electrónico | Jerarquía de productos | Overflow > Level 1 > Level 2 > Level 3 > Current |
| Jerarquía completa | Todos los niveles mostrados | Level 1 > Level 2 > Level 3 > Level 4 > Level 5 |
| Ruta colapsada | Jerarquía profunda reducida | Overflow > Level 1 > Level 4 > Current |
| Navegación dos niveles | Estructura simple | Level 1 > Current |
| Ruta con marca | Tema evergreen | Color=Evergreen, Level 1 > Level 2 > Current |

## Accesibilidad

| Propiedad | Valor |
|-----------|-------|
| HTML semántico | Debe usar <nav> con marcado adecuado |
| Atributos ARIA | [Pendiente de confirmación] |
| Navegación de teclado | Los elementos deben ser accesibles por teclado (tecla Tab) |
| Indicador de enfoque | Anillo de enfoque visible en elementos de breadcrumb |
| Lector de pantalla | Debe anunciar estructura de breadcrumb y página actual |
| Elementos de enlace | Los elementos de breadcrumb deben ser enlaces interactivos de teclado |

## Guías de uso

- Siempre mostrar la página actual como último elemento
- Usar color semántico coincidiendo con contexto de página
- Puntos suspensivos (...) representan niveles principales ocultos
- Mantener texto de breadcrumb conciso y descriptivo
- Asegurar elementos navegables por teclado
- Usar posición de breadcrumb consistente (típicamente arriba de contenido principal)
- Considerar ocultar breadcrumbs en pantallas pequeñas (comportamiento responsivo)
- Cada elemento debe enlazar a su página correspondiente
- Evitar breadcrumbs para estructuras de un solo nivel

## Notas de implementación

- Contenedor de breadcrumb usa flexbox sin brecha entre elementos
- Separador (chevron) es parte de cada elemento excepto el último
- Elemento overflow muestra "..." automáticamente cuando está habilitado
- Variante de color afecta solo la apariencia del elemento de página actual
- Los elementos son típicamente enlaces clickeables (implementar con href apropiado)
- Último elemento frecuentemente no es clickeable (indicador de página actual)
- Diseño responsivo debe ocultar niveles u usar overflow en pantallas más pequeñas
