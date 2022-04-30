const app = Vue.createApp({
    data() {
        return {
            title: "Bu Vue Tarafından set edilmiş başlık...",
            message: "lorem ipsum dolor sit amet...",
            todoList: ["yapılacak 1", "yapılacak 2", "yapılacak 3"],
            link: {
                url: "https://www.google.com.tr",
                target: "_blank",
                title: "Google Web Site"
            },
            description: `
                <h3>Bu DB den gelen bir başlık</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt facere fugiat incidunt laboriosam qui quidem suscipit, voluptatibus. Aut consequuntur, deleniti exercitationem neque nobis numquam quibusdam recusandae vero vitae voluptates.</p>
                <img width="100" src='https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg' alt=''>
            `,
            coords: "0, 0",
            personalName : "Defne Kandemir"
        }
    },
    methods: {
        update(fieldName) {
            if (fieldName === "title") this.changeTitle();
            else if (fieldName === "link") this.changeLink();
        },
        changeTitle() {
            this.title = "Bardak";
        },
        changeLink() {
            this.link = {
                url: "https://www.youtube.com/kablosuzkedii",
                target: "_self",
                title: "Gkandemir"
            }
        },
        trackMouse(containerId, {x, y}) {
            console.log(containerId);
            this.coords = `${x}, ${y}`
        },
        containerEnter() {
            console.log("Alana girildi")
        },
        containerOut() {
            console.log("Alandan cikildi")
        }
    },
}).mount("#app")
