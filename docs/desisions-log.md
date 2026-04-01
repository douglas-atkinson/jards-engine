# JARDS Engine — Decisions Log

## Format

Each entry records:
- decision
- status
- rationale
- date
- notes

---

## D-001 — First Target Game

- **Decision:** The first target game will be Whac-A-Mole v1.
- **Status:** Accepted
- **Rationale:** It forces real engine requirements without introducing excessive complexity.
- **Date:** 2026-03-31
- **Notes:** Chosen specifically to exercise scenes, input, timing, HUD, hit testing, and simple entities.

---

## D-002 — Initial Rendering Approach

- **Decision:** Use HTML5 Canvas 2D for rendering.
- **Status:** Accepted
- **Rationale:** Canvas 2D is simple, fast to start with, easy to debug, and fully sufficient for the first game.
- **Date:** 2026-03-31
- **Notes:** WebGL may be reconsidered only if future requirements justify it.

---

## D-003 — Build Tool

- **Decision:** Use Vite.
- **Status:** Accepted
- **Rationale:** Fast setup, fast dev server, minimal friction, excellent fit for TypeScript and browser-based development.
- **Date:** 2026-03-31
- **Notes:** No custom `vite.config.ts` is needed initially.

---

## D-004 — Primary Language

- **Decision:** Use TypeScript from day one.
- **Status:** Accepted
- **Rationale:** JARDS Engine is expected to grow over time, and TypeScript provides stronger structure for a long-lived engine codebase.
- **Date:** 2026-03-31
- **Notes:** JavaScript was considered acceptable for a faster start, but TypeScript better fits long-term maintainability.

---

## D-005 — Initial Architecture Style

- **Decision:** Start with a scene/entity model, not full ECS.
- **Status:** Accepted
- **Rationale:** The first game does not justify ECS complexity. A simple scene/entity structure gets us to a working prototype faster.
- **Date:** 2026-03-31
- **Notes:** ECS remains a future possibility after real pain points appear.

---

## D-006 — Engine/Game Separation

- **Decision:** Keep engine code and game code in separate folders.
- **Status:** Accepted
- **Rationale:** This prevents the game from contaminating the engine and makes later reuse/refactoring easier.
- **Date:** 2026-03-31
- **Notes:** Engine code lives in `src/engine`; first game lives in `src/games/whac-a-mole`.

---

## D-007 — Project Growth Rule

- **Decision:** Every engine addition must justify itself through the needs of the game.
- **Status:** Accepted
- **Rationale:** Prevents premature abstraction and feature creep.
- **Date:** 2026-03-31
- **Notes:** This is one of the most important guardrails in the project.

---

## D-008 — Milestone 1 Definition

- **Decision:** Milestone 1 will be the Project Skeleton milestone.
- **Status:** Accepted
- **Rationale:** Before gameplay systems, we need a clean repo, working dev environment, visible canvas, running loop, and blank scene.
- **Date:** 2026-03-31
- **Notes:** This is the first real implementation target after Phase 0 docs are committed.