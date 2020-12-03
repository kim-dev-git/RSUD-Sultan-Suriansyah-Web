<template>
  <div>
    <loading-page v-if="!post" />
    <v-container v-else>
      <v-row
        class="mx-n1 mx-sm-n2"
      >
        <v-col
          cols="12"
          md="8"
        >
          <!-- <v-layout
            v-if="!post"
            class="align-center justify-center"
          >
            Loading
          </v-layout> -->
          <v-layout
            v-else
            column
            class="content"
          >
            <h1 v-text="post ? post.title : '-'" />
            <v-layout
              class="align-center text--secondary"
            >
              <v-icon v-text="'mdi-pencil'" class="mr-1" />
              <span v-text="post.author.displayName" />
              <v-icon v-text="'mdi-calendar'" class="ml-4 mr-1" />
              <span v-text="toDate(post.published)" />
            </v-layout>

            <v-layout id="post-shares"
              class="my-6"
            >
              <template
                v-for="button in shareButtons"
              >
                  <v-btn
                    :key="button.title"
                    :color="button.color"
                    @click="$router.open(button.link + post.url)"
                    class="mx-2"
                  >
                    <v-icon v-text="button.icon" />
                  </v-btn>
              </template>
            </v-layout>


            <span id="content" v-html="post ? post.content : ''" />
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoadingPage from '../components/LoadingPage.vue'

import { toDate } from '../filter/date'

export default {
  props: ['id'],
  components: {
    LoadingPage
  },
  data: () => ({
    shareButtons: [
      { title: 'Facebook', icon: 'mdi-facebook', color: 'primary', link: 'https://www.facebook.com/sharer.php?u=' },
      { title: 'Twitter', icon: 'mdi-twitter', color: 'info', link: 'https://twitter.com/share?url=' }
    ]
  }),
  computed: {
    post () {
      return this.$store.state.blogPost
    }
  },
  methods: {
    toDate
  },
  created () {
    this.$store.dispatch('getPost', this.id)
  }
}
</script>

<style lang="scss" scoped>
  .content {
    max-width: 100vw;
  }
  img {
    width: 20vw;
    max-height: 100%;
  }
  #content img {
    max-width: 100% !important;
    max-height: 100%;
    margin: auto;
    display: block;
  }
</style>