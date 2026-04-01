🎓 TEACHING CAPTURE — PHASE 0 (Blueprint)
🎯 Learning Objectives

Students should understand:

what a game engine is (at a practical level)
why we don’t start by building “everything”
how to choose a first game strategically
the idea of engine driven by game requirements
basic architecture planning (scene/entity concept)
🧱 Lecture Outline
1. What Are We Building?
   Not just a game
   Not a massive AAA engine
   A small, evolving engine driven by real needs

💬 Line you can use:

“We are not building an engine in theory—we are building one that earns its features.”

2. Why Start With a Game?
   Avoid overengineering
   Force real requirements
   Keep motivation high

Introduce:
👉 Whac-A-Mole as the “forcing function”

3. Choosing the First Game

Break down why it’s perfect:

simple loop
input
timing
scoring
UI
state changes

Contrast with:

platformer (too complex early)
4. Defining MVP Engine Scope

List only what’s needed:

game loop
scenes
rendering
input (later)
entities (lightweight)

💬 Key teaching moment:

“Anything not required by the game is a distraction.”

5. Architecture Philosophy
   OOP-first
   ECS-aware (but not forced)

💬 Great line:

“We earn abstractions—we don’t invent them.”

6. Tooling Decisions
   TypeScript
   Vite
   Canvas 2D

Explain why, not just what

7. Milestone Strategy

Introduce:

milestone-based development
small wins
controlled growth
🎥 Live Teaching Strategy

This is mostly talk + diagrams, not coding.

You might:

sketch scene switching
draw game loop
show folder structure
⚠️ Common Student Confusions
“Why not use Unity?”
“Why not start with physics?”
“Why not ECS now?”

Answer:
👉 Because we don’t know what we need yet.

🎓 Mini Assignment Idea

Ask students:

“Design your own ‘first game’ and justify why it’s a good engine starter.”