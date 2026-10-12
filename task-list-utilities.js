function addTask(tasks, title) {
    const latestId = Math.max(...tasks.map((task) => task.id), 0)
    let out = [...tasks]
    out.push({
        id: latestId + 1,
        title: title,
        completed: false
    })
    return out
}

function completeTask(tasks, taskId) {
    return tasks.map(task =>
        task.id == taskId ? { ...task, completed: true } : task
    )

}

function removeTask(tasks, taskId) {
    let out = [...tasks]
    out = out.filter(task => task.id !== taskId)
    return out
}

function countIncompleteTasks(tasks) {
    const copy = [...tasks]
   return copy.filter(task => !task.completed).length
}

const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));
const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));
console.log(removeTask(completed, 1).map((task) => task.id));
console.log(completed)
console.log(tasks.length);
console.log(tasks)
console.log(countIncompleteTasks(tasks));