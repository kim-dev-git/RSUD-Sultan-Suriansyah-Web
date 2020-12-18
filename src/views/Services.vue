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
import post from '../posts/layanan'


export default {
  components: {
    LatestPosts
  },
  data: () => ({
    post,
  })
}
</script>


<style scoped>
  /* @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css') */
</style>