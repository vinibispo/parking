<template class="login">
  <v-row align="center" justify="center">
    <v-form
    >
      <v-text-field
        v-model="email"
        label="Email"
        required
      ></v-text-field>
        <v-text-field
            v-model="pass"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
      <v-btn color="success" @click="save()">Login</v-btn>
    </v-form>
  </v-row>
</template>

<script>
import api from '../services/api'
export default {
  data () {
    return {
      show: false,
      email: '',
      pass: ''
    }
  },
  methods: {
    async save () {
      const response = await api.post('/admin/login', { email: this.email, pass: this.pass })
      if (response.status < 400) {
        const user = JSON.stringify({ id: response.data.id, name: response.data.name, email: response.data.email })
        localStorage.setItem('userpark', user)
        this.$emit('save', { email: this.email, pass: this.pass })
      }
    }
  }
}
</script>

<style>

</style>
