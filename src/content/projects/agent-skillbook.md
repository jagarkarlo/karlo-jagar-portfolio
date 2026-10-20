---
title: Agent skillbook & Astro Orbit
order: 9
category: Open-source templates & agent workflows
summary: Composable SKILL.md workflows for coding agents (diagnosing bugs, alignment grilling, session handoffs) alongside the MIT-licensed Astro Orbit portfolio template.
outcome: Packages repeatable engineering disciplines and zero-framework interactive web templates so they can be forked and reused across projects.
stack:
  - Astro
  - TypeScript
  - Tailwind CSS
  - AI Agent Skills
repo: https://github.com/jagarkarlo/agent-skillbook
---

Two open-source repositories focused on reusable engineering structure: one for
how coding agents reason through tasks, and one for fast, zero-framework static
web publishing.

## Workflow & template structure

```mermaid
flowchart LR
  subgraph Skills["agent-skillbook"]
    D["diagnosing-bugs"]
    G["grilling (alignment)"]
    H["handoff (durable state)"]
    W["writing-for-agents"]
  end

  subgraph Template["astro-orbit (MIT template)"]
    Cfg["Single src/config.ts"] --> Pages["Home / About / Work / Blog / Search"]
    Cfg --> Console["Ctrl+K command shell"]
    Cfg --> Canvas["Interactive HTML5 canvas hero"]
  end
```

## Highlights

- **[agent-skillbook](https://github.com/jagarkarlo/agent-skillbook)**: Small,
  self-contained `SKILL.md` playbooks for Claude Code, Codex, and GitHub Copilot
  that prevent common agent failure modes — guessing at bugs before diagnosing,
  building underspecified features without alignment, and losing context across
  handoffs.
- **[astro-orbit](https://github.com/jagarkarlo/astro-orbit)**: MIT-licensed
  Astro 5 + Tailwind v4 portfolio template with Markdown content collections,
  instant client-side search, RSS/sitemap generation, a keyboard-driven command
  shell, and custom canvas physics.
