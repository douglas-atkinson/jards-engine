# JARDS Engine

JARDS Engine is a long-term HTML5 2D game engine project built in TypeScript using Canvas 2D and Vite.

The project is being developed in small, controlled milestones with a game-driven approach: the engine grows only when the current target game requires it.

---

## Current Status

The project is currently in **Phase 0 / Milestone 1**.

Focus right now:
- lock in project structure,
- document architecture decisions,
- initialize GitHub,
- create the first runnable engine skeleton.

---

## First Target Game

The first target game is **Whac-A-Mole v1**.

This game was chosen because it requires:
- scenes,
- mouse input,
- timing,
- scoring,
- hit testing,
- simple UI,
- and lightweight gameplay entities.

It is intentionally small but still forces real engine decisions.

---

## Core Stack

- **Language:** TypeScript
- **Rendering:** HTML5 Canvas 2D
- **Build Tool:** Vite
- **Version Control:** Git + GitHub
- **Editor:** WebStorm

---

## Project Philosophy

JARDS Engine follows a few core rules:

1. Build a game-driven engine, not an abstract framework.
2. Start with the smallest believable core.
3. Prefer clarity over cleverness.
4. Avoid premature complexity.
5. Refactor only after real usage reveals a reason.

---

## Initial Architecture Direction

The engine begins with a **scene/entity model**.

It is intentionally:
- ECS-aware,
- but not ECS-committed.

That means we are leaving room for future architectural evolution without overengineering the first version.

---

## Planned Milestones

### Milestone 1 — Project Skeleton
- repo created
- dev environment confirmed
- canvas visible
- game loop running
- blank scene displayed

### Milestone 2 — Scene Framework
- base scene class
- scene manager
- title/play scene switching

### Milestone 3 — Input System
- mouse tracking
- click detection

### Milestone 4 — Basic Entity Support
- entity base class
- update/render flow

### Milestone 5 — Mole Prototype
- timed mole appearance
- hit detection
- simple mole state machine

### Milestone 6 — Gameplay Rules
- score
- timer
- game over logic

### Milestone 7 — Basic Polish
- HUD cleanup
- simple effects
- restart flow

### Milestone 8 — Refactor Review
- engine/game separation review
- identify architectural pain points
- decide what deserves generalization

---

## Folder Structure

```text
jards-engine/
├── public/
├── src/
├── docs/
├── index.html
├── package.json
├── tsconfig.json
└── README.md