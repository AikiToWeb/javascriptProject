let task_input = document.getElementById("task_input");
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);
let taskList = [];
let taskBoard = (document.getElementById("taskBoard").innerHTML = resultHTML);

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: task_input.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="task_done">${taskList[i].taskContent}</div>
        <div>
          <button onClick="toggleComplete('${taskList[i].id}')">CHECK</button>
          <button onClick="deleteTask('${taskList[i].id}')">DELETE</button>
        </div>
      </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <button onClick="toggleComplete('${taskList[i].id}')">CHECK</button>
          <button onClick="deleteTask('${taskList[i].id}')">DELETE</button>
        </div>
      </div>`;
    }
  }
  document.getElementById("taskBoard").innerHTML = resultHTML;
}

function toggleComplete(id) {
  console.log("id : " + id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete; // true이면 false 넣고, false면 true 넣고
      break;
    }
  }
  render();
  console.log(taskList);
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function deleteTask(id) {
  console.log("삭제", id);

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
  console.log(taskList);
}
