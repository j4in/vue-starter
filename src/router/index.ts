import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'

import DefaultLayout from '../layout/DefaultLayout.vue'
import SimpleLayout from '../layout/SimpleLayout.vue'

const routes = [
  {
    path:'/login',
    component: SimpleLayout,
    children: [
      { path: '', name: 'login', component: Login },
    ]
  },
  {
    path: '/', component: DefaultLayout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'about', name: 'about', component: About }
    ]
  },

]

export default createRouter({
  history: createWebHistory(),
  routes
})