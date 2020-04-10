<template>
  <div class="home">
    <Login @save='save'/>
  </div>
</template>

<script>
import Login from '../components/Login'
export default {
  methods: {
    save () {
      this.$on('save', ({ email, pass }) => {
        this.$router.push('/dash')
      })
    }
  },
  components: {
    Login
  }
}
</script>

<style>

</style>
