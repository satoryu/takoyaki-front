import axios from 'axios'

axios.defaults.baseURL = API_HOST
axios.defaults.headers.common['x-functions-key'] = FUNCTION_KEY

import Vue from 'vue';
import App from './App.vue';
import store from './store';

const loadApp = async () => {
  await store.dispatch('auth/currentUser')

  new Vue({
    el: "#app",
    components: { App },
    template: '<App/></App>'
  });
}

loadApp()