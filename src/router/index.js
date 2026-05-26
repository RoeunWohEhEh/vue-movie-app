
import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import Homepage from '@/components/Homepage.vue'
import MoviesPage from '@/components/MoviesPage.vue'
import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Homepage,
    },
    {
      path: '/movie',
      component: MoviesPage,
    },
    
    {
      path: '/about',
      component: AboutPage,
    },
    {
      path: '/contact',
      component: ContactPage,
    },
    
  ]
})

export default router