const getform = document.getElementById("form");
const taskInput = document.getElementById("input");
const taskList = document.getElementById("list");

getform.addEventListener("submit", function ( event ) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === ""){
        return;
    }

    const isUrgent = confirm("Is urgent?");

    addTask(taskText, isUrgent);
    input.value = "";
});

function addTask(text, isUrgent){
    const listTask = document.createElement("li");
    listTask.className = "tasks";

    if(isUrgent){
        listTask.classList.add("urg");
    }

    const listSection = document.createElement("div");
    listSection.className = "list_section";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;
    span.className = "text"

    checkbox.addEventListener("change", function(){
        span.classList.toggle("done");
    });

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete";

    del.addEventListener("click", function(){
        taskList.removeChild(listTask);
    });

    listSection.appendChild(checkbox);
    listSection.appendChild(span);

    listTask.appendChild(listSection);
    listTask.appendChild(del);

    if(isUrgent){
        taskList.prepend(listTask);
    }else{
        taskList.appendChild(listTask)
    }
}

