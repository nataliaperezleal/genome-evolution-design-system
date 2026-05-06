import type { ReactNode } from "react";

import type { Language } from "./i18n";

import { Accordion as AccordionComponent } from "@genome-evolution/react";

export type LocalizedString = string | { en: string; es: string };

export function l(en: string, es: string): LocalizedString {
  return { en, es };
}

export function resolveLocalized(value: LocalizedString, language: Language) {
  if (typeof value === "string") return value;
  return value[language];
}

const esAuto: Record<string, string> = {
  "Component guidance": "Guía del componente",
  "Live preview": "Preview en vivo",
  "Current package output": "Salida actual del paquete",
  "Implementation contract": "Contrato de implementación",
  Snippets: "Snippets",
  Props: "Props",
  Code: "Código",
  Token: "Token",
  Status: "Estado",
  "Spec maturity": "Madurez del spec",
  Unknown: "Desconocido"
};

export function tr(value: LocalizedString, language: Language) {
  const resolved = resolveLocalized(value, language);
  if (language === "es" && resolved in esAuto) return esAuto[resolved];
  return resolved;
}

export type ComponentTabId =
  | "overview"
  | "when-to-use"
  | "when-not-to-use"
  | "anatomy"
  | "states"
  | "rules"
  | "do-dont"
  | "tokens"
  | "accessibility"
  | "implementation";

export interface SpecSection {
  title?: LocalizedString;
  body?: LocalizedString[];
  bullets?: LocalizedString[];
  preview?: ReactNode;
  layout?: "split" | "stack";
}

export interface TokenCard {
  label: LocalizedString;
  token: string;
  value?: string;
  swatch?: string;
  note?: LocalizedString;
}

export interface PropRow {
  name: string;
  type: string;
  defaultValue: string;
  description: LocalizedString;
}

export interface CodeExample {
  title: LocalizedString;
  code: string;
}

export interface ComponentSpec {
  subtitle: LocalizedString;
  tabs: Partial<Record<ComponentTabId, SpecSection[]>>;
  props: PropRow[];
  code: CodeExample[];
  tokenCards: TokenCard[];
}

export const componentTabLabels: Record<ComponentTabId, { en: string; es: string }> = {
  overview: { en: "Overview", es: "Overview" },
  "when-to-use": { en: "When to use", es: "Cuándo usar" },
  "when-not-to-use": { en: "When NOT to use", es: "Cuándo NO usar" },
  anatomy: { en: "Anatomy", es: "Anatomía" },
  states: { en: "States", es: "Estados" },
  rules: { en: "Rules", es: "Reglas" },
  "do-dont": { en: "Do / Don't", es: "Haz / No hagas" },
  tokens: { en: "Tokens", es: "Tokens" },
  accessibility: { en: "Accessibility", es: "Accesibilidad" },
  implementation: { en: "Implementation", es: "Implementación" }
};

export const componentSpecs: Record<string, ComponentSpec> = {
  Button: {
    subtitle: l(
      "Immediate actions with clear hierarchy, semantic intent and controlled prominence.",
      "Acciones inmediatas con jerarquía clara, intención semántica y prominencia controlada."
    ),
    tabs: {
      overview: [
        {
          body: [
            l(
              "Button is the base action control in Genome Evolution. It is designed for immediate decisions where hierarchy matters and the user should understand priority at a glance.",
              "Button es el control base de acción en Genome Evolution. Está diseñado para decisiones inmediatas donde la jerarquía importa y la prioridad debe entenderse de un vistazo."
            ),
            l(
              "The current documentation defines core variants, states, color constraints and semantic usage, but still marks the spec as draft while text and icon properties are being confirmed.",
              "La documentación actual define variantes, estados, restricciones de color y uso semántico, pero el spec sigue en borrador mientras se confirman propiedades de texto e íconos."
            )
          ]
        }
      ],
      "when-to-use": [
        {
          bullets: [
            l("Use it when the user needs to trigger an immediate action.", "Úsalo cuando el usuario necesita disparar una acción inmediata."),
            l("Use it when the action needs explicit visual hierarchy.", "Úsalo cuando la acción necesita jerarquía visual explícita."),
            l(
              "Use semantic types like danger, success or warning when the meaning of the action should be clear before interaction.",
              "Usa tipos semánticos como danger, success o warning cuando el significado de la acción debe ser claro antes de interactuar."
            )
          ]
        }
      ],
      "when-not-to-use": [
        {
          bullets: [
            l("Do not use Button for navigation. Use Link instead.", "No uses Button para navegación. Usa Link."),
            l("Do not use it for persistent selection or filters.", "No lo uses para selección persistente o filtros."),
            l(
              "Do not use it when the UI element only communicates status and does not trigger an action.",
              "No lo uses cuando el elemento solo comunica estado y no dispara una acción."
            )
          ]
        }
      ],
      anatomy: [
        {
          title: l("Core parts", "Partes"),
          bullets: [
            l("Container: the visible button surface or outline.", "Contenedor: la superficie visible del botón o su outline."),
            l("Label: short action text styled with the button typography role.", "Label: texto corto de acción usando el rol tipográfico de botón."),
            l(
              "Optional leading or trailing icon: currently implemented in React, but still pending final confirmation in the written spec.",
              "Ícono opcional (leading/trailing): existe en React, pero sigue pendiente su confirmación final en el spec escrito."
            ),
            l("Focus ring: system-level focus treatment using the focus tokens.", "Focus ring: tratamiento de foco a nivel sistema usando tokens de focus.")
          ]
        },
        {
          title: l("Label & icon guidance", "Guía de label e íconos"),
          bullets: [
            l(
              "Labels describe the outcome of the action (verb-first), not the UI element.",
              "Los labels describen el resultado de la acción (verbo primero), no el elemento UI."
            ),
            l("Keep labels short and scannable (1–3 words).", "Mantén los labels cortos y escaneables (1–3 palabras)."),
            l(
              "If you need an icon-only control, use Icon Button (not Button with an empty label).",
              "Si necesitas un control solo con ícono, usa Icon Button (no Button sin label)."
            )
          ]
        },
        {
          title: l("Size", "Tamaño"),
          bullets: [
            l(
              "SM uses 24px height with 12px horizontal padding and 4px vertical padding.",
              "SM usa 24px de alto con 12px de padding horizontal y 4px de padding vertical."
            ),
            l(
              "MD uses 32px height with 16px horizontal padding and 8px vertical padding.",
              "MD usa 32px de alto con 16px de padding horizontal y 8px de padding vertical."
            )
          ]
        }
      ],
      states: [
        {
          bullets: [
            l("Default: base resting state.", "Default: estado base en reposo."),
            l("Hovered: increases visual emphasis.", "Hovered: incrementa el énfasis visual."),
            l("Pressed: darkens or intensifies the interaction response.", "Pressed: oscurece o intensifica la respuesta de interacción."),
            l("Focused: applies the system focus ring with `border/focus` and 2px width.", "Focused: aplica el focus ring del sistema con `border/focus` y 2px de ancho."),
            l(
              "Disabled: only available for primary and secondary variants according to the current written rules.",
              "Disabled: solo está disponible para variantes primary y secondary según las reglas actuales."
            )
          ]
        }
      ],
      rules: [
        {
          bullets: [
            l("Each screen should have a single primary action to establish hierarchy.", "Cada pantalla debe tener una sola acción primary para establecer jerarquía."),
            l(
              "Primary and Secondary cannot use `Color=Default` unless the state is disabled.",
              "Primary y Secondary no pueden usar `Color=Default` a menos que el estado sea disabled."
            ),
            l("Tertiary only works with `Color=Default`.", "Tertiary solo funciona con `Color=Default`."),
            l(
              "Danger, Information, Success and Warning only work with `Color=Default`.",
              "Danger, Information, Success y Warning solo funcionan con `Color=Default`."
            ),
            l(
              "Secondary is strongest when paired with a primary action and typically represents the negative/escape action (Cancel, Back). Avoid using secondary as the only positive action.",
              "Secondary funciona mejor cuando se usa en pareja con un primary y típicamente representa la acción negativa/de escape (Cancelar, Atrás). Evita usar secondary como única acción positiva."
            ),
            l(
              "Tertiary and semantic variants do not currently define a disabled state in the source document.",
              "Tertiary y las variantes semánticas no definen actualmente un estado disabled en el documento fuente."
            ),
            l(
              "Do not use Button for navigation. Use Link when the action is to move to another page.",
              "No uses Button para navegación. Usa Link cuando la acción sea ir a otra página."
            )
          ]
        }
      ],
      "do-dont": [
        {
          title: l("Do", "Haz"),
          bullets: [
            l("Keep one clear primary action per area.", "Mantén una acción primaria clara por área."),
            l(
              "Group related actions and keep the set small (2–3 actions).",
              "Agrupa acciones relacionadas y mantén el set pequeño (2–3 acciones)."
            ),
            l(
              "Keep buttons in the same group the same size and, when possible, the same width.",
              "Mantén los botones del mismo grupo con el mismo tamaño y, cuando sea posible, el mismo ancho."
            ),
            l(
              "Use semantic variants for risk or confirmation when meaning matters.",
              "Usa variantes semánticas para riesgo o confirmación cuando el significado importa."
            ),
            l("Write direct action labels.", "Escribe labels de acción directos.")
          ]
        },
        {
          title: l("Don't", "No hagas"),
          bullets: [
            l(
              "Do not use Button where a text link is the correct semantic control.",
              "No uses Button cuando un Link de texto es el control semántico correcto."
            ),
            l("Do not stack multiple primary buttons with equal weight.", "No apiles múltiples botones primary con el mismo peso."),
            l(
              "Do not use more than three standalone buttons for the same target; use an overflow/menu pattern instead.",
              "No uses más de tres botones sueltos para el mismo objetivo; usa un patrón de overflow/menú."
            ),
            l("Do not mix button sizes inside the same group.", "No mezcles tamaños de botón dentro del mismo grupo."),
            l("Do not rely on color alone to explain urgency or intent.", "No dependas solo del color para explicar urgencia o intención.")
          ]
        }
      ],
      tokens: [
        {
          body: [
            l(
              "The current source confirms semantic token mapping for background, text, radius and typography. It does not yet fully confirm icon-specific mappings for every button variant.",
              "La fuente actual confirma el mapeo a tokens semánticos para background, texto, radio y tipografía. Aún no confirma completamente los mapeos específicos para íconos en todas las variantes."
            )
          ]
        }
      ],
      accessibility: [
        {
          bullets: [
            l("Render with semantic `button` role.", "Renderiza con rol semántico `button`."),
            l(
              "Keep the focus ring visible using `border/focus` and `focus/width=2`.",
              "Mantén visible el focus ring usando `border/focus` y `focus/width=2`."
            ),
            l("Do not rely only on color to communicate priority.", "No dependas solo del color para comunicar prioridad."),
            l(
              "The written spec currently documents compact sizes down to 24px, which may need review against broader touch target guidance.",
              "El spec documenta tamaños compactos hasta 24px, lo cual puede requerir revisión frente a guías de touch target."
            )
          ]
        }
      ],
      implementation: [
        {
          body: [
            l(
              "The current React primitive exposes variant, tone, size, corner and optional icon slots. This is implementation-ready, but still ahead of the written spec in the icon area, so it should be treated as a provisional API.",
              "El primitivo de React expone variant, tone, size, corner y slots opcionales para íconos. Está listo para implementación, pero va por delante del spec escrito en el área de íconos; trátalo como API provisional."
            )
          ]
        }
      ]
    },
    props: [
      {
        name: "variant",
        type: `"primary" | "secondary" | "tertiary"`,
        defaultValue: `"primary"`,
        description: l("Controls visual priority.", "Controla la prioridad visual.")
      },
      {
        name: "tone",
        type: `"evergreen" | "indigo" | "danger" | "information" | "success" | "warning" | "neutral"`,
        defaultValue: `"evergreen"`,
        description: l("Applies brand or semantic tone.", "Aplica un tono de marca o semántico.")
      },
      { name: "size", type: `"sm" | "md"`, defaultValue: `"md"`, description: l("Controls height and internal spacing.", "Controla altura y espaciado interno.") },
      { name: "corner", type: `"default" | "rounded"`, defaultValue: `"default"`, description: l("Switches between 4px and pill radius.", "Cambia entre radio 4px y pill.") },
      { name: "leadingIcon", type: "ReactNode", defaultValue: "undefined", description: l("Optional icon before the label.", "Ícono opcional antes del label.") },
      { name: "trailingIcon", type: "ReactNode", defaultValue: "undefined", description: l("Optional icon after the label.", "Ícono opcional después del label.") }
    ],
    code: [
      {
        title: l("Primary action", "Acción primaria"),
        code: `import { Button } from "@genome-evolution/react";

<Button>Continue</Button>;`
      },
      {
        title: l("Secondary rounded action", "Acción secundaria redondeada"),
        code: `import { Button } from "@genome-evolution/react";

<Button variant="secondary" tone="indigo" corner="rounded">
  Review
</Button>;`
      }
    ],
    tokenCards: [
      {
        label: l("Primary evergreen background", "Background evergreen (primario)"),
        token: "color.role.surface.evergreen.bold",
        value: "#297a39",
        swatch: "var(--ge-color-role-surface-evergreen-bold)"
      },
      {
        label: l("Primary indigo background", "Background indigo (primario)"),
        token: "color.role.surface.indigo.bold",
        value: "#6b1b99",
        swatch: "var(--ge-color-role-surface-indigo-bold)"
      },
      { label: l("Inverse text", "Texto inverso"), token: "color.role.text.inverse", value: "#f7f8f7", swatch: "var(--ge-color-role-text-inverse)" },
      {
        label: l("Disabled background", "Background disabled"),
        token: "color.role.background.disabled",
        value: "#f4f6f4",
        swatch: "var(--ge-color-role-background-disabled)"
      },
      { label: l("Button MD size", "Tamaño Button MD"), token: "typography.role.button.md.size", value: "14px" },
      { label: l("Rounded radius", "Radio rounded"), token: "radius.semantic.pill", value: "32px" }
    ]
  },
  Input: {
    subtitle: l(
      "Text entry with validation, helper text, orientation control and explicit keyboard focus behavior.",
      "Entrada de texto con validación, helper text, control de orientación y foco de teclado explícito."
    ),
    tabs: {
      overview: [
        {
          body: [
            l(
              "Input is the base text field for forms, filters and configuration panels. The spec is already production-level and covers labels, helper text, icons, orientation and multiple interaction states.",
              "Input es el campo base de texto para formularios, filtros y paneles de configuración. El spec ya está a nivel de producción y cubre labels, helper text, íconos, orientación y múltiples estados."
            ),
            l(
              "Compared to Button, the Input documentation is much more complete and can already drive implementation with relatively low ambiguity.",
              "Comparado con Button, la documentación de Input es más completa y puede guiar implementación con baja ambigüedad."
            )
          ]
        }
      ],
      "when-to-use": [
        {
          bullets: [
            l("Use it to capture short textual data.", "Úsalo para capturar texto corto."),
            l("Use it when the field needs inline validation through an error state.", "Úsalo cuando el campo necesita validación inline con estado de error."),
            l("Use `Label Left` when the form layout needs horizontal alignment.", "Usa `Label Left` cuando el layout necesita alineación horizontal.")
          ]
        }
      ],
      "when-not-to-use": [
        {
          bullets: [
            l("Do not use it for selecting from a closed list. Use Dropdown.", "No lo uses para seleccionar de una lista cerrada. Usa Dropdown."),
            l("Do not use it for multi-line content. Use Text Area.", "No lo uses para contenido multi‑línea. Usa Text Area.")
          ]
        }
      ],
      anatomy: [
        {
          bullets: [
            l("Label: visible field label.", "Label: etiqueta visible del campo."),
            l("Text field: the editable surface.", "Campo de texto: la superficie editable."),
            l("Optional leading and trailing icons.", "Íconos opcionales (leading y trailing)."),
            l("Helper or error message below the field.", "Mensaje helper o de error debajo del campo."),
            l("Cursor and focus treatment for interactive states.", "Cursor y tratamiento de foco para estados interactivos.")
          ]
        },
        {
          title: l("Layout and iconography", "Layout e iconografía"),
          bullets: [
            l("Field padding uses `space/16` horizontally and `space/8` vertically.", "El padding del campo usa `space/16` horizontal y `space/8` vertical."),
            l("Internal gap uses `gap/s`.", "El gap interno usa `gap/s`."),
            l(
              "Left icon defaults to 16×16 and trailing icon to 12×12 in the written spec.",
              "El ícono izquierdo es 16×16 y el trailing 12×12 según el spec."
            )
          ]
        }
      ],
      states: [
        {
          bullets: [
            l("Default: neutral border and placeholder text.", "Default: borde neutro y placeholder."),
            l("Hovered: lighter background with stronger border.", "Hovered: fondo más claro con borde más fuerte."),
            l("Focused: 1px green border.", "Focused: borde verde de 1px."),
            l("Focused tab: 2px green border for keyboard focus visibility.", "Focused tab: borde verde de 2px para visibilidad con teclado."),
            l("Filled: same shell as default, but filled text color.", "Filled: misma carcasa que default, pero con color de texto."),
            l("Error: danger border and helper message.", "Error: borde danger y mensaje de error."),
            l("Disabled: muted background and text.", "Disabled: fondo y texto atenuados."),
            l("Read only: no border or fill, no trailing icon.", "Read only: sin borde ni fill, sin trailing icon.")
          ]
        }
      ],
      rules: [
        {
          bullets: [
            l("Read only cannot be combined with a trailing icon.", "Read only no se puede combinar con trailing icon."),
            l("Disabled and Error cannot be active at the same time.", "Disabled y Error no pueden estar activos al mismo tiempo."),
            l("If the label is hidden, `Label Left` is invalid.", "Si el label está oculto, `Label Left` es inválido."),
            l("Read only intentionally removes field chrome instead of looking disabled.", "Read only elimina el chrome del campo en vez de verse disabled.")
          ]
        }
      ],
      "do-dont": [
        {
          title: l("Do", "Haz"),
          bullets: [
            l("Keep labels visible whenever possible.", "Mantén labels visibles siempre que sea posible."),
            l("Use helper text to reduce guesswork before an error happens.", "Usa helper text para reducir dudas antes de que ocurra un error."),
            l("Use the error state only when the field truly needs correction.", "Usa el estado de error solo cuando el campo realmente necesita corrección.")
          ]
        },
        {
          title: l("Don't", "No hagas"),
          bullets: [
            l("Do not use placeholder as the only label.", "No uses placeholder como único label."),
            l("Do not hide error context away from the field.", "No escondas el contexto del error lejos del campo."),
            l("Do not use readonly to imitate disabled behavior.", "No uses readonly para imitar el comportamiento de disabled.")
          ]
        }
      ],
      tokens: [
        {
          body: [
            l(
              "The source documentation is explicit about field background, border and text tokens for each state, which makes Input one of the best candidates for a robust React implementation.",
              "La documentación fuente es explícita sobre tokens de background, borde y texto por estado, lo que hace a Input un gran candidato para una implementación robusta en React."
            )
          ]
        }
      ],
      accessibility: [
        {
          bullets: [
            l("Associate the label with the field using `label` and `for` / `id`.", "Asocia el label al campo usando `label` y `for` / `id`."),
            l("Use `aria-invalid` plus `aria-describedby` for errors.", "Usa `aria-invalid` + `aria-describedby` para errores."),
            l("Use `disabled` for disabled inputs and `readonly` for readonly ones.", "Usa `disabled` para deshabilitados y `readonly` para solo lectura."),
            l("Keyboard focus needs the stronger `Focused tab` treatment to preserve visibility.", "El foco por teclado necesita el tratamiento más fuerte de `Focused tab` para mantener visibilidad.")
          ]
        }
      ],
      implementation: [
        {
          body: [
            l(
              "The current React primitive covers label, helper text and error handling. It does not yet cover the full documented matrix of orientation, leading/trailing icons or all 8 states as explicit API controls.",
              "El primitivo de React cubre label, helper text y manejo de errores. Aún no cubre la matriz completa de orientación, íconos leading/trailing ni los 8 estados como controles explícitos del API."
            )
          ]
        }
      ]
    },
    props: [
      { name: "label", type: "string", defaultValue: "undefined", description: l("Visible field label.", "Label visible del campo.") },
      { name: "helperText", type: "string", defaultValue: "undefined", description: l("Supporting message below the field.", "Mensaje de apoyo debajo del campo.") },
      { name: "error", type: "string", defaultValue: "undefined", description: l("Shows the error message and sets invalid semantics.", "Muestra el error y marca semántica inválida.") },
      { name: "id", type: "string", defaultValue: "auto-generated", description: l("Used to connect the label and the message.", "Conecta label y mensaje.") },
      { name: "placeholder", type: "string", defaultValue: "undefined", description: l("Placeholder text inside the input.", "Texto placeholder dentro del input.") },
      {
        name: "...input props",
        type: "InputHTMLAttributes<HTMLInputElement>",
        defaultValue: "—",
        description: l("Native input behavior such as `disabled`, `readOnly` and `defaultValue`.", "Props nativas como `disabled`, `readOnly` y `defaultValue`.")
      }
    ],
    code: [
      {
        title: l("Default field", "Campo por defecto"),
        code: `import { Input } from "@genome-evolution/react";

<Input
  label="Workspace name"
  placeholder="Genome Evolution"
  helperText="Use the name your team recognizes."
/>;`
      },
      {
        title: l("Field with validation", "Campo con validación"),
        code: `import { Input } from "@genome-evolution/react";

<Input
  label="Project slug"
  defaultValue="genome-evolution"
  error="Slug already in use."
/>;`
      }
    ],
    tokenCards: [
      { label: l("Canvas background", "Background canvas"), token: "color.role.background.canvas", value: "#ffffff", swatch: "var(--ge-color-role-background-canvas)" },
      { label: l("Default border", "Borde por defecto"), token: "color.role.border.default", value: "#c3cbc5", swatch: "var(--ge-color-role-border-default)" },
      { label: l("Focus border", "Borde de foco"), token: "color.role.border.focus", value: "#339947", swatch: "var(--ge-color-role-border-focus)" },
      { label: l("Danger text", "Texto danger"), token: "color.role.text.danger", value: "#ba1a1a", swatch: "var(--ge-color-role-text-danger)" },
      { label: l("Label MD size", "Tamaño Label MD"), token: "typography.role.label.md.size", value: "14px" },
      { label: l("Field radius", "Radio del campo"), token: "radius.semantic.sm", value: "4px" }
    ]
  },
  "Icon Button": {
    subtitle: l("Compact icon-only action for dense toolbars and contextual controls.", "Acción compacta solo con ícono para toolbars densas y controles contextuales."),
    tabs: {
      overview: [
        {
          body: [
            l(
              "Icon Button is the compact action control for dense interfaces. It is already documented as production and clearly separates filled and outline styles.",
              "Icon Button es el control compacto de acción para interfaces densas. Ya está documentado como Production y separa claramente estilos filled y outline."
            ),
            l(
              "Its main design constraint is semantic clarity: the icon must be understandable on its own, and an accessible label is always required in implementation.",
              "Su principal restricción es claridad semántica: el ícono debe entenderse por sí solo y siempre se requiere un label accesible en implementación."
            )
          ]
        }
      ],
      "when-to-use": [
        {
          bullets: [
            l("Use it when the icon clearly communicates the action.", "Úsalo cuando el ícono comunica claramente la acción."),
            l("Use it in toolbars or compact action groups.", "Úsalo en toolbars o grupos compactos de acción."),
            l("Use it where text buttons would create too much visual density.", "Úsalo donde botones con texto crearían demasiada densidad visual.")
          ]
        }
      ],
      "when-not-to-use": [
        {
          bullets: [
            l("Do not use it when the action is ambiguous without text.", "No lo uses cuando la acción sea ambigua sin texto."),
            l("Do not use it as the primary CTA of a page.", "No lo uses como CTA principal de una página.")
          ]
        }
      ],
      anatomy: [
        {
          bullets: [
            l("Container: square interactive frame.", "Contenedor: marco interactivo cuadrado."),
            l("Icon: the only visible payload.", "Ícono: el único contenido visible."),
            l("Focus ring: shared system focus treatment.", "Focus ring: tratamiento de foco compartido del sistema."),
            l("Accessible label: required, but not visually rendered.", "Label accesible: requerido, pero no se renderiza visualmente.")
          ]
        },
        {
          title: l("Sizes", "Tamaños"),
          bullets: [
            l("LG is 48×48 with a 24×24 icon.", "LG es 48×48 con ícono 24×24."),
            l("MD is 32×32 with a 16×16 icon.", "MD es 32×32 con ícono 16×16."),
            l("SM is 24×24 with a 12×12 icon.", "SM es 24×24 con ícono 12×12.")
          ]
        }
      ],
      states: [
        {
          bullets: [
            "Default: resting state.",
            "Hover: stronger surface treatment.",
            "Pressed: darker active state.",
            "Focused: universal 2px focus ring for all color and type combinations.",
            "Disable: disabled background or border with muted icon."
          ]
        }
      ],
      rules: [
        {
          bullets: [
            "Inverse color does not exist for Outline.",
            "Disabled requires `Color=Default` in the source spec.",
            "The correct icon size must match the button size; large icon assets cannot be reused in smaller sizes."
          ]
        }
      ],
      "do-dont": [
        {
          title: "Do",
          bullets: [
            "Use an `aria-label` every time.",
            "Prefer MD or larger when touch interaction matters.",
            "Use outline when the action is secondary."
          ]
        },
        {
          title: "Don't",
          bullets: [
            "Do not remove the accessible label because the icon looks obvious to you.",
            "Do not place inverse icons on light surfaces.",
            "Do not use icon-only controls where wording is needed for certainty."
          ]
        }
      ],
      tokens: [
        {
          body: [
            "The document already specifies token mapping for filled and outline types, including icon color, border color and hover/pressed backgrounds."
          ]
        }
      ],
      accessibility: [
        {
          bullets: [
            "Always provide a descriptive `aria-label`.",
            "Mark the icon itself as `aria-hidden`.",
            "Disabled controls should not receive focus.",
            "Use at least MD in mobile contexts when possible."
          ]
        }
      ],
      implementation: [
        {
          body: [
            "The current React primitive already exposes the core implementation contract well: `icon`, `label`, `tone`, `variant` and `size`."
          ]
        }
      ]
    },
    props: [
      { name: "icon", type: "ReactNode", defaultValue: "required", description: "The visible icon rendered inside the control." },
      { name: "label", type: "string", defaultValue: "required", description: "Accessible label used as `aria-label`." },
      { name: "variant", type: `"filled" | "outline"`, defaultValue: `"filled"`, description: "Controls the shell style." },
      { name: "tone", type: `"evergreen" | "indigo" | "neutral"`, defaultValue: `"evergreen"`, description: "Applies the supported color tone in the current React package." },
      { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Controls the button frame and expected icon scale." }
    ],
    code: [
      {
        title: "Filled icon action",
        code: `import { IconButton } from "@genome-evolution/react";

<IconButton
  label="Search"
  icon={<SearchIcon />}
/>;
`
      },
      {
        title: "Outline contextual action",
        code: `import { IconButton } from "@genome-evolution/react";

<IconButton
  label="Go forward"
  icon={<ArrowIcon />}
  variant="outline"
  tone="neutral"
/>;
`
      }
    ],
    tokenCards: [
      { label: "Filled evergreen surface", token: "color.role.surface.evergreen.bold", value: "#297a39", swatch: "var(--ge-color-role-surface-evergreen-bold)" },
      { label: "Outline strong border", token: "color.role.border.strong", value: "#5f6d62", swatch: "var(--ge-color-role-border-strong)" },
      { label: "Inverse icon", token: "color.role.icon.inverse", value: "#f7f8f7", swatch: "var(--ge-color-role-icon-inverse)" },
      { label: "Primary icon", token: "color.role.icon.primary", value: "#5f6d62", swatch: "var(--ge-color-role-icon-primary)" },
      { label: "Focus ring", token: "color.role.border.focus", value: "#339947", swatch: "var(--ge-color-role-border-focus)" },
      { label: "Corner radius", token: "radius.semantic.sm", value: "4px" }
    ]
  },
  Badge: {
    subtitle: "Compact status indicator for labels, states and taxonomy.",
    tabs: {
      overview: [
        {
          body: [
            "Badges are lightweight status labels used in tables, cards and meta lists. They should never replace full inline alerts when the message requires more context.",
            "The docs site style matches the reference HTML: subtle borders, soft semantic backgrounds and medium-weight text."
          ]
        }
      ],
      "when-to-use": [
        {
          bullets: [
            "Use a badge to label state, taxonomy or short status in compact spaces (tables, cards, lists).",
            "Use it to reinforce status when paired with a primary label, not as the only piece of meaning."
          ]
        }
      ],
      "when-not-to-use": [
        {
          bullets: [
            "Do not use badges for long messages. Use Inline Alert instead.",
            "Do not use a badge as the only indicator for critical status; pair it with text."
          ]
        }
      ],
      anatomy: [
        { bullets: ["Pill container with subtle border.", "Optional icon + short label.", "Avoid long sentences; keep labels short."] }
      ],
      states: [
        {
          bullets: [
            "Default: resting state.",
            "Interactive (optional): badges can be rendered as buttons/tags when used as filters.",
            "Disabled (optional): only when badge is interactive."
          ]
        }
      ],
      rules: [
        { bullets: ["Keep labels to 1–2 words when possible.", "Use semantic tones consistently across the product."] }
      ],
      tokens: [
        {
          body: [
            "Badges use subtle semantic surfaces and borders. Prefer role tokens (`color.role.surface.*`, `color.role.border.*`, `color.role.text.*`) over raw primitives."
          ]
        }
      ],
      accessibility: [
        {
          bullets: [
            "Do not rely on color alone to communicate meaning; include text labels.",
            "If the badge is interactive, use a button-like component with focus treatment."
          ]
        }
      ],
      implementation: [{ body: ["Use `tone` to map semantic meaning and `variant` for outline vs filled styles."] }]
    },
    props: [
      {
        name: "tone",
        type: `"neutral" | "primary" | "info" | "success" | "warning" | "danger"`,
        defaultValue: `"neutral"`,
        description: "Semantic styling for the badge."
      },
      { name: "variant", type: `"filled" | "outline"`, defaultValue: `"filled"`, description: "Controls the surface style." },
      { name: "icon", type: "ReactNode", defaultValue: "optional", description: "Optional leading icon." },
      { name: "children", type: "ReactNode", defaultValue: "required", description: "Badge label." }
    ],
    code: [
      {
        title: "Semantic tones",
        code: `import { Badge } from "@genome-evolution/react";

<Badge tone="neutral">Borrador</Badge>
<Badge tone="success">Activo</Badge>;
`
      }
    ],
    tokenCards: [
      { label: "Default border", token: "color.role.border.default", value: "rgba(0,0,0,0.08)" },
      { label: "Info subtle surface", token: "color.role.surface.info.subtle", value: "#EFF4FF" }
    ]
  },
  "Inline Alert": {
    subtitle: "Inline system messaging with a semantic tone and concise copy.",
    tabs: {
      overview: [{ body: ["Use inline alerts for system feedback and important status changes near the related UI."] }],
      rules: [{ bullets: ["Keep the copy short.", "Prefer a single sentence and a single action outside the alert."] }],
      implementation: [{ body: ["Use `tone` for semantic color and `icon` for a compact leading glyph."] }]
    },
    props: [
      { name: "tone", type: `"info" | "success" | "warning" | "danger"`, defaultValue: `"info"`, description: "Semantic styling." },
      { name: "icon", type: "ReactNode", defaultValue: "optional", description: "Optional leading icon." },
      { name: "children", type: "ReactNode", defaultValue: "required", description: "Alert content." }
    ],
    code: [
      {
        title: "Success message",
        code: `import { InlineAlert } from "@genome-evolution/react";

<InlineAlert tone="success" icon="✓">
  Cambios guardados correctamente.
</InlineAlert>;
`
      }
    ],
    tokenCards: [{ label: "Focus ring", token: "color.role.border.focus", value: "var(--ge-color-role-border-focus)" }]
  },
  Card: {
    subtitle: "Low-contrast containers that group related information.",
    tabs: {
      overview: [
        { body: ["Cards are used to cluster related content into readable chunks without heavy shadows or decoration."] }
      ],
      anatomy: [{ bullets: ["Optional title.", "Body content region.", "Optional footer actions."] }]
    },
    props: [
      { name: "variant", type: `"base" | "elevated"`, defaultValue: `"base"`, description: "Controls emphasis." },
      { name: "title", type: "ReactNode", defaultValue: "optional", description: "Optional header title." },
      { name: "footer", type: "ReactNode", defaultValue: "optional", description: "Optional footer content." }
    ],
    code: [
      {
        title: "Base card",
        code: `import { Card, Badge, Button } from "@genome-evolution/react";

<Card
  title="Tarjeta base"
  footer={(
    <>
      <Badge tone="neutral">Borrador</Badge>
      <Button size="sm" variant="tertiary">Ver</Button>
    </>
  )}
>
  Ideal para agrupar información relacionada.
</Card>;
`
      }
    ],
    tokenCards: [{ label: "Surface", token: "color.role.background.canvas", value: "#FFFFFF" }]
  },
  Avatar: {
    subtitle: "Initial-based avatar for identity cues in lists and tables.",
    tabs: {
      overview: [{ body: ["Avatars represent users with initials and lightly tinted category colors."] }],
      "when-to-use": [
        { bullets: ["Use avatars in lists, tables and headers to reinforce identity.", "Use groups for participants and collaborators."] }
      ],
      "when-not-to-use": [
        { bullets: ["Do not use avatars as the only identifier; pair them with a name.", "Avoid using long strings; keep it to initials."] }
      ],
      anatomy: [{ bullets: ["Circular container.", "Initials label.", "Optional tone tint per category."] }],
      states: [{ bullets: ["Default: resting.", "Interactive: only when avatar is a trigger (e.g. profile menu)."] }],
      rules: [{ bullets: ["Keep initials to 2–3 chars.", "Use grouped avatars for participants lists."] }]
      ,
      tokens: [{ body: ["Use border, surface and text role tokens to ensure contrast across themes."] }],
      accessibility: [
        {
          bullets: [
            "If the avatar is purely decorative, mark it as presentational.",
            "If clickable, ensure keyboard focus and an accessible name."
          ]
        }
      ],
      implementation: [{ body: ["Use `size` for the frame and `tone` for category tinting."] }]
    },
    props: [
      { name: "initials", type: "string", defaultValue: "required", description: "Text shown in the avatar." },
      { name: "size", type: `"sm" | "md" | "lg"`, defaultValue: `"md"`, description: "Controls frame size." },
      { name: "tone", type: `"blue" | "green" | "amber" | "pink" | "neutral"`, defaultValue: `"neutral"`, description: "Tinted category tone." }
    ],
    code: [
      {
        title: "Category avatar",
        code: `import { Avatar } from "@genome-evolution/react";

<Avatar initials="JS" size="sm" tone="blue" />;
`
      }
    ],
    tokenCards: [{ label: "Border", token: "color.role.border.default", value: "rgba(0,0,0,0.08)" }]
  },
  Table: {
    subtitle: "Data table styling with subtle row hover and editorial header typography.",
    tabs: {
      overview: [{ body: ["Tables are used for dense tabular data with subtle row hover and minimal exterior borders."] }],
      rules: [{ bullets: ["Use badges for status cells.", "Keep headers short; use uppercase label style."] }]
    },
    props: [{ name: "children", type: "ReactNode", defaultValue: "required", description: "Thead/tbody markup." }],
    code: [
      {
        title: "Styled table",
        code: `import { Table } from "@genome-evolution/react";

<Table>
  <thead>...</thead>
  <tbody>...</tbody>
</Table>;
`
      }
    ],
    tokenCards: [{ label: "Row hover", token: "color.role.background.interactive.hovered", value: "#F8F8F7" }]
  },
  Accordion: {
    subtitle: l(
      "A compact disclosure control that progressively reveals content without leaving the current context.",
      "Un control compacto que revela contenido progresivamente sin sacar al usuario de su contexto."
    ),
    tabs: {
      overview: [
        {
          body: [
            l(
              "The accordion component is a great way to showcase lots of information without taking up too much space. It uses a simple header title to give users a quick peek at the content, helping them choose which sections they want to dive into.",
              "El componente Accordion es ideal para mostrar mucha información sin ocupar demasiado espacio. Usa un encabezado simple para dar un vistazo rápido al contenido y permitir que las personas elijan qué secciones quieren explorar."
            ),
            l(
              "Accordions can also improve discoverability by chunking related content, but avoid hiding critical information that users must see to complete a task.",
              "Los accordions también mejoran la exploración al dividir contenido relacionado, pero evita ocultar información crítica que el usuario necesita para completar una tarea."
            )
          ]
        }
      ],
      "when-to-use": [
        {
          bullets: [
            l("Content has a clear hierarchy between header and detail.", "El contenido tiene jerarquía clara entre encabezado y detalle."),
            l("You need to access information selectively (not all at once).", "Se necesita acceder a información de forma selectiva (no todo al mismo tiempo)."),
            l("Vertical space is limited and secondary information needs to be prioritized.", "El espacio vertical es limitado y hay que priorizar información secundaria."),
            l("The interface benefits from grouping related sections.", "La interfaz se beneficia de agrupar secciones relacionadas.")
          ]
        }
      ],
      "when-not-to-use": [
        {
          bullets: [
            l("Content must always be visible to perform a task (critical/required info).", "El contenido debe estar siempre visible para ejecutar una tarea (info crítica)."),
            l("The content is too short and doesn't justify collapsing.", "El contenido es muy corto y no justifica colapsar."),
            l("Users need to compare multiple sections at the same time.", "El usuario necesita comparar varias secciones al mismo tiempo."),
            l("This is a step-by-step flow (wizard) where information must remain accessible.", "Es un flujo paso a paso (wizard) donde la info debe permanecer accesible.")
          ]
        }
      ],
      anatomy: [
        {
          title: l("Properties", "Propiedades"),
          layout: "split",
          preview: (
            <div className="accordion-props-mock" aria-label="Accordion properties mock">
              <div className="accordion-props-mock__title">Accordion</div>
              <div className="accordion-props-mock__row">
                <span>Color</span>
                <span className="accordion-props-mock__pill">Default</span>
              </div>
              <div className="accordion-props-mock__row">
                <span>Behavior</span>
                <span className="accordion-props-mock__pill">Collapsed</span>
              </div>
              <div className="accordion-props-mock__row">
                <span>Size</span>
                <span className="accordion-props-mock__pill">MD</span>
              </div>
              <div className="accordion-props-mock__row">
                <span>Text</span>
                <span className="accordion-props-mock__pill">Placeholder</span>
              </div>
              <div className="accordion-props-mock__row">
                <span>Show left icon</span>
                <span className="accordion-props-mock__toggle" aria-hidden="true" />
              </div>
              <div className="accordion-props-mock__row">
                <span>Show badge</span>
                <span className="accordion-props-mock__toggle" aria-hidden="true" />
              </div>
              <div className="accordion-props-mock__row">
                <span>Content</span>
                <span className="accordion-props-mock__pill">…</span>
              </div>
            </div>
          ),
          bullets: [
            l("Color: choose between default and brand tones.", "Color: cambia entre default y tonos de marca."),
            l("Behavior: collapsed or expanded.", "Behavior: colapsado o expandido."),
            l("Size: controls density and padding.", "Size: controla densidad y padding."),
            l("Text: update the title string.", "Text: cambia el texto del título."),
            l("Icons & badges: optional leading icon and metadata badge.", "Íconos y badge: ícono opcional y badge de metadatos."),
            l("Content: the panel body.", "Content: el cuerpo del panel.")
          ]
        },
        {
          title: l("Anatomy", "Anatomía"),
          layout: "split",
          preview: (
            <div className="accordion-anatomy" aria-label="Accordion anatomy diagram">
              <div className="accordion-anatomy__surface">
                <div className="accordion-anatomy__title">Placeholder</div>
                <div className="accordion-anatomy__chevron" aria-hidden="true" />
                <div className="accordion-anatomy__divider" aria-hidden="true" />
                <div className="accordion-anatomy__panel">Placeholder</div>
                <span className="accordion-anatomy__dot accordion-anatomy__dot--title">1</span>
                <span className="accordion-anatomy__dot accordion-anatomy__dot--chev">2</span>
                <span className="accordion-anatomy__dot accordion-anatomy__dot--div">3</span>
                <span className="accordion-anatomy__dot accordion-anatomy__dot--panel">4</span>
              </div>
            </div>
          ),
          bullets: [
            l("1 — Title: describes the content inside the accordion.", "1 — Title: describe el contenido dentro del accordion."),
            l("2 — Chevron icon: indicates collapsed/expanded state.", "2 — Chevron: indica el estado (colapsado/expandido)."),
            l("3 — Divider: separates the title from the panel content.", "3 — Divider: separa el título del contenido."),
            l("4 — Panel: the container that holds the content.", "4 — Panel: contenedor que agrupa el contenido.")
          ]
        }
      ],
      states: [
        {
          title: l("Behavior", "Comportamiento"),
          layout: "split",
          preview: (
            <div className="accordion-preview-stack">
              <div className="accordion-preview" data-state="collapsed">
                <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
              </div>
              <div className="accordion-preview" data-state="expanded">
                <AccordionComponent title="Placeholder" defaultOpen>
                  Placeholder
                </AccordionComponent>
              </div>
            </div>
          ),
          body: [
            l("Collapsed hides the content to keep the surface compact.", "Collapsed se usa para ocultar el contenido y mantener compacto el layout."),
            l("Expanded reveals the content for reading or action.", "Expanded se usa para mostrar el contenido cuando se necesita.")
          ]
        },
        {
          title: l("Default", "Default"),
          layout: "split",
          preview: (
            <div className="accordion-preview" data-state="default">
              <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
            </div>
          ),
          body: [l("Base state when the accordion can be used.", "Estado base cuando el accordion está habilitado.")]
        },
        {
          title: l("Disabled", "Disabled"),
          layout: "split",
          preview: (
            <div className="accordion-preview" data-state="disabled">
              <AccordionComponent title="Placeholder" disabled>
                Placeholder
              </AccordionComponent>
            </div>
          ),
          body: [l("Used when there is no interaction.", "Se usa cuando no debe haber interacción.")]
        },
        {
          title: l("Hovered", "Hovered"),
          layout: "split",
          preview: (
            <div className="accordion-preview" data-state="hover">
              <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
            </div>
          ),
          body: [l("Used when the pointer is over the trigger.", "Cuando el puntero está sobre el trigger.")]
        },
        {
          title: l("Pressed", "Pressed"),
          layout: "split",
          preview: (
            <div className="accordion-preview" data-state="pressed">
              <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
            </div>
          ),
          body: [l("Used during the click/tap interaction.", "Durante la interacción de click/tap.")]
        },
        {
          title: l("Focused", "Focused"),
          layout: "split",
          preview: (
            <div className="accordion-preview" data-state="focus">
              <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
            </div>
          ),
          body: [l("Used when navigating by keyboard focus.", "Cuando se navega con el teclado (focus).")]
        },
        {
          title: l("Loading", "Loading"),
          layout: "split",
          preview: (
            <div className="accordion-preview" data-state="loading">
              <div className="accordion-skeleton">
                <div className="accordion-skeleton__row" />
                <div className="accordion-skeleton__row accordion-skeleton__row--short" />
              </div>
            </div>
          ),
          body: [l("Used when the content is loading.", "Se usa cuando el contenido está cargando.")]
        }
      ],
      rules: [
        {
          bullets: [
            l("Keep titles short, specific and scannable.", "Mantén títulos cortos, específicos y escaneables."),
            l("Prefer one idea per accordion item.", "Prefiere una idea por ítem."),
            l("Avoid nesting complex interactive experiences unless necessary.", "Evita anidar experiencias interactivas complejas salvo que sea necesario.")
          ]
        }
      ],
      tokens: [
        {
          body: [
            l(
              "Uses border tokens for separation, interactive background tokens for hover/pressed, and focus tokens for keyboard focus indication.",
              "Usa tokens de borde para separación, background interactivo para hover/pressed y tokens de foco para indicar foco por teclado."
            )
          ]
        }
      ],
      accessibility: [
        {
          bullets: [
            l("Trigger is a `button` with `aria-expanded`.", "El trigger es un `button` con `aria-expanded`."),
            l("Panel is a labelled region tied to the trigger via `aria-controls` and `aria-labelledby`.", "El panel es una región etiquetada ligada al trigger."),
            l("Keep focus styles visible and consistent across themes.", "Mantén el foco visible y consistente en ambos temas.")
          ]
        }
      ],
      "do-dont": [
        {
          title: l("Do", "Haz"),
          layout: "split",
          preview: (
            <div className="accordion-guideline accordion-guideline--do">
              <div className="accordion-guideline__preview">
                <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
                <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
                <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
              </div>
              <div className="accordion-guideline__bar">DO</div>
            </div>
          ),
          bullets: [
            l("Align items consistently inside a group.", "Alinea los ítems consistentemente dentro del grupo."),
            l("Use concise titles that describe the hidden content.", "Usa títulos concisos que describan el contenido."),
            l("Prefer grouping related content into a small set of items.", "Agrupa contenido relacionado en un set pequeño de ítems.")
          ]
        },
        {
          title: l("Don't", "No hagas"),
          layout: "split",
          preview: (
            <div className="accordion-guideline accordion-guideline--dont">
              <div className="accordion-guideline__preview">
                <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
                <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
                <AccordionComponent title="Placeholder">Placeholder</AccordionComponent>
              </div>
              <div className="accordion-guideline__bar">DON'T</div>
            </div>
          ),
          bullets: [
            l("Don’t center-align titles inside the accordion group.", "No centres el texto dentro del grupo de accordions."),
            l("Don’t change the icon meaning across items.", "No cambies el significado del ícono entre ítems."),
            l("Don’t hide critical information required to complete a task.", "No ocultes información crítica para completar una tarea.")
          ]
        }
      ],
      implementation: [
        {
          body: [
            l(
              "Use `defaultOpen` for uncontrolled expansion or `open` + `onOpenChange` for controlled state.",
              "Usa `defaultOpen` para expansión no controlada o `open` + `onOpenChange` para estado controlado."
            )
          ]
        }
      ]
    },
    props: [
      { name: "title", type: "string", defaultValue: "required", description: "Accordion trigger label." },
      { name: "children", type: "ReactNode", defaultValue: "required", description: "Panel content." },
      { name: "size", type: `"sm" | "md"`, defaultValue: `"md"`, description: "Controls padding and density." },
      { name: "tone", type: `"default" | "evergreen" | "indigo"`, defaultValue: `"default"`, description: "Optional subtle emphasis tone." },
      { name: "disabled", type: "boolean", defaultValue: "false", description: l("Disables the trigger interaction.", "Deshabilita la interacción del trigger.") },
      { name: "defaultOpen", type: "boolean", defaultValue: "false", description: "Initial state (uncontrolled)." },
      { name: "open", type: "boolean", defaultValue: "—", description: "Controlled open state." },
      { name: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—", description: "Controlled state handler." }
    ],
    code: [
      {
        title: "Uncontrolled accordion",
        code: `import { Accordion } from "@genome-evolution/react";

<Accordion title="Details" defaultOpen>
  Extra information lives here.
</Accordion>;
`
      }
    ],
    tokenCards: [
      { label: "Border", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" },
      { label: "Hover", token: "color.role.background.interactive.hovered", value: "var(--ge-color-role-background-interactive-hovered)" }
    ]
  },
  Backdrop: {
    subtitle: "Overlay layer that dims the UI beneath modals, drawers and popovers.",
    tabs: {
      overview: [{ body: ["Backdrop is used to de-emphasize background content and block interaction behind overlays."] }],
      "when-to-use": [{ bullets: ["Use behind modal dialogs and blocking overlays.", "Use when background interaction must be prevented."] }],
      "when-not-to-use": [{ bullets: ["Do not use for inline popovers that don’t block the page.", "Avoid stacking multiple backdrops."] }],
      anatomy: [{ bullets: ["Full-viewport overlay layer.", "Optional blur effect (depends on platform)."] }],
      states: [{ bullets: ["Visible", "Hidden"] }],
      rules: [{ bullets: ["Keep opacity low to preserve context.", "Ensure it sits below the overlay surface."] }],
      tokens: [{ body: ["Uses overlay role tokens and z-index tokens for layering."] }],
      accessibility: [{ bullets: ["Backdrop itself is non-interactive; overlay surface handles focus trapping and dismissal."] }],
      implementation: [{ body: ["Render conditionally via `open`. Use `tone` to choose black/white overlay when required."] }]
    },
    props: [
      { name: "open", type: "boolean", defaultValue: "true", description: "Whether the backdrop is rendered." },
      { name: "tone", type: `"black" | "white"`, defaultValue: `"black"`, description: "Overlay color tone." }
    ],
    code: [
      {
        title: "Backdrop behind modal",
        code: `import { Backdrop } from "@genome-evolution/react";

<Backdrop tone="black" />;
`
      }
    ],
    tokenCards: [
      { label: "Overlay black", token: "color.role.overlay.black", value: "var(--ge-color-role-overlay-black)" },
      { label: "Overlay white", token: "color.role.overlay.white", value: "var(--ge-color-role-overlay-white)" }
    ]
  },
  Breadcrumb: {
    subtitle: "Context navigation showing the current location within a hierarchy.",
    tabs: {
      overview: [{ body: ["Breadcrumbs help users understand location and quickly jump to parent levels."] }],
      "when-to-use": [{ bullets: ["Use on deep hierarchies (3+ levels).", "Use when users frequently move between sibling pages."] }],
      "when-not-to-use": [{ bullets: ["Avoid on flat IA or single-level navigation.", "Don’t use as a replacement for primary navigation."] }],
      anatomy: [{ bullets: ["List of items.", "Separators between levels.", "Current page item (non-link)."] }],
      states: [{ bullets: ["Default", "Hover (links)", "Focus visible (links)"] }],
      rules: [{ bullets: ["Keep labels concise.", "Only the last item should be non-interactive."] }],
      tokens: [{ body: ["Uses secondary/tertiary text roles and link tokens for interactive items."] }],
      accessibility: [{ bullets: ["Wrap in `nav` with `aria-label=\"Breadcrumb\"`.", "Mark current item with `aria-current=\"page\"`."] }],
      implementation: [{ body: ["Pass an ordered `items` array. Provide `href` for linked items; omit for current page."] }]
    },
    props: [{ name: "items", type: "BreadcrumbItem[]", defaultValue: "required", description: "Ordered breadcrumb items." }],
    code: [
      {
        title: "Three levels",
        code: `import { Breadcrumb } from "@genome-evolution/react";

<Breadcrumb items={[{ label: \"Home\", href: \"/\" }, { label: \"Settings\", href: \"/settings\" }, { label: \"Billing\" }]} />;
`
      }
    ],
    tokenCards: [{ label: "Secondary text", token: "color.role.text.secondary", value: "var(--ge-color-role-text-secondary)" }]
  },
  "Clear Button": {
    subtitle: "Low-emphasis action button with no visible background or border.",
    tabs: {
      overview: [
        {
          body: [
            "Clear Button is used for secondary and tertiary actions where the hierarchy should remain lightweight. It works well in dense UIs or alongside primary buttons without competing for attention."
          ]
        }
      ],
      "when-to-use": [{ bullets: ["Use for navigation or contextual actions.", "Use when you need an action but want minimal surface emphasis."] }],
      "when-not-to-use": [{ bullets: ["Do not use as the primary action in a flow.", "Avoid when the element needs a strong hit-area without a wrapper."] }],
      anatomy: [{ bullets: ["Inline container.", "Label.", "Optional leading/trailing icon."] }],
      states: [{ bullets: ["Default", "Hovered", "Pressed", "Focused", "Disabled"] }],
      rules: [
        {
          bullets: [
            "Use either a brand tone (evergreen/indigo) OR a semantic type (danger/success/etc), not both together.",
            "Keep labels short; prefer a verb + object."
          ]
        }
      ],
      tokens: [{ body: ["Uses interactive background tokens for hover/pressed and text role tokens for tone/type."] }],
      accessibility: [{ bullets: ["Always provide a descriptive label.", "Ensure focus ring is visible on keyboard navigation."] }],
      implementation: [{ body: ["Use `tone` for brand coloring or `typeTone` for semantic meaning. Add icons with `leadingIcon`/`trailingIcon`."] }]
    },
    props: [
      { name: "tone", type: `"default" | "evergreen" | "indigo"`, defaultValue: `"indigo"`, description: "Brand tone for text/icon." },
      {
        name: "typeTone",
        type: `"default" | "information" | "success" | "danger" | "warning"`,
        defaultValue: `"default"`,
        description: "Semantic override for text/icon."
      },
      { name: "corner", type: `"default" | "rounded"`, defaultValue: `"default"`, description: "Controls corner radius." },
      { name: "leadingIcon", type: "ReactNode", defaultValue: "optional", description: "Optional icon before label." },
      { name: "trailingIcon", type: "ReactNode", defaultValue: "optional", description: "Optional icon after label." }
    ],
    code: [
      {
        title: "Navigation action",
        code: `import { ClearButton } from "@genome-evolution/react";

<ClearButton tone="default" leadingIcon={<ArrowIcon />}>
  Back
</ClearButton>;
`
      }
    ],
    tokenCards: [
      { label: "Hover background", token: "color.role.background.interactive.hovered", value: "var(--ge-color-role-background-interactive-hovered)" },
      { label: "Pressed background", token: "color.role.background.interactive.pressed", value: "var(--ge-color-role-background-interactive-pressed)" }
    ]
  },
  Checkbox: {
    subtitle: "Binary selection control for independent options.",
    tabs: {
      overview: [{ body: ["Checkboxes allow users to select any number of options from a set, including none."] }],
      "when-to-use": [{ bullets: ["Use for independent selections.", "Use for confirmations like terms and permissions."] }],
      "when-not-to-use": [{ bullets: ["Do not use when only one option can be selected (use Radio Button).", "Do not use for real-time toggles (use Switch)."] }],
      anatomy: [{ bullets: ["Input element.", "Visual box.", "Label (optional).", "Helper/error message (optional)."] }],
      states: [{ bullets: ["Unchecked", "Checked", "Hovered", "Pressed", "Focused", "Disabled"] }],
      rules: [{ bullets: ["Keep labels short and scannable.", "Use helper text for clarifications, not for instructions."] }],
      tokens: [{ body: ["Uses border, interactive background and semantic text role tokens for helper/error."] }],
      accessibility: [{ bullets: ["Ensure label is associated with the input.", "Do not rely on color alone for error state."] }],
      implementation: [{ body: ["Use `label` for visible text and `error` for semantic error messaging."] }]
    },
    props: [
      { name: "label", type: "string", defaultValue: "optional", description: "Visible label for the checkbox." },
      { name: "helperText", type: "string", defaultValue: "optional", description: "Supportive message under the control." },
      { name: "error", type: "string", defaultValue: "optional", description: "Error message (overrides helperText)." }
    ],
    code: [
      {
        title: "Basic checkbox",
        code: `import { Checkbox } from "@genome-evolution/react";

<Checkbox label="Send notifications" defaultChecked />;
`
      }
    ],
    tokenCards: [{ label: "Border", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" }]
  },
  "Color Picker": {
    subtitle: "Compact color selection control with a live swatch and hex value.",
    tabs: {
      overview: [{ body: ["Use Color Picker to select a color value with a familiar swatch + system color input."] }],
      "when-to-use": [{ bullets: ["Use in settings, theme editors or token editors.", "Use when a user needs to pick a precise color value."] }],
      "when-not-to-use": [{ bullets: ["Avoid when only a fixed set of colors is allowed (use swatches/tags)."] }],
      anatomy: [{ bullets: ["Label + value row.", "Swatch preview.", "Native color input control."] }],
      states: [{ bullets: ["Default", "Focus visible", "Disabled (optional)"] }],
      rules: [{ bullets: ["Always display the current value.", "Keep it compact; use the full panel picker only when needed."] }],
      tokens: [{ body: ["Uses canvas background, border default and mono font for the value readout."] }],
      accessibility: [{ bullets: ["Associate label with the input.", "Expose the current value via text so it’s not color-only."] }],
      implementation: [{ body: ["Use `value` + `onChange` for controlled usage, or `defaultValue` for uncontrolled."] }]
    },
    props: [
      { name: "label", type: "string", defaultValue: `"Color"`, description: "Visible label." },
      { name: "defaultValue", type: "string", defaultValue: `"#297A39"`, description: "Initial value (uncontrolled)." },
      { name: "value", type: "string", defaultValue: "—", description: "Controlled value." },
      { name: "onChange", type: "(value: string) => void", defaultValue: "—", description: "Change handler." }
    ],
    code: [
      {
        title: "Controlled color picker",
        code: `import { ColorPicker } from "@genome-evolution/react";

<ColorPicker label="Brand" defaultValue="#297A39" />;
`
      }
    ],
    tokenCards: [{ label: "Canvas", token: "color.role.background.canvas", value: "var(--ge-color-role-background-canvas)" }]
  },
  Cursor: {
    subtitle: "Cursor indicator used for interaction previews and documentation callouts.",
    tabs: {
      overview: [{ body: ["Cursor is a lightweight visual indicator used in docs/patterns to demonstrate interaction intent."] }],
      "when-to-use": [{ bullets: ["Use in docs and tutorials to illustrate interactions.", "Use for prototypes or pattern thumbnails where a cursor communicates intent."] }],
      "when-not-to-use": [{ bullets: ["Do not use as a functional UI control.", "Avoid in production UI unless explicitly required by the product."] }],
      anatomy: [{ bullets: ["Glyph (cursor marker).", "Optional label."] }],
      states: [{ bullets: ["Default"] }],
      rules: [{ bullets: ["Keep labels short.", "Use tone only when it reinforces meaning."] }],
      tokens: [{ body: ["Uses border and subtle surface role tokens to stay theme-safe."] }],
      accessibility: [{ bullets: ["If decorative, do not rely on it to communicate meaning alone."] }],
      implementation: [{ body: ["Use `variant` for glyph shape and `tone` for subtle color emphasis."] }]
    },
    props: [
      { name: "variant", type: `"pointer" | "text" | "grab"`, defaultValue: `"pointer"`, description: "Cursor glyph style." },
      { name: "tone", type: `"default" | "evergreen" | "indigo"`, defaultValue: `"default"`, description: "Optional tone emphasis." },
      { name: "label", type: "string", defaultValue: "optional", description: "Optional label shown next to the glyph." }
    ],
    code: [
      {
        title: "Cursor label",
        code: `import { Cursor } from "@genome-evolution/react";

<Cursor variant="grab" tone="indigo" label="Drag" />;
`
      }
    ],
    tokenCards: [{ label: "Border default", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" }]
  },
  Datepicker: {
    subtitle: "Date input field for selecting a single day.",
    tabs: {
      overview: [{ body: ["Datepicker captures a single calendar date. It is used in forms, filters and scheduling flows."] }],
      "when-to-use": [{ bullets: ["Use when a user needs to pick a single date.", "Use alongside time inputs when scheduling."] }],
      "when-not-to-use": [{ bullets: ["Avoid for date ranges when a dedicated range picker exists.", "Do not use when users only choose from a few fixed dates (use Dropdown)."] }],
      anatomy: [{ bullets: ["Label (optional).", "Date input field.", "Helper or error message."] }],
      states: [{ bullets: ["Default", "Hovered", "Focused", "Error", "Disabled"] }],
      rules: [{ bullets: ["Prefer ISO defaults for programmatic values.", "Show helper text when constraints exist."] }],
      tokens: [{ body: ["Uses the Input field tokens (border, background, focus ring) for consistency."] }],
      accessibility: [{ bullets: ["Always associate label with the input.", "Do not rely on placeholder for essential information."] }],
      implementation: [{ body: ["Use `label`, `helperText` and `error` like Input."] }]
    },
    props: [
      { name: "label", type: "string", defaultValue: "optional", description: "Visible label." },
      { name: "helperText", type: "string", defaultValue: "optional", description: "Supportive message." },
      { name: "error", type: "string", defaultValue: "optional", description: "Error message (overrides helperText)." }
    ],
    code: [
      {
        title: "Date field",
        code: `import { Datepicker } from "@genome-evolution/react";

<Datepicker label="Start date" defaultValue="2026-05-04" />;
`
      }
    ],
    tokenCards: [{ label: "Focus ring", token: "color.role.border.focus", value: "var(--ge-color-role-border-focus)" }]
  },
  Dropdown: {
    subtitle: "Select control for choosing one option from a list.",
    tabs: {
      overview: [{ body: ["Dropdown presents a list of options and allows selecting a single value."] }],
      "when-to-use": [{ bullets: ["Use for 5+ options where radios would be too tall.", "Use when the selected value is persisted."] }],
      "when-not-to-use": [{ bullets: ["Avoid for 2–3 options (use Radio Button).", "Avoid for searchable long lists (use a combobox/autocomplete)."] }],
      anatomy: [{ bullets: ["Label (optional).", "Select input.", "Helper or error message."] }],
      states: [{ bullets: ["Default", "Hovered", "Focused", "Error", "Disabled"] }],
      rules: [{ bullets: ["Use clear labels for options.", "Default to a sensible option or require selection explicitly."] }],
      tokens: [{ body: ["Uses the Input field tokens for border, background and focus."] }],
      accessibility: [{ bullets: ["Provide a label for the field.", "Ensure option labels are unambiguous."] }],
      implementation: [{ body: ["Pass an `options` array, and use `defaultValue`/`value` like standard select elements."] }]
    },
    props: [
      { name: "options", type: "DropdownOption[]", defaultValue: "required", description: "Available options." },
      { name: "label", type: "string", defaultValue: "optional", description: "Visible label." },
      { name: "helperText", type: "string", defaultValue: "optional", description: "Supportive message." },
      { name: "error", type: "string", defaultValue: "optional", description: "Error message (overrides helperText)." }
    ],
    code: [
      {
        title: "Select field",
        code: `import { Dropdown } from "@genome-evolution/react";

<Dropdown\n  label=\"Role\"\n  options={[{ value: \"admin\", label: \"Admin\" }, { value: \"editor\", label: \"Editor\" }]}\n/>;\n`
      }
    ],
    tokenCards: [{ label: "Border default", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" }]
  },
  Group: {
    subtitle: "Layout primitive for grouping items with consistent spacing and alignment.",
    tabs: {
      overview: [{ body: ["Group is a simple flex layout primitive for spacing, wrapping and alignment."] }],
      "when-to-use": [{ bullets: ["Use to align buttons, tags and small clusters.", "Use when you need consistent gaps that follow tokens."] }],
      "when-not-to-use": [{ bullets: ["Avoid for complex grid layouts (use Layout/Grid).", "Do not use when semantic grouping is required (use fieldsets or sections)."] }],
      anatomy: [{ bullets: ["Flex container.", "Children elements."] }],
      states: [{ bullets: ["Default"] }],
      rules: [{ bullets: ["Prefer token gaps (xs/sm/md/lg).", "Use wrapping when content is responsive."] }],
      tokens: [{ body: ["Maps gap sizes to spacing gap tokens."] }],
      accessibility: [{ bullets: ["Group does not add semantics; use appropriate landmarks when needed."] }],
      implementation: [{ body: ["Use `direction`, `gap`, `align`, `justify` and `wrap` to control layout."] }]
    },
    props: [
      { name: "direction", type: `"row" | "column"`, defaultValue: `"row"`, description: "Primary axis direction." },
      { name: "gap", type: `"xs" | "sm" | "md" | "lg"`, defaultValue: `"sm"`, description: "Token-based spacing between children." },
      { name: "align", type: `"start" | "center" | "end" | "stretch"`, defaultValue: `"center"`, description: "Cross-axis alignment." },
      { name: "justify", type: `"start" | "center" | "end" | "between"`, defaultValue: `"start"`, description: "Main-axis distribution." },
      { name: "wrap", type: "boolean", defaultValue: "false", description: "Whether children wrap onto new lines." }
    ],
    code: [
      {
        title: "Button group",
        code: `import { Group, Button } from "@genome-evolution/react";

<Group gap="sm" wrap>
  <Button>Primary</Button>
  <Button variant="secondary">Secondary</Button>
</Group>;
`
      }
    ],
    tokenCards: [{ label: "Gap sm", token: "spacing.gap.sm", value: "var(--ge-spacing-gap-sm)" }]
  },
  Header: {
    subtitle: "Top-level page header for titles, context and actions.",
    tabs: {
      overview: [{ body: ["Header provides a clear page identity: title, optional eyebrow/subtitle, and optional actions."] }],
      "when-to-use": [{ bullets: ["Use at the top of a page or section.", "Use when you need actions tied to page context."] }],
      "when-not-to-use": [{ bullets: ["Avoid for simple pages with only one heading.", "Do not use as the global app navigation header unless designed for it."] }],
      anatomy: [{ bullets: ["Leading slot (optional).", "Eyebrow (optional).", "Title.", "Subtitle (optional).", "Actions slot (optional)."] }],
      states: [{ bullets: ["Default"] }],
      rules: [{ bullets: ["Keep titles concise.", "Actions should be 1–2 primary controls maximum."] }],
      tokens: [{ body: ["Uses border/background canvas tokens and typographic roles for hierarchy."] }],
      accessibility: [{ bullets: ["Use semantic `<header>` and ensure heading order makes sense on the page."] }],
      implementation: [{ body: ["Provide `title` always; add `actions` for page-level controls."] }]
    },
    props: [
      { name: "title", type: "ReactNode", defaultValue: "required", description: "Primary header title." },
      { name: "eyebrow", type: "ReactNode", defaultValue: "optional", description: "Small context label above title." },
      { name: "subtitle", type: "ReactNode", defaultValue: "optional", description: "Supporting description under title." },
      { name: "leading", type: "ReactNode", defaultValue: "optional", description: "Leading slot, often an icon/avatar." },
      { name: "actions", type: "ReactNode", defaultValue: "optional", description: "Right-aligned actions." }
    ],
    code: [
      {
        title: "Header with actions",
        code: `import { Header, Button } from "@genome-evolution/react";

<Header
  eyebrow="Workspace"
  title="Genome Evolution"
  actions={<Button size="sm">New</Button>}\n/>;\n`
      }
    ],
    tokenCards: [{ label: "Border default", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" }]
  },
  Link: {
    subtitle: "Inline navigation element for secondary destinations.",
    tabs: {
      overview: [{ body: ["Links navigate to other locations. Use them for navigation, not for triggering actions."] }],
      "when-to-use": [{ bullets: ["Use for navigation between pages or sections.", "Use inside text or supporting actions."] }],
      "when-not-to-use": [{ bullets: ["Do not use Link for primary actions (use Button).", "Avoid for destructive actions."] }],
      anatomy: [{ bullets: ["Anchor element.", "Label.", "Optional leading/trailing icon."] }],
      states: [{ bullets: ["Default", "Hover", "Focus visible", "Visited (optional)"] }],
      rules: [{ bullets: ["Keep link text descriptive.", "Avoid 'click here' labels."] }],
      tokens: [{ body: ["Uses link role tokens for default/hover/pressed/visited states."] }],
      accessibility: [{ bullets: ["Ensure link text makes sense out of context.", "Provide `href` and avoid empty links."] }],
      implementation: [{ body: ["Use `tone` to align with brand (evergreen/indigo) or keep default link styling."] }]
    },
    props: [
      { name: "tone", type: `"default" | "evergreen" | "indigo"`, defaultValue: `"default"`, description: "Applies brand tone to the link." },
      { name: "leadingIcon", type: "ReactNode", defaultValue: "optional", description: "Optional leading icon." },
      { name: "trailingIcon", type: "ReactNode", defaultValue: "optional", description: "Optional trailing icon." }
    ],
    code: [
      {
        title: "Inline link",
        code: `import { Link } from "@genome-evolution/react";

<Link href=\"#foundations-typography\">Typography</Link>;\n`
      }
    ],
    tokenCards: [{ label: "Link default", token: "color.role.link.default", value: "var(--ge-color-role-link-default)" }]
  },
  List: {
    subtitle: "Content list with optional leading/trailing slots and meta labels.",
    tabs: {
      overview: [{ body: ["List is used to display structured rows of content with consistent spacing and separators."] }],
      "when-to-use": [{ bullets: ["Use for users, items, settings rows and summaries.", "Use when each item has a title and optional description/meta."] }],
      "when-not-to-use": [{ bullets: ["Avoid for dense tabular data (use Table).", "Avoid for long text blocks (use paragraphs)."] }],
      anatomy: [{ bullets: ["Item row.", "Leading slot (optional).", "Title + description.", "Meta (optional).", "Trailing slot (optional)."] }],
      states: [{ bullets: ["Default", "Hover (optional when clickable)"] }],
      rules: [{ bullets: ["Keep titles short.", "Use meta for short badges or timestamps."] }],
      tokens: [{ body: ["Uses border default for separators and text roles for hierarchy."] }],
      accessibility: [{ bullets: ["Use list semantics (ul/ol) for collections.", "Ensure interactive rows use appropriate button/link semantics."] }],
      implementation: [{ body: ["Pass `items` with `title` and optional `description`, `leading`, `meta`, `trailing`."] }]
    },
    props: [
      { name: "items", type: "ListItem[]", defaultValue: "required", description: "Array of list items." },
      { name: "variant", type: `"unordered" | "ordered"`, defaultValue: `"unordered"`, description: "List semantics." },
      { name: "size", type: `"sm" | "md"`, defaultValue: `"md"`, description: "Row density." }
    ],
    code: [
      {
        title: "User list",
        code: `import { List, Badge } from "@genome-evolution/react";

<List\n  items={[{ title: \"Julia\", meta: <Badge tone=\"success\">Active</Badge> }]}\n/>;\n`
      }
    ],
    tokenCards: [{ label: "Separator", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" }]
  },
  Modal: {
    subtitle: "Blocking dialog surface for confirmations and focused tasks.",
    tabs: {
      overview: [{ body: ["Modal blocks background interaction and focuses the user on a single task or decision."] }],
      "when-to-use": [{ bullets: ["Use for confirmations with significant impact.", "Use for short focused forms that should not lose context."] }],
      "when-not-to-use": [{ bullets: ["Avoid for non-blocking info (use Inline Alert).", "Avoid stacking modals."] }],
      anatomy: [{ bullets: ["Backdrop layer.", "Dialog surface.", "Header (title/description).", "Body content.", "Footer actions."] }],
      states: [{ bullets: ["Open", "Closed"] }],
      rules: [{ bullets: ["Use 1 primary action + 1 secondary action.", "Ensure Escape and close affordance exist when dismissible."] }],
      tokens: [{ body: ["Uses overlay tokens for backdrop and border/background tokens for the surface."] }],
      accessibility: [{ bullets: ["Use `role=\"dialog\"` + `aria-modal=\"true\"`.", "Tie title/description via aria ids.", "Support Escape close when dismissible."] }],
      implementation: [{ body: ["Render when `open` is true, pass `onClose` for dismissal, and provide `footer` for actions."] }]
    },
    props: [
      { name: "open", type: "boolean", defaultValue: "required", description: "Whether the modal is visible." },
      { name: "title", type: "string", defaultValue: "required", description: "Modal title." },
      { name: "description", type: "string", defaultValue: "optional", description: "Supporting description." },
      { name: "footer", type: "ReactNode", defaultValue: "optional", description: "Footer actions area." },
      { name: "onClose", type: "() => void", defaultValue: "optional", description: "Dismiss handler (Escape/backdrop/close button)." }
    ],
    code: [
      {
        title: "Confirmation modal",
        code: `import { Modal, Button } from "@genome-evolution/react";

<Modal
  open
  title="Confirm changes"
  onClose={() => {}}
  footer={<Button>Confirm</Button>}\n/>;
`
      }
    ],
    tokenCards: [{ label: "Overlay black", token: "color.role.overlay.black", value: "var(--ge-color-role-overlay-black)" }]
  },
  Paginator: {
    subtitle: "Pagination control for navigating long lists of results.",
    tabs: {
      overview: [{ body: ["Paginator lets users move between pages in a result set."] }],
      "when-to-use": [{ bullets: ["Use for long lists with stable ordering.", "Use when pages are persisted in the URL or state."] }],
      "when-not-to-use": [{ bullets: ["Avoid when infinite scroll is a better fit.", "Avoid when there are very few results (no paging needed)."] }],
      anatomy: [{ bullets: ["Previous button.", "Page buttons.", "Ellipsis for skipped ranges.", "Next button."] }],
      states: [{ bullets: ["Default", "Active page", "Disabled prev/next at edges"] }],
      rules: [{ bullets: ["Keep the active page obvious.", "Allow quick jumps to first/last when pageCount is large."] }],
      tokens: [{ body: ["Uses canvas background, border default, and evergreen subtle surface for the active page."] }],
      accessibility: [{ bullets: ["Wrap in `nav` with `aria-label`.", "Mark the active page with `aria-current=\"page\"`."] }],
      implementation: [{ body: ["Use controlled `page` + `onPageChange`, and provide `pageCount`."] }]
    },
    props: [
      { name: "page", type: "number", defaultValue: "required", description: "Current page (1-based)." },
      { name: "pageCount", type: "number", defaultValue: "required", description: "Total pages." },
      { name: "onPageChange", type: "(page: number) => void", defaultValue: "required", description: "Change handler." }
    ],
    code: [
      {
        title: "Pagination nav",
        code: `import { Paginator } from "@genome-evolution/react";

<Paginator page={1} pageCount={16} onPageChange={() => {}} />;\n`
      }
    ],
    tokenCards: [{ label: "Active surface", token: "color.role.surface.evergreen.subtle", value: "var(--ge-color-role-surface-evergreen-subtle)" }]
  },
  "Progress Bar": {
    subtitle: "Visual indicator for completion or loading progress.",
    tabs: {
      overview: [{ body: ["Progress Bar communicates ongoing work, progress through a task, or indeterminate loading."] }],
      "when-to-use": [{ bullets: ["Use for linear progress within a step or page.", "Use indeterminate when duration is unknown."] }],
      "when-not-to-use": [{ bullets: ["Avoid for tiny operations that complete instantly.", "Do not replace critical feedback messages."] }],
      anatomy: [{ bullets: ["Track (background).", "Fill (progress)."] }],
      states: [{ bullets: ["Determinate", "Indeterminate"] }],
      rules: [{ bullets: ["Keep it subtle; avoid over-saturating the UI.", "Prefer evergreen for primary progress, indigo for secondary contexts."] }],
      tokens: [{ body: ["Uses surface subtle for track and brand surfaces for fill."] }],
      accessibility: [{ bullets: ["Expose progress via `role=\"progressbar\"` and aria value attributes when determinate."] }],
      implementation: [{ body: ["Use `value` + `max` for determinate, or `indeterminate` for unknown progress."] }]
    },
    props: [
      { name: "value", type: "number", defaultValue: "0", description: "Current progress value (determinate)." },
      { name: "max", type: "number", defaultValue: "100", description: "Maximum progress value." },
      { name: "indeterminate", type: "boolean", defaultValue: "false", description: "Unknown duration loading state." },
      { name: "tone", type: `"evergreen" | "indigo" | "neutral"`, defaultValue: `"evergreen"`, description: "Fill color tone." }
    ],
    code: [
      {
        title: "Indeterminate loading",
        code: `import { ProgressBar } from "@genome-evolution/react";

<ProgressBar indeterminate label=\"Loading\" />;\n`
      }
    ],
    tokenCards: [{ label: "Track surface", token: "color.role.surface.subtle", value: "var(--ge-color-role-surface-subtle)" }]
  },
  "Radio Button": {
    subtitle: "Single-choice selection control for mutually exclusive options.",
    tabs: {
      overview: [{ body: ["Radio Buttons let users select exactly one option from a set."] }],
      "when-to-use": [{ bullets: ["Use when only one option can be active.", "Use when options are short and users should compare them."] }],
      "when-not-to-use": [{ bullets: ["Avoid for long lists (use Dropdown).", "Avoid for independent choices (use Checkbox)."] }],
      anatomy: [{ bullets: ["Radio input.", "Dot indicator.", "Label + optional description."] }],
      states: [{ bullets: ["Unselected", "Selected", "Hover", "Focus visible", "Disabled (optional)"] }],
      rules: [{ bullets: ["Keep options concise.", "Provide descriptions only when needed."] }],
      tokens: [{ body: ["Uses border default, interactive hovered background and evergreen surface for selected indicator."] }],
      accessibility: [{ bullets: ["Group with a label.", "Ensure keyboard navigation works with arrow keys when in a radiogroup."] }],
      implementation: [{ body: ["Use `options` plus a controlled `value`/`onChange` or `defaultValue` for uncontrolled."] }]
    },
    props: [
      { name: "label", type: "string", defaultValue: "optional", description: "Group label." },
      { name: "options", type: "RadioOption[]", defaultValue: "required", description: "Selectable options." },
      { name: "value", type: "string", defaultValue: "—", description: "Controlled selected value." },
      { name: "defaultValue", type: "string", defaultValue: "—", description: "Uncontrolled initial value." },
      { name: "onChange", type: "(value: string) => void", defaultValue: "optional", description: "Selection handler." }
    ],
    code: [
      {
        title: "Radio group",
        code: `import { RadioButtonGroup } from "@genome-evolution/react";

<RadioButtonGroup\n  label=\"Plan\"\n  options={[{ value: \"free\", label: \"Free\" }]}\n  onChange={() => {}}\n/>;\n`
      }
    ],
    tokenCards: [{ label: "Selected surface", token: "color.role.surface.evergreen.bold", value: "var(--ge-color-role-surface-evergreen-bold)" }]
  },
  Scoreboard: {
    subtitle: "Compact metric card for quick KPIs and system status summaries.",
    tabs: {
      overview: [{ body: ["Scoreboard displays a label, a value, and an optional change indicator."] }],
      "when-to-use": [{ bullets: ["Use for dashboards and overview panels.", "Use for high-level metrics at a glance."] }],
      "when-not-to-use": [{ bullets: ["Avoid for dense analytics tables.", "Avoid when users need precise comparisons (use charts/tables)."] }],
      anatomy: [{ bullets: ["Label (eyebrow).", "Value.", "Change line (optional)."] }],
      states: [{ bullets: ["Default"] }],
      rules: [{ bullets: ["Keep label short.", "Use semantic tone only for the change line."] }],
      tokens: [{ body: ["Uses surface subtlest for background and semantic text roles for change coloring."] }],
      accessibility: [{ bullets: ["Do not rely on color alone; include up/down text or symbols in the change."] }],
      implementation: [{ body: ["Use `tone` to color the change line (success/warning/danger/info)."] }]
    },
    props: [
      { name: "label", type: "ReactNode", defaultValue: "required", description: "Metric label." },
      { name: "value", type: "ReactNode", defaultValue: "required", description: "Primary value." },
      { name: "change", type: "ReactNode", defaultValue: "optional", description: "Supporting change indicator." },
      { name: "tone", type: `"neutral" | "success" | "warning" | "danger" | "info"`, defaultValue: `"neutral"`, description: "Change line tone." }
    ],
    code: [
      {
        title: "KPI tile",
        code: `import { Scoreboard } from "@genome-evolution/react";

<Scoreboard label=\"Usuarios\" value=\"4,821\" change=\"↑ 12.4%\" tone=\"success\" />;\n`
      }
    ],
    tokenCards: [{ label: "Surface", token: "color.role.surface.subtlest", value: "var(--ge-color-role-surface-subtlest)" }]
  },
  Scroll: {
    subtitle: "Scrollable container for constrained vertical regions.",
    tabs: {
      overview: [{ body: ["Scroll constrains content height and enables scrolling within a surface."] }],
      "when-to-use": [{ bullets: ["Use in side panels or within cards when content may overflow.", "Use to keep pages scannable."] }],
      "when-not-to-use": [{ bullets: ["Avoid nested scroll areas when possible.", "Avoid when the page can scroll normally without harm."] }],
      anatomy: [{ bullets: ["Scroll container.", "Inner content padding."] }],
      states: [{ bullets: ["Default"] }],
      rules: [{ bullets: ["Use a sensible maxHeight.", "Avoid trapping the user in a small scroll region on mobile."] }],
      tokens: [{ body: ["Uses border default and canvas background for a neutral scroll surface."] }],
      accessibility: [{ bullets: ["Ensure focusable content inside remains keyboard reachable.", "Provide adequate contrast for scrollbars when possible."] }],
      implementation: [{ body: ["Use `maxHeight` to constrain and place any content inside."] }]
    },
    props: [{ name: "maxHeight", type: "number | string", defaultValue: "220", description: "Maximum height before scrolling." }],
    code: [
      {
        title: "Scrollable list",
        code: `import { Scroll } from "@genome-evolution/react";

<Scroll maxHeight={180}>…</Scroll>;\n`
      }
    ],
    tokenCards: [{ label: "Border", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" }]
  },
  "Segmented Button": {
    subtitle: "Single-choice toggle group for small sets of modes or filters.",
    tabs: {
      overview: [{ body: ["Segmented Button switches between a small set of mutually exclusive modes."] }],
      "when-to-use": [{ bullets: ["Use for 2–4 modes like Light/Dark/System.", "Use when the choices should be visible without opening a menu."] }],
      "when-not-to-use": [{ bullets: ["Avoid for long option lists (use Dropdown).", "Avoid when choices aren’t mutually exclusive (use Checkbox/Tags)."] }],
      anatomy: [{ bullets: ["Segment container.", "Segment items.", "Selected segment highlight."] }],
      states: [{ bullets: ["Default", "Selected", "Hover", "Focus visible"] }],
      rules: [{ bullets: ["Keep labels short.", "Prefer 2–3 segments for clarity."] }],
      tokens: [{ body: ["Uses surface subtlest for container and canvas background for selected chip."] }],
      accessibility: [{ bullets: ["Group related controls.", "Ensure selected state is not communicated by color alone (e.g. bold text)."] }],
      implementation: [{ body: ["Use controlled `value` + `onChange` and pass `options`."] }]
    },
    props: [
      { name: "options", type: "SegmentedOption[]", defaultValue: "required", description: "Segments." },
      { name: "value", type: "string", defaultValue: "required", description: "Selected value." },
      { name: "onChange", type: "(value: string) => void", defaultValue: "required", description: "Selection handler." }
    ],
    code: [
      {
        title: "Theme mode",
        code: `import { SegmentedButton } from "@genome-evolution/react";

<SegmentedButton\n  value=\"light\"\n  onChange={() => {}}\n  options={[{ value: \"light\", label: \"Light\" }]}\n/>;\n`
      }
    ],
    tokenCards: [{ label: "Container surface", token: "color.role.surface.subtlest", value: "var(--ge-color-role-surface-subtlest)" }]
  },
  "Split Button": {
    subtitle: "Primary action with an attached menu for secondary related actions.",
    tabs: {
      overview: [{ body: ["Split Button pairs a primary action with a dropdown of alternatives."] }],
      "when-to-use": [{ bullets: ["Use when one action is primary but alternatives exist.", "Use for publish/export flows."] }],
      "when-not-to-use": [{ bullets: ["Avoid when all actions are equally important (use Menu).", "Avoid if the primary action is unclear."] }],
      anatomy: [{ bullets: ["Primary button.", "Toggle button.", "Menu surface."] }],
      states: [{ bullets: ["Closed", "Open", "Hover", "Focus visible"] }],
      rules: [{ bullets: ["Keep menu items short.", "Do not hide critical destructive actions in the menu."] }],
      tokens: [{ body: ["Uses brand surface tokens for primary, canvas background for menu, and dropdown z-index tokens."] }],
      accessibility: [{ bullets: ["Ensure toggle has `aria-expanded`.", "Menu items should be keyboard accessible."] }],
      implementation: [{ body: ["Pass `onClick` for primary and `items` for the menu."] }]
    },
    props: [
      { name: "label", type: "ReactNode", defaultValue: "required", description: "Primary label." },
      { name: "onClick", type: "() => void", defaultValue: "required", description: "Primary action handler." },
      { name: "items", type: "SplitButtonItem[]", defaultValue: "required", description: "Menu items." }
    ],
    code: [
      {
        title: "Publish split button",
        code: `import { SplitButton } from "@genome-evolution/react";

<SplitButton\n  label=\"Publish\"\n  onClick={() => {}}\n  items={[{ label: \"Publish now\", onSelect: () => {} }]}\n/>;\n`
      }
    ],
    tokenCards: [{ label: "Dropdown z-index", token: "layer.zIndex.dropdown", value: "var(--ge-layer-z-index-dropdown)" }]
  },
  Snackbar: {
    subtitle: "Transient feedback message anchored to the bottom of the viewport.",
    tabs: {
      overview: [{ body: ["Snackbar provides lightweight feedback after an action, without blocking the UI."] }],
      "when-to-use": [{ bullets: ["Use for confirmations like saved/updated states.", "Use when the user can keep working immediately."] }],
      "when-not-to-use": [{ bullets: ["Avoid for critical errors that require attention (use Inline Alert or Modal).", "Avoid stacking multiple snackbars."] }],
      anatomy: [{ bullets: ["Message text.", "Optional action button.", "Dismiss/close affordance."] }],
      states: [{ bullets: ["Open", "Closed", "Auto-hide"] }],
      rules: [{ bullets: ["Keep copy short (1–2 lines).", "Action label should be a verb (e.g. Undo)."] }],
      tokens: [{ body: ["Uses raised surface/semantic surfaces for background and inverse text for contrast."] }],
      accessibility: [{ bullets: ["Use `role=\"status\"` / `aria-live` so SR users hear feedback.", "Do not rely on color alone for meaning."] }],
      implementation: [{ body: ["Use controlled `open` and pass `onClose`. Use `autoHideDurationMs` for timed dismissal."] }]
    },
    props: [
      { name: "open", type: "boolean", defaultValue: "required", description: "Whether the snackbar is visible." },
      { name: "message", type: "string", defaultValue: "required", description: "Snackbar text." },
      { name: "tone", type: `"neutral" | "success" | "warning" | "danger" | "info"`, defaultValue: `"neutral"`, description: "Semantic tone." },
      { name: "actionLabel", type: "string", defaultValue: "optional", description: "Optional action label." },
      { name: "onAction", type: "() => void", defaultValue: "optional", description: "Action handler." },
      { name: "onClose", type: "() => void", defaultValue: "optional", description: "Dismiss handler." }
    ],
    code: [
      {
        title: "Success snackbar",
        code: `import { Snackbar } from "@genome-evolution/react";

<Snackbar open message=\"Saved\" tone=\"success\" onClose={() => {}} />;\n`
      }
    ],
    tokenCards: [{ label: "Toast z-index", token: "layer.zIndex.toast", value: "var(--ge-layer-z-index-toast)" }]
  },
  Stepper: {
    subtitle: "Progress indicator for multi-step flows.",
    tabs: {
      overview: [{ body: ["Stepper shows a user where they are in a sequence of steps and what’s next."] }],
      "when-to-use": [{ bullets: ["Use for multi-step onboarding or checkout flows.", "Use when steps have clear names."] }],
      "when-not-to-use": [{ bullets: ["Avoid for short single-step forms.", "Avoid when the sequence is not linear."] }],
      anatomy: [{ bullets: ["Step marker.", "Step label + description.", "Connector line (horizontal)."] }],
      states: [{ bullets: ["Todo", "Current", "Done"] }],
      rules: [{ bullets: ["Keep step labels short.", "Use 3–5 steps where possible."] }],
      tokens: [{ body: ["Uses border tokens for markers/lines and evergreen bold surface for completed steps."] }],
      accessibility: [{ bullets: ["Don’t rely only on color; markers include text/✓.", "Ensure current step is visually distinct."] }],
      implementation: [{ body: ["Pass a `steps` array and a 0-based `currentStep`. Choose orientation when needed."] }]
    },
    props: [
      { name: "steps", type: "StepperStep[]", defaultValue: "required", description: "Step definitions." },
      { name: "currentStep", type: "number", defaultValue: "required", description: "0-based current index." },
      { name: "orientation", type: `"horizontal" | "vertical"`, defaultValue: `"horizontal"`, description: "Layout direction." }
    ],
    code: [
      {
        title: "Three steps",
        code: `import { Stepper } from "@genome-evolution/react";

<Stepper currentStep={1} steps={[{ label: \"Details\" }, { label: \"Billing\" }, { label: \"Confirm\" }]} />;\n`
      }
    ],
    tokenCards: [{ label: "Focus border", token: "color.role.border.focus", value: "var(--ge-color-role-border-focus)" }]
  },
  Switch: {
    subtitle: "Binary toggle for immediate on/off behavior.",
    tabs: {
      overview: [{ body: ["Switch toggles a setting on or off immediately. Use it for real-time effects, not form submission."] }],
      "when-to-use": [{ bullets: ["Use for settings that apply instantly.", "Use when the label clearly describes the state."] }],
      "when-not-to-use": [{ bullets: ["Avoid for multi-select options (use Checkbox).", "Avoid when selection is submitted later (use Checkbox)."] }],
      anatomy: [{ bullets: ["Track container.", "Thumb.", "On/off state."] }],
      states: [{ bullets: ["Off", "On", "Focus visible", "Disabled"] }],
      rules: [{ bullets: ["Always pair with a label.", "Keep the label to a single line when possible."] }],
      tokens: [{ body: ["Uses border default and evergreen bold surface for the on state."] }],
      accessibility: [{ bullets: ["Use `role=\"switch\"` and `aria-checked`.", "Ensure keyboard operability and visible focus."] }],
      implementation: [{ body: ["Use controlled `checked` + `onCheckedChange`, or `defaultChecked` for uncontrolled."] }]
    },
    props: [
      { name: "checked", type: "boolean", defaultValue: "—", description: "Controlled checked state." },
      { name: "defaultChecked", type: "boolean", defaultValue: "false", description: "Uncontrolled initial state." },
      { name: "onCheckedChange", type: "(checked: boolean) => void", defaultValue: "optional", description: "Change handler." },
      { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables interaction." }
    ],
    code: [
      {
        title: "Controlled switch",
        code: `import { Switch } from "@genome-evolution/react";

<Switch checked onCheckedChange={() => {}} aria-label=\"Notifications\" />;\n`
      }
    ],
    tokenCards: [{ label: "On surface", token: "color.role.surface.evergreen.bold", value: "var(--ge-color-role-surface-evergreen-bold)" }]
  },
  Tab: {
    subtitle: "Navigation element for switching between sibling views within the same context.",
    tabs: {
      overview: [{ body: ["Tabs switch between related views while staying in the same context."] }],
      "when-to-use": [{ bullets: ["Use for 2–5 sibling panels.", "Use when users frequently switch between views."] }],
      "when-not-to-use": [{ bullets: ["Avoid for long navigation menus (use Sidebar).", "Avoid when content is linear (use sections)."] }],
      anatomy: [{ bullets: ["Tab list container.", "Tab items.", "Active indicator."] }],
      states: [{ bullets: ["Default", "Active", "Hover", "Focus visible"] }],
      rules: [{ bullets: ["Keep labels short.", "Avoid wrapping; shorten labels if needed."] }],
      tokens: [{ body: ["Uses border default for the baseline and border strong for the active indicator."] }],
      accessibility: [{ bullets: ["Use `role=\"tablist\"` and `role=\"tab\"` with `aria-selected`.", "Ensure keyboard focus is visible."] }],
      implementation: [{ body: ["Use controlled `value` + `onChange` with `options`."] }]
    },
    props: [
      { name: "options", type: "TabOption[]", defaultValue: "required", description: "Tab definitions." },
      { name: "value", type: "string", defaultValue: "required", description: "Selected tab value." },
      { name: "onChange", type: "(value: string) => void", defaultValue: "required", description: "Change handler." }
    ],
    code: [
      {
        title: "Two tabs",
        code: `import { TabList } from "@genome-evolution/react";

<TabList\n  value=\"solid\"\n  onChange={() => {}}\n  options={[{ value: \"solid\", label: \"Solid\" }, { value: \"gradient\", label: \"Gradient\" }]}\n/>;\n`
      }
    ],
    tokenCards: [{ label: "Active indicator", token: "color.role.border.strong", value: "var(--ge-color-role-border-strong)" }]
  },
  Tag: {
    subtitle: "Compact interactive label used for filters, taxonomy and selection chips.",
    tabs: {
      overview: [{ body: ["Tags are small chips used to filter, categorize or represent selectable tokens."] }],
      "when-to-use": [{ bullets: ["Use for filters and categories.", "Use for compact multi-select with clear affordance."] }],
      "when-not-to-use": [{ bullets: ["Avoid for long phrases (use Button).", "Avoid when the choice needs a description (use Checkbox/Radio)."] }],
      anatomy: [{ bullets: ["Pill container.", "Label.", "Optional leading icon."] }],
      states: [{ bullets: ["Default", "Hover", "Pressed", "Focused", "Disabled (optional)"] }],
      rules: [{ bullets: ["Keep labels short (1–2 words).", "Use tone consistently across the product."] }],
      tokens: [{ body: ["Uses border/text role tokens and canvas background."] }],
      accessibility: [{ bullets: ["If interactive, render as a button with focus ring.", "Do not rely on color alone to convey meaning."] }],
      implementation: [{ body: ["Use `tone` for brand alignment and `onClick` for interaction."] }]
    },
    props: [
      { name: "tone", type: `"neutral" | "evergreen" | "indigo"`, defaultValue: `"neutral"`, description: "Tone styling." },
      { name: "icon", type: "ReactNode", defaultValue: "optional", description: "Optional leading icon." }
    ],
    code: [
      {
        title: "Filter chip",
        code: `import { Tag } from "@genome-evolution/react";

<Tag tone=\"indigo\">Filter</Tag>;\n`
      }
    ],
    tokenCards: [{ label: "Border default", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" }]
  },
  Tooltip: {
    subtitle: "Floating helper text shown on hover or keyboard focus.",
    tabs: {
      overview: [{ body: ["Tooltips provide short helper text for controls and icons."] }],
      "when-to-use": [{ bullets: ["Use for clarifying icon-only buttons.", "Use for short definitions or hints."] }],
      "when-not-to-use": [{ bullets: ["Avoid for long content (use Popover).", "Do not hide critical instructions in tooltips."] }],
      anatomy: [{ bullets: ["Trigger element.", "Tooltip surface.", "Short text content."] }],
      states: [{ bullets: ["Hidden", "Visible"] }],
      rules: [{ bullets: ["Keep to one short sentence.", "Avoid interactive content inside a tooltip."] }],
      tokens: [{ body: ["Uses raised surface and inverse text for contrast; sits on tooltip z-index."] }],
      accessibility: [{ bullets: ["Show on keyboard focus as well as hover.", "Ensure tooltip content is not the only way to access critical info."] }],
      implementation: [{ body: ["Wrap any trigger with `<Tooltip content=...>…</Tooltip>`. Use `side` for placement."] }]
    },
    props: [
      { name: "content", type: "ReactNode", defaultValue: "required", description: "Tooltip text/content." },
      { name: "side", type: `"top" | "bottom" | "left" | "right"`, defaultValue: `"top"`, description: "Placement." }
    ],
    code: [
      {
        title: "Icon hint",
        code: `import { Tooltip, IconButton } from "@genome-evolution/react";

<Tooltip content=\"Search\">\n  <IconButton label=\"Search\" icon={<SearchIcon />} />\n</Tooltip>;\n`
      }
    ],
    tokenCards: [{ label: "Tooltip z-index", token: "layer.zIndex.tooltip", value: "var(--ge-layer-z-index-tooltip)" }]
  },
  "Text Area": {
    subtitle: "Multi-line text input for longer content and notes.",
    tabs: {
      overview: [{ body: ["Text Area is a multi-line input used for notes, descriptions and longer form content."] }],
      "when-to-use": [{ bullets: ["Use for multi-line input.", "Use when users may paste longer content."] }],
      "when-not-to-use": [{ bullets: ["Avoid for single-line fields (use Input).", "Avoid when a rich editor is required."] }],
      anatomy: [{ bullets: ["Label (optional).", "Textarea field.", "Helper or error message."] }],
      states: [{ bullets: ["Default", "Hovered", "Focused", "Error", "Disabled"] }],
      rules: [{ bullets: ["Provide helper text when constraints exist.", "Prefer sensible min-height and allow resize when appropriate."] }],
      tokens: [{ body: ["Uses the same input tokens as Input for border/background/focus ring."] }],
      accessibility: [{ bullets: ["Always associate label with textarea.", "Do not rely on placeholder for essential information."] }],
      implementation: [{ body: ["Use `label`, `helperText` and `error`. Controlled usage uses standard textarea props."] }]
    },
    props: [
      { name: "label", type: "string", defaultValue: "optional", description: "Visible label." },
      { name: "helperText", type: "string", defaultValue: "optional", description: "Supportive message." },
      { name: "error", type: "string", defaultValue: "optional", description: "Error message (overrides helperText)." }
    ],
    code: [
      {
        title: "Notes field",
        code: `import { TextArea } from "@genome-evolution/react";

<TextArea label=\"Notes\" placeholder=\"Write…\" />;\n`
      }
    ],
    tokenCards: [{ label: "Border default", token: "color.role.border.default", value: "var(--ge-color-role-border-default)" }]
  }
};
