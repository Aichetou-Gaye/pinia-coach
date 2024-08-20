import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import "./assets/css/style.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

import App from './App.vue'
import router from "./router"

app.use(pinia)
app.use(router)
app.mount('#app')
