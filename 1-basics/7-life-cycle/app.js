const app = Vue.createApp({
    data() {
        return {
            counter : 0,
            isLoaded : false,
            countries : []
        }
    },
    methods: {},
    computed : {},
    watch : {},
    // Creation
    beforeCreate() {
        console.log("Before Create")
    },
    created() {
        console.log("Create")
    },
    // Mount
    beforeMount() {
        console.log("beforeMount")

    },
    mounted() {
        console.log("mounted")
        setTimeout(() => {
            this.countries = ["Türkiye", "Canada", "Costa Rica", "Meksika"];
            this.isLoaded = true;
        }, 2000)
    },
    // Update
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    },
    // Unmount
    beforeUnmount() {
        console.log("beforeUnmount")
    },
    unmounted() {
        console.log("unmounted")
    }
})

app.mount("#app");

// setTimeout(() => app.unmount(), 3000)
