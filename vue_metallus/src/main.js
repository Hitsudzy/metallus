import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import router from './router'
import store from './store'


Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
