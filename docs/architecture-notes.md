# JARDS Engine — Architecture Notes

## Current Architectural Position

JARDS Engine will begin as a small TypeScript game engine built around:

- a central game object,
- a game loop,
- a scene system,
- lightweight entities,
- simple rendering through Canvas 2D.

This is intentionally conservative.

The goal is not to invent a grand engine architecture before the first game exists. The goal is to build a real game-driven engine and let the architecture grow from proven needs.

---

## Guiding Principles

### 1. Game-driven development
The engine exists to support actual games, beginning with Whac-A-Mole v1.

### 2. Small believable core
The first version should include only the systems required to support the first target game.

### 3. Separation of concerns
- engine code in `src/engine`
- game code in `src/games/whac-a-mole`

### 4. Controlled growth
Do not add systems just because “engines usually have them.”

### 5. Refactor after proof
Refactor after real usage reveals pain points.

---

## Current Structural Model

### Core objects
Expected early engine core:

- `Game`
- `GameLoop`
- `Scene`
- `SceneManager`
- `Renderer`
- `InputManager`
- `Entity`
- timing utilities

### Scene-first organization
Scenes are the first high-level state boundary.

Likely scenes:
- `BootScene`
- `TitleScene`
- `GameScene`
- `GameOverScene`

### Entity-first gameplay objects
Gameplay objects should begin as lightweight entities with:
- id
- position
- size
- active flag
- `update(dt)`
- `render(renderer)`

---

## ECS Position

We are **ECS-aware but not ECS-committed**.

### What this means
- ECS concepts are worth discussing now.
- Full ECS is not justified yet.
- We should avoid writing code that would make later migration impossible.
- We should not build a cathedral for one mole and one hammer.

### Reason
For Whac-A-Mole v1, a scene/entity architecture is more than enough.

Potential future component categories:
- Transform
- Sprite
- Collider
- Clickable
- TimerBehavior
- Animated

Potential future systems:
- RenderSystem
- InputSystem
- SpawnSystem
- AnimationSystem
- CollisionSystem

These remain future options, not present requirements.

---

## Rendering Notes

JARDS Engine will begin with **Canvas 2D**.

### Why Canvas 2D
- fast startup
- easy debugging
- low complexity
- ideal for a first 2D prototype
- enough for Whac-A-Mole and other early games

### Not doing yet
- WebGL
- shaders
- physics engine
- particle middleware

---

## Input Notes

Initial input target:
- mouse position
- click detection
- down/up tracking

Keyboard support can be added later if needed.

Touch abstraction is a future-friendly possibility, but not required for Milestone 1.

---

## Timing Notes

Timers will likely be needed for:
- mole spawn timing
- mole visible duration
- round timer
- simple cooldowns

A small timer utility is preferable to premature scheduling infrastructure.

---

## Early API Style Notes

The API should be:
- readable,
- small,
- unsurprising,
- usable by future-you without archaeology.

Avoid cleverness. Favor clarity.

---

## Refactor Trigger

A refactor should happen only after:
- the first playable prototype exists,
- pain points are concrete,
- and there is a clear reason to improve the architecture.

Until then: build the smallest thing that works cleanly.