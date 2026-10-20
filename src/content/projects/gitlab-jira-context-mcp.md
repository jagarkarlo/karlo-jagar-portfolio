---
title: ContextLoom MCP
order: 3
category: AI-assisted operations
summary: A local TypeScript MCP server connecting GitLab, Jira, Confluence, Grafana, and optional GitHub context to coding assistants, read-only by default with explicit confirmation for writes.
outcome: Read tools stay read-only; Jira comments/worklogs and GitHub file writes require explicit confirmation and scoped tokens.
stack:
  - TypeScript
  - MCP
  - GitLab
  - Jira
  - Grafana
repo: https://github.com/jagarkarlo/contextloom-mcp
featured: true
---

Context plumbing for coding assistants (renamed from `gitlab-jira-context-mcp`),
built on the principle that the default posture is read-only and every write is
deliberate.

## Context flow

```mermaid
flowchart LR
  C["VS Code / MCP client"] <-->|"stdio"| S["contextloom-mcp"]
  S -->|"REST API"| G["GitLab projects, MRs & pipelines"]
  S -->|"REST API"| J["Jira issues & JQL search"]
  S -.->|"optional REST API"| CF["Confluence pages"]
  S -.->|"optional REST API"| GF["Grafana dashboards"]
  S -.->|"confirmed writes"| GH["GitHub repositories"]
```

The server runs locally over `stdio` and exposes narrowly scoped tools across
GitLab, Jira, Confluence, Grafana, and GitHub. Service tokens remain in the
local `.env` or process environment rather than in MCP messages or source
control.
