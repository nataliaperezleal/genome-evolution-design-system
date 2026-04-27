# Component Selection Rules — Genome Plus DS

Guía para agentes IA sobre cuándo usar cada componente del sistema.

## Decisiones de selección por caso de uso

### Acciones del usuario
| Caso | Componente | Notas |
|---|---|---|
| Acción principal de la pantalla | Button (Type=Primary) | Color=Evergreen o Indigo |
| Acción secundaria | Button (Type=Secondary) | |
| Acción discreta/contextual | Button (Type=Tertiary) | |
| Acción destructiva | Button (Type=Danger) | |
| Acción solo con ícono | Icon Button | No usar Button sin label |
| Dos acciones relacionadas | Duo Button | |
| Acción principal + menú | Split Button | |
| Limpiar un campo | Clear Button | |

### Selección y formularios
| Caso | Componente | Notas |
|---|---|---|
| Selección múltiple independiente | Checkbox | |
| Solo una opción del grupo | Radio Button | |
| Activar/desactivar función en tiempo real | Switch | |
| Seleccionar de lista larga | Dropdown | |
| Seleccionar fecha | Datepicker | |
| Elegir color | Color Picker | |
| Texto de una línea | Input | |
| Texto de múltiples líneas | Text Area | |
| Selección exclusiva visible | Segmented Button | Máx. 4-5 opciones |

### Navegación
| Caso | Componente | Notas |
|---|---|---|
| Navegación principal app | Header | |
| Contexto de ubicación | Breadcrumb | |
| Secciones de contenido | Tab | |
| Navegar entre páginas de datos | Paginator | |
| Enlace en texto corrido | Link | |
| Secciones colapsables | Accordion | |

### Feedback y estado
| Caso | Componente | Notas |
|---|---|---|
| Mensaje breve temporal | Snackbar | |
| Alerta dentro del contenido | Inline Alert | |
| Ventana de confirmación | Modal | |
| Progreso de operación | Progress Bar | |
| Contador sobre elemento | Badge | |
| Info contextual hover | Tooltip | |
| Bloquear UI durante modal | Backdrop | Siempre con Modal/Drawer |

### Datos y contenido
| Caso | Componente | Notas |
|---|---|---|
| Datos tabulares | Table | |
| Lista de ítems | List | |
| Etiqueta/categoría | Tag | |
| Datos numéricos destacados | Scoreboard | |
| Identidad de usuario | Avatar | |

## Reglas de prioridad

1. Siempre preferir el componente más específico al genérico.
2. Un Button no reemplaza a un Link para navegación.
3. Un Switch no reemplaza a un Checkbox para selección múltiple.
4. Badge es solo numérico; para texto usar Tag.
