import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/app.css";
import appAxios from "@/axios/appAxios";
import helperMixin from "@/mixins/helperMixin";
import { quillEditor } from "vue3-quill";
import AppAlert from "@/components/AppShared/AppAlert";
const app = createApp(App)
// app.component("AppHeader", AppHeader)
app.config.globalProperties.$appAxios = appAxios;
app.component("AppAlert", AppAlert)
app.mixin(helperMixin)
app.use(store)
app.use(router)
app.use(quillEditor)
app.mount('#app')
