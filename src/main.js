import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import Login from './components/Login.vue'

import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"

const routes = [
    { path: "/login", component: Login},
]

const router = createRouter({
    //Permet a l'utilisateur de revenir a la page precedente
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
