<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      </div>

      <v-spacer style="font-weight: bold; font-size: 40px">Admin of Parking</v-spacer>

    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  })
}
</script>
