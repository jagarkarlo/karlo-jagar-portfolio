---
title: OpsBench
order: 2
category: AI DevOps reliability benchmark
summary: Reproducible safety and reliability benchmark for evaluating AI-assisted and human DevOps incident diagnosis, evidence citation, and remediation safety.
outcome: Scores structured incident responses across five deterministic Kubernetes, Prometheus, GitOps, PostgreSQL, and Terraform scenarios with a React control room and zero-dependency REST API.
stack:
  - Python
  - TypeScript
  - React
  - Prometheus
  - SQLite
repo: https://github.com/jagarkarlo/opsbench
featured: true
---

AI coding and operations assistants are quick to suggest `kubectl` or Terraform
commands during an incident — but speed without evidence citation or safety
boundaries is a liability.

**OpsBench** is an open DevOps scenario and evaluation engine (evolving toward
**IncidentOps**: a visual workspace to observe, verify, and rehearse incident
response). It evaluates structured human and AI responses against versioned
operational evidence and deterministic scoring rules.

## Evaluation pipeline

```mermaid
flowchart LR
  S["Versioned scenario pack"] --> R["Benchmark runner"]
  R --> A["Model / human adapter"]
  A --> Resp["Structured response"]
  S --> E["Deterministic evaluator"]
  Resp --> E
  E --> Score["Diagnosis, citation & safety score"]
  Score --> DB[("SQLite result store")]
  DB --> API["opsbench serve REST API + /metrics"]
  API --> UI["React & TypeScript control room"]
```

## What it tests and measures

- **Five deterministic incident scenarios**: Kubernetes image pull failure,
  observability latency investigation, GitOps drift detection, PostgreSQL
  transaction deadlock analysis, and Terraform resource import conflict.
- **Hallucination & safety gates**: Penalizes fabricated metrics, non-existent
  cluster resources, uncited claims, and dangerous or irreversible remediation
  commands.
- **Monitoring-path verification foundation (v0.7.0)**: Traces whether each step
  from a telemetry signal through collection, rule evaluation, Alertmanager
  routing, and receiver delivery was actually verified or remains unknown.
- **Local-first execution**: Runs completely offline with fixture, human, and
  OpenAI-compatible adapters, a SQLite store, a `/metrics` Prometheus endpoint,
  and an `opsbench doctor` preflight CLI.
