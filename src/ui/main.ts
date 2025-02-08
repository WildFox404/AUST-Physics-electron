import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueLatex from 'vatex'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(VueLatex)
app.use(pinia)
app.mount('#app')
