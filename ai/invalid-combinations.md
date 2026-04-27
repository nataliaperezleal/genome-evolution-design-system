# Invalid Combinations — Genome Plus DS

Lista consolidada de combinaciones de propiedades que NO deben usarse.

> ⚠️ Una IA que genera UI con estas combinaciones produce diseños incorrectos.

## Accordion
- `Show Checkbox=True` + `Show Icon=True` → slot izquierdo tiene espacio para uno solo.
- `State=Disable` + `Behavior=Expanded` → deshabilitado nunca expandido.
- `State=Loading` + `Behavior=Expanded` → carga implica contenido no disponible.

## Avatar
- `Size=16` + `Show state=true` → indicador no cabe.
- `Letter` visible con `Type=Icon` o `Type=Person` → Letter solo en Print.
- `Type=Person` sin imagen → usar Print o Icon como fallback.

## Backdrop
- `Color=White` + tema Light → overlay invisible.
- `Color=Black` + tema Dark → overlay invisible.
- Backdrop sin componente flotante encima → sin propósito.

## Badge
- Badge sin valor numérico → siempre mostrar número.
- `Type=Line` + `Color=Inverse` → contraste insuficiente.
- Esperar que `Color=Warning` use token de color en texto → siempre usa `text/primary`.

## Button
- `Type=Primary/Secondary` + `Color=Default` + State ≠ `Disabled` → inválido.
- `Type=Primary/Secondary` + `State=Disabled` + Color ≠ `Default` → inválido.
- `Type=Tertiary` + `Color=Evergreen/Indigo` → solo `Color=Default`.
- `Type=Tertiary` + `State=Disabled` → no existe.
- `Type=Danger/Info/Success/Warning` + `Color` ≠ `Default` → solo `Default`.
- `Type=Danger/Info/Success/Warning` + `State=Disabled` → no existe.

## Checkbox
- `Color=Disabled` + `State=Hovered/Pressed/Focused` → deshabilitado no interactúa.
- `Type=Default` interpretado como "seleccionado" → Default = vacío.
- `Show Label=False` sin `aria-label` → inaceptable por accesibilidad.
