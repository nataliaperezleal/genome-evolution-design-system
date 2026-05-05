# Genome Evolution Design System — Website

Professional Next.js website for the Genome Evolution Design System. Live documentation, component explorer, and pattern library.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
# Build
npm run build

# Test production build locally
npm run start
```

---

## 📦 Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling with design system tokens
- **Vercel** — Deployment platform

---

## 🏗️ Project Structure

```
site/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles + tokens
│   ├── components/
│   │   └── page.tsx            # Components directory page
│   ├── patterns/
│   │   └── page.tsx            # Patterns directory page
│   └── foundations/
│       └── page.tsx            # Foundations reference page
├── components/                  # Reusable components (empty initially)
├── lib/                        # Utility functions (empty initially)
├── public/                     # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

---

## 📝 Content Structure

Currently, the site links to:
- **Components** → Lists all 36 components from `../components/*.md`
- **Patterns** → Lists patterns from `../patterns/**/*.md`
- **Foundations** → Describes design tokens from `../foundations/`
- **GitHub/Figma** → Links to source repositories

To **integrate MDX** and render markdown files dynamically:

1. Install `@next/mdx` and `gray-matter`:
   ```bash
   npm install @next/mdx gray-matter
   ```

2. Update `next.config.js` to handle MDX

3. Create `lib/mdx.ts` to load markdown files

4. Create dynamic route pages: `app/[...slug]/page.tsx`

---

## 🎨 Design System Integration

All Tailwind colors use design system tokens:

```tailwind
bg-brand-primary     # #297a39 (Evergreen)
text-brand-secondary # #6b1b99 (Indigo)
border-neutral-300   # #d9deda
```

CSS variables in `globals.css` for easy theming:

```css
--color-brand-primary: #297a39;
--color-neutral-300: #d9deda;
/* etc. */
```

---

## 🚀 Deploy to Vercel

### Option 1: Push to GitHub → Auto-deploy

1. **Create GitHub repo:**
   ```bash
   cd site
   git init
   git add .
   git commit -m "Initial Next.js site"
   git remote add origin https://github.com/YOUR_USERNAME/genome-evolution.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Click "Deploy"
   - Done! ✅ Your site is live

### Option 2: Deploy from Local

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Project name: genome-evolution-ds
# - Framework: Next.js
# - Build command: npm run build
# - Output directory: .next
# - Install deps: yes
```

### Option 3: Use Vercel Git Integration

- Fork/connect the main genome-evolution repo to Vercel
- Set build directory to `site/`
- Auto-deploys on push

---

## 📋 Deployment Checklist

- [ ] Install dependencies: `npm install`
- [ ] Test locally: `npm run dev` → `http://localhost:3000`
- [ ] Build: `npm run build`
- [ ] Test production: `npm run start`
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Verify deployment: Check vercel.com dashboard
- [ ] Share URL with team

---

## 🔗 URLs After Deployment

Once deployed to Vercel, you'll get:
- **Main:** `https://genome-evolution-ds.vercel.app`
- **Components:** `https://genome-evolution-ds.vercel.app/components`
- **Patterns:** `https://genome-evolution-ds.vercel.app/patterns`
- **Foundations:** `https://genome-evolution-ds.vercel.app/foundations`

To use a **custom domain** (e.g., `genome-evolution.design`):
1. Go to Vercel → Project Settings → Domains
2. Add custom domain
3. Update DNS records at domain registrar
4. Verify in Vercel

---

## 🎯 Next Steps

### Phase 2: MDX Integration
- Load `.md` files dynamically
- Render component/pattern docs on dedicated pages
- Add search functionality

### Phase 3: Enhanced Features
- Dark mode toggle
- Code snippet copyable
- Component showcase (iframe/preview)
- Downloadable tokens (JSON, CSS, Sass)

---

## 📞 Support

- **GitHub Issues:** Report bugs or request features
- **Documentation:** See `../AUDIT.md` and `../ACTION-PLAN.md`
- **Contact:** nataliaperezleal@gmail.com

---

## 📄 License

Same as parent project. See root `LICENSE` file.

---

*Generated for Genome Evolution Design System v2.0.0+*
