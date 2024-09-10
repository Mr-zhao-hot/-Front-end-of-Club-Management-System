import { createApp } from 'vue'
import App from './App.vue'
import router from './router/inedx.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
import store from './store'
import VueCookies from 'vue3-cookies'

 
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(VueCookies)
app.mount('#app')



