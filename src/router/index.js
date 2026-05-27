import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import MoviesPage from '@/components/MoviesPage.vue'
import Homepage from '@/components/HomePage.vue'
import MovieDetails from '@/components/movieDetails.vue'
import SignInPage from '@/components/SignInPage.vue'
import SignUpPage from '@/components/SignUpPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path:'/',
      name:'home',
      component: Homepage,
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
      component: MovieDetails,
      props: true
    },
    {
      path: '/signin',
      name:'signin',
      component: SignInPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage
    }
  ]
})

export default router