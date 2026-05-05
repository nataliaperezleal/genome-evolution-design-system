import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Genome Evolution Design System',
  description: 'Complete design system with 36 components, 572 tokens, and production-ready patterns',
  icons: {
    icon: '📊',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-0 text-neutral-1200">
        <header className="border-b border-neutral-300 bg-neutral-0 sticky top-0 z-40">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h1 className="text-lg font-bold text-neutral-1200 m-0">
                  Genome Evolution
                </h1>
                <p className="text-xs text-neutral-700 m-0">Design System v2.0</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="/" className="text-neutral-900 hover:text-brand-primary">
                Components
              </a>
              <a href="/patterns" className="text-neutral-900 hover:text-brand-primary">
                Patterns
              </a>
              <a href="/foundations" className="text-neutral-900 hover:text-brand-primary">
                Foundations
              </a>
              <a
                href="https://github.com/nataliaperezleal/genome-evolution"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-brand-primary"
              >
                GitHub
              </a>
            </div>
          </nav>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-neutral-300 bg-neutral-50 mt-24">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Components</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li><a href="/" className="hover:text-brand-primary">All Components</a></li>
                  <li><a href="/" className="hover:text-brand-primary">Button</a></li>
                  <li><a href="/" className="hover:text-brand-primary">Input</a></li>
                  <li><a href="/" className="hover:text-brand-primary">Table</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Patterns</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li><a href="/patterns" className="hover:text-brand-primary">All Patterns</a></li>
                  <li><a href="/patterns" className="hover:text-brand-primary">Login Form</a></li>
                  <li><a href="/patterns" className="hover:text-brand-primary">CRUD Table</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li><a href="/foundations" className="hover:text-brand-primary">Foundations</a></li>
                  <li><a href="/foundations" className="hover:text-brand-primary">Tokens</a></li>
                  <li><a href="https://www.figma.com/design/qo8ZYDn63qhp3R3b4xd9Ra" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">Figma</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Community</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li><a href="https://github.com/nataliaperezleal/genome-evolution" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">GitHub</a></li>
                  <li><a href="https://github.com/nataliaperezleal/genome-evolution/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">Contributing</a></li>
                  <li><a href="mailto:nataliaperezleal@gmail.com" className="hover:text-brand-primary">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-neutral-300 pt-8">
              <p className="text-sm text-neutral-700">
                © 2026 Genome Evolution Design System. Made with ❤️ by Natalia Pérez.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
