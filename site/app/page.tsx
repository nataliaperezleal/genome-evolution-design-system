export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-neutral-1200 mb-6">
            Genome Evolution Design System
          </h1>
          <p className="text-xl text-neutral-800 mb-8 max-w-2xl mx-auto">
            A complete, production-ready design system with 36 meticulously documented components,
            572 design tokens, and battle-tested patterns for building consistent interfaces.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/components"
              className="px-6 py-3 bg-brand-primary text-white rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Explore Components
            </a>
            <a
              href="/patterns"
              className="px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-md font-semibold hover:bg-brand-primary hover:text-white transition"
            >
              View Patterns
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">36</div>
              <p className="text-neutral-700">Components</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">572</div>
              <p className="text-neutral-700">Design Tokens</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">5+</div>
              <p className="text-neutral-700">Patterns</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">WCAG AA</div>
              <p className="text-neutral-700">Accessible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Why Genome Evolution DS?</h2>
        <div className="grid grid-cols-3 gap-12">
          <div className="p-6 border border-neutral-300 rounded-lg hover:shadow-lg transition">
            <div className="text-3xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-3">Complete</h3>
            <p className="text-neutral-700">
              36 fully documented components covering all common UI patterns. From buttons to
              tables, everything you need to build interfaces.
            </p>
          </div>
          <div className="p-6 border border-neutral-300 rounded-lg hover:shadow-lg transition">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-3">Consistent</h3>
            <p className="text-neutral-700">
              572 design tokens ensure visual and semantic consistency across your entire
              product. Light and dark mode included.
            </p>
          </div>
          <div className="p-6 border border-neutral-300 rounded-lg hover:shadow-lg transition">
            <div className="text-3xl mb-4">♿</div>
            <h3 className="text-xl font-semibold mb-3">Accessible</h3>
            <p className="text-neutral-700">
              WCAG 2.1 AA compliant. Every component includes keyboard navigation, screen reader
              support, and color contrast verification.
            </p>
          </div>
          <div className="p-6 border border-neutral-300 rounded-lg hover:shadow-lg transition">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-3">Patterns Included</h3>
            <p className="text-neutral-700">
              Battle-tested patterns for login, forms, CRUD tables, navigation, and more. Copy
              and adapt to your needs.
            </p>
          </div>
          <div className="p-6 border border-neutral-300 rounded-lg hover:shadow-lg transition">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Developer Friendly</h3>
            <p className="text-neutral-700">
              Comprehensive documentation with anatomy, variants, states, accessibility notes, and
              QA checklists for each component.
            </p>
          </div>
          <div className="p-6 border border-neutral-300 rounded-lg hover:shadow-lg transition">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-3">Design-to-Code</h3>
            <p className="text-neutral-700">
              Single source of truth in Figma. Every component has node IDs for seamless sync
              between design and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Components Preview Section */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Components</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Form Components</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>✓ Input</li>
                <li>✓ Button</li>
                <li>✓ Checkbox</li>
                <li>✓ Radio Button</li>
                <li>✓ Text Area</li>
                <li>✓ Select / Dropdown</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Data & Display</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>✓ Table</li>
                <li>✓ List</li>
                <li>✓ Card</li>
                <li>✓ Badge</li>
                <li>✓ Tag</li>
                <li>✓ Avatar</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Navigation & Layout</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>✓ Breadcrumb</li>
                <li>✓ Tabs</li>
                <li>✓ Pagination</li>
                <li>✓ Stepper</li>
                <li>✓ Header</li>
                <li>✓ Group</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Feedback & Messaging</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>✓ Modal</li>
                <li>✓ Alert</li>
                <li>✓ Snackbar</li>
                <li>✓ Tooltip</li>
                <li>✓ Progress Bar</li>
                <li>✓ Inline Alert</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/components"
              className="inline-block px-6 py-3 bg-brand-primary text-white rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              View All Components →
            </a>
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Production Patterns</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 border border-neutral-300 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📋 Login Form</h3>
            <p className="text-neutral-700 mb-4">
              Email + password authentication with error handling, show/hide toggle, and full accessibility.
            </p>
            <a href="/patterns" className="text-brand-primary font-semibold hover:underline">
              View Pattern →
            </a>
          </div>
          <div className="p-6 border border-neutral-300 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📊 CRUD Table</h3>
            <p className="text-neutral-700 mb-4">
              Data table with create, read, update, delete operations. Includes selection, pagination, and row actions.
            </p>
            <a href="/patterns" className="text-brand-primary font-semibold hover:underline">
              View Pattern →
            </a>
          </div>
          <div className="p-6 border border-neutral-300 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🗂️ Sidebar Navigation</h3>
            <p className="text-neutral-700 mb-4">
              Collapsible sidebar menu for main navigation. Desktop and mobile responsive with active states.
            </p>
            <a href="/patterns" className="text-brand-primary font-semibold hover:underline">
              View Pattern →
            </a>
          </div>
          <div className="p-6 border border-neutral-300 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💬 Form Validation</h3>
            <p className="text-neutral-700 mb-4">
              Real-time and submit-time validation strategies. Accessible error handling with screen reader support.
            </p>
            <a href="/patterns" className="text-brand-primary font-semibold hover:underline">
              View Pattern →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-lg mb-8 opacity-90">
            Start using Genome Evolution DS in your project. View the complete documentation, patterns, and components.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/components"
              className="px-6 py-3 bg-white text-brand-primary rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              Explore Components
            </a>
            <a
              href="https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-brand-primary transition"
            >
              View Figma File
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
