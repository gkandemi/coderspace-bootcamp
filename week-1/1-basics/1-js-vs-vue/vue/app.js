// const addBtn = document.querySelector("#addBtn")
// const todoInput = document.querySelector("#todoValue")
// const todoList = document.querySelector("#todoList")
// const totalCount = document.querySelector("#totalCount")
//
// let todoCount = 0;
// addBtn.addEventListener("click", () => {
//     // const listItem2 = "<li>" + todoInput.value + "</li>"
//     // const listItem = `<li>${todoInput.value}</li>`;
//     // todoList.innerHTML += listItem;
//
//     const listItem = document.createElement("li")
//     listItem.textContent = todoInput.value;
//     todoList.appendChild(listItem);
//     todoInput.value = "";
//     todoCount++;
//     totalCount.textContent = `Total: ${todoCount}`;
// })


// Vue2
// const app = new Vue({
//     el: "#app",
//     data: {
//         message: "Hello Vue!"
//     }
// })


//Vue 3
const app = Vue.createApp({
    data() {
        return {
            todoValue: null,
            todoList: []
        }
    },
    methods: {
        addTodo() {
            this.todoList.push(this.todoValue)
            this.todoValue = null;
        }
    }
})

app.mount("#app")
