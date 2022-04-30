const addBtn = document.querySelector("#addBtn")
const todoInput = document.querySelector("#todoValue")
const todoList = document.querySelector("#todoList")
const totalCount = document.querySelector("#totalCount")

let todoCount = 0;
addBtn.addEventListener("click", () => {
    // const listItem2 = "<li>" + todoInput.value + "</li>"
    // const listItem = `<li>${todoInput.value}</li>`;
    // todoList.innerHTML += listItem;

    const listItem = document.createElement("li")
    listItem.textContent = todoInput.value;
    todoList.appendChild(listItem);
    todoInput.value = "";
    todoCount++;
    totalCount.textContent = `Total: ${todoCount}`;
})
