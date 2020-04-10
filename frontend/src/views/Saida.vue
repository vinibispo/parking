<template>
  <div class="action">
    <v-row align="center" justify="center">
      <v-form>
        <v-text-field v-model="saida.nome" label="Nome" type="text">
        </v-text-field>
        <v-text-field v-model="saida.tipo" label="Tipo" type="text">
        </v-text-field>
        <v-text-field v-model="saida.valor" label="Valor" type="number">
        </v-text-field>
        <v-btn color="success" @click="save">Enviar</v-btn>
        <v-btn color="primary" @click="goBack">Voltar</v-btn>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  mounted () {
    if (this.id > 0) {
      this.loadData()
    }
  },
  data () {
    return {
      saida: {
        nome: '',
        tipo: '',
        valor: 0
      }
    }
  },
  methods: {
    loadData () {
      api.get(`/saidas/${this.id}`).then(res => {
        if (res.data === '') {
          this.$router.push('/saidas')
        } else {
          this.saida = res.data
        }
      })
    },
    save () {
      if (this.id > 0) {
        api.put(`/saidas/${this.id}`, this.saida).then(res => {
          this.$router.push('/saidas')
        })
      } else {
        api.post('/saidas', this.saida).then(res => {
          this.$router.push('/saidas')
        })
      }
    },
    goBack () {
      this.$router.push('/saidas')
    }
  },
  computed: {
    id () {
      return this.$route.params.id || 0
    }
  }
}
</script>

<style>

</style>
