

let tasks = {
    todo: [],
    doing: [],
    done: []
};

let editingTask = null;
let editingCategory = null;

function addTask(category) {
    const taskText = prompt("Enter task:");
    if (taskText) {
        tasks[category].push(taskText);
        displayTasks();
    }
}

function displayTasks() {

    document.getElementById("todoList").innerHTML = "";
    document.getElementById("doingList").innerHTML = "";
    document.getElementById("doneList").innerHTML = "";

    ["todo", "doing", "done"].forEach(category => {
        const list = document.getElementById(category + "List");
        tasks[category].forEach((task, index) => {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.innerHTML = `
                <span>${task}</span>
                <div>
                    <button onclick="editTask('${category}', ${index})">Edit</button>
                    <button onclick="deleteTask('${category}', ${index})">Delete</button>
                    <button onclick="moveTask('${category}', ${index}, 'next')">→</button>
                    <button onclick="moveTask('${category}', ${index}, 'previous')">←</button>
                </div>
            `;
            list.appendChild(taskElement);
        });
    });
}

function editTask(category, index) {
    editingTask = index;
    editingCategory = category;
    document.getElementById("editTaskInput").value = tasks[category][index];
    document.getElementById("editModal").classList.remove("hidden");
}

function saveTask() {
    const updatedTask = document.getElementById("editTaskInput").value;
    if (updatedTask) {
        tasks[editingCategory][editingTask] = updatedTask;
        closeModal();
        displayTasks();
    }
}

function deleteTask(category, index) {
    tasks[category].splice(index, 1);
    displayTasks();
}

function moveTask(category, index, direction) {
    const task = tasks[category][index];
    let targetCategory;

    if (direction === "next") {
        if (category === "todo") targetCategory = "doing";
        else if (category === "doing") targetCategory = "done";
    } else if (direction === "previous") {
        if (category === "doing") targetCategory = "todo";
        else if (category === "done") targetCategory = "doing";
    }

    if (targetCategory) {
        tasks[category].splice(index, 1);
        tasks[targetCategory].push(task);
        displayTasks();
    }
}

function closeModal() {
    document.getElementById("editModal").classList.add("hidden");
    editingTask = null;
    editingCategory = null;
}


displayTasks();