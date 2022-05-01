import { createApp } from 'vue'
import App from './App.vue'
import helperMixins from "@/mixins/helperMixins";


const app = createApp(App)
app.mixin(helperMixins)
app.mount('#app')
