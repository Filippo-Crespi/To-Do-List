const createToDo = document.getElementById("create-todo");

let tasks = [];
let id = 0;
const table = document.getElementById("todo-container");

createToDo.addEventListener("click", () => {
  const status = false;
  const description = document.getElementById("todo-desc");
  const time = document.getElementById("todo-due");
  const date = document.getElementById("todo-exp");

  if (description.value == "" || date.value == "" || time.value == "") {
    alert("Fill all the fields");
    return;
  }

  tasks.push({
    id: id,
    status: status,
    description: description.value,
    time: time.value,
    date: date.value,
  });

  id++;
  showToDo();
});

const showToDo = () => {
  table.innerHTML = "";
  for (const task of tasks) {
    if (task == null) {
      continue;
    }
    const toDo = document.createElement("tr");
    toDo.innerHTML = `
  <tr>
    <td><button onclick='updateToDo(${task.id})'>${
      task.status ? "✅" : "❎"
    }</button></td>
    <td>${task.description}</td>
    <td>${task.date}</td>
    <td>${task.time}</td>
    <td><button onclick='deleteToDo(${task.id})'>🗑️</button></td>
  </tr>`;
    table.appendChild(toDo);
  }
};

function deleteToDo(id) {
  tasks.forEach((element, index) => {
    if (element != null && element.id == id) {
      tasks[index] = null;
    }
  });
  showToDo();
}
function updateToDo(id) {
  tasks.forEach((element, index) => {
    if (element != null && element.id == id) {
      tasks[index].status = !tasks[index].status;
    }
  });
  showToDo();
}
