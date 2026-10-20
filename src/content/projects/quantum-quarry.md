---
title: QuantumQuarry
order: 11
category: Game systems & BSc thesis
summary: A retro-inspired six-level 2D Unity platformer developed as the practical part of my bachelor's thesis, featuring movement, combat, hazards, store upgrades, persistent run state, and gamepad support.
outcome: Built for the bachelor thesis "Izrada retro platformera u programskom alatu Unity", including deterministic enemy state machines, level-scaled swimming/breath mechanics, and batch scene validation.
stack:
  - Unity
  - C#
  - Enemy AI
  - Validation
repo: https://github.com/jagarkarlo/quantum-quarry
---

Developed as the practical part of my bachelor's thesis at the Faculty of
Organization and Informatics (*"Izrada retro platformera u programskom alatu
Unity"*), **QuantumQuarry** is a complete six-level 2D platformer rather than a
prototype.

## Game architecture & validation

```mermaid
flowchart LR
  Input["Keyboard & Gamepad Input"] --> Player["Player Controller<br/>Movement, Combat & Breath"]
  Player --> World["6 Playable Levels<br/>Hazards, Water & Checkpoints"]
  AI["Deterministic Enemy FSMs"] --> World
  World --> Economy["Collectibles & Upgrade Store"]
  Economy --> Save["Persistent Run State"]
  Validator["Batch Scene & Prefab Validator"] -.->|"verifies references"| World
```

## Systems highlights

- **Six complete levels**: Movement, melee and ranged combat, environmental
  hazards, water and breath-scaling mechanics, checkpoints, and boss/enemy
  encounters.
- **Deterministic enemy state machines**: Reproducible patrol, chase, and attack
  transitions so enemy behaviour can be reasoned about and tested.
- **Automated batch validation**: Editor validation scripts that inspect scene
  wiring, prefab references, and level progression before builds.
