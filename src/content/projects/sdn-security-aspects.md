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
