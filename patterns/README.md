# Patterns — Genome Evolution DS

Patrones reusables que combinan componentes para resolver casos de uso comunes.

## ¿Qué son los patrones?

Un **patrón** es una solución documentada a un problema de UX recurrente. Combina 2+ componentes en una composición específica, con estados, comportamiento y guías de accesibilidad.

**Ejemplo:** El patrón "Login Form" combina Input, Checkbox, Button, Link, e Inline Alert para crear una experiencia completa de autenticación.

---

## Patrones Disponibles

### 📋 Formularios
- [Login Form](./forms/login.md) — Autenticación con email + password
- [Form Validation](./forms/form-validation.md) — Manejo de errores inline y globales
- [Multi-step Form](./forms/multi-step-form.md) — Wizard/stepper form (Próximamente)

### 🗂️ Navegación
- [Sidebar Navigation](./navigation/sidebar-navigation.md) — Menu principal collapsible
- [Breadcrumbs](./navigation/breadcrumbs.md) — Navegación de jerarquía (Próximamente)
- [Tabs Navigation](./navigation/tabs-navigation.md) — Content switching (Próximamente)

### 📊 Datos
- [CRUD Table](./data-display/crud-table.md) — Tabla con acciones: crear, editar, eliminar
- [Card Grid](./data-display/card-grid.md) — Grid de cards (Próximamente)
- [Filterable List](./data-display/filterable-list.md) — Lista con filtros (Próximamente)

### 💬 Feedback & Estados
- [Empty State](./feedback/empty-state.md) — Cuando no hay datos
- [Loading State](./feedback/loading-state.md) — Skeleton loaders y spinners
- [Error Recovery](./feedback/error-recovery.md) — Manejo de errores y retry (Próximamente)

---

## Cómo Usar los Patrones

1. **Encuentra tu caso de uso** — ¿Necesitas un login? ¿Una tabla? Ve al patrón correspondiente.
2. **Lee el patrón** — Entiende la composición, states, y tokens usados.
3. **Adapta al contexto** — Modifica labels, validaciones, según tu necesidad.
4. **Implementa** — Usa los componentes Genome Evolution que el patrón referencia.

---

## Contribuir Patrones Nuevos

1. Copia `templates/pattern-template.md`.
2. Nombres en kebab-case: `./patterns/[category]/[pattern-name].md`.
3. Llena todos los sections: Problem, Anatomy, Composition, States, Tokens, Accessibility.
4. Añade entry en este README.
5. Submit PR.

Ver [CONTRIBUTING.md](../CONTRIBUTING.md) para detalles.

---

## Principios de Diseño

✅ **Do**
- Usar componentes del DS (nunca custom HTML).
- Documentar todos los estados (default, loading, error, success).
- Incluir notas de accesibilidad.
- Mantener patrones agnósticos (funciona en React, Vue, vanilla, etc.).

❌ **Don't**
- No crear componentes nuevos dentro de patrones.
- No hardcodear colores (usar tokens).
- No obviar accesibilidad por simplicidad.

---

*Patrones para Genome Evolution DS v2.0.0+*
