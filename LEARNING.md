# LEARNING.md

## Current milestone
M1 — Static work task panel → upgraded to a working to-do list (prototype complete, my own version pending).

## Milestone progress
- [x] Reference app inspected (RPG-SuperAPP `app.js`, Quest Board section)
- [x] Working prototype built (shipping mode): `index.html` — single self-contained file
- [ ] I rebuild it myself, step by step, without copying
- [ ] My version committed to Git (`git init` → `git commit`)

## Concepts in the prototype (demonstrated, not yet learned by me)
- HTML: `<form>`, `<label>`, `<input type="checkbox">`, `<ul>`/`<li>`, semantic `<main>`/`<header>`
- CSS: design tokens with `:root` custom properties, flexbox rows, `:focus-visible` focus rings, badge modifier classes
- JS: state array of objects → render function → localStorage persistence
- Architecture pattern: **state → save → render** (every action follows it)
- Accessibility: labeled inputs, `aria-label` on icon-only buttons, `aria-live` status line, visible keyboard focus

## What I have / have not learned
- Have (demonstrated in prototype, mine to practice): HTML structure, basic CSS, form events
- Have not yet learned independently: DOM creation with `createElement`, `addEventListener`, arrays of objects as state, `localStorage`, `JSON.parse/stringify`, event object + `preventDefault()`

## Uncertainties to resolve
- Why `innerHTML = ''` before re-rendering (vs updating one element)?
- What does `.filter()` / `.find()` actually return?
- When does `localStorage` get cleared (vs a database)?

## Relevant files
- Prototype: `task-panel/index.html` (reference version, ~read only)
- Reference app: RPG-SuperAPP `app.js` — `viewQuests()`, `completeQuest()`, `deleteQuest()`, `appState.quests`

## Next step
Rebuild M1 from blank file: heading + description + labeled input + Add button (no JS). Then add the three example tasks as static HTML. Commit each step.