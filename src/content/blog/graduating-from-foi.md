---
title: Graduating from FOI, and what came next
description: Finishing a Bachelor's in Information and Business Systems with a thesis on retro platformer development in Unity — and the move from studying systems to operating them.
date: 2025-09-23
tags:
  - Personal
  - Career
  - Unity
linkedin: https://www.linkedin.com/posts/karlojagar_im-proud-to-share-that-as-of-september-23rd-activity-7383506553049477120-qqrn
---

As of 23 September 2025 I graduated with a Bachelor's degree in Information and
Business Systems from the **Faculty of Organization and Informatics**, University
of Zagreb.

My final thesis was on **Retro Platformer Game Development in Unity** — the work
that became [QuantumQuarry](https://github.com/jagarkarlo/quantum-quarry): six
levels with movement, combat, hazards, collectibles, store upgrades, persistent
run state and gamepad support.

Special thanks to my mentor **Mladen Konecki** for his continuous support,
guidance and valuable advice throughout the process.

## What the thesis actually taught me

A game is a systems problem wearing a costume. The parts that took the longest
were not the ones you see:

- **Deterministic enemy state machines** — so behaviour is reproducible and
  therefore testable, rather than "it usually works"
- **Level-scaled swimming and breath systems** — mechanics that have to stay fair
  as difficulty ramps
- **Batch project validation** — catching broken references across six levels
  before they reach a build

That last one is the closest thing to infrastructure work in the whole project,
and it is the habit that carried over. Verifying a thing works is separate from
building it, and it needs its own tooling.

## Where it led

I moved into software engineering and then into platform work — Kubernetes,
Argo CD, observability, delivery pipelines. Different domain, same underlying
question: can you prove the system does what you think it does?

Grateful for the experience, and ready for what comes next.
