---
title: Copilot knowledge base
order: 7
category: Local AI memory & MCP server
summary: A local TypeScript Model Context Protocol server that gives coding assistants durable, git-versioned Markdown memory backed by a SQLite FTS5 search index.
outcome: Retains verified engineering decisions, runbooks, and troubleshooting outcomes across sessions without sending data to external services.
stack:
  - TypeScript
  - MCP
  - SQLite FTS5
  - Node.js
repo: https://github.com/jagarkarlo/copilot-knowledge-base
---

Coding agents lose context between sessions unless verified conclusions are
captured in a form both humans and tools can inspect.

**Copilot Knowledge Base** is a local-only MCP server that stores durable
engineering knowledge as human-readable Markdown files with YAML frontmatter and
indexes them in a local SQLite full-text search database.

## Continuous knowledge loop

```mermaid
flowchart LR
  Task["New engineering task"] --> Recall["Build context from SQLite FTS5"]
  Recall --> Live["Verify against live systems"]
  Live --> Work["Implement or diagnose"]
  Work --> Save["Record verified decision / runbook"]
  Save --> MD["Git-versioned Markdown"]
  Save --> FTS[("Local SQLite FTS index")]
  MD --> Recall
  FTS --> Recall
```

## Key capabilities

- **Progressive retrieval**: Supports compact task-context bundles, full-text
  search across kinds (`decision`, `runbook`, `incident`, `fact`,
  `architecture`), freshness tracking (`verifiedAt` / `expiresAt`), and git-backed
  history/revert.
- **Zero external telemetry**: Runs locally over `stdio` on Node.js 22.5+, never
  exposes an HTTP port, and never stores credentials or secret values.
