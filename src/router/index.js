import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import jeux from '@/components/Jeux/jeux'
import CreateJeux from '@/components/Jeux/CreateJeux'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

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
      components: Jeux
    },
    {
      path: '/jeux/new',
      name: 'CreateJeux',
      components: CreateJeux
    },
    {
      path: '/profile',
      name: 'Profile',
      components: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      components: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      components: Signin
    },
  ],
  mode: 'history'
})
