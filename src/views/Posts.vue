<template>
  <div>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        <h3 v-text="post.title" @click="$router.push('/post/' + post.id)" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.blogPosts
    }
  },
  created () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style>

</style>