import Vue from 'vue';

import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

import App from './App.vue';

new Vue({
  el: "#app",
  components: { App },
  template: '<App/></App>'
});
