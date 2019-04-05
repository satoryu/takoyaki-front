import axios from 'axios'

axios.defaults.baseURL = API_HOST
axios.defaults.headers.common['x-functions-key'] = FUNCTION_KEY

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { AppInsights } from 'applicationinsights-js'

const loadApp = async () => {
  await store.dispatch('auth/currentUser')

  if (INSTRUMENTATION_KEY) {
    AppInsights.downloadAndSetup({
      instrumentationKey: INSTRUMENTATION_KEY,
      enableCorsCorrelation: true
    });

    if (store.getters['auth/check'])
      AppInsights.setAuthenticatedUserContext(store.getters['auth/userId'])

    AppInsights.trackPageView()
  }


  new Vue({
    el: "#app",
    components: { App },
    template: '<App/></App>'
  });
}

loadApp()