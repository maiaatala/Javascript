const form = document.getElementById("task-form");
const taskList = document.getElementById("tasks");

//adding enter as a way to submit a list
document.querySelector("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const inputField = document.getElementById("task-input");
    if (!(inputField.value === "")) {
      addTask(inputField.value);
      form.reset();
    }
  }
});

form.onsubmit = function (e) {
  e.preventDefault();
  const inputField = document.getElementById("task-input");
  // console.log(inputField.value);
  if (!(inputField.value === "")) {
    addTask(inputField.value);
    form.reset();
  }
};

function addTask(description) {
  const taskContainer = document.createElement("div");
  const newTask = document.createElement("input");
  const taskLabel = document.createElement("label");
  const taskDecriptionNode = document.createTextNode(description);

  newTask.setAttribute("type", "checkbox");
  newTask.setAttribute("name", description);
  newTask.setAttribute("id", description);

  taskLabel.setAttribute("for", description);
  taskLabel.appendChild(taskDecriptionNode);

  taskContainer.classList.add("task-item");
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(taskLabel);

  taskList.appendChild(taskContainer);

  console.log(taskContainer);
  // taskLabel.style.paddingLeft = "10px";
}
