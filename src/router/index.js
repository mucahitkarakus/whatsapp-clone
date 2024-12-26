import {createRouter, createWebHistory} from 'vue-router'
import HomeViev from "../views/HomeView.vue"

const routes = [    
    {
        path: '/',
        component: HomeViev
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;