import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import '@fortawesome/fontawesome-free/css/all.min.css'


const app = createApp(App)


app.use(router)

app.mount('#app')
