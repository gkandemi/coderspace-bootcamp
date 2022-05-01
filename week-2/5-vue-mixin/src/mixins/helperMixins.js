export default {
    data() {
        return {
            page_size: 25,
            page: 1
        }
    },
    methods: {
        getCurrencyFormat(number) {
            const currencySettings = new Intl.NumberFormat(navigator.language, {style: "currency", currency: "TRY"})
            return currencySettings.format(number || 0)
        },
        getNumberFormat(number){
            const numberSettings = new Intl.NumberFormat(navigator.language,  { maximumFractionDigits : 3})
            return numberSettings.format(number || 0)
        }
    },
    computed: {},
    watch: {
        totalAmount(newValue, oldValue) {
            console.log(`${oldValue} => ${newValue}`)
        }
    },
    mounted(){
        console.log("Mixin");
    }
}
