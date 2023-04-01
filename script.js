let todoList = document.getElementById("todo-list");

todoList.innerHTML = "";

function addTodo() {
  let input = document.getElementById("input");
  todoList.innerHTML += `
  <div class="todo-item box01">
  ${input.value}
  <br><br><button class="btn-delete">löschen</button>
  </div>
  `;
  input.value = "";
}
