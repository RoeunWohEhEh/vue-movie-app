
import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import MoviesPage from '@/components/MoviesPage.vue'
import Homepage from '@/components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MovieDetails from '@/components/movieDetails.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path:'/',
      name:'home',
      component:Homepage,
    },
    {
      path: '/movie',
      name:'movie',
      component: MoviesPage,
    },
    
    {
      path: '/about',
      name:'about',
      component: AboutPage,
    },
    {
      path: '/contact',
      name:'contact',
      component: ContactPage,
    },
    {
      path:'/moviedetail/:id',
      name:'MovieDetails',
      component:MovieDetails,
      props:true
    }

    
  ]
  
})

export default router