import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// @typescript-eslint/ban-ts-ignore
// import { Hello } from '../dist/test-lib.min.js'
import Hello from  '../dist/test-lib.esm'
Vue.use(Hello)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
