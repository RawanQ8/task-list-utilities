# Task List Utilities

A simple JavaScript utility for managing a list of tasks without changing the original list.

This project is based on the roadmap challenge: https://roadmap.sh/projects/js-task-list-utilities

## What it does

The script includes four helper functions:

- `addTask(tasks, title)` returns a new list with a new incomplete task added, using the next available id.
- `completeTask(tasks, taskId)` returns a new list where the matching task is marked as completed.
- `removeTask(tasks, taskId)` returns a new list without the matching task.
- `countIncompleteTasks(tasks)` returns how many tasks are not completed yet.

None of the functions modify the list passed in. `completeTask` creates a new object for the task it changes, so the original task objects stay untouched.

## Example

```js
const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
const completed = completeTask(withNewTask, 2);

console.log(countIncompleteTasks(completed)); // 1
console.log(countIncompleteTasks(tasks)); // 1 (original list is unchanged)
```

## File

- `task-list-utilities.js` - Contains the task list functions and sample usage.

## Usage

Copy the functions from `task-list-utilities.js` into your JavaScript project or run them in a Node.js environment:

```bash
node task-list-utilities.js
```
