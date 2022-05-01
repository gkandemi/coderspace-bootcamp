import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import helperMixin from "@/mixins/helperMixin";

const app = createApp(App)
app.mixin(helperMixin)
app.use(router)
app.mount('#app')
