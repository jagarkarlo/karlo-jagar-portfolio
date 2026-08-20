---
title: SDN Security Aspects
order: 2
category: Network security
summary: A Ryu and Mininet security lab that learns Layer 2 paths, enforces an SSH ACL, detects rapid port scanning, and reports events in a live dashboard.
outcome: Repeatable scenarios validate connectivity, ACL drops, allowed HTTP traffic, scan detection, and installed OpenFlow rules.
stack:
  - Python
  - Ryu
  - OpenFlow
  - Mininet
repo: https://github.com/jagarkarlo/SDN-security-aspects
featured: true
---

A software-defined networking lab where the controller is the security control
point: learning switch behaviour, access control, and scan detection all live in
the same OpenFlow application.

## Control loop

```mermaid
flowchart LR
  H["Hosts"] --> S["Mininet topology"]
  S --> O["Open vSwitch"]
  O <-->|"OpenFlow 1.3"| R["Ryu controller"]
  R --> L["Learning switch rules"]
  R --> A["SSH ACL"]
  R --> D["Port-scan detector"]
  D --> E["Security event dashboard"]
```

The emulator supplies repeatable traffic, Open vSwitch forwards packets, and
the Ryu controller decides which rules to install. ACL and scan-detection paths
feed the same event surface, so a test can verify both forwarding behaviour and
the security decision that caused it.
