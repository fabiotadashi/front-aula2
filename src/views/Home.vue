<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col v-for="game in gameList" :key="game.name" cols="3">
           <v-card>
            <router-link :to="{ name:'game', params:{ gameId: game.name } }">            
              <v-img
                :src="game.imageUrl"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
              >
                <v-card-title v-text="game.name"></v-card-title>
              </v-img>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  created() {
    this.$store.dispatch('games/fetchGameList')
  },
  computed: {
    gameList() {
      return this.$store.state.games.gameList.data
    }
  },
  data() {
    return {
      
    }
  }
}
</script>
