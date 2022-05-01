<template>
  <div class="container">
    <h3 class="text-center mt-3">Axios</h3>
    <div class="row">
      <div class="col-6 offset-3 p-2">
        <input @keydown.enter="newTodo" type="text" class="form-control" placeholder="Type todo and press enter key..">
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 p-2">
        <ul class="list-group">
          <li v-for="todo in todoList" :key="todo.id"
              class="list-group-item d-flex justify-content-between align-items-center">
            <span>{{ todo.title }}</span>
            <button @click="deleteItem(todo)" class="btn btn-sm btn-danger">Sil</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-if="loadingState" class="loading-container">
    <div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style>
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5)
}
</style>

<script>
// import axios from "axios";
import appAxios from "@/adapters/appAxios";

export default {
  data() {
    return {
      todoList: [],
      loadingState: false
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.loadingState = true;
      // axios.get("http://localhost:3000/todos")
      appAxios.get("/todos", {
        headers: {
          restReq: true,
          myCustomHeader: "AppReload"
        }
      })
          .then(({data: todoList}) => {
            this.todoList = todoList
          })
          .catch((e) => console.error(e))
          .finally(() => this.loadingState = false)
    },
    newTodo(e) {
      this.loadingState = true;
      appAxios.post("/todos", {title: e.target.value, completed: false})
          .then(new_todo_response => {
            this.todoList.push(new_todo_response.data)
            e.target.value = null;
          })
          .catch(e => console.error(e))
          .finally(() => this.loadingState = false)
    },
    deleteItem(item) {
      this.loadingState = true;
      appAxios.delete(`/todos/${item.id}`)
          .then(todo_delete_response => {
            if (todo_delete_response.status === 200) {
              this.todoList = this.todoList.filter(todo => todo !== item);
            }
          })
          .catch(e => console.error(e))
          .finally(() => this.loadingState = false)
    }
  }
}
</script>
