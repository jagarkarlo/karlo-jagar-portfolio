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

## Data and recovery paths

```mermaid
flowchart LR
  U["Browser"] --> A["Angular UI"]
  A -->|"REST polling"| F["FastAPI"]
  A <-->|"WebSocket /ws/memory"| F
  F --> CPU["CPU samples"]
  F --> NET["Latency samples"]
  F --> MEM["Memory stream"]
  F -.->|"simulated failure / close"| A
  A --> B["Backoff and reconnect"]
  B --> F
```

REST polling and WebSocket streaming deliberately fail in different ways. The
frontend keeps the failure visible, records the state transition, and retries
the stream with exponential backoff instead of silently presenting stale data.
