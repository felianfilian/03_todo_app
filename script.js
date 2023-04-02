let todoItems = [];
let trashItems = [];

// saving and loading

function getTodos(key) {
  todoLoad = localStorage.getItem(key);
  if (todoLoad) {
    todoItems = JSON.parse(todoLoad);
  } else {
    noTodos();
  }
  renderTodos(todoItems, "todo-list", "btn-delete", "löschen");
}

function setTodos(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

// outputs

function noTodos() {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = `
  <div class="todo-item box01">
  No Todos available
  </div>
  `;
}

function renderTodos(todoArray, listElement, btnStyle, btnText) {
  let todoList = document.getElementById(listElement);
  todoList.innerHTML = "";
  if (todoArray.length <= 0) {
    noTodos();
  }

  for (let i = 0; i < todoArray.length; i++) {
    todoList.innerHTML += `
  <div class="todo-item box01">
  ${todoArray[i]}
  <br><br><button class="${btnStyle}" onclick="deleteTodo(${i})">${btnText}</button>
  </div>
  `;
  }
}

function addTodo() {
  let input = document.getElementById("input");
  todoItems.push(input.value);
  setTodos("todoItems", todoItems);
  renderTodos(todoItems, "todo-list", "btn-delete", "löschen");
  input.value = "";
}

function deleteTodo(index) {
  addToTrash(todoItems[index]);
  todoItems.splice(index, 1);
  setTodos("todoItems", todoItems);
  renderTodos(todoItems, "todo-list", "btn-delete", "löschen");
}

// trash section

function getTrash(key) {
  trashItems = JSON.parse(localStorage.getItem(key));
  renderTodos(trashItems, "trash-list", "btn-add", "erneuern");
}

function renewTodo(index) {
  todoItems.push(trashItems[index]);
  setTodos("todoItems", todoItems);
  trashItems.splice(index, 1);
  renderTrash();
}

function addToTrash(item) {
  trashItems.push(item);
  setTodos("trashItems", trashItems);
}
