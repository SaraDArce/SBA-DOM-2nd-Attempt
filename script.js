// Function to create a new ToDo
function createTodo() {
  const userInput = {
    task: document.getElementById("taskInput").value,
    subtask: document.getElementById("subTaskInput").value,
    notes: document.getElementById("notesInput").value,
  };
}

const template = document.getElementById("todo");
const newTodo = template.content.cloneNode(true);

// Update the content of the new ToDo
newTodo.querySelector("#task").textContent = userInput.task;
newTodo.querySelector("#sub-task").textContent = userInput.subtask;
newTodo.querySelector("#notes").textContent = userInput.notes;

// Append the new ToDo to the ToDo list
const todoList = document.getElementById("todoList");
todoList.appendChild(newTodo);
