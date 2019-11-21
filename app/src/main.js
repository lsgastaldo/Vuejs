import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import 'vuetify/dist/vuetify.min.css'
import VueSession from 'vue-session'
import VueCharts from 'vue-chartjs'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = true
Vue.use(VueSession)
Vue.use(VueCharts)

Vue.prototype.$baseURL= "https://estacao.fabricadesoftware.ifc.edu.br/sistemaAquisicaoDados/index.php"

new Vue({
  el: "#app",
  vuetify,
  router,
  render: h => h(App)
})

export const eventBus = new Vue()