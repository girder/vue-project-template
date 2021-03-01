import axios from 'axios';
import OauthClient from '@girder/oauth-client';
import * as Sentry from '@sentry/vue';
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(VueCompositionAPI);

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
});

const oauthClient = new OauthClient(
  process.env.VUE_APP_OAUTH_API_ROOT,
  process.env.VUE_APP_OAUTH_CLIENT_ID,
);

Sentry.init({
  Vue,
  dsn: process.env.VUE_APP_SENTRY_DSN,
});

oauthClient.maybeRestoreLogin().then(async () => {
  Object.assign(axiosInstance.defaults.headers.common, oauthClient.authHeaders);

  new Vue({
    provide: {
      axios: axiosInstance,
      oauthClient,
    },
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
});
