export default function PatternsPage() {
  const patterns = [
    {
      category: 'Forms',
      items: [
        { name: 'Login Form', path: 'login' },
        { name: 'Form Validation', path: 'form-validation' },
      ],
    },
    {
      category: 'Navigation',
      items: [
        { name: 'Sidebar Navigation', path: 'sidebar-navigation' },
      ],
    },
    {
      category: 'Data Display',
      items: [
        { name: 'CRUD Table', path: 'crud-table' },
      ],
    },
    {
      category: 'Feedback',
      items: [
        { name: 'Empty State', path: 'empty-state' },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Patterns</h1>
        <p className="text-xl text-neutral-700">
          Production-ready patterns combining multiple components to solve common UX challenges.
          Each pattern includes anatomy, states, tokens, accessibility, and QA checklist.
        </p>
      </div>

      {patterns.map((section) => (
        <div key={section.category} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-brand-primary">{section.category}</h2>
          <div className="grid grid-cols-2 gap-6">
            {section.items.map((pattern) => (
              <a
                key={pattern.path}
                href={`/patterns/${pattern.path}`}
                className="p-6 border border-neutral-300 rounded-lg hover:shadow-lg hover:border-brand-primary transition group"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition">
                  {pattern.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  Comprehensive pattern documentation with anatomy, component composition, states, and accessibility.
                </p>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="p-8 bg-neutral-50 rounded-lg border border-neutral-300">
        <h2 className="text-2xl font-bold mb-4">Pattern Structure</h2>
        <p className="text-neutral-700 mb-4">Each pattern includes:</p>
        <ul className="grid grid-cols-2 gap-4 text-neutral-700">
          <li>✓ Problem statement & use cases</li>
          <li>✓ Anatomy & visual layout</li>
          <li>✓ Component composition</li>
          <li>✓ States & behavior</li>
          <li>✓ Token mapping (colors, spacing, typography)</li>
          <li>✓ Interaction & motion</li>
          <li>✓ Accessibility (ARIA, keyboard, screen reader)</li>
          <li>✓ Do's & Don'ts</li>
          <li>✓ QA checklist (15-25 items)</li>
          <li>✓ Code examples & screenshots</li>
        </ul>
      </div>
    </div>
  );
}
