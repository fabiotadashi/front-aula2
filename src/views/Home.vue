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
  data() {
    return {
      gameList: [
        {
          'name':'CS:GO 1',
          'imageUrl':'https://www.techadvisor.co.uk/cmsdata/features/3645914/counter_strike_global_offensive_thumb800.jpg'
        },
        {
          'name':'CS:GO 2',
          'imageUrl':'https://www.techadvisor.co.uk/cmsdata/features/3645914/counter_strike_global_offensive_thumb800.jpg'
        },
        {
          'name':'CS:GO 3',
          'imageUrl':'https://www.techadvisor.co.uk/cmsdata/features/3645914/counter_strike_global_offensive_thumb800.jpg'
        },
        {
          'name':'CS:GO 4',
          'imageUrl':'https://www.techadvisor.co.uk/cmsdata/features/3645914/counter_strike_global_offensive_thumb800.jpg'
        },
        {
          'name':'CS:GO 5',
          'imageUrl':'https://www.techadvisor.co.uk/cmsdata/features/3645914/counter_strike_global_offensive_thumb800.jpg'
        },
        {
          'name':'CS:GO 6',
          'imageUrl':'https://www.techadvisor.co.uk/cmsdata/features/3645914/counter_strike_global_offensive_thumb800.jpg'
        }
      ]
    }
  }
}
</script>
