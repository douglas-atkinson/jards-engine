# JARDS Engine — Phase 0 Blueprint

## Purpose of Phase 0

Phase 0 is not about building a full-featured game engine.

Its purpose is to:

- choose the first target game,
- define the smallest believable engine core,
- set architectural rules early,
- set up tooling and repository structure,
- create a controlled milestone path.

The goal is to leave Phase 0 with a clean foundation and a small but real development plan.

---

## First Target Game

**Chosen target:** Whac-A-Mole v1

### Why this is the right first game

Whac-A-Mole gives us:

- one main interaction loop,
- animated entities,
- mouse input,
- score tracking,
- timing / spawn logic,
- click hit testing,
- simple HUD,
- multiple game states,
- room for optional sound.

It is large enough to force real engine decisions without dragging us into unnecessary complexity.

### Initial design direction

- **View:** top-down
- **Initial scope:** one mole, one hole, one click interaction
- **Game length:** fixed time or fixed number of rounds

### Minimal gameplay loop

- Mole appears from a hole
- Player clicks the mole before it disappears
- Successful hit increases score
- Missed chance may optionally count against player
- Game ends after a timer or round limit

---

## Engine MVP Requirements

The MVP engine should only include what is needed to support Whac-A-Mole cleanly.

### Required systems

1. **Game loop**
    - `requestAnimationFrame`
    - elapsed time / delta time
    - `update(dt)` separate from `render()`

2. **Scene / state management**
    - Boot scene
    - Title scene
    - Game scene
    - Game over scene

3. **Input**
    - mouse position
    - click / down / up
    - keyboard later if needed

4. **Rendering**
    - HTML5 Canvas 2D
    - draw shapes
    - draw text
    - draw images later

5. **Asset loading**
    - simple image loading first
    - audio hooks later

6. **Entity model**
    - lightweight base entity structure
    - position, size, active flag
    - `update()` and `render()`

7. **Hit testing**
    - point-in-rectangle first
    - possibly bounding-box utilities later

8. **Timing utilities**
    - timers for mole rise / hide / spawn
    - round timer

9. **HUD text**
    - score
    - timer
    - scene messages

10. **Audio hooks**
- intentionally planned
- implementation deferred until visual loop works

---

## Architecture Direction

JARDS Engine will begin with a **scene/entity model**, not a full ECS.

### Why

A classic object-oriented structure is enough for the first game and keeps development moving. ECS ideas may be discussed early, but full ECS should not be implemented until real pain points justify it.

### Rule

Every engine addition must justify itself through the needs of the game.

---

## Folder Strategy

- `src/engine/` contains engine code
- `src/games/whac-a-mole/` contains game-specific code
- `docs/` contains project planning and design records

This separation keeps engine code honest and prevents game logic from leaking into the core.

---

## Initial Stack

- **Language:** TypeScript
- **Rendering:** HTML5 Canvas 2D
- **Build tool:** Vite
- **Version control:** Git + GitHub
- **Editor:** WebStorm
- **Formatting/linting:** ESLint + Prettier later

---

## Milestone Path

### Milestone 1 — Project Skeleton
- repository created
- Vite setup confirmed
- canvas visible
- game loop running
- blank scene displayed

### Milestone 2 — Scene Framework
- base `Scene`
- `SceneManager`
- title scene to play scene switching

### Milestone 3 — Input System
- mouse tracking
- click detection
- scene-level input access

### Milestone 4 — Basic Entity Support
- base `Entity`
- update/render flow
- test entity

### Milestone 5 — Mole Prototype
- mole entity
- state machine
- timed appearance
- hitbox

### Milestone 6 — Gameplay Rules
- score
- countdown timer
- end-of-game logic

### Milestone 7 — Basic Polish
- HUD cleanup
- simple graphics
- optional sound
- restart flow

### Milestone 8 — Refactor Review
- evaluate engine/game boundaries
- identify pain points
- decide whether further abstraction is justified

---

## Risks We Want to Avoid

- building an abstract engine with no game proof
- premature ECS complexity
- toolchain overkill
- uncontrolled feature creep

---

## Exit Criteria for Phase 0

Phase 0 is complete when we have:

- chosen the first game,
- chosen the stack,
- created the repository,
- created the folder structure,
- written the planning docs,
- agreed on Milestone 1,
- and are ready to implement the smallest playable engine shell.