import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// eslint-disable-next-line no-unused-vars
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta:{
      requiresGuest: false
    }
  },
  {
    path: '/registerCompany',
    name: 'RegisterCompany',
    component: () => import('../views/RegisterCompany.vue'),
    meta:{
      requiresGuest: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/vqtest',
    name: 'Vqtest',
    component: () => import('../views/VQTest.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/feedBackTest',
    name: 'feedBackTest',
    component: () => import('../views/FeedBackTest.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/stavoviZaposlenih',
    name: 'stavoviZaposlenih',
    component: () => import('../views/StavoviZaposlenih.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/testLicnosti',
    name: 'TestLicnosti',
    component: () => import('../views/TestLicnosti.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: () => import('../views/TestAdministration.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/results',
    name: 'AdminPage',
    component: () => import('../views/TestResults.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/ksusluge',
    name: 'KSUsluge',
    component: () => import('../views/KSUsluge.vue'),
  },
  {
    path: '/executiveSearch',
    name: 'ExecutiveSearch',
    component: () => import('../views/ksUsluge/ExecutiveSearch.vue'),
  },
  {
    path: '/outsourcehr',
    name: 'OutsourceHR',
    component: () => import('../views/ksUsluge/OutsourceHR.vue'),
  },
  {
    path: '/uvodjenjeHRfunkcije',
    name: 'UvodjenjeHRfunkcije',
    component: () => import('../views/ksUsluge/UvodjenjeHRfunkcije.vue'),
  },
  {
    path: '/businesscoaching',
    name: 'BusinessCoaching',
    component: () => import('../views/ksUsluge/BusinessCoaching.vue'),
  },
  {
    path: '/analizaorganizacionogmodela',
    name: 'AnalizaOrganizacionogModela',
    component: () => import('../views/ksUsluge/AnalizaOrganizacionogModela.vue'),
  },
  {
    path: '/performanceMenagement',
    name: 'PerformanceMenagement',
    component: () => import('../views/ksUsluge/PerformanceMenagement.vue'),
  },
  {
    path: '/talentMenagement',
    name: 'TalentMenagement',
    component: () => import('../views/ksUsluge/TalentMenagement.vue'),
  },
  {
    path: '/hrProfessionalProgram',
    name: 'HRProfessionalProgram',
    component: () => import('../views/ksUsluge/HRProfessionalProgram.vue'),
  },
  {
    path: '/assessmentProcenaTimova',
    name: 'AssessmentProcenaTimova',
    component: () => import('../views/ksUsluge/AssessmentProcenaTimova.vue'),
  },
  {
    path: '/procena360',
    name: 'Procena360',
    component: () => import('../views/ksUsluge/Procena360.vue'),
  },
  {
    path: '/istrazivanjeStavovaZaposlenih',
    name: 'IstrazivanjeStavovaZaposlenih',
    component: () => import('../views/ksUsluge/IstrazivanjeStavovaZaposlenih.vue'),
  },
  {
    path: '/kskandidati',
    name: 'KSKandidati',
    component: () => import('../views/KSKandidati.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
      // Redirect to the login page
      next('/login');
    }else{
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn){
      // Redirect to the login page
      next('/profile');
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
