<template class="login">
  <v-row align="center" justify="center">
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="email"
        label="Email"
        :rules="emailRules"
        required
      ></v-text-field>
        <v-col cols="12" sm="6">
        <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-col>
      <v-btn color="success">Login</v-btn>
    </v-form>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      email: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
