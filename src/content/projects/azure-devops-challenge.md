---
title: Azure DevOps Challenge
order: 1
category: Cloud delivery
summary: A documented Azure delivery system spanning a hardened Linux VM, containerized Nginx, AKS, Traefik ingress, and Terraform infrastructure definitions.
outcome: Verified with real Azure and kubectl captures, traffic-flow diagrams, Kubernetes manifests, and Terraform plans.
stack:
  - Azure
  - Terraform
  - Kubernetes
  - Docker
repo: https://github.com/jagarkarlo/devops-challenge
featured: true
---

An end-to-end Azure delivery exercise carried from infrastructure definition
through to a running ingress-fronted workload, with every step captured rather
than assumed.

## Traffic path

```mermaid
flowchart TD
  U["Client"] --> DNS["Public IP / DNS"]
  DNS --> T["Traefik ingress controller"]

  subgraph AKS["AKS cluster"]
    T --> S["Kubernetes Service"]
    S --> P1["nginx pod"]
    S --> P2["nginx pod"]
  end

  subgraph VNET["Virtual network"]
    VM["Hardened Linux VM<br/>Docker + nginx"]
  end

  DNS -.->|"direct container route"| VM

  TF["Terraform"] -.->|"provisions"| AKS
  TF -.->|"provisions"| VNET
```

Two delivery routes are provisioned from the same Terraform definitions: a
single hardened VM running nginx in Docker, and an AKS cluster fronted by
Traefik. The comparison is the point — the same workload, two operational
models, with the trade-offs visible rather than argued.
