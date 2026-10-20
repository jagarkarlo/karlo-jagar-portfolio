---
title: DashDrift
order: 6
category: Observability & GitOps tooling
summary: Semantic drift detection for Grafana dashboards-as-code with low-noise diffs, CI gating, and adopt-back workflows.
outcome: Suppresses Grafana UI metadata churn (version, id, gridPos, injected defaults) and surfaces only real changes to PromQL/LogQL queries, thresholds, alerts, and variables.
stack:
  - Python
  - Grafana
  - PromQL
  - GitOps
repo: https://github.com/jagarkarlo/dashdrift
---

When someone edits a Grafana panel at 2am during an incident to see a metric
more clearly, the fix works and almost never makes it back into Git. Six
months later, Git and production have silently diverged, and raw JSON diffs are
drowned in hundreds of lines of Grafana metadata noise.

**DashDrift** normalizes both sides and reports only **semantic** dashboard
changes.

## Drift normalization & workflow

```mermaid
flowchart LR
  Git["Git dashboard JSON / Jsonnet"] --> Norm["Semantic normalizer"]
  Live["Live Grafana API"] --> Norm
  Norm -->|"strips id, version, uid & default churn"| Diff["Semantic diff engine"]
  Diff --> CLI["dashdrift diff (human report)"]
  Diff --> Check["dashdrift check (CI gate)"]
  Diff --> Adopt["dashdrift adopt (write UI fix back to Git)"]
```

## What counts as drift vs. noise

- **Reported as drift**: PromQL and LogQL query edits, alert conditions and
  thresholds, datasource identity changes, added or removed panels, template
  variable queries, and unit/threshold updates.
- **Suppressed as noise**: `version`, `id`, and `iteration` increments, key
  reordering, Grafana-injected `fieldConfig` defaults, and cosmetic option
  churn.
