const app = Vue.createApp({
    data() {
        return {
            counter : 0,
            counter2 : 0,
        }
    },
    methods: {
        getName(){
            return "Felakettin Köse"
        },
    },
    computed : {
        oddOrEven(){
            console.log("Counter1 Çalıştı");
            return this.counter % 2 === 0 ? 'Çift' : 'Tek'
        },
        oddOrEven2(){
            console.log("Counter2 Çalıştı");
            return this.counter2 % 2 === 0 ? 'Çift' : 'Tek'
        },
        getStatus(){
            // if(this.counter ){}
            return this.oddOrEven === "Çift" ? "Counter 1 ÇİFT" : "Counter 2 TEK";
        }
    },
    watch : {
        counter(newCounter, oldCounter){
            console.log(`${oldCounter} => ${newCounter}`)
        }
    },
}).mount("#app")
