<template>
  <v-container class="fill-height pa-3 pa-md-6 pt-md-0">
    <v-row
      class="fill-height"
    >
      <v-layout
        column
        style="overflow: visible"
      >
        <div
          v-if="loaded"
          :class="$vuetify.breakpoint.smAndUp ? 'sticky' : ''"
        >
          <span
            class="title"
            v-text="'Berita Terbaru'"
          />
          <the-line class="mb-4" />

          <v-layout
            column
          >
            <v-sheet
              v-if="recentPosts.length > 0"
              class="post-container"
              style="cursor: pointer;"
              @click="goTo (recentPosts[0].id)"
            >
              <img :src="recentPosts[0].images[0].url" class="image" width="100%;" height="100%;" />
              <h3
                class="centered headline white--text font-weight-bold pa-4"
                v-text="recentPosts[0].title"
              />
            </v-sheet>

            <template
              v-for="(post, index) in recentPosts"
            >
              <v-layout
                v-if="index > 0"
                column
                :key="'post-' + index"
              >
                <v-layout
                  class="align-center"
                  style="height: 120px; cursor: pointer;"
                  @click="goTo (post.id)"
                >
                  <img :src="post.images[0].url" class="image" width="120px" height="96px" />
                  <span v-html="truncate(post.title, 120)" class="px-4 subtitle-2 font-weight-bold" style="position: relative;" />
                </v-layout>
              </v-layout>

              <v-divider :key="'divider-' + index" class="my-0" />
            </template>

          </v-layout>

        </div>

        <div id="loading"
          v-else
          :class="$vuetify.breakpoint.smAndUp ? 'sticky' : ''"
        >
          Loading...
        </div>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
import TheLine from './TheLine.vue'
export default {
  components: { TheLine },
  props: {
    id: {
      type: String
    }
  },
  data: () => ({
    loaded: false,
  }),
  computed: {
    recentPosts () {
      return this.$store.state.blogRecentPosts
    }
  },
  methods: {
    truncate(text, max) {
      return text.substr(0,max-1)+(text.length>max?'&hellip;':'')
    },
    async getRecentPosts () {
      this.loaded = false
      if (this.recentPosts.length < 1) {
        await this.$store.dispatch('getRecentPosts')
      }
      this.loaded = true
    },
    goTo (postID) {
      let id = this.id

      if (postID !== id) {
        this.$router.push('/post/' + postID)
      } else {
        this.$router.push('/post/')
        this.$router.push('/post/' + postID)
      }
    }
  },
  created () {
    this.getRecentPosts ()
  }
}
</script>

<style lang="scss" scoped>
  .post-container {
    position: relative;
    width: 100%;
  }
  .centered {
    $col_top: rgba(0, 0, 0, 0);
    $col_bot: rgba(0, 0, 0, .8);

    position: absolute;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient($col_top, $col_bot);
  }
</style>