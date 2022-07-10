import { createStore } from "vuex";

export default createStore({
    state: {
        authUserLogin: '',
    },
    getters: {
        isAuth(state) {
            return !!state.authUserLogin && state.authUserLogin !== ''
        }
    },
    mutations: {
        setAuthLogin(state, login) {
            state.authUserLogin = login
        }
    },
})