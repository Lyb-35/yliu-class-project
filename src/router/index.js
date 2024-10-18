import AddBookView from '@/views/AddBookView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import ResearcherAreaView from '@/views/ResearcherAreaView.vue'
import ResearchPaperView from '@/views/ResearchPaperView.vue'
import ResearchView from '@/views/ResearchView.vue'
import WeatherView from '@/views/WeatherView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/RegistrationView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/access-denied',
    name: 'access-denied',
    component: AccessDeniedView
  },
  {
    path: '/research',
    name: 'research',
    component: ResearchView
  },
  {
    path: '/article/:id',
    name: 'researchpaper',
    component: ResearchPaperView
  },
  {
    path: '/researcher-area',
    name: 'researcher-area',
    component: ResearcherAreaView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/access-denied')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
