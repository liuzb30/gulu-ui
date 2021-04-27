import './index.scss'
import './lib/gulu.scss'
import 'github-markdown-css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './lib/svg.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
