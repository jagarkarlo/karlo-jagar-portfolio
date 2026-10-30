# Karlo Jagar Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">

  <img src="https://img.shields.io/badge/License-Source_Available-D29922?style=for-the-badge" alt="License">
</p>

Personal Astro portfolio for public work in platform engineering, cloud infrastructure, observability, developer tooling, networking, and game systems.

Live at <https://jagarkarlo.github.io/karlo-jagar-portfolio/>.

## Features

- **Unified 3D cosmic scene engine across every page** — each page renders its own bespoke
  3D particle formation with identical motion, drag rotation, spring cursor physics,
  shockwave clicks, double-click overdrive, and anamorphic lens flares (`galaxy` on Home,
  `globe` on About, `cluster` on Work, `helix` on Blog, `bridge` on Contact, and `radar`
  on Search)
- **Editorial page layout** — consistent header typography, offset summary copy, and
  structured project and technology sections across the site
- **Work-first home page** — featured projects precede the interactive technology list
- **Operations console** — keyboard-driven command palette on `Ctrl+K` / `Cmd+K` with
  interactive 3D scene triggers
- **Typed content collections** — projects are Markdown validated by a Zod schema
- **Single config file** — identity, navigation and socials in `src/config.ts`
- **Light and dark themes** with no flash of unstyled theme on navigation
- Structured person metadata, Open Graph tags, sitemap, robots policy, and 404 page
- Automatic GitHub Pages deployment from `main`

## Commands

| Command | Action |
| --- | --- |
| `npm ci` | Install dependencies |
| `npm run dev` | Start the dev server on `localhost:4321` |
| `npm run build` | Type-check with `astro check` and build to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npx playwright install chromium` | Install Chromium for browser tests |
| `npm run test:home` | Run the home scene's browser regression tests |

To test an already running build instead of starting the dev server, set
`PORTFOLIO_TEST_URL` to its full home-page URL before running `npm run test:home`.

## Configuration

Everything site-specific lives in [`src/config.ts`](src/config.ts):

| Export | Purpose |
| --- | --- |
| `SITE` | Name, role, description, deployment `url` and `base`, theme colours, default theme |
| `NAV` | Header and footer navigation items |
| `SOCIALS` | Social links; the first entry is shown in the header |
| `withBase()` | Prefixes a root-relative path with the deployment base |

`astro.config.ts` reads `site` and `base` from `SITE`, so there is one place to
change when moving between a subpath and a domain root.

## Adding a project

Create a Markdown file in `src/content/projects/`:

```markdown
---
title: Project name
order: 7
category: Cloud delivery
summary: One sentence on what it is.
outcome: One sentence on what it demonstrates.
stack: [Astro, TypeScript]
repo: https://github.com/user/repo
featured: false
draft: false
---

Longer description.
```

The schema in [`src/content.config.ts`](src/content.config.ts) validates it at
build time. `featured: true` promotes it to the home page; `draft: true` hides it
everywhere.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes
`dist/` to GitHub Pages. To deploy elsewhere, change `SITE.url` and set
`SITE.base` to `"/"`.

## Public Content

This repository uses only public project material and sanitized professional descriptions. Employer-private URLs, credentials, tickets, customer data, and infrastructure details do not belong here.
