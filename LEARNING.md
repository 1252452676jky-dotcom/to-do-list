# LEARNING.md

## Goal
Learn programming through The Odin Project while independently building a
polished work-task tracker. A reusable text-snippet library and additional
technologies may come later.

Follow Odin's lessons and concepts in their designed order. Add supplementary
material when it fits the current lesson or the project's needs. Practice code
may be revised as the project improves.

## Current milestone
M1 — Static task panel. The working prototype is an end goal and reference,
not evidence that I independently understand all its concepts.

- [x] Built HTML structure, task-title form, and three labeled checkbox tasks.
- [x] Tested label clicks, keyboard focus, and checkbox behavior after refresh.
- [x] Linked an external stylesheet and practiced initial CSS rules.
- [ ] Finish learning and applying basic CSS.
- [ ] Add deliberate, visible keyboard-focus styling.
- [ ] Review and commit the completed static milestone.
- [ ] Later: independently add JavaScript behavior and persistence.

## Odin progress
- HTML: practiced document structure, headings, paragraphs, lists, links,
  images, forms, and labels. Review exercise completion where uncertain.
- CSS Foundations: **Intro to CSS in progress**, not completed.
  - Practiced: external CSS, type/class/ID selectors, grouping, and a
    descendant selector.
  - Still to cover in lesson order: missed Intro to CSS concepts, including
    the universal selector and chaining, properties and CSS placement methods,
    then Odin's assigned exercises.
- Next lessons: The Cascade, Inspecting HTML and CSS, then The Box Model.
- Padding was previewed early; the Box Model lesson still needs full coverage.
- Project: Recipes and any other earlier Odin requirements should be checked
  separately; the tracker does not automatically replace them.

## Practiced and to review
- Practiced: HTML nesting; labels associated with inputs; CSS declarations;
  font-family and fallback; browser testing; debugging a stylesheet filename.
- Review: selector differences, inheritance and the cascade, and which element
  a label's `for` attribute actually connects to.
- Links and images were practiced separately. The SVG/JPG/PNG exercise question
  and its feedback are not yet available in this chat.

## Prototype concepts for later
- JavaScript state, DOM rendering, and localStorage: state → save → render.
- `createElement`, `addEventListener`, arrays of objects,
  `JSON.parse`/`JSON.stringify`, and `preventDefault()`.
- Accessibility: semantic regions, focus styling, accessible button names,
  and live status updates.

## Questions for later
- Why clear the list before re-rendering instead of updating one element?
- What do `.filter()` and `.find()` return?
- When can localStorage be cleared, and how is it different from a database?

## Files and workflow
- Scratch project: `index.html` and `styles.css` on the `learning` branch.
- Prototype: supplied single-file working reference; treat it as read-only.
- Larger reference: RPG-SuperAPP `app.js`, Quest Board section.
- Use synthetic task data. Review staged changes before committing; the
  repository already exists, so no new `git init` is needed.

## Next step
Resume Intro to CSS in Odin's order, starting with missed selector concepts.
Then complete its exercises before moving to The Cascade.
