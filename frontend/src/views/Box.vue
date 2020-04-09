<template>
  <div class="box">
    <h1>Box</h1>
    <vue-apex-charts width="500" label="labels" :options="chartOptions" :series="series"></vue-apex-charts>
    <v-row justify="space-around">
      <v-btn color="primary" @click="goToAdmins">Admins</v-btn>
      <v-btn color="error" @click="goToSaida">Saídas</v-btn>
    </v-row>
  </div>
</template>

<script>
import api from '../services/api'
import VueApexCharts from 'vue-apexcharts'
export default {
  data () {
    return {
      series: [1, 2],
      chartOptions: {
        chart: {
          width: 500,
          type: 'pie'
        },
        labels: ['Saída', 'Entrada']
      }
    }
  },
  methods: {
    goToAdmins () {
      this.$router.push('/dash')
    },
    goToSaida () {
      this.$router.push('/saida')
    },
    loadData () {
      api.get('/saida').then((response) => {
        console.log(response.data)
        // this.series = response.data
      })
    }
  },
  components: {
    VueApexCharts
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
</style>
