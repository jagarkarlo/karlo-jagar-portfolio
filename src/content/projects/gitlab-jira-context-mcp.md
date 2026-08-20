---
title: GitLab Jira Context MCP
order: 3
category: AI-assisted operations
summary: A local TypeScript MCP server connecting GitLab, Jira, Confluence, Grafana, and optional GitHub context to coding assistants.
outcome: Read tools stay read-only; Jira mutations and GitHub file writes require explicit confirmation and scoped tokens.
stack:
  - TypeScript
  - MCP
  - GitLab
  - Jira
repo: https://github.com/jagarkarlo/gitlab-jira-context-mcp
---

Context plumbing for coding assistants, built on the principle that the default
posture is read-only and every write is deliberate.
