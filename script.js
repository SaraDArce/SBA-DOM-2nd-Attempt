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

// Event listener for form submission
document
  .getElementById("addTodoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    createTodo(); // Call createTodo function to add new ToDo
    this.reset(); // Reset the form after adding ToDo
  });

document.addEventListener("DOMContentLoaded", function () {
  const todoTemplate = document.getElementById("todo");
  const newTodo = todoTemplate.content.cloneNode(true);

  // Cache elements using selectElementById and querySelector
  const numElement = newTodo.querySelector("#num");
  const taskElement = newTodo.querySelector("#task");
  const subTaskElement = newTodo.querySelector("#sub-task");
  const notesElement = newTodo.querySelector("#notes");

  // Modify cached elements with initial data
  numElement.textContent = "1";
  taskElement.textContent = "Walk the dog";
  subTaskElement.textContent = "Pick up poop";
  notesElement.textContent = "He is a leash puller";

  // Append the initial ToDo to the ToDo list
  const todoList = document.getElementById("todoList");
  todoList.appendChild(newTodo);
});
