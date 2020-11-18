<template>
  <v-app>
    <the-navbar />
      <v-main>
        <router-view />
      </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';

export default {
  name: 'App',

  components: {
    TheNavbar,
    TheFooter

  },

  data: () => ({
    //
  }),
};
</script>
