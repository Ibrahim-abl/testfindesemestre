import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Home from '@/components/Jeux/Jeux'
import Home from '@/components/Jeux/CreateJeux'
import Home from '@/components/User/Profile'
import Home from '@/components/User/Signin'
import Home from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jeux'
      name: 'Jeux'
      components: Jeux
    },
    {
      path: '/jeux/new'
      name: 'CreateJeux'
      components: CreateJeux
    },
    {
      path: '/profile'
      name: 'Profile'
      components: Profile
    },
    {
      path: '/signup'
      name: 'Signup'
      components: Signup
    },
    {
      path: '/signin'
      name: 'Signin'
      components: Signin
    },
  ]
})
