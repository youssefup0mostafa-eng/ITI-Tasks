"use Strict"

// let tasks = localStorage.getItem("#addTaskButton");
const inputAddress = document.getElementById("inputAddress");
let addTaskButton  = document.getElementById(`addTaskButton`);
const tasksContainer = document.getElementById("tasksContainer");


let contentContainer = "";
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addTaskButton.addEventListener(`click` , function(){
    tasks.push(inputAddress.value);

    localStorage.setItem("tasks" , JSON.stringify(tasks));
    contentContainer = `
    <div class="tasks d-flex justify-content-between align-items-center py-3 border-bottom">
        
        <span class="fs-4">${inputAddress.value}</span>
        <div class="icons">
            <i class="fa-solid fa-pen-to-square text-warning me-3" onclick="editTask()"></i>
            <i class="fa-solid fa-trash text-danger" onclick="deleteTask()"></i>
        </div>

            </div>

    `
    
    tasksContainer.innerHTML += contentContainer;
    
})
    function editTask() {
    alert("Edit button clicked");
}

function deleteTask() {
    alert("Delete button clicked");
}
