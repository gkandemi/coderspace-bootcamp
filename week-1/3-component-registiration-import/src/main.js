import {createApp} from 'vue'
import App from './App.vue'

// Global Olarak Component Register İşlemi...
// import appCounter from "@/components/appCounter";
// app.component("appCounter", appCounter)

const app = createApp(App)
app.mount('#app')
