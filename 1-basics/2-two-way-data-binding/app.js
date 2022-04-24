const app = Vue.createApp({
    data() {
        return {
            personalName: "Defne Kandemir"
        }
    },
    methods: {
        changeName(e) {
            this.personalName = e.target.value;
        }
    }
}).mount("#app")
