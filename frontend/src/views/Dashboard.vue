<template>
<div class="dashboard">
  <h1>Lista de administradores e seus emails</h1>
  <v-data-table :headers="headers" :items="items" item-key="id" class="elevation-1">
  </v-data-table>
  <v-btn :class="warning" @click="goToBox">Caixa</v-btn>
</div>
</template>

<script>
import api from '../services/api'
export default {
  data () {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Name', align: 'start', value: 'name' },
        { text: 'Email', value: 'email' }
      ],
      items: []
    }
  },
  mounted: function () {
    this.loadData()
  },
  methods: {
    loadData: function () {
      api.get('/admin').then((response) => {
        console.log(response.data)
        this.items = response.data
      })
    },
    goToBox(){
      this.$router.push('/box')
    }
  }

}
</script>

<style>
  h1{
    text-align: center;
  }
</style>
