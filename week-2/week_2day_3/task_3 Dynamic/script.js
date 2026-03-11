
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");


function createTaskElement(taskText){
    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    return li;
}

function addTask(){
    const taskText = input.value.trim();

    if(taskText === "") return;

    const taskItem = createTaskElement(taskText);
    list.appendChild(taskItem);

    input.value = "";
}

function handleListClick(e){

    const target = e.target;
    const li = target.closest("li");

    if(!li) return;


    if(target.classList.contains("delete-btn")){
        li.remove();
    }

    if(target.classList.contains("complete-btn")){
        li.classList.toggle("completed");
    }
}

addBtn.addEventListener("click", addTask);
list.addEventListener("click", handleListClick);

input.addEventListener("keypress", function(e){
    if(e.key === "Enter") addTask();
});