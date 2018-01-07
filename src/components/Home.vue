<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs- center text-sm-">
        <v-btn large router to="/jeux" class="info">Explorer les jeux</v-btn>
      </v-flex>
      <v-flex xs12 sm6  class="text-sx-center text.sm-left">
        <v-btn large router to="/jeux/new" class="info">Créer une fiche de jeu</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel><v-carousel-item
          v-for="jeu in jeux"
          :src="jeu.imageUrl"
          :key="jeu.id">
          <div class:"title">
            {{ jeu.title }}
          </div>
        </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs- center">
      <p>Bienvenue sur VideoJeux.com</p>
      </p>
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default{
    data () {
      return {
        jeux: [
          { imageUrl: 'https://ubistatic19-a.akamaihd.net/resource/fr-fr/game/assassins-creed/ac-origins/ac_news_quests_overview_ncsa_293408.jpg', id: 'asdasdasd123', title: 'Assassins Creed' },
          { imageUrl: 'http://mp1st.com/wp-content/uploads/2017/04/Call-of-Duty-WWII.jpg',id: 'asdsfghjrtewqsdfdg', title: 'COD:World War II' },
        ]
      }
    }
  }
</script>

<style scoped>
  .title{
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
  }
</style>
