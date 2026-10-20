---
title: raywhy
order: 5
category: Kubernetes & Ray diagnostics
summary: Read-only diagnostic CLI for multi-tenant KubeRay clusters that explains why a Ray job is stuck in PENDING and how to fix it.
outcome: Distinguishes unsatisfiable resource shapes, cluster contention, autoscaler caps/quotas, and unavailable nodes instead of forcing operators to correlate logs by hand.
stack:
  - Python
  - Ray
  - Kubernetes
  - Prometheus
repo: https://github.com/jagarkarlo/raywhy
---

Ray's dashboard shows **state**, not **causality**. When a job sits in `PENDING`
on a shared multi-tenant KubeRay cluster, the usual advice is "go read the
autoscaler logs and `kubectl describe` output side by side."

**raywhy** is a read-only diagnostic engine that inspects job resource requests,
cluster node shapes, and autoscaler state to return an explicit verdict and
remedy.

## Diagnostic flow

```mermaid
flowchart LR
  J["Ray job request"] --> Engine["raywhy verdict engine"]
  N["Cluster node shapes & readiness"] --> Engine
  A["Autoscaler limits & quotas"] --> Engine
  Engine --> U["UNSATISFIABLE<br/>No node shape fits"]
  Engine --> C["CONTENDED<br/>Queued behind active workloads"]
  Engine --> T["THROTTLED / CAPPED<br/>Quota or maxReplicas reached"]
  Engine --> X["UNAVAILABLE<br/>Cordoned, NotReady, or image pull error"]
```

## Design boundaries

- **Strictly read-only**: Never schedules, preempts, evicts, or mutates cluster
  resources, and requires no in-cluster agent or sidecar.
- **Deterministic verdict engine**: Evaluates normalized cluster snapshots via
  `raywhy job <id> --snapshot <file>` (with human-readable and `--json` output)
  so every classification is unit-tested against reproducible multi-tenant
  fixtures.
