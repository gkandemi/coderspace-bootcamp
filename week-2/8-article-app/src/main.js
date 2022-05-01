import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import appAxios from "@/adapters/appAxios";
import "@/assets/app.css";

const app = createApp(App)

app.config.globalProperties.$appAxios = appAxios;
app.use(router)
app.mount('#app')
