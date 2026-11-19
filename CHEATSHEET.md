# Learning cheat sheet

This is a reference, not a checklist of mastered skills. See `LEARNING.md` for
what I have actually practiced and what still needs review.

## Web and development basics

- **Internet:** the network infrastructure connecting devices.
- **Web:** a service built on the internet; browsers retrieve and display
  web resources.
- **Client:** software or a device requesting a resource, such as a browser.
- **Server:** software or a computer providing resources or responding to
  requests.
- **DNS:** helps resolve domain names to IP addresses.
- **Browser:** displays web pages. A search engine helps find them.
- A local HTML file can be opened directly without first hosting it on a server.

### Roles of the languages

- **HTML:** structures content and gives it meaning.
- **CSS:** controls presentation, including color, typography, and layout.
- **JavaScript:** adds custom behavior and application logic.
- HTML controls have some native behavior even without JavaScript.

## HTML foundations

### Tags, elements, and attributes

- `<p>` is an opening tag; `</p>` is a closing tag.
- `<p>Hello</p>` is a complete paragraph element.
- Elements can be nested: an element inside another is its descendant.
- An **attribute** adds information to an opening tag, such as
  `class="description"` or `lang="en"`.
- A **void element**, such as `<input>`, `<img>`, `<meta>`, or `<link>`,
  has no closing tag.
- Browsers may recover from some missing tags, but correct, clear markup is
  easier to understand and maintain.

### Document structure

- `<!DOCTYPE html>` tells the browser to use modern HTML rendering.
- `<html lang="en">` contains the document and identifies its language.
- `<head>` contains metadata, such as character encoding and the page title.
- `<meta charset="UTF-8">` declares the text encoding.
- The viewport meta tag helps pages size appropriately on mobile screens.
- `<title>` supplies the document title, commonly shown in the browser tab.
- `<body>` contains the visible page content.
- `index.html` is commonly used as a website's main entry file.

### Meaningful content

- `<h1>` is a top-level heading; `<h2>` introduces a section beneath it.
- `<p>` is a paragraph.
- `<ul>` is an unordered list; `<ol>` is an ordered list.
- `<li>` is an item inside a list.
- `<div>` is a generic container. Prefer a meaningful element when one fits.
- `<strong>` indicates strong importance; `<em>` indicates emphasis.
- HTML comments use `<!-- comment -->`.

### Forms and accessibility

- `<form>` groups controls and can submit; Enter can trigger submission.
- `<input type="text">` creates a text field.
- `<input type="checkbox">` creates a native checkbox.
- `<button type="submit">` is a submit button.
- `<label for="task-title">` connects to an input with
  `id="task-title"`. Clicking the label focuses or activates its control.
- IDs should be unique in a document. The label is a separate element from the
  input, even though `for` and `id` associate them.
- A placeholder is not a replacement for a label.
- Native controls work with keyboard interaction, but final focus appearance
  and accessible names still need testing.
- A static form does not automatically create tasks or save them. Without
  custom handling, submission may navigate or reload the page.

### Links, images, and paths

- `<a href="...">Text</a>` creates a link.
- `href` identifies a destination; `target="_blank"` opens a new browsing
  context. `rel="noopener noreferrer"` can be used with such links.
- `<img src="..." alt="...">` embeds an image. `alt` should communicate the
  image's purpose; decorative images can use empty alt text when appropriate.
- `./images/logo.png` is relative to the current file's folder.
- `../images/logo.png` goes up one folder, then into `images`.
- HTML `width` and `height` attributes provide image dimensions and help the
  browser reserve space.
- **SVG:** vector graphics, useful for scalable logos and icons.
- **JPG/JPEG:** commonly used for photographs.
- **PNG:** useful for images needing lossless compression or transparency.
- **GIF:** supports simple animation and a limited color palette.
- The image-format exercise question from the prior chat still needs review.

## CSS: Intro to CSS reference

Source:
https://www.theodinproject.com/lessons/foundations-intro-to-css

### CSS rules

`p { color: navy; }` means:
- `p`: selector, matching paragraph elements.
- `color`: property.
- `navy`: value.
- `color: navy;`: declaration.
- Braces contain the declarations belonging to the rule.

Comments use `/* comment */`.

### Ways to add CSS

1. **External:** put rules in a `.css` file and link it from the HTML head:
   `<link rel="stylesheet" href="styles.css">`.
   The path must point to the actual file.
2. **Internal:** put rules inside `<style>` in the document's `<head>`.
3. **Inline:** put declarations in an element's `style` attribute.
   Inline styles can become repetitive and harder to maintain.

The learning project currently uses external CSS. The prototype uses internal
CSS. Either organization can work; decide deliberately before changing it.

### Selectors

- `*` — every element.
- `p` — every paragraph element.
- `.description` — elements with class `description`.
- `#task-title` — the element with ID `task-title`.
- `#task-title, button` — the input AND all buttons, as separate selections.
- `p.description` — one element that is a paragraph AND has that class.
- `.description.highlight` — one element with BOTH classes.
- `.description#intro` — one element with that class AND that ID.
- `ul label` — labels anywhere inside a `ul`; the space means descendant.
- `p .description` — a descendant with that class inside a paragraph,
  not the paragraph itself.

A single element can have multiple space-separated classes:
`class="description highlight"`. Use one `class` attribute per element.

Class and ID selector names are case-sensitive in normal HTML/CSS usage.
Avoid starting them with digits for simple unescaped selectors; CSS escaping
exists but is beyond this starting reference.

### Common properties

- `color`: text color.
- `background-color`: element background.
- Colors can use names, hexadecimal values such as `#2f55d4`, RGB, or HSL.
  Some forms support alpha transparency.
- `font-family`: preferred fonts followed by fallbacks, for example
  `system-ui, sans-serif`.
- `font-size`: text size, for example `16px`.
- `font-weight`: text weight, for example `bold` or `700`.
- `font-style`: style such as `italic`.
- `text-align`: horizontal text alignment, such as `center`.
- `width` and `height`: dimensions. For an image, setting one dimension and
  the other to `auto` can preserve its aspect ratio.

### Inheritance and early box-model preview

- Some properties, such as font and color, can be inherited from a parent.
- `inherit` explicitly requests the parent's computed value for a property.
- A rule applying directly to a label can give it a different color from its
  parent list item.
- `padding` is space inside an element's border; `margin` is outside it.
- Browsers supply default styles. Cascade, specificity, and the complete box
  model need their own later walkthroughs.

### Odin exercises

Odin lists exercises for CSS methods, class/ID selectors, grouping, chaining,
and the descendant combinator. We may use a brief review or selected exercises
when useful, but completing them has not been established.
https://github.com/TheOdinProject/css-exercises/tree/main/foundations/intro-to-css

## Git and debugging

- **Git** records project history locally; **GitHub** hosts remote repositories.
- Editor save ≠ Git commit ≠ push.
- A commit records a snapshot of staged changes; push sends commits to a remote.
- `git add .` can stage multiple changes under the current directory, including
  files not intended for a commit. Review the staged diff.
- `learning` is the intended learning branch; check before working.
- For unexpected output: confirm files are saved, refresh, inspect paths and
  filenames, then use browser tools and evidence rather than guessing.
- Later, learn Chrome DevTools to inspect elements and applied CSS.

## Parking lot

Not yet independently learned: JavaScript state, DOM creation and events,
rendering, `.find()`, `.filter()`, localStorage, JSON, and `preventDefault()`.
Add explanations as those topics are actually introduced.
