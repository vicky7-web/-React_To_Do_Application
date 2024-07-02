let taskList = [];

document.addEventListener("DOMContentLoaded", function() {
    const addTaskForm = document.getElementById("add-task-form");
    const taskInput = document.getElementById("task-input");
    const taskListElement = document.getElementById("task-list");

    addTaskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            taskList.push(task);
            taskInput.value = "";
            renderTaskList();
        }
    });

    taskListElement.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            const taskIndex = event.target.dataset.taskIndex;
            taskList.splice(taskIndex, 1);
            renderTaskList();
        }
    });

    renderTaskList();
});

function renderTaskList() {
    const taskListHTML = taskList.map((task, index) => {
        return `
            <li class="list-group-item">
                ${task}
                <button class="delete-btn" data-task-index="${index}">x</button>
            </li>
        `;
    }).join("");
    document.getElementById("task-list").innerHTML = taskListHTML;

}
