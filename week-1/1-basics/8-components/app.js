const app = Vue.createApp()

app.component("counter", {
    data() {
        return {
            counter: 0
        }
    },
    updated() {
        console.log("Updated");
    },
    template: `
        <div class="container">
        <h3>{{ counter }}</h3>
        <div>
            <button @click="counter--">-1</button>
            <button @click="counter++">+1</button>
        </div>
    </div>
    `
})

app.mount("#app");
