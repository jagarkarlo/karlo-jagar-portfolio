---
title: Reliability Replay
order: 4
category: Observability practice lab
summary: A deliberately fictional local lab for injecting deterministic catalog-service faults and following the resulting operational signals through recovery.
outcome: Correlates replay state with availability, p95 latency, Prometheus alerts, a Grafana dashboard, and deterministic tests.
stack:
  - Python
  - Prometheus
  - Grafana
  - Docker
repo: https://github.com/jagarkarlo/portfolio-ops-lab
---

Incidents you can replay on demand. The faults are synthetic and deterministic,
which makes the resulting signals a teaching tool rather than a guess.

## Incident loop

```mermaid
flowchart LR
  C["Catalog API"] --> M["Prometheus scrape"]
  M --> R["Recording rules"]
  R --> A["Alerts"]
  M --> G["Grafana dashboard"]
  F["Deterministic fault injector"] --> C
  F --> T["Replay timeline"]
  T --> X["Mitigation"]
  X --> C
```

The lab keeps the causal chain visible: inject a known fault, observe the API
signals, inspect the recorded availability and latency series, mitigate, and
verify recovery in the same local stack.
