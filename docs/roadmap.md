# Portfolio Roadmap

## Goal

Build a fast, accessible personal website that presents public work in platform engineering, infrastructure automation, software development, and learning.

The site should be useful before it is elaborate: each milestone should produce a working, deployable improvement.

## Milestone 1: Public Landing Page

- Create an Astro and TypeScript project.
- Add one responsive home page.
- Include a short introduction, GitHub link, LinkedIn link, and selected public projects.
- Deploy to GitHub Pages.

## Milestone 2: Portfolio Content

- Add project cards with context, technology, outcome, and repository links.
- Add a concise education and learning section.
- Add clear contact links.
- Add metadata, an Open Graph image, sitemap, and favicon.

## Milestone 3: Maintainable Content

- Move projects and writing into Markdown or MDX content collections.
- Add individual project pages.
- Add a short technical notes or blog section only when there is useful content to publish.

## Milestone 4: Optional Interactive Features

- Add a keyboard-accessible terminal-style command palette.
- Keep commands practical: `help`, `about`, `projects`, `skills`, and `contact`.
- Add a downloadable CV generated from structured public data.

## Public Content Rules

- Publish personal projects, university work that may be shared, and public learning outcomes.
- Do not publish confidential employer information, internal URLs, tickets, infrastructure topology, customer data, credentials, or private repository content.
- Describe private professional work only at a high level when appropriate.
- Review every commit with `git diff --cached` before pushing.

## Definition of Done for the First Release

- The home page works on mobile and desktop.
- GitHub Pages deploys automatically from the default branch.
- Links work and metadata is present.
- The site has an accessible color contrast and keyboard navigation.
- The site contains only public-safe content.