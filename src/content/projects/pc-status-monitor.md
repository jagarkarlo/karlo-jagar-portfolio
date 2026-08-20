---
title: PC Status Monitor
order: 6
category: Resilient web application
summary: An Angular and FastAPI monitor for latency, CPU, and memory using REST polling and a live WebSocket stream.
outcome: Exercises simulated HTTP faults, forced disconnects, loading states, bounded history, and exponential-backoff recovery.
stack:
  - Angular
  - FastAPI
  - WebSockets
  - RxJS
repo: https://github.com/jagarkarlo/pc-status-monitor
---

Built to fail on purpose. The interesting part is not the metrics, it is how the
client behaves when the stream drops and has to recover.
