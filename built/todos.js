const toDos = document.querySelector(".js-toDos"), toDosForm = toDos.querySelector("form"), toDosInput = toDos.querySelector("input"), toDosBox = document.querySelector(".js-toDosBox"), list = document.createElement("li");
const TODOS_LS = "todos";
const savedToDos = localStorage.getItem(TODOS_LS);
const toDoArray = [];
function handleDelBtn(event) {
    const selectedLi = event.target.parentElement;
    selectedLi.remove();
    toDoArray = toDoArray.filter(function (todo) {
        return todo.order !== parseInt(selectedLi.id);
    });
    saveToDos();
}
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDoArray));
}
function showToDos(toDoObj) {
    const list = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    list.id = toDoObj.order.toString();
    deleteBtn.innerText = "❌";
    span.innerText = toDoObj.todo;
    list.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", handleDelBtn);
    list.appendChild(span);
    toDosBox.appendChild(list);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    // if (toDosInput === "") {
    //   toDosInput.disabled = true;
    // }
    const currentvalue = toDosInput.value;
    const order = toDoArray.length + 1;
    const toDoObj = {
        todo: currentvalue,
        order: order,
    };
    toDoArray.push(toDoObj);
    toDosInput.value = "";
    showToDos(toDoObj);
    saveToDos();
    console.log(toDoObj.todo);
}
if (savedToDos) {
    const parsedToDo = JSON.parse(savedToDos);
    toDoArray = parsedToDo;
    parsedToDo.forEach(showToDos);
}
toDosForm.addEventListener("submit", handleToDoSubmit);
