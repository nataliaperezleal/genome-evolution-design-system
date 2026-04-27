# Prompt Template — Genome Plus DS

Plantilla para consultar este sistema de diseño desde un agente IA.

## Prompt base para generación de UI

```
Usando el Genome Plus Design System documentado en este repositorio:

1. Lee manifest.json para conocer todos los componentes disponibles.
2. Lee ai/component-selection-rules.md para elegir el componente correcto.
3. Lee ai/invalid-combinations.md para evitar combinaciones incorrectas.
4. Lee el .md del componente específico en components/ para obtener propiedades exactas.

Tarea: [describir la UI a generar]

Restricciones:
- Usar solo componentes listados en manifest.json.
- No usar valores hardcoded; usar siempre tokens del sistema.
- Respetar combinaciones inválidas de ai/invalid-combinations.md.
- Especificar todas las propiedades del componente (Color, Size, State, etc.).
```

## Ejemplo de consulta específica

```
¿Qué componente uso para una selección donde solo una opción puede estar activa a la vez?

Respuesta esperada: Radio Button (no Checkbox, no Switch).
Ver: ai/component-selection-rules.md → sección "Selección y formularios".
```
