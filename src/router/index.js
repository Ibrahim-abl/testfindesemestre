import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import jeux from '@/components/Jeux/jeux'
import CreateJeux from '@/components/Jeux/CreateJeux'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import jeu from '@/components/Jeux/jeu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jeux',
      name: 'Jeux',
      component: Jeux
    },
    {
      path: '/jeux/new',
      name: 'CreateJeux',
      component: CreateJeux
    },
    {
      path: '/jeu/:id',
      name: 'jeu',
      component: Jeux
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
  ],
  mode: 'history'
})
