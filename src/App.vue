<template>
  <v-app >
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link">
          <v-list-tile-action>
            <v-icon> {{item.icon}} </v-icon>
          </v-list-tile-action>
          <v-list-tile-content> {{item.title}} </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
       class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cusror: pointer">Vidéojeux.com</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to"item.link">
          <v-icon left> {{item.icon}} </v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon:'home', title:'Accueil', link: '/' },
          {icon:'room', title:'jsp encore' },
          {icon:'person', title:'profile', link: '/profile' },
          {icon:'face', title:'inscription', link: '/signup' },
          {icon:'lock_open', title:'Se connecter', link: '/signin' },
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
