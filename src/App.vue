<template>
  <v-app >
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon> {{item.icon}} </v-icon>
          </v-list-tile-action>
          <v-list-tile-content> {{item.title}} </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
       class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Vidéojeux.com</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title">
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
          {icon:'home', title:'Accueil' },
          {icon:'room', title:'jsp encore' },
          {icon:'person', title:'profile' },
          {icon:'face', title:'inscription' },
          {icon:'lock_open', title:'Se connecter' },
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
