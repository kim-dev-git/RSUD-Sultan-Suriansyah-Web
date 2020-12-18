<template>
  <div>
    <v-container>
      <v-row
        class="mx-0 mx-sm-n2">
        <v-col
          cols="12"
          md="8"
        >
          <v-layout
            column
          >
            <p v-html="post" />
          </v-layout>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-divider v-if="$vuetify.breakpoint.mdAndUp" vertical style="position: absolute;" />
          <latest-posts :id="'profile'" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LatestPosts from '../components/LatestPosts.vue'

export default {
  components: {
    LatestPosts
  },
  props: {
    postID: {
      type: String
    }
  },
  data: () => ({
    //
  }),
  computed: {
    post () {
      let data = ''
      if(this.postID) {
        data = require(`../posts/${this.postID}`).default
      }

      return data
    }
  }
}
</script>

<style lang="scss" scoped>
  .blockquote {
    border-left: 3px solid #999999;
    margin-left: 0;
    margin-top: 15px;
    padding-left: 15px;
    font-family: Georgia;
    font-size: 16px;
    font-style: italic !important;
    color: #999999;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    border: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
  }
  .blockquote::before {
    content: '\f10d';
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 10px;
    color: #999999;
  }
  .blockquote::after {
    content: '\f10e';
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-left: 10px;
    color: #999999;
  }
</style>