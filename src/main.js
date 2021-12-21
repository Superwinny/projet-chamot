import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'


new Vue({
  el: '#app',
  vuetify: vuetify,
  router: router,
  ...App,
})
