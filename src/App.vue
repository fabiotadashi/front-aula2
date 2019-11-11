<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-btn text to="/">
        <span>FIAP</span>    
        <span class="font-weight-light">Jogos</span>    
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon to="add-game">
        <v-icon>mdi-xbox-controller</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
