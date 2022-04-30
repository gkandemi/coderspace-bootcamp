const app = Vue.createApp({
    data() {
        return {
            box1Class: false,
            border: false,
            password: "",
            invalid_price: false,
            // inputClass : {
            //     invalid : true
            // }
        }
    },
    methods: {
        onSubmit() {
            if (this.password.length > 0) {
                this.invalid_price = false;
                alert("Başarılı");
            } else {
                this.invalid_price = true;
            }
        }
    },
    computed: {
        inputClasses() {
            // return { invalid: this.price < 18 }
            return {
                // className : condition
                invalid : this.password.length < 6,
                middleStrong : this.password.length >= 6 && this.password.length < 8,
                veryStrong : this.password.length >= 8
            }
        }
    }

}).mount("#app")
