const app = Vue.createApp({
    data() {
        return {
            // fruitList: ["Elma", "Armut", "Kiraz"],
            fruitList: [{ id : 1, text : "Elma"}, { id : 2, text : "Çay"}, { id : 3, text : "Karpuz"}],
            todoValue: null
        }
    },
    methods: {
        addNewTodo() {
            this.fruitList.push({
                text : this.todoValue,
                id : new Date().getTime()
            });
            this.todoValue = null;
        },
        press(e){
            console.log(e)
            if(e.keyCode === 13) this.addNewTodo();
        },
        deleteItem(item) {
            console.log(item);
             this.fruitList = this.fruitList.filter(fruit => fruit !== item)
            // this.fruitList.splice(itemIndex, 1);
        }
    },
    computed : {
        totalCount(){
            return `${this.fruitList.length} adet kayıt vardır`
        }
    }
})
app.mount("#app")
