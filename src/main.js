import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueLazyload)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
