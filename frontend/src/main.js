import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem('userpark')
  if (isLogged) {
    if (to.name === 'Home') {
      next('/dash')
    }
  } if (!isLogged && to.name !== 'Home') {
    next('/')
  } else {
    next()
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
