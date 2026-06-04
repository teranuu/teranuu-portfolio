# Teranuu Portfolio

A polished single-page portfolio for Denn Cayacap, built with React, TypeScript, Vite, and Tailwind CSS. The site presents a focused developer profile with scroll-aware navigation, selected project sections, experience highlights, and contact entry points.

## Features

- Responsive portfolio layout with a fixed desktop directory and compact mobile flow.
- Scroll-aware active section tracking for Overview, Projects, Experience, and Communication.
- Midnight-indigo visual system with local Space Grotesk, DM Sans, and JetBrains Mono fonts.
- Reusable UI primitives for badges, buttons, navigation menus, separators, and tooltips.
- Accessible section landmarks, semantic content structure, favicon, and social metadata.
- Production build pipeline through Vite and TypeScript.

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Radix UI primitives
- lucide-react
- class-variance-authority
- clsx and tailwind-merge

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

On Windows PowerShell, if script execution blocks `npm`, use `npm.cmd` instead:

```bash
npm.cmd run build
```

## Project Structure

```text
teranuu-portfolio-app/
+-- public/              # Favicon and public SVG assets
+-- src/
|   +-- components/ui/   # Reusable UI primitives
|   +-- lib/utils.ts     # Class name composition helper
|   +-- App.tsx          # Portfolio content and layout
|   +-- App.css          # Tailwind theme, fonts, and base styles
|   +-- main.tsx         # React entry point
+-- index.html           # App shell and metadata
+-- package.json         # Scripts and dependencies
+-- vite.config.ts       # Vite React and Tailwind setup
```

## Customization

- Update portfolio sections, project entries, role history, and contact links in `src/App.tsx`.
- Adjust the color palette, typography, Tailwind theme tokens, and global styles in `src/App.css`.
- Edit page title, description, Open Graph metadata, and favicon references in `index.html`.
- Replace public assets in `public/` and app assets in `src/assets/` as needed.

Some current content, including sample company names and contact links, is structured as editable portfolio data. Swap those values for final production details before publishing.

## Verification

The production build was verified locally with:

```bash
npm.cmd run build -- --emptyOutDir false
```
