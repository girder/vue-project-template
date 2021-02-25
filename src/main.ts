import axios from 'axios';
import * as Sentry from '@sentry/vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
});

Sentry.init({
  Vue,
  dsn: process.env.VUE_APP_SENTRY_DSN,
});

new Vue({
  provide: {
    axios: axiosInstance,
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
