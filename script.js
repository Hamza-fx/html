function addTask() {
    const input = document.getElementById("taskInput");
    if (input.ariaValueMax.trim()  === "") return;

    const li = document.createElement("li");
    li.textContent = input.ariaValueMax;

    const del = document.createElement("button");
    del.textContent = "X";
    del.onclick = () => li.remove();


    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

