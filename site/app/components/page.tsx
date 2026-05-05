export default function ComponentsPage() {
  const components = [
    { name: 'Accordion', category: 'Navigation' },
    { name: 'Avatar', category: 'Identity' },
    { name: 'Backdrop', category: 'Overlay' },
    { name: 'Badge', category: 'Indicator' },
    { name: 'Breadcrumb', category: 'Navigation' },
    { name: 'Button', category: 'Action' },
    { name: 'Checkbox', category: 'Form' },
    { name: 'Color Picker', category: 'Form' },
    { name: 'Cursor', category: 'Interaction' },
    { name: 'Datepicker', category: 'Form' },
    { name: 'Dropdown', category: 'Form' },
    { name: 'Header', category: 'Navigation' },
    { name: 'Icon Button', category: 'Action' },
    { name: 'Inline Alert', category: 'Feedback' },
    { name: 'Input', category: 'Form' },
    { name: 'Link', category: 'Navigation' },
    { name: 'List', category: 'Content' },
    { name: 'Modal', category: 'Overlay' },
    { name: 'Paginator', category: 'Navigation' },
    { name: 'Progress Bar', category: 'Feedback' },
    { name: 'Radio Button', category: 'Form' },
    { name: 'Snackbar', category: 'Feedback' },
    { name: 'Switch', category: 'Form' },
    { name: 'Tab', category: 'Navigation' },
    { name: 'Table', category: 'Data Display' },
    { name: 'Tag', category: 'Content' },
    { name: 'Text Area', category: 'Form' },
    { name: 'Tooltip', category: 'Feedback' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-xl text-neutral-700">
          36 production-ready components. Each fully documented with variants, states, accessibility
          guidelines, and QA checklists.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {components.map((component) => (
          <a
            key={component.name}
            href={`/components/${component.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="p-6 border border-neutral-300 rounded-lg hover:shadow-lg hover:border-brand-primary transition group"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition">
              {component.name}
            </h3>
            <p className="text-sm text-neutral-600">{component.category}</p>
          </a>
        ))}
      </div>

      <div className="mt-16 p-8 bg-neutral-50 rounded-lg border border-neutral-300">
        <h2 className="text-2xl font-bold mb-4">How to Use Components</h2>
        <ol className="space-y-3 text-neutral-700">
          <li><strong>1. Find your component</strong> — Browse the list above or search</li>
          <li><strong>2. Read the documentation</strong> — Understand purpose, variants, and states</li>
          <li><strong>3. Check accessibility</strong> — ARIA, keyboard nav, color contrast included</li>
          <li><strong>4. Review QA checklist</strong> — Ensure implementation is complete</li>
          <li><strong>5. View in Figma</strong> — Link provided in each component doc</li>
        </ol>
      </div>
    </div>
  );
}
