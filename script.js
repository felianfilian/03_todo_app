let todoList = document.getElementById("todo-list");
let trashList = document.getElementById("todo-list");

let todoItems = [];
let trashItems = [];

todoList.innerHTML = "";

function addTodo() {
  let input = document.getElementById("input");
  todoItems.push(input);
  todoList.innerHTML += `
  <div class="todo-item box01">
  ${input.value}
  <br><br><button class="btn-delete">löschen</button>
  </div>
  `;
  input.value = "";
}

// trash section

function renewTodo() {}

function showTrash() {
  let input = document.getElementById("input");
  todoList.innerHTML += `
  <div class="todo-item box01">
  ${input.value}
  <br><br><button class="btn-renew">löschen</button>
  </div>
  `;
}
