/* ==========================================================
   app.js — behavior. A plain script (no modules, no libraries).

   The pattern every action follows:
       change STATE  →  SAVE it  →  RENDER the screen from it
   The `tasks` array is the single source of truth. The page is
   always redrawn from it, so screen and data cannot disagree.
   ========================================================== */

// 1. STATE ------------------------------------------------
// Each task: { id, title, note, done, priority, dueDate, createdAt }
//   priority: 'high' | 'normal' | 'low'
//   dueDate:  'YYYY-MM-DD' (what <input type="date"> gives us) or ''
let tasks = [];

const STORAGE_KEY = 'workTasks.v1';
const PRIORITY_RANK  = { high: 3, normal: 2, low: 1 };
const PRIORITY_LABEL = { high: 'High', normal: 'Normal', low: 'Low' };

// 2. DOM REFERENCES ---------------------------------------
// Look each element up once, keep it in a variable.
const form          = document.getElementById('add-form');
const titleInput    = document.getElementById('task-title');
const priorityInput = document.getElementById('task-priority');
const dueInput      = document.getElementById('task-due');
const noteInput     = document.getElementById('task-note');
const formError     = document.getElementById('form-error');
const summary       = document.getElementById('summary');

const activeList  = document.getElementById('active-list');
const lowList     = document.getElementById('low-list');
const doneList    = document.getElementById('done-list');

// 3. STORAGE ----------------------------------------------
// localStorage only stores strings, so we convert with JSON.
// Data read back from storage is untrusted (it may be old or
// edited by hand), so normalise() gives every task safe fields.
function normalise(raw) {
  return {
    id: String(raw.id),
    title: String(raw.title),
    note: typeof raw.note === 'string' ? raw.note : '',
    done: Boolean(raw.done),
    priority: PRIORITY_RANK[raw.priority] ? raw.priority : 'normal',
    dueDate: /^\d{4}-\d{2}-\d{2}$/.test(raw.dueDate) ? raw.dueDate : '',
    createdAt: Number(raw.createdAt) || 0
  };
}

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    tasks = Array.isArray(saved)
      ? saved.filter(item => item && item.title).map(normalise)
      : [];
  } catch {
    tasks = [];            // corrupted or blocked storage: start clean
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // Storage full or blocked (e.g. private mode). The app still
    // works for this visit; it just can't remember afterwards.
  }
}

// 4. DATE HELPERS -----------------------------------------
// new Date('2025-03-05') is read as UTC and can land on the
// previous day locally. Building the date from its parts avoids that.
function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function daysUntil(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);                       // midnight today
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((parseLocalDate(dateString) - today) / msPerDay);
}

// Returns the text to show and a CSS state ('late' | 'soon' | '').
function describeDue(dateString) {
  const days = daysUntil(dateString);
  const shortDate = parseLocalDate(dateString)
    .toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

  if (days < 0) {
    const late = -days;
    return { text: 'Overdue by ' + late + (late === 1 ? ' day' : ' days'), state: 'late' };
  }
  if (days === 0) return { text: 'Due today', state: 'soon' };
  if (days === 1) return { text: 'Due tomorrow', state: 'soon' };
  if (days <= 7)  return { text: 'Due in ' + days + ' days', state: 'soon' };
  return { text: 'Due ' + shortDate, state: '' };
}

// 5. SORTING ----------------------------------------------
// Used with Array.sort(): negative = a first, positive = b first.
// Order: priority (high first) → due date (soonest first, none last)
// → newest first.
function compareTasks(a, b) {
  if (a.priority !== b.priority) {
    return PRIORITY_RANK[b.priority] - PRIORITY_RANK[a.priority];
  }
  if (a.dueDate !== b.dueDate) {
    if (a.dueDate === '') return 1;
    if (b.dueDate === '') return -1;
    return a.dueDate < b.dueDate ? -1 : 1;          // ISO dates sort as text
  }
  return b.createdAt - a.createdAt;
}

// 6. RENDER -----------------------------------------------
// Build one <li> for one task. textContent (never innerHTML) puts
// user text on the page as plain text, so typed HTML can't run.
function createTaskItem(task) {
  const item = document.createElement('li');
  item.className = 'task priority-' + task.priority + (task.done ? ' is-done' : '');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'task-' + task.id;
  checkbox.checked = task.done;
  checkbox.addEventListener('change', () => toggleDone(task.id));

  const body = document.createElement('div');
  body.className = 'task-body';

  const title = document.createElement('label');   // click title = toggle
  title.className = 'task-title';
  title.htmlFor = checkbox.id;
  title.textContent = task.title;
  body.append(title);

  if (task.note !== '') {
    const note = document.createElement('p');
    note.className = 'task-note';
    note.textContent = task.note;
    body.append(note);
  }

  const meta = document.createElement('div');
  meta.className = 'task-meta';

  const badge = document.createElement('span');
  badge.className = 'badge badge-' + task.priority;
  badge.textContent = PRIORITY_LABEL[task.priority];
  meta.append(badge);

  if (task.dueDate !== '') {
    const due = describeDue(task.dueDate);
    const dueTag = document.createElement('span');
    // A finished task is no longer urgent, so skip the late/soon color.
    dueTag.className = 'due' + (!task.done && due.state ? ' ' + due.state : '');
    dueTag.textContent = due.text;
    meta.append(dueTag);
  }
  body.append(meta);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';                    // not a form submit button
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = '×';
  deleteButton.setAttribute('aria-label', 'Delete task: ' + task.title);
  deleteButton.addEventListener('click', () => deleteTask(task.id));

  item.append(checkbox, body, deleteButton);
  return item;
}

// Fill one list from an array of tasks. replaceChildren() removes
// everything inside the <ul> and inserts the new <li>s in one step.
function renderList(listElement, name, items) {
  listElement.replaceChildren(...items.map(createTaskItem));
  document.getElementById(name + '-empty').hidden = items.length > 0;
  document.getElementById(name + '-count').textContent = items.length;
}

function render() {
  // .filter() returns a NEW array, so sorting it never reorders `tasks`.
  const active = tasks.filter(t => !t.done && t.priority !== 'low').sort(compareTasks);
  const low    = tasks.filter(t => !t.done && t.priority === 'low').sort(compareTasks);
  const done   = tasks.filter(t => t.done).sort(compareTasks);

  renderList(activeList, 'active', active);
  renderList(lowList, 'low', low);
  renderList(doneList, 'done', done);
  updateSummary();
}

function updateSummary() {
  const open = tasks.filter(t => !t.done).length;
  const overdue = tasks.filter(t => !t.done && t.dueDate !== '' && daysUntil(t.dueDate) < 0).length;

  if (tasks.length === 0) {
    summary.textContent = 'No tasks yet.';
    return;
  }
  let text = open + ' open · ' + (tasks.length - open) + ' done';
  if (overdue > 0) text += ' · ' + overdue + ' overdue';
  summary.textContent = text;
}

// 7. ACTIONS ----------------------------------------------
function addTask(fields) {
  tasks.push({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    title: fields.title,
    note: fields.note,
    done: false,
    priority: fields.priority,
    dueDate: fields.dueDate,
    createdAt: Date.now()
  });
  saveTasks();
  render();
}

function toggleDone(id) {
  const task = tasks.find(t => t.id === id);       // .find() returns the task or undefined
  if (task) task.done = !task.done;
  saveTasks();
  render();
}

function deleteTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task || !confirm('Delete "' + task.title + '"?')) return;
  tasks = tasks.filter(t => t.id !== id);          // keep everyone except this one
  saveTasks();
  render();
}

// 8. FORM -------------------------------------------------
function showError(message) {
  formError.textContent = message;
  formError.hidden = false;
}

function hideError() {
  formError.hidden = true;
}

form.addEventListener('submit', event => {
  event.preventDefault();                  // stop the browser reloading the page

  const title = titleInput.value.trim();   // trim: ignore leading/trailing spaces
  if (title === '') {
    showError('Enter a task title first.');
    titleInput.focus();
    return;
  }

  hideError();
  addTask({
    title: title,
    note: noteInput.value.trim(),
    priority: priorityInput.value,
    dueDate: dueInput.value
  });

  form.reset();                            // clear the fields (priority back to Normal)
  titleInput.focus();                      // ready for the next task
});

titleInput.addEventListener('input', hideError);   // typing clears the error

// 9. STARTUP ----------------------------------------------
loadTasks();
render();
