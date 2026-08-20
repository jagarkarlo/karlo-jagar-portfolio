# Karlo Jagar Portfolio

Personal Astro portfolio for public work in platform engineering, cloud infrastructure, observability, developer tooling, networking, and game systems.

Live at <https://jagarkarlo.github.io/karlo-jagar-portfolio/>.

## Features

- **Orbital relay hero** — an interactive canvas scene: a planet limb anchored to
  the viewport, ground stations on the horizon, and satellites that link to a
  station only while above its local horizon, so connections rise and set
- **Interactive constellations** — four real asterisms that reveal their name and
  geometry as the pointer approaches
- **Radiant meteor shower** — streaks emanating from a single radiant point
- **Operations console** — keyboard-driven command palette on `Ctrl+K` / `Cmd+K`
- **Typed content collections** — projects are Markdown validated by a Zod schema
- **Single config file** — identity, navigation and socials in `src/config.ts`
- **Light and dark themes** with no flash of unstyled theme on navigation
- **Motion-safe** — every animation honours `prefers-reduced-motion`
- Structured person metadata, Open Graph tags, sitemap, robots policy, and 404 page
- Automatic GitHub Pages deployment from `main`

## Commands

| Command | Action |
| --- | --- |
| `npm ci` | Install dependencies |
| `npm run dev` | Start the dev server on `localhost:4321` |
| `npm run build` | Type-check with `astro check` and build to `./dist/` |
| `npm run preview` | Preview the production build locally |

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