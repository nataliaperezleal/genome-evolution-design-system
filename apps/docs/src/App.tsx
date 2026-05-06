import { useEffect, useMemo, useState } from "react";

import {
  Accordion,
  Avatar,
  Backdrop,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  ClearButton,
  Cursor,
  Datepicker,
  IconButton,
  InlineAlert,
  Input,
  ColorPicker,
  Dropdown,
  Link,
  Group,
  Header,
  Switch,
  Table,
  Tag,
  List,
  Modal,
  Paginator,
  ProgressBar,
  RadioButtonGroup,
  Scoreboard,
  Scroll,
  SegmentedButton,
  SplitButton,
  Snackbar,
  Stepper,
  TabList,
  Tooltip,
  TextArea
} from "@genome-evolution/react";

import { componentDocsBySlug, foundationDocsBySlug, manifest } from "./data";
import { componentSpecs, componentTabLabels, tr, type ComponentTabId } from "./component-specs";
import { renderMarkdown } from "./markdown";
import type { NavItem } from "./types";
import { BorderFoundation } from "./foundations/BorderFoundation";
import { ColorsFoundation } from "./foundations/ColorsFoundation";
import { PaletteFoundation } from "./foundations/PaletteFoundation";
import { TokensFoundation } from "./foundations/TokensFoundation";
import { TypographyFoundation } from "./foundations/TypographyFoundation";
import { LayoutFoundation } from "./foundations/LayoutFoundation";
import { OpacityFoundation } from "./foundations/OpacityFoundation";
import { ElevationFoundation } from "./foundations/ElevationFoundation";
import { detectInitialLanguage, t, type Language } from "./i18n";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path
        d="M3.333 8h9.334m0 0L8.667 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path
        d="M7.333 12a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Zm5.334 1.333-2.54-2.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const foundationItems: NavItem[] = manifest.foundations
  .filter((entry) => entry.name !== "Spacing")
  .map((entry) => ({
    id: entry.file.replace(/\.md$/, "").replace(/\//g, "-"),
    label: entry.name,
    group: "foundations"
  }))
  .sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }));

const componentItems: NavItem[] = manifest.components
  .map((entry) => ({
    id: entry.file.replace(/\.md$/, "").replace(/\//g, "-"),
    label: entry.name,
    group: "components"
  }))
  .sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: "base" }));

const navItems: NavItem[] = [{ id: "overview", label: "Overview", group: "overview" }, ...foundationItems, ...componentItems];

function getItemMeta(id: string) {
  if (id === "overview") {
    return { kind: "overview" as const };
  }
  if (foundationDocsBySlug[id]) {
    return { kind: "foundation" as const, doc: foundationDocsBySlug[id] };
  }
  return { kind: "component" as const, doc: componentDocsBySlug[id] };
}

const homeFeaturedComponentIds = [
  "components-button",
  "components-input",
  "components-modal",
  "components-inline-alert",
  "components-table",
  "components-dropdown"
];

function ComponentPreview({ componentName }: { componentName: string }) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoPage, setDemoPage] = useState(1);
  const [demoSegment, setDemoSegment] = useState("light");
  const [demoSnackOpen, setDemoSnackOpen] = useState(false);
  const [demoSwitch, setDemoSwitch] = useState(true);
  const [demoTab, setDemoTab] = useState("solid");

  if (componentName === "Button") {
    return (
      <div className="preview-stack">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
      </div>
    );
  }

  if (componentName === "Input") {
    return (
      <div className="preview-form">
        <Input label="Workspace name" placeholder="Genome Evolution" helperText="This appears across your docs site." />
        <Input label="Project slug" defaultValue="genome-evolution" error="Slug already in use." />
      </div>
    );
  }

  if (componentName === "Icon Button") {
    return (
      <div className="preview-stack">
        <IconButton label="Search" icon={<SearchIcon />} />
        <IconButton label="Go forward" icon={<ArrowIcon />} variant="outline" tone="neutral" />
      </div>
    );
  }

  if (componentName === "Badge") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Badge tone="neutral">Borrador</Badge>
          <Badge tone="primary">Nuevo</Badge>
          <Badge tone="success">Activo</Badge>
          <Badge tone="warning">En revisión</Badge>
          <Badge tone="danger">Error</Badge>
        </div>
      </div>
    );
  }

  if (componentName === "Inline Alert") {
    return (
      <div className="preview-stack">
        <InlineAlert tone="info" icon="ℹ">
          Tu plan se renovará el <strong>15 de mayo</strong>. Revisa tu método de pago antes de esa fecha.
        </InlineAlert>
        <InlineAlert tone="success" icon="✓">
          Cambios guardados correctamente. Los usuarios verán la actualización en breve.
        </InlineAlert>
        <InlineAlert tone="warning" icon="⚠">
          El uso del API supera el 80% de tu cuota mensual. Considera actualizar tu plan.
        </InlineAlert>
        <InlineAlert tone="danger" icon="✕">
          No se pudo procesar el pago. Verifica los datos de tu tarjeta e intenta nuevamente.
        </InlineAlert>
      </div>
    );
  }

  if (componentName === "Card") {
    return (
      <div className="preview-stack">
        <Card
          style={{ width: 240 }}
          title="Tarjeta base"
          footer={
            <>
              <Badge tone="neutral">Borrador</Badge>
              <Button size="sm" variant="tertiary">
                Ver
              </Button>
            </>
          }
        >
          Ideal para agrupar información relacionada con un contenedor de bajo contraste.
        </Card>
        <Card
          style={{ width: 240 }}
          variant="elevated"
          title="Tarjeta elevada"
          footer={
            <>
              <Badge tone="primary">Destacado</Badge>
              <Button size="sm" tone="indigo">
                Abrir
              </Button>
            </>
          }
        >
          Para contenido destacado o seleccionado que necesita separarse del fondo.
        </Card>
      </div>
    );
  }

  if (componentName === "Avatar") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Avatar initials="AB" size="sm" tone="blue" />
          <Avatar initials="CD" size="md" tone="green" />
          <Avatar initials="EF" size="lg" tone="amber" />
        </div>
        <div className="preview-row">
          <div className="avatar-group">
            <Avatar initials="JS" size="md" tone="blue" />
            <Avatar initials="MR" size="md" tone="green" />
            <Avatar initials="PL" size="md" tone="amber" />
            <Avatar initials="+4" size="md" tone="pink" />
          </div>
        </div>
      </div>
    );
  }

  if (componentName === "Table") {
    return (
      <div className="preview-table">
        <Table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Último acceso</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-user">
                  <Avatar initials="JS" size="sm" tone="blue" />
                  <div>
                    <div className="table-user__name">Julia Sánchez</div>
                    <div className="table-user__meta">julia@empresa.com</div>
                  </div>
                </div>
              </td>
              <td>
                <code>admin</code>
              </td>
              <td>
                <Badge tone="success">Activo</Badge>
              </td>
              <td className="table-muted">Hace 2 h</td>
              <td>
                <Button size="sm" variant="tertiary">
                  ···
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-user">
                  <Avatar initials="MR" size="sm" tone="amber" />
                  <div>
                    <div className="table-user__name">Miguel Ruiz</div>
                    <div className="table-user__meta">miguel@empresa.com</div>
                  </div>
                </div>
              </td>
              <td>
                <code>editor</code>
              </td>
              <td>
                <Badge tone="warning">En revisión</Badge>
              </td>
              <td className="table-muted">Ayer, 4:30 p.m.</td>
              <td>
                <Button size="sm" variant="tertiary">
                  ···
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-user">
                  <Avatar initials="AP" size="sm" tone="pink" />
                  <div>
                    <div className="table-user__name">Ana Pereira</div>
                    <div className="table-user__meta">ana@empresa.com</div>
                  </div>
                </div>
              </td>
              <td>
                <code>viewer</code>
              </td>
              <td>
                <Badge tone="neutral">Inactivo</Badge>
              </td>
              <td className="table-muted">Hace 14 días</td>
              <td>
                <Button size="sm" variant="tertiary">
                  ···
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

  if (componentName === "Link") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Link href="#foundations-typography">Default link</Link>
          <Link href="#foundations-color" tone="evergreen">
            Evergreen link
          </Link>
          <Link href="#components-button" tone="indigo">
            Indigo link
          </Link>
        </div>
      </div>
    );
  }

  if (componentName === "Group") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Group wrap gap="sm">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="secondary" tone="indigo">
            Secondary
          </Button>
          <ClearButton tone="default">Clear</ClearButton>
          <Badge tone="success">Active</Badge>
          <Tag tone="indigo">Filter</Tag>
        </Group>
        <Group direction="column" align="start" gap="xs">
          <span className="table-muted">Column stack example</span>
          <Group gap="xs">
            <Badge tone="neutral">Meta</Badge>
            <Badge tone="primary">New</Badge>
          </Group>
        </Group>
      </div>
    );
  }

  if (componentName === "Header") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Header
          eyebrow="Workspace"
          title="Genome Evolution"
          subtitle="Design system reference"
          leading={<Avatar initials="GE" size="md" tone="green" />}
          actions={
            <>
              <ClearButton tone="default">Docs</ClearButton>
              <Button size="sm">New</Button>
            </>
          }
        />
      </div>
    );
  }

  if (componentName === "List") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <List
          items={[
            {
              id: "a",
              leading: <Avatar initials="JS" size="sm" tone="blue" />,
              title: "Julia Sánchez",
              description: "julia@empresa.com",
              meta: <Badge tone="success">Activo</Badge>,
              trailing: (
                <ClearButton tone="default" aria-label="More actions">
                  ···
                </ClearButton>
              )
            },
            {
              id: "b",
              leading: <Avatar initials="MR" size="sm" tone="amber" />,
              title: "Miguel Ruiz",
              description: "miguel@empresa.com",
              meta: <Badge tone="warning">En revisión</Badge>,
              trailing: (
                <ClearButton tone="default" aria-label="More actions">
                  ···
                </ClearButton>
              )
            }
          ]}
        />
      </div>
    );
  }

  if (componentName === "Progress Bar") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <ProgressBar value={32} max={100} tone="evergreen" />
        <ProgressBar value={62} max={100} tone="indigo" />
        <ProgressBar indeterminate tone="neutral" label="Loading" />
      </div>
    );
  }

  if (componentName === "Paginator") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Paginator page={demoPage} pageCount={16} onPageChange={setDemoPage} />
        <div className="table-muted">Current page: {demoPage}</div>
      </div>
    );
  }

  if (componentName === "Modal") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Button onClick={() => setDemoModalOpen(true)}>Open modal</Button>
        <Modal
          open={demoModalOpen}
          title="Confirm changes"
          description="This action updates the workspace settings for everyone."
          onClose={() => setDemoModalOpen(false)}
          footer={
            <>
              <ClearButton tone="default" onClick={() => setDemoModalOpen(false)}>
                Cancel
              </ClearButton>
              <Button onClick={() => setDemoModalOpen(false)}>Confirm</Button>
            </>
          }
        >
          <Input label="Workspace name" defaultValue="Genome Evolution" helperText="Shown across your docs site." />
        </Modal>
      </div>
    );
  }

  if (componentName === "Radio Button") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <RadioButtonGroup
          label="Plan"
          defaultValue="pro"
          options={[
            { value: "free", label: "Free", description: "For personal exploration and small projects." },
            { value: "pro", label: "Pro", description: "Best for teams building products with tokens." },
            { value: "enterprise", label: "Enterprise", description: "Advanced controls and compliance." }
          ]}
          onChange={() => {}}
        />
      </div>
    );
  }

  if (componentName === "Scoreboard") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Scoreboard label="Usuarios activos" value="4,821" change="↑ 12.4% vs mes anterior" tone="success" />
          <Scoreboard label="Ingresos MRR" value="$38.2K" change="↑ 7.1% vs mes anterior" tone="success" />
          <Scoreboard label="Errores" value="14" change="↓ 3.2% vs semana anterior" tone="warning" />
        </div>
      </div>
    );
  }

  if (componentName === "Scroll") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Scroll maxHeight={180}>
          <p className="table-muted">Scrollable content</p>
          {Array.from({ length: 18 }, (_, i) => (
            <Card key={i} variant="elevated" title={`Item ${i + 1}`}>
              Secondary content lives inside a scrollable surface.
            </Card>
          ))}
        </Scroll>
      </div>
    );
  }

  if (componentName === "Segmented Button") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <SegmentedButton
          value={demoSegment}
          onChange={setDemoSegment}
          options={[
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
            { value: "system", label: "System" }
          ]}
        />
        <div className="table-muted">Selected: {demoSegment}</div>
      </div>
    );
  }

  if (componentName === "Split Button") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <SplitButton
          label="Publish"
          onClick={() => {}}
          items={[
            { label: "Publish now", onSelect: () => {} },
            { label: "Schedule…", onSelect: () => {} },
            { label: "Save draft", onSelect: () => {} }
          ]}
        />
      </div>
    );
  }

  if (componentName === "Checkbox") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Checkbox label="Enviar notificaciones" defaultChecked />
        <Checkbox label="Modo silencioso" />
        <Checkbox label="Requiere confirmación" error="Debes aceptar para continuar." />
      </div>
    );
  }

  if (componentName === "Clear Button") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <ClearButton tone="default" leadingIcon={<ArrowIcon />}>
            Back
          </ClearButton>
          <ClearButton tone="indigo" trailingIcon={<ArrowIcon />}>
            Next
          </ClearButton>
          <ClearButton tone="default" typeTone="danger">
            Delete
          </ClearButton>
          <ClearButton tone="evergreen" corner="rounded">
            Pill action
          </ClearButton>
        </div>
      </div>
    );
  }

  if (componentName === "Color Picker") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <ColorPicker label="Brand color" defaultValue="#297A39" />
        <ColorPicker label="Secondary" defaultValue="#6B1B99" />
      </div>
    );
  }

  if (componentName === "Cursor") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Cursor label="Pointer" />
          <Cursor variant="text" label="Text" />
          <Cursor variant="grab" label="Grab" tone="indigo" />
        </div>
      </div>
    );
  }

  if (componentName === "Datepicker") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Datepicker label="Start date" helperText="Pick a date for the milestone." defaultValue="2026-05-04" />
        <Datepicker label="End date" error="End date must be after start date." />
      </div>
    );
  }

  if (componentName === "Dropdown") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Dropdown
          label="Role"
          defaultValue="editor"
          options={[
            { value: "admin", label: "Admin" },
            { value: "editor", label: "Editor" },
            { value: "viewer", label: "Viewer" }
          ]}
          helperText="Permissions update immediately."
        />
        <Dropdown
          label="Plan"
          options={[
            { value: "free", label: "Free" },
            { value: "pro", label: "Pro" },
            { value: "enterprise", label: "Enterprise" }
          ]}
          error="Plan selection required."
        />
      </div>
    );
  }

  if (componentName === "Switch") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <div className="preview-row">
          <Switch checked={demoSwitch} onCheckedChange={setDemoSwitch} aria-label="Notificaciones" />
          <span>Notificaciones</span>
        </div>
        <div className="preview-row">
          <Switch defaultChecked={false} aria-label="Accesibilidad" />
          <span>Modo de accesibilidad</span>
        </div>
      </div>
    );
  }

  if (componentName === "Snackbar") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Button onClick={() => setDemoSnackOpen(true)}>Show snackbar</Button>
        <Snackbar
          open={demoSnackOpen}
          tone="success"
          message="Changes saved successfully."
          actionLabel="Undo"
          onAction={() => setDemoSnackOpen(false)}
          onClose={() => setDemoSnackOpen(false)}
          autoHideDurationMs={3500}
        />
      </div>
    );
  }

  if (componentName === "Stepper") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Stepper
          currentStep={1}
          steps={[
            { label: "Details", description: "Name and workspace info" },
            { label: "Billing", description: "Plan and payment" },
            { label: "Confirm", description: "Review changes" }
          ]}
        />
      </div>
    );
  }

  if (componentName === "Tab") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <TabList
          value={demoTab}
          onChange={setDemoTab}
          options={[
            { value: "solid", label: "Solid" },
            { value: "gradient", label: "Gradient" }
          ]}
        />
        <div className="table-muted">Active tab: {demoTab}</div>
      </div>
    );
  }

  if (componentName === "Tooltip") {
    return (
      <div className="preview-stack" style={{ alignItems: "flex-start" }}>
        <Tooltip content="This is a tooltip">
          <ClearButton tone="default">Hover me</ClearButton>
        </Tooltip>
        <Tooltip content="Secondary info" side="right">
          <Badge tone="primary">Info</Badge>
        </Tooltip>
      </div>
    );
  }

  if (componentName === "Text Area") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <TextArea label="Notes" placeholder="Write a short note…" helperText="Supports multi-line input." />
        <TextArea label="Error example" defaultValue="Too long…" error="Max 140 characters." />
      </div>
    );
  }

  if (componentName === "Breadcrumb") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "#overview" },
            { label: "Components", href: "#components-button" },
            { label: "Button" }
          ]}
        />
      </div>
    );
  }

  if (componentName === "Tag") {
    return (
      <div className="preview-stack">
        <div className="preview-row">
          <Tag>Default</Tag>
          <Tag tone="evergreen">Evergreen</Tag>
          <Tag tone="indigo">Indigo</Tag>
        </div>
      </div>
    );
  }

  if (componentName === "Accordion") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Accordion title="What is included in the design system?" defaultOpen>
          Tokens, editorial guidance, a React package layer, and patterns for building calmer interfaces.
        </Accordion>
        <Accordion title="How should I choose tones?" tone="indigo">
          Use evergreen for primary flows and indigo for secondary emphasis. Reserve semantic tones for feedback states.
        </Accordion>
      </div>
    );
  }

  if (componentName === "Backdrop") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <div className="preview-row">
          <span className="table-muted">Backdrop is an overlay. Preview shows swatches instead.</span>
        </div>
        <div className="preview-row">
          <div className="backdrop-swatch backdrop-swatch--black" aria-hidden="true" />
          <div className="backdrop-swatch backdrop-swatch--white" aria-hidden="true" />
        </div>
        <Backdrop open={false} />
      </div>
    );
  }

  if (componentName === "Breadcrumb") {
    return (
      <div className="preview-stack" style={{ flexDirection: "column" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "#overview" },
            { label: "Foundations", href: "#foundations-color" },
            { label: "Color" }
          ]}
        />
      </div>
    );
  }

  return (
    <Card
      variant="elevated"
      title={
        <div className="preview-placeholder__title">
          <span>Live preview pending</span>
          <Badge tone="neutral" variant="outline">
            React TBD
          </Badge>
        </div>
      }
    >
      This component page has guidance and tokens, but the React package output is still pending.
    </Card>
  );
}

function HomeShowcase() {
  return (
    <div className="home-showcase">
      <section className="showcase-plane showcase-plane--primary">
        <div className="showcase-row">
          <span className="showcase-kicker">Action system</span>
          <Button>Primary action</Button>
          <Button variant="secondary" tone="indigo">
            Secondary
          </Button>
          <IconButton label="Search" icon={<SearchIcon />} />
        </div>
        <div className="showcase-row showcase-row--field">
          <Input label="Workspace name" placeholder="Genome Evolution" helperText="Token-driven primitives in context." />
        </div>
      </section>

      <section className="showcase-plane showcase-plane--secondary">
        <div className="mini-stat">
          <span>36</span>
          <p>documented components</p>
        </div>
        <div className="mini-stat">
          <span>170</span>
          <p>public light tokens</p>
        </div>
        <div className="mini-stat">
          <span>83</span>
          <p>dark theme overrides</p>
        </div>
      </section>
    </div>
  );
}

function ButtonStatesPreview() {
  const states = [
    { id: "default", label: "Default" },
    { id: "hover", label: "Hovered" },
    { id: "pressed", label: "Pressed" },
    { id: "focus", label: "Focused" },
    { id: "disabled", label: "Disabled" }
  ] as const;

  const [size, setSize] = useState<"md" | "sm">("md");
  const [corner, setCorner] = useState<"default" | "rounded">("default");

  const columns = [
    { key: "primary-evergreen", label: "Primary / Evergreen", props: { variant: "primary" as const, tone: "evergreen" as const } },
    { key: "primary-indigo", label: "Primary / Indigo", props: { variant: "primary" as const, tone: "indigo" as const } },
    { key: "secondary-evergreen", label: "Secondary / Evergreen", props: { variant: "secondary" as const, tone: "evergreen" as const } },
    { key: "secondary-indigo", label: "Secondary / Indigo", props: { variant: "secondary" as const, tone: "indigo" as const } },
    { key: "tertiary-default", label: "Tertiary / Default", props: { variant: "tertiary" as const, tone: "neutral" as const } },
    { key: "danger-default", label: "Danger / Default", props: { variant: "primary" as const, tone: "danger" as const } },
    { key: "info-default", label: "Information / Default", props: { variant: "primary" as const, tone: "information" as const } },
    { key: "success-default", label: "Success / Default", props: { variant: "primary" as const, tone: "success" as const } },
    { key: "warning-default", label: "Warning / Default", props: { variant: "primary" as const, tone: "warning" as const } }
  ] as const;

  function isCellValid(stateId: (typeof states)[number]["id"], colKey: (typeof columns)[number]["key"]) {
    if (stateId !== "disabled") return true;
    return colKey.startsWith("primary-") || colKey.startsWith("secondary-");
  }

  return (
    <section className="button-states">
      <p className="eyebrow">States</p>
      <h4>Type × Color × State</h4>

      <div className="button-states__controls" aria-label="Button states controls">
        <div className="button-states__control">
          <span className="button-states__control-label">Size</span>
          <div className="button-states__segmented" role="group" aria-label="Size">
            <button type="button" className={size === "md" ? "is-selected" : undefined} onClick={() => setSize("md")}>
              MD
            </button>
            <button type="button" className={size === "sm" ? "is-selected" : undefined} onClick={() => setSize("sm")}>
              SM
            </button>
          </div>
        </div>

        <div className="button-states__control">
          <span className="button-states__control-label">Corner</span>
          <div className="button-states__segmented" role="group" aria-label="Corner">
            <button
              type="button"
              className={corner === "default" ? "is-selected" : undefined}
              onClick={() => setCorner("default")}
            >
              Default
            </button>
            <button
              type="button"
              className={corner === "rounded" ? "is-selected" : undefined}
              onClick={() => setCorner("rounded")}
            >
              Rounded
            </button>
          </div>
        </div>
      </div>

      <div className="button-states__scroll" role="region" aria-label="Button states table">
        <div
          className="button-states__grid"
          role="table"
          aria-label="Button states"
          style={{ ["--button-states-cols" as never]: String(columns.length + 1) }}
        >
          <div className="button-states__header" role="row">
            <div role="columnheader">State</div>
            {columns.map((col) => (
              <div key={col.key} role="columnheader">
                {col.label}
              </div>
            ))}
          </div>

          {states.map((state) => (
            <div key={state.id} className="button-states__row" role="row">
              <div className="button-states__state" role="rowheader">
                {state.label}
              </div>

              {columns.map((col) => {
                const valid = isCellValid(state.id, col.key);
                if (!valid) {
                  return (
                    <div key={col.key} role="cell" className="button-states__na">
                      —
                    </div>
                  );
                }

                const isDisabled = state.id === "disabled";
                const sim = state.id === "default" || isDisabled ? undefined : state.id;

                return (
                  <div key={col.key} role="cell">
                    <Button {...col.props} size={size} corner={corner} disabled={isDisabled} data-sim={sim}>
                      Button
                    </Button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComponentDocumentation({ componentName, language }: { componentName: string; language: Language }) {
  const spec = componentSpecs[componentName];
  const tabOrder: ComponentTabId[] = [
    "overview",
    "when-to-use",
    "when-not-to-use",
    "anatomy",
    "states",
    "rules",
    "do-dont",
    "tokens",
    "accessibility",
    "implementation"
  ];
  const availableTabs = useMemo(
    () => tabOrder.filter((tab) => (spec.tabs[tab] ?? []).length > 0),
    [componentName]
  );
  const defaultTab = availableTabs[0] ?? "overview";
  const [activeTab, setActiveTab] = useState<ComponentTabId>(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [componentName, defaultTab]);

  const sections = spec.tabs[activeTab] ?? [];

  return (
    <div className="component-docs">
      <section className="component-hero">
        <div>
          <p className="eyebrow">{tr("Component guidance", language)}</p>
          <h3>{componentName}</h3>
          <p className="component-subtitle">{tr(spec.subtitle, language)}</p>
        </div>
        <div className="component-hero-preview">
          <ComponentPreview componentName={componentName} />
        </div>
      </section>

      <div className="tab-strip" role="tablist" aria-label={`${componentName} sections`}>
        {availableTabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={tab === activeTab}
            className={tab === activeTab ? "is-active" : undefined}
            onClick={() => setActiveTab(tab)}
          >
            {componentTabLabels[tab][language]}
          </button>
        ))}
      </div>

      <div className="component-layout">
        <section className="component-content">
          {componentName === "Button" && activeTab === "states" ? <ButtonStatesPreview /> : null}
          {activeTab === "tokens" ? (
            <div className="token-grid">
              {spec.tokenCards.map((card) => (
                <article key={card.token} className="token-card">
                  {card.swatch ? <div className="token-swatch" style={{ background: card.swatch }} /> : null}
                  <p className="eyebrow">{tr("Token", language)}</p>
                  <h4>{tr(card.label, language)}</h4>
                  <code>{card.token}</code>
                  {card.value ? <p className="token-value">{card.value}</p> : null}
                  {card.note ? <p>{tr(card.note, language)}</p> : null}
                </article>
              ))}
            </div>
          ) : activeTab === "implementation" ? (
            <div className="implementation-grid">
              <section className="props-table-wrap">
                <div className="section-head">
                  <p className="eyebrow">{tr("Props", language)}</p>
                  <h4>{tr("Implementation contract", language)}</h4>
                </div>
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {spec.props.map((prop) => (
                      <tr key={prop.name}>
                        <td>
                          <code>{prop.name}</code>
                        </td>
                        <td>
                          <code>{prop.type}</code>
                        </td>
                        <td>
                          <code>{prop.defaultValue}</code>
                        </td>
                        <td>{tr(prop.description, language)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section className="snippet-list">
                <div className="section-head">
                  <p className="eyebrow">{tr("Code", language)}</p>
                  <h4>{tr("Snippets", language)}</h4>
                </div>
                {spec.code.map((snippet) => (
                  <article key={typeof snippet.title === "string" ? snippet.title : snippet.title.en} className="snippet-card">
                    <h5>{tr(snippet.title, language)}</h5>
                    <pre>
                      <code>{snippet.code}</code>
                    </pre>
                  </article>
                ))}
              </section>
            </div>
          ) : (
            <div className="section-stack">
              {sections.map((section, index) => (
                <article key={`${activeTab}-${index}`} className="doc-section-card">
                  <div className={section.preview && section.layout === "split" ? "spec-split" : undefined}>
                    {section.preview ? <div className="spec-preview">{section.preview}</div> : null}
                    <div>
                      {section.title ? <h4>{tr(section.title, language)}</h4> : null}
                      {section.body?.map((paragraph) => (
                        <p key={typeof paragraph === "string" ? paragraph : paragraph.en}>{tr(paragraph, language)}</p>
                      ))}
                      {section.bullets ? (
                        <ul>
                          {section.bullets.map((bullet) => (
                            <li key={typeof bullet === "string" ? bullet : bullet.en}>{tr(bullet, language)}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<Language>(() => detectInitialLanguage());
  const [activeId, setActiveId] = useState(() => window.location.hash.replace(/^#/, "") || "overview");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    window.localStorage.setItem("ge-docs-lang", language);
  }, [language]);

  useEffect(() => {
    const onHashChange = () => setActiveId(window.location.hash.replace(/^#/, "") || "overview");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return navItems;
    return navItems.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [query]);

  const active = getItemMeta(activeId);
  const activeLabel = navItems.find((item) => item.id === activeId)?.label ?? "Overview";
  const componentManifest = manifest.components.find((entry) => entry.name === activeLabel);

  const isBorderFoundation = activeId === "foundations-border";
  const isColorsFoundation = activeId === "foundations-color";
  const isPaletteFoundation = activeId === "foundations-palette";
  const isTokensFoundation = activeId === "foundations-tokens.json";
  const isTypographyFoundation = activeId === "foundations-typography";
  const isLayoutFoundation = activeId === "foundations-layout";
  const isOpacityFoundation = activeId === "foundations-opacity";
  const isElevationFoundation = activeId === "foundations-elevation";

  const featuredComponents = useMemo(() => {
    return homeFeaturedComponentIds
      .map((id) => {
        const label = navItems.find((item) => item.id === id)?.label;
        if (!label) return null;
        const spec = componentSpecs[label];
        return { id, label, subtitle: spec ? tr(spec.subtitle, language) : "" };
      })
      .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  }, [language]);

  return (
    <div className="docs-shell">
      <aside className="docs-sidebar">
        <div className="brand-lockup">
          <div className="brand-mark">GE</div>
          <div>
            <p className="eyebrow">Design system</p>
            <h1>Genome Evolution</h1>
          </div>
        </div>

        <label className="search-box">
          <SearchIcon />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("search.placeholder", language)}
          />
        </label>

        <nav className="nav-groups">
          {["overview", "foundations", "components"].map((group) => {
            const items = filtered.filter((item) => item.group === group);
            if (!items.length) return null;
            return (
              <section key={group}>
                <p className="nav-label">
                  {group === "overview"
                    ? t("nav.overview", language)
                    : group === "foundations"
                      ? t("nav.foundations", language)
                      : t("nav.components", language)}
                </p>
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeId ? "is-active" : undefined}
                        href={`#${item.id}`}
                        onClick={() => setActiveId(item.id)}
                      >
                        {item.id === "overview" ? t("nav.overview", language) : item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </nav>
      </aside>

      <main className="docs-main">
        <div className="docs-main-inner">
          <header className="docs-topbar">
            <div>
              <p className="eyebrow">{t("topbar.eyebrow", language)}</p>
              <h2>{activeLabel}</h2>
            </div>
            <div className="topbar-controls">
              <div className="theme-toggle" aria-label="Language toggle">
                <button className={language === "es" ? "is-selected" : undefined} onClick={() => setLanguage("es")}>
                  {t("lang.es", language)}
                </button>
                <button className={language === "en" ? "is-selected" : undefined} onClick={() => setLanguage("en")}>
                  {t("lang.en", language)}
                </button>
              </div>
              <div className="theme-toggle" aria-label="Theme toggle">
                <button className={theme === "light" ? "is-selected" : undefined} onClick={() => setTheme("light")}>
                  {t("theme.light", language)}
                </button>
                <button className={theme === "dark" ? "is-selected" : undefined} onClick={() => setTheme("dark")}>
                  {t("theme.dark", language)}
                </button>
              </div>
            </div>
          </header>

          {active.kind === "overview" ? (
            <>
              <section className="hero-stage">
                <div className="hero-stage__copy">
                  <p className="eyebrow">{t("overview.hero.eyebrow", language)}</p>
                  <h3>{t("overview.hero.title", language)}</h3>
                  <p>{t("overview.hero.body", language)}</p>

                  <div className="hero-stage__search">
                    <label className="hero-search" aria-label={t("overview.hero.search.label", language)}>
                      <SearchIcon />
                      <input
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={t("search.placeholder", language)}
                      />
                    </label>
                    <p className="hero-search-hint">{t("overview.hero.search.hint", language)}</p>
                  </div>

                  <div className="hero-stage__actions">
                    <Button
                      onClick={() => {
                        window.location.hash = "#components-button";
                        setActiveId("components-button");
                      }}
                    >
                      {t("overview.hero.cta.primary", language)}
                    </Button>
                    <Button
                      variant="secondary"
                      tone="indigo"
                      onClick={() => {
                        window.location.hash = "#foundations-color";
                        setActiveId("foundations-color");
                      }}
                    >
                      {t("overview.hero.cta.secondary", language)}
                    </Button>
                  </div>
                </div>
                <HomeShowcase />
              </section>

              <section className="signal-grid">
                <article className="signal-panel">
                  <p className="eyebrow">{t("overview.signal.scale", language)}</p>
                  <h3>{manifest.components.length} documented components</h3>
                  <p>{t("overview.signal.scale.body", language)}</p>
                </article>
                <article className="signal-panel">
                  <p className="eyebrow">{t("overview.signal.foundations", language)}</p>
                  <h3>{manifest.foundations.length} foundation references</h3>
                  <p>{t("overview.signal.foundations.body", language)}</p>
                </article>
                <article className="signal-panel">
                  <p className="eyebrow">{t("overview.signal.impl", language)}</p>
                  <h3>React + tokens + docs</h3>
                  <p>{t("overview.signal.impl.body", language)}</p>
                </article>
              </section>

              <section className="portal-band">
                <div className="portal-band__copy">
                  <p className="eyebrow">{t("overview.portal.title", language)}</p>
                  <h3>{t("overview.portal.headline", language)}</h3>
                  <p>{t("overview.portal.body", language)}</p>
                </div>
                <div className="portal-grid">
                  <a className="portal-card" href="#foundations-color" onClick={() => setActiveId("foundations-color")}>
                    <p className="eyebrow">{t("overview.portal.foundations.title", language)}</p>
                    <h4>{t("overview.portal.foundations.title", language)}</h4>
                    <p>{t("overview.portal.foundations.body", language)}</p>
                  </a>
                  <a className="portal-card" href="#components-button" onClick={() => setActiveId("components-button")}>
                    <p className="eyebrow">{t("overview.portal.components.title", language)}</p>
                    <h4>{t("overview.portal.components.title", language)}</h4>
                    <p>{t("overview.portal.components.body", language)}</p>
                  </a>
                  <a className="portal-card" href="#foundations-tokens.json" onClick={() => setActiveId("foundations-tokens.json")}>
                    <p className="eyebrow">{t("overview.portal.tokens.title", language)}</p>
                    <h4>{t("overview.portal.tokens.title", language)}</h4>
                    <p>{t("overview.portal.tokens.body", language)}</p>
                  </a>
                </div>
              </section>

              <section className="overview-grid overview-grid--home overview-grid--featured">
                <article className="feature-panel feature-panel--wide">
                  <p className="eyebrow">{t("overview.featured.title", language)}</p>
                  <h3>{t("overview.featured.title", language)}</h3>
                  <p>{t("overview.featured.body", language)}</p>
                  <div className="featured-grid">
                    {featuredComponents.map((entry) => (
                      <a key={entry.id} className="featured-card" href={`#${entry.id}`} onClick={() => setActiveId(entry.id)}>
                        <h4>{entry.label}</h4>
                        {entry.subtitle ? <p>{entry.subtitle}</p> : null}
                      </a>
                    ))}
                  </div>
                </article>
              </section>

              <section className="overview-grid overview-grid--home">
                <article className="feature-panel feature-panel--wide">
                  <p className="eyebrow">Start here</p>
                  <h3>{t("overview.start.title", language)}</h3>
                  <p>{t("overview.start.body", language)}</p>
                  <div className="quick-links">
                    <a href="#components-button" onClick={() => setActiveId("components-button")}>
                      Button
                    </a>
                    <a href="#components-input" onClick={() => setActiveId("components-input")}>
                      Input
                    </a>
                    <a href="#components-icon-button" onClick={() => setActiveId("components-icon-button")}>
                      Icon Button
                    </a>
                  </div>
                </article>

                <article className="feature-panel">
                  <p className="eyebrow">Principle</p>
                  <h3>{t("overview.principle.title", language)}</h3>
                  <p>{t("overview.principle.body", language)}</p>
                </article>

                <article className="feature-panel">
                  <p className="eyebrow">Tokens</p>
                  <h3>{t("overview.tokens.title", language)}</h3>
                  <p>{t("overview.tokens.body", language)}</p>
                </article>
              </section>

              <section className="foundation-band">
                <div className="foundation-band__copy">
                  <p className="eyebrow">Foundation system</p>
                  <h3>The visual language is already codified across color, typography and spacing.</h3>
                  <p>
                    The next layer of growth is less about inventing new style and more about turning the existing source
                    of truth into more complete component behavior.
                  </p>
                </div>
                <div className="foundation-band__links">
                  {[
                    { id: "foundations-color", label: "Color" },
                    { id: "foundations-typography", label: "Typography" },
                    { id: "foundations-spacing", label: "Spacing" },
                    { id: "foundations-layout", label: "Layout" }
                  ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} onClick={() => setActiveId(item.id)}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>
            </>
          ) : isTypographyFoundation ? (
            <TypographyFoundation language={language} />
          ) : isColorsFoundation ? (
            <ColorsFoundation language={language} />
          ) : isLayoutFoundation ? (
            <LayoutFoundation language={language} />
          ) : isOpacityFoundation ? (
            <OpacityFoundation language={language} />
          ) : isElevationFoundation ? (
            <ElevationFoundation theme={theme} language={language} />
          ) : isPaletteFoundation ? (
            <PaletteFoundation language={language} />
          ) : isBorderFoundation ? (
            <BorderFoundation theme={theme} language={language} />
          ) : isTokensFoundation ? (
            <TokensFoundation language={language} />
          ) : active.kind === "component" && componentSpecs[activeLabel] ? (
            <ComponentDocumentation componentName={activeLabel} language={language} />
          ) : (
            <div className="detail-layout">
              <section className="detail-body">
                <div className="detail-header">
                  <p className="eyebrow">{active.kind === "foundation" ? "Foundation" : "Component"}</p>
                  <h3>{active.doc.title}</h3>
                  <p className="path-chip">{active.doc.path}</p>
                </div>
                <div className="markdown-body">{renderMarkdown(active.doc.body)}</div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
