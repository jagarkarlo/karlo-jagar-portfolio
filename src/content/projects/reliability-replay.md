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
