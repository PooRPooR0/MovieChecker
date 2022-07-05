import Main from '@/pages/Main'
import AllFilms from '@/pages/AllFilms'
import WatchedFilms from '@/pages/WatchedFilms'
import Wishes from '@/pages/Wishes'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/all-films',
        component: AllFilms,
    },
    {
        path: '/watched',
        component: WatchedFilms
    },
    {
        path: '/wishes',
        component: Wishes
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router