<template>
  <div class="saidas">
    <v-data-table :headers="headers"
     :items="items" item-key="id">
     <template #item.update="{item}">
       <v-btn color="primary" @click="goToUpdate(item.id)">Atualizar</v-btn>
     </template>
     <template #item.delete="{item}">
       <v-btn color="error" @click="remove(item.id)">Deletar</v-btn>
     </template>
     </v-data-table>
     <v-row justify="center">
       <v-btn color="warning" @click="goBack()">Voltar</v-btn>
       <v-btn color="success" @click="goToAdd()">Adicionar</v-btn>
     </v-row>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      api.get('/saidas').then((response) => {
        this.items = response.data
      })
    },
    goToUpdate (item) {
      this.$router.push(`/saida/${item}`)
    },
    goToAdd () {
      this.$router.push('/saida')
    },
    remove (id) {
      if (confirm('Você tem certeza que deseja deletar?')) {
        api.delete(`/saidas/${id}`).then(res => {
          alert('Finalizou')
          this.loadData()
        })
      }
    },
    goBack () {
      this.$router.push('/box')
    }
  },
  data () {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Nome', align: 'start', value: 'nome' },
        { text: 'Tipo', value: 'tipo' },
        { text: 'Valor', value: 'valor' },
        { text: 'Atualizar', value: 'update' },
        { text: 'Deletar', value: 'delete' }
      ],
      items: []
    }
  }
}
</script>

<style>
</style>
