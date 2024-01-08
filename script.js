document.querySelector("#addnew").onclick = function () {
  var taskInput = document.querySelector("#newtask input");
  if (taskInput.value.trim() === "") {
    alert("Task Cannot be Empty!!");
  } else {
    var tasksContainer = document.querySelector("#tasks");

    var newTask = document.createElement("div");
    newTask.classList.add("task");

    var taskName = document.createElement("span");
    taskName.id = "taskname";
    taskName.innerText = taskInput.value;

    var completeButton = document.createElement("button");
    completeButton.classList.add("completebtn");
    completeButton.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
    completeButton.onclick = function () {
      newTask.classList.toggle("completed");
    };

    var editButton = document.createElement("button");
    editButton.classList.add("editbtn");
    editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editButton.onclick = function () {
      document.querySelector("#editTask").value = taskName.innerText;
      document.querySelector("#editModal").style.display = "block";
    };

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("deletebtn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.onclick = function () {
      newTask.remove();
    };

    newTask.appendChild(taskName);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    newTask.appendChild(completeButton);

    tasksContainer.appendChild(newTask);

    taskInput.value = "";
  }
};

document.querySelector(".close").onclick = function () {
  document.querySelector("#editModal").style.display = "none";
};

document.querySelector("#saveEdit").onclick = function () {
  var editedTaskName = document.querySelector("#editTask").value;
  document.querySelector("#taskname").innerText = editedTaskName;
  document.querySelector("#editModal").style.display = "none";
};
