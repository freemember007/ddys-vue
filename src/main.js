import Vue from 'vue'
import App from './app.vue'
import router from './router/router.js'

Vue.config.debug = true;

const app = new Vue({
  router,
  ...App
}).$mount('#app')