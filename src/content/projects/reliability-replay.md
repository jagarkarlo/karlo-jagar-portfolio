---
title: Reliability Replay & ColdRoute
order: 10
category: Observability & telemetry labs
summary: Deterministic fault-injection and cold-chain telemetry practice labs for correlating service faults, excursion streams, Prometheus alerts, and Grafana dashboards through recovery.
outcome: Pairs a deterministic catalog fault-injection lab (portfolio-ops-lab) with a seeded cold-chain telemetry simulator (coldroute-platform) and automated unit tests.
stack:
  - Python
  - Prometheus
  - Grafana
  - Docker
repo: https://github.com/jagarkarlo/portfolio-ops-lab
---

Incidents and telemetry streams you can replay on demand. The faults and sensor
excursions are synthetic and deterministic, which makes the resulting signals a
verifiable engineering tool rather than a guess.

## Incident & telemetry loop

```mermaid
flowchart LR
  C["Catalog API & ColdRoute simulator"] --> M["Prometheus scrape & event stream"]
  M --> R["Recording rules & excursion processor"]
  R --> A["Alerts"]
  M --> G["Grafana dashboard"]
  F["Deterministic fault / drift injector"] --> C
  F --> T["Replay timeline"]
  T --> X["Mitigation"]
  X --> C
```

The labs ([portfolio-ops-lab](https://github.com/jagarkarlo/portfolio-ops-lab)
and [coldroute-platform](https://github.com/jagarkarlo/coldroute-platform)) keep
the causal chain visible: emit seeded telemetry or inject a known fault, observe
the API and metric signals, inspect the recorded availability and latency
series, mitigate, and verify recovery in the same local stack.
