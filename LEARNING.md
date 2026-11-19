# Learning progress

## Goal and approach

Independently build a polished, accessible work-task tracker, using the working
prototype as a behavioral and visual reference. A text-snippet library may come
later.

Current approach: build useful parts of the real product while learning the
relevant concepts. Use Odin Foundations as a supplementary roadmap and briefly
cover important concepts even if they don't enter the tracker.

Teaching and permission rules: see `AGENTS.md`.
Reference notes: see `CHEATSHEET.md`.

## Current milestone

**M1: static task panel**, followed later by JavaScript behavior and browser
persistence.

- [x] Wrote an HTML document with headings and description.
- [x] Added a labeled task-title input and Add button.
- [x] Added three example tasks with native checkboxes and labels.
- [x] Confirmed task-label clicks toggle checkboxes.
- [x] Confirmed keyboard focus was visible with browser defaults.
- [x] Observed that checkbox changes don't survive refresh.
- [x] Linked an external stylesheet and added initial practice styling.
- [ ] Develop the polished layout, styling, and intentional focus treatment.
- [ ] Review the finished static milestone and commit it.
- [ ] Later: add task actions, rendering, persistence, and status feedback.

Existing browser focus indicators are a starting point, not a substitute for
testing the final design.

## Current project state

The latest published `learning` branch inspected during handoff contains:
- `index.html`: static structure, form, and checkbox task list.
- `styles.css`: practice selectors, colors, font, and body padding.
- `LEARNING.md`: the prior progress note.

The HTML has `class="description highlight"` and the stylesheet has
`.description.highlight { font-style: italic; }`. This was the last chaining
exercise; whether the learner tested that exact version is unconfirmed.

Local changes or a later commit may differ. Check the current branch, working
tree, and files before making decisions. The colors and experimental classes
are not necessarily final product decisions.

## Demonstrated and practiced

### HTML
- Document structure, doctype, language, metadata, title, body, and nesting.
- Headings, paragraphs, unordered lists, list items, forms, text inputs,
  buttons, checkbox inputs, and associated labels.
- Separate practice with anchors, images, and relative paths. Full exercise
  feedback was not available during handoff.

### CSS
- Linked an external stylesheet and fixed a filename mismatch.
- Wrote declarations with named colors, RGB colors, fonts, and padding.
- Practiced universal, type, class, ID, grouped, chained, and descendant
  selectors.
- Confirmed a class selector applied italic styling.
- Practiced chaining a type and class; attempted chaining two classes.
- Tested `font-family` using a temporary monospace value.

### Workflow
- Uses Windows, Chrome, VS Code, and Git.
- Familiar with committing, pushing, and pulling; wants more confidence with
  terminal navigation and choosing commands.
- Works on a home PC and work laptop using different GitHub accounts.

## To review or clarify

- Difference between grouping with a comma, chaining without a space, and a
  descendant selector with a space.
- Difference between selecting a checkbox by ID and styling its associated
  label; when properties inherit.
- Cascade and specificity, browser defaults, and Chrome DevTools inspection.
- SVG/JPG/PNG exercise feedback: original question was not available.
- Whether Odin's Recipes project or earlier optional exercises were completed.
- Full Intro to CSS properties, internal/inline CSS, and Odin's exercises were
  not all independently demonstrated. See `CHEATSHEET.md` for reference only.

## Later learning, not yet demonstrated independently

- JavaScript state, objects and arrays, DOM creation and events.
- `preventDefault()`, `.find()`, `.filter()`, and rendering the UI from state.
- `localStorage`, `JSON.parse()` and `JSON.stringify()`.
- The prototype's state → save → render pattern and its limitations.
- Why clear and rebuild a list versus update only the changed element.
- Local storage lifetime versus a database.
- Semantic regions, accessible status updates, and final focus styling.

## Reference and safety

- Read-only prototype: `index.html` on the repository's `main` branch.
- Learning work: `learning` branch; verify before editing.
- Larger behavioral reference: RPG-SuperAPP, Quest Board section. Inspect the
  relevant source before making claims or using it as an exercise.
- Never connect this learning project to production data.
- The repository is public: use synthetic task examples and no secrets.

## Next action

1. Confirm the current local branch and working tree.
2. Review the current tracker and the learner's preferred next product change.
3. Briefly recap any relevant Intro to CSS concepts not yet covered.
4. Help the learner implement one real styling improvement themselves; review
   and test it. Treat the `highlight` experiment as removable only with the
   learner's approval.
5. Update this file and `CHEATSHEET.md` at the next agreed checkpoint.

## Checkpoint log

- Initial HTML panel and native-control behavior built and tested.
- External CSS linked; practiced selectors and basic styling.
- Teaching approach revised: product-first learning with concise Odin
  walkthroughs, not a long sequence of isolated syntax drills.

Add short, dated entries at meaningful checkpoints. Do not invent dates,
commit IDs, completed lessons, or tests.
