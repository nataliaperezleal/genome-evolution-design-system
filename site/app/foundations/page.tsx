export default function FoundationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Design Foundations</h1>
        <p className="text-xl text-neutral-700">
          The building blocks of the Genome Evolution design system. Colors, typography, spacing,
          and other tokens that ensure consistency across all products.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Color */}
        <div className="p-6 border border-neutral-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">🎨 Color</h3>
          <p className="text-neutral-700 mb-4">
            Complete color palette with semantic tokens. Light and dark mode support, accessibility-first.
          </p>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>✓ Brand colors: Evergreen, Indigo, Accent</li>
            <li>✓ Semantic colors: Success, Warning, Error, Info</li>
            <li>✓ 12-stop neutral scale for all components</li>
            <li>✓ WCAG 2.1 AA contrast verified</li>
          </ul>
        </div>

        {/* Typography */}
        <div className="p-6 border border-neutral-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">✍️ Typography</h3>
          <p className="text-neutral-700 mb-4">
            Carefully crafted type scale with clear hierarchy. All roles from display to code.
          </p>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>✓ Open Sans for body & UI text</li>
            <li>✓ 9 typography roles: body, label, title, heading, display, button, code, overline</li>
            <li>✓ 4 weights: regular, medium, semibold, bold</li>
            <li>✓ Optimized line heights and letter spacing</li>
          </ul>
        </div>

        {/* Spacing */}
        <div className="p-6 border border-neutral-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">📏 Spacing</h3>
          <p className="text-neutral-700 mb-4">
            Consistent spacing scale for padding, margins, and gaps between elements.
          </p>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>✓ Space scale: 0-96px in consistent increments</li>
            <li>✓ Gap tokens for flexbox/grid layouts</li>
            <li>✓ Component-specific padding guidelines</li>
            <li>✓ Responsive spacing for different breakpoints</li>
          </ul>
        </div>

        {/* Elevation */}
        <div className="p-6 border border-neutral-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">⬆️ Elevation</h3>
          <p className="text-neutral-700 mb-4">
            Shadows and depth to create visual hierarchy and enhance interactivity.
          </p>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>✓ 5 elevation levels: none, sm, md, lg, xl</li>
            <li>✓ Blur and position tokens for custom shadows</li>
            <li>✓ Z-index stacking scale for layering</li>
            <li>✓ Consistent depth perception across components</li>
          </ul>
        </div>

        {/* Motion */}
        <div className="p-6 border border-neutral-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">🎬 Motion</h3>
          <p className="text-neutral-700 mb-4">
            Animations and transitions that feel responsive and intentional.
          </p>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>✓ 5 durations: none, fast, moderate, slow, extra-slow</li>
            <li>✓ 4 easings: standard, enter, exit, emphasized</li>
            <li>✓ Prefers-reduced-motion support</li>
            <li>✓ Delay tokens for staggered animations</li>
          </ul>
        </div>

        {/* Borders & Radius */}
        <div className="p-6 border border-neutral-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">⚫ Borders & Radius</h3>
          <p className="text-neutral-700 mb-4">
            Border widths and corner radii for clear visual definition.
          </p>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>✓ 4 border widths: 0, 1, 2, 4px</li>
            <li>✓ 8 radius values: none to full circle</li>
            <li>✓ Focus ring specification (2px, double-ring)</li>
            <li>✓ Semantic radius names: xs, sm, md, lg, xl, pill</li>
          </ul>
        </div>
      </div>

      {/* Tokens Section */}
      <div className="mt-16 p-8 bg-neutral-50 rounded-lg border border-neutral-300">
        <h2 className="text-2xl font-bold mb-4">572 Design Tokens</h2>
        <p className="text-neutral-700 mb-6">
          Complete token system exported from Figma. Every visual attribute is tokenized for consistency,
          easy theming, and seamless design-to-code handoff.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Color Tokens</h4>
            <p className="text-sm text-neutral-600">Primitives + role-based semantic colors</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Typography Tokens</h4>
            <p className="text-sm text-neutral-600">Family, size, weight, line-height, tracking</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Spacing Tokens</h4>
            <p className="text-sm text-neutral-600">Space (padding) and gap (flex/grid) scales</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Focus Tokens</h4>
            <p className="text-sm text-neutral-600">Focus rings for light & dark mode, WCAG AA</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Motion Tokens</h4>
            <p className="text-sm text-neutral-600">Duration, easing, delay for animations</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Layer Tokens</h4>
            <p className="text-sm text-neutral-600">Z-index stacking scale (0-900)</p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-16 text-center p-8 bg-brand-primary text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Access Foundations</h2>
        <p className="mb-6 text-lg">
          All tokens are documented in foundations/ folder and exported in tokens.json
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/nataliaperezleal/genome-evolution/tree/main/foundations"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-brand-primary rounded-md font-semibold hover:bg-opacity-90 transition"
          >
            View on GitHub
          </a>
          <a
            href="https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra/-DS--Genome-Evolution"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-brand-primary transition"
          >
            View in Figma
          </a>
        </div>
      </div>
    </div>
  );
}
