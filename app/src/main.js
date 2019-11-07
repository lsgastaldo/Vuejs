import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import 'vuetify/dist/vuetify.min.css'
import VueSession from 'vue-session'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false
Vue.use(VueSession)

new Vue({
  el: "#app",
  vuetify,
  router,
  render: h => h(App)
})

export const eventBus = new Vue()