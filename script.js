function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") return;

  let list = document.getElementById("taskList");
  let li = document.createElement("li");
  li.innerHTML = task + ' <button onclick="removeTask(this)">Delete</button>';
  list.appendChild(li);

  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}