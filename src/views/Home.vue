<script lang="ts">
import {
  defineComponent, inject, computed, reactive,
} from '@vue/composition-api';
import OAuthClient from '@girder/oauth-client';

export default defineComponent({
  setup() {
    const injectedClient = inject<OAuthClient>('oauthClient');
    if (injectedClient === undefined) {
      throw new Error('Must provide "oauthClient" into component.');
    }

    const oauthClient = reactive(injectedClient);
    const loginText = computed(() => (oauthClient.isLoggedIn ? 'Logout' : 'Login'));
    const logInOrOut = () => {
      if (oauthClient.isLoggedIn) {
        oauthClient.logout();
      } else {
        oauthClient.redirectToLogin();
      }
    };

    return { oauthClient, loginText, logInOrOut };
  },
});
</script>

<template>
  <v-app-bar app>
    <v-spacer />
    <v-btn
      text
      @click="logInOrOut"
    >
      {{ loginText }}
    </v-btn>
  </v-app-bar>
</template>
