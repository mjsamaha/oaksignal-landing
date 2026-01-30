# OakSignal Landing - AI Coding Agent Instructions

## Project Overview
This is a **Next.js 16 (App Router)** static landing page for OakSignal, built with **TypeScript**, **Tailwind CSS v4**, and **ShadCN/UI** components. The site is statically exported (`output: 'export'`) and deployed to **GitHub Pages** at `/oaksignal-landing` basePath.

**Key Architecture Decision**: Static site generation for maximum performance and reliability—no server-side rendering. All pages are pre-rendered at build time.

## Tech Stack & Conventions

### Component Library
- Uses **ShadCN/UI** (New York style) with **Tailwind CSS v4** and **Lucide React** icons
- Components follow the ShadCN pattern: see [components/ui/button.tsx](components/ui/button.tsx)
- Styling uses `cn()` utility from [lib/utils.ts](lib/utils.ts) for conditional class merging
- Animation via **Framer Motion** for hero and interactive elements

### Theme System
- Dark mode via `next-themes` with system preference detection
- Theme provider wraps app in [app/layout.tsx](app/layout.tsx) with `suppressHydrationWarning` on `<html>`
- All components must support both light and dark modes using `dark:` Tailwind variants
- Color palette: zinc for neutrals, blue for primary brand color (blue-600/blue-500)

### Path Aliases
- `@/` maps to project root (configured in [tsconfig.json](tsconfig.json))
- Import pattern: `import { cn } from "@/lib/utils"`, `import Hero from "@/components/hero"`

## Critical Build Configuration

### Static Export Setup
- **basePath**: `/oaksignal-landing` in production, empty in dev ([next.config.ts](next.config.ts))
- **Images**: `unoptimized: true` required for static export (no Next.js Image Optimization)
- **Dynamic Routes**: Pre-rendered via `generateStaticParams()` in [app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)

### Development Workflow
```bash
npm run dev      # Local dev at http://localhost:3000
npm run build    # Static export to ./out/
npm run lint     # ESLint using eslint.config.mjs
```

**Deploy**: Automatic via GitHub Actions on push to `main` branch (see [.github/workflows/deploy.yml](.github/workflows/deploy.yml))

## Project Structure Patterns

### Data Layer
- **Single source of truth**: [lib/projects.ts](lib/projects.ts) exports `Project` interface and `projects` array
- Projects are **statically defined**—no API calls or database. Add new projects by extending the `projects` array
- Project detail pages are auto-generated from this data via dynamic routing

### Page Structure
- **Homepage** ([app/page.tsx](app/page.tsx)): Imports section components (Hero, About, Projects, Contact, Footer)
- **Layout** ([app/layout.tsx](app/layout.tsx)): Defines SEO metadata, fonts (Geist Sans/Mono), theme provider, and navbar
- **Project Pages** ([app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)): Dynamic routes generated from `projects.ts`

### Component Organization
```
/components
  ├── ui/              # ShadCN/UI primitives (button, card, badge, etc.)
  ├── hero.tsx         # Landing page sections (client components with Framer Motion)
  ├── about.tsx        
  ├── projects.tsx     # Project grid display
  ├── contact.tsx
  ├── navbar.tsx       # Top navigation with theme toggle
  ├── theme-provider.tsx  # next-themes wrapper
  └── json-ld.tsx      # Structured data for SEO
```

## SEO & Metadata Patterns

### Comprehensive Metadata
- All pages define `Metadata` export with title, description, OpenGraph, Twitter cards
- Template pattern: `default: "OakSignal - ...", template: "%s | OakSignal"`
- **JSON-LD** structured data in [components/json-ld.tsx](components/json-ld.tsx) using `schema-dts` types

### Accessibility
- Semantic HTML5 elements (`<main>`, `<section>`, `<nav>`)
- `aria-hidden` for decorative elements (gradient blobs in hero)
- Focus states defined in button variants (`focus-visible:ring-ring`)

## Styling Conventions

### Color & Design System
- **Brand colors**: `text-blue-600 dark:text-blue-500` for primary accents
- **Text hierarchy**: 
  - Headings: `text-zinc-900 dark:text-zinc-50`
  - Body: `text-zinc-600 dark:text-zinc-400`
- **Backgrounds**: `bg-white dark:bg-black` or `bg-zinc-50 dark:bg-black`
- **Borders**: `border-zinc-100 dark:border-zinc-900`

### Animation Patterns
```tsx
// Standard Framer Motion fade-in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### Button Usage
- Primary CTA: `<Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white ...">Get started</Button>`
- ShadCN variants: `default`, `outline`, `ghost`, `destructive`, `link`
- Sizes: `xs`, `sm`, `default`, `lg`, `icon`

## Adding New Features

### To Add a New Project
1. Add entry to `projects` array in [lib/projects.ts](lib/projects.ts) with unique `slug`
2. Page auto-generates via `generateStaticParams()` in [app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)
3. Rebuild to generate static HTML

### To Add a New Page Section
1. Create component in `/components/` (e.g., `faq.tsx`)
2. Import and add to [app/page.tsx](app/page.tsx) between existing sections
3. Follow pattern: section wrapper with padding, max-width container, dark mode support

### To Add ShadCN Components
```bash
npx shadcn@latest add <component-name>
```
Components install to `/components/ui/` and auto-configure with project aliases

## Common Gotchas

1. **basePath in Links**: Use relative paths (`/projects/foo`) not absolute—Next.js handles basePath automatically
2. **Client Components**: Any component using hooks or interactivity needs `"use client"` directive
3. **Hydration**: Theme provider requires `suppressHydrationWarning` on `<html>` due to theme class injection
4. **Static Export**: Cannot use Next.js features requiring a server (ISR, API routes, server actions)
5. **Image Optimization**: Disabled for static export—use `<img>` tags or unoptimized Next.js `<Image>`

## Mission & Values
OakSignal builds **reliable, maintainable systems for cadet and youth organizations**. When writing code:
- Prioritize **clarity** over cleverness
- Ensure **accessibility** (WCAG 2.1 AA)
- Build for **long-term maintainability** (TypeScript strict mode, explicit types)
- Avoid unnecessary dependencies or framework complexity
