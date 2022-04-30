import {createApp} from 'vue'
import App from './App.vue'
import appHeader from "@/components/shared/appHeader";
import appFooter from "@/components/shared/appFooter";

const app = createApp(App)
app.component("appHeader", appHeader);
app.component("appFooter", appFooter);
app.mount('#app')
