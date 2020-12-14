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

<style lang="scss">
  .sticky {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 80px;
  }

  .image {
    // width: 100%;
    // height: 100%;
    max-height: 200px;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: .6s;
  }
  .image-hover {
    transform: scale(1.12)
  }
  #post-title {
    color: black;
    transition: .6s;
  }
  #post-title:hover {
    color: #039BE5;
  }
  #post-content img {
    max-width: 200px;
  }
  .separator {
    width: 100px !important;
  }
</style>
