<template>
  <div class="saidas">

  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Nome', align: 'start', value: 'nome' },
        { text: 'Tipo', value: 'tipo' },
        {text: 'Valor', value: 'valor'}
      ],
      items: []
    }
  }
}
</script>

<style>

</style>
