let todoList = document.getElementById("todo-list");

todoList.innerHTML = "";

function addTodo() {
  todoList.innerHTML += `
  <div class="todo-item box01">
  My Todo
  <br><br><button class="btn-delete">löschen</button>
  </div>
  `;
}
