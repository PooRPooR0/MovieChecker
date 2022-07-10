import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import components from "@/components/UI/index"
import store from '@/store'
import router from '@/router/router'

const app = createApp(App)

components.forEach(comp => {
    app.component(comp.name, comp)
})

app
    .use(store)
    .use(router)
    .mount('#app')