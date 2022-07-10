import Main from '@/pages/Main'
import AllFilms from '@/pages/AllFilms'
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import store from "@/store/index"
import { createRouter, createWebHistory } from 'vue-router'

function guard(to, from, next) {
    if (!store.getters.isAuth) next('/login')
    else next()
}

function guardAuth(to, from, next) {
    if (store.getters.isAuth) next('/all-films')
    else next()
}

const routes = [
    {
        path: '/',
        component: Main,
        name: 'Main'
    },
    {
        path: '/all-films',
        component: AllFilms,
        beforeEnter: guard,
        name: 'AllFilms'
    },
    {
        path: '/login',
        component: LoginPage,
        beforeEnter: guardAuth,
        name: 'Login'
    },
    {
        path: '/signup',
        component: SignupPage,
        beforeEnter: guardAuth,
        name: 'Signup'
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router