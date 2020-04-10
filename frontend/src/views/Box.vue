<template>
  <div class="box">
    <h1>Fluxo de Caixa</h1>
    <span :class="{red: isActive}">Total: {{total | currency}}</span>
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
  mounted () {
    this.loadData()
  },
  filters: {
    currency (value) {
      return `${Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)}`
    }
  },
  data () {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 500,
          type: 'pie'
        },
        labels: ['Saída', 'Entrada'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  },
  methods: {
    goToAdmins () {
      this.$router.push('/dash')
    },
    goToSaida () {
      this.$router.push('/saidas')
    },
    loadData () {
      api.get('/entradaesaida').then((response) => {
        this.series = response.data
      })
    }
  },
  components: {
    VueApexCharts
  },
  computed: {
    total () {
      return this.series[1] - this.series[0]
    },
    isActive () {
      return this.total < 0
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    color: #008efa;
  }
  span {
    width: 30px;
    height: 30px;
    color: #54e496;
    margin: 70px;
  }
  .red {
    color: red;
  }
</style>
