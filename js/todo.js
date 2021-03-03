const toDoForm  = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList  = document.querySelector(".todo-list");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(e){
    const li = e.currentTarget.parentElement;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function createToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;

    span.innerText= text
    delBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
    delBtn.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

    li.id = newId;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(e){
    e.preventDefault();
    console.log(e);
    const currentValue = toDoInput.value;
    createToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            createToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();