import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head' 
import App from './App.vue'
import { i18n } from './i18n' 

const app = createApp(App)
const head = createHead()

app.use(i18n)
app.use(head) 

app.mount('#app')